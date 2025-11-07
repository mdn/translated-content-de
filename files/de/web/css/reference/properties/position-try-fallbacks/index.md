---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`position-try-fallbacks** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Position Try Fallback-Optionen** für Anker-positionierte Elemente zu spezifizieren, damit diese relativ zu ihren zugehörigen Ankerelementen platziert werden. Wenn das Element sonst seinen durch Insets-modifizierten enthaltenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis es einen Wert findet, der verhindert, dass es seinen Container oder das Viewport überläuft.

> [!NOTE]
> Die {{cssxref("position-try")}} Shorthand-Eigenschaft kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration zu spezifizieren.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Shorthand.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als eine durch Kommas getrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoption-Namen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Position Try Fallback-Optionen gesetzt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und sie entlang einer bestimmten Achse des Ankers transformieren, wobei alle Randversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Kippt die Position des Elements entlang der Block-Achse.
    - `flip-inline`
      - : Kippt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Kippt sowohl die Inline- als auch die Block-Achsenwerte, indem die `start` Eigenschaften untereinander und die `end` Eigenschaften untereinander ausgetauscht werden.
- [`position-area`](/de/docs/Web/CSS/Reference/Properties/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugehörigen Ankerelements, indem das positionierte Element auf ein oder mehrere Kacheln eines impliziten 3x3 [Position Area Raster](/de/docs/Web/CSS/Reference/Properties/position-area#description) basierend auf dem spezifizierten {{cssxref("position-area_value","&lt;position-area>")}} Wert gesetzt wird; der Effekt ist derselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Fallback-Optionenliste eine benutzerdefinierte {{cssxref("@position-try")}} Option hinzu, deren identifizierender Name mit dem spezifizierten `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommata getrennt angegeben werden.

## Beschreibung

Anker-positionierte Elemente sollten, wenn irgend möglich, immer an einem bequemen Ort erscheinen, damit der Benutzer mit ihnen interagieren kann, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Viewport überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker in der Nähe des Randes seines enthaltenden Elements oder des Viewports befindet.

Dies wird erreicht, indem man eine oder mehrere Position Try Fallback Optionen in der `position-try-fallbacks` Eigenschaft angibt. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen enthaltenden Block überläuft, wird angewandt. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die verhindert, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zurück zur Anzeige des positionierten Elements in seiner Standardposition, bevor Try Fallback Optionen angewandt wurden.

> [!NOTE]
> In einigen Situationen möchten Sie vielleicht einfach überlaufende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Für detaillierte Informationen zu Anker-Funktionen und der Verwendung von Position Try Fallbacks, siehe das [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modulseite und die [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Anleitung.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und sie entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Kippt die Position des Elements entlang der Block-Achse, sodass es in derselben Entfernung vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt spiegelt es die Position des Elements entlang einer Inline-Achse, die durch die Mitte des Ankers gezogen wird. Als Beispiel, wenn das positionierte Element oben am Anker überläuft, würde dieser Wert seine Position nach unten kippen.
- `flip-inline`
  - : Kippt die Position des Elements entlang der Inline-Achse, sodass es in derselben Entfernung vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt spiegelt es die Position des Elements entlang einer Block-Achse, die durch die Mitte des Ankers gezogen wird. Als Beispiel, wenn das positionierte Element links vom Anker überläuft, würde dieser Wert die Position nach rechts kippen.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers verläuft, durch den Punkt am Schnittpunkt der Block-Achsenstart und Inline-Achsenstart, und den Punkt am Schnittpunkt des Block-Achsenendpunkts und des Inline-Achsenendpunkts. Als Beispiel, wenn das positionierte Element auf der linken Seite des Ankers überläuft, würde dieser Wert das positionierte Element nach oben kippen.

### Kombinationsoptionen

Eine einzelne Position Try Fallback Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen beinhalten, oder eine Kombination aus beiden, indem sie als eine einzelne durch Leerzeichen getrennte Option deklariert wird:

- Im Falle mehrerer vordefinierter `<try-tactic>` Optionen werden deren Transformationen zusammengefasst.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewandt und dann die `<try-tactic>` Transformation.

`position-area` Werte können auf diese Weise nicht kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von ein paar vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem Anker-positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element so, dass es sehr groß ist, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Dem Anker wird ein {{cssxref("anchor-name")}} und große Ränder zugewiesen, um ihn irgendwo in der Nähe des Zentrums des sichtbaren Teils des `<body>` zu platzieren:

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

Dem Infokasten wird eine feste Positionierung gegeben, eine {{cssxref("position-anchor")}} Eigenschaft, die auf das `anchor-name` des Ankers verweist, um die beiden miteinander zu verbinden, und er ist an der oberen linken Ecke des Ankers mit einer `position-area` verknüpft.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Shorthand für den Fall, dass der Langname der Eigenschaft noch nicht unterstützt wird) und bieten zwei vordefinierte Position Try Fallback Optionen an, um zu verhindern, dass sie überläuft, wenn sich der Anker in der Nähe des Rands des Viewports befindet, indem sie entlang der Inline- oder Block-Achse des Ankers kippt.

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

Das ergibt folgendes Resultat:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, so dass sich der Anker den Rändern nähert:

- Wenn Sie den Anker in der Nähe des oberen Rands des Viewports bewegen, sehen Sie, dass das positionierte Element zur unteren linken Seite des Ankers kippt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in der Nähe des linken Rands des Viewports bewegen, sehen Sie, dass das positionierte Element zur oberen rechten Seite des Ankers kippt, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, bemerken Sie ein Problem - da das positionierte Element in der Block- und Inline-Richtung zu überlaufen beginnt, kippt es zurück in seine Standardposition am oberen linken Rand und überläuft in beide Richtungen, was nicht wünschenswert ist.

Das liegt daran, dass wir dem Browser nur die Positionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in eine Option

Lassen Sie uns eine kombinierte Try Fallback Option verwenden, um das Problem zu beheben, das wir im vorherigen Demonstration gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demonstration ist derselbe, mit Ausnahme des Codes des positionierten Elements. In diesem Fall wird ihm eine dritte Position Try Fallback Option gegeben: `flip-block flip-inline`:

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

Die dritte Position Try Fallback Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, werden die beiden kombiniert, sodass die Position des Elements auf einmal in der Block- und Inline-Richtung gekippt wird. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Rändern des Viewports scrollen, wird das positionierte Element nach unten rechts kippen.

### `position-area` Try Fallback Optionen

Dieses Beispiel zeigt einige `position-area` Position Try Fallback Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demonstration ist derselbe, mit Ausnahme des Codes des positionierten Elements. In diesem Fall sind unsere Position Try Fallback Optionen alle `position-area` Werte - `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Dies bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, egal an welchen Rändern des Viewports sich der Anker befindet. Dieser Ansatz ist etwas langatmiger als der der vordefinierten Werte, aber er ist auch detaillierter und flexibler.

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

Scrollen Sie die Seite und beobachten Sie den Effekt dieser Position Try Fallback Optionen, wenn sich der Anker den Rändern des Viewports nähert.

### Beispiele für benutzerdefinierte Try Optionen

Siehe die Referenzseite {{cssxref("@position-try")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} At-Regel
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Anleitung
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Anleitung
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
