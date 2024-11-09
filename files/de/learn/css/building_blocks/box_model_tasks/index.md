---
title: "Testen Sie Ihr Können: Das Box-Modell"
slug: Learn/CSS/Building_blocks/Box_Model_Tasks
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Das Ziel dieses Tests ist es, herauszufinden, ob Sie das [CSS-Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) verstehen.

> [!NOTE]
> Klicken Sie auf **"Play"** in den unten stehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Ändern Sie die Breite der zweiten Box, indem Sie Deklarationen zur `.alternate` Klasse hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen gleicher Größe](mdn-box-model1.png)

Versuchen Sie den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Sie müssen die Höhe und Breite des zweiten Blocks erhöhen, um die Größe des Innenabstands und der Umrandung hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
  height: 240px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe fügen Sie der Box Folgendes hinzu:

- Eine 5px, schwarze, gepunktete Umrandung.
- Einen oberen Rand von 20px.
- Einen rechten Rand von 1em.
- Einen unteren Rand von 40px.
- Einen linken Rand von 2em.
- Innenabstand an allen Seiten von 1em.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit gepunkteter Umrandung](mdn-box-model2.png)

Versuchen Sie den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Diese Aufgabe erfordert die korrekte Verwendung der Rand-, Umrandungs- und Innenabstandseigenschaften.
Sie könnten die Langform-Eigenschaften nutzen ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.), aber beim Setzen des Randes und Innenabstands auf allen Seiten ist die Kurzform wahrscheinlich die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, Innenabstand und eine Umrandung. Allerdings überschneiden die Zeilen darüber und darunter es. Was können Sie Ihrer CSS hinzufügen, um sicherzustellen, dass die Größe des Randes, Innenabstands und der Umrandung von den anderen Zeilen respektiert wird, während das Element dennoch inline bleibt?

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Inline-Box mit Abstand zwischen ihr und dem umgebenden Text.](mdn-box-model3.png)

Versuchen Sie den Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Das Lösen dieser Aufgabe erfordert, dass Sie verstehen, wann verschiedene {{cssxref("display")}}-Werte zu verwenden sind.
Nach dem Hinzufügen von `display: inline-block` führt der Blockrichtungsrand, die Umrandung und der Innenabstand dazu, dass die anderen Zeilen vom Element weggeschoben werden:

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

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
