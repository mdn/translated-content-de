---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`position-try-fallbacks** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungsversuchs-Alternativoptionen** für Anker-positionierte Elemente anzugeben, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element andernfalls seinen durch `inset` modifizierten blockumschließenden Block überlaufen würde, versucht der Browser, das positionierte Element an diesen verschiedenen Alternativpositionen zu platzieren, in der angegebenen Reihenfolge, bis er eine Position findet, die verhindert, dass das Element seinen Container oder den Sichtbereich überläuft.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich und in Chromium-Browsern als `position-try-options` unterstützt, mit denselben Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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

Die `position-try-fallbacks`-Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area`-Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Positionierungsversuchs-Alternativoptionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Alternativoptionen bewegen das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, wobei alle Margin-Versätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Dreht die Position des Elements entlang der Block-Achse.
    - `flip-inline`
      - : Dreht die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Dreht sowohl die Inline- als auch die Block-Achsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Rändern seines zugehörigen Ankerelements, indem das positionierte Element auf ein oder mehreren Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}}-Wert platziert wird; die Wirkung ist dieselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}}-Fallback-Option, die nur einen {{cssxref("position-area")}}-Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}}-Option zur Fallback-Optionenliste hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommas.

## Beschreibung

Anker-positionierte Elemente sollten, wenn möglich, immer an einem bequemen Ort für den Benutzer erscheinen, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element den Sichtbereich überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker an den Rand seines umschließenden Elements oder des Sichtbereichs nähert.

Dies wird erreicht, indem ein oder mehrere Positionierungsversuchs-Alternativoptionen in der `position-try-fallbacks`-Eigenschaft angegeben werden. Wenn die anfängliche Position des positionierten Elements zum Überlaufen führen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen umschließenden Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die bewirkt, dass das positionierte Element nicht überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig sichtbar platziert, wird der Browser das positionierte Element in seiner Standardposition anzeigen, bevor Alternativoptionen versucht wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise einfach überlaufende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}}-Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie sichtbar und nutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Positionierungsversuchs-Alternativoptionen, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt;-Werte

In der Spezifikation als `<try-tactic>` bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und sie entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Dreht die Position des Elements entlang der Block-Achse, sodass es in derselben Entfernung zum Anker, jedoch auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt spiegelt es die Position des Elements über eine Inline-Achse, die durch das Zentrum des Ankers gezogen wird. Wenn das positionierte Element beispielsweise am oberen Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach unten drehen.
- `flip-inline`
  - : Dreht die Position des Elements entlang der Inline-Achse, sodass es in derselben Entfernung zum Anker, jedoch auf der gegenüberliegenden Seite davon erscheint. Anders ausgedrückt spiegelt es die Position des Elements über eine Block-Achse, die durch das Zentrum des Ankers gezogen wird. Wenn das positionierte Element beispielsweise am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position nach rechts drehen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch das Zentrum des Ankers verläuft, durch den Punkt am Schnittpunkt des Startpunkts der Block-Achse und des Startpunkts der Inline-Achse und den Punkt am Schnittpunkt des Endpunkts der Block-Achse und des Endpunkts der Inline-Achse. Wenn das positionierte Element beispielsweise am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben drehen.

### Kombinationsoptionen

Eine einzelne Positionierungsversuchs-Alternativoption kann mehr als eine `<try-tactic>`- oder `dashed-ident`-Option oder eine Kombination aus beiden enthalten, indem sie als Einzeloption mit Leerzeichen deklariert wird:

- Im Fall mehrerer vordefinierter `<try-tactic>`-Optionen werden ihre Transformationen zusammengefügt.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>`- und einer `<dashed-ident>` benannten `@position-try`-Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann die `<try-tactic>`-Transformation.

`position-area`-Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung einiger vordefinierter `<try-tactic>` Fallback-Optionen.

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

Der Anker erhält einen {{cssxref("anchor-name")}} und große Margen, um ihn in der Nähe des Zentrums des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox wird mit fester Positionierung versehen, einer {{cssxref("position-anchor")}}-Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden miteinander zu verbinden, und ist an der oberen linken Ecke des Ankers mit einer `position-area` verankert.

Wir fügen eine `position-try-fallbacks`-Liste hinzu (und geben sie mit der `position-try`-Kurzschrift erneut an, falls der Langname der Eigenschaft noch nicht unterstützt wird), die zwei vordefinierte Positionsversuchs-Alternativoptionen bereitstellt, um zu verhindern, dass sie überlaufen, wenn sich der Anker dem Rand des Sichtbereichs nähert, indem er entlang der Inline- oder Block-Achse des Ankers gedreht wird.

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
  position-anchor: --my-anchor;
  position-area: top left;

  position-try-fallbacks: flip-block, flip-inline;
  position-try: flip-block, flip-inline;
}
```

#### Ergebnis

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass der Anker die Ränder erreicht:

- Wenn Sie den Anker nahe an den oberen Rand des Sichtbereichs bewegen, werden Sie sehen, dass das positionierte Element nach unten links über dem Anker gedreht wird, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe an den linken Rand des Sichtbereichs bewegen, wird das positionierte Element nach oben rechts über dem Anker gedreht, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Sichtbereichs bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element in der Block- und Inline-Richtung zu überlaufen beginnt, kehrt es in seine Standardposition oben links zurück und überläuft in beide Richtungen, was nicht erwünscht ist.

Dies liegt daran, dass wir dem Browser nur die Positionierungsoptionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in einer Option

Lassen Sie uns eine kombinierte Versuchsauswahloption verwenden, um das im vorherigen Demo gefundene Problem zu beheben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist der gleiche, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Positionsversuchs-Alternativoption: `flip-block flip-inline`:

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
  border: 1px solid #ddd;
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

Die dritte Positionsversuchs-Alternativoption bedeutet, dass der Browser `flip-block` dann `flip-inline` ausprobiert, um ein Überlaufen zu vermeiden, und wenn diese Alternativen fehlschlagen, wird er die beiden kombinieren, um die Position des Elements gleichzeitig in Block- und Inline-Richtung zu drehen. Wenn Sie den Anker jetzt an die oberen _und_ linken Ränder des Sichtbereichs scrollen, dreht sich das positionierte Element nach unten rechts.

### `position-area`-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area`-Versuchs-Fallback-Optionen in Aktion.

#### HTML und CSS

Alle HTML- und CSS-Codes in diesem Demo sind die gleichen, außer für den Code des positionierten Elements. In diesem Fall sind unsere Positionsversuchs-Alternativoptionen alle `position-area`-Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Dies bedeutet, dass das positionierte Element eine angemessene Position zur Anzeige findet, unabhängig davon, welchem Rand des Sichtbereichs sich der Anker nähert. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vordefinierten Werten, aber er ist auch granulärer und flexibler.

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
  border: 1px solid #ddd;
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

Scrollen Sie die Seite und überprüfen Sie die Auswirkungen dieser Positionsversuchs-Alternativoptionen, wenn sich der Anker dem Rand des Sichtbereichs nähert.

### Beispiele für benutzerdefinierte Versuchsoptionen

Sehen Sie sich die {{cssxref("@position-try")}}-Referenzseite an.

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
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
