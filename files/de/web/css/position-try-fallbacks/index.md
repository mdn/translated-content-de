---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
l10n:
  sourceCommit: f92f270abb764f5238b32ab98b33f2b92713a176
---

{{CSSRef}}

Die **`position-try-fallbacks`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, eine Liste von einem oder mehr alternativen **position try fallback Optionen** für verankerte Positionierungselemente anzugeben, um sie relativ zu ihren zugehörigen Ankerelementen zu platzieren. Wenn das Element sonst seinen inset-modifizierten enthaltenden Block überlaufen würde, versucht der Browser, das positionierte Element in diesen verschiedenen Fallback-Positionen, in der angegebenen Reihenfolge, zu platzieren, bis er einen Wert findet, der es davon abhält, seinen Container oder den Viewport zu überlaufen.

> [!NOTE]
> Die Kurzschreibweise {{cssxref("position-try")}} kann verwendet werden, um die Werte von {{cssxref("position-try-order")}} und `position-try-fallbacks` in einer einzigen Deklaration anzugeben.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `position-try-options` benannt und unterstützt, mit denselben Eigenschaftswerten. Bis `position-try-fallbacks` unterstützt wird, verwenden Sie stattdessen die Kurzschreibweise {{cssxref("position-try")}}.

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

Die Eigenschaft `position-try-fallbacks` kann entweder als das Schlüsselwort `none` oder als kommaseparierte Liste von einem oder mehr durch Leerzeichen getrennten benutzerdefinierten Positionsoptionsnamen oder `<try-tactic>`s oder einem `position-area` Wert angegeben werden.

### Werte

- `none`
  - : Der Standardwert. Es sind keine Fallback-Optionen für die Position set up.
- `<try-tactic>`
  - : Vordefinierte Fallback-Optionen verschieben das positionierte Element, indem seine berechnete Position entlang einer bestimmten Achse des Ankers transformiert wird, wobei alle Randabstände gespiegelt werden. Mögliche Werte sind:
    - `flip-block`
      - : Kippt die Position des Elements entlang der Block-Achse.
    - `flip-inline`
      - : Kippt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Kippt sowohl die Inline- als auch die Blockachse, indem die `start`-Eigenschaften und die `end`-Eigenschaften miteinander vertauscht werden.
- [`position-area`](/de/docs/Web/CSS/position-area) Wert
  - : Positioniert das Element relativ zu den Kanten seines zugehörigen Ankerelements, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 [position area grid](/de/docs/Web/CSS/position-area#description) platziert wird, basierend auf dem angegebenen {{cssxref("position-area_value","<position-area>")}} Wert; der Effekt ist derselbe wie eine benutzerdefinierte {{cssxref("@position-try")}} Fallback-Option, die nur einen {{cssxref("position-area")}}-Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt eine benutzerdefinierte {{cssxref("@position-try")}} Option zur Fallback-Optionsliste hinzu, deren identifizierender Name mit dem angegebenen `dashed-ident` übereinstimmt. Wenn keine benutzerdefinierte Positionsoption mit diesem Namen existiert, wird die Option ignoriert.

> [!NOTE]
> Mehrere Optionen können durch Kommas getrennt angegeben werden.

## Beschreibung

Verankerte Positionierungselemente sollten immer an einem für den Benutzer bequemen Ort erscheinen, falls dies möglich ist, unabhängig davon, wo sich ihr Anker befindet. Um zu verhindern, dass das positionierte Element den Viewport überläuft, ist es oft notwendig, seine Position zu ändern, wenn sich sein Anker in der Nähe des Rands seines enthaltenen Elements oder des Viewports befindet.

Dies wird erreicht, indem eine oder mehrere position-try-Fallback-Optionen in der Eigenschaft `position-try-fallbacks` angegeben werden. Wenn die anfängliche Position des positionierten Elements zu einem Überlauf führen würde, versucht der Browser jede Fallback-Positionsoption; die erste Fallback-Option, die nicht dazu führt, dass das Element seinen enthaltenen Block überläuft, wird angewendet. Standardmäßig wird der Browser die Optionen in der Reihenfolge versuchen, in der sie in der Liste erscheinen, und die erste anwenden, die verhindert, dass das positionierte Element überläuft.

Wenn keine Option gefunden werden kann, die das positionierte Element vollständig auf dem Bildschirm positioniert, kehrt der Browser zur Anzeige des positionierten Elements an seiner Standardposition zurück, bevor Fallback-Optionen angewendet wurden.

> [!NOTE]
> In einigen Situationen möchten Sie vielleicht einfach überlaufende positionierte Elemente ausblenden, was mit der Eigenschaft {{cssxref("position-visibility")}} erreicht werden kann. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und benutzbar zu halten.

Für detaillierte Informationen zu Ankerfunktionen und zur Verwendung von Fallback-Optionen siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden.

### Vordefinierte &lt;try-tactic&gt; Werte

Als `<try-tactic>` in der Spezifikation bezeichnet, verschieben die vordefinierten Werte das positionierte Element, indem dessen berechnete Position entlang einer bestimmten Achse des Ankers transformiert wird. Die vordefinierten Werte sind:

- `flip-block`
  - : Kippt die Position des Elements entlang der Block-Achse, sodass es in gleicher Entfernung vom Anker, aber auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements über eine Inline-Achse, die durch die Mitte des Ankers gezogen wird. Zum Beispiel, wenn das positionierte Element oben am Anker zu überlaufen beginnt, würde dieser Wert die Position nach unten kippen.
- `flip-inline`
  - : Kippt die Position des Elements entlang der Inline-Achse, sodass es in gleicher Entfernung vom Anker, aber auf der gegenüberliegenden Seite erscheint. Anders ausgedrückt, es spiegelt die Position des Elements über eine Block-Achse, die durch die Mitte des Ankers gezogen wird. Zum Beispiel, wenn das positionierte Element links am Anker zu überlaufen beginnt, würde dieser Wert die Position nach rechts kippen.
- `flip-start`
  - : Spiegelt die Position des Elements über eine Achse, die diagonal durch die Mitte des Ankers gezogen wird, die den Punkt an der Schnittstelle der Block-Achse Anfang und der Inline-Achse Anfang und den Punkt an der Schnittstelle der Block-Achse Ende und der Inline-Achse Ende durchläuft. Zum Beispiel, wenn das positionierte Element links am Anker zu überlaufen beginnt, würde dieser Wert das positionierte Element nach oben kippen.

### Kombinationsoptionen

Eine einzelne position-try Fallback-Option kann mehr als eine `<try-tactic>` oder `dashed-ident` Optionen oder eine Kombination aus beiden durch ihre Deklaration als eine einzelne durch Leerzeichen getrennte Option enthalten:

- Im Fall von mehreren vordefinierten `<try-tactic>` Optionen werden deren Transformationen zusammengefügt.
- Im Fall der Deklaration einer vordefinierten `<try-tactic>` und einer `<dashed-ident>` benannten `@position-try` Option wird die benutzerdefinierte Positionsoption zuerst angewendet, danach wird die `<try-tactic>` Transformation angewendet.

`position-area` Werte können nicht auf diese Weise kombiniert werden.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt die grundlegende Nutzung von ein paar vordefinierten `<try-tactic>` Fallback-Optionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}} Elemente, die zu einem Anker und einem verankerten Positionierungselement werden:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>` Element sehr groß, um sowohl horizontales als auch vertikales Scrollen zu ermöglichen.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Margen, um ihn irgendwo in der Nähe der Mitte des sichtbaren Abschnitts des `<body>` zu platzieren:

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

Das Infofenster erhält eine feste Positionierung, eine {{cssxref("position-anchor")}} Eigenschaft, die sich auf den `anchor-name` des Ankers bezieht, um die beiden zu verknüpfen, und es ist an der oberen linken Ecke des Ankers mit einer `position-area` befestigt.

Wir fügen eine `position-try-fallbacks` Liste hinzu (und deklarieren sie erneut mit der `position-try` Kurzschreibweise, falls der Langform-Eigenschaftsname noch nicht unterstützt wird), indem wir zwei vordefinierte position-try Fallback-Optionen angeben, um zu verhindern, dass es überläuft, wenn der Anker nahe dem Rand des Viewports kommt, indem es entlang der Inline- oder Block-Achse des Ankers gekippt wird.

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

Dies ergibt folgendes Ergebnis:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Versuchen Sie zu scrollen, sodass der Anker den Rändern nahekommt:

- Wenn Sie den Anker in die Nähe des oberen Randes des Viewports bewegen, sehen Sie, wie das positionierte Element nach unten links zum Anker kippt, um ein Überlaufen zu vermeiden.
- Wenn Sie den Anker in die Nähe des linken Randes des Viewports bewegen, sehen Sie, wie das positionierte Element nach oben rechts zum Anker kippt, um ein Überlaufen zu vermeiden.

Wenn Sie jedoch den Anker in Richtung der oberen linken Ecke des Viewports bewegen, werden Sie ein Problem bemerken — sobald das positionierte Element in der Block- und Inline-Achse überläuft, kippt es zurück in seine Standard-Position oben links und überläuft in beide Richtungen, was nicht gewünscht ist.

Dies liegt daran, dass wir dem Browser nur Positionsoptionen von `flip-block` _oder_ `flip-inline` gegeben haben. Wir gaben ihm nicht die Option, beide gleichzeitig zu versuchen. Das nächste Beispiel zeigt Ihnen, wie Sie dieses Problem beheben können.

### Kombinieren mehrerer Werte in einer Option

Lassen Sie uns eine kombinierte Fallback-Option verwenden, um das Problem zu beheben, das wir im vorherigen Demo gefunden haben.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer dem Code für das positionierte Element. In diesem Fall erhält es eine dritte Position try Fallback-Option: `flip-block flip-inline`:

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

Die dritte position-try Fallback-Option bedeutet, dass der Browser `flip-block` dann `flip-inline` versucht, um Überlauf zu vermeiden, und wenn diese Fallbacks fehlschlagen, werden beide kombiniert, wodurch die Position des Elements sowohl in der Block- als auch in der Inline-Richtung gleichzeitig gekippt wird. Jetzt, wenn Sie den Anker in Richtung der oberen _und_ linken Ränder des Viewports scrollen, kippt das positionierte Element nach unten rechts.

### `position-area` Try Fallback-Optionen

Dieses Beispiel zeigt einige `position-area` position-try Fallback-Optionen in Aktion.

#### HTML und CSS

Der gesamte HTML- und CSS-Code in diesem Demo ist derselbe, außer dem Code für das positionierte Element. In diesem Fall sind unsere Fallback-Options die `position-area` Werte — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, und `left`.

Das bedeutet, dass das positionierte Element eine vernünftige Position zum Anzeigen findet, unabhängig von den Rändern des Viewports, die der Anker erreicht. Dieser Ansatz ist ein bisschen umständlicher als der Ansatz der vordefinierten Werte, aber er ist auch granularer und flexibler.

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

Scrollen Sie die Seite und überprüfen Sie die Wirkung dieser position-try Fallback-Optionen, wenn der Anker den Rand des Viewports erreicht.

### Beispiele für benutzerdefinierte Try-Optionen

Sehen Sie auf der Referenzseite {{cssxref("@position-try")}} nach.

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
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [Verwendung von CSS Anchor Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
