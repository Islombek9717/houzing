import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  margin: auto;
  width: 100%;
  max-width: 1440px;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Setting = styled(setting)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #ffff;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const SelectAnt = styled(Select)`
  width: 100%;
  min-width: 150px;
  max-width: 150px;
  .ant-select-selector {
    height: 44px !important;
  }

  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
