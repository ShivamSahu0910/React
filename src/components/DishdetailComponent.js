import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

 class DishDetail extends Component {

    renderDish() {
        const selectDish = this.props.dish;

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

    renderComments(selectDish) {
        
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
     
    render() {
        return(
            <div className= "container">
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish()}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
            </div>
        );
    }

 }

 export default DishDetail;