---
title: "`text-box-edge` CSS property"
short-title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt eine Menge Platz an, die von einem Blockcontainer eines Textelements abgeschnitten werden soll.

Vertikale Abstände unterscheiden sich zwischen Schriftarten, was die konsistente Typografie im Web historisch gesehen herausfordernd macht. Die `text-box-edge`-Eigenschaft — zusammen mit ihrer Gegenstückeigenschaft {{cssxref("text-box-trim")}}, die angibt, von welchen Kanten Raum abgeschnitten werden soll — erleichtert das Erreichen einer konsistenten Typografie. Die `text-box-edge`-Eigenschaft hat keine Wirkung, wenn `text-box-trim` nicht gesetzt ist oder auf `none` gesetzt ist.

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

Der Wert der `text-box-edge`-Eigenschaft wird als `auto` oder ein {{cssxref("&lt;text-edge&gt;")}}-Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge` Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die über und unter Kantenpositionen darstellen, um den Blockcontainer des Textelements zu trimmen.
    - Wenn zwei Werte angegeben sind, gibt der erste Wert das Trimmverhalten für die Blockanfangskante (über) des Texts an, und der zweite Wert gibt das Trimmverhalten für die Blockendkante (unter) des Texts an.
      - Gültige Über-Kanten Trimmwerte: `text`, `cap` und `ex`.
      - Gültige Unter-Kanten Trimmwerte: `text` und `alphabetic`.
    - Wenn ein Wert angegeben ist, spezifiziert er sowohl das Über- als auch das Unterkanten-Trimmverhalten. Zum Zeitpunkt des Schreibens ist der einzige gültige einzelne Wert `text`.

## Beschreibung

Die Höhe von nur Text-Inhalten ist relativ zur Höhe der Schriftart. In digitalen Fontdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriftarten haben unterschiedliche Basis-Zeilenhöhen, was bedeutet, dass Textzeilen mit der gleichen `font-size` Zeilenboxen unterschiedlicher Höhe erzeugen werden, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die `text-box-edge`-Eigenschaft ermöglicht es Ihnen, den Raum vom Anfangs- und/oder Endrand des Blockcontainers des Textes abzuschneiden. Dies kann das {{Glossary("leading", "leading")}} am Blockanfang und Ende des Textes und den innerhalb der Schrift definierten Abstand (wie oben beschrieben) einschließen. Dies erfolgt durch Spezifikation eines {{cssxref("&lt;text-edge&gt;")}}-Wertes, der die Über- und Unterkante angibt, auf die der Raum getrimmt werden soll.

Von welchen Kanten Raum abgeschnitten werden soll, wird mit der {{cssxref("text-box-trim")}}-Eigenschaft angegeben. Zum Beispiel können Sie wählen, Raum vom Überrand oder vom Unterrand des Blockcontainers des Textes, oder von beiden abzuschneiden.

Diese Eigenschaften erleichtern die Steuerung von Textabständen in Blockrichtung erheblich.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die gebräuchlichsten `text-box-edge`-Werte, die Sie für horizontale {{cssxref("writing-mode")}}-Sprachen wie Englisch oder Arabisch verwenden, sind `cap alphabetic` und `ex alphabetic`. Der `cap`-Wert kürzt die obere Kante des Blockcontainers des Textelements bis zur Oberseite der Großbuchstaben, während `ex` die obere Kante auf die x-Höhe der Schriftart (die Oberkante der kurzen Kleinbuchstaben) kürzt. In jedem Fall kürzt `alphabetic` die Unterkante bündig mit der Textbasislinie.

In diesem Beispiel demonstrieren wir die Wirkung beider dieser allgemeinen Werte an zwei {{htmlelement("p")}}-Elementen. Zudem wurde bei beiden ein {{cssxref("text-box-trim")}}-Wert von `trim-both` gesetzt, sodass deren Anfangs- _und_ Endkanten gekürzt sind.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir eine obere und untere Umrandung auf jedem Absatz eingefügt haben, damit Sie sehen können, wie der Raum in jedem Fall gekürzt wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-edge`-Wertevergleiche

Für ein vollständiges interaktives `text-box-edge`-Beispiel siehe die [`text-box-trim` Seite](/de/docs/Web/CSS/Reference/Properties/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
