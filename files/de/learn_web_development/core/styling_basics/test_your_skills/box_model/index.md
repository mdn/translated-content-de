---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Fähigkeitentests ist es, zu beurteilen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Klicken Sie **„Play“** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie feststecken, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe gibt es unten zwei Boxen, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie der Klasse `.alternate` Deklarationen hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Zwei Boxen gleicher Größe](mdn-box-model1.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

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

In dieser Aufgabe fügen Sie der Box die folgenden Dinge hinzu:

- Einen 5px schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von 20px.
- Einen rechten Rand von 1em.
- Einen unteren Rand von 40px.
- Einen linken Rand von 2em.
- Innenabstand auf allen Seiten von 1em.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Box mit einem gepunkteten Rahmen](mdn-box-model2.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

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

Diese Aufgabe erfordert, dass Sie die Eigenschaften Margin, Border und Padding korrekt verwenden.
Sie könnten sich entscheiden, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.) zu verwenden, jedoch ist es beim Setzen von Margin und Padding auf allen Seiten wahrscheinlich besser, die Kurzform zu verwenden:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, Innenabstand und Rahmen. Die Zeilen darüber und darunter überlappen es jedoch. Was können Sie zu Ihrem CSS hinzufügen, damit die Größe des Rands, Innenabstands und Rahmens von den anderen Zeilen respektiert wird, während das Element dennoch inline bleibt?

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Eine Inline-Box mit Abstand zwischen ihr und dem umgebenden Text.](mdn-box-model3.png)

Versuchen Sie, den Code unten zu aktualisieren, um das fertige Beispiel zu rekonstruieren:

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

Die Lösung dieser Aufgabe erfordert, dass Sie verstehen, wann Sie verschiedene {{cssxref("display")}}-Werte verwenden.
Nach dem Hinzufügen von `display: inline-block` werden der Margin-, Rahmen- und Innenabstand entlang der Blockrichtung die anderen Zeilen vom Element wegdrücken:

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

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
