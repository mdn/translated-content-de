---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungstrick-Fallback-Optionen** für ankerpositionierte Elemente zu spezifizieren, die relativ zu ihren zugeordneten Ankerelementen platziert werden sollen. Wenn das Element andernfalls seinen durch Inset modifizierten beinhaltenden Block überschreiten würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der das Überlaufen aus seinem Container oder dem Viewport verhindert.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um die {{cssxref("position-try-order")}}- und `position-try-fallbacks`-Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit den gleichen Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

## Syntax

```css
/* Standardwert: keine Fallback-Optionen */
position-try-fallbacks: none;

/* Einzelne Fallback-Option */
position-try-fallbacks: flip-block;
position-try-fallbacks: top;
position-try-fallbacks: --custom-try-option;

/* Mehrfacher Wertkombinationsoption */
position-try-fallbacks: flip-block flip-inline;

/* Mehrere Werte */
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

/* Globale Werte */
position-try-fallbacks: inherit;
position-try-fallbacks: initial;
position-try-fallbacks: revert;
position-try-fallbacks: revert-layer;
position-try-fallbacks: unset;
```

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren leerzeichengetrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Positions-Trick-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen bewegen das positionierte Element, indem sie seine berechnete Position nehmen und sie über eine bestimmte Achse des Ankers transformieren, wobei alle Randverschiebungen gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, wobei die `start` Eigenschaften untereinander und die `end` Eigenschaften untereinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugeordneten Ankerelements, indem es das positionierte Element auf einem oder mehreren Kacheln eines impliziten 3x3 [Positionierungsbereichsrasters](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert; die Wirkung ist dieselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Fallback-Optionsliste eine benutzerdefinierte {{cssxref("@position-try")}} Option mit entsprechendem identifizierendem Namen hinzu. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Ankerpositionierte Elemente sollten immer an einem für den Benutzer bequem zugänglichen Ort erscheinen, wenn möglich, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element den Viewport überschreitet, ist es oft erforderlich, seinen Standort zu ändern, wenn sich sein Anker den Rändern seines beinhaltenden Elements oder des Viewports nähert.

Dies wird durch Bereitstellung von einer oder mehreren Positions-Trick-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft erreicht. Wenn die anfängliche Position des positionierten Elements überschreiten würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die das Element nicht zum Überlauf bringt, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die er findet und die den Überlauf des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, zeigt der Browser das positionierte Element in seiner Standardposition an, bevor irgendwelche Fallback-Optionen versucht wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise überlaufende positionierte Elemente einfach ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Für detaillierte Informationen zu Ankereigenschaften und der Verwendung von Positions-Trick-Fallbacks siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den Leitfaden [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es die gleiche Entfernung vom Anker, aber auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt: es spiegelt die Position des Elements über eine Inline-Achse, die durch die Mitte des Ankers gezogen wird. Beispielsweise, wenn das positionierte Element oben am Anker überzulaufen begann, würde dieser Wert die Position nach unten kippen.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es die gleiche Entfernung vom Anker, aber auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt: es spiegelt die Position des Elements über eine Blockachse, die durch die Mitte des Ankers gezogen wird. Beispielsweise, wenn das positionierte Element links vom Anker überzulaufen begann, würde dieser Wert die Position nach rechts kippen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers verläuft, durch den Punkt, der sich an der Schnittstelle der Blockachsenstart und der Inlineachsenstart befindet, und den Punkt, der sich an der Schnittstelle der Blockachsenend und der Inlineachsenend befindet. Beispielsweise, wenn das positionierte Element links vom Anker überzulaufen begann, würde dieser Wert das positionierte Element nach oben kippen.

### Kombinationsoptionen

Eine einzelne Positions-Trick-Fallback-Option kann mehr als einen `<try-tactic>` oder `dashed-ident` Optionen enthalten, oder eine Kombination von beiden, indem sie als eine einzelne leerzeichengetrennte Option erklärt:

- Im Fall mehrerer vordefinierter `<try-tactic>` Optionen werden ihre Transformationen zusammengeführt.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@postion-try` Option wird die benutzerdefinierte Positionsoption zuerst angewendet, dann wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung einiger vordefinierter `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Abstände, um ihn irgendwo in der Nähe der Mitte des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden zu verknüpfen, und sie wird an der oberen linken Ecke des Ankers mit einem `position-area` verankert.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langnamen der Eigenschaft noch nicht unterstützt wird), die zwei vordefinierte Positions-Trick-Fallback-Optionen bereitstellt, um zu verhindern, dass sie überläuft, wenn der Anker sich an den Rand des Viewports nähert, indem sie entlang der Inline- oder Blockachse des Ankers kippt.

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

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass sich der Anker den Rändern nähert:

- Wenn Sie den Anker in die Nähe des oberen Randes des Viewports bewegen, sehen Sie, dass das positionierte Element zum unteren linken Bereich des Ankers kippt, um Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe der linken Seite des Viewports bewegen, sehen Sie, dass das positionierte Element in die obere rechte Ecke des Ankers kippt, um Überlaufen zu vermeiden.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — sobald das positionierte Element in Block- und Inlinerichtung zu überlaufen beginnt, kippt es zurück zu seiner Standardposition oben links und überläuft in beide Richtungen, was nicht das gewünschte Ergebnis ist.

Dies liegt daran, dass wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beides gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombination mehrerer Werte zu einer Option

Lassen Sie uns eine kombinierte Probefallbackoption verwenden, um das Problem zu beheben, das wir im vorherigen Beispiel gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer dem Code für das positionierte Element. In diesem Fall erhält es eine dritte Positions-Trick-Fallback-Option: `flip-block flip-inline`:

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

Die dritte Positions-Trick-Fallback-Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden, und wenn diese Fallbacks fehlschlagen, kombiniert er die beiden, indem er die Position des Elements gleichzeitig in Block- und Inlinerichtung kippen lässt. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Kante des Viewports scrollen, wird das positionierte Element zur unteren rechten Ecke kippen.

### `position-area` Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Positions-Trick-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer dem Code für das positionierte Element. In diesem Fall sind unsere Positions-Trick-Fallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position zum Anzeigen findet, egal in welcher Nähe der Anker zu den Rändern des Viewports ist. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vordefinierten Werten, aber auch feiner und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Positions-Trick-Fallback-Optionen, wenn sich der Anker den Rändern des Viewports nähert.

### Beispiele für benutzerdefinierte Fallback-Optionen

Sehen Sie sich die {{cssxref("@position-try")}} Referenzseite an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} at-rule
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [Überlauf behandeln: Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
