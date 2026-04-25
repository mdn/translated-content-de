---
title: "`text-box` CSS-Eigenschaft"
short-title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-box`** [CSS](/de/docs/Web/CSS)-Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht. Diese Eigenschaften legen zusammen fest, wie viel Platz von der block-start Kante und block-end Kante eines Textelements im Blockcontainer abgeschnitten werden soll.

## Bestandteil-Eigenschaften

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

Der `text-box` Wert kann aus einem {{cssxref("text-box-trim")}} Wert und einem {{cssxref("text-box-edge")}} Wert bestehen, die durch ein Leerzeichen getrennt sind. Siehe diese Seiten für Wertbeschreibungen.

Die `text-box` Eigenschaft kann auch das Schlüsselwort `normal` annehmen, das gleichbedeutend mit `text-box: none auto;` ist.

Wenn `text-box-trim` weggelassen wird, wird es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, wird es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöheneinstellungen, was bedeutet, dass Textzeilen mit der gleichen `font-size` unterschiedliche Zeilenhöhen erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die `text-box`-Eigenschaften ermöglichen es, zusätzlichen Abstand von der block-start Kante und block-end Kante eines Textelements im Blockcontainer abzuschneiden, was den {{Glossary("leading", "Durchschuss")}} an den block-start und block-end Kanten des Textes sowie den innerhalb der Schrift festgelegten Abstand einschließen kann (wie oben beschrieben). Dies erleichtert die Steuerung des Textabstands in der Blockrichtung erheblich.

## Beispiele

### Grundlegende Verwendung von `text-box`

Im folgenden Beispiel haben wir zwei `<p>` Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box` Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}} Wert `cap alphabetic` gibt an, dass die obere Kante auf die Oberkante der Großbuchstaben und die untere Kante bündig mit der Textgrundlinie getrimmt wird. Da der {{cssxref("text-box-trim")}} Wert auf `trim-end` gesetzt ist, wird nur die untere Kante des Absatzes getrimmt.

Wir wenden einen `text-box` Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}} Wert `ex alphabetic` gibt an, dass die obere Kante auf die x-Höhe der Schrift (die Oberkante der kurzen Kleinbuchstaben) getrimmt wird und die untere Kante bündig mit der Textgrundlinie verläuft. Da der {{cssxref("text-box-trim")}} Wert auf `trim-both` gesetzt ist, werden sowohl die obere _als auch_ die untere Kante des Absatzes getrimmt.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass wir an jedem Absatz eine obere und untere Umrandung hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box`","100%","360")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
