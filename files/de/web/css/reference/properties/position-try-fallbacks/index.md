---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 5e8fe8ccf54250d48069753f3a459cfc7eda6ed3
---

Die **`position-try-fallbacks** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungsversuchs-Rückfalloptionen** für Anker-positionierte Elemente anzugeben, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element ansonsten über seinen durch Einfügeveränderung modifizierten enthaltenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Rückfallpositionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der es davon abhält, seinen Container oder das Anzeigefenster zu überlaufen.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Solange `position-try-fallbacks` noch nicht unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommaseparierte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoption-Namen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Rückfalloptionen für Positionierungsversuche festgelegt.
- `<try-tactic>`
  - : Vordefinierte Rückfalloptionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und sie entlang einer bestimmten Achse des Ankers transformieren, wobei alle Randabstände gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inlineachse.
    - `flip-start`
      - : Spiegelt die Werte für Inline- und Blockachsen, indem die `start` Eigenschaften miteinander und die `end` Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/Reference/Properties/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugehörigen Ankerelements, indem es das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/Reference/Properties/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert; die Wirkung ist die gleiche wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Rückfalloption, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Liste der Rückfalloptionen hinzu, deren Bezeichnungsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Anker-positionierte Elemente sollten immer an einem bequemen Ort erscheinen, damit der Benutzer mit ihnen interagieren kann, wenn möglich, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Anzeigefenster überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sein Anker in die Nähe des Randes seines enthaltenden Elements oder des Anzeigefensters kommt.

Dies wird erreicht, indem eine oder mehrere Rückfalloptionen für Positionierungsversuche in der `position-try-fallbacks` Eigenschaft angegeben werden. Wenn die Anfangsposition des positionierten Elements Überlauf verursachen würde, versucht der Browser jede Rückfallpositionsoption; die erste, die nicht zu Überlauf führt, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die den Überlauf des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser dazu zurück, das positionierte Element an seiner Standardposition vor der Anwendung von Rückfalloptionen anzuzeigen.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise überlaufende positionierte Elemente einfach ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie sichtbar und nutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Rückfalloptionen, siehe die modulare [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Seite und den [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und sie entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es den gleichen Abstand vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt, es spiegelt die Position des Elements über eine Inlineachse wider, die durch die Mitte des Ankers gezogen wird. Ein Beispiel: Wenn das positionierte Element oben am Anker zu überlaufen beginnt, würde dieser Wert die Position nach unten spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inlineachse, sodass es den gleichen Abstand vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt, es spiegelt die Position des Elements über eine Blockachse wider, die durch die Mitte des Ankers gezogen wird. Ein Beispiel: Wenn das positionierte Element links vom Anker zu überlaufen beginnt, würde dieser Wert die Position nach rechts spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse wider, die diagonal durch die Mitte des Ankers verläuft und durch den Punkt am Schnittpunkt der Blockachsenstart und der Inlineachsenstart und den Punkt am Schnittpunkt der Blockachsenende und der Inlineachsenende verläuft. Ein Beispiel: Wenn das positionierte Element links vom Anker zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinationsoptionen

Eine einzelne Positionierungsversuchs-Rückfalloption kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen enthalten oder eine Kombination aus beiden, indem sie sie als eine einzelne durch Leerzeichen getrennte Option deklariert:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen werden deren Transformationen zusammengefügt.
- Im Fall von einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von ein paar vordefinierten `<try-tactic>` Rückfalloptionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem Anker-positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element so, dass es sehr groß ist, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker wird mit einem {{cssxref("anchor-name")}} und großen Rändern versehen, um ihn irgendwo in der Nähe der Mitte des sichtbaren Bereichs des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den `anchor-name` des Ankers referenziert, um die beiden zu verknüpfen, und wird an die obere linke Ecke des Ankers mit einer `position-area` gebunden.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langform-Eigenschaftsname noch nicht unterstützt wird), indem wir zwei vordefinierte Rückfalloptionen für Positionierungsversuche bereitstellen, um zu verhindern, dass es überläuft, wenn der Anker in die Nähe des Rands des Anzeigefensters kommt, indem es entlang der Inline- oder Blockachse des Ankers gespiegelt wird.

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

Versuchen Sie zu scrollen, sodass der Anker den Rändern nähert:

- Wenn Sie den Anker in die Nähe des oberen Rands des Anzeigefensters bewegen, sehen Sie, dass das positionierte Element zur unteren linken Seite des Ankers flippt, um Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Rands des Anzeigefensters bewegen, sehen Sie, dass das positionierte Element zur oberen rechten Seite des Ankers flippt, um Überlaufen zu vermeiden.

Abhängig vom Browser kann es vorkommen, dass das positionierte Element in der Rückfallposition verbleibt, selbst wenn die Rückfallpositionierung nicht mehr erforderlich ist, beispielsweise wenn der Platz es erlaubt, zur durch das {{cssxref("position-area")}} definierte Position zurückzukehren.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Anzeigefensters bewegen, werden Sie ein Problem bemerken — sobald das positionierte Element sowohl in der Block- als auch in der Inline-Richtung überläuft, flippt es zurück zu seiner Standard-Position oben links und überläuft in beide Richtungen, was nicht erwünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionierungsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir gaben ihm nicht die Möglichkeit, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte in eine Option kombinieren

Lassen Sie uns eine kombinierte Rückfalloption verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben.

#### HTML und CSS

Alle HTML- und CSS-Codes in diesem Demo sind gleich, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Rückfalloption für den Positionierungsversuch: `flip-block flip-inline`:

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

Die dritte Positionierungsversuchs-Rückfalloption bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um Überlauf zu vermeiden, und wenn diese Rückfalloptionen fehlschlagen, wird er die beiden kombinieren und die Position des Elements in sowohl der Block- als auch der Inline-Richtung gleichzeitig flippen. Nun, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Anzeigefensters scrollen, wird das positionierte Element zur unteren rechten Seite flippen.

### `position-area` Rückfalloptionen für den Positionierungsversuch

Dieses Beispiel zeigt einige `position-area` Rückfalloptionen für den Positionierungsversuch in Aktion.

#### HTML und CSS

Alle HTML- und CSS-Codes in diesem Demo sind gleich, außer für den Code des positionierten Elements. In diesem Fall sind unsere Rückfalloptionen für den Positionierungsversuch alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Dies bedeutet, dass das positionierte Element eine vernünftige Position finden wird, um angezeigt zu werden, unabhängig davon, welche Kanten des Anzeigefensters der Anker in der Nähe ist. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vordefinierten Werten, aber er ist auch detaillierter und flexibler.

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

Scrollen Sie die Seite und prüfen Sie die Wirkung dieser Rückfalloptionen für den Positionierungsversuch, während sich der Anker den Rändern des Anzeigefensters nähert.

### Beispiele für benutzerdefinierte Versuchsmöglichkeiten

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
- [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
