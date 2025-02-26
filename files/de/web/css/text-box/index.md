---
title: text-box
slug: Web/CSS/text-box
l10n:
  sourceCommit: c037c6870bb89d81ccd9204809b06c92677c3a9a
---

{{CSSRef}}{{seecompattable}}

Die **`text-box`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht. Diese Eigenschaften geben zusammen den Raum an, der von der Block-Startkante und der Block-Endkante eines Text-Elements in dessen Block-Container beschnitten werden soll.

## Bestandteileigenschaften

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

Der `text-box` Wert kann aus einem {{cssxref("text-box-trim")}} Wert und einem {{cssxref("text-box-edge")}} Wert bestehen, die durch ein Leerzeichen getrennt sind. Siehe die jeweiligen Seiten für die Wertbeschreibung.

Die `text-box` Eigenschaft kann auch ein Schlüsselwort `normal` annehmen, was gleichbedeutend ist mit `text-box: none auto;`

Wenn `text-box-trim` weggelassen wird, wird es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, wird es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriftarten haben unterschiedliche Grundzeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Linienboxen unterschiedlicher Höhen erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Mit den {{cssxref("text-box")}} Eigenschaften kann der zusätzliche Abstand von der Block-Startkante und der Block-Endkante eines Block-Containers eines Text-Elements beschnitten werden, welcher das {{Glossary("leading", "leading")}} an der Block-Startkante und Block-Endkante des Textes und den innerhalb der Schriftart definierten Abstand (wie oben beschrieben) beinhalten kann. Dies erleichtert die Kontrolle des Textabstands in der Blockrichtung erheblich.

## Beispiele

### Grundlegende `text-box` Verwendung

Im folgenden Beispiel haben wir zwei `<p>` Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box` Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `cap alphabetic` gibt an, dass der obere Rand bis zur Oberseite der Großbuchstaben und der untere Rand bündig mit der Textgrundlinie beschnitten wird. Da der {{cssxref("text-box-trim")}} Wert auf `trim-end` gesetzt ist, wird nur der untere Rand des Absatzes beschnitten.

Wir wenden einen `text-box` Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `ex alphabetic` gibt an, dass der obere Rand bis zur x-Höhe der Schrift (die Oberkante der kleinen Buchstaben) und der untere Rand bündig mit der Textgrundlinie beschnitten wird. Da der {{cssxref("text-box-trim")}} Wert auf `trim-both` gesetzt ist, werden sowohl der obere _als auch_ der untere Rand des Absatzes beschnitten.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir jedem Absatz einen oberen und unteren Rand hinzugefügt haben, so dass Sie sehen können, wie der Raum in jedem Fall beschnitten wurde.

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
