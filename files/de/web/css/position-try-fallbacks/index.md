---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungsausweichoptionen** für ankergestützte Elemente anzugeben, um sie relativ zu ihren zugehörigen Ankerelementen zu platzieren. Wenn das Element ansonsten seinen inset-modifizierten enthaltenen Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen zu platzieren, in der angegebenen Reihenfolge, bis er einen Wert findet, der das Überlaufen seines Containers oder des Ansichtsfensters verhindert.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um sowohl {{cssxref("position-try-order")}} als auch `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Positionierungsausweichoptionen festgelegt.
- `<try-tactic>`
  - : Vorgegebene Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren, indem Margenverschiebungen gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, wobei die `start` Eigenschaften miteinander und die `end` Eigenschaften ebenfalls miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugeordneten Ankerelements, indem es das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3 [Positionierungsbereichsrasters](/de/docs/Web/CSS/position-area#description) platziert, basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert; die Wirkung entspricht einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Liste der Fallback-Optionen hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Es können mehrere Optionen angegeben werden, getrennt durch Kommata.

## Beschreibung

Ankergestützte Elemente sollten immer an einem benutzerfreundlichen Ort erscheinen, mit dem der Benutzer, wenn möglich, interagieren kann, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Ansichtsfenster überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker an den Rand des enthaltenen Elements oder des Ansichtsfensters bewegt.

Dies wird erreicht, indem eine oder mehrere Positionierungsfallback-Optionen in der Eigenschaft `position-try-fallbacks` bereitgestellt werden. Wenn die Anfangsposition des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionierungsoption; die erste Fallback-Option, die das Überlaufen des enthaltenen Blocks verhindert, wird angewendet. Standardmäßig probiert der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die gefunden wird, um zu verhindern, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition zurück, bevor Fallback-Optionen ausprobiert wurden.

> [!NOTE]
> In einigen Situationen könnten Sie überlaufende positionierte Elemente einfach ausblenden wollen, was durch die {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm sichtbar und nutzbar zu halten.

Für detaillierte Informationen zu Ankereigenschaften und Verwendung von Positionierungsfallback-Optionen siehe das Modul für [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vorgegebene &lt;try-tactic&gt; Werte

Als `<try-tactic>` in der Spezifikation bezeichnet, verschieben die vorgegebenen Werte das positionierte Element, indem sie seine berechnete Position nehmen und es über eine bestimmte Achse des Ankers transformieren. Die vorgegebenen Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es den gleichen Abstand vom Anker hat, jedoch auf der gegenüberliegenden Seite davon. Anders ausgedrückt wird die Position des Elements entlang einer Inline-Achse gespiegelt, die durch die Mitte des Ankers verläuft. Als Beispiel, wenn das positionierte Element anfängt, am oberen Rand des Ankers überzulaufen, würde dieser Wert die Position an den unteren Rand spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es den gleichen Abstand vom Anker hat, jedoch auf der gegenüberliegenden Seite davon. Anders ausgedrückt wird die Position des Elements entlang einer Blockachse gespiegelt, die durch die Mitte des Ankers verläuft. Als Beispiel, wenn das positionierte Element anfängt, am linken Rand des Ankers überzulaufen, würde dieser Wert die Position an den rechten Rand spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers verläuft und durch den Punkt an der Schnittstelle der Blockachsenanfang und der Inlineachsenanfang, und den Punkt an der Schnittstelle der Blockachsenende und der Inlineachsenende führt. Als Beispiel, wenn das positionierte Element anfängt, am linken Rand des Ankers überzulaufen, würde dieser Wert das positionierte Element an den oberen Rand spiegeln.

### Kombination von Optionen

Eine einzelne Positionierungsfallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen enthalten, oder eine Kombination von beidem durch Deklaration in einer einzigen leerzeichengetrennten Option:

- Im Falle mehrerer vordefinierter `<try-tactic>` Optionen, werden ihre Transformationen zusammengefügt.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@postion-try` Option, wird zuerst die benutzerdefinierte Positionsoption angewendet und dann die `<try-tactic>` Transformation.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von einigen vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML umfasst zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankergestützten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

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
  anchor-name: --myAnchor;
  margin: 100px 350px;
}
```

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden miteinander zu verbinden, und sie ist mit der oberen linken Ecke des Ankers über eine `position-area` verbunden.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und erklären sie erneut mit der Kurzschreibweise `position-try`, falls der Langschreibweise Name noch nicht unterstützt wird), und geben zwei vorgegebene Positionierungsfallback-Optionen an, um zu verhindern, dass sie überläuft, wenn der Anker sich dem Rand des Ansichtsfensters nähert, indem er um die Inline- oder Blockachse des Ankers gespiegelt wird.

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

{{ EmbedLiveSample("Vordefinierte Try-Optionen", "100%", "250") }}

Versuchen Sie, so zu scrollen, dass der Anker die Kanten erreicht:

- Wenn Sie den Anker in die Nähe des oberen Randes des Ansichtsfensters bewegen, werden Sie sehen, dass das positionierte Element zur unteren linken Seite des Ankers gespiegelt wird, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Ansichtsfensters bewegen, werden Sie sehen, dass das positionierte Element zur oberen rechten Seite des Ankers gespiegelt wird, um ein Überlaufen zu vermeiden.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element beginnt, in Block- und Inline-Richtung zu überlaufen, springt es zurück zu seiner Standardposition oben links und überläuft in beide Richtungen, was nicht erwünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beides gleichzeitig auszuprobieren. Das nächste Beispiel wird Ihnen zeigen, wie Sie dieses Problem beheben können.

### Mehrere Werte zu einer Option kombinieren

Verwenden wir eine kombinierte Try-Fallback-Option, um das Problem zu beheben, das wir mit dem vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer dem Code des positionierten Elements. In diesem Fall erhält es eine dritte Positions-Fallback-Option: `flip-block flip-inline`:

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

{{ EmbedLiveSample("Mehrere Werte zu einer Option kombinieren", "100%", "250") }}

Die dritte Positionierungsfallback-Option bedeutet, dass der Browser zuerst `flip-block` dann `flip-inline` zur Vermeidung von Überlauf versucht, und wenn diese Fallbacks fehlschlagen, kombiniert er die beiden, wobei die Position des Elements in Block- und Inline-Richtung gleichzeitig gespiegelt wird. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Kanten des Ansichtsfensters scrollen, wird das positionierte Element zur unteren rechten Seite gespiegelt.

### `position-area` Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Positionierungsfallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer dem Code des positionierten Elements. In diesem Fall sind unsere Positionsfallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, egal an welchem Rand des Ansichtsfensters sich der Anker befindet. Dieser Ansatz ist etwas ausführlicher als der Ansatz der vordefinierten Werte, aber er ist auch feinkörniger und flexibler.

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

{{ EmbedLiveSample("`position-area` Fallback-Optionen", "100%", "250") }}

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser Positionsfallback-Optionen, wenn sich der Anker den Rändern des Ansichtsfensters nähert.

### Benutzerdefinierte Try-Optionen Beispiele

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
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
