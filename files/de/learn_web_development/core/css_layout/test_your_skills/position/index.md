---
title: "Testen Sie Ihre Fähigkeiten: Positionierung"
short-title: Positioning
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie [Positionierung in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) unter Verwendung der CSS-{{CSSxRef("position")}}-Eigenschaft und ihrer Werte verstehen. Sie werden zwei kleine Aufgaben durchgehen, die verschiedene Elemente des Materials, das Sie gerade behandelt haben, nutzen.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills)-Verwendungsleitfaden. Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

Um diese Aufgabe zu vervollständigen, positionieren Sie das Element mit der Klasse `target` oben rechts im Container, der einen 5px grauen Rahmen hat.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Das grüne Kästchen befindet sich oben rechts in einem Container mit grauem Rahmen.](position-task1.png)

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

Dies erfordert `position: relative` und `position: absolute` und ein Verständnis dafür, wie sie zueinander in Bezug stehen, da relative Positionierung einen neuen Positionierungskontext schafft.
Ein wahrscheinliches Problem könnte sein, dass Sie `position: absolute` zum Kind hinzufügen, ohne `position: relative` auf den Container anzuwenden. In diesem Fall wird das Ziel entsprechend dem Viewport positioniert.

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

In dieser Aufgabe scrollt die Seitenleiste im untenstehenden Beispiel mit dem Inhalt mit, wenn Sie die Box scrollen. Wir möchten, dass Sie den Code aktualisieren, sodass die Seitenleiste (`<div class="sidebar">`) an Ort und Stelle bleibt und nur der Inhalt scrollt.

![Der Inhalt wird gescrollt, aber die Seitenleiste bleibt an Ort und Stelle.](position-task2.png)

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

Wir testen Ihr Verständnis von `position: fixed` mit einem etwas anderen Beispiel als in den Lernmaterialien.

```css
.sidebar {
  position: fixed;
}
```

</details>
