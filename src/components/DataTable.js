import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import userData from '../users.json';

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

const DataTable = () => (
  <Table data={userData} height={1000}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="first_name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Last Name</HeaderCell>
      <Cell dataKey="last_name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell dataKey="email" />
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Image</HeaderCell>
      <ImageCell dataKey="image" />
    </Column>
  </Table>
);

export default DataTable;
