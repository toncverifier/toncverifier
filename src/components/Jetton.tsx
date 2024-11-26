import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useJettonContract } from "../hooks/useJettonContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";

export function Jetton() {
  const { connected } = useTonConnect();
  const { transfer, jettonWalletAddress, balance } = useJettonContract();

  return (
    <Card title="REAL">
      <FlexBoxCol>
        <h3>REAL</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{jettonWalletAddress}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <Ellipsis>{Balance}</Ellipsis>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            transfer();
          }}
        >
         Get $REAL
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
