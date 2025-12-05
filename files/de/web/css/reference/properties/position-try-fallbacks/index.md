---
title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`position-try-fallbacks** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, eine Liste von einer oder mehreren alternativen **position try fallback options** für Anker-positionierte Elemente anzugeben, die relativ zu ihren zugeordneten Ankerelementen platziert werden sollen. Wenn das Element andernfalls seinen durch ein Inset modifizierten Containerblock überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis er einen Wert findet, der es vom Überlaufen seines Containers oder des Ansichtsfensters abhält.

> [!NOTE]
> Die {{cssxref("position-try")}} Kurzschreibweise kann verwendet werden, um {{cssxref("position-try-order")}} und `position-try-fallbacks` Werte in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` mit denselben Eigenschaftswerten benannt und unterstützt. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die {{cssxref("position-try")}} Kurzschreibweise.

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

Die `position-try-fallbacks` Eigenschaft kann entweder als Schlüsselwortwert `none` oder als durch Kommas getrennte Liste von einem oder mehreren durch Leerzeichen getrennten benutzerdefinierten Positionsoptionennamen oder `<try-tactic>`s oder ein `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine `position try fallback options` gesetzt.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen bewegen das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren, wobei eventuell vorhandene Randversätze gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Inline- als auch die Blockachsenwerte, indem die `start` Eigenschaften miteinander und die `end` Eigenschaften miteinander vertauscht werden.
- Wert {{cssxref("position-area")}}
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem es das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3 [Position Area Grids](/de/docs/Web/CSS/Reference/Properties/position-area#description) basierend auf dem angegebenen {{cssxref("position-area_value","&lt;position-area>")}} Wert platziert; die Wirkung ist dieselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}} Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Fallback-Optionsliste eine benutzerdefinierte {{cssxref("@position-try")}} Option hinzu, deren Identifizierungsname mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Anker-positionierte Elemente sollten immer an einem günstigen Ort erscheinen, an dem der Benutzer, wenn möglich, interagieren kann, unabhängig davon, wo ihr Anker positioniert ist. Um zu verhindern, dass das positionierte Element das Ansichtsfenster überläuft, ist es oft notwendig, seinen Standort zu ändern, wenn sich sein Anker nahe am Rand seines Enthaltungs-Elements oder des Ansichtsfensters befindet.

Dies wird erreicht, indem eine oder mehrere `position-try` Fallback-Optionen in der `position-try-fallbacks` Eigenschaft bereitgestellt werden. Wenn die anfängliche Position des positionierten Elements überlaufen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die dazu führt, dass das Element nicht den Enthaltungs-Block überläuft, wird angewendet. Standardmäßig versucht der Browser sie in der Reihenfolge, in der sie in der Liste erscheinen und wendet die erste an, die das Überlaufen des positionierten Elements verhindert.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm platziert, stellt der Browser das positionierte Element in seiner Standardposition dar, bevor alle Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie möglicherweise nur überlaufende positionierte Elemente ausblenden, was mit der {{cssxref("position-visibility")}} Eigenschaft erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und nutzbar zu halten.

Für detaillierte Informationen zu Anker-Funktionen und der Nutzung von `position-try` Fallbacks siehe die [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modulseite und den [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

Als `<try-tactic>` in der Spezifikation bezeichnet, bewegen die vordefinierten Werte das positionierte Element, indem sie seine berechnete Position nehmen und es entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es den gleichen Abstand vom Anker, jedoch auf der gegenüberliegenden Seite hat. Anders ausgedrückt, spiegelt es die Position des Elements entlang einer Inline-Achse, die durch die Mitte des Ankers verläuft. Ein Beispiel: Wenn das positionierte Element am oberen Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position auf den unteren Rand spiegeln.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es den gleichen Abstand vom Anker, jedoch auf der gegenüberliegenden Seite hat. Anders ausgedrückt, spiegelt es die Position des Elements entlang einer Blockachse, die durch die Mitte des Ankers verläuft. Ein Beispiel: Wenn das positionierte Element am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert die Position auf den rechten Rand spiegeln.
- `flip-start`
  - : Spiegelt die Position des Elements entlang einer Achse, die diagonal durch die Mitte des Ankers verläuft, die den Punkt am Schnittpunkt der Blockachsen- und Inline-Achsenanfänge sowie den Punkt am Schnittpunkt der Blockachsen- und Inline-Achsenenden durchläuft. Ein Beispiel: Wenn das positionierte Element am linken Rand des Ankers zu überlaufen beginnt, würde dieser Wert das positionierte Element auf den oberen Rand spiegeln.

### Kombinationsoptionen

Eine einzelne `position-try` Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen enthalten oder eine Kombination aus beidem, indem sie als eine einzige durch Leerzeichen getrennte Option angegeben werden:

- Bei mehreren vordefinierten `<try-tactic>` Optionen werden ihre Transformationen zusammengefügt.
- Bei der Erklärung einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird zuerst die benutzerdefinierte Positionsoption angewendet, dann die `<try-tactic>` Transformation.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

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

Der Anker erhält einen {{cssxref("anchor-name")}} und große Ränder, um ihn irgendwo in der Nähe des Zentrums des sichtbaren Teils des `<body>` zu platzieren:

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

Das Infobox-Element erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden zu verknüpfen, und es wird am oberen linken Eckpunkt des Ankers mit einem `position-area` verankert.

Wir fügen eine `position-try-fallbacks` Liste ein (und deklarieren sie nochmals mit der `position-try` Kurzschreibweise, falls der Langform-Name der Eigenschaft noch nicht unterstützt wird), indem wir zwei vordefinierte `position-try` Fallback-Optionen bereitstellen, um zu verhindern, dass sie überlaufen, wenn der Anker dem Rand des Ansichtsfensters nahekommt, indem sie entlang der Inline- oder Blockachse des Ankers gespiegelt werden.

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

Dies ergibt das folgende Resultat:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie, so zu scrollen, dass der Anker den Rändern des Ansichtsfensters nahekommt:

- Wenn Sie den Anker nahe an die Oberkante des Ansichtsfensters bewegen, sehen Sie, dass das positionierte Element unten links am Anker gespiegelt wird, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker nahe an die linke Kante des Ansichtsfensters bewegen, sehen Sie, dass das positionierte Element oben rechts am Anker gespiegelt wird, um ein Überlaufen zu vermeiden.

Abhängig vom Browser kann es sein, dass das positionierte Element, sobald es sich zur Fallback-Position bewegt, in der Fallback-Position bleibt, auch wenn die Fallback-Positionierung nicht mehr notwendig ist, z. B. wenn der Platz es erlaubt, zur durch die {{cssxref("position-area")}} definierten Position zurückzukehren.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Ansichtsfensters bewegen, bemerken Sie ein Problem — wenn das positionierte Element beginnt, in Block- und Inlinerichtung zu überlaufen, kehrt es zu seiner Standard-Position oben links zurück und überläuft in beide Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur die Optionen `flip-block` _oder_ `flip-inline` gegeben haben. Wir haben ihm nicht die Möglichkeit gegeben, beides gleichzeitig zu versuchen. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Mehrere Werte zu einer Option kombinieren

Lassen Sie uns eine kombinierte `try fallback` Option verwenden, um das Problem aus dem vorherigen Beispiel zu beheben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, außer dem Code für das positionierte Element. In diesem Fall erhält es eine dritte `position try fallback` Option: `flip-block flip-inline`:

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

Die dritte `position-try` Fallback-Option bedeutet, dass der Browser `flip-block` und dann `flip-inline` versucht, um Überlauf zu vermeiden, und wenn diese Fallbacks fehlschlagen, kombiniert er die beiden, sodass die Position des Elements gleichzeitig in Block- und Inlinerichtungen gespiegelt wird. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Ansichtsfensters scrollen, wird das positionierte Element zur unteren rechten Ecke gespiegelt.

### `position-area` Fallback-Optionen versuchen

Dieses Beispiel zeigt einige `position-area` `position-try` Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Beispiel ist derselbe, abgesehen vom Code für das positionierte Element. In diesem Fall sind unsere `position try fallback` Optionen alle `position-area` Werte — `oben`, `oben rechts`, `rechts`, `unten rechts`, `unten`, `unten links` und `links`.

Dies bedeutet, dass das positionierte Element eine vernünftige Position zum Anzeigen findet, unabhängig davon, an welchen Ansichtsfensterrändern der Anker sich befindet. Dieser Ansatz ist etwas umständlicher als der Ansatz mit den vordefinierten Werten, ist aber auch feiner und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser `position-try` Fallback-Optionen, wenn der Anker dem Rand des Ansichtsfensters naht.

### Beispiele für benutzerdefinierte Versuch-Optionen

Siehe die {{cssxref("@position-try")}} Referenzseite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} at-rule
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
