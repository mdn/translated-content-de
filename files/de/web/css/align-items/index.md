---
title: align-items
slug: Web/CSS/align-items
l10n:
  sourceCommit: a731cff4afe1132e84c29c3044c9ac4a58888f46
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-items`** Eigenschaft setzt den Wert von {{cssxref("align-self")}} auf alle direkten Kinder als Gruppe. Im Flexbox-Layout steuert sie die Ausrichtung von Elementen auf der {{Glossary("cross_axis", "Querachse")}}. Im Grid-Layout steuert sie die Ausrichtung der Elemente auf der Blockachse innerhalb ihrer {{Glossary("grid_areas", "Gitternetzbereiche")}}.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

Das interaktive Beispiel unten demonstriert einige der Werte für `align-items` unter Verwendung von Grid- und Flex-Layout.

## Syntax

```css
/* Basic keywords */
align-items: normal;
align-items: stretch;

/* Positional alignment */
/* align-items does not take left and right values */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

/* Baseline alignment */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Overflow alignment (for positional alignment only) */
align-items: safe center;
align-items: unsafe center;

/* Global values */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Werte

- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt vom verwendeten Layout-Modus ab:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` auf _ersetzten_ absolut positionierten Boxen und wie `stretch` auf _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer für Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, bei denen es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für block-level Boxen und Tabellenspalten.

- `center`

  - : Die Margin-Boxen der Flex-Elemente werden innerhalb der Linie auf der Querachse zentriert. Wenn die Quergröße eines Elements größer ist als der Flex-Container, wird es in beide Richtungen gleichmäßig überlaufen.

- `start`

  - : Die Elemente sind bündig zueinander gepackt in Richtung der Startkante des Ausrichtungscontainers auf der entsprechenden Achse.

- `end`

  - : Die Elemente sind bündig zueinander gepackt in Richtung der Endkante des Ausrichtungscontainers auf der entsprechenden Achse.

- `self-start`

  - : Die Elemente sind bündig zur Kante der Startseite des Ausrichtungscontainers des Elements auf der entsprechenden Achse gepackt.

- `self-end`

  - : Die Elemente sind bündig zur Kante der Endseite des Ausrichtungscontainers des Elements auf der entsprechenden Achse gepackt.

- `baseline`, `first baseline`, `last baseline`

  - : Alle Flex-Elemente sind so ausgerichtet, dass ihre [Flex-Container-Baselines](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) übereinstimmen. Das Element mit der größten Distanz zwischen seinem Quer-Start-Margin-Rand und seiner Baseline ist bündig mit dem Quer-Start-Rand der Linie.

- `stretch`

  - : Wenn die Elemente kleiner als der Ausrichtungscontainer sind, werden auto-größenbestimmte Elemente gleichmäßig vergrößert, um den Container zu füllen, wobei die Breiten- und Höhenbeschränkungen der Elemente respektiert werden.

- `anchor-center`

  - : Im Fall von [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen werden die Elemente zur Mitte des zugehörigen Ankerelements in Blockrichtung ausgerichtet. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen von Element und Ausrichtungscontainer und ob ein Überlauf, der Datenverlust verursachen könnte, auftreten könnte, wird der gegebene Ausrichtungswert geehrt.

Es gibt auch zwei Werte, die für Flexbox definiert wurden, da sie auf [Flexmodell-Achsen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) Konzepten basieren, die auch in Grid-Layouts funktionieren:

- `flex-start`

  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig an der Haupt-Start- oder Quer-Start-Seite des Flex-Containers aus. Wenn außerhalb eines Flex-Formatierungskontexts verwendet, verhält sich dieser Wert wie `start`.

- `flex-end`
  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig an der Haupt-End- oder Quer-End-Seite des Flex-Containers aus. Wenn außerhalb eines Flex-Formatierungskontexts verwendet, verhält sich dieser Wert wie `end`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel haben wir einen Container mit sechs Kindern. Ein {{htmlelement("select")}} Dropdown-Menü ermöglicht das Umschalten des {{cssxref("display")}} des Containers zwischen `grid` und `flex`. Ein zweites Menü ermöglicht das Ändern des Werts der `align-items` Eigenschaft des Containers.

### CSS

Wir gestalten den Container und die Elemente so, dass wir zwei Zeilen oder Reihen von Elementen haben. Wir haben `.flex` und `.grid` Klassen definiert, die mit JavaScript auf den Container angewendet werden. Sie setzen den {{cssxref("display")}} Wert des Containers und ändern seine Hintergrund- und Rahmenfarben, um einen zusätzlichen Hinweis darauf zu geben, dass sich das Layout geändert hat. Die sechs Flex-Elemente haben jeweils eine unterschiedliche Hintergrundfarbe, wobei das 4. Element zwei Zeilen lang ist und das 6. Element eine vergrößerte Schrift hat.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Change the value in the live sample */
  border: solid 5px transparent;
  gap: 3px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  background-color: #8c8c9f;
  border-color: magenta;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  background-color: #9f8c8c;
  border-color: slateblue;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}
```

```css hidden
select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}

div > div {
  box-sizing: border-box;
  border: 2px solid #fff;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### HTML

Wir fügen einen Container {{htmlelement("div")}} mit sechs verschachtelten `<div>` Kindern ein. Der HTML-Code für das Formular und das JavaScript, das die Klasse des Containers ändert, wurden der Übersichtlichkeit halber ausgeblendet.

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4<br />line 2</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>
```

```html hidden
<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "260", "290")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("align-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("place-items")}} Kurzschreibweise
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
