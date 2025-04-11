---
title: "Testen Sie Ihre Fähigkeiten: Positionierung"
short-title: Positioning
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Ziel dieses Kompetenztests ist es, zu beurteilen, ob Sie die [Positionierung in CSS](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) mit der CSS-{{CSSxRef("position")}}-Eigenschaft und ihren Werten verstehen. Sie werden zwei kleine Aufgaben durcharbeiten, die verschiedene Elemente des gerade behandelten Materials verwenden.

> [!NOTE]
> Klicken Sie **"Play"** in den untenstehenden Codeblöcken, um die Beispiele im MDN-Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie das Element mit der Klasse `target` oben rechts innerhalb des Containers positionieren, der einen 5px grauen Rahmen hat.

Ihr Endergebnis sollte wie das folgende Bild aussehen:

![Die grüne Box befindet sich oben rechts in einem Container mit grauem Rahmen.](position-task1.png)

**Bonusfrage:** Können Sie das Ziel unterhalb des Textes anzeigen lassen?

Versuchen Sie den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

```css hidden live-sample___position1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  padding: 0.5em;
  border: 5px solid #ccc;
}

.target {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #663398;
  padding: 1em;
  color: white;
}
```

```css live-sample___position1
.container {
}

.target {
}
```

{{EmbedLiveSample("position1", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Dies erfordert `position: relative` und `position: absolute` und das Verständnis, wie sie zueinander in Bezug auf die relative Positionierung und die Erstellung eines neuen Positionierungskontextes stehen.
Ein wahrscheinliches Problem könnte sein, dass Sie `position: absolute` dem Kind hinzufügen, ohne `position: relative` auf den Container anzuwenden. In diesem Fall wird das Ziel relativ zum Viewport positioniert.

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

Für die Bonusfrage müssen Sie einen negativen `z-index` zum Ziel hinzufügen, zum Beispiel `z-index: -2`.

</details>

## Aufgabe 2

In dieser Aufgabe scrollt das Seitenleiste-Element mit dem Inhalt, wenn Sie die Box im untenstehenden Beispiel scrollen. Ändern Sie es so, dass die Seitenleiste (`<div class="sidebar">`) an ihrem Platz bleibt und nur der Inhalt scrollt.

![Der Inhalt wird gescrollt, aber die Seitenleiste ist an ihrem Platz geblieben.](position-task2.png)

Versuchen Sie den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

```css hidden live-sample___position2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  height: 400px;
  padding: 0.5em;
  border: 5px solid #ccc;
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
```

```css live-sample___position2
.container {
}

.sidebar {
}
```

{{EmbedLiveSample("position2", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Wir testen Ihr Verständnis von `position: fixed` mit einem etwas anderen Beispiel als denen in den Lernmaterialien.

```css
.sidebar {
  position: fixed;
}
```

</details>

## Siehe auch

- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
