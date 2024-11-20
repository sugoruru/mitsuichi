/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  let lang = searchParams.get("lang");
  console.log(lang);
  if (lang === null) {
    lang = "ja";
  }
  return (
    <div>
      <div className="h-10 bg-[#1c1c1c]"></div>
      <div className="mx-auto w-[90%] bg-white my-10 text-[0.8rem] lg:text-[1.3rem] p-10 font-semibold">
        <div className="table w-full">
          <div className="my-auto table-cell">
            <p style={{ lineHeight: "1" }} className="mincho">
              「{lang === "ja" ? "真偽信仰" : "Faith and False"}」
            </p>
          </div>
          <div className="flex justify-end">
            <Link href="/novel?lang=ja">
              <img src="/img/ja.png" alt="" width={32} />
            </Link>
            <span>/</span>
            <Link href="/novel?lang=en">
              <img src="/img/en.png" alt="" width={32} />
            </Link>
          </div>
        </div>
        <br />
        {lang === "ja" ? (
          <>
            <p>
              &emsp;俺にとって、この神社、三一神社は特別な場所だった。この地域の人間は、この神社を信仰していて、その
              影響で俺も小さい頃からこの神社を信仰していた。昔はよくここに通って遊んだり、お参りしたりしていて、この
              神社が大好きだった。……だけど、それはもう過去の話。今はもうここを訪れなくなった。だが、信仰が消えた、というわけではない。俺が、三一神社を嫌いになった。ただそれだけなのだ。
            </p>
            <br />
            <p>
              &emsp;……今からだと二十年くらい前かな。三一神社には一人の巫女がいた。歳は俺より一つ上で、明るく活発
              で、優しい人だった。俺が幼少期からここに通っていたこともあり、その巫女とはとても仲が良かった。彼女の
              家の事情で個人的な理由で他人に会うことはほぼ認められていなかったが、俺達は大人の目を盗んでこっそり神社裏の雑木林に入り一緒に遊んでいた。
            </p>
            <br />
            <p>
              &emsp;しかし、神事の時の彼女はいつもとは全く違った。三一神社に祀られている神は祟り神で、鎮めないとこの
              地域に大災害をもたらす。そのため、巫女はこの神を鎮めるために様々な儀式を執り行う。歴代の巫女たち
              のお陰で、この地域には長い間平穏が続いた。そして彼女もまた、二十歳に満たない若さで様々な儀式に出て神を鎮め、平穏を保っていた。そのため、彼女にも自然と信仰が集まっていった。
            </p>
            <br />
            <p>
              &emsp;だが、時が過ぎていくにつれて、彼女は溜息を吐くことが多くなった。心配になった俺は一度、彼女に「その
              仕事、辛くないの？」と聞いた。彼女は俺とそう変わらない年齢でかなり精神的負担のかかる仕事をさせられ
              ているので、辛くないはずがないと、俺はそう思っていた。しかし、彼女は俺の予想に反し辛くないと言って微笑んだ。彼女がそう言うのなら……と俺は信じ込んで何も疑わなかった。
            </p>
            <br />
            <p>
              &emsp;その年の夏、かつてない規模の嵐がこの地域全体を襲った。その嵐は、この地に災害なんて来ないだろうと
              油断していた住民たちを嘲笑うかのようにこの地域を破壊していった。街や田畑は荒れ、死者も何名か出た。
              これ以降、この地域を様々な災害が襲った。街や田畑はなかなか復興できず、死傷者は増えるばかり。この地域に以前までの面影は殆どなかった。……だけど、俺にとっての悲劇はここからだった。
            </p>
            <br />
            <p>
              &emsp;この地域の人間は、三一神社を信仰している。ここの御神体は鎮めないと災害が降り注ぐ祟り神、そして巫女の仕事はこの神を鎮めること。この地域の人間は、災害が起きたのは巫女の怠慢のせいだと言って、今まで神だと崇め讃えてきた巫女を責め始めたのだ。
            </p>
            <p>
              &emsp;だが、俺は知っていた。彼女が怠ることなく儀式を行っていたことを。いつもは活発な彼女だが、儀式のとき
              は人一倍集中して臨んでいたことを。彼女が、巫女としての責務を果たしていたことを。しかし、彼女と特別仲
              のいい訳でもないこの地域の住民がそれを知るはずもなく、彼女を責める声は日に日に大きくなっていった。
              そんな状況でも、彼女は微笑み、大丈夫だと言っていた。しかし、今回ばかりは俺もその言葉を疑わざるを得なかった。彼女は……以前よりもやつれていたから。
            </p>
            <br />
            <p>
              &emsp;秋も終わりに近いある日、俺は彼女に会うためにいつも通り雑木林に向かった。しかし、いくら探しても彼女が見当たらない。神社を見てみたが、そこにも彼女はいなかった。まさか……！？
              最悪な考えが頭をよぎった。俺は彼女を探すため、走り出した。
            </p>
            <br />
            <p>&emsp;本能のままに走って、気がつけばもう夕暮れというときに、池のほとりに彼女が見えた。彼女も俺に気づき、こちらを振り返った。俺は急いで彼女のもとに駆け寄ろうとした。</p>
            <p>
              &emsp;……だが、彼女は拒絶するようなふりをして、俺を遠ざけようとした。その行動に一瞬困惑した俺は失速す
              る。そのときだった。……瞬きしてそちらを向くと、そこには……胸に何かが刺さって今にも倒れそうな彼女と、
              知らない数人の男達が見えた。俺は急いで走り、手を伸ばす。そして必死に、必死に手を伸ばして、彼女の手
              をつかもうとする。彼女を助けたい。その一心で、手を伸ばす。……だけど、俺の願いは神には届かず……彼
              女は、池に落ちていった。俺も体勢を崩し、地面に倒れ込む。体のあちこちが擦り剥け、泣きたいほど痛かった。だが、それ以上に俺の大切な人が目の前で消えたことに対してのショックが大きかった。
            </p>
            <br />
            <p>
              &emsp;ふと顔を上げると、数人の男達が帰っていくのが見えた。手には、かなり大きく尖った石が握られていた。俺
              はそれを見て、状況を理解した。彼女は、この男達に石を投げられて、それが胸に突き刺さって、倒れて池に
              落ちた、ということなのだろう。そして恐らく、彼女はもう助からない。今は病院も、診療所も、彼女の家族です
              ら彼女の敵だ。治療は不可能に近い。その現実を理解した瞬間、目から涙が溢れた。……ああ、そうだ。とに
              かく悔しい。なんで、何もできなかったんだ。彼女の様子を見れば、こうなることくらい容易に想像できたのに。
              いや、諦めたらだめだ。まだ助かるかもしれない。俺はそう考えて立ち上がり、池に飛び込んだ。傷が痛むが、関係ない。俺は、彼女を助けないといけない。俺はとにかく泳ぎ続け、そして……
            </p>
            <br />
            <p>
              &emsp;俺達はなんとか陸に上がった。彼女の傷は深く出血も酷かったが、まだ少し温かかった。池は彼女の血で紅
              く染まっていた。止血を試みたが、血が止まる気配はなかった。……この出血量じゃ、彼女は助からない。そ
              の現実に、気づいた。信じたくなかった。認めたくなかった。だが、現実は残酷だった。俺は彼女を抱きかかえ、泣いた。なんで、彼女がこんな目に遭わなければならなかったのか？
              考えてもわからない。だから、ただ泣くことしかできなかった。彼女の温もりは段々と失われていき……ついには消えてしまった。……彼女は、死
              んだ。その事実を実感し、俺はさらに大きな声で泣いた。辺りが暗くなっていく中、俺は一人の少女を抱きかかえてただ、泣いていた。
            </p>
            <br />
            <p>
              &emsp;俺はあの事件があって以降、彼女のことを忘れたことは一度きりともない。それだけ、俺にとって大事な人
              だった。だけど、世間はそんなこと全く知らないから、この地域では彼女が悪だとして伝わっている。この地域
              を滅ぼそうとして大災害を起こした許されない悪だ、と。そして、そういう風にこの事件を広めたのは他の何で
              もない、三一神社だ。三一神社がこの事件についての黄色い大きな看板を立てて、彼女だけを悪に仕立て上
              げたのだ。俺はそれを知り、この地域に嫌気が差したため、今はここを離れて都会で暮らしている。だが……彼女の命日だけはここに戻ってくると決めている。
            </p>
            <br />
            <p>
              &emsp;今日、三一神社では悪滅祭といって、悪……彼女が退治された日としてお祭りが行われている。この祭りの
              メインイベントはストラックアウト。彼女を殺した方法が石を投げることであったため、そこから着想を得てスト
              ラックアウトをやっているらしい。勿論、祭りに参加している人は彼女のことを全く知らないから、間違った認識で遊んでいる。これは、過去この地域を滅ぼしかけた悪を滅ぼした勇者になりきる遊びだと。
            </p>
            <br />
            <p>&emsp;あくまで俺の推測だが、歴代の巫女が鎮めてきた災害が、たまたま彼女の代に発散されただけじゃないだろうか？彼女はそのときたまたま巫女だっただけにすぎなかったのではないだろうか？</p>
            <br />
            <p>&emsp;この地域の人間は、三一神社を信仰している。だから、良いことは巫女のおかげだし、悪いことは巫女のせいになる。本当は誰のせいでもないのに。</p>
            <br />
            <p>
              &emsp;背負う覚悟もない責任を押し付けて、自分は逃げる。結局、信仰はそんな儚き人間の為のものでしかない。
              責任の押し付け先でしかない。だから、信仰を一手に受け持つ者の負担は自然と大きくなってしまう。その負担が原因で信仰対象がなくなれば、自分達の逃げ道も無くなるのに……。
            </p>
            <br />
            <p>
              &emsp;あの後新しい巫女が就任し、この地域には平穏が戻った。だけど、この地域の人間は自分で自分の逃げ道を殺した。そして、誰かの大切な人を奪った。その事実は、変わらない。
              「……なんで誰も、疑わないんだろうな」誰も居ない空に向かって問いかけ、神社を去る。……いつか、この真実が認められることを願って。
            </p>
          </>
        ) : (
          <>
            <p>
              &emsp;For me, this shrine was a special place. It is called Mitsuichi Shrine.Everyone in the area has faith in this shrine, so I also had faith in it since I was a little child.I used to
              go there often to play and pray, and I loved it. ……but that was a long time ago. I don&apos;t visit this place anymore.However, my faith has not disappeared.Ever since one incident, I
              have come to hate the Mitsuichi Shrine.That&apos;s the only reason I don&apos;t visit it anymore.
            </p>
            <br />
            <p>
              &emsp;……I think it&apos;s about 20 years ago now.At the Mitsuichi Shrine, there was a shrine maiden who was older than me, bright, active, and kind. I had been coming here since I was a
              child and was very close with the shrine maiden there. Although the rules of her house almost never allowed her to see her friends for private reasons, we managed to pull the wool over
              her parents&apos; eyes and would sneak into the forest behind the shrine and play together.
            </p>
            <br />
            <p>
              &emsp;However, she was very different from usual during the ritual. The god enshrined at the Mitsuichi Shrine is a possessed god who, if not appeased, will bring great disaster to the
              area. Therefore, the shrine maiden performs various rituals to appease this god. Thanks to predecessor shrine maidens, the area remained peaceful for a long time. And she, too, at the
              young age of less than 20, participated in various rituals to appease the god and maintain peace. As a result, she, too, came to be believed in.
            </p>
            <br />
            <p>
              &emsp;But as time went on, she began to sigh more often. I became concerned and once asked her, &quot;Isn&apos;t this job hard?&quot; Even though she was not much older than me, she had
              a very mentally demanding job. So I thought she was having a hard time. But she smiled and said, contrary to my expectations, &quot;I am not having a hard time. So I believed her and
              didn&apos;t doubt her.
            </p>
            <br />
            <p>
              &emsp;That summer, a big storm struck the area. The storm devastated the region, as if to ridicule the residents who had been caught off guard, believing that no disaster would ever
              come. Towns and fields were destroyed, and there were many casualties. After this, the area was hit by many more disasters. Reconstruction was not easy, and the number of casualties kept
              rising. The area had hardly any resemblance to what it used to be. ……but my story of grief started here.
            </p>
            <br />
            <p>
              &emsp;The people of this area believe in the Mitsuichi Shrine. The god enshrined here is a possessed god who will bring disaster if not appeased, and the shrine maiden&apos;s job is to
              appease this god. So people began to blame the shrine maiden, whom they had believed to be gods, saying that it was her negligence that caused the disaster. But I knew that she was
              performing the rituals diligently, that she was usually very active, but during the rituals she was even more focused than others, and that she was fulfilling her duties as a shrine
              maiden. However, the residents of the area did not know that, so their criticism of her grew louder. Despite the situation, she smiled and said she was fine. This time, however, I
              doubted her words because she was not as well as before.
            </p>
            <br />
            <p>
              &emsp; One day toward the end of autumn, I went to the forest to see her as usual.But I couldn&apos;t find her.So I visited the shrine, but she was not there.Where could she have gone…
              maybe… The worst possible scenario crossed my mind, but I ran to find her.
            </p>
            <br />
            <p>
              &emsp;I ran on instinct and finally found her by the pond at dusk. She noticed me too and turned around. I tried to get to her quickly. But she walked away from me. I was confused by
              this behavior of hers. Then it happened. When I looked over there, I saw her about to break down with something stuck in her chest and a few men I didn&apos;t know. I run quickly and
              reach for my hand.Then I try very hard to reach for my hand and try to grab her hand.I want to help her. But my wish didn&apos;t come true and …… she fell into the pond. I too lose my
              stance and fall to the ground. I had injuries all over my body and was in so much pain that I wanted to cry.But even more shocking was the fact that my special someone disappeared right
              in front of my eyes.
            </p>
            <br />
            <p>
              &emsp;I looked up and saw a few men leaving. They had a big, sharp stone in their hands. I saw it and understood the situation. Maybe she was thrown a stone by these men, which stuck in
              her chest, and she fell into the pond. And likely, she will no longer survive. Now hospitals, clinics, and even her family are her enemies, so treatment is impossible.The moment I
              realized this reality, My eyes naturally teared up. No, I thought, “Don&apos;t give up yet.” And I got up and jumped into the pond.
            </p>
            <br />
            <p>
              &emsp;I held her in my arms and managed to get out of the water. That point in the pond was red with her blood. It was the worst possible consequence for me. I held her cold in my arms
              and cried all the time.
            </p>
            <br />
            <p>
              &emsp;I have never forgotten her since that incident. She was that important to me. But the world doesn&apos;t know the truth, so she is passed off as evil in this area. She is said to
              be the unforgivable evil that caused the great catastrophe in an attempt to destroy this area. The Mitsuichi Shrine spread the word that she was an unforgivable evil who had caused a
              great disaster in an attempt to destroy the area. The Sanichi Shrine built a big yellow billboard about this incident, making her the only evil one. I&apos;m so fed up with this area
              because of it that I&apos;m living in an urban town far from here now. But I have my heart set on coming back here only on the anniversary of her death.
            </p>
            <br />
            <p>
              &emsp;Today, a festival is being held at the Mitsuichi Shrine as the day she was struck down, which is known to be evil in this area. The festival is called Akumetsu festival. In
              Japanese, it means that evil was destroyed. The main event of the festival is a target game called Struck Out. The way he killed her was by throwing a rock, so they were inspired by that
              to do Struck Out. Of course, the people who come to the festival don&apos;t know her, so they play with the mistaken understanding that this game is an imitation of the brave men who
              defeated the evil that almost destroyed this area in the past.
            </p>
            <br />
            <p>
              &emsp;The people of this area believe in the Mitsuichi Shrine. So, even though it is really no one&apos;s responsibility, the good things are because of the shrine maiden, and the bad
              things are because of the shrine maiden. In the end, the faith is only for miserable people who impose responsibilities they are not prepared to bear, and who run away from them. It is
              only a place to push responsibility. So the person who receives all the faith will have a heavy burden. If the object of faith were to disappear because of that burden, there might be no
              way for those people to escape.
            </p>
            <br />
            <p>
              &emsp;After that incident, a new shrine maiden succeeded and peace returned to this area. But the people of this area lost their way of escape. And I lost my loved ones. That fact will
              never change. “ Why does no one doubt whether this is true or not…” I ask it to the silence, and I leave the shrine. I hope that one day someone will realize this truth.
            </p>
          </>
        )}
        <br />
        <p className="text-end">({lang === "ja" ? "終" : "end"})</p>
        <Link href="/">
          <button className="text-center flex text-2xl lg:text-3xl font-bold text-white bg-[#5b9035] px-5 py-2 transition hover:bg-[#3b631e] rounded-full mt-10">
            {lang === "ja" ? "トップへ戻る" : "Back to Top"}
          </button>
        </Link>
      </div>
    </div>
  );
}
