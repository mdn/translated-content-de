---
title: text-box-edge
slug: Web/CSS/Reference/Properties/text-box-edge
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-box-edge`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie viel Platz von einem Text-Element innerhalb eines Block-Containers abgeschnitten werden soll.

Der vertikale Abstand unterscheidet sich zwischen den Schriftarten, was historisch gesehen konsistentes Schriftsatz im Web zu einer Herausforderung machte. Die `text-box-edge` Eigenschaft — zusammen mit ihrer Gegenstückeigenschaft {{cssxref("text-box-trim")}}, die angibt, von welcher Kante Platz abgeschnitten werden soll — erleichtert es, einen konsistenten Schriftsatz zu erreichen. Die `text-box-edge` Eigenschaft hat keine Wirkung, wenn `text-box-trim` nicht gesetzt ist oder auf `none` gesetzt ist.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die `text-box-edge` und `text-box-trim` Werte in einer einzelnen Deklaration anzugeben.

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

Der `text-box-edge` Eigenschaftswert wird als `auto` oder ein {{cssxref("&lt;text-edge&gt;")}} Wert angegeben:

- `auto`
  - : Der Standardwert. Entspricht dem `text-edge` Wert `text`.
- {{cssxref("&lt;text-edge&gt;")}}
  - : Ein oder zwei separate Schlüsselwörter, die die Kantenpositionen über und unter dem Text-Element darstellen, die abgeschnitten werden sollen.
    - Wenn zwei Werte angegeben sind, spezifiziert der erste Wert das Zuschneideverhalten der Block-Startkante (über) des Textes und der zweite Wert das Zuschneideverhalten der Block-Endkante (unter) des Textes.
      - Gültige Zuschneidewerte für die obere Kante: `text`, `cap` und `ex`.
      - Gültige Zuschneidewerte für die untere Kante: `text` und `alphabetic`.
    - Wenn ein Wert angegeben ist, spezifiziert er sowohl das Zuschneideverhalten der oberen _als auch_ der unteren Kante. Zum Zeitpunkt des Schreibens ist der einzige gültige Einzelwert `text`.

## Beschreibung

Die Höhe des ausschließlich aus Text bestehenden Inhalts ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Höhen von Line-Boxen erzeugen, die sich auf die Erscheinung des Abstands zwischen den Zeilen auswirken.

Die `text-box-edge` Eigenschaft ermöglicht es Ihnen, Platz von der Start- und/oder Endkante des Textblockcontainers abzuschneiden. Dies kann den {{Glossary("leading", "Durchschuss")}} an der Block-Start- und Block-Endkante des Textes sowie den im Font definierten Abstand (wie oben beschrieben) umfassen. Dies erfolgt durch Angabe eines {{cssxref("&lt;text-edge&gt;")}} Wertes, der die obere und untere Kante angibt, um zu welchem Raum abgeschnitten werden soll.

Welche Kante(n) abgeschnitten werden sollen, wird mit der {{cssxref("text-box-trim")}} Eigenschaft angegeben. Sie können beispielsweise wählen, Platz von der oberen oder unteren Kante des Textblockcontainers oder beiden abzuschneiden.

Diese Eigenschaften erleichtern es erheblich, den Textabstand in Blockrichtung zu kontrollieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-edge`

Die gängigsten `text-box-edge` Werte, die Sie für horizontale {{cssxref("writing-mode")}} Sprachen wie Englisch oder Arabisch verwenden, sind `cap alphabetic` und `ex alphabetic`. Der `cap` Wert trimmt die obere Kante des Textblockcontainers bis zur Oberkante der Großbuchstaben, während `ex` die obere Kante bis zur x-Höhe des Fonts (der Oberkante der kurzen Kleinbuchstaben) zuschneidet. In jedem Fall trimmt `alphabetic` die untere Kante bündig mit der Textbasislinie.

In diesem Beispiel demonstrieren wir die Wirkung dieser beiden gängigen Werte auf zwei {{htmlelement("p")}} Elemente. Zusätzlich wurde auf beiden ein {{cssxref("text-box-trim")}} Wert von `trim-both` gesetzt, sodass ihre Start- _und_ Endkanten beschnitten werden.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir oben und unten einen Rand auf jeden Absatz gesetzt haben, damit Sie sehen können, wie der Platz in jedem Fall beschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-edge` Wertvergleich

Für ein vollständiges interaktives `text-box-edge` Beispiel sehen Sie die [`text-box-trim` Seite](/de/docs/Web/CSS/Reference/Properties/text-box-trim#interactive_text-box-trim_and_text-box-edge_value_comparison).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-trim")}}
- {{cssxref("&lt;text-edge&gt;")}} Datentyp
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-edge](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
