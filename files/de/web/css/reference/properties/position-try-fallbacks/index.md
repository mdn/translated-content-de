---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehr alternativen **Position-Try-Fallback-Optionen** für anker-positionierte Elemente festzulegen, damit diese relativ zu ihren zugeordneten Ankerelementen platziert werden. Wenn das Element ansonsten seinen inset-modifizierten Containing Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis es einen Wert findet, der das Überlaufen des Containers oder des Viewports stoppt.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als das Schlüsselwort `none` oder als kommagetrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Position-Try-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem es seine berechnete Position nimmt und sie über eine bestimmte Achse des Ankers spiegelt und eventuelle Randabstände spiegelt. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, indem die `start`-Eigenschaften miteinander und die `end`-Eigenschaften miteinander getauscht werden.
- [`position-area`](/de/docs/Web/CSS/Reference/Properties/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugeordneten Ankerelements, indem es das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/Reference/Properties/position-area#description) platziert, basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert; der Effekt ist derselbe wie bei einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Fallback-Optionsliste eine benutzerdefinierte {{cssxref("@position-try")}} Option hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommata getrennt angegeben werden.

## Beschreibung

Anker-positionierte Elemente sollten, wenn möglich, immer an einem für den Benutzer bequemen Ort erscheinen, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element den Viewport überläuft, muss es oft notwendig sein, seine Position zu ändern, wenn sich sein Anker in der Nähe des Randes seines umgebenden Elements oder des Viewports befindet.

Dies wird erreicht, indem eine oder mehrere Position-Try-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft angegeben werden. Wenn die initiale Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Position-Option; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen Containing Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge zu testen, in der sie in der Liste erscheinen, und wendet die erste an, die das Überlaufen des positionierten Elements stoppt.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, zeigt der Browser das positionierte Element in seiner Standardposition an, bevor Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise, dass überlaufende positionierte Elemente einfach ausgeblendet werden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und zur Verwendung von Position-Try-Fallbacks siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

In der Spezifikation als `<try-tactic>` bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es in derselben Entfernung vom Anker erscheint, aber auf der gegenüberliegenden Seite. Anders ausgedrückt: Es spiegelt die Position des Elements entlang einer Inline-Achse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element oben am Anker zu überlaufen beginnt, spiegelt dieser Wert die Position nach unten.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es in derselben Entfernung vom Anker erscheint, aber auf der gegenüberliegenden Seite. Anders ausgedrückt: Es spiegelt die Position des Elements entlang einer Blockachse, die durch die Mitte des Ankers verläuft. Als Beispiel: Wenn das positionierte Element links vom Anker zu überlaufen beginnt, spiegelt dieser Wert die Position nach rechts.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers verläuft und durch den Punkt an den Schnittstellen der Blockachsenanfangs- und Inlineachsenanfangswerte sowie den Punkt an den Schnittstellen der Blockachsenend- und Inlineachsenendwerte verläuft. Als Beispiel, wenn das positionierte Element links vom Anker zu überlaufen beginnt, spiegelt dieser Wert das positionierte Element nach oben.

### Kombinationsoptionen

Eine einzelne Position-Try-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen oder eine Kombination aus beiden enthalten, indem sie als eine einzelne durch Leerzeichen getrennte Option deklariert wird:

- Im Falle mehrerer vordefinierter `<try-tactic>` Optionen werden deren Transformationen zusammengefügt.
- Im Falle der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` namens `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von ein paar vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem anker-positionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir stylen das `<body>` Element, um sehr groß zu sein, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo nahe der Mitte des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die den Anker `anchor-name` referenziert, um die beiden zusammenzubringen, und sie ist an der oberen linken Ecke des Ankers verankert, indem ein `position-area` verwendet wird.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langform-Eigenschaftsname noch nicht unterstützt wird), indem wir zwei vordefinierte Position-Try-Fallback-Optionen angeben, um ein Überlaufen zu verhindern, wenn sich der Anker in der Nähe des Rands des Viewports bewegt, indem er entlang der Inline- oder Blockachse des Ankers gespiegelt wird.

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

{{ EmbedLiveSample("Vordefinierte Try-Optionen", "100%", "250") }}

Versuchen Sie, den Anker an die Ränder zu scrollen:

- Wenn Sie den Anker in die Nähe des oberen Randes des Viewports bewegen, sehen Sie, wie das positionierte Element nach unten links zum Anker klappt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Viewports bewegen, sehen Sie, wie das positionierte Element nach oben rechts zum Anker klappt, um ein Überlaufen zu vermeiden.

Abhängig vom Browser kann es sein, dass sich das positionierte Element, sobald es in die Fallback-Position bewegt wurde, weiter in der Fallback-Position bleibt, selbst wenn die Fallback-Positionierung nicht mehr notwendig ist, z. B. wenn der Platz es erlaubt, zur Position zurückzukehren, die durch das {{cssxref("position-area")}} definiert ist.

Wenn Sie jedoch den Anker zur oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — da das positionierte Element beginnt, sowohl in horizontale als auch in vertikale Richtung zu überlaufen, klappt es zurück zu seiner Standardposition oben links und überfließt in beide Richtungen, was nicht erwünscht ist.

Das liegt daran, dass wir dem Browser nur die Position-Optionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Option gegeben, beide gleichzeitig zu versuchen. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte zu einer Option kombinieren

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir mit dem vorherigen Demo festgestellt haben.

#### HTML und CSS

Der gesamte HTML und CSS in diesem Demo ist gleich, außer für den Code des positionierten Elements. In diesem Fall bekommt es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`.

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

{{ EmbedLiveSample("Mehrere Werte zu einer Option kombinieren", "100%", "250") }}

Die dritte Position-Try-Fallback-Option bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, werden die beiden kombiniert, wobei die Position des Elements gleichzeitig in Block- und Inline-Richtung gespiegelt wird. Jetzt, wenn Sie den Anker zu den oberen _und_ linken Rändern des Viewports scrollen, klappt das positionierte Element zur unteren rechten Ecke.

### `position-area` Try-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Position-Try-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML und CSS in diesem Demo ist gleich, außer für den Code des positionierten Elements. In diesem Fall sind unsere Position-Try-Fallback-Optionen alles `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Dies bedeutet, dass das positionierte Element eine angemessene Position findet, um angezeigt zu werden, unabhängig davon, welchen Kanten des Viewports der Anker nahe ist. Dieser Ansatz ist etwas aufwendiger als der Ansatz mit den vordefinierten Werten, ist aber auch detaillierter und flexibler.

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

{{ EmbedLiveSample("`position-area` Try-Fallback-Optionen", "100%", "250") }}

Scrollen Sie die Seite und prüfen Sie den Effekt dieser Position-Try-Fallback-Optionen, wenn sich der Anker an den Rand des Viewports nähert.

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
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
