---
title: "`position-try-fallbacks` CSS property"
short-title: position-try-fallbacks
slug: Web/CSS/Reference/Properties/position-try-fallbacks
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-try-fallbacks`** können Sie eine Liste mit einer oder mehreren alternativen **Positionierungsoptionen** für an Ankern positionierte Elemente angeben. Wenn das Element andernfalls aus seinem durch Inset-Eigenschaften angepassten umschließenden Block herausragen würde, versucht der Browser, es an diesen alternativen Positionen zu platzieren. Er prüft sie in der angegebenen Reihenfolge, bis er eine Position findet, an der das Element nicht mehr aus seinem Container oder dem Viewport herausragt.

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

Die Eigenschaft `position-try-fallbacks` kann entweder mit dem Schlüsselwort `none` oder als kommagetrennte Liste angegeben werden. Jeder Listeneintrag besteht aus einem oder mehreren durch Leerzeichen getrennten Namen benutzerdefinierter Positionierungsoptionen oder `<try-tactic>`-Werten oder aus einem `position-area`-Wert.

### Werte

Diese Eigenschaft wird als Schlüsselwort `none` oder als kommagetrennte Liste der folgenden Werte angegeben:

- `none`
  - : Der Standardwert. Es sind keine alternativen Positionierungsoptionen festgelegt.
- `<try-tactic>`
  - : Vordefinierte Ausweichoptionen verschieben das positionierte Element, indem sie seine berechnete Position entlang einer bestimmten Achse des Ankers transformieren. Dabei werden auch etwaige Abstände durch `margin` gespiegelt. Mögliche Werte sind:
    - `flip-block`
      - : Spiegelt die Position des Elements entlang der Blockachse.
    - `flip-inline`
      - : Spiegelt die Position des Elements entlang der Inline-Achse.
    - `flip-start`
      - : Spiegelt sowohl die Werte der Inline- als auch der Blockachse und vertauscht dabei die jeweiligen `start`-Eigenschaften sowie die jeweiligen `end`-Eigenschaften.
- {{cssxref("position-area")}}-Wert
  - : Positioniert das Element relativ zu den Kanten des zugehörigen Ankerelements, indem es anhand des angegebenen {{cssxref("position-area_value","&lt;position-area>")}}-Werts auf einer oder mehreren Zellen eines impliziten 3×3-[Positionsbereichsrasters](/de/docs/Web/CSS/Reference/Properties/position-area#description) platziert wird. Die Wirkung entspricht einer benutzerdefinierten {{cssxref("@position-try")}}-Ausweichoption, die nur einen {{cssxref("position-area")}}-Deskriptor enthält.
- {{cssxref("dashed-ident")}}
  - : Fügt der Liste der Ausweichoptionen eine benutzerdefinierte {{cssxref("@position-try")}}-Option hinzu, deren Name mit dem angegebenen `dashed-ident` übereinstimmt. Existiert keine benutzerdefinierte Positionierungsoption mit diesem Namen, wird die Option ignoriert.

## Beschreibung

An Ankern positionierte Elemente sollten nach Möglichkeit immer an einer für die Interaktion gut erreichbaren Stelle erscheinen, unabhängig davon, wo sich ihr Anker befindet. Damit das positionierte Element nicht aus dem Viewport herausragt, muss seine Position häufig geändert werden, wenn sich sein Anker dem Rand des umschließenden Elements oder des Viewports nähert.

Dazu werden in der Eigenschaft `position-try-fallbacks` eine oder mehrere alternative Positionierungsoptionen angegeben. Würde das positionierte Element an seiner ursprünglichen Position herausragen, prüft der Browser die Ausweichoptionen nacheinander. Die erste Option, bei der das Element nicht aus seinem umschließenden Block herausragt, wird angewendet. Standardmäßig prüft der Browser die Optionen in der Reihenfolge, in der sie in der Liste stehen.

Findet sich keine Option, mit der das positionierte Element vollständig auf dem Bildschirm angezeigt werden kann, zeigt der Browser es wieder an seiner Standardposition an, bevor Ausweichoptionen angewendet wurden.

> [!NOTE]
> In manchen Situationen möchten Sie möglicherweise positionierte Elemente ausblenden, die über den Rand hinausragen. Dies ist mit der Eigenschaft {{cssxref("position-visibility")}} möglich. In den meisten Fällen ist es jedoch besser, sie auf dem Bildschirm und damit nutzbar zu halten.

Die Eigenschaft `position-try-fallbacks` kann zusammen mit der Eigenschaft {{cssxref("position-try-order")}} auch über die Kurzschreibweise {{cssxref("position-try")}} festgelegt werden.

Ausführliche Informationen zu Ankerfunktionen und zur Verwendung alternativer Positionierungsoptionen finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei überstehenden Elementen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding).

### Vordefinierte &lt;try-tactic&gt;-Werte

Die in der Spezifikation als `<try-tactic>` bezeichneten vordefinierten Werte verschieben das positionierte Element, indem sie seine berechnete Position entlang einer bestimmten Achse des Ankers transformieren. Die vordefinierten Werte sind:

- `flip-block`
  - : Spiegelt die Position des Elements entlang der Blockachse, sodass es im gleichen Abstand vom Anker, aber auf dessen gegenüberliegender Seite erscheint. Anders ausgedrückt wird die Position des Elements an einer Inline-Achse gespiegelt, die durch die Mitte des Ankers verläuft. Wenn das positionierte Element beispielsweise oberhalb des Ankers über den Rand hinausragt, wird es mit diesem Wert nach unten versetzt.
- `flip-inline`
  - : Spiegelt die Position des Elements entlang der Inline-Achse, sodass es im gleichen Abstand vom Anker, aber auf dessen gegenüberliegender Seite erscheint. Anders ausgedrückt wird die Position des Elements an einer Blockachse gespiegelt, die durch die Mitte des Ankers verläuft. Wenn das positionierte Element beispielsweise links vom Anker über den Rand hinausragt, wird es mit diesem Wert nach rechts versetzt.
- `flip-start`
  - : Spiegelt die Position des Elements an einer Achse, die diagonal durch die Mitte des Ankers verläuft: vom Schnittpunkt der Anfänge der Block- und Inline-Achse zum Schnittpunkt ihrer Enden. Wenn das positionierte Element beispielsweise links vom Anker über den Rand hinausragt, wird es mit diesem Wert oberhalb des Ankers platziert.

### Kombinierte Optionen

Eine einzelne alternative Positionierungsoption kann mehrere `<try-tactic>`- oder `dashed-ident`-Werte oder eine Kombination aus beiden enthalten. Dazu werden sie als eine durch Leerzeichen getrennte Option angegeben:

- Bei mehreren vordefinierten `<try-tactic>`-Werten werden ihre Transformationen miteinander kombiniert.
- Wenn ein vordefinierter `<try-tactic>`-Wert zusammen mit einer über `<dashed-ident>` benannten `@position-try`-Option angegeben wird, wird zuerst die benutzerdefinierte Positionierungsoption und anschließend die `<try-tactic>`-Transformation angewendet.

`position-area`-Werte lassen sich nicht auf diese Weise kombinieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung von zwei vordefinierten `<try-tactic>`-Ausweichoptionen.

#### HTML

Das HTML enthält zwei {{htmlelement("div")}}-Elemente, die als Anker und als an diesem Anker positioniertes Element dienen:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

Wir gestalten das `<body>`-Element sehr groß, damit sowohl horizontal als auch vertikal gescrollt werden kann.

Der Anker erhält einen {{cssxref("anchor-name")}} und große Außenabstände, damit er ungefähr in der Mitte des sichtbaren Bereichs des `<body>` liegt:

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

Die Infobox erhält eine feste Positionierung und eine {{cssxref("position-anchor")}}-Eigenschaft, die auf den `anchor-name` des Ankers verweist und so die beiden Elemente miteinander verknüpft. Mit `position-area` wird sie an der oberen linken Ecke des Ankers ausgerichtet.

Wir geben eine `position-try-fallbacks`-Liste an und deklarieren sie zusätzlich mit der Kurzschreibweise `position-try`, falls die Langform noch nicht unterstützt wird. Die Liste enthält zwei vordefinierte Ausweichoptionen, die verhindern, dass die Infobox über den Rand hinausragt, wenn sich der Anker dem Rand des Viewports nähert: Die Position wird dazu entlang der Inline- oder Blockachse des Ankers gespiegelt.

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

Das ergibt folgendes Ergebnis:

{{ EmbedLiveSample("basic_usage", "100%", "250") }}

Scrollen Sie so, dass sich der Anker den Rändern nähert:

- Wenn sich der Anker dem oberen Rand des Viewports nähert, wird das positionierte Element links unterhalb des Ankers angezeigt, damit es nicht über den Rand hinausragt.
- Wenn sich der Anker dem linken Rand des Viewports nähert, wird das positionierte Element rechts oberhalb des Ankers angezeigt, damit es nicht über den Rand hinausragt.

Je nach Browser kann das positionierte Element an der Ausweichposition verbleiben, auch wenn diese nicht mehr nötig ist – beispielsweise wenn wieder genügend Platz vorhanden ist, um zu der durch {{cssxref("position-area")}} definierten Position zurückzukehren.

Wenn Sie den Anker jedoch in Richtung der oberen linken Ecke des Viewports bewegen, fällt ein Problem auf: Sobald das positionierte Element sowohl in Block- als auch in Inline-Richtung über den Rand hinauszuragen beginnt, springt es an seine ursprüngliche Position links oben zurück und ragt in beide Richtungen über den Rand hinaus. Das ist nicht das gewünschte Verhalten.

Der Grund ist, dass wir dem Browser nur `flip-block` _oder_ `flip-inline` als Positionierungsoptionen gegeben haben, nicht aber die Möglichkeit, beide gleichzeitig anzuwenden. Das nächste Beispiel zeigt, wie sich dieses Problem beheben lässt.

### Mehrere Werte in einer Option kombinieren

Mit einer kombinierten Ausweichoption beheben wir das Problem aus dem vorherigen Beispiel.

#### HTML und CSS

HTML und CSS sind in diesem Beispiel unverändert, mit Ausnahme des Codes für das positionierte Element. Dieses erhält hier eine dritte alternative Positionierungsoption: `flip-block flip-inline`.

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

Durch die dritte Ausweichoption versucht der Browser zunächst, ein Überragen mit `flip-block` und dann mit `flip-inline` zu vermeiden. Reicht keine der beiden Optionen allein aus, kombiniert er sie und spiegelt die Position des Elements gleichzeitig in Block- und Inline-Richtung. Wenn Sie den Anker nun zum oberen _und_ linken Rand des Viewports scrollen, wird das positionierte Element rechts unterhalb des Ankers angezeigt.

### `position-area`-Ausweichoptionen

Dieses Beispiel zeigt die Wirkung einiger `position-area`-Werte als alternative Positionierungsoptionen.

#### HTML und CSS

HTML und CSS sind in diesem Beispiel unverändert, mit Ausnahme des Codes für das positionierte Element. Hier bestehen alle Ausweichoptionen aus `position-area`-Werten: `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left` und `left`.

So findet das positionierte Element eine geeignete Anzeigeposition, unabhängig davon, welchen Rändern des Viewports sich der Anker nähert. Dieser Ansatz ist etwas ausführlicher als die Verwendung vordefinierter Werte, bietet aber auch eine feinere Steuerung und mehr Flexibilität.

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

Scrollen Sie durch die Seite und beobachten Sie, wie sich die Ausweichoptionen auswirken, wenn sich der Anker dem Rand des Viewports nähert.

### Beispiele für benutzerdefinierte Ausweichoptionen

Siehe die Referenzseite zu {{cssxref("@position-try")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}}-At-Regel
- {{cssxref("position-area")}}
- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert
- Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei überstehenden Elementen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
