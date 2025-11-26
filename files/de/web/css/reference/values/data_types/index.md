---
title: CSS-Datentypen
short-title: Data types
slug: Web/CSS/Reference/Values/Data_types
l10n:
  sourceCommit: 01768f6dcc74acdbd32d2e91512939003b86ac6c
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttypen](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im [CSS Values and Units](/de/docs/Web/CSS/Guides/Values_and_units) Modul definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/Reference/Values/Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den jeweiligen Spezifikationen definiert.

Im Folgenden finden Sie einen Verweis auf die Typen, die Sie am ehesten antreffen werden. Es handelt sich jedoch nicht um eine umfassende Referenz aller in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort zwischen den spitzen Klammern `<` und `>` gekennzeichnet. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft beim übergeordneten Element.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesene Name.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenkette, wie sie als Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die meisten davon sind im CSS-Werte- und -Einheitenmodul definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wenn sie spezifisch für diese Spezifikation sind — zum Beispiel die `fr`-Einheit im [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalstellen 0 bis 9, optional mit vorangestelltem `-` oder `+`.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel `1` oder `1.34`.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer zugehörigen Einheit, zum Beispiel `90deg`, `50ms` oder `15em`. Dieser Typ umfasst Entfernungen ({{cssxref("&lt;length&gt;")}}), Dauer ({{cssxref("&lt;time&gt;")}}), Frequenzen ({{cssxref("&lt;frequency&gt;")}}), Auflösungen ({{cssxref("&lt;resolution&gt;")}}) und andere Mengen.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen dahinter, zum Beispiel `10%`.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) eingeführt wurde, geschrieben als `<number>` mit der `fr`-Einheit und für die Größenbestimmung von Gittern verwendet.

## Mengen

Diese {{cssxref("&lt;dimension&gt;")}}-Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad`, oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einem Einheitenkennzeichen von `dpi`, `dpcm`, `dppx`, oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können entweder einen {{cssxref("&lt;dimension&gt;")}} oder einen {{cssxref("&lt;percentage&gt;")}}-Wert annehmen. In diesem Fall wird der Prozentwert in eine Menge aufgelöst, die mit der zulässigen Dimension übereinstimmt. Eigenschaften, die zusätzlich zur Dimension ein Prozent akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder ein Prozent als Wert akzeptieren kann.

## Farbe

Das [CSS Color](/de/docs/Web/CSS/Guides/Colors) Modul definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig opak ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig opak ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Bestimmt den `<angle>`, mit einem Einheitenkennzeichen `deg`, `grad`, `rad`, oder `turn`, oder eine einheitslose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, von denen es ein Bestandteil ist.

## Bilder

Das [CSS Images](/de/docs/Web/CSS/Guides/Images) Modul definiert die Datentypen, die sich mit Bildern befassen, einschließlich Verläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionaler Übergangsinformation unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbstop für diesen Teil des Verlaufs anzugeben.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzugeben, wie die Farbe interpoliert wird.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, aber nicht eines Prozents.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird interpretiert wie definiert für die Eigenschaft {{cssxref("&lt;background-position&gt;")}}.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Math-Funktion](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten umfasst, die mit Additions (`+`) und Subtraktions (`-`) Operatoren durchsetzt sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten umfasst, die mit Multiplikations (`*`) und Divisions (`/`) Operatoren durchsetzt sind. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Math-Funktionen verwendet werden können.

## Form-Datentypen

Die [CSS Shapes](/de/docs/Web/CSS/Guides/Shapes) und [CSS Borders and Box Decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations) Module definieren Form-Datentypen:

- {{cssxref("&lt;basic-shape>")}}
  - : Beschreibt Formfunktionen, die in den Eigenschaften {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} verwendet werden.
- {{cssxref("&lt;corner-shape-value>")}}
  - : Beschreibt die Form einer Behälterecke. Er wird von der Kurzschreibweise {{cssxref("corner-shape")}} und ihren [Bestandteilen](/de/docs/Web/CSS/Reference/Properties/corner-shape#constituent_properties) verwendet, um die Form zu spezifizieren, die auf betroffene Behälterecken angewendet wird.

## Alphabetischer Index der Datentypen

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
- {{cssxref("time-percentage")}}
- {{cssxref("transform-function")}}
- {{cssxref("url_value", "&lt;url&gt;")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Values and Units](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Values und Units](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/Reference/Values/Functions)
