---
title: CSS-Eigenschaft `place-self`
short-title: place-self
slug: Web/CSS/Reference/Properties/place-self
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`place-self`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) ermöglicht es Ihnen, ein einzelnes Element gleichzeitig in Block- und Inline-Richtung zu positionieren (d.h. die Eigenschaften {{cssxref("align-self")}} und {{cssxref("justify-self")}}). Diese Eigenschaft gilt für Block-Level-Boxen, absolut positionierte Boxen und Grid-Items. Wenn der zweite Wert fehlt, wird der erste Wert auch für diesen verwendet.

{{InteractiveExample("CSS Demo: place-self")}}

```css interactive-example-choice
place-self: stretch center;
```

```css interactive-example-choice
place-self: center start;
```

```css interactive-example-choice
place-self: start end;
```

```css interactive-example-choice
place-self: end center;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 220px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}

## Syntax

```css
/* Positional alignment */
place-self: auto center;
place-self: normal start;
place-self: center normal;
place-self: start auto;
place-self: end normal;
place-self: self-start auto;
place-self: self-end normal;
place-self: flex-start auto;
place-self: flex-end normal;
place-self: anchor-center;

/* Baseline alignment */
place-self: baseline normal;
place-self: first baseline auto;
place-self: last baseline normal;
place-self: stretch auto;

/* Global values */
place-self: inherit;
place-self: initial;
place-self: revert;
place-self: revert-layer;
place-self: unset;
```

### Werte

Diese Eigenschaft wird als eines oder zwei der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Ermittelt sich zum Wert des Elternelements bei {{cssxref("align-items")}}.
- `normal`
  - : Die Wirkung dieses Schlüsselwortes hängt vom Layoutmodus ab, in dem wir uns befinden:
    - In absolut positionierten Layouts verhält sich das Schlüsselwort wie `start` bei _ersetzten_ absolut positionierten Boxen und wie `stretch` bei _allen anderen_ absolut positionierten Boxen.
    - In der statischen Position von absolut positionierten Layouts verhält sich das Schlüsselwort wie `stretch`.
    - Bei Flex-Elementen verhält sich das Schlüsselwort wie `stretch`.
    - Bei Grid-Elementen führt dieses Schlüsselwort zu einem Verhalten ähnlich dem von `stretch`, außer bei Boxen mit einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} oder einer intrinsischen Größe, wo es sich wie `start` verhält.
    - Die Eigenschaft gilt nicht für Block-Level-Boxen und Tabellenspalten.

- `self-start`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Startseite des Elements in der Querachse entspricht.
- `self-end`
  - : Richtet die Elemente bündig mit dem Rand des Ausrichtungscontainers aus, der der Endseite des Elements in der Querachse entspricht.
- `flex-start`
  - : Der Queranfang-Margenrand des Flex-Elements ist bündig mit dem Queranfangrand der Linie.
- `flex-end`
  - : Der Querend-Margenrand des Flex-Elements ist bündig mit dem Querendrand der Linie.
- `center`
  - : Die Margenbox des Flex-Elements wird innerhalb der Linie auf der Querachse zentriert. Ist die Körperspanne des Elements größer als der Flex-Container, wird es in beide Richtungen gleichmäßig überlaufen.
- `baseline`, `first baseline`, `last baseline`
  - : Gibt die Teilnahme an der ersten oder letzten Basislinienausrichtung an: richtet die Ausrichtungsbasislinie des ersten oder letzten Basislinensets der Box an der entsprechenden Basislinie im gemeinsamen ersten oder letzten Basislinenset aller Boxen in seiner Basislinien-Sharing-Gruppe aus.
    Die Fallback-Ausrichtung für `first baseline` ist `start`, die für `last baseline` ist `end`.
- `stretch`
  - : Wenn die kombinierte Größe der Elemente entlang der Querachse kleiner ist als die Größe des Ausrichtungscontainers und das Element auf `auto` gesetzt ist, wird seine Größe gleichmäßig (nicht proportional) erhöht, während dennoch die durch {{cssxref("max-height")}}/{{cssxref("max-width")}} (oder gleichwertige Funktionalitäten) auferlegten Einschränkungen respektiert werden, sodass die kombinierte Größe aller `auto`-größengesteuerten Elemente den Ausrichtungscontainer entlang der Querachse genau ausfüllt.
- `anchor-center`
  - : Bei [ankerpositionierten](/de/docs/Web/CSS/Guides/Anchor_positioning) Elementen richtet es das Element in der Mitte des zugehörigen Ankerelements in Block- und Inlinerichtung aus. Siehe [Zentrierung auf dem Anker mit `anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Demonstration

Im folgenden Beispiel haben wir ein 2 x 2 Grid-Layout. Zunächst hat der Grid-Container die {{cssxref("justify-items")}} und {{cssxref("align-items")}} Werte `stretch` — die Standardwerte — was bewirkt, dass sich die Grid-Elemente über die gesamte Breite ihrer Zellen erstrecken.

Die zweiten, dritten und vierten Grid-Elemente erhalten dann unterschiedliche Werte für `place-self`, um zu zeigen, wie diese die Standardplatzierungen überschreiben. Diese Werte bewirken, dass die Grid-Elemente nur so breit/hoch wie ihre Inhaltsbreite/-höhe sind, und sie in ihren Zellen unterschiedlich positioniert werden, in Block- und Inlinerichtung.

#### HTML

```html
<article class="container">
  <span>First</span>
  <span>Second</span>
  <span>Third</span>
  <span>Fourth</span>
</article>
```

#### CSS

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
  letter-spacing: 1px;
}

article {
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
  margin: 20px;
  width: 300px;
}

span:nth-child(2) {
  place-self: start center;
}

span:nth-child(3) {
  place-self: center start;
}

span:nth-child(4) {
  place-self: end;
}

article span {
  background-color: black;
  color: white;
  margin: 1px;
  text-align: center;
}

article,
span {
  padding: 10px;
  border-radius: 7px;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_demonstration', '100%', 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("align-self")}}
- {{cssxref("justify-self")}}
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
