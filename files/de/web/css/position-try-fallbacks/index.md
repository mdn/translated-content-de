---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionstry-Fallback-Optionen** für ankergestützte Elemente anzugeben, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element ansonsten seinen durch Einfügen modifizierten umschließenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis er einen Wert findet, der verhindert, dass es seinen Container oder das Ansichtsfenster überläuft.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um die Werte für {{cssxref("position-try-order")}} und `position-try-fallbacks` in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Solange `position-try-fallbacks` nicht unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Positionstry-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren, wobei alle Randabstände gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 [Positionierungsbereich-Rasters](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert wird; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren Bezeichnungsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Ankergestützte Elemente sollten, wenn möglich, immer an einem bequemen Ort erscheinen, damit der Benutzer mit ihnen interagieren kann, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Ansichtsfenster überläuft, ist es oft erforderlich, seine Position zu ändern, wenn sich sein Anker nah an die Kante seines umschließenden Elements oder des Ansichtsfensters bewegt.

Dies wird erreicht, indem eine oder mehrere Positionstry-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft angegeben werden. Wenn die anfängliche Position des positionierten Elements zu einem Überfluss führen würde, versucht der Browser jede Fallback-Positionierung; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen umschließenden Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die er findet, um zu verhindern, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition zurück, bevor Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen könnte es gewünscht sein, überflüssige positionierte Elemente einfach auszublenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm anzeigbar und nutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und zur Verwendung von Positionstry-Fallback-Optionen siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Überfluss handhaben: Versuch von Fallbacks und bedingtem Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es dieselbe Entfernung vom Anker entfernt, aber auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements über eine Inline-Achse, die durch die Mitte des Ankers gezogen wird. Ein Beispiel: Wenn das positionierte Element beginnt, oben am Anker zu überlaufen, würde dieser Wert die Position nach unten spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es dieselbe Entfernung vom Anker entfernt, aber auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements über eine Blockachse, die durch die Mitte des Ankers gezogen wird. Ein Beispiel: Wenn das positionierte Element beginnt, links vom Anker zu überlaufen, würde dieser Wert die Position nach rechts spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers gezeichnet ist, und die den Punkt am Schnittpunkt der Blockachsen-Startwerte und den Inlineachsen-Startwerten mit dem Punkt am Schnittpunkt der Blockachsende und den Inlineachsende durchläuft. Zum Beispiel: Wenn das positionierte Element beginnt, links vom Anker zu überlaufen, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinationsoptionen

Eine einzige Positionstry-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen oder eine Kombination aus beiden enthalten, indem sie als eine einzige durch Leerzeichen getrennte Option deklariert wird:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen werden deren Transformationen zusammen komponiert.
- Im Fall einer Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@postion-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet und dann die `<try-tactic>` Transformation ausgeführt.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von ein paar vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML beinhaltet zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankergestützten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element so, dass es sehr groß ist und sowohl horizontales als auch vertikales Scrollen ermöglicht.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo nahe dem Mittelpunkt des sichtbaren Bereichs des `<body>` zu platzieren:

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
  anchor-name: --myAnchor;
  margin: 100px 350px;
}
```

Die Infobox erhält eine feste Position, die {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden miteinander zu verknüpfen, und ist an die obere linke Ecke des Ankers mit einem `position-area` gebunden.

Wir fügen eine Liste `position-try-fallbacks` (und deklarieren diese erneut mit der Kurzschreibweise `position-try`, falls der Langschrift-Eigenschaftsname noch nicht unterstützt wird) hinzu, die zwei vordefinierte Positionstry-Fallback-Optionen bietet, um zu verhindern, dass sie überläuft, wenn sich der Anker der Kante des Ansichtsfensters nähert, indem sie entlang der Inline- oder Blockachse des Ankers gespiegelt werden.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top left;

  position-try-fallbacks: flip-block, flip-inline;
  position-try: flip-block, flip-inline;
}
```

#### Ergebnis

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass sich der Anker den Rändern nähert:

- Wenn Sie den Anker nahe an den oberen Rand des Ansichtsfensters bewegen, sehen Sie, wie sich das positionierte Element nach unten links vom Anker dreht, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe an die linke Seite des Ansichtsfensters bewegen, sehen Sie, wie sich das positionierte Element nach oben rechts vom Anker dreht, um ein Überlaufen zu vermeiden.

Wenn Sie jedoch den Anker in die obere linke Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken - wenn das positionierte Element beginnt, in der Block- und Inlinerichtung überzulaufen, kehrt es zu seiner Standardposition oben links zurück und läuft in beide Richtungen über, was wir nicht wollen.

Das liegt daran, dass wir dem Browser nur Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombination mehrerer Werte in einer Option

Lassen Sie uns eine kombinierte Try Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Beispiel gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Positionstry-Fallback-Option: `flip-block flip-inline`:

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
  anchor-name: --myAnchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
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

Die dritte Positionstry-Fallback-Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` ausprobiert, um Überlauf zu vermeiden, und wenn diese Fallbacks fehlschlagen, wird er beide kombinieren und die Position des Elements in den Block- und Inlinerichtungen gleichzeitig spiegeln. Jetzt, wenn Sie den Anker zur oberen _und_ linken Kante des Ansichtsfensters scrollen, wird das positionierte Element nach unten rechts überkippen.

### `position-area` try Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Positionstry-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer für den Code des positionierten Elements. In diesem Fall sind alle unsere Positionstry-Fallback-Optionen `position-area` Werte - `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Das bedeutet, dass das positionierte Element eine angemessene Position zur Anzeige finden wird, unabhängig davon, an welchen Ansichtsfensterrändern sich der Anker befindet. Dieser Ansatz ist etwas umständlicher als der Ansatz mit vordefinierten Werten, aber auch detaillierter und flexibler.

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
  anchor-name: --myAnchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
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

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Positionstry-Fallback-Optionen, wenn sich der Anker der Kante des Ansichtsfensters nähert.

### Beispiele für benutzerdefinierte Try-Optionen

Siehe die {{cssxref("@position-try")}} Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} At-Regel
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [Überfluss handhaben: Versuch von Fallbacks und bedingtem Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
