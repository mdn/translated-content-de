---
title: text-box
slug: Web/CSS/text-box
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{CSSRef}}

Die **`text-box`** [CSS](/de/docs/Web/CSS) Eigenschaft ist eine Kurzform, die den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}} entspricht, die zusammen die Menge des Raums angeben, der von der Blockstartkante und der Blockendkante des Blockcontainers eines Textelements abgeschnitten werden soll.

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

Der `text-box`-Wert kann aus einem {{cssxref("text-box-trim")}}-Wert und einem {{cssxref("text-box-edge")}}-Wert bestehen, die durch ein Leerzeichen getrennt sind. Siehe diese Seiten für Wertbeschreibungen.

Die `text-box`-Eigenschaft kann auch ein Schlüsselwort `normal` annehmen, das `text-box: none auto;` entspricht.

Wenn `text-box-trim` weggelassen wird, wird es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, wird es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenboxen mit unterschiedlicher Höhe erzeugen, was das Erscheinungsbild des Abstands zwischen Zeilen beeinflusst.

Die {{cssxref("text-box")}}-Eigenschaften ermöglichen das Abschneiden von zusätzlichem Abstand von der Blockstartkante und der Blockendkante des Blockcontainers eines Textelements, was den {{Glossary("leading", "Durchschuss")}} an der Blockstartkante und der Blockendkante des Texts und dem innerhalb der Schriftart definierten Abstand (wie oben beschrieben) einschließen kann. Dadurch wird es viel einfacher, den Textabstand in der Blockrichtung zu steuern.

## Beispiele

### Grundlegende Verwendung von `text-box`

Im folgenden Beispiel haben wir zwei `<p>`-Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box`-Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `cap alphabetic` gibt an, dass die obere Kante bis zur Oberkante der Großbuchstaben und die untere Kante bündig mit der Textbasislinie getrimmt werden soll. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-end` gesetzt ist, wird nur die untere Kante des Absatzes getrimmt.

Wir wenden einen `text-box`-Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `ex alphabetic` gibt an, dass die obere Kante bis zur x-Höhe der Schriftart (der oberen Kante der kurzen Kleinbuchstaben) und die untere Kante bündig mit der Textbasislinie getrimmt werden soll. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-both` gesetzt ist, werden sowohl die obere _als auch_ die untere Kante des Absatzes getrimmt.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir oben und unten eine Grenze auf jedem Absatz eingefügt haben, damit Sie sehen können, wie der Raum in jedem Fall getrimmt wurde.

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
