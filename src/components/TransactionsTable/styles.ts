import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: #969cb3;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #29292e;
      color: #969cb3;
      border-radius: 0.25rem;

      &:first-child {
        color: #969cb3;
      }

      &.deposit {
        color: #33cc95;
      }

      &.withdraw {
        color: #e52e4d;
      }
    }
  }
`;

export const Button = styled.button`
  color: #e52e48;
`;
