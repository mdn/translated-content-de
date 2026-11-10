---
title: "`align-items` CSS property"
short-title: align-items
slug: Web/CSS/Reference/Properties/align-items
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS-Eigenschaft](/de/docs/Web/CSS) **`align-items`** legt den Wert von {{cssxref("align-self")}} für alle direkten Kindelemente als Gruppe fest. In Flexbox steuert sie die Ausrichtung der Elemente auf der {{Glossary("cross_axis", "Querachse")}}. Im Grid-Layout steuert sie die Ausrichtung der Elemente auf der Blockachse innerhalb ihrer {{Glossary("grid_areas", "Grid-Bereiche")}}.

Das folgende interaktive Beispiel verwendet ein Grid-Layout, um einige Werte dieser Eigenschaft zu veranschaulichen.

{{InteractiveExample("CSS Demo: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

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
align-items: last baseline;

/* Overflow alignment (for positional alignment only) */
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

Diese Eigenschaft wird mit einem oder zwei der folgenden Schlüsselwortwerte angegeben:

- `normal`
  - : Die Wirkung dieses Schlüsselworts hängt vom Layoutmodus ab:
    - In Layouts mit absoluter Positionierung verhält sich das Schlüsselwort bei absolut positionierten _ersetzten_ Boxen wie `start` und bei _allen anderen_ absolut positionierten Boxen wie `stretch`.
    - Bei der statischen Position in Layouts mit absoluter Positionierung verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem ähnlichen Verhalten wie `stretch`. Bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe verhält es sich jedoch wie `start`.
    - Die Eigenschaft gilt weder für Boxen auf Blockebene noch für Tabellenzellen.

- `center`
  - : Die Margin-Boxen der Flex-Elemente werden innerhalb der Zeile auf der Querachse zentriert. Ist die Größe eines Elements auf der Querachse größer als die des Flex-Containers, ragt es in beide Richtungen gleich weit über.

- `start`
  - : Die Elemente werden aneinanderliegend zur Anfangskante des Ausrichtungscontainers auf der jeweiligen Achse hin angeordnet.

- `end`
  - : Die Elemente werden aneinanderliegend zur Endkante des Ausrichtungscontainers auf der jeweiligen Achse hin angeordnet.

- `self-start`
  - : Die Elemente werden bündig an der Kante des Ausrichtungscontainers angeordnet, die auf der jeweiligen Achse der Anfangsseite des Elements entspricht.

- `self-end`
  - : Die Elemente werden bündig an der Kante des Ausrichtungscontainers angeordnet, die auf der jeweiligen Achse der Endseite des Elements entspricht.

- `baseline`, `first baseline`, `last baseline`
  - : Alle Flex-Elemente werden so ausgerichtet, dass ihre [Basislinien im Flex-Container](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) übereinstimmen. Das Element mit dem größten Abstand zwischen seiner Margin-Kante am Anfang der Querachse und seiner Basislinie wird bündig an der Anfangskante der Zeile auf der Querachse ausgerichtet.

- `stretch`
  - : Ist die Größe des Elements auf der Querachse `auto`, wird die verwendete Größe auf die Länge festgelegt, die den Container unter Berücksichtigung der Breiten- und Höhenbeschränkungen des Elements möglichst vollständig ausfüllt. Hat das Element keine automatische Größe, fällt dieser Wert auf `flex-start` zurück. Ist {{cssxref("align-content")}} des Containers `first baseline` (oder `baseline`) beziehungsweise `last baseline`, fällt er auf `self-start` beziehungsweise `self-end` zurück.

- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen werden die Elemente in Blockrichtung an der Mitte des zugehörigen Ankerelements ausgerichtet. Siehe [Zentrieren am Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

- `safe`
  - : Wird zusammen mit einem Schlüsselwort für die Ausrichtung verwendet. Wenn das gewählte Schlüsselwort dazu führen würde, dass das Element über den Ausrichtungscontainer hinausragt und dadurch Daten verloren gehen, wird das Element stattdessen so ausgerichtet, als wäre der Ausrichtungsmodus `start`.

- `unsafe`
  - : Wird zusammen mit einem Schlüsselwort für die Ausrichtung verwendet. Der angegebene Ausrichtungswert wird unabhängig von den relativen Größen des Elements und des Ausrichtungscontainers sowie von einem möglichen Überlauf mit Datenverlust angewendet.

Daneben gibt es zwei Werte, die für Flexbox definiert wurden, da sie auf Konzepten der [Achsen des Flex-Modells](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) beruhen. Sie funktionieren auch in Grid-Layouts:

- `flex-start`
  - : Richtet Flex-Elemente ausschließlich im Flex-Layout bündig an der Anfangsseite des Flex-Containers auf der Haupt- oder Querachse aus. Außerhalb eines Flex-Formatierungskontexts verhält sich dieser Wert wie `start`.

- `flex-end`
  - : Richtet Flex-Elemente ausschließlich im Flex-Layout bündig an der Endseite des Flex-Containers auf der Haupt- oder Querachse aus. Außerhalb eines Flex-Formatierungskontexts verhält sich dieser Wert wie `end`.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In diesem Beispiel gibt es einen Container mit sechs Kindelementen. Über ein {{htmlelement("select")}}-Auswahlmenü lässt sich {{cssxref("display")}} des Containers zwischen `grid` und `flex` umschalten. Mit einem zweiten Menü lässt sich der Wert der Eigenschaft `align-items` des Containers ändern.

### HTML

Wir verwenden ein {{htmlelement("div")}} als Container mit sechs verschachtelten `<div>`-Kindelementen. Der Kürze halber sind das HTML für das Formular und das JavaScript, das die Klasse des Containers ändert, ausgeblendet.

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

### CSS

Wir gestalten den Container und die Elemente so, dass zwei Zeilen mit Elementen entstehen. Wir definieren die Klassen `.flex` und `.grid`, die dem Container per JavaScript zugewiesen werden. Sie legen den Wert von {{cssxref("display")}} für den Container fest und ändern seine Hintergrund- und Rahmenfarben. So wird der Wechsel des Layouts zusätzlich sichtbar. Die sechs Flex-Elemente haben jeweils eine andere Hintergrundfarbe. Das vierte Element erstreckt sich über zwei Textzeilen, und das sechste hat eine größere Schrift.

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
  border: 2px solid white;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
- Kurzschreibweise {{cssxref("place-items")}}
- [Grundlagen von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Modul [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment)
- Modul [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)
