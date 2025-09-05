---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: "Test: Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 7524bc9075ab71beb764d32aaecd14d91bbc4038
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Verwendung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung setzen.

## Interaktive Herausforderung

Zuerst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zur Margin-Kurzform, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Beobachten Sie das eingebettete Video und erledigen Sie die Aufgaben in der Timeline (die kleinen Geistersymbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Video weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin-Kurzform" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es zwei Boxen unten, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Wir möchten, dass Sie die Breite der zweiten Box ändern, indem Sie Deklarationen zur Klasse `.alternate` hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei gleich große Boxen](mdn-box-model1.png)

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

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Padding und des Rahmens hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, fügen Sie der vorgegebenen Box die folgenden Funktionen hinzu:

- Einen `5px` breiten, schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von `20px`.
- Einen rechten Rand von `1em`.
- Einen unteren Rand von `40px`.
- Einen linken Rand von `2em`.
- Ein Padding auf allen Seiten von `1em`.

Ihr Endergebnis sollte wie das Bild unten aussehen:

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

Diese Aufgabe erfordert die korrekte Verwendung der Margin-, Rahmen- und Padding-Eigenschaften.
Sie könnten sich entscheiden, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.) zu verwenden. Wenn Sie jedoch eine Margin und ein Padding auf allen Seiten festlegen, ist die Kurzform wahrscheinlich die bessere Wahl:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element eine Margin, ein Padding und einen Rahmen. Die Linien darüber und darunter überlappen es jedoch.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, sodass die Größe der Margin, des Padding und des Rahmens von den anderen Linien respektiert wird, während das Element weiterhin Inline bleibt.

Ihr Endergebnis sollte wie das Bild unten aussehen:

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

Diese Aufgabe zu lösen erfordert, dass Sie verstehen, wann Sie verschiedene {{cssxref("display")}}-Werte verwenden sollten.
Nach dem Hinzufügen von `display: inline-block`, bewirken die Margin-, Rahmen- und Padding-Werte in Block-Richtung, dass die anderen Linien vom Element weggedrückt werden:

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
