import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export const TreeView = () => {
    return (
        <Box sx={{ minHeight: 352, minWidth: 250, marginTop: 2 }}>
            <SimpleTreeView>
                <TreeItem itemId="formacion" label="Formacion" onClick={() => navigatio}>
                    <TreeItem itemId="grid-community" label="Teleformacion" />
                    <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                    <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
                <TreeItem itemId="I+i" label="I+i">
                    <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                    <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                </TreeItem>
                <TreeItem itemId="construccion" label="Construccion">
                    <TreeItem itemId="charts-community" label="@mui/x-charts" />
                </TreeItem>
                <TreeItem itemId="amiente" label="Medio amiente">
                    <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                </TreeItem>
                <TreeItem itemId="calidad" label="Calidad">
                    <TreeItem itemId="tree-view-community-asd" label="@mui/x-tree-view" />
                </TreeItem>
                <TreeItem itemId="contacto" label="Contacto">
                    <TreeItem itemId="tree-view-community-asdffg" label="@mui/x-tree-view" />
                </TreeItem>
            </SimpleTreeView>
        </Box>
    );
}
