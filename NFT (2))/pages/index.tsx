import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Desktop2: NextPage = () => {
  const router = useRouter();

  const onLogoTextClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div className={styles.desktop2}>
      <div className={styles.desktop2Child} />
      <div className={styles.header}>
        <div className={styles.logo} onClick={onLogoTextClick}>
          Logo
        </div>
        <div className={styles.explore}>Explore</div>
        <div className={styles.create}>Create</div>
        <div className={styles.drops}>Drops</div>
        <div className={styles.headerChild} />
        <div className={styles.connectWallet}>Connect Wallet</div>
      </div>
      <img
        className={styles.headerDividerIcon}
        alt=""
        src="/header-divider.svg"
      />
      <div className={styles.explore1}>Explore</div>
      <div className={styles.dropsTab}>
        <div className={styles.dropsTabChild} />
        <div className={styles.dropsTabItem} />
        <div className={styles.dropsTabInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.dropsTabChild1} />
        <div className={styles.dropsTabChild2} />
        <div className={styles.dropsTabChild3} />
        <div className={styles.dropsTabChild4} />
        <div className={styles.dropsTabChild5} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-7.svg" />
        <div className={styles.dropsTabChild6} />
        <img
          className={styles.dc1f2f2d99cad863c10395c9173b1Icon}
          alt=""
          src="/159dc1f2f2d99cad863c10395c9173b1-1@2x.png"
        />
        <img
          className={styles.y0jrmjoklsFtjk1feh5l1j0LajfpIcon}
          alt=""
          src="/y0jrmjoklsftjk1feh5l1j0lajfpgqy9ibhrvzrg8lxbduu-4eyneullhawpklbzhc7rzo2vrj0jqpc8cwo61ddagjalhunj-1@2x.png"
        />
        <img
          className={styles.c617e0f492e49296abe247c8430a58Icon}
          alt=""
          src="/c617e0f492e49296abe247c8430a58dc-1@2x.png"
        />
        <img
          className={styles.fb5c12057a136522a82229dedbca1Icon}
          alt=""
          src="/3572fb5c12057a136522a82229dedbca-1@2x.png"
        />
        <img
          className={styles.bc37a6269630d2c134015ec0d8d47dIcon}
          alt=""
          src="/2bc37a6269630d2c134015ec0d8d47d2-1@2x.png"
        />
        <img
          className={styles.f5a1b20ea19a528edc8531794d6602Icon}
          alt=""
          src="/f5a1b20ea19a528edc8531794d6602e8-1@2x.png"
        />
        <div className={styles.azuki6970}>Azuki #6970</div>
        <div className={styles.cyberkong6970}>CyberKong #6970</div>
        <div className={styles.doodle6970}>Doodle #6970</div>
        <div className={styles.azuki69701}>Azuki #6970</div>
        <div className={styles.mutatedApe6970}>Mutated Ape #6970</div>
        <div className={styles.div}>#6970</div>
        <div className={styles.eth}>69 ETH</div>
        <div className={styles.eth1}>69 ETH</div>
        <div className={styles.eth2}>69 ETH</div>
        <div className={styles.eth3}>69 ETH</div>
        <div className={styles.eth4}>69 ETH</div>
        <div className={styles.eth5}>69 ETH</div>
      </div>
      <div className={styles.dropsTab1}>
        <div className={styles.dropsTabChild} />
        <div className={styles.dropsTabItem} />
        <div className={styles.dropsTabInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.dropsTabChild1} />
        <div className={styles.dropsTabChild2} />
        <div className={styles.dropsTabChild3} />
        <div className={styles.dropsTabChild4} />
        <div className={styles.dropsTabChild5} />
        <img className={styles.dropsTabChild16} alt="" src="/rectangle-7.svg" />
        <div className={styles.dropsTabChild6} />
        <img
          className={styles.dc1f2f2d99cad863c10395c9173b1Icon}
          alt=""
          src="/159dc1f2f2d99cad863c10395c9173b1-1@2x.png"
        />
        <img
          className={styles.y0jrmjoklsFtjk1feh5l1j0LajfpIcon}
          alt=""
          src="/y0jrmjoklsftjk1feh5l1j0lajfpgqy9ibhrvzrg8lxbduu-4eyneullhawpklbzhc7rzo2vrj0jqpc8cwo61ddagjalhunj-1@2x.png"
        />
        <img
          className={styles.c617e0f492e49296abe247c8430a58Icon}
          alt=""
          src="/c617e0f492e49296abe247c8430a58dc-1@2x.png"
        />
        <img
          className={styles.fb5c12057a136522a82229dedbca1Icon}
          alt=""
          src="/3572fb5c12057a136522a82229dedbca-1@2x.png"
        />
        <img
          className={styles.bc37a6269630d2c134015ec0d8d47dIcon}
          alt=""
          src="/2bc37a6269630d2c134015ec0d8d47d2-1@2x.png"
        />
        <img
          className={styles.f5a1b20ea19a528edc8531794d6602Icon}
          alt=""
          src="/f5a1b20ea19a528edc8531794d6602e8-1@2x.png"
        />
        <div className={styles.azuki6970}>Azuki #6970</div>
        <div className={styles.cyberkong6970}>CyberKong #6970</div>
        <div className={styles.doodle6970}>Doodle #6970</div>
        <div className={styles.azuki69701}>Azuki #6970</div>
        <div className={styles.mutatedApe6970}>Mutated Ape #6970</div>
        <div className={styles.div}>#6970</div>
        <div className={styles.eth}>69 ETH</div>
        <div className={styles.eth1}>69 ETH</div>
        <div className={styles.eth2}>69 ETH</div>
        <div className={styles.eth3}>69 ETH</div>
        <div className={styles.eth4}>69 ETH</div>
        <div className={styles.eth5}>69 ETH</div>
      </div>
    </div>
  );
};

export default Desktop2;
