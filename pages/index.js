import Head from 'next/head'
import { Avatar, Grid } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julio Allendes | Programador web </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Container gap={5}>
        <Grid>
          <Avatar 
            src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
            css={{ size: '$20'}}
          />
        </Grid>
      </Grid.Container>
      <main>
        <h1>Julio Allendes</h1>
        
      </main>

    </div>
  )
}
