---
title: "Testen Sie Ihre Fähigkeiten: Multicol"
slug: Learn_web_development/Core/CSS_layout/Multicol_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie das [CSS-Multi-Column-Layout](/de/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) verstehen, einschließlich der Eigenschaften und Werte von {{CSSxRef("column-count")}}, {{CSSxRef("column-width")}}, {{CSSxRef("column-gap")}}, {{CSSxRef("column-span")}} und {{CSSxRef("column-rule")}}. Sie werden an drei kleinen Aufgaben arbeiten, die verschiedene Elemente des Materials verwenden, das Sie gerade behandelt haben.

> [!NOTE]
> Klicken Sie auf **"Play"** in den Codeblöcken unten, um die Beispiele im MDN Playground zu bearbeiten.
> Sie können den Code auch kopieren (klicken Sie auf das Clipboard-Symbol) und ihn in einem Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) einfügen.
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Aufgabe 1

In dieser Aufgabe möchten wir, dass Sie drei Spalten mit einem Abstand von 50px zwischen jeder Spalte erstellen.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Drei Textspalten](multicol-task1.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___multicol1
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css live-sample___multicol1
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
}
```

{{EmbedLiveSample("multicol1", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Für diese Aufgabe müssen Sie `column-count` und `column-gap` verwenden:

```css
.container {
  column-count: 3;
  column-gap: 50px;
}
```

</details>

## Aufgabe 2

In dieser Aufgabe möchten wir, dass Sie Spalten erstellen, die eine Mindestbreite von 200px haben. Fügen Sie dann eine 5px graue Linie zwischen jede Spalte hinzu und sorgen Sie dafür, dass zwischen dem Rand der Linie und dem Spalteninhalt 10px Platz ist.

Ihr Endergebnis sollte wie das Bild unten aussehen:

![Drei Textspalten mit einer grauen Linie dazwischen.](multicol-task2.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___multicol2
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css live-sample___multicol2
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
}
```

{{EmbedLiveSample("multicol2", "", "300px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Sie müssen die Eigenschaften `column-width` und `column-rule` verwenden.
Sie könnten die Langform `column-rule-*` Eigenschaften anstelle der Kurzform verwenden, obwohl es keinen Vorteil bietet, dies zu tun.
Das Wesentliche bei der Verwendung von `column-gap` ist, dass Sie verstanden haben, dass die Linie nicht 5px Raum zum Abstand hinzufügt. Um auf jeder Seite der Linie 10px Abstand zu haben, benötigen Sie einen Abstand von 25px, da die Linie über den Abstand gelegt wird.

```css
.container {
  column-width: 200px;
  column-rule: 5px solid #ccc;
  column-gap: 25px;
}
```

</details>

## Aufgabe 3

In dieser Aufgabe möchten wir, dass das Element, das die Überschrift und Unterüberschrift enthält, sich über alle Spalten erstreckt, damit es wie das Bild unten aussieht:

![Drei Textspalten mit einer Überschrift und Unterüberschrift, die sich über alle drei in der Mitte erstrecken.](multicol-task3.png)

Versuchen Sie, den Live-Code unten zu aktualisieren, um das fertige Beispiel nachzubilden:

```html live-sample___multicol3
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <div class="box">
    <h2>I am a level 2 heading</h2>
    <div class="subhead">Lotus root water spinach fennel</div>
  </div>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css hidden live-sample___multicol3
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.box {
  text-align: center;
  margin: 1em 0;
}

.box h2 {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 0.5em;
  align-items: center;
}

.box h2::before {
  content: "";
  border-bottom: 5px dotted #ccc;
}

.box h2::after {
  content: "";
  border-bottom: 5px dotted #ccc;
}

.subhead {
  font-style: italic;
}
```

```css live-sample___multicol3
.container {
  column-count: 3;
}

.box {
}

h2 {
}
```

{{EmbedLiveSample("multicol3", "", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

In dieser Aufgabe testen wir das Verständnis der Eigenschaft `column-span`.
Alles, was Sie tun müssen, ist, das Element mit einer Klasse von `.box` auf `column-span: all` zu setzen.
Dies ist hauptsächlich eine Aufgabe, um zu überprüfen, dass Sie das richtige Element auswählen.

```css
.box {
  column-span: all;
}
```

</details>

## Siehe auch

- [Grundlagen der CSS-Gestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
