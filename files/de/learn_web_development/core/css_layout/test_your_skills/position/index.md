---
title: "Testen Sie Ihr Können: Positionierung"
short-title: "Test: Positionierung"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
l10n:
  sourceCommit: 953bce9928ec0693e419f7c0e1c786f29a7570e9
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie das [Positionieren in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mithilfe der CSS-{{CSSxRef("position")}}-Eigenschaft und ihren Werten verstehen. Sie werden zwei kleine Aufgaben durchgehen, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung Ihrer Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

Um diese Aufgabe abzuschließen, positionieren Sie das Element mit der Klasse `target` oben rechts im Container, der die 5px graue Umrandung hat.

Ihr Endergebnis sollte wie diese fertige Darstellung aussehen:

{{EmbedLiveSample("position1-finish", "", "250px")}}

**Bonusfrage:** Können Sie das Ziel unterhalb des Textes anzeigen lassen?

```html live-sample___position1-start live-sample___position1-finish
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <div class="target">Target</div>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___position1-start live-sample___position1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  padding: 0.5em;
  border: 5px solid #cccccc;
}

.target {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #663398;
  padding: 1em;
  color: white;
}

.container {
  /* Add styles here */
}

.target {
  /* Add styles here */
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("position1-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dies erfordert `position: relative` und `position: absolute` und ein Verständnis dafür, wie sie zueinander in Bezug stehen, indem die relative Positionierung einen neuen Positionierungskontext erstellt. Ein wahrscheinliches Problem könnte sein, dass Sie `position: absolute` auf das Kind anwenden, ohne `position: relative` auf den Container anzuwenden. In diesem Fall wird das Ziel relativ zum Viewport positioniert.

```css live-sample___position1-finish
.container {
  position: relative;
}

.target {
  position: absolute;
  top: 0;
  right: 0;
}
```

Für die Bonusfrage müssen Sie einen negativen `z-index` zum Ziel hinzufügen, zum Beispiel `z-index: -2`.

</details>

## Aufgabe 2

Im Anfangszustand dieser Aufgabe scrollt die Sidebar mit dem Inhalt, wenn Sie den Inhalt scrollen. Sie sollen den Code so aktualisieren, dass die Sidebar (`<div class="sidebar">`) an Ort und Stelle bleibt und nur der Inhalt scrollt, wie in dieser fertigen Darstellung gezeigt:

{{EmbedLiveSample("position2-finish", "", "400px")}}

```html live-sample___position2-start live-sample___position2-finish
<div class="container">
  <div class="sidebar">
    <p>
      This is the sidebar. It should remain in position as the content scrolls.
    </p>
  </div>
  <div class="content">
    <p>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
      onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
    </p>
    <p>
      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
      tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
      Dandelion cucumber earthnut pea peanut soko zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
  </div>
</div>
```

```css live-sample___position2-start live-sample___position2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  height: 400px;
  padding: 0.5em;
  border: 5px solid #cccccc;
  overflow: auto;
}

.sidebar {
  color: white;
  background-color: #663398;
  padding: 1em;
  float: left;
  width: 150px;
}

.content {
  padding: 1em;
  margin-left: 160px;
}

.sidebar {
  /* Add styles here */
}
```

Dies ist der Anfangszustand der Aufgabe:

{{EmbedLiveSample("position2-start", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges Sidebar-CSS sollte so aussehen:

```css live-sample___position2-finish
.sidebar {
  position: fixed;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
