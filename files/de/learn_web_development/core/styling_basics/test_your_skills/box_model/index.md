---
title: "Testen Sie Ihre Fähigkeiten: Das Box-Modell"
short-title: "Test: Box-Modell"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie das [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) verstehen.

> [!NOTE]
> Für Hilfe lesen Sie unseren [Anleitung zum Testen Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Interaktives Herausforderung

Zunächst bieten wir Ihnen eine unterhaltsame, interaktive Herausforderung zur Margin-Kurzschreibweise, erstellt von unserem [Lernpartner](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds), [Scrimba](https://scrimba.com/home).

Sehen Sie sich die eingebettete Scrim an und führen Sie die Aufgaben auf der Zeitleiste (die kleinen Geistersymbole) aus, indem Sie die Anweisungen befolgen und den Code bearbeiten. Wenn Sie fertig sind, können Sie die Wiedergabe der Scrim fortsetzen, um zu überprüfen, wie die Lösung des Lehrers zu Ihrer Lösung passt.

<mdn-scrim-inline url="https://scrimba.com/learn-html-and-css-c0p/~01s" scrimtitle="Margin shorthand" survey="true"></mdn-scrim-inline>

## Box-Modell 1

In dieser Aufgabe gibt es zwei Kästchen unten, eines verwendet das Standard-Box-Modell, das andere das alternative Box-Modell. Sie sollen die Breite des zweiten Kästchens ändern, indem Sie Deklarationen zur `.alternate` Klasse hinzufügen, sodass es der visuellen Breite des ersten Kästchens entspricht.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("box-model1-start", "", "540px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Gestaltung sollte folgendermaßen aussehen:

{{EmbedLiveSample("box-model1-finish", "", "540px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die Breite des zweiten Blocks erhöhen, um die Größe des Innenabstands und Randes hinzuzufügen:

```css live-sample___box-model1-finish
.alternate {
  box-sizing: border-box;
  width: 390px;
}
```

</details>

## Box-Modell 2

Um diese Aufgabe abzuschließen, fügen Sie dem bereitgestellten Kästchen folgende Merkmale hinzu:

- Eine `5px` schwarze gestrichelte Umrandung.
- Ein oberer Rand von `20px`.
- Ein rechter Rand von `1em`.
- Ein unterer Rand von `40px`.
- Ein linker Rand von `2em`.
- Innenabstand auf allen Seiten von `1em`.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("box-model2-start", "100%", "100px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Gestaltung sollte folgendermaßen aussehen:

{{EmbedLiveSample("box-model2-finish", "100%", "140px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Diese Aufgabe beinhaltet die korrekte Verwendung der Eigenschaften für Rand, Umrandung und Innenabstand.
Sie können sich entscheiden, die Langform-Eigenschaften ({{cssxref("margin-top")}}, {{cssxref("margin-right")}}, etc.) zu verwenden; jedoch ist bei der Festlegung eines Rands und Innenabstands auf allen Seiten wahrscheinlich die Kurzschreibweise die bessere Wahl:

```css live-sample___box-model2-finish
.box {
  border: 5px dotted black;
  margin: 20px 1em 40px 2em;
  padding: 1em;
}
```

</details>

## Box-Modell 3

In dieser Aufgabe hat das Inline-Element einen Rand, einen Innenabstand und eine Umrandung. Die Linien darüber und darunter überlappen es jedoch.

Um diese Aufgabe abzuschließen, aktualisieren Sie das CSS, um dafür zu sorgen, dass die Größe des Randes, des Innenabstands und der Umrandung von den anderen Linien respektiert wird, während das Element weiterhin inline bleibt.

Der Ausgangspunkt der Aufgabe sieht folgendermaßen aus:

{{EmbedLiveSample("box-model3-start", "100%", "220px")}}

Hier ist der zugrunde liegende Code für diesen Ausgangspunkt:

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

Die aktualisierte Gestaltung sollte folgendermaßen aussehen:

{{EmbedLiveSample("box-model3-finish", "100%", "260px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das Lösen dieser Aufgabe erfordert das Verständnis, wann verschiedene {{cssxref("display")}}-Werte zu verwenden sind.
Nach dem Hinzufügen von `display: inline-block`, werden der Block-Richtung Rand, die Umrandung und der Innenabstand dazu führen, dass die anderen Linien vom Element weggeschoben werden:

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
