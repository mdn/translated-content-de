---
title: "Testen Sie Ihr Können: Das Box-Modell"
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 2bde1cab935c3b36bf66dc9fbf1ffb6a20b5f708
---

Das Ziel dieses Tests ist zu überprüfen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstanden haben.

> [!NOTE]
> Für die Aufgaben 1–3 klicken Sie auf **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Interaktive Herausforderung

Zuallererst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zur Margen-Kurzschreibweise, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich den eingebetteten "Scrim" an und erfüllen Sie die Aufgaben auf der Zeitachse (den kleinen Geistersymbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das "Scrim" weiter ansehen, um zu überprüfen, wie sich die Lösung des Lehrers mit Ihrer deckt.

<scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie der `.alternate` Klasse Deklarationen hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen gleicher Größe](mdn-box-model1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel neu zu erstellen:

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

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Paddings und der Border hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe fügen Sie der Box folgendes hinzu:

- Einen 5px, schwarzen, gepunkteten Rand.
- Einen oberen Randabstand von 20px.
- Einen rechten Randabstand von 1em.
- Einen unteren Randabstand von 40px.
- Einen linken Randabstand von 2em.
- Ein Padding auf allen Seiten von 1em.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit gepunktetem Rand](mdn-box-model2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel neu zu erstellen:

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

Diese Aufgabe erfordert die korrekte Verwendung der Margen-, Rand- und Padding-Eigenschaften.
Sie könnten sich entscheiden, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, usw.) zu verwenden, jedoch ist es beim Festlegen eines Randabstands und Paddings auf allen Seiten wahrscheinlich besser, die Kurzschreibweise zu verwenden:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Randabstand, ein Padding und eine Border. Dennoch überlappen die Linien darüber und darunter es. Was können Sie Ihrem CSS hinzufügen, damit die Größe des Randabstands, des Paddings und der Border von den anderen Linien respektiert wird, während das Element weiterhin inline bleibt?

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Inline-Box mit Abstand zwischen ihr und dem umgebenden Text.](mdn-box-model3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel neu zu erstellen:

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

Diese Aufgabe zu lösen erfordert, dass Sie verstehen, wann Sie verschiedene {{cssxref("display")}}-Werte verwenden sollten.
Nach dem Hinzufügen von `display: inline-block` wird der Blockrichtungsrandabstand, die Border und das Padding bewirken, dass die anderen Linien vom Element weggeschoben werden:

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

- [CSS-Grundlagen der Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
