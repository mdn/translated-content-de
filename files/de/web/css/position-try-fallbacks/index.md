---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Position-Varianten-Fallbacks** für Anker-positionierte Elemente festzulegen, um diese relativ zu ihren zugehörigen Ankerelementen zu platzieren. Wenn das Element sonst seinen durch Einfügen modifizierten umgebenden Block überschreiten würde, versucht der Browser, das positionierte Element in diesen unterschiedlichen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis er einen Wert findet, der verhindert, dass es seinen Container oder das Ansichtsfenster überschreitet.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschrift-Eigenschaft kann verwendet werden, um die Werte für {{cssxref("position-try-order")}} und `position-try-fallbacks` in einer einzigen Deklaration anzugeben.

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

Die `position-try-fallbacks`-Eigenschaft kann entweder als der Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptnamen oder `<try-tactic>`s oder einem `position-area`-Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Fallback-Optionen für Positionsversuche festgelegt.
- `<try-tactic>`
  - : Vorgefertigte Fallback-Optionen bewegen das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren und beliebige Randversätze spiegeln. Mögliche Werte sind:
    - `flip-block`
      - : Dreht die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Dreht die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Dreht sowohl die Inline- als auch die Blockachsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander ausgetauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem es das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 [Position-Grid](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert; der Effekt ist der gleiche wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionenliste hinzu, deren Identifikationsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Anker-positionierte Elemente sollten immer an einem bequemen Ort erscheinen, mit dem der Benutzer interagieren kann, wann immer möglich, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element das Ansichtsfenster überschneidet, ist es oft notwendig, seinen Standort zu ändern, wenn sich der Anker in die Nähe des Rands seines umgebenden Elements oder des Ansichtsfensters bewegt.

Dies wird erreicht, indem in der Eigenschaft `position-try-fallbacks` eine oder mehrere Fallback-Optionen für Positionsversuche angegeben werden. Wenn die Ausgangsposition des positionierten Elements überschreiten würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen umgebenden Block überschreitet, wird angewendet. Standardmäßig wird der Browser sie in der Reihenfolge versuchen, in der sie in der Liste erscheinen, und die erste anwenden, die er findet, die das Überschreiten des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, wird der Browser die Anzeige des positionierten Elements auf seine Standardposition zurücksetzen, bevor irgendwelche Fallback-Optionen für den Versuch angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise einfach überlappende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Nutzung von Fallbacks für Positionsversuche siehe die Modul-Landing-Page [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlappungen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

### Vorgefertigte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Dreht die Position des Elements entlang der Blockachse, sodass es denselben Abstand vom Anker, aber auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt spiegelt es die Position des Elements über eine Inline-Achse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element am oberen Rand des Ankers zu überlappen beginnt, würde dieser Wert die Position nach unten drehen.
- `flip-inline`
  - : Dreht die Position des Elements entlang der Inline-Achse, sodass es denselben Abstand vom Anker, aber auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt spiegelt es die Position des Elements über eine Blockachse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element am linken Rand des Ankers zu überlappen beginnt, würde dieser Wert die Position nach rechts drehen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers verläuft, durch den Punkt an der Schnittstelle der Blockachsen-Anfangspunkte und der Inline-Achsen-Anfangspunkte sowie den Punkt an der Schnittstelle der Blockachsen-Endpunkte und der Inline-Achsen-Endpunkte. Als Beispiel: Wenn das positionierte Element am linken Rand des Ankers zu überlappen beginnt, würde dieser Wert das positionierte Element nach oben drehen.

### Kombinationsmöglichkeiten

Eine einzelne Fallback-Option für den Versuch kann mehr als eine `<try-tactic>`- oder `dashed-ident`-Optionen enthalten oder eine Kombination aus beidem durch Deklaration als einzelne leerzeichengetrennte Option:

- Im Falle von mehreren vordefinierten `<try-tactic>`-Optionen werden deren Transformationen zusammengefasst.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>`- und einer `<dashed-ident>` benannten `@position-try-Option` wird zunächst die benutzerdefinierte Positionsoption angewendet, dann wird die `<try-tactic>`-Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung einiger vordefinierter `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem Anker-positioniertem Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element so, dass es sehr groß ist, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn nahe dem Zentrum des sichtbaren Bereichs des `<body>` zu platzieren:

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

Das Infobox-Element bekommt eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die auf den `anchor-name` des Ankers verweist, um die beiden miteinander zu verbinden, und es ist mit der oberen linken Ecke des Ankers verknüpft, indem ein `position-area` verwendet wird.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschrift, falls der Langform-Name der Eigenschaft noch nicht unterstützt wird), die zwei vordefinierte Fallback-Optionen für Positionsversuche bereitstellt, um zu verhindern, dass das Element überläuft, wenn der Anker in die Nähe des Rands des Ansichtsfensters kommt, indem es entlang der Inline- oder Blockachse des Ankers gekippt wird.

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

Versuchen Sie zu scrollen, so dass der Anker in die Nähe der Kanten kommt:

- Wenn Sie den Anker in die Nähe des oberen Randes des Ansichtsfensters bewegen, werden Sie sehen, dass sich das positionierte Element nach unten links zum Anker dreht, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Ansichtsfensters bewegen, werden Sie sehen, dass sich das positionierte Element nach oben rechts zum Anker dreht, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element in der Block- und Inlinerichtung zu überlaufen beginnt, kehrt es zu seiner Standardposition in der oberen linken Ecke zurück und überläuft in beiden Richtungen, was nicht unser Ziel ist.

Das liegt daran, dass wir dem Browser nur Positionsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte in eine Option kombinieren

Lassen Sie uns eine kombinierte Fallback-Option verwenden, um das Problem zu beheben, das wir mit der vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in dieser Demo ist der gleiche, außer dem Code für das positionierte Element. In diesem Fall wird es mit einer dritten Fallback-Option für den Versuch versehen: `flip-block flip-inline`:

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

Die dritte Fallback-Option für den Versuch bedeutet, dass der Browser `flip-block` und dann `flip-inline` ausprobiert, um ein Überlaufen zu vermeiden. Wenn diese Fallbacks fehlschlagen, werden die beiden kombiniert, indem die Position des Elements gleichzeitig in Block- und Inlinerichtung gedreht wird. Wenn Sie jetzt den Anker in Richtung der oberen _und_ linken Kante des Ansichtsfensters scrollen, wird das positionierte Element nach unten rechts gedreht.

### `position-area` Try Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Fallback-Optionen für Positionsversuche in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in dieser Demo ist der gleiche, außer dem Code für das positionierte Element. In diesem Fall sind unsere Fallback-Optionen für den Versuch alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

Das bedeutet, dass das positionierte Element eine angemessene Position zum Anzeigen findet, unabhängig davon, welche Rände der Anker in der Nähe des Ansichtsfensters erreicht. Dieser Ansatz ist ein bisschen umständlicher als der Ansatz mit vordefinierten Werten, aber auch granularer und flexibler.

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

Scrollen Sie die Seite und sehen Sie sich den Effekt dieser Fallback-Optionen für Positionsversuche an, wenn sich der Anker in die Nähe des Randes des Ansichtsfensters bewegt.

### Beispiele für benutzerdefinierte Versuchoptionen

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
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlappungen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
