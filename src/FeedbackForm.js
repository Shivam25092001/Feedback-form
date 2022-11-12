import React from 'react'
import { Space, Divider, Button, Rate, DatePicker, Form, Input, Radio, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './feedback.css'

const FeedbackForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (
    <div>
        <h2>
            Student Feedback Form
        </h2>

        <Form name = "feedback"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                name = "rollno"
                label = "Registration No."
            >
                <Input/>
            </Form.Item>


            <Form.Item
                name = "academic_year"
                label = "Academic Year"
                required
            >
                <Input/>
            </Form.Item>


            <Form.Item
                name = "semester"
                label = "Semester"
                required
            >
                <Input/>
            </Form.Item>


            <Form.Item
                name = "date_filling"
                label = "Date of feedback"
                required
            >
                <DatePicker/>
            </Form.Item>


            <Form.Item
                name = "branch"
                label = "Branch"
                required
            >
                <Input/>
            </Form.Item>

            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Divider />
            </Space>

            <Form.Item
                label="Has the Teacher covered entire Syllabus as prescribed by University?"
            >
                <Form.Item name="response1" label="DBMS">
                <Radio.Group>
                    <Radio value="Yes"> Yes </Radio>
                    <Radio value="No"> No </Radio>
                </Radio.Group>
                </Form.Item>

                <Form.Item name="response2" label="CN">
                <Radio.Group>
                    <Radio value="Yes"> Yes </Radio>
                    <Radio value="No"> No </Radio>
                </Radio.Group>
                </Form.Item>

                <Form.Item name="response3" label="MC">
                <Radio.Group>
                    <Radio value="Yes"> Yes </Radio>
                    <Radio value="No"> No </Radio>
                </Radio.Group>
                </Form.Item>

                <Form.Item name="response4" label="TC">
                <Radio.Group>
                    <Radio value="Yes"> Yes </Radio>
                    <Radio value="No"> No </Radio>
                </Radio.Group>
                </Form.Item>

                <Form.Item name="response5" label="TOC">
                <Radio.Group>
                    <Radio value="Yes"> Yes </Radio>
                    <Radio value="No"> No </Radio>
                </Radio.Group>
                </Form.Item>
            </Form.Item>


            <Form.Item label="Effectiveness of Teacher in terms of">
                <Form.Item label="1. Teaching Content">
                    <Form.Item name="dbms1" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn1" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc1" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc1" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc1" label = "TOC"><Rate/></Form.Item>
                </Form.Item>

                <Form.Item label="2. Communication Skills">
                    <Form.Item name="dbms2" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn2" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc2" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc2" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc2" label = "TOC"><Rate/></Form.Item>
                </Form.Item>


                <Form.Item label="3. Availability beyond normal classes">
                    <Form.Item name="dbms3" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn3" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc3" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc3" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc3" label = "TOC"><Rate/></Form.Item>
                </Form.Item>


                <Form.Item label="4. Pace on which contents were covered">
                    <Form.Item name="dbms4" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn4" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc4" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc4" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc4" label = "TOC"><Rate/></Form.Item>
                </Form.Item>


                <Form.Item label="5. Overall effectiveness">
                    <Form.Item name="dbms5" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn5" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc5" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc5" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc5" label = "TOC"><Rate/></Form.Item>
                </Form.Item>
            </Form.Item>


            <Form.Item label="How do you rate the contents of the curriculam ?">
                    <Form.Item name="dbms6" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn6" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc6" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc6" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc6" label = "TOC"><Rate/></Form.Item>
            </Form.Item>


            <Form.Item label="How do you rate lab experiments, if applicable ?">
                    <Form.Item name="dbms7" label = "DBMS"><Rate/></Form.Item>
                    <Form.Item name="cn7" label = "CN"><Rate/></Form.Item>
                    <Form.Item name="mc7" label = "MC"><Rate/></Form.Item>
                    <Form.Item name="tc7" label = "TC"><Rate/></Form.Item>
                    <Form.Item name="toc7" label = "TOC"><Rate/></Form.Item>
            </Form.Item>


            <Row gutter={[8,8]}>
                <Col>
                <Form.Item
                    name = "remarks"
                    label = "Remarks"
                >
                    <Input/>
                </Form.Item>
                </Col>

                <Col>
                <Form.Item
                    name = "cgpa"
                    label = "CGPA"
                >
                    <Input/>
                </Form.Item>
                </Col>

                <Col>
                <Form.Item
                    name = "attendance"
                    label = "Attendance"
                >
                    <Input/>
                </Form.Item>
                </Col>
            </Row>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default FeedbackForm