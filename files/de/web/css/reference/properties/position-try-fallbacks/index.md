---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Positionierungsversuchen als Fallback-Optionen** für verankerte Elemente anzugeben, die relativ zu ihren zugehörigen Ankerelementen platziert werden sollen. Wenn das Element ansonsten seinen inset-modifizierten Containing Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen zu platzieren, in der angegebenen Reihenfolge, bis er einen Wert findet, der es daran hindert, seinen Container oder den Viewport zu überlaufen.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einem einzigen Deklaration anzugeben.

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

Die `position-try-fallbacks`-Eigenschaft kann entweder als Schlüsselwortwert `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area`-Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Fallback-Positionierungsversuche festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, wobei alle Randversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Block-Achse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Block-Achsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/Reference/Properties/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3 [Position Area Grid](/de/docs/Web/CSS/Reference/Properties/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}}-Wert platziert wird; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}}-Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Verankerte Elemente sollten, wenn möglich, immer an einem praktischen Ort für den Benutzer zur Interaktion erscheinen, unabhängig davon, wo ihr Anker positioniert ist. Um das Überlaufen des positionierten Elements in den Viewport zu verhindern, ist es oft notwendig, seinen Standort zu ändern, wenn sein Anker sich nahe dem Rand seines beinhaltenden Elements oder des Viewports befindet.

Dies wird erreicht, indem eine oder mehrere Fallback-Positionierungsversuche in der `position-try-fallbacks`-Eigenschaft angegeben werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionierungsoption; die erste Fallback-Option, die das Überlaufen im Containing Block verhindert, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die das Überlaufen verhindert.

Kann keine Option gefunden werden, die das positionierte Element vollständig auf dem Bildschirm platziert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition zurück, bevor die Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise überlaufende positionierte Elemente einfach ausblenden, was mit der {{cssxref("position-visibility")}}-Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und der Verwendung von Fallback-Positionierungsversuchen siehe die [CSS-Ankerpositionierungs-](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Hauptseite und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt;-Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Block-Achse, so dass es in gleicher Entfernung vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Inline-Achse, die durch das Zentrum des Ankers verläuft. Als Beispiel, wenn das positionierte Element am oberen Ende des Ankers zu überlaufen begann, würde dieser Wert die Position nach unten drehen.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, so dass es in gleicher Entfernung vom Anker auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements entlang einer Block-Achse, die durch das Zentrum des Ankers verläuft. Als Beispiel, wenn das positionierte Element am linken Ende des Ankers zu überlaufen begann, würde dieser Wert die Position nach rechts drehen.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch das Zentrum des Ankers verläuft, und durch den Punkt am Schnittpunkt der Block-Achsen-Start- und Inline-Achsen-Start sowie den Punkt am Schnittpunkt der Block-Achsen-End- und Inline-Achsen-End verläuft. Als Beispiel, wenn das positionierte Element links vom Anker zu überlaufen begann, würde dieser Wert das positionierte Element nach oben drehen.

### Kombinationsoptionen

Eine einzelne Fallback-Option für Positionierungsversuche kann mehr als eine `<try-tactic>` oder `dashed-ident`-Option oder eine Kombination von beiden enthalten, indem sie als einzelne durch Leerzeichen getrennte Option deklariert wird:

- Im Falle von mehreren vordefinierten `<try-tactic>`-Optionen werden deren Transformationen zusammengefügt.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>`- und einer `<dashed-ident>`-benannten `@position-try`-Option wird zuerst die benutzerdefinierte Positionierungsoption angewendet und dann die `<try-tactic>`-Transformation.

`position-area`-Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von ein paar vordefinierten `<try-tactic>`-Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die zu einem Anker und einem verankerten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>`-Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Dem Anker wird ein {{cssxref("anchor-name")}} und große Margen gegeben, um ihn irgendwo in der Nähe des sichtbaren Bereichs des `<body>` zu positionieren:

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

Das Infobox-Element bekommt eine feste Positionierung, eine {{cssxref("position-anchor")}}-Eigenschaft, die sich auf das `anchor-name` des Ankers bezieht, um die beiden zu verknüpfen, und es wird mit der oberen linken Ecke des Ankers mithilfe eines `position-area` verbunden.

Wir fügen eine `position-try-fallbacks`-Liste hinzu (und deklarieren sie erneut mit der `position-try`-Kurzschreibweise, falls der Langname der Eigenschaft noch nicht unterstützt wird), die zwei vordefinierte Fallback-Positionierungsversuche bereitstellt, um ein Überlaufen zu verhindern, wenn der Anker sich nahe dem Rand des Viewports befindet, indem er entlang der Inline- oder Block-Achse des Ankers gedreht wird.

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

Versuchen Sie zu scrollen, damit der Anker die Ränder erreicht:

- Wenn Sie den Anker in die Nähe des oberen Bereichs des Viewports bewegen, sehen Sie, dass sich das positionierte Element nach unten links zum Anker dreht, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Bereichs des Viewports bewegen, sehen Sie, dass sich das positionierte Element nach oben rechts zum Anker dreht, um ein Überlaufen zu vermeiden.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — wenn das positionierte Element in Richtung der Block- und Inline-Achse zu überlaufen beginnt, dreht es zurück zur Standardposition oben links und überläuft in beide Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte zu einer Option kombinieren

Lassen Sie uns eine kombinierte Fallback-Option verwenden, um das Problem zu beheben, das wir mit der vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in dieser Demo ist derselbe, abgesehen vom Code für das positionierte Element. In diesem Fall wird ihm eine dritte Fallback-Option für Positionierungsversuche gegeben: `flip-block flip-inline`:

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

Die dritte Fallback-Option für Positionierungsversuche bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, wird er die beiden kombinieren, wobei die Position des Elements gleichzeitig in der Block- und Inline-Richtung gedreht wird. Jetzt, wenn Sie den Anker in Richtung des oberen _und_ linken Randes des Viewports scrollen, wird das positionierte Element zur unteren rechten Seite gedreht.

### `position-area` Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Fallback-Positionierungsversuche in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in dieser Demo ist derselbe, abgesehen vom Code für das positionierte Element. In diesem Fall sind alle unsere Fallback-Positionierungsoptionen `position-area`-Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine angemessene Position finden wird, um angezeigt zu werden, unabhängig davon, an welchen Rändern des Viewports sich der Anker befindet. Diese Herangehensweise ist etwas langwieriger als der vordefinierte Wertansatz, aber sie ist auch genauer und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie den Effekt dieser Fallback-Optionen für Positionierungsversuche, wenn der Anker sich der Kante des Viewports nähert.

### Beispiele für benutzerdefinierte Versuchsmöglichkeiten

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
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
