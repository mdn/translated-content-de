---
title: CSS-Werte und -Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Jede CSS-Deklaration umfasst ein Eigenschaft-Werte-Paar. Abhängig von der Eigenschaft kann der Wert aus einer einzelnen Ganzzahl oder einem Schlüsselwort bis hin zu einer Reihe von Schlüsselworten und Werten bestehen, mit oder ohne Einheiten. Es gibt eine gemeinsame Reihe von Datentypen – Werten und Einheiten –, die CSS-Eigenschaften akzeptieren. Unten finden Sie einen Überblick über die meisten dieser Datentypen. Konsultieren Sie die Seite für jeden Werttyp für detaillierte Informationen.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Textdatentypen sind entweder `<string>`, eine in Anführungszeichen stehende Zeichenserie, oder ein `<ident>`, ein "CSS Identifier", der eine nicht in Anführungszeichen stehende Zeichenfolge ist. Eine `<string>` muss entweder mit einfachen oder doppelten Anführungszeichen eingeschlossen werden. CSS-Identifikatoren, im Regelwerk als `<ident>` oder `<custom-ident>` aufgelistet, dürfen nicht in Anführungszeichen stehen.

Im CSS-Regelwerk werden Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftfamiliennamen oder Rasterbereiche als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}}, oder beides aufgelistet.

Wenn sowohl zitierte als auch nicht zitierte benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie es bei Animationsnamen der Fall ist:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind nicht gültig, wenn sie in Anführungszeichen gesetzt sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, daher würden wir, wenn wir einen Rasterbereich namens `content` hätten, diesen ohne Anführungszeichen verwenden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein Zeichenkettenwert der {{cssxref("content")}}-Eigenschaft, zitiert werden:

```css
.item::after {
  content: "This is my content.";
}
```

Während Sie im Allgemeinen jeden gewünschten Namen erstellen können, einschließlich Emojis, darf der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen sollten Sie vermeiden, dass es ein anderes vordefiniertes CSS-Schlüsselwort ist. Weitere Informationen finden Sie auf den Referenzseiten zu {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}}.

### Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die von der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind auch CSS-Identifikatoren und werden daher ohne Anführungszeichen verwendet.

Wenn Sie die CSS-Eigenschaftswertsyntax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite betrachten, werden die zulässigen Schlüsselwörter in der folgenden Form aufgelistet. Die folgenden Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

```plain
left | right | none | inline-start | inline-end
```

Solche Werte werden ohne Anführungszeichen verwendet:

```css
.box {
  float: left;
}
```

### CSS-weite Werte

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit Rücksetzverhalten angeben.

- {{cssxref("initial")}}
  - : Repräsentiert den Wert, der als anfänglicher Wert der Eigenschaft festgelegt wurde.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft des Elternelements des Elements, vorausgesetzt, dass es geerbt wird.
- {{cssxref("unset")}}
  - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft geerbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie diesen vom Elternelement erbt, oder auf den Standardwert, der durch das Stylesheet des Benutzer-Agents (oder, falls vorhanden, durch Benutzerstile) festgelegt wurde.
- {{cssxref("revert-layer")}}
  - : Rollt den Wert einer Eigenschaft in einem [Kaskadenschicht](/de/docs/Web/CSS/@layer) zu dem Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Kaskadenschicht entspricht. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln für das Zielobjekt in der aktuellen Kaskadenschicht festgelegt wären.

### URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet funktionale Notation, die eine `<string>` akzeptiert, die eine URL ist. Dies kann eine absolute oder relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, könnten Sie eine der folgenden verwenden.

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder in Anführungszeichen oder nicht in Anführungszeichen stehen. Wenn nicht zitiert, wird es als `<url-token>` analysiert, der zusätzliche Anforderungen wie das Escapen bestimmter Zeichen hat. Weitere Informationen finden Sie in {{cssxref("url_value", "&lt;url&gt;")}}.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganzzahlen

Eine Ganzzahl ist ein oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann von einem `+` oder `-` Symbol flankiert sein, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die einen Dezimalpunkt mit einer Bruchkomponente haben kann oder nicht, beispielsweise `0.255`, `128` oder `-1.2`. Zahlen können auch von einem `+` oder `-` Symbol flankiert sein.

### Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist ein `<number>` mit einer daran angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheit-Identifier ist nicht empfindlich für Groß- und Kleinschreibung. Es gibt niemals ein Leerzeichen oder andere Zeichen zwischen der Zahl und dem Einheiten-Identifier: d. h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifizierung von:

- {{cssxref("&lt;length&gt;")}} (Distanz-Einheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese sind alle in den untenstehenden Unterabschnitten behandelt.

#### Distanzeinheiten

Wo eine Distanzeinheit, auch als Länge bekannt, als Wert für eine Eigenschaft erlaubt ist, wird dies als {{cssxref("&lt;length&gt;")}}-Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute Längen. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten relativer Längen: schriftbezogene Längen und Längen in Prozent des Sichtbereichs. Diese kommen beide in zwei Arten. Schriftbezogene Längeneinheiten sind entweder lokal schriftbezogen oder wurzelschriftbezogen. Längen in Prozent des Sichtbereichs sind entweder relativ zur Höhe oder Breite des Sichtbereichs oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokale schriftbezogene Längen

Lokale schriftbezogene Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge im Verhältnis zu einer berechneten Größe einer Funktion des [Elements](/de/docs/Web/HTML/Element) selbst oder relativ zum vererbten Wert des Elements im Falle einer Zirkelreferenz, wie der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft. Beispielsweise ist `em` relativ zur Schriftgröße des Elements und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `cap`   | Kappenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                     |
| `ch`    | Durchschnittliche Zeichenbreite eines schmalen Glyphs in der Schrift des Elements, dargestellt durch das "0" (NULL, U+0030) Glyphe. |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                           |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                 |
| `ic`    | Durchschnittliche Zeichenbreite eines vollen Breitenzeichens in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser Ideogramm, U+6C34) Glyphe. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                         |

##### Wurzelschriftbezogene Längen

Wurzelschriftbezogene Längen spezifizieren eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/:root)-Vorfahr des Elements, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Zum Beispiel ist `rem` relativ zur Schriftgröße des Wurzelelements und `rex` die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap`  | Kappenhöhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                            |
| `rch`   | Durchschnittliche Zeichenbreite eines schmalen Glyphs in der Schrift des Wurzelelements, dargestellt durch das "0" (NULL, U+0030) Glyphe.     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                 |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                       |
| `ric`   | Durchschnittliche Zeichenbreite eines vollen Breitenzeichens in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasser Ideogramm, U+6C34) Glyphe. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                               |

##### Sichtbereichseinheiten

Längeneinheiten des Sichtbereichs geben eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Sichtbereichs")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Sichtbereichs und `vh` relativ zur Höhe des Sichtbereichs.

| Einheit | Relativ zu                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Höhe des Sichtbereichs.                       |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Breite des Sichtbereichs.                     |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large) Höhe des Sichtbereichs.                              |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large) Breite des Sichtbereichs.                            |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Höhe des Sichtbereichs.                             |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Breite des Sichtbereichs.                           |
| `vb`    | 1% der Sichtbereichsgröße in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements. |
| `vh`    | 1% der Höhe des Sichtbereichs.                                                                         |
| `vi`    | 1% der Sichtbereichsgröße in der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Sichtbereichs.                                                           |
| `vmin`  | 1% der kleineren Dimension des Sichtbereichs.                                                          |
| `vw`    | 1% der Breite des Sichtbereichs.                                                                       |

##### Container-Einheiten

Längeneinheiten für Container-Abfragen geben eine Länge relativ zu den Abmessungen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                               |
| ------- | ---------------------------------------- |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers |
| `cqh`   | 1% der Höhe eines Abfragecontainers      |
| `cqi`   | 1% der Innengröße eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`    |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`   |
| `cqw`   | 1% der Breite eines Abfragecontainers    |

#### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physikalische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Medienformat hat, wie z. B. beim Drucken. Zum Beispiel ist `mm` ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Entspricht           |
| ------- | ------------------ | -------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54      |
| `in`    | Zoll               | 1in = 2.54cm = 96px  |
| `mm`    | Millimeter         | 1mm = 1/10 von 1cm   |
| `pc`    | Pica               | 1pc = 1/6 von 1in    |
| `pt`    | Punkt              | 1pt = 1/72 von 1in   |
| `px`    | Pixel              | 1px = 1/96 von 1in   |
| `Q`     | Viertelmilliimeter | 1Q = 1/40 von 1cm    |

Wenn ein Längenwert enthalten ist, ist, wenn die Länge `0` ist, der Einheit-Identifikator nicht erforderlich. Andernfalls wird der Einheit-Identifikator benötigt, ist nicht empfindlich für Groß- und Kleinschreibung und muss unmittelbar nach dem numerischen Teil des Wertes erfolgen, ohne Leerzeichen dazwischen.

##### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} dargestellt und akzeptieren folgende Werte:

| Einheit | Name     | Beschreibung                              |
| ------- | -------- | ----------------------------------------- |
| `deg`   | Grad     | Es gibt 360 Grad in einem vollständigen Kreis. |
| `grad`  | Gon      | Es gibt 400 Gons in einem vollständigen Kreis. |
| `rad`   | Radiant  | Es gibt 2π Radianten in einem vollständigen Kreis. |
| `turn`  | Umdrehung | Es gibt 1 Umdrehung in einem vollständigen Kreis. |

##### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} dargestellt. Wenn ein Zeitwert enthalten ist, ist der Einheiten-Identifikator — das `s` oder `ms` — erforderlich. Er akzeptiert die folgenden Werte.

| Einheit | Name        | Beschreibung                                 |
| ------- | ----------- | -------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden    |                                              |

##### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} dargestellt. Er akzeptiert die folgenden Werte.

| Einheit | Name       | Beschreibung                                       |
| ------- | ---------- | -------------------------------------------------- |
| `Hz`    | Hertz      | Repräsentiert die Anzahl der Ereignisse pro Sekunde. |
| `kHz`   | KiloHertz  | Ein KiloHertz entspricht 1000 Hertz.              |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

##### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} dargestellt. Er akzeptiert den folgenden Wert.

| Einheit | Name  | Beschreibung                         |
| ------- | ----- | ------------------------------------ |
| `fr`    | Flex  | Repräsentiert eine flexible Länge innerhalb eines Rastercontainers. |

##### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} dargestellt. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Sie akzeptieren die folgenden Werte:

| Einheit        | Beschreibung          |
| -------------- | ------------------- |
| `dpcm`         | Punkte pro Zentimeter. |
| `dpi`          | Punkte pro Zoll.    |
| `dppx`, `x`    | Punkte pro px-Einheit. |

#### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes darstellt.

Prozentwerte sind immer relativ zu einer anderen Größe, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Größe, auf die sich der Prozentsatz bezieht. Diese Größe kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahren-Elements, eine Messung eines enthaltenen Blocks oder etwas anderes.

Als Beispiel, wenn Sie die {{cssxref("width")}} einer Box als Prozentsatz angeben, bezieht sich dieser auf den Prozentsatz der berechneten Breite des übergeordneten Elements der Box:

```css
.box {
  width: 50%;
}
```

### Kombination von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimensionsangabe, die entweder eine von zwei Typen sein könnte, zum Beispiel eine `<length>` **oder** ein `<percentage>`. In diesem Fall wird der zulässige Wert in der Spezifikation als Kombinationseinheit, z. B. {{cssxref("&lt;length-percentage&gt;")}}, angegeben. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Farbe

Der {{cssxref("&lt;color&gt;")}}-Wert gibt die Farbe eines Elementmerkmals an (z. B. dessen Hintergrundfarbe) und wird im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

#### Bild

Der {{cssxref("&lt;image&gt;")}}-Wert spezifiziert alle unterschiedlichen Bildtypen, die in CSS verwendet werden können und wird im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

#### Position

Der {{cssxref("&lt;position&gt;")}}-Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise eines Hintergrundbildes innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

### Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist eine Art von Wert, die komplexere Typen darstellen oder spezielle Verarbeitung durch CSS anfordern kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von dem/den Argument(en) der Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente haben, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind erlaubt, aber innerhalb der Klammern optional. (Siehe aber Hinweise zu Leerzeichen auf Seiten für `min()`, `max()`, `minmax()` und `clamp()`-Funktionen.)

Einige veraltete funktionale Notationen, wie die veraltete Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, verwendeten Kommata, aber Kommata werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, sind vor und nach dem Komma Leerzeichen optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Trigonometrische Funktionen in CSS](https://web.dev/articles/css-trig-functions)
