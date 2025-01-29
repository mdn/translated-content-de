---
title: CSS-Werte und -Einheiten
slug: Web/CSS/CSS_Values_and_Units
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{CSSRef}}

Jede CSS-Deklaration umfasst ein Paar aus Eigenschaft und Wert. Je nach Eigenschaft kann der Wert ein einzelner Integer oder ein Schlüsselwort, bis hin zu einer Serie von Schlüsselwörtern und Werten mit oder ohne Einheiten sein. Es gibt eine gemeinsame Menge von Datentypen — Werte und Einheiten — die CSS-Eigenschaften akzeptieren. Unten ist eine Übersicht über die meisten dieser Datentypen. Verweisen Sie auf die Seite für jeden Werttyp für detailliertere Informationen.

## Textuelle Datentypen

- {{cssxref("&lt;custom-ident&gt;")}}
- Vordefinierte Schlüsselwörter als ein `<ident>`
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

Textdatentypen sind entweder `<string>`, eine in Anführungszeichen gesetzte Zeichenkette, oder ein `<ident>`, ein "CSS Identifier", welches eine nicht in Anführungszeichen gesetzte Zeichenkette ist. Ein `<string>` muss mit entweder einfachen oder doppelten Anführungszeichen eingeschlossen werden. CSS Identifier, in den Spezifikationen als `<ident>` oder `<custom-ident>` gelistet, müssen ohne Anführungszeichen sein.

In den CSS-Spezifikationen sind Werte, die vom Webentwickler definiert werden können, wie Keyframe-Animationen, Schriftfamiliennamen oder Gitterbereiche als {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} oder beides aufgeführt.

Wenn sowohl eingeklammerte als auch nicht eingeklammerte benutzerdefinierte Textwerte erlaubt sind, wird die Spezifikation `<custom-ident> | <string>` auflisten, was bedeutet, dass Anführungszeichen optional sind, wie es bei Animationsnamen der Fall ist:

```css
@keyframe validIdent {
  /* keyframes go here */
}
@keyframe 'validString' {
  /* keyframes go here */
}
```

Einige Textwerte sind ungültig, wenn sie in Anführungszeichen gesetzt sind. Zum Beispiel kann der Wert von {{cssxref("grid-area")}} ein `<custom-ident>` sein, also wenn wir einen Gitterbereich `content` benennen würden, würden wir ihn ohne Anführungszeichen verwenden:

```css
.item {
  grid-area: content;
}
```

Im Vergleich dazu muss ein Datentyp, der ein {{cssxref("&lt;string&gt;")}} ist, wie ein String-Wert der {{cssxref("content")}}-Eigenschaft, eingeklammerte werden:

```css
.item::after {
  content: "This is my content.";
}
```

Obwohl Sie im Allgemeinen jeden gewünschten Namen erstellen können, einschließlich der Verwendung von Emojis, darf der Identifikator nicht `none`, `unset`, `initial` oder `inherit` sein, nicht mit einer Ziffer oder zwei Bindestrichen beginnen, und im Allgemeinen sollten Sie ihn nicht als eines der vordefinierten CSS-Schlüsselwörter verwenden. Siehe die {{cssxref("&lt;custom-ident&gt;")}} und {{cssxref("&lt;string&gt;")}} Referenzseiten für weitere Details.

### Vordefinierte Schlüsselwortwerte

Vordefinierte Schlüsselwörter sind Textwerte, die in der Spezifikation für diese Eigenschaft definiert sind. Diese Schlüsselwörter sind ebenfalls CSS Identifier und werden daher ohne Anführungszeichen verwendet.

Bei der Betrachtung der CSS-Eigenschaftswertsyntax in einer CSS-Spezifikation oder auf der MDN-Eigenschaftsseite werden die zulässigen Schlüsselwörter in folgender Form aufgelistet. Die folgenden Werte sind die vordefinierten Schlüsselwortwerte, die für {{cssxref("float")}} erlaubt sind.

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

Zusätzlich zu den vordefinierten Schlüsselwörtern, die Teil der Spezifikation für eine Eigenschaft sind, akzeptieren alle CSS-Eigenschaften die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} und {{cssxref("revert-layer")}}, die explizit das Standardverhalten festlegen.

- {{cssxref("initial")}}
  - : Repräsentiert den Wert, der als Anfangswert der Eigenschaft angegeben ist.
- {{cssxref("inherit")}}
  - : Repräsentiert den berechneten Wert der Eigenschaft am übergeordneten Element, vorausgesetzt, sie wird vererbt.
- {{cssxref("unset")}}
  - : Fungiert als entweder `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("revert")}}
  - : Setzt die Eigenschaft auf ihren geerbten Wert zurück, wenn sie von ihrem Elternteil vererbt wird oder auf den Standardwert, der von den Stilen des Benutzeragenten (oder, falls vorhanden, von Benutzerstilen) festgelegt wird.
- {{cssxref("revert-layer")}}
  - : Setzt den Wert einer Eigenschaft in einer [Schicht der Kaskade](/de/docs/Web/CSS/@layer) auf den Wert der Eigenschaft in einer CSS-Regel zurück, die dem Element in einer vorherigen Schicht der Kaskade entspricht. Der Wert der Eigenschaft mit diesem Schlüsselwort wird neu berechnet, als ob keine Regeln auf das Ziel-Element in der aktuellen Schicht der Kaskade angewendet worden wären.

### URLs

Ein {{cssxref("url_value", "&lt;url&gt;")}}-Typ verwendet eine funktionale Notation, die einen `<string>` akzeptiert, der eine URL ist. Diese kann eine absolute URL oder eine relative URL sein. Wenn Sie beispielsweise ein Hintergrundbild einfügen möchten, können Sie eine der folgenden verwenden:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.exammple.com/images/my-background.png");
}
```

Der Parameter für `url()` kann entweder eingeklammerte oder nicht eingeklammerte sein. Wenn nicht eingeklammerte, wird er als `<url-token>` geparst, der zusätzliche Anforderungen hat, einschließlich des Entweichens bestimmter Zeichen. Siehe {{cssxref("url_value", "&lt;url&gt;")}} für weitere Informationen.

## Numerische Datentypen

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Ganzzahlen

Eine Ganzzahl ist eine oder mehrere Dezimalziffern, `0` bis `9`, wie `1024` oder `-55`. Eine Ganzzahl kann von einem `+`- oder `-`-Symbol vorangestellt werden, ohne Leerzeichen zwischen dem Symbol und der Ganzzahl.

### Zahlen

Ein {{cssxref("&lt;number&gt;")}} repräsentiert eine reelle Zahl, die möglicherweise einen Dezimalpunkt mit einem Bruchteil aufweist, wie zum Beispiel `0.255`, `128` oder `-1.2`. Zahlen können ebenfalls durch ein `+`- oder `-`-Symbol vorangestellt werden.

### Dimensionen

Ein {{cssxref("&lt;dimension&gt;")}} ist eine `<number>` mit einer angehängten Einheit, zum Beispiel `45deg`, `100ms` oder `10px`. Der angehängte Einheitenidentifikator ist nicht fallunterscheidend. Zwischen der Zahl und dem Einheitenidentifikator darf niemals ein Leerzeichen oder andere Zeichen sein: d.h. `1 cm` ist nicht gültig.

CSS verwendet Dimensionen zur Spezifikation von:

- {{cssxref("&lt;length&gt;")}} (Abstandseinheiten)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Diese werden alle in den folgenden Unterpunkten behandelt.

#### Abstandseinheiten

Wenn eine Abstandseinheit, auch als Länge bekannt, als Wert für eine Eigenschaft erlaubt ist, wird dies als der {{cssxref("&lt;length&gt;")}} Typ beschrieben. Es gibt zwei Arten von Längen in CSS: relative und absolute. Relative Längeneinheiten geben eine Länge im Verhältnis zu etwas anderem an.

Es gibt zwei Arten von relativen Längen: Schrift-relative Längen und Ansichtsfenster-Prozent-Längen. Diese kommen beide in zwei Typen. Schrift-relative Längeneinheiten sind entweder lokal schrift-relativ oder Wurzel schrift-relativ. Ansichtsfenster-Prozent-Längen sind entweder relativ zur Ansichtsfensterhöhe oder -breite oder, wie im [CSS Containment-Modul](/de/docs/Web/CSS/CSS_containment) definiert, relativ zu einem [Container](/de/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

##### Lokale schrift-relative Längen

Lokale schrift-relative Längen sind relativ zur "lokalen" Schriftgröße oder Zeilenhöhe und spezifizieren eine Länge im Verhältnis zur berechneten Größe eines Merkmals des [Elements](/de/docs/Web/HTML/Element) selbst, oder relativ zum geerbten Wert des Elements im Fall einer zirkulären Bezugnahme, wie beispielsweise der `em`-Wert für eine {{cssxref("font-size")}}-Eigenschaft oder ein `lh`-Wert für eine {{cssxref("line-height")}}-Eigenschaft.
Zum Beispiel ist `em` relativ zur Schriftgröße am Element und `ex` relativ zur x-Höhe der Schrift des Elements.

| Einheit | Relativ zu                                                                                                                                                   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cap`   | Kap-Höhe (die nominelle Höhe von Großbuchstaben) der Schrift des Elements.                                                                                   |
| `ch`    | Durchschnittlicher Zeichenfortschritt eines schmalen Glyphe in der Schrift des Elements, dargestellt durch das "0" (ZERO, U+0030) Glyph.                     |
| `em`    | Schriftgröße der Schrift des Elements.                                                                                                                       |
| `ex`    | x-Höhe der Schrift des Elements.                                                                                                                             |
| `ic`    | Durchschnittlicher Zeichenfortschritt einer vollbreiten Glyphe in der Schrift des Elements, dargestellt durch das "水" (CJK Wasser Ideograph, U+6C34) Glyph. |
| `lh`    | Zeilenhöhe des Elements.                                                                                                                                     |

##### Wurzel schrift-relative Längen

Wurzel schrift-relative Längen geben eine Länge im Verhältnis zum [Wurzelelement](/de/docs/Web/CSS/:root) Vorfahren des Elements an, wie {{HTMLElement("HTML")}} oder {{SVGElement("SVG")}}.
Beispielsweise ist `rem` relativ zur Schriftgröße am Wurzelelement und `rex` ist die x-Höhe der Schrift des Wurzelelements.

| Einheit | Relativ zu                                                                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rcap`  | Kap-Höhe (die nominelle Höhe von Großbuchstaben) der Schrift des Wurzelelements.                                                                                   |
| `rch`   | Durchschnittlicher Zeichenfortschritt eines schmalen Glyphe in der Schrift des Wurzelelements, dargestellt durch das "0" (ZERO, U+0030) Glyph.                     |
| `rem`   | Schriftgröße der Schrift des Wurzelelements.                                                                                                                       |
| `rex`   | x-Höhe der Schrift des Wurzelelements.                                                                                                                             |
| `ric`   | Durchschnittlicher Zeichenfortschritt einer vollbreiten Glyphe in der Schrift des Wurzelelements, dargestellt durch das "水" (CJK Wasser Ideograph, U+6C34) Glyph. |
| `rlh`   | Zeilenhöhe des Wurzelelements.                                                                                                                                     |

##### Ansichtsfenster-Einheiten

Längeneinheiten des Ansichtsfensters geben eine Länge relativ zu den Abmessungen des {{Glossary("Viewport", "Ansichtsfensters")}} an.
Zum Beispiel ist `vw` relativ zur Breite des Ansichtsfensters und `vh` ist relativ zur Höhe des Ansichtsfensters.

| Einheit | Relativ zu                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| `dvh`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Ansichtsfensterhöhe.                                       |
| `dvw`   | 1% der [dynamischen](/de/docs/Web/CSS/length#dynamic) Ansichtsfensterbreite.                                     |
| `lvh`   | 1% der [großen](/de/docs/Web/CSS/length#large) Ansichtsfensterhöhe.                                              |
| `lvw`   | 1% der [großen](/de/docs/Web/CSS/length#large) Ansichtsfensterbreite.                                            |
| `svh`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Ansichtsfensterhöhe.                                             |
| `svw`   | 1% der [kleinen](/de/docs/Web/CSS/length#small) Ansichtsfensterbreite.                                           |
| `vb`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Blockachse")}} des Wurzelelements.  |
| `vh`    | 1% der Ansichtsfensterhöhe.                                                                                      |
| `vi`    | 1% der Größe des Ansichtsfensters in der {{Glossary("Flow_relative_values", "Inlineachse")}} des Wurzelelements. |
| `vmax`  | 1% der größeren Dimension des Ansichtsfensters.                                                                  |
| `vmin`  | 1% der kleineren Dimension des Ansichtsfensters.                                                                 |
| `vw`    | 1% der Ansichtsfensterbreite.                                                                                    |

##### Container-Einheiten

Längeneinheiten der Containeranfrage geben eine Länge relativ zu den Abmessungen eines [Abfragecontainers](/de/docs/Web/CSS/CSS_containment/Container_queries) an.
Zum Beispiel ist `cqw` relativ zur Breite des Abfragecontainers und `cqh` ist relativ zur Höhe des Abfragecontainers.

| Einheit | Relativ zu                                 |
| ------- | ------------------------------------------ |
| `cqb`   | 1% der Blockgröße eines Abfragecontainers  |
| `cqh`   | 1% der Höhe eines Abfragecontainers        |
| `cqi`   | 1% der Inlinegröße eines Abfragecontainers |
| `cqmax` | Der größere Wert von `cqi` oder `cqb`      |
| `cqmin` | Der kleinere Wert von `cqi` oder `cqb`     |
| `cqw`   | 1% der Breite eines Abfragecontainers      |

#### Absolute Längeneinheiten

Absolute Längeneinheiten sind an eine physische Länge gebunden: entweder ein Zoll oder ein Zentimeter. Viele dieser Einheiten sind daher nützlicher, wenn die Ausgabe ein festes Medienformat ist, wie z.B. Druck. Ein Beispiel: `mm` ist ein physischer Millimeter, 1/10 eines Zentimeters.

| Einheit | Name               | Äquivalent zu        |
| ------- | ------------------ | -------------------- |
| `cm`    | Zentimeter         | 1cm = 96px/2.54      |
| `in`    | Zoll               | 1in = 2,54cm = 96px  |
| `mm`    | Millimeter         | 1mm = 1/10 eines 1cm |
| `pc`    | Picas              | 1pc = 1/6 eines 1in  |
| `pt`    | Punkt              | 1pt = 1/72 eines 1in |
| `px`    | Pixel              | 1px = 1/96 eines 1in |
| `Q`     | Viertel-Millimeter | 1Q = 1/40 eines 1cm  |

Bei Einfügung eines Längenwerts, wenn die Länge `0` ist, ist der Einheitenidentifikator nicht erforderlich. Andernfalls ist der Einheitenidentifikator erforderlich, ist nicht fallunterscheidend, und muss unmittelbar nach dem numerischen Teil des Wertes kommen, ohne Leerzeichen dazwischen.

##### Winkeleinheiten

Winkelwerte werden durch den Typ {{cssxref("&lt;angle&gt;")}} repräsentiert und akzeptieren die folgenden Werte:

| Einheit | Name        | Beschreibung                             |
| ------- | ----------- | ---------------------------------------- |
| `deg`   | Grad        | Es gibt 360 Grad in einem Vollkreis.     |
| `grad`  | Gon         | Es gibt 400 Gon in einem Vollkreis.      |
| `rad`   | Radianten   | Es gibt 2π Radianten in einem Vollkreis. |
| `turn`  | Umdrehungen | Es gibt 1 Umdrehung in einem Vollkreis.  |

##### Zeiteinheiten

Zeitwerte werden durch den Typ {{cssxref("&lt;time&gt;")}} repräsentiert. Bei Einfügung eines Zeitwerts ist der Einheitenidentifikator — das `s` oder `ms` — erforderlich. Es akzeptiert die folgenden Werte.

| Einheit | Name          | Beschreibung                                  |
| ------- | ------------- | --------------------------------------------- |
| `ms`    | Millisekunden | Es gibt 1.000 Millisekunden in einer Sekunde. |
| `s`     | Sekunden      |                                               |

##### Frequenzeinheiten

Frequenzwerte werden durch den Typ {{cssxref("&lt;frequency&gt;")}} repräsentiert. Er akzeptiert die folgenden Werte.

| Einheit | Name      | Beschreibung                                        |
| ------- | --------- | --------------------------------------------------- |
| `Hz`    | Hertz     | Repräsentiert die Anzahl der Vorkommen pro Sekunde. |
| `kHz`   | KiloHertz | Ein KiloHertz ist 1000 Hertz.                       |

`1Hz`, das auch als `1hz` oder `1HZ` geschrieben werden kann, ist ein Zyklus pro Sekunde.

##### Flex-Einheiten

Flex-Einheiten werden durch den Typ {{cssxref("&lt;flex&gt;")}} repräsentiert. Er akzeptiert den folgenden Wert.

| Einheit | Name | Beschreibung                                                      |
| ------- | ---- | ----------------------------------------------------------------- |
| `fr`    | Flex | Repräsentiert eine flexible Länge innerhalb eines Grid-Containers |

##### Auflösungseinheiten

Auflösungseinheiten werden durch den Typ {{cssxref("&lt;resolution&gt;")}} repräsentiert. Sie repräsentieren die Größe eines einzelnen Punkts in einer grafischen Darstellung, wie einem Bildschirm, indem sie angeben, wie viele dieser Punkte in einen CSS-Zoll, Zentimeter oder Pixel passen. Er akzeptiert die folgenden Werte:

| Einheit     | Beschreibung           |
| ----------- | ---------------------- |
| `dpcm`      | Punkte pro Zentimeter. |
| `dpi`       | Punkte pro Zoll.       |
| `dppx`, `x` | Punkte pro px-Einheit. |

#### Prozentsätze

Ein {{cssxref("&lt;percentage&gt;")}} ist ein Typ, der einen Bruchteil eines anderen Wertes repräsentiert.

Prozentwerte sind immer relativ zu einer anderen Menge, zum Beispiel einer Länge. Jede Eigenschaft, die Prozentsätze erlaubt, definiert auch die Menge, auf die sich der Prozentsatz bezieht. Diese Menge kann ein Wert einer anderen Eigenschaft desselben Elements sein, der Wert einer Eigenschaft eines Vorfahrenelements, eine Messung eines umgebenden Blocks oder etwas anderes.

Als Beispiel, wenn Sie die {{cssxref("width")}} eines Box als Prozentsatz angeben, bezieht sich dies auf den Prozentsatz der berechneten Breite des Elternteils der Box:

```css
.box {
  width: 50%;
}
```

### Mischen von Prozentsätzen und Dimensionen

Einige Eigenschaften akzeptieren eine Dimension, die entweder eine von zwei Typen sein kann, zum Beispiel ein `<length>` **oder** ein `<percentage>`. In diesem Fall wird der zulässige Wert in der Spezifikation als Kombinationsenheit beschrieben, z.B. {{cssxref("&lt;length-percentage&gt;")}}. Andere mögliche Kombinationen sind wie folgt:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Spezielle Datentypen (in anderen Spezifikationen definiert)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Farbe

Der {{cssxref("&lt;color&gt;")}} Wert gibt die Farbe eines Merkmals eines Elements an (z.B. dessen Hintergrundfarbe) und ist im [CSS Color Module](https://drafts.csswg.org/css-color-3/) definiert.

#### Bild

Der {{cssxref("&lt;image&gt;")}} Wert gibt alle verschiedenen Arten von Bildern an, die in CSS verwendet werden können, und ist im [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/) definiert.

#### Position

Der {{cssxref("&lt;position&gt;")}} Typ definiert die 2D-Positionierung eines Objekts innerhalb eines Positionierungsbereichs, beispielsweise ein Hintergrundbild innerhalb eines Containers. Dieser Typ wird als {{cssxref("background-position")}} interpretiert und daher in der [CSS Backgrounds and Borders-Spezifikation](https://www.w3.org/TR/css-backgrounds-3/) spezifiziert.

### Funktionale Notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Funktionale Notation](/de/docs/Web/CSS/CSS_Functions) ist eine Art von Wert, der komplexere Typen darstellen oder spezielle Verarbeitung durch CSS auslösen kann. Die Syntax beginnt mit dem Namen der Funktion, gefolgt von einer linken Klammer `(`, gefolgt von dem/den Argument(en) der Notation, gefolgt von einer rechten Klammer `)`. Funktionen können mehrere Argumente annehmen, die ähnlich wie ein CSS-Eigenschaftswert formatiert sind.

Leerzeichen sind innerhalb der Klammern erlaubt, aber optional. (Siehe jedoch Anmerkungen zu Leerzeichen innerhalb von Seiten für `min()`, `max()`, `minmax()` und `clamp()` Funktionen.)

Einige ältere funktionale Notationen, wie ältere Syntax für `rgb()`, `rgba()`, `hsl()` und `hsla()`, benutzten Kommas, aber Kommas werden im Allgemeinen nur verwendet, um Elemente in einer Liste zu trennen. Wenn ein Komma verwendet wird, um Argumente zu trennen, ist ein Leerzeichen vor und nach dem Komma optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [Trigonometrische Funktionen in CSS](https://web.dev/articles/css-trig-functions)
