---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: "Test: Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: d0be159e6119ff73453bea6d224f0a2056307aa4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen festzustellen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Um Unterstützung zu erhalten, lesen Sie unseren [Anleitung zur Nutzung der Fähigkeitstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Interaktive Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zur Verkürzung von Rändern, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich das eingebettete Scrim an und erledigen Sie die Aufgaben in der Timeline (die kleinen Geistersymbole), indem Sie den Anweisungen folgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie das Scrim weiter ansehen, um zu überprüfen, wie die Lösung des Lehrers mit Ihrer übereinstimmt.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Verkürzung von Rändern" survey="true"></mdn-scrim-inline>

## Aufgabe 1

In dieser Aufgabe gibt es unten zwei Boxen, eine verwendet das Standard-Box-Modell, die andere das alternative Box-Modell. Wir möchten, dass Sie die Breite der zweiten Box durch Hinzufügen von Deklarationen zur `.alternate` Klasse ändern, sodass sie der visuellen Breite der ersten Box entspricht.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("box-model1-start", "", "540px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Innenabstands und des Rahmens hinzuzufügen:

```css live-sample___box-model1-finish
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Aufgabe 2

Um diese Aufgabe abzuschließen, fügen Sie der bereitgestellten Box die folgenden Eigenschaften hinzu:

- Einen `5px` breiten, schwarzen, gepunkteten Rahmen.
- Einen oberen Rand von `20px`.
- Einen rechten Rand von `1em`.
- Einen unteren Rand von `40px`.
- Einen linken Rand von `2em`.
- Einen Innenabstand auf allen Seiten von `1em`.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("box-model2-finish", "100%", "140px")}}

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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("box-model2-start", "100%", "100px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe erfordert die korrekte Verwendung der Eigenschaften für Rand, Rahmen und Innenabstand.
Sie könnten die Langform der Eigenschaften verwenden ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, usw.); allerdings ist die Kurzform wahrscheinlich die bessere Wahl, wenn der Rand und Innenabstand auf allen Seiten gesetzt wird:

```css live-sample___box-model2-finish
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe hat das Inline-Element einen Rand, Innenabstand und Rahmen. Allerdings überlappen die Linien darüber und darunter es.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, damit die Größe des Rands, Innenabstands und Rahmens von den anderen Linien respektiert wird, während das Element weiterhin inline bleibt.

Ihr Endergebnis sollte wie die folgende Darstellung aussehen:

{{EmbedLiveSample("box-model3-finish", "100%", "260px")}}

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

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("box-model3-start", "100%", "220px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Um diese Aufgabe zu lösen, müssen Sie verstehen, wann unterschiedliche {{cssxref("display")}}-Werte verwendet werden sollten.
Nach dem Hinzufügen von `display: inline-block` wird der Blockrichtungsrand, Rahmen und Innenabstand dazu führen, dass die anderen Linien vom Element weg geschoben werden:

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
