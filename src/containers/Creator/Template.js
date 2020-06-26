import React from 'react';
import { Container } from 'reactstrap';

import DocumentPreview from '../../components/JBBuilder/JBDocumentPreview';

const Template = ({queryParams, template}) => {
    return (
        <Container>
            <DocumentPreview mdTemplate={template} />
        </Container>
    )
}

export default Template;