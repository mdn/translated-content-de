---
title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-box`**-[CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht. Diese spezifizieren zusammen den Abstand, der vom Blockanfang und Blockende eines Textelements innerhalb seines Blockcontainers entfernt werden soll.

## Bestandteile

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

Der `text-box` Wert kann aus einem {{cssxref("text-box-trim")}} Wert und einem {{cssxref("text-box-edge")}} Wert bestehen, die durch ein Leerzeichen getrennt sind. Siehe diese Seiten für eine Beschreibung der Werte.

Die `text-box` Eigenschaft kann auch das Schlüsselwort `normal` annehmen, was gleichbedeutend mit `text-box: none auto;` ist.

Wenn `text-box-trim` ausgelassen wird, ist es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, ist es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von ausschließlich Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundzeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Höhen von Zeilenkästen unterschiedlicher Höhe erzeugen, die das Erscheinungsbild des Abstands zwischen den Zeilen beeinflussen.

Die `text-box`-Eigenschaften ermöglichen das Abschneiden von zusätzlichem Abstand vom Blockanfang und Blockende eines Textelements im Blockcontainer, was den {{Glossary("leading", "Durchschuss")}} am Anfängs- und Endrand des Textes und den Abständen, die innerhalb der Schriftart definiert sind (wie oben beschrieben), einschließen kann. Dies erleichtert die Kontrolle des Textabstands in Blockrichtung erheblich.

## Beispiele

### Grundlegende Verwendung von `text-box`

Im folgenden Beispiel haben wir zwei `<p>` Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box` Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `cap alphabetic` spezifiziert das Abschneiden des oberen Randes bis zur Oberkante der Großbuchstaben und den unteren Rand bündig mit der Grundlinie des Textes. Da der {{cssxref("text-box-trim")}} Wert auf `trim-end` gesetzt ist, wird nur der untere Rand des Absatzes abgeschnitten.

Wir wenden einen `text-box` Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}} Wert von `ex alphabetic` gibt das Abschneiden des oberen Randes bis zur X-Höhe der Schrift (die Oberkante der kurzen Kleinbuchstaben) und den unteren Rand bündig mit der Grundlinie des Textes an. Da der {{cssxref("text-box-trim")}} Wert auf `trim-both` gesetzt ist, werden sowohl der obere _als auch_ der untere Rand des Absatzes abgeschnitten.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir auf jeden Absatz eine obere und untere Begrenzungslinie hinzugefügt haben, damit Sie sehen können, wie der Platz in jedem Fall abgeschnitten wurde.

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
