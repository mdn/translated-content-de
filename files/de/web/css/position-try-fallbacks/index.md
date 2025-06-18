---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungsversuchs-Optionen** für ankerpositionierte Elemente festzulegen, um sie relativ zu ihren zugeordneten Ankerelementen zu platzieren. Wenn das Element sonst seinen inset-modifizierten Containing Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen zu platzieren, in der angegebenen Reihenfolge, bis er einen Wert findet, der es davon abhält, seinen Container oder den Viewport zu überlaufen.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschrift-Eigenschaft kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschrift.

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
  - : Der Standardwert. Es sind keine Positionierungsversuchs-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vorgegebene Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren, wobei alle Randoffsets gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Dreht die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Dreht die Position des Elements entlang der Inlineachse.
    - `flip-start`
      - : Dreht die Werte sowohl der Inline- als auch der Blockachse und vertauscht die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugeordneten Ankerelements, indem es das positionierte Element auf einem oder mehreren Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/position-area#description) platziert, basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert; der Effekt ist derselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Liste der Fallback-Optionen hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Ankerpositionierte Elemente sollten immer an einem Ort erscheinen, an dem der Benutzer bequem interagieren kann, soweit möglich, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element den Viewport überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker nahe am Rand seines enthaltenden Elements oder des Viewports befindet.

Dies wird erreicht, indem eine oder mehrere Positionierungsversuche in der `position-try-fallbacks` Eigenschaft bereitgestellt werden. Wenn die ursprüngliche Position des positionierten Elements überläuft, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen enthaltenden Block überläuft, wird angewendet. Standardmäßig versucht der Browser, sie in der Reihenfolge der Liste anzuwenden und wendet die erste an, die verhindert, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, stellt der Browser das positionierte Element an seiner Standardposition dar, bevor alle Versuch-Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie vielleicht überlaufende positionierte Elemente einfach ausblenden, was mit der Eigenschaft {{cssxref("position-visibility")}} erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm sichtbar und benutzbar zu halten.

Für detaillierte Informationen zu Anker-Funktionen und zur Verwendung von Positionsversuchen, siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vorgegebene &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Dreht die Position des Elements entlang der Blockachse so, dass es den gleichen Abstand vom Anker entfernt erscheint, jedoch auf der gegenüberliegenden Seite. Anders gesagt, es spiegelt die Position des Elements über eine Inlineachse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element anfängt, oben am Anker überzulaufen, würde dieser Wert die Position nach unten drehen.
- `flip-inline`
  - : Dreht die Position des Elements entlang der Inlineachse, sodass es den gleichen Abstand vom Anker entfernt erscheint, jedoch auf der gegenüberliegenden Seite. Anders gesagt, es spiegelt die Position des Elements über eine Blockachse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element links vom Anker anfängt zu überlaufen, würde dieser Wert die Position nach rechts drehen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers verläuft, durch den Punkt am Schnittpunkt der Blockachse Start und der Inlineachse Start, sowie durch den Punkt am Schnittpunkt der Blockachse Ende und der Inlineachse Ende. Als Beispiel: Wenn das positionierte Element links vom Anker anfängt zu überlaufen, würde dieser Wert das positionierte Element nach oben umklappen.

### Kombinationsoptionen

Eine einzelne Positionsversuchs-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Option oder eine Kombination aus beidem beinhalten, indem sie als eine einzige durch Leerzeichen getrennte Option deklariert werden:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen werden deren Transformationen zusammengefügt.
- Im Fall eines vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird die benutzerdefinierte Positionsoption zuerst angewendet, dann wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung von ein paar vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML beinhaltet zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo in der Nähe des Zentrums des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden zu verbinden, und wird mit der oberen linken Ecke des Ankers durch eine `position-area` verbunden.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie mit der `position-try` Kurzschrift nochmals, falls der Langhand-Eigenschaftsname noch nicht unterstützt wird), indem wir zwei vordefinierte Positionsversuchs-Fallback-Optionen bereitstellen, um zu verhindern, dass sie überläuft, wenn der Anker nahe am Rand des Viewports kommt, indem wir ihn entlang der Inline- oder Blockachse des Ankers drehen.

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

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass der Anker die Ränder erreicht:

- Wenn Sie den Anker in die Nähe des oberen Bereichs des Viewports bewegen, sehen Sie, dass sich das positionierte Element nach unten links vom Anker dreht, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nach links in die Nähe des Viewports bewegen, sehen Sie, dass sich das positionierte Element nach oben rechts vom Anker dreht, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, merken Sie ein Problem — sobald das positionierte Element in der Block- und Inlinerichtung überläuft, dreht es sich zurück in seine Standardposition oben links und läuft in beide Richtungen über, was nicht unser Ziel ist.

Dies liegt daran, dass wir dem Browser nur die Option `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig zu versuchen. Das nächste Beispiel zeigt, wie Sie dieses Problem beheben können.

### Kombination mehrerer Werte in eine Option

Lassen Sie uns eine kombinierte Versuch-Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Beispiel festgestellt haben.

#### HTML und CSS

Alle HTML- und CSS-Codes in diesem Beispiel sind gleich geblieben, mit Ausnahme des Codes für das positionierte Element. In diesem Fall erhält es eine dritte Positionierungsversuchs-Fallback-Option: `flip-block flip-inline`:

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

Die dritte Positionsversuchs-Fallback-Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu verhindern, und wenn diese Fallbacks fehlschlagen, kombiniert er beide, indem er die Position des Elements sowohl in den Block- als auch Inlinerichtungen gleichzeitig dreht. Jetzt, wenn Sie den Anker in die obere _und_ linke Ecke des Viewports scrollen, wird das positionierte Element zur unteren rechten Ecke gedreht.

### `position-area` Try-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Positionsversuchs-Fallback-Optionen in Aktion.

#### HTML und CSS

Alle HTML- und CSS-Codes in diesem Beispiel bleiben gleich, außer dem Code für das positionierte Element. In diesem Fall sind unsere Positionsversuchs-Fallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Das bedeutet, dass das positionierte Element eine angemessene Position findet, um angezeigt zu werden, unabhängig davon, an welchen Viewporträndern sich der Anker befindet. Dieser Ansatz ist etwas ausführlicher als der Ansatz mit vordefinierten Werten, aber er ist auch granulärer und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser Positionsversuchs-Fallback-Optionen, während sich der Anker den Rändern des Viewports nähert.

### Beispiele für benutzerdefinierte Versuch-Optionen

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
- [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Anchor-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
