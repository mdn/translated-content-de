---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einer oder mehreren alternativen **Position-Try-Fallback-Optionen** für verankerungspositionierte Elemente anzugeben, um sie relativ zu ihren zugehörigen Verankerungselementen zu platzieren. Wenn das Element sonst seinen inset-modifizierten enthaltenden Block überfließen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis er einen Wert findet, der verhindert, dass es seinen Container oder das Ansichtsfenster überfließt.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als durch Kommas getrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionennamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Position-Try-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vorgegebene Fallback-Optionen verschieben das positionierte Element, indem sie dessen berechnete Position nehmen und sie über eine bestimmte Achse des Ankers transformieren, wobei jegliche Margin-Abstände gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte und tauscht die `start`-Eigenschaften miteinander aus sowie die `end`-Eigenschaften.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem es das positionierte Element auf einem oder mehreren Kacheln eines impliziten 3x3 [Positionierungsbereich-Gitters](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert; die Wirkung ist dieselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren Identifikationsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Es können mehrere Optionen angegeben werden, getrennt durch Kommas.

## Beschreibung

Verankerungspositionierte Elemente sollten, wenn möglich, immer an einem Ort erscheinen, der für den Benutzer bequem ist, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Ansichtsfenster überflutet, ist es oft notwendig, seine Position zu ändern, wenn der Anker in die Nähe des Randes seines enthaltenden Elements oder des Ansichtsfensters kommt.

Dies wird erreicht, indem eine oder mehrere Position-Try-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft bereitgestellt werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen enthaltenden Block überschreitet, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die verhindert, dass das positionierte Element überfließt.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zur standardmäßig eingestellten Position des positionierten Elements zurück, bevor irgendeine Fallback-Option angewendet wurde.

> [!NOTE]
> In manchen Situationen möchten Sie möglicherweise nur überlaufende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm sichtbar und benutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-Try-Fallbacks siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulstartseite und den [Fallback-Optionen und bedingtes Ausblenden bei Überflutung](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vorgegebene &lt;try-tactic&gt; Werte

Als `<try-tactic>` in der Spezifikation bezeichnet, bewegen die vorgegebenen Werte das positionierte Element, indem sie dessen berechnete Position nehmen und sie über eine bestimmte Achse des Ankers transformieren. Die vorgegebenen Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es denselben Abstand vom Anker hat, jedoch auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Inline-Achse, die durch das Zentrum des Ankers verläuft. Zum Beispiel, wenn das positionierte Element oben am Anker überläuft, würde dieser Wert die Position nach unten spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es denselben Abstand vom Anker hat, jedoch auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements über eine Blockachse, die durch das Zentrum des Ankers verläuft. Zum Beispiel, wenn das positionierte Element links vom Anker überläuft, würde dieser Wert die Position nach rechts spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch das Zentrum des Ankers verläuft und über den Punkt am Schnittpunkt der Blockachsen-Start- und Inline-Achsen-Start-Wert und den Punkt am Schnittpunkt der Blockachsen-End- und Inline-Achsen-End-Wert verläuft. Zum Beispiel, wenn das positionierte Element links vom Anker überläuft, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinationsmöglichkeiten

Eine einzelne Position-Try-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Option oder eine Kombination aus beiden enthalten, indem sie als einzelne durch Leerzeichen getrennte Option erklärt werden:

- Im Fall von mehreren vorgegebenen `<try-tactic>` Optionen werden ihre Transformationen zusammen komponiert.
- Im Fall der Deklaration einer vorgegebenen `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann die `<try-tactic>` Transformation.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung einiger vorgegebener `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML beinhaltet zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem verankerungspositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element, um es sehr groß zu machen, sodass sowohl horizontales als auch vertikales Scrollen möglich ist.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn nahe dem Zentrum des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden miteinander zu verbinden, und sie ist an der oberen linken Ecke des Ankers über einen `position-area` verankert.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langform-Eigenschaftsname noch nicht unterstützt wird), und bieten zwei vorgegebene Position-Try-Fallback-Optionen, um zu verhindern, dass sie überfließt, wenn der Anker in die Nähe des Rands des Ansichtsfensters kommt, indem sie entlang der Inline- oder Blockachsen des Ankers gespiegelt wird.

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

Versuchen Sie zu scrollen, sodass der Anker sich den Rändern nähert:

- Wenn Sie den Anker nahe an die Oberseite des Ansichtsfensters bringen, werden Sie sehen, wie das positionierte Element zur unteren linke Seite des Ankers gespiegelt wird, um Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe an die linke Seite des Ansichtsfensters bringen, werden Sie sehen, wie das positionierte Element zur oberen rechten Seite des Ankers gespiegelt wird, um Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — während das positionierte Element in der Block- und Inlinerichtung anfängt zu überlaufen, spiegelt es sich zurück zu seiner Standard-Position oben links und überläuft in beide Richtungen, was nicht unser Ziel ist.

Das liegt daran, dass wir dem Browser nur die Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte zu einer Option kombinieren

Lassen Sie uns eine kombinierte Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, mit Ausnahme des Codes für das positionierte Element. In diesem Fall erhält es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Die dritte Position-Try-Fallback-Option bedeutet, dass der Browser `flip-block` dann `flip-inline` ausprobieren wird, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, wird er die beiden kombinieren und die Position des Elements gleichzeitig in Block- und Inlinerichtung spiegeln. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Ansichtsfensters scollen, wird das positionierte Element auf die untere rechte Seite gespiegelt.

### `position-area` try Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` position-try Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, mit Ausnahme des Codes für das positionierte Element. In diesem Fall sind unsere Position-Try-Fallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, unabhängig von den Rändern des Ansichtsfensters, in deren Nähe der Anker ist. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vorgegebenen Werten, aber er ist auch granularer und flexibler.

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

Scrollen Sie die Seite und beobachten Sie, welchen Effekt diese position-try Fallback-Optionen haben, sobald der Anker sich den Rändern des Ansichtsfensters nähert.

### Beispiele für benutzerdefinierte Try-Optionen

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
- [Fallback-Optionen und bedingtes Ausblenden bei Überflutung](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
