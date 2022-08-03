import React from 'react';
import './WorkSection.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const WorkSection = () => {
    return (
        <div className='container'>
            <h1 className='work'>Working section</h1>


            <CardGroup>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://images.unsplash.com/photo-1546817372-628669db4655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    {/* <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body> */}

                </Card>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

                </Card>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwd29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

                </Card>

            </CardGroup>
            <CardGroup>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://media.istockphoto.com/photos/gym-is-a-way-of-life-picture-id474068730?b=1&k=20&m=474068730&s=170667a&w=0&h=NoKpdwwwqNEDNva0cfU-M_dCmB3dcw-LgFj4r9jEsHs=" />

                </Card>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltJTIwd29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />

                </Card>
                <Card>
                    <Card.Img className="d-block w-100 images" variant="top" src="https://images.unsplash.com/photo-1601986313624-28c11ac26334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />

                </Card>
            </CardGroup>


        </div>
    );
};

export default WorkSection;