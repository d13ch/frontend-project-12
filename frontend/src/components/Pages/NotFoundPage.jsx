import React from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <Container className="h-100" fluid>
      <Row className="h-100 justify-content-center align-items-center">
        <Col md="6" xxl="6">
          <Card className="my-5 py-5 h-100 shadow justify-items-center align-items-center">
            <Card.Body>
              <Card.Title className="text-center">
                <h1>404</h1>
              </Card.Title>
              <h2>{t('notFoundPage.notFound')}</h2>
              <hr />
              <Card.Text className="text-center">
                {t('notFoundPage.backTo')}
                {' '}
                <a href="/">{t('notFoundPage.mainPage')}</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;