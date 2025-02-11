---
title: align-items
slug: Web/CSS/align-items
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-items`**-Eigenschaft legt den {{cssxref("align-self")}}-Wert für alle direkten Elemente innerhalb eines Containers als Gruppe fest. Im Flexbox-Modell steuert sie die Ausrichtung der Elemente entlang der {{Glossary("cross_axis", "Querachse")}}. Im Grid-Layout steuert sie die Ausrichtung der Elemente entlang der Blockachse innerhalb ihrer {{Glossary("grid_areas", "Grid-Bereiche")}}.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

Das interaktive Beispiel unten demonstriert einige der Werte für `align-items` mithilfe von Grid- und Flex-Layouts.

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

  - : Die Wirkung dieses Schlüsselworts hängt vom angewandten Layoutmodus ab:

    - In absolut positionierten Layouts verhält sich dieses Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Positionierung von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten ähnlich `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Diese Eigenschaft gilt nicht für Boxen auf Blockebene oder für Tabellenzellen.

- `center`

  - : Die Randbereiche der Flex-Elemente werden entlang der Querachse innerhalb der Linie zentriert. Wenn die Quergröße eines Elements größer als die Flex-Container-Größe ist, wird es gleichmäßig in beide Richtungen überlaufen.

- `start`

  - : Die Elemente werden eng gepackt in Richtung der Startkante des Ausrichtungscontainers entlang der entsprechenden Achse.

- `end`

  - : Die Elemente werden eng gepackt in Richtung der Endkante des Ausrichtungscontainers entlang der entsprechenden Achse.

- `self-start`

  - : Die Elemente werden nah an die Startseite des Containers in der entsprechenden Achse gepackt.

- `self-end`

  - : Die Elemente werden nah an die Endseite des Containers in der entsprechenden Achse gepackt.

- `baseline`, `first baseline`, `last baseline`

  - : Alle Flex-Elemente werden so ausgerichtet, dass ihre [Baseline des Flex-Containers](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) übereinstimmen. Das Element mit dem größten Abstand zwischen seiner Quer-Start-Margin-Kante und seiner Baseline wird mit der Quer-Start-Kante der Linie ausgerichtet.

- `stretch`

  - : Wenn die Elemente kleiner als der Ausrichtungscontainer sind, werden auto-größenangegebene Elemente gleichmäßig vergrößert, um den Container zu füllen, wobei die Breiten- und Höhenbeschränkungen der Elemente berücksichtigt werden.

- `anchor-center`

  - : Bei [verankerten Elementen](/de/docs/Web/CSS/CSS_anchor_positioning) werden die Elemente zentriert in Bezug auf das zugehörige Ankerelement in der Blockrichtung ausgerichtet. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Falls das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überschreitet, was zu Datenverlust führt, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von der relativen Größe des Elements und des Ausrichtungscontainers und ob ein Überlauf zu Datenverlust führen könnte, wird der angegebene Ausrichtungswert beachtet.

Es gibt auch zwei Werte, die für Flexbox definiert wurden, da sie auf Konzepten [der Flexmodellachsen](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) basieren und auch in Grid-Layouts funktionieren:

- `flex-start`

  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente an der Haupt-Start- oder Quer-Start-Seite des Containers aus. Außerhalb eines Flex-Layouts verhält sich dieser Wert wie `start`.

- `flex-end`

  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente an der Haupt-End- oder Quer-End-Seite des Containers aus. Außerhalb eines Flex-Layouts verhält sich dieser Wert wie `end`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel verwenden wir einen Container mit sechs Kind-Elementen. Ein {{htmlelement("select")}}-Dropdown-Menü ermöglicht das Umschalten des {{cssxref("display")}}-Werts des Containers zwischen `grid` und `flex`. Ein zweites Menü ermöglicht die Änderung des Werts der `align-items`-Eigenschaft des Containers.

### CSS

Wir stylen den Container und die Elemente so, dass wir zwei Zeilen oder Reihen von Elementen haben. Wir definieren `.flex`- und `.grid`-Klassen, welche dem Container mit JavaScript zugewiesen werden. Sie setzen den {{cssxref("display")}}-Wert des Containers und ändern dessen Hintergrund- und Rahmenfarben, um einen zusätzlichen Hinweis darauf zu liefern, dass das Layout geändert wurde. Die sechs Flex-Elemente haben jeweils unterschiedliche Hintergrundfarben, wobei das vierte Element zwei Zeilen lang ist und das sechste Element eine vergrößerte Schriftart hat.

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

Wir fügen einen {{htmlelement("div")}}-Container mit sechs verschachtelten `<div>`-Kind-Elementen ein. Der HTML-Code für das Formular und das JavaScript, das die Klasse des Containers ändert, wurde aus Gründen der Kürze weggelassen.

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
- {{cssxref("place-items")}} Kurzform
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Ausrichtung von Boxen im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul
- [Flexibles Box-Layout in CSS](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
