---
title: "`position-try-fallbacks` CSS property"
short-title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die **`position-try-fallbacks`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, eine Liste mit einer oder mehreren alternativen **Positionierungs-Fallback-Optionen** für per Anker positionierte Elemente anzugeben, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element andernfalls seinen durch Inset modifizierten umschließenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen unterschiedlichen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der verhindert, dass es seinen Container oder den Viewport überläuft.

## Syntax

```css
/* Default value: no try fallback options */
position-try-fallbacks: none;

/* Single try option */
position-try-fallbacks: flip-block;
position-try-fallbacks: top;
position-try-fallbacks: --custom-try-option;

/* Multiple value combination option */
position-try-fallbacks: flip-block flip-inline;

/* Multiple values */
position-try-fallbacks: flip-block, flip-inline;
position-try-fallbacks: top, right, bottom;
position-try-fallbacks: --custom-try-option1, --custom-try-option2;
position-try-fallbacks:
  flip-block,
  flip-inline,
  flip-block flip-inline;
position-try-fallbacks:
  flip-block,
  --custom-try-option,
  --custom-try-option flip-inline,
  right;

/* Global values */
position-try-fallbacks: inherit;
position-try-fallbacks: initial;
position-try-fallbacks: revert;
position-try-fallbacks: revert-layer;
position-try-fallbacks: unset;
```

Die Eigenschaft `position-try-fallbacks` kann entweder als Schlüsselwortwert `none` oder als durch Kommata getrennte Liste mit einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen, `<try-tactic>`s oder einem `position-area`-Wert angegeben werden.

### Werte

Diese Eigenschaft wird als Schlüsselwort `none` oder als durch Kommata getrennte Liste der folgenden Werte angegeben:

- `none`
  - : Der Standardwert. Es sind keine Positionierungs-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem sie dessen berechnete Position übernehmen und über eine bestimmte Achse des Ankers transformieren, wobei alle Randversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Dreht die Position des Elements entlang der Blockachse um.
    - `flip-inline`
      - : Dreht die Position des Elements entlang der Inline-Achse um.
    - `flip-start`
      - : Dreht sowohl die Werte der Inline- als auch der Blockachse um, wobei die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- {{cssxref("position-area")}}-Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element anhand des angegebenen {{cssxref("position-area_value","&lt;position-area>")}}-Werts auf einer oder mehreren Zellen eines impliziten 3x3-[Positionsbereichsrasters](/de/docs/Web/CSS/Reference/Properties/position-area#description) platziert wird; der Effekt entspricht einer benutzerdefinierten {{cssxref("@position-try")}}-Fallback-Option, die nur einen {{cssxref("position-area")}}-Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Liste der Fallback-Optionen eine benutzerdefinierte {{cssxref("@position-try")}}-Option hinzu, deren Identifikationsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen vorhanden ist, wird die Option ignoriert.

## Beschreibung

Per Anker positionierte Elemente sollten, sofern möglich, immer an einer für Benutzer bequemen Stelle zur Interaktion erscheinen, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element den Viewport überläuft, ist es häufig erforderlich, seine Position zu ändern, wenn sich sein Anker dem Rand seines umschließenden Elements oder des Viewports nähert.

Dies wird erreicht, indem eine oder mehrere Positionierungs-Fallback-Optionen in der Eigenschaft `position-try-fallbacks` bereitgestellt werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen umschließenden Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste gefundene Option an, die verhindert, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, greift der Browser darauf zurück, das positionierte Element an seiner Standardposition anzuzeigen, bevor Positionierungs-Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie überlaufende positionierte Elemente möglicherweise einfach ausblenden. Dies kann mit der Eigenschaft {{cssxref("position-visibility")}} erreicht werden. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Die Eigenschaft `position-try-fallbacks` kann zusammen mit der Eigenschaft {{cssxref("position-try-order")}} auch über die Kurzform {{cssxref("position-try")}} festgelegt werden.

Ausführliche Informationen zu Ankerfunktionen und zur Verwendung von Positionierungs-Fallbacks finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) sowie im Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

### Vordefinierte &lt;try-tactic&gt;-Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie dessen berechnete Position übernehmen und über eine bestimmte Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Dreht die Position des Elements entlang der Blockachse um, sodass es im gleichen Abstand vom Anker, aber auf dessen gegenüberliegender Seite erscheint. Anders ausgedrückt, spiegelt dies die Position des Elements über eine durch die Mitte des Ankers verlaufende Inline-Achse. Wenn das positionierte Element beispielsweise oben am Anker zu überlaufen beginnt, dreht dieser Wert die Position nach unten um.
- `flip-inline`
  - : Dreht die Position des Elements entlang der Inline-Achse um, sodass es im gleichen Abstand vom Anker, aber auf dessen gegenüberliegender Seite erscheint. Anders ausgedrückt, spiegelt dies die Position des Elements über eine durch die Mitte des Ankers verlaufende Blockachse. Wenn das positionierte Element beispielsweise links am Anker zu überlaufen beginnt, dreht dieser Wert die Position nach rechts um.
- `flip-start`
  - : Spiegelt die Position des Elements über eine diagonal durch die Mitte des Ankers verlaufende Achse, die durch den Schnittpunkt von Blockachsenanfang und Inline-Achsenanfang sowie durch den Schnittpunkt von Blockachsenende und Inline-Achsenende verläuft. Wenn das positionierte Element beispielsweise links am Anker zu überlaufen beginnt, dreht dieser Wert das positionierte Element nach oben um.

### Kombinationsoptionen

Eine einzelne Positionierungs-Fallback-Option kann mehr als eine `<try-tactic>`- oder `dashed-ident`-Option oder eine Kombination aus beiden enthalten, indem sie als eine einzelne, durch Leerzeichen getrennte Option deklariert werden:

- Bei mehreren vordefinierten `<try-tactic>`-Optionen werden ihre Transformationen miteinander kombiniert.
- Bei der Deklaration einer vordefinierten `<try-tactic>`-Option und einer mit `<dashed-ident>` benannten `@position-try`-Option wird zuerst die benutzerdefinierte Positionsoption angewendet, anschließend wird die `<try-tactic>`-Transformation angewendet.

`position-area`-Werte können auf diese Weise nicht kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung einiger vordefinierter `<try-tactic>`-Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem per Anker positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>`-Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Dem Anker werden ein {{cssxref("anchor-name")}} und große Ränder gegeben, um ihn in der Nähe der Mitte des sichtbaren Bereichs von `<body>` zu platzieren:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  anchor-name: --my-anchor;
  margin: 100px 350px;
}
```

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden miteinander zu verknüpfen, und wird mithilfe von `position-area` an die obere linke Ecke des Ankers gebunden.

Wir fügen eine `position-try-fallbacks`-Liste ein (und deklarieren sie mit der Kurzform `position-try` erneut, falls der Langform-Eigenschaftsname noch nicht unterstützt wird). Sie enthält zwei vordefinierte Positionierungs-Fallback-Optionen, um zu verhindern, dass sie überläuft, wenn sich der Anker dem Rand des Viewports nähert, indem sie entlang der Inline- oder Blockachse des Ankers umgedreht wird.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;

  position-try-fallbacks: flip-block, flip-inline;
  position-try: flip-block, flip-inline;
}
```

#### Ergebnis

Dies liefert das folgende Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass sich der Anker den Rändern nähert:

- Wenn Sie den Anker in die Nähe des oberen Viewportrands bewegen, sehen Sie, wie das positionierte Element nach unten links vom Anker gedreht wird, um Überlauf zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Viewportrands bewegen, sehen Sie, wie das positionierte Element nach oben rechts vom Anker gedreht wird, um Überlauf zu vermeiden.

Je nach Browser kann das positionierte Element, nachdem es sich in die Fallback-Position bewegt hat, in dieser Fallback-Position verbleiben, auch wenn die Fallback-Positionierung nicht mehr erforderlich ist, etwa wenn der verfügbare Platz eine Rückkehr zur durch {{cssxref("position-area")}} definierten Position erlaubt.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — da das positionierte Element in Block- und Inline-Richtung zu überlaufen beginnt, dreht es sich zurück in seine standardmäßige obere linke Position und läuft in beide Richtungen über. Das ist nicht das, was wir möchten.

Dies liegt daran, dass wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig zu versuchen. Das nächste Beispiel zeigt Ihnen, wie dieses Problem behoben werden kann.

### Mehrere Werte zu einer Option kombinieren

Verwenden wir eine kombinierte Fallback-Option, um das Problem zu beheben, das wir in der vorherigen Demo gefunden haben.

#### HTML und CSS

Das gesamte HTML und CSS in dieser Demo ist gleich, mit Ausnahme des Codes für das positionierte Element. In diesem Fall erhält es eine dritte Positionierungs-Fallback-Option: `flip-block flip-inline`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;

  position-try:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

#### Ergebnis

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

Die dritte Positionierungs-Fallback-Option bedeutet, dass der Browser `flip-block` und anschließend `flip-inline` versucht, um Überlauf zu vermeiden. Falls diese Fallbacks fehlschlagen, kombiniert er die beiden und dreht die Position des Elements gleichzeitig in Block- und Inline-Richtung um. Wenn Sie den Anker nun in Richtung des oberen _und_ linken Viewportrands scrollen, wird das positionierte Element nach unten rechts verschoben.

### `position-area`-Positionierungs-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area`-Positionierungs-Fallback-Optionen in Aktion.

#### HTML und CSS

Das gesamte HTML und CSS in dieser Demo ist gleich, mit Ausnahme des Codes für das positionierte Element. In diesem Fall sind unsere Positionierungs-Fallback-Optionen allesamt `position-area`-Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Das bedeutet, dass das positionierte Element eine sinnvolle Anzeigeposition findet, unabhängig davon, welchen Viewporträndern sich der Anker nähert. Dieser Ansatz ist etwas ausführlicher als der Ansatz mit vordefinierten Werten, aber auch granularer und flexibler.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.anchor {
  anchor-name: --my-anchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top left;

  position-try:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;

  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

#### Ergebnis

{{ EmbedLiveSample("`position-area` try fallback options", "100%", "250") }}

Scrollen Sie die Seite und betrachten Sie die Wirkung dieser Positionierungs-Fallback-Optionen, während sich der Anker dem Rand des Viewports nähert.

### Beispiele für benutzerdefinierte Try-Optionen

Siehe die Referenzseite zu {{cssxref("@position-try")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}}-At-Regel
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Leitfaden [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
