---
title: "Testen Sie Ihre Fähigkeiten: Das Boxmodell"
slug: Learn_web_development/Core/Styling_basics/Box_Model_Tasks
l10n:
  sourceCommit: 8e79112f2dfe6df98356e22bc5a9fed59efe9046
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu prüfen, ob Sie das [CSS Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Klicken Sie in den unten stehenden Codeblöcken auf **"Play"**, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine verwendet das Standard-Boxmodell, die andere das alternative Boxmodell. Ändern Sie die Breite der zweiten Box, indem Sie Deklarationen zur `.alternate` Klasse hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen gleicher Größe](mdn-box-model1.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Fügen Sie in dieser Aufgabe der Box Folgendes hinzu:

- Einen 5px, schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von 20px.
- Einen rechten Rand von 1em.
- Einen unteren Rand von 40px.
- Einen linken Rand von 2em.
- Padding auf allen Seiten von 1em.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit einem gepunkteten Rahmen](mdn-box-model2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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
Sie können die Langform-Eigenschaften verwenden ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.), jedoch bei der Festlegung von Rand und Padding auf allen Seiten ist die Kurzform wahrscheinlich die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, ein Padding und einen Rahmen. Allerdings überlappen die Zeilen darüber und darunter. Was können Sie zu Ihrem CSS hinzufügen, damit die Größe des Randes, des Paddings und des Rahmens von den anderen Zeilen berücksichtigt wird, während das Element dennoch inline bleibt?

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Inline-Box mit Platz zwischen ihr und dem umgebenden Text.](mdn-box-model3.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Um diese Aufgabe zu lösen, müssen Sie verstehen, wann Sie verschiedene {{cssxref("display")}}-Werte verwenden.
Nachdem Sie `display: inline-block` hinzugefügt haben, werden die Margen, Rahmen und das Padding in der Blockrichtung die anderen Zeilen vom Element wegschieben:

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
