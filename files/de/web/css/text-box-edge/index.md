---
title: text-box-edge
slug: Web/CSS/text-box-edge
l10n:
  sourceCommit: c037c6870bb89d81ccd9204809b06c92677c3a9a
---

{{CSSRef}}{{seecompattable}}

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt einen Betrag des Raums an, der von einem Block-Container eines Textelements abgeschnitten werden soll.

Vertikaler Abstand variiert zwischen verschiedenen Schriftarten, was eine konsistente Typografie im Web historisch herausfordernd machte. Die Eigenschaft `text-box-edge` — zusammen mit ihrer Gegenparte, der Eigenschaft {{cssxref("text-box-trim")}}, die angibt, von welcher Kante Raum abgeschnitten werden soll — erleichtert das Erreichen einer konsistenten Typografie. Die Eigenschaft `text-box-edge` hat keine Wirkung, wenn `text-box-trim` nicht gesetzt ist oder auf `none` gesetzt ist.

> [!NOTE]
> Die Kurzform-Eigenschaft {{cssxref("text-box")}} kann verwendet werden, um die Werte für `text-box-edge` und `text-box-trim` in einer einzigen Deklaration anzugeben.

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

Der Wert für die Eigenschaft `text-box-edge` wird als `auto` oder ein {{cssxref("&lt;text-edge&gt;")}}-Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge`-Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die oberen und unteren Kantenpositionen darstellen, um den Block-Container des Textelements zu kürzen.
    - Wenn zwei Werte angegeben sind, gibt der erste Wert das Kürzungsverhalten an, das auf die Block-Startkante (oben) des Textes angewendet wird, und der zweite Wert gibt das Kürzungsverhalten an, das auf die Block-Endkante (unten) des Textes angewendet wird.
      - Gültige Kürzungswerte für obere Kanten: `text`, `cap` und `ex`.
      - Gültige Kürzungswerte für untere Kanten: `text` und `alphabetic`.
    - Wenn ein Wert angegeben ist, bestimmt er das Kürzungsverhalten für die oberen _und_ unteren Kanten. Zum Zeitpunkt der Erstellung ist der einzige gültige Einzelwert `text`.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundhöhe, was bedeutet, dass Zeilen von Text mit derselben `font-size` Textboxen von unterschiedlicher Höhe erzeugen, was das Erscheinungsbild von Abständen zwischen den Zeilen beeinflusst.

Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, Raum von den Start- und/oder Endkanten des Block-Containers des Textes abzuschneiden. Dies kann den {{Glossary("leading", "Durchschuss")}} an den Block-Start- und Block-Endkanten des Textes sowie den in der Schriftart definierten Abstand (wie oben beschrieben) umfassen. Dies geschieht, indem ein {{cssxref("&lt;text-edge&gt;")}}-Wert angegeben wird, der die obere Kante und die untere Kante angibt, an die der Raum abgeschnitten werden soll.

Welche Kante(n) der Raum abgeschnitten werden soll, wird mit der {{cssxref("text-box-trim")}} Eigenschaft angegeben. Sie können zum Beispiel wählen, Raum von der oberen Kante oder der unteren Kante des Block-Containers des Textes oder von beiden abzuschneiden.

Diese Eigenschaften erleichtern die Steuerung der Textabstände in Blockrichtung erheblich.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die häufigsten `text-box-edge` Werte, die Sie für horizontale {{cssxref("writing-mode")}} Sprachen wie Englisch oder Arabisch verwenden werden, sind `cap alphabetic` und `ex alphabetic`. Der Wert `cap` schneidet die obere Kante des Block-Containers des Textelements bis zur Oberkante der Großbuchstaben ab, während `ex` die obere Kante auf die x-Höhe der Schrift (die obere Kante der kurzen Kleinbuchstaben) kürzt. In beiden Fällen schneidet `alphabetic` die untere Kante bündig mit der Basislinie des Textes ab.

In diesem Beispiel zeigen wir den Effekt beider dieser häufigen Werte auf zwei {{htmlelement("p")}} Elementen. Zusätzlich wurde ein Wert von `trim-both` für {{cssxref("text-box-trim")}} auf beide gesetzt, sodass ihre Start- _und_ Endkanten abgeschnitten werden.

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

#### Resultat

Die Ausgabe ist wie folgt. Beachten Sie, wie wir an jedem Absatz eine obere und eine untere Grenze hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktiver `text-box-edge` Wertvergleich

Für ein vollständiges interaktives `text-box-edge` Beispiel siehe die [`text-box-trim` Seite](/de/docs/Web/CSS/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
