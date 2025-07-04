---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 312c9980fc7a973cea1e16d4a6e9c33b430c8179
---

Ziel dieser Fähigkeitstest ist es zu beurteilen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Für Aufgaben 1–3 klicken Sie auf **"Abspielen"** in den Code-Blöcken unten, um die Beispiele im MDN Playground zu bearbeiten. Sie können den Code auch kopieren (klicken Sie auf das Symbol „Zwischenablage“) und in einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) einfügen.
>
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zur Margin-Kurzschrift, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und führen Sie die Aufgaben auf der Zeitleiste (die kleinen Geister-Symbole) aus, indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es unten zwei Boxen, eine nutzt das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie der Klasse `.alternate` Deklarationen hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Zwei Boxen von derselben Größe](mdn-box-model1.png)

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

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Paddings und des Rahmens hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Fügen Sie in dieser Aufgabe der Box folgende Dinge hinzu:

- Einen 5px, schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von 20px.
- Einen rechten Rand von 1em.
- Einen unteren Rand von 40px.
- Einen linken Rand von 2em.
- Padding auf allen Seiten von 1em.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

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

Diese Aufgabe erfordert die korrekte Verwendung der Rand-, Rahmen- und Padding-Eigenschaften.
Sie könnten sich entscheiden, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.) zu verwenden, jedoch ist die Kurzschrift wahrscheinlich die bessere Wahl, wenn Sie einen Rand und Padding auf allen Seiten festlegen:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, Padding und Rahmen. Allerdings überlappen die Linien darüber und darunter. Was können Sie zu Ihrem CSS hinzufügen, um zu bewirken, dass die Größe des Randes, Paddings und Rahmens von den anderen Linien respektiert wird, während das Element dennoch inline bleibt?

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Ein Inline-Feld mit Abstand zwischen ihm und dem umgebenden Text.](mdn-box-model3.png)

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

Das Lösen dieser Aufgabe erfordert, dass Sie verstehen, wann verschiedene {{cssxref("display")}}-Werte verwendet werden sollten.
Nachdem Sie `display: inline-block` hinzugefügt haben, wird der Block-Richtungsrand, Rahmen und Padding dazu führen, dass die anderen Linien vom Element weggedrückt werden:

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

- [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
