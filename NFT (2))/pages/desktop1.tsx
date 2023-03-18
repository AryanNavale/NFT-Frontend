import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./desktop1.module.css";

const Desktop1: NextPage = () => {
  const router = useRouter();

  const onExploreTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.desktop1}>
      <div className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.explore} onClick={onExploreTextClick}>
          Explore
        </div>
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
      <div className={styles.searchAndDivider}>
        <img className={styles.icon} alt="" src="/3-573@2x.png" />
        <b className={styles.revolution}>Revolution</b>
        <div className={styles.searchBar} />
        <img
          className={styles.icroundSearchIcon}
          alt=""
          src="/icroundsearch.svg"
        />
        <div className={styles.nameIsTheContainer}>
          <p
            className={styles.nameIsThe}
          >{`(Name) is the premier NFT marketplace for beginners, experts, and everyone in-between - `}</p>
          <p className={styles.nameIsThe}>
            without the hassle of Hidden Fees and Bot exploits.
          </p>
        </div>
        <div className={styles.trackDownExclusive}>
          Track down exclusive NFTs from Top Creators.
        </div>
        <div className={styles.discoverTheNft}>Discover the NFT</div>
        <img
          className={styles.searchAndDividerChild}
          alt=""
          src="/vector-3.svg"
        />
        <img
          className={styles.searchAndDividerItem}
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <img className={styles.icon1} alt="" src="/2-3@2x.png" />
      <div className={styles.subsBar}>
        <img className={styles.icon2} alt="" src="/4-2@2x.png" />
        <b className={styles.neverMissA}>Never Miss a Drop!</b>
        <div className={styles.subscribeToOur}>
          Subscribe to our ultra-exclusive drop list and be the first to know
          about upcoming NFT drops.
        </div>
        <div className={styles.subsBarChild} />
        <div className={styles.email}>Email</div>
        <div className={styles.subsBarItem} />
        <div className={styles.subscribe}>Subscribe</div>
        <img className={styles.subsBarInner} alt="" src="/vector-5.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector-6.svg" />
      </div>
      <div className={styles.createNftsFor}>
        Create NFTs for your Community.
      </div>
      <div className={styles.desktop1Inner} />
      <div className={styles.more}>More</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.startSelling}>Start Selling</div>
      <div className={styles.ourPlatformOffersContainer}>
        <p
          className={styles.nameIsThe}
        >{`Our platform offers a seamless and accessible way to turn your artwork, videos, music and more into one-of-a-kind, `}</p>
        <p
          className={styles.nameIsThe}
        >{`ownership-verified assets that can be bought and sold globally. `}</p>
        <p
          className={styles.nameIsThe}
        >{`Unleash the full potential of your digital creations and start creating NFTs now on our website. `}</p>
      </div>
      <div className={styles.nameLogo}>{`Name & Logo`}</div>
      <div className={styles.otherUsefulInfo}>other useful info.</div>
      <div className={styles.otherUsefulInfo1}>other useful info.</div>
      <div className={styles.otherUsefulInfo2}>other useful info.</div>
      <a className={styles.dropsTab}>
        <div className={styles.latestDrops}>Latest Drops</div>
        <div className={styles.dropsTabChild} />
        <div className={styles.dropsTabItem} />
        <div className={styles.dropsTabInner} />
        <div className={styles.dropsTabChild1} />
        <div className={styles.dropsTabChild2} />
        <div className={styles.dropsTabChild3} />
        <div className={styles.dropsTabChild4} />
        <div className={styles.dropsTabChild5} />
        <div className={styles.dropsTabChild6} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-7.svg" />
        <div className={styles.dropsTabChild7} />
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
      </a>
    </div>
  );
};

export default Desktop1;
