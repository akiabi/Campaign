import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';
import { Image, Item } from 'semantic-ui-react'


class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            
            <a>View Campaign</a>
          </Link>

        ),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>

         <Item.Group>


<Item>
      

      <Item.Content>
        <Item.Header as='a'>What do we do?</Item.Header>
        <Item.Meta></Item.Meta>
        <Item.Description>
          
        </Item.Description>
        <Item.Extra>Our decentralized Application platform is a place where public can donate crypto currencies to any of the partnered NGO's. It can help local charities promote their campaigns internationally by receiving cryptocurrency donations. The crypto currency they donate is completely transparent on how the NGO's use them. Block chain technology allows donors to trace transactions on a public platform in real time. Donors can see how funds are spent and ensure they reach their final destination. Project results are shared for direct engagement with people as well. The NGO can start campaigns by this way public can donate to campaigns and can rest assured that any funds spent inside the platform will never be misused. The app data such as user details, campaign documents, etc. are stored in our platform is completely decentralized. Not only this, the non volunteers will be given rewards in form of crypto currency.  The rewards will be of our own crypto currency that we will be generating in future.
</Item.Extra>
      </Item.Content>
    </Item>


    
    
    <Item>
      

      <Item.Content>
        <Item.Header as='a'>Donate to a cause you believe in</Item.Header>
        <Item.Meta></Item.Meta>
        <Item.Description>
          
        </Item.Description>
        <Item.Extra></Item.Extra>
      </Item.Content>
    </Item>




      

      
  </Item.Group>







      </Layout>
    );
  }
}

export default CampaignIndex;