---
title: align-items
slug: Web/CSS/align-items
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) **`align-items`** Eigenschaft setzt den {{cssxref("align-self")}} Wert für alle direkten Kinder als Gruppe. Im Flexbox-Modell steuert es die Ausrichtung der Elemente auf der {{glossary("cross axis")}}. Im Grid-Layout steuert es die Ausrichtung der Elemente auf der Blockachse innerhalb ihrer {{glossary("grid areas")}}.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

Das interaktive Beispiel unten zeigt einige der Werte für `align-items` unter Verwendung von Grid- und Flex-Layouts.

## Syntax

```css
/* Grundlegende Schlüsselwörter */
align-items: normal;
align-items: stretch;

/* Positionale Ausrichtung */
/* align-items nimmt keine linke und rechte Werte an */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;
align-items: anchor-center;

/* Basislinien-Ausrichtung */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Überlaufausrichtung (nur für positionale Ausrichtung) */
align-items: safe center;
align-items: unsafe center;

/* Globale Werte */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### Werte

- `normal`

  - : Die Wirkung dieses Schlüsselworts hängt von dem Layoutmodus ab, in dem wir uns befinden:

    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Für Flex-Elemente verhält sich das Schlüsselwort wie `stretch`.
    - Für Grid-Elemente führt dieses Schlüsselwort zu einem Verhalten, das dem von `stretch` ähnelt, außer bei Boxen mit einem {{glossary("aspect ratio")}} oder intrinsischen Größen, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenzellen.

- `center`

  - : Die Randboxen der Flex-Elemente sind innerhalb der Linie auf der Kreuzachse zentriert. Wenn die Kreuzgröße eines Elements größer als der Flex-Container ist, wird es in beide Richtungen gleichmäßig überlaufen.

- `start`

  - : Die Elemente werden bündig zueinander in Richtung der Anfangskante des Ausrichtungscontainers auf der jeweiligen Achse gepackt.

- `end`

  - : Die Elemente werden bündig zueinander in Richtung der Endkante des Ausrichtungscontainers auf der jeweiligen Achse gepackt.

- `self-start`

  - : Die Elemente werden bündig zur Kante der Anfängerseite des Ausrichtungscontainers des Elements, auf der jeweiligen Achse, gepackt.

- `self-end`

  - : Die Elemente werden bündig zur Kante der Enderseite des Ausrichtungscontainers des Elements, auf der jeweiligen Achse, gepackt.

- `baseline`, `first baseline`, `last baseline`

  - : Alle Flex-Elemente sind so ausgerichtet, dass ihre [Flex-Container-Basislinien](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) übereinstimmen. Das Element mit dem größten Abstand zwischen seiner Kreuzanfang-Randkante und seiner Basislinie wird mit der Kreuzanfang-Kante der Linie bündig gemacht.

- `stretch`

  - : Wenn die Elemente kleiner als der Ausrichtungscontainer sind, werden automatisch angepasste Elemente gleichermaßen vergrößert, um den Container zu füllen, wobei die Begrenzungen für die Breite und Höhe der Elemente respektiert werden.

- `anchor-center`

  - : Bei [ankerpositionierten](/de/docs/Web/CSS/CSS_anchor_positioning) Elementen richtet sich das Ankerzentrum an der Mitte des zugehörigen Ankerelements in Blockrichtung aus. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Wenn das gewählte Schlüsselwort bedeutet, dass das Element den Ausrichtungscontainer überläuft und Datenverlust verursacht, wird das Element stattdessen so ausgerichtet, als ob der Ausrichtungsmodus `start` wäre.

- `unsafe`

  - : Wird zusammen mit einem Ausrichtungs-Schlüsselwort verwendet. Unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers und davon, ob ein Überlauf, der zu Datenverlust führt, auftreten könnte, wird der gegebene Ausrichtungswert beachtet.

Es gibt auch zwei Werte, die für Flexbox definiert wurden, da sie auf Konzepten der [Flexmodell-Achsen](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) basieren, die auch in Grid-Layouts funktionieren:

- `flex-start`

  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig zur Haupt- oder Kreuzanfangskante des Flex-Containers aus. Wenn es außerhalb eines Flex-Formatierungskontexts verwendet wird, verhält sich dieser Wert wie `start`.

- `flex-end`
  - : Wird nur im Flex-Layout verwendet, richtet die Flex-Elemente bündig zur Haupt- oder Kreuzendkannte des Flex-Containers aus. Wenn es außerhalb eines Flex-Formatierungskontexts verwendet wird, verhält sich dieser Wert wie `end`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel haben wir einen Container mit sechs Kindern. Ein {{htmlelement("select")}} Dropdown-Menü ermöglicht das Umschalten des {{cssxref("display")}} des Containers zwischen `grid` und `flex`. Ein zweites Menü ermöglicht das Ändern des Werts der `align-items` Eigenschaft des Containers.

### CSS

Wir gestalten den Container und die Elemente so, dass wir zwei Zeilen oder Reihen von Elementen haben. Wir definierten `.flex` und `.grid` Klassen, die mit JavaScript auf den Container angewendet werden. Sie setzen den {{cssxref("display")}} Wert des Containers und ändern dessen Hintergrund- und Rahmenfarben, um einen zusätzlichen Indikator dafür zu bieten, dass sich das Layout geändert hat. Die sechs Flex-Elemente haben jeweils eine andere Hintergrundfarbe, wobei das 4. Element zwei Zeilen lang und das 6. Element mit vergrößerter Schrift ist.

```css
.flex,
.grid {
  height: 200px;
  width: 500px;
  align-items: initial; /* Ändern Sie den Wert im Live-Beispiel */
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

Wir beinhalten einen Container {{htmlelement("div")}} mit sechs verschachtelten `<div>` Kindern. Der HTML-Code für das Formular und das JavaScript, das die Klasse des Containers ändert, wurden der Kürze halber verborgen.

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
- {{cssxref("place-items")}} Shorthand
- [Grundkonzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
