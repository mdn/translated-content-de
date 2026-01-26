---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine besondere Art von [Komponentenwerttypen](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Unten finden Sie eine Referenz zu den Typen, die Ihnen am wahrscheinlichsten begegnen, es ist jedoch keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In formaler CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` platziert ist. Sie entsprechen keinem greifbaren CSS-Code-Element.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der Wert, der als Anfangswert der Eigenschaft festgelegt ist.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des Elternelements.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Verhält sich wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} vergeben wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei den [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, beispielsweise als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit davon ist im Modul für CSS-Werte und Einheiten definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie spezifisch für diese Spezifikation sind — zum Beispiel die `fr`-Einheit im Modul [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9, optional vorangestellt durch `-` oder `+`.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Abstände ({{cssxref("&lt;length&gt;")}}), Zeitdauern ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("resolution")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben im Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout), geschrieben als ein `<number>` mit der Einheit `fr` und zur Größenbestimmung des Gitter-Tracks verwendet.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}} Typen werden verwendet, um Abstände und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Abstände.
- {{cssxref("angle")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeitdauereinheiten sind ein `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer Einheit `Hz` oder `kHz`.
- {{cssxref("resolution")}}
  - : Ist ein `<dimension>` mit einer Einheit `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}} Wert annehmen. In diesem Fall wird der Prozentwert auf eine mit der zulässigen Dimension übereinstimmende Menge aufgelöst. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der entweder eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der entweder eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der entweder einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der entweder eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das Modul [CSS-Farbe](/de/docs/Web/CSS/Guides/Colors) definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als ein Schlüsselwort oder ein numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("hue")}}
  - : Gibt den `<angle>` an, mit einer Einheitskennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitslose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, von denen er ein Bestandteil ist.

## Bilder

Das Modul [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) definiert die Datentypen, die sich mit Bildern beschäftigen, einschließlich Farbverläufe.

- {{cssxref("image")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen mittels eines Farbhinweises.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbstopp für diesen Teil des Verlaufs anzuzeigen.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzugeben, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für Radialverläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des Radialverlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird entsprechend der Definition für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Bestimmt die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in Berechnungen von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten, unterteilt durch Additions- (`+`) und Subtraktionsoperatoren (`-`), ist. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten, unterteilt durch Multiplikations- (`*`) und Divisionsoperatoren (`/`), ist. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Form-Datentypen

Die Module [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) und [CSS-Ränder und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) definieren Form-Datentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Containerecke. Es wird von der Abkürzungseigenschaft {{cssxref("corner-shape")}} und ihren [Bestandteileigenschaften](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf betroffene Containerecken angewendet wird.

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

{{Spezifikationen}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions)
