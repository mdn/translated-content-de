---
title: "Testen Sie Ihre Fähigkeiten: Positionierung"
slug: Learn/CSS/CSS_layout/Position_skills
l10n:
  sourceCommit: c507c55f7a9a883d7a0308daa5e883aa0a619133
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es zu beurteilen, ob Sie [Positionierung in CSS](/de/docs/Learn/CSS/CSS_layout/Positioning) unter Verwendung der CSS-{{CSSxRef("position")}}-Eigenschaft und ihrer Werte verstehen. Sie werden zwei kleine Aufgaben durchgehen, die verschiedene Elemente des Materials nutzen, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den untenstehenden Code-Blöcken, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Zwischenablage-Symbol) und in einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie feststecken, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie das Element mit der Klasse `target` oben rechts im Container positionieren, der die 5px graue Umrandung hat.

Ihr Endergebnis sollte wie das untenstehende Bild aussehen:

![Der grüne Kasten befindet sich oben rechts in einem Container mit grauer Umrandung.](position-task1.png)

**Bonusfrage:** Können Sie das Ziel so ändern, dass es unter dem Text angezeigt wird?

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Dies erfordert `position: relative` und `position: absolute` und das Verständnis, wie sie in Bezug zueinander stehen, wobei relative Positionierung einen neuen Positionskontext schafft.
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

In dieser Aufgabe scrollt, wenn Sie die Box im untenstehenden Beispiel scrollen, die Seitenleiste mit dem Inhalt. Ändern Sie es so, dass die Seitenleiste (`<div class="sidebar">`) an Ort und Stelle bleibt und nur der Inhalt scrollt.

![Der Inhalt wird gescrollt, aber die Seitenleiste bleibt an Ort und Stelle.](position-task2.png)

Versuchen Sie, den untenstehenden Code zu aktualisieren, um das fertige Beispiel nachzubilden:

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

Wir testen Ihr Verständnis von `position: fixed` mit einem etwas anderen Beispiel als denjenigen in den Lernmaterialien.

```css
.sidebar {
  position: fixed;
}
```

</details>

## Siehe auch

- [CSS-Bausteine](/de/docs/Learn/CSS/Building_blocks)
