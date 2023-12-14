import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { Signups } from 'src/sections/overview/overview-signups';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

const now = new Date();

const Page = () => {
  const [myData, setMyData] = useState([]);

  function getRandomValue() {
    return 100;
  }

  useEffect(() => {
    // axios.get('http://172.188.16.207:7300/pass?requester_type=SYSTEM')
    //   .then(response => {
    //     console.log(response)
    //     setMyData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });

    const _myData = { label: 'Onboarding Success Rate', value: 100, label2: 'Category B', value2: 100 };

    setMyData(_myData)
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <Head>
        <title>
          EOT Metrics
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
          >
            {/* {myData.map(item => (

// <div key={item.label}>{item.value}</div>
))} */}


<Grid
              xs={12}
              md={6}
              lg={4}
            >

              <Signups
              
                chartSeries={[5, 13]}
                labels={['Onboarded', 'Not Onboarded']}
                sx={{ height: '100%' }}
              />
            </Grid>

            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              
              <OverviewTraffic
                chartSeries={[3, 2]}
                labels={['Opened Locker', 'Has not open locker']}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalCustomers
                title={myData.label}
                difference={15}
                positive={true}
                sx={{ height: '100%' }}
                value="100%"
              />
            </Grid>
            
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <OverviewTotalCustomers
                title={myData.label}
                difference={15}
                positive={true}
                sx={{ height: '100%' }}
                value="60%"
              />
            </Grid>

            
            <Grid
              xs={12}
              md={6}
              lg={4}
            >
              
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={['Desktop', 'Tablet', 'Phone']}
                sx={{ height: '100%' }}
              />
            </Grid>
            {/* <Grid
              xs={12}
              md={6}
              lg={4}
            >
              <OverviewLatestProducts
                products={[
                  {
                    id: '5ece2c077e39da27658aa8a9',
                    image: '/assets/products/product-1.png',
                    name: 'Healthcare Erbology',
                    updatedAt: subHours(now, 6).getTime()
                  },
                  {
                    id: '5ece2c0d16f70bff2cf86cd8',
                    image: '/assets/products/product-2.png',
                    name: 'Makeup Lancome Rouge',
                    updatedAt: subDays(subHours(now, 8), 2).getTime()
                  },
                  {
                    id: 'b393ce1b09c1254c3a92c827',
                    image: '/assets/products/product-5.png',
                    name: 'Skincare Soja CO',
                    updatedAt: subDays(subHours(now, 1), 1).getTime()
                  },
                  {
                    id: 'a6ede15670da63f49f752c89',
                    image: '/assets/products/product-6.png',
                    name: 'Makeup Lipstick',
                    updatedAt: subDays(subHours(now, 3), 3).getTime()
                  },
                  {
                    id: 'bcad5524fe3a2f8f8620ceda',
                    image: '/assets/products/product-7.png',
                    name: 'Healthcare Ritual',
                    updatedAt: subDays(subHours(now, 5), 6).getTime()
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid> */}
            
          </Grid>
        </Container>
      </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
