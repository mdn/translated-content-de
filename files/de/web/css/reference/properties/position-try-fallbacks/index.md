---
title: "`position-try-fallbacks` CSS property"
short-title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Position-try-Fallback-Optionen** für ankerpositionierte Elemente anzugeben, damit diese relativ zu ihren zugehörigen Ankerelementen platziert werden. Wenn das Element sonst den durch Inset modifizierten Block überschwemmen würde, versucht der Browser, das positionierte Element an diesen verschiedenen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der es daran hindert, seinen Container oder den Viewport zu überlaufen.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschrift-Eigenschaft kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit den gleichen Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschrift.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als das Schlüsselwort `none` oder als eine kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Position-Optionsnamen oder `<try-tactic>`s oder als ein `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Position-try-Fallback-Optionen eingestellt.
- `<try-tactic>`
  - : Vorgegebene Fallback-Optionen bewegen das positionierte Element, indem seine berechnete Position genommen und entlang einer bestimmten Achse des Ankers transformiert wird, wobei alle Margin-Versätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Dreht die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Dreht die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Dreht die beide Achsenwerte, tauscht die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander aus.
- {{cssxref("position-area")}} Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element auf einem oder mehreren Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/Reference/Properties/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert wird; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren identifizierender Name dem angegebenen `dashed-ident` entspricht. Wenn es keine benutzerdefinierte Positionsoption mit diesem Namen gibt, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Ankerpositionierte Elemente sollten immer an einem bequemen Ort erscheinen, an dem der Benutzer, wenn möglich, mit ihnen interagieren kann, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element den Viewport überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich dessen Anker dem Rand seines enthaltenden Elements oder dem Viewport nähert.

Dies wird erreicht, indem eine oder mehrere Position-try-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft angegeben werden. Wenn die Anfangsposition des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die das Element nicht mehr überlaufen lässt, wird angewandt. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die er findet, um das positionierte Element vom Überlaufen abzuhalten.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, wird der Browser das positionierte Element an seiner Standardposition anzeigen, bevor Fallback-Optionen angewandt wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise überlaufende positionierte Elemente einfach ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Position-Try-Fallbacks siehe das [CSS Anker Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

### Vorgedefinierte &lt;try-tactic&gt; Werte

Im Spezifikationsdokument als ein `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem seine berechnete Position genommen und entlang einer bestimmten Achse des Ankers transformiert wird. Die vordefinierten Werte sind:

- `flip-block`
  - : Dreht die Position des Elements entlang der Blockachse so, dass es den gleichen Abstand vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt spiegelt es die Position des Elements entlang einer Inline-Achse, die durch die Mitte des Ankers gezogen wird. Als Beispiel, wenn das positionierte Element oben am Anker zu überlaufen beginnt, würde dieser Wert die Position auf unten drehen.
- `flip-inline`
  - : Dreht die Position des Elements entlang der Inline-Achse so, dass es den gleichen Abstand vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt spiegelt es die Position des Elements entlang einer Blockachse, die durch die Mitte des Ankers gezogen wird. Als Beispiel, wenn das positionierte Element links am Anker zu überlaufen beginnt, würde dieser Wert die Position nach rechts drehen.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers gezogen wird, durch den Punkt an der Schnittstelle der Block-Achse Start und der Inline-Achse Start und den Punkt an der Schnittstelle der Block-Achse Ende und der Inline-Achse Ende. Als Beispiel, wenn das positionierte Element links am Anker zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben drehen.

### Kombinationsoptionen

Eine einzelne Position-try-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen enthalten oder eine Kombination von beiden, indem sie als eine einzelne durch Leerzeichen getrennte Option deklariert werden:

- Im Falle von mehreren vordefinierten `<try-tactic>` Optionen werden ihre Transformationen zusammengefügt.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewandt, dann wird die `<try-tactic>` Transformation angewandt.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung einiger vordefinierter `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die ein Anker und ein ankerpositioniertes Element sein werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Margen, um ihn irgendwo in der Nähe des Zentrums des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den Anker `anchor-name` referenziert, um die beiden zusammenzubringen, und sie wird an der oberen linken Ecke des Ankers mit einem `position-area` verbunden.

Wir fügen eine `position-try-fallbacks` Liste ein (und erklären sie erneut mit der `position-try` Kurzschrift, falls der Langschrift-Name noch nicht unterstützt wird), und bieten zwei vordefinierte Position-try-Fallback-Optionen an, um zu verhindern, dass sie überläuft, wenn sich der Anker dem Rand des Viewports nähert, indem sie entlang der Inline- oder Blockachse des Ankers gedreht wird.

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

Dies gibt uns das folgende Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass der Anker an die Ränder gelangt:

- Wenn Sie den Anker in die Nähe des oberen Randes des Viewports verschieben, sehen Sie, dass das positionierte Element nach unten links vom Anker gedreht wird, um das Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Viewports verschieben, sehen Sie, dass das positionierte Element nach oben rechts vom Anker gedreht wird, um das Überlaufen zu vermeiden.

Abhängig vom Browser bleibt das positionierte Element, sobald es zur Fallback-Position wechselt, möglicherweise in der Fallback-Position, auch wenn die Fallback-Positionierung nicht mehr notwendig ist, wie beispielsweise wenn der Platz es erlaubt, zur Position zurückzukehren, die durch das {{cssxref("position-area")}} definiert ist.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Viewports verschieben, werden Sie ein Problem bemerken — wenn das positionierte Element in Längs- und Querrichtung zu überlaufen beginnt, kehrt es zu seiner Standardposition oben links zurück und überläuft in beiden Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte zu einer Option

Verwenden wir eine kombinierte Try-Fallback-Option, um das Problem zu beheben, das wir im vorherigen Beispiel entdeckt haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, mit Ausnahme des positionierten Elementcodes. In diesem Fall erhält es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Die dritte Position-try-Fallback-Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden, und wenn diese Fallbacks fehlschlagen, wird er beide kombinieren, indem er die Position des Elements gleichzeitig in Längs- und Querrichtung dreht. Wenn Sie nun den Anker in Richtung der oberen _und_ linken Ränder des Viewports scrollen, wird das positionierte Element nach unten rechts gedreht.

### `position-area` try Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Position-try-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, mit Ausnahme des positionierten Elementcodes. In diesem Fall sind unsere Position-try-Fallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position zum Anzeigen findet, unabhängig davon, an welchen Rändern des Viewports der Anker ist. Dieser Ansatz ist etwas langwieriger als der der vordefinierten Werte, aber auch granularer und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Position-try-Fallback-Optionen, wenn sich der Anker den Rändern des Viewports nähert.

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
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker Positionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS Anker Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
