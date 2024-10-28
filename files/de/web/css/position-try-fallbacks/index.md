---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}{{seecompattable}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **position try fallback options** für verankerungspositionierte Elemente anzugeben, um sie relativ zu ihren zugeordneten Anker-Elementen zu platzieren. Wenn das Element ansonsten seinen durch inset-modified begrenzten Block überlaufen würde, versucht der Browser das positionierte Element in diesen verschiedenen Ausweichpositionen, in der angegebenen Reihenfolge, zu platzieren, bis eine Position gefunden wird, die ein Überlaufen des Containers oder des Viewports verhindert.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzform-Eigenschaft kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` mit denselben Eigenschaftswerten unterstützt. Solange `position-try-fallbacks` noch nicht unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzform.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren leerzeichengetrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Fallback-Optionen für die Position gesetzt.
- `<try-tactic>`
  - : Vorgegebene Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, wobei eventuelle Margin-Versätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, indem die `start` Eigenschaften miteinander und die `end` Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugeordneten Ankerelements, indem das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert wird; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren identifizierender Name dem angegebenen `dashed-ident` entspricht. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Verankerungspositionierte Elemente sollten immer an einem geeigneten Ort erscheinen, mit dem der Benutzer interagieren kann, wenn möglich, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element den Viewport überläuft, ist es oft notwendig, seine Position zu ändern, wenn sich der Anker dem Rand seines enthaltenden Elements oder des Viewports nähert.

Dies wird erreicht, indem eine oder mehrere Fallback-Optionen für die Position in der `position-try-fallbacks` Eigenschaft bereitgestellt werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die das Überlaufen des enthaltenden Blocks verhindert, wird angewendet. Standardmäßig versucht der Browser diese in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die er findet, die das Überlaufen des positionierten Elements stoppt.

Wenn keine Option gefunden werden kann, um das positionierte Element vollständig auf dem Bildschirm zu platzieren, wird der Browser das positionierte Element in seiner Standardposition anzeigen, bevor irgendwelche Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise überlaufende positionierte Elemente einfach ausblenden, was durch die Verwendung der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Fallback-Optionen für die Position, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Umgang mit Überlauf: Fallbacks versuchen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, so dass es die gleiche Entfernung vom Anker, jedoch auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Inline-Achse, die durch das Zentrum des Ankers verläuft. Zum Beispiel, wenn das positionierte Element begann, an der Oberseite des Ankers überzulaufen, würde dieser Wert die Position an den unteren Rand umklappen.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, so dass es die gleiche Entfernung vom Anker, jedoch auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Blockachse, die durch das Zentrum des Ankers verläuft. Zum Beispiel, wenn das positionierte Element begann, an der linken Seite des Ankers überzulaufen, würde dieser Wert die Position an die rechte Seite umklappen.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer diagonal durch das Zentrum des Ankers verlaufenden Achse, die durch den Punkt am Schnittpunkt der Blockachsstartposition und der Inlineachsstartposition und den Punkt am Schnittpunkt der Blockachs-Endposition und der Inlineachs-Endposition verläuft. Zum Beispiel, wenn das positionierte Element begann, an der linken Seite des Ankers überzulaufen, würde dieser Wert das positionierte Element an die Oberseite umklappen.

### Kombinationsoptionen

Eine einzelne Fallback-Option für die Position kann mehr als einen `<try-tactic>` oder `dashed-ident` Optionen oder eine Kombination von beiden enthalten, indem sie als eine einzelne leerzeichengetrennte Option deklariert wird:

- Im Falle von mehreren vordefinierten `<try-tactic>` Optionen werden ihre Transformationen zusammengefügt.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann wird die `<try-tactic>` Transformation angewendet.

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

Wir stylen das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Margen, um ihn irgendwo in der Nähe des mittleren Teils des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden miteinander zu verbinden, und sie ist an der oberen linken Ecke des Ankers mittels einer `position-area` befestigt.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der Kurzform `position-try`, falls der Langform-Name der Eigenschaft noch nicht unterstützt wird) und geben zwei vordefinierte Fallback-Optionen für die Position an, um zu verhindern, dass sie überläuft, wenn der Anker in die Nähe des Viewportrands kommt, indem sie entlang der Inline- oder Blockachse des Ankers umgeklappt wird.

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

Versuchen Sie zu scrollen, so dass der Anker die Ränder nähert:

- Wenn Sie den Anker in die Nähe des oberen Bereichs des Viewports bewegen, sehen Sie, dass das positionierte Element nach unten links vom Anker umklappt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Bereichs des Viewports bewegen, sehen Sie, dass das positionierte Element nach oben rechts vom Anker umklappt, um ein Überlaufen zu vermeiden.

Wenn Sie allerdings den Anker in die Nähe der oberen linken Ecke des Viewports bewegen, bemerken Sie ein Problem – da das positionierte Element beginnt, in Richtung der Block- und Inline-Richtung überzulaufen, klappt es zurück zu seiner ursprünglichen oberen linken Position und überläuft in beide Richtungen, was nicht das ist, was wir wollen.

Das liegt daran, dass wir dem Browser nur die Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren von mehreren Werten in einer Option

Verwenden wir eine kombinierte Fallback-Option, um das Problem zu beheben, das wir im vorherigen Demo festgestellt haben.

#### HTML und CSS

Der gesamte HTML und CSS in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Fallback-Option für die Position: `flip-block flip-inline`:

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

Die dritte Fallback-Option für die Position bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, wird er die beiden kombinieren und die Position des Elements gleichzeitig in Block- und Inline-Richtung umklappen. Jetzt, wenn Sie den Anker an die oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element über an die untere rechte Seite umgeklappt.

### `position-area` Fallback-Optionen für die Position

Dieses Beispiel zeigt einige `position-area` Fallback-Optionen für die Positionsoption in Aktion.

#### HTML und CSS

Der gesamte HTML und CSS in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall sind unsere Fallback-Optionen für die Positionsoption alle `position-area` Werte - `oben`, `oben rechts`, `rechts`, `unten rechts`, `unten`, `unten links` und `links`.

Das bedeutet, dass das positionierte Element eine angemessene Position zum Anzeigen finden wird, unabhängig davon, in welchen Viewporträndern der Anker in der Nähe liegt. Dieser Ansatz ist etwas langatmiger als der Ansatz der vordefinierten Werte, aber er ist auch detaillierter und flexibler.

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

Scrollen Sie die Seite und sehen Sie sich die Auswirkungen dieser Fallback-Optionen für die Position an, wenn sich der Anker in der Nähe des Randes des Viewports befindet.

### Benutzerdefinierte Try-Optionen-Beispiele

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
- [Umgang mit Überlauf: Fallbacks versuchen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
