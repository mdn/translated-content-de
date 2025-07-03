---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

Ziel dieses Kompetenztests ist es festzustellen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Für Aufgaben 1–3 klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zum Thema Margin-Kurzschrift, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und absolvieren Sie die Aufgaben auf der Timeline (den kleinen Geister-Icons), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie die Scrim fortsetzen, um zu sehen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es unten zwei Boxen, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie der `.alternate`-Klasse Deklarationen hinzufügen, sodass sie der optischen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Zwei Boxen von gleicher Größe](mdn-box-model1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___box-models
<div class="box">I use the standard box model.</div>
<div class="box alternate">I use the alternate box model.</div>
```

```css live-sample___box-models
body {
  font: 1.2em / 1.5 sans-serif;
}
.box {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternate {
  box-sizing: border-box;
}
```

{{EmbedLiveSample("box-models", "", "540px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Innenabstands und der Rahmen hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Fügen Sie in dieser Aufgabe der Box die folgenden Dinge hinzu:

- Einen 5px schwarzen, gepunkteten Rahmen.
- Einen oberen Abstand von 20px.
- Einen rechten Abstand von 1em.
- Einen unteren Abstand von 40px.
- Einen linken Abstand von 2em.
- Innenabstand an allen Seiten von 1em.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Box mit einem gepunkteten Rahmen](mdn-box-model2.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___mbp
<div class="box">I use the standard box model.</div>
```

```css live-sample___mbp
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
}
```

{{EmbedLiveSample("mbp")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert die korrekte Verwendung der Eigenschaften margin, border und padding.
Sie könnten sich dafür entscheiden, die Langschreiber-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.) zu verwenden. Wenn Sie jedoch einen Abstand und Innenabstand auf allen Seiten setzen, ist die Kurzschrift wahrscheinlich die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Abstand, Polsterung und Rahmen. Allerdings überlappen sich die Zeilen darüber und darunter. Was können Sie Ihrer CSS hinzufügen, damit die Größe des Abstands, der Polsterung und des Rahmens von den anderen Zeilen respektiert wird, während das Element weiterhin inline bleibt?

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Inline-Box mit Abstand zwischen ihr und dem umliegenden Text.](mdn-box-model3.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___inline-block
<div class="box">
  <p>
    Veggies es bonus vobis, <span>proinde vos postulo</span> essum magis
    kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
    garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}

.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
}
```

{{EmbedLiveSample("inline-block")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert das Verständnis, wann verschiedene {{cssxref("display")}}-Werte verwendet werden.
Nach dem Hinzufügen von `display: inline-block`, werden der Abstand, Rahmen und Innenabstand in Blockrichtung dazu führen, dass die anderen Zeilen vom Element weggedrängt werden:

```css
.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>

## Siehe auch

- [Grundlagen des CSS-Stylings](/de/docs/Learn_web_development/Core/Styling_basics)
