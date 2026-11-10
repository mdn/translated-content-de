---
title: CSS-Eigenschaft `text-box`
short-title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`text-box`** fasst die Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} zusammen. Gemeinsam legen sie fest, wie viel Platz am Blockanfang und Blockende des Block-Containers eines Textelements entfernt wird.

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("text-box-trim")}}
- {{cssxref("text-box-edge")}}

## Syntax

```css
/* Single keyword */
text-box: normal;

/* One text-box-edge keyword */
text-box: trim-start text;
text-box: trim-both text;

/* Two text-box-edge keywords */
text-box: trim-start cap alphabetic;
text-box: trim-both ex text;

/* Global values */
text-box: inherit;
text-box: initial;
text-box: revert;
text-box: revert-layer;
text-box: unset;
```

### Werte

Der Wert von `text-box` kann aus einem Wert für {{cssxref("text-box-trim")}} und einem Wert für {{cssxref("text-box-edge")}} bestehen, die durch ein Leerzeichen getrennt sind. Beschreibungen der Werte finden Sie auf den jeweiligen Seiten.

Die Eigenschaft `text-box` kann auch den Schlüsselwortwert `normal` annehmen. Dieser entspricht `text-box: none auto;`.

Wenn `text-box-trim` weggelassen wird, wird es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, wird es auf `auto` gesetzt.

## Beschreibung

Die Höhe von reinem Textinhalt hängt von der Höhe der Schriftart ab. In digitalen Schriftdateien berücksichtigt die Höhe alle Zeichen, einschließlich Großbuchstaben sowie Zeichen mit Ober- und Unterlängen. Verschiedene Schriftarten haben unterschiedliche grundlegende Zeilenhöhen. Daher erzeugen Textzeilen mit derselben `font-size` unterschiedlich hohe Zeilenboxen, was sich auf die Abstände zwischen den Zeilen auswirkt.

Mit den `text-box`-Eigenschaften lässt sich zusätzlicher Platz am Blockanfang und Blockende des Block-Containers eines Textelements entfernen. Dazu können der {{Glossary("leading", "Zeilendurchschuss")}} an diesen Kanten und die innerhalb der Schriftart definierten Abstände gehören (wie oben beschrieben). Dadurch lassen sich Textabstände in Blockrichtung wesentlich einfacher steuern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box`

Im folgenden Beispiel gibt es zwei `<p>`-Elemente mit den Klassen `one` und `two`.

Auf den ersten Absatz wenden wir den `text-box`-Wert `trim-end cap alphabetic` an. Der Wert `cap alphabetic` für {{cssxref("text-box-edge")}} legt fest, dass die obere Kante bis zur Oberkante der Großbuchstaben und die untere Kante bündig mit der Textgrundlinie zugeschnitten wird. Da der Wert für {{cssxref("text-box-trim")}} auf `trim-end` gesetzt ist, wird nur die untere Kante des Absatzes zugeschnitten.

Auf den zweiten Absatz wenden wir den `text-box`-Wert `trim-both ex alphabetic` an. Der Wert `ex alphabetic` für {{cssxref("text-box-edge")}} legt fest, dass die obere Kante bis zur x-Höhe der Schriftart (der Oberkante kleiner Kleinbuchstaben) und die untere Kante bündig mit der Textgrundlinie zugeschnitten wird. Da der Wert für {{cssxref("text-box-trim")}} auf `trim-both` gesetzt ist, werden sowohl die obere _als auch_ die untere Kante des Absatzes zugeschnitten.

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
.one {
  text-box: trim-end cap alphabetic;
}

.two {
  text-box: trim-both ex alphabetic;
}

p {
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass jeder Absatz einen oberen und einen unteren Rahmen hat. So können Sie erkennen, wie der Platz jeweils zugeschnitten wurde.

{{EmbedLiveSample("Basic `text-box` usage","100%","360")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- Datentyp {{cssxref("&lt;text-edge&gt;")}}
- Modul [CSS inline layout](/de/docs/Web/CSS/Guides/Inline_layout)
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
