---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 0aa8517faf9d7d15c745ac94db7014d3a2d2085f
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponenten-Wertetypen](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/Guides/Values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen werden in den Spezifikationen definiert, auf die sie angewendet werden.

Nachfolgend finden Sie einen Verweis auf die Typen, die Sie am wahrscheinlichsten antreffen werden. Es handelt sich jedoch nicht um eine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort bezeichnet, das zwischen den spitzen Klammern `<` und `>` steht. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("revert-rule")}}
      - : Setzt die Kaskade auf den Wert einer früheren, übereinstimmenden Stilregel zurück.
    - {{CSSXref("unset")}}
      - : Funktioniert als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mithilfe der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine angegebene Zeichenkette, wie sie beispielsweise für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, zum Beispiel als Wert der Eigenschaft {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist im CSS-Werte- und Einheitenmodul definiert. Zusätzliche Typen werden jedoch in anderen Modulen beschrieben, in denen sie allein auf diese Spezifikation zutreffen, zum Beispiel die `fr`-Einheit im [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9, optional vorangestellt mit `-` oder `+`.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Distanzen ({{cssxref("&lt;length&gt;")}}), Dauerzeiten ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("resolution")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout), geschrieben als ein `<number>` mit der `fr`-Einheit angehängt und verwendet für die Größenanpassung von Gitternetzen.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}} Typen werden verwendet, um Distanzen und andere Mengen zu spezifizieren.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind eine `<dimension>` und beziehen sich auf Distanzen.
- {{cssxref("angle")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind eine `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind eine `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind eine `<dimension>` mit einer Einheit `Hz` oder `kHz`.
- {{cssxref("resolution")}}
  - : Ist eine `<dimension>` mit einer Einheitkennung wie `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}} als Wert nehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der als Wert eine Länge oder einen Prozentsatz akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der als Wert eine Frequenz oder einen Prozentsatz akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der als Wert einen Winkel oder einen Prozentsatz akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der als Wert eine Zeit oder einen Prozentsatz akzeptieren kann.

## Farbe

Das [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)-Modul definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder als numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann eine `<number>` sein, wobei 0 vollständig transparent und 1 vollständig deckend ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig deckend ist.
- {{cssxref("hue")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder einen einheitslosen `<number>`, der als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, von denen es ein Bestandteil ist.

## Bilder

Das [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)-Modul definiert die Datentypen, die sich mit Bildern befassen, einschließlich Gradienten.

- {{cssxref("image")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstops mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbstop für diesen Teil des Verlaufs anzugeben.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert wird.
- `<ending-shape>`
  - : Wird für radiale Gradienten verwendet; kann einen Schlüsselwert wie `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Gradienten. Dies akzeptiert einen Wert eines Schlüsselwortes oder eine `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird interpretiert, wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwert wie `top` oder `left` oder einen `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, die durch Addition (`+`) und Subtraktion (`-`) Operatoren unterbrochen sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, die durch Multiplikation (`*`) und Division (`/`) Operatoren unterbrochen sind. Bei der Multiplikation muss ein Wert einheitslos sein. Bei der Division muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, wie beispielsweise {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen und in CSS-Mathematikfunktionen verwendet werden können.

## Formdatentypen

Die Module [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) und [CSS Borders and Box Decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) definieren Formdatentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Wird von der verkürzten Eigenschaft {{cssxref("corner-shape")}} und ihren [Komponenten-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf die betroffenen Containerecken angewendet wird.

## Alphabetisches Verzeichnis der Datentypen

- {{cssxref("absolute-size")}}
- {{cssxref("alpha-value")}}
- {{cssxref("angle")}}
- {{cssxref("angle-percentage")}}
- {{cssxref("axis")}}
- {{cssxref("baseline-position")}}
- {{cssxref("basic-shape")}}
- {{cssxref("blend-mode")}}
- {{cssxref("box-edge")}}
- {{cssxref("calc-keyword")}}
- {{cssxref("calc-sum")}}
- {{cssxref("color_value", "&lt;color&gt;")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("content-distribution")}}
- {{cssxref("content-position")}}
- {{cssxref("corner-shape-value")}} {{experimental_inline}}
- {{cssxref("custom-ident")}}
- {{cssxref("dashed-function")}} {{experimental_inline}}
- {{cssxref("dashed-ident")}}
- {{cssxref("dimension")}}
- {{cssxref("display-box")}}
- {{cssxref("display-inside")}}
- {{cssxref("display-internal")}}
- {{cssxref("display-legacy")}}
- {{cssxref("display-listitem")}}
- {{cssxref("display-outside")}}
- {{cssxref("easing-function")}}
- {{cssxref("filter-function")}}
- {{cssxref("flex_value", "&lt;flex&gt;")}}
- {{cssxref("frequency")}}
- {{cssxref("frequency-percentage")}}
- {{cssxref("generic-family")}}
- {{cssxref("gradient")}}
- {{cssxref("hex-color")}}
- {{cssxref("hue")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("ident")}}
- {{cssxref("image")}}
- {{cssxref("integer")}}
- {{cssxref("length")}}
- {{cssxref("length-percentage")}}
- {{cssxref("line-style")}}
- {{cssxref("named-color")}}
- {{cssxref("number")}}
- {{cssxref("overflow_value", "&lt;overflow&gt;")}}
- {{cssxref("overflow-position")}}
- {{cssxref("percentage")}}
- {{cssxref("position_value", "&lt;position&gt;")}}
- {{cssxref("position-area_value", "&lt;position-area&gt;")}}
- {{cssxref("ratio")}}
- {{cssxref("relative-size")}}
- {{cssxref("resolution")}}
- {{cssxref("self-position")}}
- {{cssxref("shape")}} {{deprecated_inline}}
- {{cssxref("string")}}
- {{cssxref("system-color")}}
- {{cssxref("text-edge")}}
- {{cssxref("time")}}
- {{cssxref("timeline-range-name")}}
- {{cssxref("time-percentage")}}
- {{cssxref("transform-function")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions)
