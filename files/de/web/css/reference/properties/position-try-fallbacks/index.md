---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`position-try-fallbacks** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Position-Try-Fallback-Optionen** anzugeben, um verankerte Elemente relativ zu ihren zugehörigen Anker-Elementen zu platzieren. Wenn das Element ansonsten seinen durch das Inset modifizierten Containing Block überlaufen würde, versucht der Browser, das positionierte Element an diesen verschiedenen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der es davon abhält, sein Container oder das Viewport zu überlaufen.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzform-Eigenschaft kann verwendet werden, um die Werte von {{cssxref("position-try-order")}} und `position-try-fallbacks` in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Solange `position-try-fallbacks` noch nicht unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzform.

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

Die Eigenschaft `position-try-fallbacks` kann entweder als Schlüsselwortwert `none` oder als kommaseparierte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Position-Try-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, indem eventuelle Margenversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- {{cssxref("position-area")}} Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem es das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/Reference/Properties/position-area#description) platziert, basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur eine {{cssxref("position-area")}} Beschreibung enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Ankerpositionierte Elemente sollten immer an einem geeigneten Ort erscheinen, an dem der Benutzer mit ihnen interagieren kann, wenn möglich, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Viewport überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker dem Rand seines Containing Elements oder des Viewports nähert.

Dies wird erreicht, indem man eine oder mehrere Position-Try-Fallback-Optionen in der Eigenschaft `position-try-fallbacks` bereitstellt. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen Containing Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste gefundene an, die das Überlaufen des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm positioniert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition vor der Anwendung der Fallback-Optionen zurück.

> [!NOTE]
> In manchen Situationen möchten Sie vielleicht nur überlaufende positionierte Elemente verbergen, was mit der Eigenschaft {{cssxref("position-visibility")}} erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und verwendbar zu halten.

Für detaillierte Informationen zu Anker-Features und der Verwendung von Position-Try-Fallbacks siehe das [CSS anchor positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Fallback-Optionen und bedingte Verbergung bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es im gleichen Abstand vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Inline-Achse, die durch die Mitte des Ankers verläuft. Zum Beispiel, wenn das positionierte Element am oberen Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach unten spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es im gleichen Abstand vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Blockachse, die durch die Mitte des Ankers verläuft. Zum Beispiel, wenn das positionierte Element am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach rechts spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers verläuft, durch den Punkt am Schnittpunkt der Blockachsen-Start und der Inline-Achsen-Start und den Punkt am Schnittpunkt der Blockachsen-Ende und der Inline-Achsen-Ende. Zum Beispiel, wenn das positionierte Element am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinierte Optionen

Eine einzelne Position-Try-Fallback-Option kann mehr als einen `<try-tactic>` oder `dashed-ident` Optionen enthalten oder eine Kombination von beiden, indem sie als eine einzelne, durch Leerzeichen getrennte Option deklariert werden:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen werden ihre Transformationen zusammengefügt.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet und dann die `<try-tactic>` Transformation.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

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

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Dem Anker wird ein {{cssxref("anchor-name")}} und große Margen gegeben, um ihn irgendwo in der Nähe des Zentrums des sichtbaren Bereichs des `<body>` zu platzieren:

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

Dem Infobox wird eine feste Positionierung gegeben, eine {{cssxref("position-anchor")}} Eigenschaft, die die `anchor-name` des Ankers referenziert, um die beiden zu verknüpfen, und es wird an der oberen linken Ecke des Ankers mit einem `position-area` befestigt.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie mit der `position-try` Kurzform erneut, falls der Langform-Propertyname noch nicht unterstützt wird), und bieten zwei vordefinierte Position-Try-Fallback-Optionen an, um zu verhindern, dass es überläuft, wenn sich der Anker dem Rand des Viewports nähert, indem es entlang der Inline- oder Blockachse des Ankers gespiegelt wird.

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

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass sich der Anker den Rändern nähert:

- Wenn Sie den Anker in die Nähe des oberen Randes des Viewports bewegen, sehen Sie, dass das positionierte Element nach unten links zum Anker spiegelt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Viewports bewegen, sehen Sie, dass das positionierte Element nach oben rechts zum Anker spiegelt, um ein Überlaufen zu vermeiden.

Je nach Browser, sobald sich das positionierte Element in die Fallback-Position bewegt, kann es in der Fallback-Position bleiben, selbst wenn die Fallback-Positionierung nicht mehr erforderlich ist, z. B. wenn der Platz es erlaubt, zur durch {{cssxref("position-area")}} definierten Position zurückzukehren.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem feststellen — wenn das positionierte Element in Block- und Inlinerichtung zu überlaufen beginnt, kehrt es zu seiner Standard-Top-Left-Position zurück und überläuft in beiden Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionsoptionen für `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig zu versuchen. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in eine Option

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem, das wir im vorherigen Beispiel gefunden haben, zu beheben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer für den positionierten Elementcode. In diesem Fall wird ihm eine dritte Position-Try-Fallback-Option gegeben: `flip-block flip-inline`:

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

Die dritte Position-Try-Fallback-Option bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, werden beide kombiniert, indem die Position des Elements gleichzeitig in Block- und Inlinerichtung gespiegelt wird. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element zur unteren rechten Seite umklappen.

### `position-area` Try-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Position-Try-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer für den positionierten Elementcode. In diesem Fall sind unsere Position-Try-Fallback-Optionen alle `position-area` Werte — `oben`, `oben rechts`, `rechts`, `unten rechts`, `unten`, `unten links` und `links`.

Das bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, egal, an welchen Viewport-Rändern sich der Anker befindet. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vordefinierten Werten, aber auch detaillierter und flexibler.

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

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser Position-Try-Fallback-Optionen, wenn sich der Anker den Rand des Viewports nähert.

### Beispiele für benutzerdefinierte Try-Optionen

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
- [Fallback-Optionen und bedingte Verbergung bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
