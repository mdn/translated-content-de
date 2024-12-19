---
title: "Testen Sie Ihr Wissen: Das Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Box_Model_Tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Skill-Tests ist es zu überprüfen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Klicken Sie auf **„Play“** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine nutzt das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie der Klasse `.alternate` Deklarationen hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen der gleichen Größe](mdn-box-model1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzustellen:

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

Sie müssen die Höhe und Breite des zweiten Blocks erhöhen, um die Größe des Innenabstands und der Rahmen hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
  height: 240px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe fügen Sie der Box folgende Dinge hinzu:

- Einen 5px breiten, schwarzen, gepunkteten Rahmen.
- Einen oberen Außenabstand von 20px.
- Einen rechten Außenabstand von 1em.
- Einen unteren Außenabstand von 40px.
- Einen linken Außenabstand von 2em.
- Innenabstand an allen Seiten von 1em.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einem gepunkteten Rahmen](mdn-box-model2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzustellen:

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

Diese Aufgabe erfordert die korrekte Verwendung der Eigenschaften `margin`, `border` und `padding`.
Sie können wählen, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, usw.) zu verwenden, aber wenn Sie einen Außenabstand und Innenabstand an allen Seiten setzen, ist die Kurzform wahrscheinlich die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Außenabstand, Innenabstand und Rahmen. Jedoch überlappen die Zeilen darüber und darunter es. Was können Sie zu Ihrem CSS hinzufügen, um sicherzustellen, dass die Größe des Außenabstands, Innenabstands und Rahmens von den anderen Zeilen respektiert wird, während das Element dennoch inline bleibt?

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Ein Inline-Block mit Raum zwischen ihm und dem umgebenden Text.](mdn-box-model3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzustellen:

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

Um diese Aufgabe zu lösen, müssen Sie verstehen, wann verschiedene {{cssxref("display")}}-Werte zu verwenden sind.
Nachdem Sie `display: inline-block` hinzugefügt haben, werden der Rand, Rahmen und Innenabstand in Blockrichtung dazu führen, dass die anderen Zeilen vom Element weggeschoben werden:

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

- [CSS-Stilgrundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
