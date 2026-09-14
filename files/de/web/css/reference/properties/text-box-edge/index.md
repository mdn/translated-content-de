---
title: "`text-box-edge` CSS property"
short-title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-box-edge`** legt fest, wie viel Abstand aus dem Blockcontainer eines Textelements entfernt werden soll.

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

Der Wert der Eigenschaft `text-box-edge` wird als `auto` oder als {{cssxref("&lt;text-edge&gt;")}}-Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge`-Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei getrennte Schlüsselwörter, die die obere und untere Kantenposition darstellen, auf die der Blockcontainer des Textelements zugeschnitten werden soll.
    - Wenn zwei Werte angegeben werden, legt der erste Wert das Zuschneideverhalten fest, das auf die block-start-Kante (obere Kante) des Textes angewendet wird, und der zweite Wert legt das Verhalten für die block-end-Kante (untere Kante) fest.
      - Gültige Werte zum Zuschneiden der oberen Kante: `text`, `cap` und `ex`.
      - Gültige Werte zum Zuschneiden der unteren Kante: `text` und `alphabetic`.
    - Wenn ein Wert angegeben wird, legt er das Zuschneideverhalten für die obere _und_ untere Kante fest. Zum Zeitpunkt der Erstellung ist `text` der einzige gültige Einzelwert.

## Beschreibung

Die Eigenschaft `text-box-edge` legt fest, wie viel Abstand aus dem Blockcontainer eines Textelements entfernt werden soll.

Der vertikale Abstand unterscheidet sich zwischen Schriftarten, wodurch ein konsistenter Schriftsatz im Web historisch schwierig zu erreichen war. Die Eigenschaft `text-box-edge` erleichtert zusammen mit ihrer Gegenstück-Eigenschaft {{cssxref("text-box-trim")}}, die festlegt, von welcher(n) Kante(n) Abstand entfernt wird, einen konsistenten Schriftsatz. Die Eigenschaft `text-box-edge` hat keine Wirkung, wenn `text-box-trim` nicht gesetzt oder auf `none` gesetzt ist.

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriftarten haben unterschiedliche grundlegende Zeilenhöhen, sodass Textzeilen mit derselben `font-size` Line Boxes unterschiedlicher Höhe erzeugen, was das Erscheinungsbild der Abstände zwischen den Zeilen beeinflusst.

Die Eigenschaft `text-box-edge` ermöglicht es Ihnen, Abstand von der Anfangs- und/oder Endkante des Blockcontainers des Textes zu entfernen. Dies kann den {{Glossary("leading", "Durchschuss")}} an der block-start- und block-end-Kante des Textes sowie den innerhalb der Schriftart definierten Abstand umfassen, wie oben beschrieben. Dies erfolgt durch die Angabe eines {{cssxref("&lt;text-edge&gt;")}}-Werts, der die obere und untere Kante angibt, auf die der Abstand zugeschnitten werden soll.

Von welcher(n) Kante(n) Abstand entfernt werden soll, wird mit der Eigenschaft {{cssxref("text-box-trim")}} angegeben. Sie können beispielsweise wählen, ob Abstand von der oberen oder unteren Kante des Blockcontainers des Textes oder von beiden entfernt werden soll.

Diese Eigenschaften erleichtern die Steuerung des Textabstands in Blockrichtung erheblich.

Die Eigenschaft `text-box-edge` kann zusammen mit der Eigenschaft {{cssxref("text-box-trim")}} auch mithilfe der Kurzschreibweise {{cssxref("text-box")}} gesetzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die häufigsten `text-box-edge`-Werte, die Sie für horizontale Sprachen mit {{cssxref("writing-mode")}} wie Englisch oder Arabisch verwenden werden, sind `cap alphabetic` und `ex alphabetic`. Der Wert `cap` schneidet die obere Kante des Blockcontainers des Textelements bis zur Oberkante der Großbuchstaben zu, während `ex` die obere Kante auf die x-Höhe der Schriftart zuschneidet, also auf die Oberkante der kurzen Kleinbuchstaben. In beiden Fällen schneidet `alphabetic` die untere Kante bündig mit der Textgrundlinie zu.

In diesem Beispiel demonstrieren wir die Wirkung beider dieser häufig verwendeten Werte auf zwei {{htmlelement("p")}}-Elemente. Zusätzlich wurde für beide ein {{cssxref("text-box-trim")}}-Wert von `trim-both` festgelegt, sodass sowohl ihre Anfangs- als auch ihre Endkanten zugeschnitten werden.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass wir jedem Absatz einen oberen und unteren Rahmen hinzugefügt haben, damit Sie sehen können, wie der Abstand jeweils zugeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktiver Vergleich von `text-box-edge`-Werten

Ein vollständiges interaktives Beispiel für `text-box-edge` finden Sie auf der [Seite zu `text-box-trim`](/de/docs/Web/CSS/Reference/Properties/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- Datentyp {{cssxref("&lt;text-edge&gt;")}}
- Modul [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
