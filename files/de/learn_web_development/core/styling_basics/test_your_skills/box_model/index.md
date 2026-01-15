---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: "Test: Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: e7d65ea71b4750f885176612b27869576d3432ba
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu bewerten, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst geben wir Ihnen eine unterhaltsame, interaktive Herausforderung zum Thema Margen-Kurzschreibweise, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und erledigen Sie die Aufgaben in der Zeitleiste (die kleinen Geistersymbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Wir möchten, dass Sie die Breite der zweiten Box ändern, indem Sie Deklarationen zur `.alternate`-Klasse hinzufügen, sodass sie mit der visuellen Breite der ersten Box übereinstimmt.

Ihr Endergebnis sollte folgender Darstellung entsprechen:

{{EmbedLiveSample("box-model1-finish", "", "540px")}}

```html live-sample___box-model1-start live-sample___box-model1-finish
<div class="box">I use the standard box model.</div>
<div class="box alternate">I use the alternate box model.</div>
```

```css live-sample___box-model1-start live-sample___box-model1-finish
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

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("box-model1-start", "", "540px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Polsters und der Begrenzungslinie hinzuzufügen:

```css live-sample___box-model1-finish
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, fügen Sie der bereitgestellten Box die folgenden Merkmale hinzu:

- Eine `5px`, schwarze, gepunktete Begrenzungslinie.
- Ein oberer Rand von `20px`.
- Ein rechter Rand von `1em`.
- Ein unterer Rand von `40px`.
- Ein linker Rand von `2em`.
- Polsterung auf allen Seiten von `1em`.

Ihr Endergebnis sollte folgender Darstellung entsprechen:

{{EmbedLiveSample("box-model2-finish")}}

```html live-sample___box-model2-start live-sample___box-model2-finish
<div class="box">I use the standard box model.</div>
```

```css live-sample___box-model2-start live-sample___box-model2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box {
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("box-model2-start")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert die korrekte Verwendung der Eigenschaften für Rand, Begrenzungslinie und Polsterung.
Sie können sich entscheiden, die Langform-Eigenschaften zu verwenden ({{cssxref("margin-top")}}, {{cssxref("margin-right")}} usw.); jedoch ist bei der Festlegung eines Randes und einer Polsterung auf allen Seiten die Kurzschreibweise wahrscheinlich die bessere Wahl:

```css live-sample___box-model2-finish
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, eine Polsterung und eine Begrenzungslinie. Die Zeilen darüber und darunter überlappen es jedoch.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, um sicherzustellen, dass die Größe des Randes, der Polsterung und der Begrenzungslinie von den anderen Zeilen respektiert wird, während das Element inline bleibt.

Ihr Endergebnis sollte folgender Darstellung entsprechen:

{{EmbedLiveSample("box-model3-finish")}}

```html live-sample___box-model3-start live-sample___box-model3-finish
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

```css live-sample___box-model3-start live-sample___box-model3-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
}
```

Dies ist der Ausgangszustand der Aufgabe:

{{EmbedLiveSample("box-model3-start")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Um diese Aufgabe zu lösen, müssen Sie verstehen, wann verschiedene {{cssxref("display")}}-Werte verwendet werden sollten.
Nachdem Sie `display: inline-block` hinzugefügt haben, wird der Rand, die Begrenzungslinie und die Polsterung in Blockrichtung die anderen Zeilen vom Element abstoßen:

```css live-sample___box-model3-finish
.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
