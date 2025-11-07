---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierung-Ausweichoptionen** für verankerte Elemente anzugeben, die in Bezug auf ihre zugehörigen Ankerelemente platziert werden sollen. Wenn das Element sonst seinen durch Insets modifizierten enthaltenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Ausweichpositionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der das Überlaufen des Containers oder des Viewports verhindert.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzform-Eigenschaft kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` mit denselben Eigenschaftswerten unterstützt. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzform.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoption-Namen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Ausweichoptionen für die Positionierung festgelegt.
- `<try-tactic>`
  - : Vordefinierte Ausweichoptionen bewegen das positionierte Element, indem sie seine berechnete Position entlang einer bestimmten Achse des Ankers transformieren, wobei eventuelle Margin-Versätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inlineachse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachse, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/Reference/Properties/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugehörigen Ankerelements, indem es das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3 [Position-Area-Rasters](/de/docs/Web/CSS/Reference/Properties/position-area#description) platziert, basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert; der Effekt ist derselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Ausweichoption, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Ausweichoptionsliste eine benutzerdefinierte {{cssxref("@position-try")}} Option hinzu, deren identifizierender Name dem angegebenen `dashed-ident` entspricht. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Verankerte Elemente sollten, wenn möglich, immer an einem benutzerfreundlichen Ort erscheinen, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element den Viewport überläuft, muss oft seine Position geändert werden, wenn sich sein Anker nahe am Rand des enthaltenden Elements oder des Viewports befindet.

Dies wird erreicht, indem eine oder mehrere Ausweichoptionen für die Positionierung in der `position-try-fallbacks` Eigenschaft angegeben werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Ausweichpositionierung; die erste Ausweichoption, die nicht zum Überlaufen des enthaltenden Blocks führt, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die das Überlaufen des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zur Anzeige des positionierten Elements in seiner Standardposition zurück, bevor irgendwelche Ausweichoptionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchte man überlaufende positionierte Elemente einfach ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Anker-Features und der Verwendung von Ausweichoptionen bei Überlauf, siehe das [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den Leitfaden zu [Ausweichoptionen und bedingtem Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie dessen berechnete Position entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, so dass es in derselben Entfernung vom Anker, aber auf der gegenüberliegenden Seite erscheint. Anders gesagt: Es spiegelt die Position des Elements über eine Inlineachse, die durch die Mitte des Ankers verläuft. Wenn das positionierte Element beispielsweise am oberen Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach unten klappen.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inlineachse, so dass es in derselben Entfernung vom Anker, aber auf der gegenüberliegenden Seite erscheint. Anders gesagt: Es spiegelt die Position des Elements über eine Blockachse, die durch die Mitte des Ankers verläuft. Wenn das positionierte Element beispielsweise am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach rechts klappen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Diagonale, die durch die Mitte des Ankers verläuft, indem sie durch den Punkt an der Schnittstelle der Blockachse Start und der Inlineachse Start und den Punkt an der Schnittstelle der Blockachse Ende und der Inlineachse Ende führt. Als Beispiel: Wenn das positionierte Element am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinationsoptionen

Eine einzelne Positions-Ausweichoption kann mehr als einen `<try-tactic>` oder `dashed-ident` Optionen oder eine Kombination aus beiden enthalten, indem sie als eine einzige leerzeichengetrennte Option deklariert werden:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen, werden ihre Transformationen zusammen komponiert.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option, wird zunächst die benutzerdefinierte Positionsoption angewendet, dann wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung einiger vordefinierter `<try-tactic>` Ausweichoptionen.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem verankerten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo in der Nähe der Mitte des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden zu verknüpfen, und sie ist an der oberen linken Ecke des Ankers festgebunden, indem ein `position-area` verwendet wird.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie mit der `position-try` Kurzform neu, falls der Langform-Eigenschaftsname noch nicht unterstützt wird), indem wir zwei vordefinierte Positionierungsausweichoptionen angeben, um zu verhindern, dass sie überläuft, wenn der Anker nahe an den Rand des Viewports gerät, indem sie entlang der Inline- oder Blockachse des Ankers gespiegelt wird.

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

Versuchen Sie zu scrollen, sodass der Anker den Rändern des Viewports nahekommt:

- Wenn Sie den Anker nahe an den oberen Rand des Viewports bewegen, sehen Sie, wie das positionierte Element nach unten links des Ankers kippt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe an den linken Rand des Viewports bewegen, sehen Sie, wie das positionierte Element nach oben rechts des Ankers kippt, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch zur oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken – da das positionierte Element in der Block- und Inlinerichtung zu überlaufen beginnt, kippt es zurück zu seiner Standardposition oben links und überläuft in beiden Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in einer Option

Lassen Sie uns eine kombinierte Ausweichoption verwenden, um das Problem zu beheben, das wir im vorherigen Demo festgestellt haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Positions-Ausweichoption: `flip-block flip-inline`:

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

Die dritte Positions-Ausweichoption bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Ausweichoptionen fehlschlagen, kombiniert er die beiden, indem er die Position des Elements sowohl in der Block- als auch in der Inlinerichtung gleichzeitig dreht. Jetzt, wenn Sie den Anker nach oben _und_ links an den Rand des Viewports scrollen, wird das positionierte Element nach unten rechts umklappen.

### `position-area` Positions-Ausweichoptionen

Dieses Beispiel zeigt einige `position-area` Positions-Ausweichoptionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall sind unsere Positionierungs-Ausweichoptionen alle `position-area` Werte – `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, egal welche Ränder des Viewports der Anker in der Nähe ist. Dieser Ansatz ist etwas umständlicher als der mit den vordefinierten Werten, aber er ist auch detaillierter und flexibler.

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

Scrollen Sie die Seite und sehen Sie sich die Wirkung dieser Positionierungs-Ausweichoptionen an, wenn der Anker den Rand des Viewports nähert.

### Beispiele für benutzerdefinierte Ausweichoptionen

Siehe die {{cssxref("@position-try")}} Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} Regel
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Ausweichoptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
