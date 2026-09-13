---
title: "`text-box` CSS-Eigenschaft"
short-title: text-box
slug: Web/CSS/Reference/Properties/text-box
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`text-box`** [CSS](/de/docs/Web/CSS) [Kurznotation](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) entspricht den Eigenschaften {{cssxref("text-box-trim")}} und {{cssxref("text-box-edge")}}, die zusammen den Raum angeben, der an der Block-Anfangskante und der Block-Endkante eines Textelement-Blockcontainers beschnitten werden soll.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurznotation für die folgenden CSS-Eigenschaften:

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

Die `text-box`-Eigenschaft kann auch ein Schlüsselwort `normal` annehmen, was gleichbedeutend mit `text-box: none auto;` ist.

Wenn `text-box-trim` weggelassen wird, wird es auf `trim-both` gesetzt. Wenn `text-box-edge` weggelassen wird, wird es auf `auto` gesetzt.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beschreibung

Die Höhe von ausschließlich Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Ober- und Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhe erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die `text-box`-Eigenschaften ermöglichen das Abschneiden von zusätzlichem Raum von der Block-Anfangskante und der Block-Endkante eines Textelement-Blockcontainers, was die {{Glossary("leading", "Durchschuss")}} an den Block-Anfangs- und Block-Endkanten des Textes einschließen kann, sowie den in der Schriftart definierten Abstand (wie oben beschrieben). Dies macht es viel einfacher, den Textabstand in der Blockrichtung zu steuern.

## Beispiele

### Grundlegender `text-box`-Einsatz

Im folgenden Beispiel haben wir zwei `<p>`-Elemente mit den Klassen `one` und `two`.

Wir wenden einen `text-box`-Wert von `trim-end cap alphabetic` auf den ersten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `cap alphabetic` gibt an, dass die obere Kante bis zur Oberseite der Großbuchstaben und die untere Kante bündig mit der Textbasislinie getrimmt wird. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-end` gesetzt ist, wird nur die untere Kante des Absatzes getrimmt.

Wir wenden einen `text-box`-Wert von `trim-both ex alphabetic` auf den zweiten Absatz an. Der {{cssxref("text-box-edge")}}-Wert von `ex alphabetic` gibt an, dass die obere Kante bis zur x-Höhe der Schrift (die Oberkante der kurzen Kleinbuchstaben) und die untere Kante bündig mit der Textbasislinie getrimmt wird. Da der {{cssxref("text-box-trim")}}-Wert auf `trim-both` gesetzt ist, werden sowohl die obere _als auch_ die untere Kante des Absatzes getrimmt.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir oben und unten einen Rahmen bei jedem Absatz eingefügt haben, damit Sie sehen können, wie der Raum in jedem Fall beschnitten wurde.

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
