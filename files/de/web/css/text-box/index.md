---
title: text-box
slug: Web/CSS/text-box
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-box`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht. Diese geben zusammen an, wie viel Platz am Anfang und Ende des Blockcontainers eines Textelements entfernt werden soll.

## Zusammengesetzte Eigenschaften

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

Der `text-box`-Wert kann aus einem Wert von {{cssxref("text-box-trim")}} und einem Wert von {{cssxref("text-box-edge")}} bestehen, getrennt durch ein Leerzeichen. Siehe die entsprechenden Seiten für die Wertbeschreibungen.

Die `text-box`-Eigenschaft kann auch das Schlüsselwort `normal` annehmen, was `text-box: none auto;` entspricht.

Wenn `text-box-trim` weggelassen wird, ist es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, ist es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von nur Text-Inhalt ist relativ zur Höhe der Schrift. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriften haben unterschiedliche Basis-Linienhöhen, was bedeutet, dass Zeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhe erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die `text-box`-Eigenschaften ermöglichen es, zusätzlichen Abstand am Anfang und am Ende des Blockcontainers eines Textelements zu entfernen. Dies kann das {{Glossary("leading", "Durchschuss")}} am Anfang und Ende des Blocks sowie den in der Schrift definierten Abstand umfassen (wie oben beschrieben). Dies macht es viel einfacher, den Textabstand in Blockrichtung zu kontrollieren.

## Beispiele

### Grundlegende Verwendung von `text-box`

Im folgenden Beispiel haben wir zwei `<p>` Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box`-Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `cap alphabetic` gibt an, dass die obere Kante auf der Höhe der Großbuchstaben geschnitten und die untere Kante mit der Textbasislinie bündig ist. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-end` gesetzt ist, wird nur die untere Kante des Absatzes geschnitten.

Wir wenden einen `text-box`-Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `ex alphabetic` gibt an, dass die obere Kante auf der x-Höhe der Schrift (der oberen Kante der kurzen Kleinbuchstaben) geschnitten und die untere Kante mit der Textbasislinie bündig ist. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-both` gesetzt ist, werden sowohl die obere _als auch_ die untere Kante des Absatzes geschnitten.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir einen oberen und unteren Rand auf jedem Absatz hinzugefügt haben, sodass Sie sehen können, wie der Abstand in jedem Fall angepasst wurde.

{{EmbedLiveSample("Basic `text-box` usage","100%","360")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
