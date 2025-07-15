---
title: text-box-edge
slug: Web/CSS/text-box-edge
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, um welchen Betrag ein Abschnitt von einem Text-Element's Blockcontainer abgeschnitten werden soll.

Die vertikale Abstandsregelung variiert zwischen Schriftarten, was konsistentes Setzen von Text im Web historisch herausfordernd machte. Die `text-box-edge` Eigenschaft — zusammen mit der dazugehörigen Eigenschaft {{cssxref("text-box-trim")}}, welche angibt, von welcher Kante(n) der Absatzraum abgeschnitten werden soll — erleichtert konsistentes Setzen von Text. Die `text-box-edge` Eigenschaft hat keine Wirkung, wenn `text-box-trim` nicht gesetzt oder auf `none` gesetzt ist.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzform-Eigenschaft kann verwendet werden, um die `text-box-edge` und `text-box-trim` Werte in einer einzigen Deklaration anzugeben.

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

Der Wert der `text-box-edge` Eigenschaft wird als `auto` oder ein {{cssxref("&lt;text-edge&gt;")}} Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge` Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die oberen und unteren Kantenpositionen darstellen, um den Blockcontainer des Text-Elements abzuschneiden.
    - Wenn zwei Werte angegeben werden, gibt der erste Wert das Zuschneideverhalten an, das auf die Blockstartkante (über) des Textes angewendet werden soll, und der zweite Wert gibt das Zuschneideverhalten an, das auf die Blockendkante (unter) des Textes angewendet werden soll.
      - Gültige Zuschneidewerte für die obere Kante: `text`, `cap`, und `ex`.
      - Gültige Zuschneidewerte für die untere Kante: `text` und `alphabetic`.
    - Wenn ein Wert angegeben wird, spezifiziert dieser das Zuschneideverhalten sowohl für die oberen _als auch_ unteren Kanten. Zum Zeitpunkt des Schreibens ist der einzige gültige Einzelwert `text`.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftartdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen, usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Linienkästen unterschiedlicher Höhe erzeugen, was das Aussehen der Abstände zwischen den Zeilen beeinflusst.

Die `text-box-edge` Eigenschaft ermöglicht es Ihnen, den Raum vom Anfang und/oder Ende des Blockcontainers des Textes abzuschneiden. Dies kann den {{Glossary("leading", "Vorsprung")}} an der Blockstartkante und Blockendkante des Textes sowie den im Font definierten Abstand (wie oben beschrieben) einschließen. Dies geschieht durch die Angabe eines {{cssxref("&lt;text-edge&gt;")}} Werts, der die obere und untere Kante angibt, um den Raum zu trimmen.

Welche Kante(n) zum Trimmen von Raum festgelegt wird, wird mit der Eigenschaft {{cssxref("text-box-trim")}} angegeben. Zum Beispiel können Sie wählen, Raum von der oberen Kante oder der unteren Kante oder von beiden Kanten des Blockcontainers des Textes abzuschneiden.

Diese Eigenschaften erleichtern es, die Textabstände in der Blockrichtung zu kontrollieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die häufigsten `text-box-edge` Werte, die Sie für horizontale {{cssxref("writing-mode")}} Sprachen wie Englisch oder Arabisch verwenden werden, sind `cap alphabetic` und `ex alphabetic`. Der Wert `cap` schneidet die obere Kante des Blockcontainers des Textelements auf die Oberseite der Großbuchstaben zu, während `ex` die obere Kante auf die x-Höhe der Schrift (die obere Kante der kurzen Kleinbuchstaben) zuschneidet. In jedem Fall schneidet `alphabetic` die untere Kante flach mit der Textgrundlinie zu.

In diesem Beispiel demonstrieren wir die Wirkung beider dieser allgemeinen Werte an zwei {{htmlelement("p")}} Elementen. Zusätzlich wurde ein {{cssxref("text-box-trim")}} Wert von `trim-both` auf beide festgelegt, sodass deren Start-_und_ Endkanten getrimmt sind.

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

Die Ausgabe lautet wie folgt. Beachten Sie, dass wir oben und unten an jedem Absatz einen Rand eingefügt haben, damit Sie sehen können, wie der Raum in jedem Fall getrimmt wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-edge` Wertvergleich

Für ein vollständiges interaktives `text-box-edge` Beispiel, siehe die Seite [`text-box-trim`](/de/docs/Web/CSS/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
