---
title: "Testen Sie Ihre Fähigkeiten: Positionierung"
short-title: "Test: Positionierung"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

Ziel dieses Fähigkeitentests ist es, Ihnen bei der Bewertung zu helfen, ob Sie [Positionierung in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mit der CSS-{{CSSxRef("position")}}-Eigenschaft und deren Werten verstehen. Sie werden an zwei kleinen Aufgaben arbeiten, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills)-Leitfaden zur Verwendung. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Um diese Aufgabe abzuschließen, positionieren Sie das Element mit einer Klasse von `target` oben rechts im Container, der den 5px grauen Rahmen hat.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Das grüne Feld befindet sich oben rechts in einem Container mit einem grauen Rahmen.](position-task1.png)

**Bonusfrage:** Können Sie das Ziel so ändern, dass es unter dem Text angezeigt wird?

```html live-sample___position1
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

```css live-sample___position1
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

{{EmbedLiveSample("position1", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dies erfordert `position: relative` und `position: absolute` und das Verständnis, wie sie in Bezug auf relative Positionierung, die einen neuen Positionierungskontext erstellt, miteinander verbunden sind.
Ein wahrscheinliches Problem könnte sein, dass Sie `position: absolute` dem Kind hinzufügen, ohne `position: relative` auf den Container anzuwenden. In diesem Fall wird das Ziel gemäß dem Viewport positioniert.

```css
.container {
  position: relative;
}

.target {
  position: absolute;
  top: 0;
  right: 0;
}
```

Für die Bonusfrage müssen Sie dem Ziel einen negativen `z-index` hinzufügen, zum Beispiel `z-index: -2`.

</details>

## Aufgabe 2

In dieser Aufgabe scrollt der Seitenbereich im unten stehenden Beispiel mit dem Inhalt mit, wenn Sie das Feld scrollen. Wir möchten, dass Sie den Code aktualisieren, sodass der Seitenbereich (`<div class="sidebar">`) an Ort und Stelle bleibt und nur der Inhalt scrollt.

![Der Inhalt wird gescrollt, aber der Seitenbereich bleibt an Ort und Stelle.](position-task2.png)

```html live-sample___position2
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

```css live-sample___position2
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

.container {
  /* Add styles here */
}

.sidebar {
  /* Add styles here */
}
```

{{EmbedLiveSample("position2", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wir testen Ihr Verständnis für `position: fixed` mit einem etwas anderen Beispiel als denen im Lernmaterial.

```css
.sidebar {
  position: fixed;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
