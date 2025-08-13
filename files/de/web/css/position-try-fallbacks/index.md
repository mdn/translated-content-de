---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehreren alternativen **Position-Try-Fallback-Optionen** für ankerpositionierte Elemente anzugeben, damit diese relativ zu ihren zugehörigen Ankerelementen platziert werden. Wenn das Element ansonsten seinen durch Insets modifizierten Enthaltungsblock überschreiten würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen in der angegebenen Reihenfolge zu platzieren, bis er einen Wert findet, der das Überlaufen aus dem Container oder dem Ansichtsfenster verhindert.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um die Werte von {{cssxref("position-try-order")}} und `position-try-fallbacks` in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` mit denselben Eigenschaftswerten unterstützt. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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
  - : Der Standardwert. Es sind keine Position-Try-Fallback-Optionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen bewegen das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, wobei alle Randversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inlineachse.
    - `flip-start`
      - : Spiegelt beide Inline- und Blockachsenwerte, indem die `start`-Eigenschaften miteinander getauscht und die `end`-Eigenschaften miteinander getauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 [Positionierungsbereichs-Rasters](/de/docs/Web/CSS/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert wird; der Effekt entspricht einer benutzerdefinierten {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Fallback-Optionsliste eine benutzerdefinierte {{cssxref("@position-try")}} Option hinzu, deren Identifizierungsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können angegeben werden, getrennt durch Kommata.

## Beschreibung

Ankerpositionierte Elemente sollten immer an einem bequemen Ort erscheinen, mit dem der Benutzer interagieren kann, wenn möglich, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element aus dem Ansichtsfenster überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker nahe an der Kante seines Enthaltungsblocks oder des Ansichtsfensters befindet.

Dies wird erreicht, indem eine oder mehrere Position-Try-Fallback-Optionen in der `position-try-fallbacks` Eigenschaft bereitgestellt werden. Wenn die anfängliche Position des positionierten Elements zu einem Überlaufen führen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die das Überlaufen des Elements im Enthaltungsblock verhindert, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen, und wendet die erste an, die das Überlaufen des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig im Bildschirm sichert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition zurück, bevor Try-Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie vielleicht nur überlaufende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Ankereigenschaften und der Nutzung von Position-Try-Fallbacks siehe das [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Fallback-Optionen und bedingte Überlaufvermeidung](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

Als `<try-tactic>` in der Spezifikation bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es in derselben Entfernung vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt, es spiegelt die Position des Elements über eine Inline-Achse, die durch die Mitte des Ankers verläuft. Zum Beispiel, wenn das positionierte Element oben am Anker überläuft, würde dieser Wert die Position nach unten spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inlineachse, sodass es in derselben Entfernung vom Anker erscheint, jedoch auf der gegenüberliegenden Seite. Anders ausgedrückt, es spiegelt die Position des Elements über eine Blockachse, die durch die Mitte des Ankers verläuft. Zum Beispiel, wenn das positionierte Element links vom Anker überläuft, würde dieser Wert die Position nach rechts spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers verläuft und durch den Punkt an der Schnittstelle der Block- und Inline-Achsenstartpunkte sowie dem Punkt an der Schnittstelle der Block- und Inline-Achsenendpunkte verläuft. Zum Beispiel, wenn das positionierte Element links vom Anker überläuft, würde dieser Wert das positionierte Element nach oben spiegeln.

### Kombinationsmöglichkeiten

Eine einzelne Position-Try-Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Option enthalten oder eine Kombination von beiden, indem sie als eine einzelne durch Leerzeichen getrennte Option deklariert werden:

- Im Falle von mehreren vordefinierten `<try-tactic>` Optionen werden ihre Transformationen zusammengefügt.
- Im Falle einer Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet und dann die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung einiger vordefinierter `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem ankerpositionierten Element werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo nahe dem Zentrum des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Die Infobox erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden zu verbinden, und sie wird mit der oberen linken Ecke des Ankers mit einem `position-area` verknüpft.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langformat-Eigenschaftsname noch nicht unterstützt wird), und bieten zwei vordefinierte Position-Try-Fallback-Optionen an, um zu verhindern, dass sie überläuft, wenn sich der Anker nahe an der Kante des Ansichtsfensters befindet, indem er sie entlang der Inline- oder Blockachse des Ankers umdreht.

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

Das gibt uns folgendes Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie, zu scrollen, sodass sich der Anker den Rändern nähert:

- Wenn Sie den Anker nahe der oberen Kante des Ansichtsfensters bewegen, sehen Sie, wie sich das positionierte Element nach unten links des Ankers dreht, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe der linken Kante des Ansichtsfensters bewegen, sehen Sie, wie sich das positionierte Element nach oben rechts des Ankers dreht, um ein Überlaufen zu vermeiden.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, bemerken Sie ein Problem — da das positionierte Element anfängt, sowohl in Block- als auch Inline-Richtungen überzulaufen, dreht es sich zurück auf seine Standard-Oben-Links-Position und überläuft in beide Richtungen, was nicht das ist, was wir wollen.

Das liegt daran, dass wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beide gleichzeitig auszuprobieren. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in eine Option

Lassen Sie uns eine kombinierte Try-Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall erhält es eine dritte Position-Try-Fallback-Option: `flip-block flip-inline`:

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

Die dritte Position-Try-Fallback-Option bedeutet, dass der Browser `flip-block`, dann `flip-inline` versucht, um ein Überlaufen zu vermeiden, und wenn diese Fallbacks fehlschlagen, werden sie kombiniert, indem die Position des Elements gleichzeitig in Block- und Inline-Richtungen gedreht wird. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Kanten des Ansichtsfensters scrollen, wird das positionierte Element nach unten rechts umgeschlagen.

### `position-area` Try-Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` Position-Try-Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer für den Code des positionierten Elements. In diesem Fall sind unsere Position-Try-Fallback-Optionen alle `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine angemessene Position findet, um angezeigt zu werden, egal, welche Ränder des Ansichtsfensters der Anker nahe ist. Dieser Ansatz ist etwas ausführlicher als der Ansatz mit den vordefinierten Werten, aber er ist auch feiner und flexibler.

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

Scrollen Sie die Seite und prüfen Sie die Auswirkung dieser Position-Try-Fallback-Optionen, wenn sich der Anker der Kante des Ansichtsfensters nähert.

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
- [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [Fallback-Optionen und bedingte Überlaufvermeidung](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
