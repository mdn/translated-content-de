---
title: Numerische Datentypen
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Jede CSS-Deklaration besteht aus einem Paar von Eigenschaft/Wert. Der Wert kann verschiedene Datentypen enthalten, abhängig von der Eigenschaft, wie eine einzelne Zahl, ein Schlüsselwort, eine Funktion oder eine Kombination unterschiedlicher Typen; einige Werte haben Einheiten, andere nicht. Numerische Datentypen umfassen {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, und {{cssxref("&lt;percentage&gt;")}} Werte. Dieser Leitfaden ist ein Überblick über numerische Datentypen. Für detailliertere Informationen verweisen Sie bitte auf die Seite für jeden Werttyp.

## Ganzzahlen

Eine Ganzzahl besteht aus einer oder mehreren Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann durch ein `+` oder `-` Zeichen vorangestellt werden, ohne Abstand zwischen dem Zeichen und der Ganzzahl.

## Zahlen

Ein {{cssxref("&lt;number&gt;")}} stellt eine reelle Zahl dar, die einen Dezimalpunkt mit einem Bruchteil haben kann oder nicht, zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können auch durch ein `+` oder `-` Zeichen vorangestellt werden.

## Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifikator ist nicht zwischen Groß- und Kleinschreibung unterscheidend. Es gibt nie ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheit-Identifikator: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifikation von:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden in den Unterabschnitten unten behandelt.

### Distanz-Einheiten

Wenn eine Distanz-Einheit, auch bekannt als Länge, als Wert für eine Eigenschaft erlaubt ist, wird dies als der {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative Längen und absolute Längen. Relative Längeneinheiten geben eine Länge in Bezug zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: schriftnahe-relative Längen und ansichtfenster-prozentuale Längen. Diese kommen jeweils in zwei Arten vor. Schriftnahe-relative Längeneinheiten sind entweder lokal schriftnahe-relative oder Wurzel schriftnahe-relative. Ansichtsfenster-prozentuale Längen sind entweder relativ zur Höhe oder Breite des Ansichtsfensters oder, wie im [CSS Containment Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Lokale schriftnahe-relative Längen

Lokale schriftnahe-relative Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe, und spezifizieren eine Länge in Bezug auf eine berechnete Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Reference/Elements) selbst oder relativ zum geerbten Wert des Elements im Falle einer zirkulären Referenz, wie dem `em` Wert für eine {{cssxref("font-size")}} Eigenschaft oder einem `lh` Wert für eine {{cssxref("line-height")}} Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße auf dem Element und `ex` ist relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                     |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Großbuchstabenhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Elements.                                                                            |
| `ch`    | Durchschnittlicher Zeichenfortschritt eines schmalen Glyphs in der Schrift des Elements, repräsentiert durch das "0" (NULL, U+0030) Glyphe.                    |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                         |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                               |
| `ic`    | Durchschnittlicher Zeichenfortschritt eines vollbreiten Glyphs in der Schrift des Elements, repräsentiert durch die "水" (CJK Wasserideogramm, U+6C34) Glyphe. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                       |

#### Wurzel schriftnahe-relative Längen

Wurzel schriftnahe-relative Längen spezifizieren eine Länge in Beziehung zum [Root-Element](/de/docs/Web/CSS/:root) Vorfahren des Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße auf dem Root-Element und `rex` ist die x-Höhe der Schrift des Root-Elements.

| Einheit | Relativ zu                                                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Großbuchstabenhöhe (die nominale Höhe von Großbuchstaben) der Schrift des Root-Elements.                                                                            |
| `rch`   | Durchschnittlicher Zeichenfortschritt eines schmalen Glyphs in der Schrift des Root-Elements, repräsentiert durch das "0" (NULL, U+0030) Glyphe.                    |
| `rem`   | Schriftgröße der Schrift des Root-Elements.                                                                                                                         |
| `rex`   | x-Höhe der Schrift des Root-Elements.                                                                                                                               |
| `ric`   | Durchschnittlicher Zeichenfortschritt eines vollbreiten Glyphs in der Schrift des Root-Elements, repräsentiert durch die "水" (CJK Wasserideogramm, U+6C34) Glyphe. |
| `rlh`   | Zeilenhöhe des Root-Elements.                                                                                                                                       |

#### Ansichtsfenster-Einheiten

Ansichtsfenster-Einheiten spezifizieren eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Ansichtsfensters")}}.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` ist relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Höhe des Ansichtsfensters.                   |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic_viewport_units) Breite des Ansichtsfensters.                 |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Höhe des Ansichtsfensters.                          |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large_viewport_units) Breite des Ansichtsfensters.                        |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Höhe des Ansichtsfensters.                         |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small_viewport_units) Breite des Ansichtsfensters.                       |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Block-Achse")}} des Root-Elements.   |
| `vh`    | 1% der Höhe des Ansichtsfensters.                                                                                 |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inlines-Achse")}} des Root-Elements. |
| `vmax`  | 1% der größeren Abmessung des Ansichtsfensters.                                                                   |
| `vmin`  | 1% der kleineren Abmessung des Ansichtsfensters.                                                                  |
| `vw`    | 1% der Breite des Ansichtsfensters.                                                                               |

#### Container-Einheiten

Container-Abfrage Längeneinheiten spezifizieren eine Länge relativ zu den Abmessungen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries).
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                  |
| ------- | ------------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers   |
| `cqh`   | 1% der Höhe eines Abfragecontainers         |
| `cqi`   | 1% der Inline-Größe eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`       |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`      |
| `cqw`   | 1% der Breite eines Abfragecontainers       |

### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Medienformat ist, wie Druck. Zum Beispiel ist `mm` ein physisches Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Entspricht           |
| ------- | ------------------ | -------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54      |
| `in`    | Zoll               | 1in = 2.54cm = 96px  |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm |
| `pc`    | Pica               | 1pc = 1/6 eines 1in  |
| `pt`    | Punkt              | 1pt = 1/72 eines 1in |
| `px`    | Pixel              | 1px = 1/96 eines 1in |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm  |

Wenn ein Längenwert enthalten ist, wird, wenn die Länge `0` ist, der Einheitenkennzeichner nicht gefordert. Ansonsten ist der Einheitenkennzeichner erforderlich, nicht zwischen Groß- und Kleinschreibung unterscheidend, und muss unmittelbar nach dem numerischen Teil des Wertes stehen, ohne dazwischen liegendes Leerzeichen.

#### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} repräsentiert und akzeptieren die folgenden Werte:

| Einheit | Name      | Beschreibung                                       |
| ------- | --------- | -------------------------------------------------- |
| `deg`   | Grad      | Es gibt 360 Grad in einem vollständigen Kreis.     |
| `grad`  | Gon       | Es gibt 400 Gon in einem vollständigen Kreis.      |
| `rad`   | Radiant   | Es gibt 2π Radianten in einem vollständigen Kreis. |
| `turn`  | Umdrehung | Es gibt 1 Umdrehung in einem vollständigen Kreis.  |

#### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} repräsentiert. Wenn ein Zeitwert enthalten ist, ist der Einheitsbezeichner — das `s` oder `ms` — erforderlich. Er akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

#### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} repräsentiert. Er akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | Kilohertz | Ein Kilohertz entspricht 1.000 Hertz.               |

`1Hz`, kann auch als `1hz` oder `1HZ` geschrieben werden, ist ein Zyklus pro Sekunde.

#### Flexible Einheiten

Flexible Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} repräsentiert. Er akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                        |
| ------- | ---- | ------------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Raster-Containers |

#### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} repräsentiert. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, z.B. einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Es akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px Einheit. |

### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentsatzwerte sind immer relativ zu einer anderen Größe, zum Beispiel eine Länge. Jede Eigenschaft, die Prozentsätze erlaubt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements, der Wert einer Eigenschaft eines Vorfahrenelements, ein Maß eines enthaltenden Blocks oder etwas anderes sein.

Als Beispiel, wenn Sie die {{cssxref("width")}} eines Feldes als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternteils des Feldes:

```css
.box {
  width: 50%;
}
```

## Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder ein Typ oder der andere sein kann, z.B. eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der erlaubte Wert in der Spezifikation als Kombinationseinheit detailliert, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert spezifiziert die Farbe eines Elementmerkmals (z.B. die Hintergrundfarbe) und ist definiert im [CSS Color Module](https://drafts.csswg.org/css-color-3/).

### Bild

Der {{cssxref("&lt;image&gt;")}} Wert spezifiziert alle verschiedenen Arten von Bildern, die in CSS verwendet werden können, und ist definiert im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/).

### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, zum Beispiel eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

## Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine Art von Wert, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS vornehmen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von dem/den Argument(en) der Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Aber beachten Sie die Hinweise zu Leerzeichen auf Seiten für `min()`, `max()`, `minmax()`, und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie die alte Syntax für `rgb()`, `rgba()`, `hsl()`, und `hsla()`, verwendeten Kommas, aber Kommas werden generell nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Textuelle Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
