---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: Box model
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen, zu beurteilen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Anleitung zur Nutzung der Fähigkeitentests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung, die sich mit der Margin-Shorthand befasst und von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home) erstellt wurde.

Sehen Sie sich die eingebettete Scrim an und führen Sie die Aufgaben auf der Timeline (die kleinen Geister-Symbole) aus, indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Ansehen der Scrim fortsetzen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></scrim-inline>

## Aufgabe 1

In dieser Aufgabe befinden sich unten zwei Boxen, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Wir möchten, dass Sie die Breite der zweiten Box ändern, indem Sie Deklarationen zur Klasse `.alternate` hinzufügen, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Zwei Boxen gleicher Größe](mdn-box-model1.png)

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

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Polsters und der Grenze hinzuzufügen:

```css
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Um diese Aufgabe zu vervollständigen, fügen Sie der bereitgestellten Box die folgenden Merkmale hinzu:

- Eine `5px`, schwarze, gepunktete Grenze.
- Einen oberen Rand von `20px`.
- Einen rechten Rand von `1em`.
- Einen unteren Rand von `40px`.
- Einen linken Rand von `2em`.
- Polster an allen Seiten von `1em`.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Eine Box mit gepunkteter Grenze](mdn-box-model2.png)

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

Diese Aufgabe beinhaltet die korrekte Verwendung der Eigenschaften Margin, Border und Padding.
Möglicherweise entscheiden Sie sich, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, usw.) zu verwenden, jedoch ist die Shorthand wahrscheinlich die bessere Wahl, wenn Sie Margin und Padding auf allen Seiten einstellen:

```css
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, Polster und eine Grenze. Allerdings überlappen die Zeilen darüber und darunter es.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, sodass die Größe des Rands, Polsters und der Grenze von den anderen Zeilen respektiert wird, während das Element weiterhin inline bleibt.

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

Um diese Aufgabe zu lösen, müssen Sie verstehen, wann unterschiedliche {{cssxref("display")}}-Werte verwendet werden. Nachdem Sie `display: inline-block` hinzugefügt haben, bewirken Rand, Grenze und Padding, dass die anderen Zeilen vom Element weggeschoben werden:

```css
.box span {
  background-color: pink;
  border: 5px solid black;
  padding: 1em;
  display: inline-block;
}
```

</details>
