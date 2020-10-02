import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


    function RenderDish({selectDish}) {

        if (selectDish != null) {
            return(
                <Card>
                    <CardImg width='100%' src={selectDish.image} alt={selectDish.name} />
                    <CardBody>
                        <CardTitle>{selectDish.name}</CardTitle>
                        <CardText>{selectDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({selectDish}) {
        
        if (selectDish != null) {
            
            const coms = selectDish.comments.map((com) => {
                
                return (
                    <ul key={com.id} className='list-unstyled'>
                        <li>
                            {com.comment}
                        </li>
                        <li>
                            -- {com.author}, { }
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    month: 'short', day: '2-digit', year: 'numeric' 
                                }).format(new Date(com.date))
                            }
                        </li>
                    </ul>
                );
            });
            
            return (
                <div>
                    <h4>Comments</h4>
                    {coms}
                </div>
            );


        } else {
            return (
                <div></div>
            );
        }
    }
     
    const DishDetail = (props) => {
        return(
            <div className= "container">
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDish selectDish={props.dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments selectDish={props.dish} />
                </div>
            </div>
            </div>
        );
    }

 export default DishDetail;