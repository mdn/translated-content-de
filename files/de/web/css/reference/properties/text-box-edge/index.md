---
title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie viel Platz von einem Block-Container eines Textelements abgeschnitten werden soll.

Der vertikale Abstand variiert zwischen den Schriften, was die konsistente Satzgestaltung im Web historisch herausfordernd machte. Die `text-box-edge` Eigenschaft - zusammen mit ihrer Gegenstückeigenschaft {{cssxref("text-box-trim")}}, die angibt, von welchen Rändern der Platz abgeschnitten werden soll - erleichtert es, konsistente Satzgestaltung zu erreichen. Die `text-box-edge` Eigenschaft hat keine Wirkung, wenn `text-box-trim` nicht gesetzt ist oder auf `none` gesetzt ist.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die Werte für `text-box-edge` und `text-box-trim` in einer einzigen Deklaration anzugeben.

## Syntax

```css
/* Single keyword */
text-box-edge: auto;
text-box-edge: text;

/* Two <text-edge> values */
text-box-edge: text text;
text-box-edge: text alphabetic;
text-box-edge: cap alphabetic;
text-box-edge: ex text;

/* Global values */
text-box-edge: inherit;
text-box-edge: initial;
text-box-edge: revert;
text-box-edge: revert-layer;
text-box-edge: unset;
```

### Wert

Der Wert der `text-box-edge` Eigenschaft wird als `auto` oder als {{cssxref("&lt;text-edge&gt;")}} Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge` Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die über- und unterliegenden Randpositionen darstellen, um den Block-Container des Textelements zuzuschneiden.
    - Wenn zwei Werte angegeben sind, gibt der erste Wert das Zuschneideverhalten für den block-start (oben) Rand des Textes an, und der zweite Wert gibt das Zuschneideverhalten für den block-end (unten) Rand des Textes an.
      - Gültige Zuschneidewerte für den oberen Rand: `text`, `cap` und `ex`.
      - Gültige Zuschneidewerte für den unteren Rand: `text` und `alphabetic`.
    - Wenn ein Wert angegeben ist, bestimmt dieser das Zuschneideverhalten für sowohl oberen _als auch_ unteren Rand. Zum Zeitpunkt der Erstellung ist der einzige gültige Einzelwert `text`.

## Beschreibung

Die Höhe von ausschließlich textbasierten Inhalten ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit der gleichen `font-size` Linienboxen mit unterschiedlichen Höhen erzeugen, was das Erscheinungsbild der Abstände zwischen den Zeilen beeinflusst.

Die `text-box-edge` Eigenschaft ermöglicht es Ihnen, Platz vom Anfangs- und/oder Endrand des Block-Containers des Textes abzuschneiden. Dies kann den {{Glossary("leading", "Durchschuss")}} am block-start und block-end Rand des Textes und den innerhalb der Schrift definierten Abstand (wie oben beschrieben) umfassen. Dies geschieht durch Angabe eines {{cssxref("&lt;text-edge&gt;")}} Werts, der den oberen und unteren Rand angibt, zu dem der Raum zugeschnitten werden soll.

Welche Ränder der Platz abgeschnitten werden soll, wird durch die {{cssxref("text-box-trim")}} Eigenschaft festgelegt. Beispielsweise können Sie wählen, Platz vom oberen oder unteren Rand des Block-Containers des Textes oder von beiden abzuschneiden.

Diese Eigenschaften erleichtern es erheblich, den Textabstand in der Blockrichtung zu kontrollieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die häufigsten `text-box-edge` Werte, die Sie für horizontale {{cssxref("writing-mode")}} Sprachen wie Englisch oder Arabisch verwenden, sind `cap alphabetic` und `ex alphabetic`. Der `cap` Wert schneidet den oberen Rand des Block-Containers des Textelements bis zur Oberseite der Großbuchstaben ab, während `ex` den oberen Rand bis zur x-Höhe der Schrift zuschneidet (die obere Kante der kurzen Kleinbuchstaben). In jedem Fall schneidet `alphabetic` den unteren Rand bündig mit der Textgrundlinie ab.

In diesem Beispiel zeigen wir die Wirkung beider dieser häufigen Werte an zwei {{htmlelement("p")}} Elementen. Zusätzlich wurde ein {{cssxref("text-box-trim")}} Wert von `trim-both` auf beide gesetzt, so dass ihre Anfangs- _und_ Endränder abgeschnitten sind.

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
p {
  text-box-trim: trim-both;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-edge: cap alphabetic;
}

.two {
  text-box-edge: ex alphabetic;
}
```

#### Ergebnis

Die Ausgabe ist wie folgt. Beachten Sie, dass wir oben und unten einen Rand bei jedem Absatz eingefügt haben, damit Sie sehen können, wie der Platz in jedem Fall zugeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-edge` Wertvergleich

Für ein vollständiges interaktives `text-box-edge` Beispiel, siehe die [`text-box-trim` Seite](/de/docs/Web/CSS/Reference/Properties/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
