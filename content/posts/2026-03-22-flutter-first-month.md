---
title: "Flutterを1ヶ月勉強した内容と所感"
date: "2026-03-22"
description: "最近Flutterを勉強し始めたので勉強方法や感想をまとめる"
tags: ["Flutter"]
---

## はじめに
Flutterをキャッチアップし始めて、ここ1ヶ月くらいやっていたことや所感をまとめます。

## 書籍
Flutter実践入門という本を読み、ハンズオンを写経したりしました。

https://amzn.asia/d/00qQOHiY

この本はDartの文法からFlutterやRiverpodという状態管理ライブラリまで幅広く記載されていて一冊でざっと理解することができました。

2024年の本なので手元でサンプルコードそのままでは動かない部分もありましたが困ることはありませんでした。

## 動画①

Flutter入門講座という動画を視聴しました。

- Flutter入門講座
  - https://youtube.com/playlist?list=PLY1cxwSQf6nz6zo2Y_UJlDjGOpASAO4hd&si=Fad3T2gxY-i8NYI0


この動画は初心者向けで、プログラミング自体初心者の人でも見やすい動画になっていました。
自分は何かの作業をしながら耳だけ聞いたりしました。

## 動画②

Riverpod完全ガイドという動画を視聴しました。


- Riverpod完全ガイド
  - https://youtube.com/playlist?list=PLY1cxwSQf6nzcA62KQSgkL1TwAeM1Raaj&si=3hc2X85p2vlTiqCT

Riverpodやhooks_riverpodの話がまとまってて、どのライブラリを採用すべきか理解が進みました。

## 動画③

Flutter Kaigiの動画を見ました。

- FlutterKaigi 2023 我々にはなぜ Riverpod が必要なのか - InheritedWidget から始まる app state 管理手法の課題
  - https://youtu.be/2SnTNFAzmY0?si=dedb9Wf_Yw_L363O

Flutterの内部構造や、なぜRiverpodのような状態管理が必要なのかの背景を理解するのに役立ちました。

## 良いと思った点 / 微妙と思った点
### 良いと思った点

- 開発体験が良い（特にHot Reload）
  - UIの変更をすぐ確認できるので試行錯誤がしやすい

- ライブラリが充実している（https://pub.dev）
  - 大体やりたいことは既存パッケージで解決できそう

- Javaを書いたことがある人にはDartは理解しやすい
  - Androidエンジニアであればキャッチアップは比較的早そう

- Riverpodが便利
  - 状態管理だけでなくDIとしても使えるので設計を整理しやすいと感じた

- 宣言的UIが分かりやすい
  - Jetpack Composeの経験があるとかなりスムーズに理解できる

## 微妙と思った点

- Dartのセミコロンが少し煩わしい
  - Kotlinに慣れていると地味に気になる

- data class相当が標準で弱い
  - recordはあるが用途が違うため、freezedに頼ることになる

- コード自動生成（build_runner）がやや面倒
  - freezed / riverpod / json_serializable などで事前生成が必要なのが少しストレス

- パッケージ依存が強い
  - Jetpackのように公式が強く整備しているわけではなく、選定に迷う場面がある

- 状態管理の自由度が高い
  - 柔軟な反面、設計力がないと破綻しそう

## いつFlutterを採用すると良さそうか

- Androidエンジニアがクロスプラットフォーム対応する場合
  - Composeの知識がそのまま活きる
  - DartもJavaに近く違和感が少ない
  - Compose Multiplatformも選択肢だが、現状はFlutterの方がエコシステムが強い印象

- 開発リソースが限られている場合
  - 1つのコードでiOS/Androidを開発できるため効率が良い

- iOS/AndroidでUIを揃えて問題ない場合

## まとめ

1ヶ月触ってみて、Flutterは「キャッチアップはしやすいが、設計で差が出る技術」だなと感じました。特に状態管理の自由度が高いため、特にチーム開発の場合は設計が重要になりそうです。

一方で開発体験やスピードは非常に早く、クロスプラットフォーム開発で採用されるケースが多い理由がよくわかりました。