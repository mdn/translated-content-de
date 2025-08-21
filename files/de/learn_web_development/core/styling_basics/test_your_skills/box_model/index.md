---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: "Test: Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Ziel dieses Fähigkeitstests ist es, zu überprüfen, ob Sie das [CSS Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unsere [Anleitung zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Interaktive Herausforderung

Zunächst stellen wir Ihnen eine unterhaltsame, interaktive Herausforderung vor, die sich mit der Margin-Kurzschrift befasst, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und erledigen Sie die Aufgaben auf der Zeitleiste (die kleinen Geistersymbole), indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim fortsetzen, um zu überprüfen, wie die Lösung des Lehrers zu Ihrer passt.

<scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es unten zwei Boxen, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Wir möchten, dass Sie die Breite der zweiten Box ändern, indem Sie Deklarationen zur `.alternate`-Klasse hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Zwei Boxen der gleichen Größe](mdn-box-model1.png)

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

Um diese Aufgabe abzuschließen, fügen Sie der bereitgestellten Box die folgenden Merkmale hinzu:

- Einen `5px` breiten, schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von `20px`.
- Einen rechten Rand von `1em`.
- Einen unteren Rand von `40px`.
- Einen linken Rand von `2em`.
- Ein Padding auf allen Seiten von `1em`.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Eine Box mit einem gepunkteten Rahmen](mdn-box-model2.png)

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
Sie können sich entscheiden, die Langformen zu verwenden ({{cssxref("margin-top")}}, {{cssxref("margin-right")}} usw.), jedoch ist bei Festlegung eines Rands und eines Paddings auf allen Seiten wahrscheinlich die Kurzschrift die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, ein Padding und einen Rahmen. Die darüber und darunter liegenden Zeilen überlappen es jedoch.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, damit die Größe von Rand, Padding und Rahmen von den anderen Zeilen respektiert wird, während das Element weiterhin inline bleibt.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Eine Inline-Box mit Abstand zwischen ihr und dem umgebenden Text.](mdn-box-model3.png)

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
Nachdem Sie `display: inline-block` hinzugefügt haben, verursachen der Rand, der Rahmen und das Padding in Blockrichtung, dass die anderen Zeilen vom Element weg verschoben werden:

```css
.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}
