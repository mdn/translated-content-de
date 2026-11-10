---
title: "`justify-content` CSS property"
short-title: justify-content
slug: Web/CSS/Reference/Properties/justify-content
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`justify-content`** legt fest, wie der Browser den Platz zwischen und um Inhaltselemente entlang der {{Glossary("main_axis", "Hauptachse")}} eines Flex-Containers sowie entlang der {{Glossary("Logical_properties#inline_direction", "Inline-Achse")}} von Grid- und Multicol-Containern verteilt.

Das folgende interaktive Beispiel veranschaulicht einige Werte von `justify-content` anhand eines Grid-Layouts.

{{InteractiveExample("CSS Demo: justify-content")}}

```css interactive-example-choice
justify-content: start;
```

```css interactive-example-choice
justify-content: center;
```

```css interactive-example-choice
justify-content: space-between;
```

```css interactive-example-choice
justify-content: space-around;
```

```css interactive-example-choice
justify-content: space-evenly;
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
  width: 220px;
  display: grid;
  grid-template-columns: 60px 60px;
  grid-auto-rows: 40px;
  row-gap: 10px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Positional alignment */
justify-content: center;
justify-content: start;
justify-content: end;
justify-content: flex-start;
justify-content: flex-end;
justify-content: left;
justify-content: right;

/* Normal alignment */
justify-content: normal;

/* Distributed alignment */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
justify-content: stretch;

/* Overflow alignment (for positional alignment only)*/
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: revert;
justify-content: revert-layer;
justify-content: unset;
```

### Werte

Diese Eigenschaft wird mit einem der folgenden Schlüsselwortwerte angegeben:

- `start`
  - : Die Elemente werden ohne Zwischenraum aneinander zur Anfangskante des Ausrichtungscontainers entlang der Hauptachse hin angeordnet.

- `end`
  - : Die Elemente werden ohne Zwischenraum aneinander zur Endkante des Ausrichtungscontainers entlang der Hauptachse hin angeordnet.

- `flex-start`
  - : Die Elemente werden ohne Zwischenraum aneinander zur Anfangskante des Ausrichtungscontainers auf der main-start-Seite des Flex-Containers hin angeordnet.
    Dies gilt nur für Elemente in einem Flex-Layout. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `start` behandelt.

- `flex-end`
  - : Die Elemente werden ohne Zwischenraum aneinander an der Endkante des Ausrichtungscontainers auf der main-end-Seite des Flex-Containers angeordnet.
    Dies gilt nur für Elemente in einem Flex-Layout. Bei Elementen, die keine Kinder eines Flex-Containers sind, wird dieser Wert wie `end` behandelt.

- `center`
  - : Die Elemente werden ohne Zwischenraum aneinander entlang der Hauptachse zur Mitte des Ausrichtungscontainers hin angeordnet.

- `left`
  - : Die Elemente werden ohne Zwischenraum aneinander zur linken Kante des Ausrichtungscontainers hin angeordnet. Wenn die horizontale Achse der Eigenschaft nicht parallel zur Inline-Achse verläuft, etwa wenn [`flex-direction: column;`](/de/docs/Web/CSS/Reference/Properties/flex-direction) gesetzt ist, verhält sich dieser Wert wie `start`.

- `right`
  - : Die Elemente werden ohne Zwischenraum aneinander zur rechten Kante des Ausrichtungscontainers entlang der entsprechenden Achse hin angeordnet. Wenn die Achse der Eigenschaft nicht parallel zur Inline-Achse (in einem Grid-Container) oder zur Hauptachse (in einem Flexbox-Container) verläuft, verhält sich dieser Wert wie `start`.

- `normal`
  - : Verhält sich wie `stretch`, außer bei mehrspaltigen Containern mit einem {{cssxref("column-width")}}-Wert ungleich `auto`. In diesem Fall behalten die Spalten ihre angegebene `column-width`, statt sich so auszudehnen, dass sie den Container ausfüllen. Da sich `stretch` in Flex-Containern wie `start` verhält, gilt dies auch für `normal`.

- `space-between`
  - : Die Elemente werden entlang der Hauptachse gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen benachbarten Elementen ist jeweils gleich. Das erste Element schließt bündig mit der main-start-Kante ab, das letzte mit der main-end-Kante.

- `space-around`
  - : Die Elemente werden entlang der Hauptachse gleichmäßig im Ausrichtungscontainer verteilt. Der Abstand zwischen benachbarten Elementen ist jeweils gleich. Der freie Platz vor dem ersten und nach dem letzten Element beträgt jeweils die Hälfte des Abstands zwischen benachbarten Elementen. Wenn es nur ein Element gibt, wird es zentriert.

- `space-evenly`
  - : Die Elemente werden entlang der Hauptachse gleichmäßig im Ausrichtungscontainer verteilt. Die Abstände zwischen benachbarten Elementen, zwischen der main-start-Kante und dem ersten Element sowie zwischen der main-end-Kante und dem letzten Element sind alle genau gleich groß.

- `stretch`
  - : Wenn die Gesamtgröße der Elemente entlang der Hauptachse kleiner ist als die Größe des Ausrichtungscontainers, werden alle Elemente mit einer `auto`-Größe gleichmäßig (nicht proportional) vergrößert. Dabei werden die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder entsprechende Funktionen) vorgegebenen Beschränkungen eingehalten, sodass die Elemente zusammen den Ausrichtungscontainer entlang der Hauptachse genau ausfüllen.

    > [!NOTE]
    > Bei [Flexboxen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) verhält sich der Wert `stretch` wie `flex-start` oder `start`. Das liegt daran, dass die Ausdehnung in Flexboxen über die Eigenschaft {{CSSXref("flex-grow")}} gesteuert wird.

- `safe`
  - : Wenn das Element über den Ausrichtungscontainer hinausragt, wird es so ausgerichtet, als wäre der Ausrichtungsmodus `start`. Die gewünschte Ausrichtung wird nicht angewendet.

- `unsafe`
  - : Die gewünschte Ausrichtung wird auch dann angewendet, wenn das Element über den Ausrichtungscontainer hinausragt. Im Gegensatz dazu ignoriert `safe` die gewünschte Ausrichtung, um ein Überlaufen zu verhindern.

## Beschreibung

`justify-content` ist im Modul [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) definiert und gilt für Multicol-, Flex- und Grid-Container. Die Eigenschaft gilt nicht für Block-Container und hat dort keine Wirkung.

Diese Eigenschaft teilt viele, aber nicht alle Schlüsselwortwerte mit der Eigenschaft {{cssxref("align-content")}}. `justify-content` ist nicht an der Baseline-Ausrichtung beteiligt und akzeptiert daher keine Baseline-Werte.

In [Flex-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout) legt die Eigenschaft fest, wie positiver freier Platz entlang der Hauptachse zwischen oder um Flex-Elemente verteilt wird. Sie beeinflusst den Platz zwischen Elementen innerhalb einer Zeile, nicht aber den Platz zwischen Zeilen. Die Ausrichtung erfolgt, nachdem die Längen und automatischen Außenabstände berücksichtigt wurden. Wenn daher ein oder mehrere Flex-Elemente in einer Zeile einen {{cssxref("flex-grow")}}-Faktor größer als `0` haben, hat die Eigenschaft keine Wirkung, da in dieser Zeile kein Platz mehr zu verteilen ist. Da die Ausdehnung entlang der Hauptachse außerdem durch {{cssxref("flex")}} gesteuert wird, verhält sich der Wert `stretch` wie `flex-start`.

Bei einem [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verteilt diese Eigenschaft den verfügbaren Platz zwischen oder um Grid-Spalten, nicht um Grid-Elemente. Wenn der Grid-Container größer ist als das Grid selbst, kann die Eigenschaft `justify-content` verwendet werden, um das Grid entlang der Inline-Achse auszurichten und damit die Grid-Spalten zu positionieren.

Grid-Tracks mit der Größe `auto` – und nur solche Tracks – können durch die Eigenschaften `align-content` und `justify-content` ausgedehnt werden. Daher nimmt ein Track mit der Größe `auto` standardmäßig den verbleibenden Platz im Grid-Container ein. Da die Inline-Größe des Grids kleiner sein muss als die des Grid-Containers, damit Platz verteilt werden kann, hat die Eigenschaft in diesem Fall keine Wirkung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Grid-Beispiel

In diesem Beispiel ist ein Grid schmaler als sein Grid-Container. Mit `justify-content` verteilen wir den verfügbaren Platz gleichmäßig zwischen und um die Grid-Spalten.

#### HTML

Der {{htmlelement("section")}}-Container, der unser Grid-Container werden soll, enthält 16 verschachtelte {{htmlelement("div")}}-Elemente, die zu Grid-Elementen werden.

```html
<section class="container">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
```

#### CSS

```css hidden
.container {
  margin: 5px;
  border: 1px solid;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

Wir setzen die Breite des Containers auf `500px` und definieren drei Spalten mit jeweils `80px` Breite. Damit stehen `260px` zur Verfügung, die zwischen oder um die Spalten verteilt werden können. Anschließend setzen wir `justify-content: space-evenly`. Dadurch beträgt der Abstand vor, zwischen und nach den Spalten jeweils `65px`.

Wir legen unterschiedliche Breiten (und Hintergrundfarben) fest, um zu veranschaulichen, wie die Ausrichtung auf die Spalten angewendet wird.

```css
.container {
  display: grid;
  grid: auto-flow / repeat(3, 80px);
  width: 500px;
  justify-content: space-evenly;
}

div {
  background-color: pink;
  width: 80px;
}

div:nth-of-type(n + 9) {
  width: 35px;
  background-color: lightgreen;
}

div:nth-last-of-type(3) {
  width: 250px;
  background-color: lightblue;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic grid example", "100%", 220)}}

Beachten Sie, dass `justify-contents` die Spalten ausrichtet und keine Wirkung auf die Elemente oder deren Ausrichtung innerhalb der Grid-Bereiche hat. Grid-Elemente beeinflussen die Ausrichtung der Spalten nicht, selbst wenn sie über ihre Grid-Zelle hinausragen.

### Das Schlüsselwort safe

Dieses Beispiel veranschaulicht das Schlüsselwort `safe`. Wir definieren vier zentrierte Flex-Elemente, die nicht umbrechen dürfen und deshalb über ihren einzeiligen Flex-Container hinausragen. Wenn wir in der Eigenschaft `justify-content` `safe` zu `center` hinzufügen, verhält sich überlaufender Inhalt so, als wäre der Ausrichtungsmodus `start`.

```html hidden
<p><code>justify-content: center;</code></p>
<section class="container safe">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code></p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
</section>
<p><code>justify-content: safe center;</code> with 3 items</p>
<section class="container safe-center">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</section>
```

```css hidden
.container {
  margin: 5px auto;
  border: 1px dashed;
  box-sizing: border-box;
  background-color: lightblue;
}

div {
  line-height: 1em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
  background-color: pink;
}
```

Für die Container ist `center` festgelegt; bei allen außer dem ersten wird zusätzlich das Schlüsselwort `safe` verwendet:

```css
.container {
  align-items: baseline;
  display: flex;
  width: 350px;
  height: 2em;
}

.safe {
  justify-content: center;
}

.safe-center {
  justify-content: safe center;
}

div {
  flex: 0 0 100px;
}
```

#### Ergebnis

{{EmbedLiveSample("the_safe_keyterm", "100%", 260)}}

Wenn ein Element über den Ausrichtungscontainer hinausragt, verhält sich der Ausrichtungsmodus mit `safe` wie `start`; die Ausrichtung `center` wird nicht angewendet. Das Schlüsselwort `safe` hat keine Wirkung, wenn die Elemente nicht über den Container hinausragen.

### Verteilung von Flex-Elementen veranschaulichen

Dieses Beispiel enthält ein mehrzeiliges Flex-Layout mit Zeilenumbruch. Das zweite Flex-Element hat einen positiven Flex-Wachstumsfaktor und nimmt den gesamten verfügbaren freien Platz in der ersten Flex-Zeile ein.

#### CSS

```css hidden
#container {
  margin: 5px auto;
  border: 1px dashed black;
  box-sizing: border-box;
}

div {
  line-height: 2em;
  border: 1px solid;
  box-sizing: border-box;
  text-align: center;
}
```

```css
#container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between; /* Can be changed in the live sample */
  width: 510px;
}

div {
  line-height: 2em;
  flex: 0 0 120px;
  background-color: pink;
}

div:nth-of-type(2) {
  flex-grow: 1;
  background-color: yellow;
}

div:nth-of-type(n + 9) {
  flex: 0 0 35px;
  background-color: lightgreen;
}
div:last-of-type {
  flex: 0 0 300px;
  background-color: lightblue;
}
```

```html hidden
<section id="container">
  <div>A</div>
  <div>GROW</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
  <div>G</div>
  <div>H</div>
  <div>I</div>
  <div>J</div>
  <div>K</div>
  <div>L</div>
  <div>M</div>
  <div>N</div>
  <div>O</div>
  <div>P</div>
</section>
<select id="justifyContent">
  <option value="start">start</option>
  <option value="end">end</option>
  <option value="flex-start">flex-start</option>
  <option value="flex-end">flex-end</option>
  <option value="center">center</option>
  <option value="left">left</option>
  <option value="right">right</option>
  <option value="space-between" selected>space-between</option>
  <option value="space-around">space-around</option>
  <option value="space-evenly">space-evenly</option>
  <option value="stretch">stretch</option>
</select>
```

```js hidden
const justifyContent = document.getElementById("justifyContent");
justifyContent.addEventListener("change", (evt) => {
  document.getElementById("container").style.justifyContent = evt.target.value;
});
```

#### Ergebnis

{{EmbedLiveSample("Visualizing_flex_item_distribution", "100%", 180)}}

Wählen Sie verschiedene Schlüsselwörter aus dem Dropdown-Menü, um die unterschiedlichen Werte von `justify-content` zu veranschaulichen. Da ein Element in der ersten Zeile wachsen kann, steht dort kein Platz zur Verfügung, den die Eigenschaft `justify-content` verteilen könnte. Beim Wert `space-between` schließt das erste Element jeder Zeile bündig mit der main-start-Kante und das letzte mit der main-end-Kante ab. Wenn eine Zeile nur ein Element enthält, wird es daher an der main-start-Kante ausgerichtet (wie in der letzten Zeile zu sehen). Bei anderen `space-*`-Werten wie `space-evenly` und `space-around` ist das anders: Sie zentrieren Flex-Zeilen mit nur einem Element.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- Modul [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment)
