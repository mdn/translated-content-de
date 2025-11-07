---
title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-box`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht, welche zusammen die Menge an Platz angeben, die vom Blockanfang und Blockende eines Blockcontainers eines Textelements abgeschnitten werden soll.

## Bestandteil Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Der `text-box` Wert kann aus einem {{cssxref("text-box-trim")}} Wert und einem {{cssxref("text-box-edge")}} Wert, getrennt durch ein Leerzeichen, bestehen. Siehe diese Seiten für Wertbeschreibungen.

Die `text-box` Eigenschaft kann auch das Schlüsselwort `normal` annehmen, was gleichbedeutend ist mit `text-box: none auto;`

Wenn `text-box-trim` ausgelassen wird, ist es auf `trim-both` gesetzt. Wenn `text-box-edge` ausgelassen wird, ist es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von textbezogenem Inhalt bezieht sich auf die Höhe der Schriftart. In digitalen Schriftart-Dateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Ober- und Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhen erzeugen, die das Erscheinungsbild des Abstands zwischen den Zeilen beeinflussen.

Die `text-box` Eigenschaften ermöglichen das Abschneiden von zusätzlichem Platz am Blockanfang und Blockende eines Blockcontainers eines Textelements, was das {{Glossary("leading", "führende")}} am Blockanfang und Blockende des Textes und den innerhalb der Schriftart definierten Abstand (wie oben beschrieben) umfassen kann. Dies erleichtert die Steuerung des Textabstands in Blockrichtung erheblich.

## Beispiele

### Grundlegende Nutzung von `text-box`

Im folgenden Beispiel haben wir zwei `<p>` Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box` Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `cap alphabetic` gibt an, dass der obere Rand an den oberen Rand der Großbuchstaben und der untere Rand bündig mit der Textgrundlinie abgeschnitten wird. Da der {{cssxref("text-box-trim")}} Wert auf `trim-end` gesetzt ist, wird nur der untere Rand des Absatzes abgeschnitten.

Wir wenden einen `text-box` Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `ex alphabetic` gibt an, dass der obere Rand auf die x-Höhe der Schriftart (den oberen Rand der kurzen Kleinbuchstaben) und der untere Rand bündig mit der Textgrundlinie abgeschnitten wird. Da der {{cssxref("text-box-trim")}} Wert auf `trim-both` gesetzt ist, werden sowohl der obere _als auch_ der untere Rand des Absatzes abgeschnitten.

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

Das Ergebnis ist wie folgt. Beachten Sie, dass wir oben und unten an jedem Absatz einen Rand eingefügt haben, damit Sie sehen können, wie der Platz in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box` usage","100%","360")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
