---
title: text-box-edge
slug: Web/CSS/text-box-edge
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{CSSRef}}

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie viel Platz von einem Blockcontainer eines Textelements abgeschnitten werden soll.

Der vertikale Abstand variiert zwischen verschiedenen Schriftarten, was die konsistente Typografie im Web historisch gesehen herausfordernd gemacht hat. Die `text-box-edge`-Eigenschaft — zusammen mit ihrer Gegenstückeigenschaft {{cssxref("text-box-trim")}}, die bestimmt, von welchem(n) Rand/Rändern Platz abgeschnitten werden soll — erleichtert das Erreichen einer konsistenten Typografie. Die `text-box-edge`-Eigenschaft hat keine Wirkung, wenn `text-box-trim` nicht gesetzt oder auf `none` eingestellt ist.

> [!NOTE]
> Die Verkürzungs-Eigenschaft {{cssxref("text-box")}} kann verwendet werden, um die Werte für `text-box-edge` und `text-box-trim` in einer einzigen Deklaration festzulegen.

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

Der Wert der `text-box-edge`-Eigenschaft wird als `auto` oder ein {{cssxref("&lt;text-edge&gt;")}}-Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge`-Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die oberen und unteren Randpositionen zum Trim des Blockcontainers des Textelements repräsentieren.
    - Wenn zwei Werte angegeben werden, gibt der erste Wert das Trimmverhalten an, das auf den Block-Start (oben) Rand des Textes angewendet wird, und der zweite Wert gibt das Trimmverhalten an, das auf den Block-Ende (unten) Rand des Textes angewendet wird.
      - Gültige obere Rand-Trimmwerte: `text`, `cap` und `ex`.
      - Gültige untere Rand-Trimmwerte: `text` und `alphabetic`.
    - Wenn ein Wert angegeben wird, spezifiziert er das obere _und_ untere Rand-Trimmverhalten. Zum Zeitpunkt des Schreibens ist der einzige gültige Einzelwert `text`.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` unterschiedliche Zeilenhöhen erzeugen und somit das Erscheinungsbild des Abstands zwischen Zeilen beeinflussen.

Die `text-box-edge`-Eigenschaft ermöglicht es Ihnen, Platz vom Start- und/oder Endrand des Textblockcontainers abzuschneiden. Dies kann das {{Glossary("leading", "Lead")}} am Block-Start-Rand und Block-Ende-Rändern des Textes sowie den im Font definierten Abstand (wie oben beschrieben) umfassen. Dies geschieht durch Angabe eines {{cssxref("&lt;text-edge&gt;")}}-Wertes, der den oberen und unteren Rand angibt, um den abzuschneidenden Raum zu bestimmen.

Welche Rand/Ränder abgeschnitten werden sollen, wird mit der {{cssxref("text-box-trim")}}-Eigenschaft angegeben. Zum Beispiel können Sie wählen, Platz vom oberen Rand oder vom unteren Rand des Textblockcontainers oder von beiden abzuschneiden.

Diese Eigenschaften machen es viel einfacher, den Textabstand in Blockrichtung zu steuern.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die häufigsten `text-box-edge`-Werte, die Sie für horizontale {{cssxref("writing-mode")}}-Sprachen wie Englisch oder Arabisch verwenden, sind `cap alphabetic` und `ex alphabetic`. Der `cap`-Wert trimmt den oberen Rand des Textelements zu den oberen Rändern der Großbuchstaben, während `ex` den oberen Rand auf die x-Höhe der Schrift (die obere Kante der kurzen Kleinbuchstaben) zuschneidet. In jedem Fall schneidet `alphabetic` den unteren Rand bündig mit der Textbasislinie ab.

In diesem Beispiel zeigen wir die Wirkung dieser beiden allgemeinen Werte auf zwei {{htmlelement("p")}}-Elemente. Zusätzlich wurde bei beiden ein {{cssxref("text-box-trim")}}-Wert von `trim-both` gesetzt, sodass ihre Start- _und_ Endränder getrimmt werden.

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

Das Ergebnis sieht wie folgt aus. Beachten Sie, dass wir oben und unten einen Rahmen um jeden Absatz eingefügt haben, damit Sie sehen können, wie der Platz in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktiver Vergleich der `text-box-edge`-Werte

Für ein vollständiges interaktives `text-box-edge`-Beispiel siehe die [`text-box-trim` Seite](/de/docs/Web/CSS/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
