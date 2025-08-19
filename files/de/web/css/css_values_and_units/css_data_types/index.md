---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerteeinheit](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder Verarbeitung ermöglichen. Andere Typen sind in den jeweiligen Spezifikationen definiert, denen sie zugeordnet sind.

Im Folgenden finden Sie eine Referenz zu den Typen, auf die Sie am häufigsten stoßen werden. Es handelt sich jedoch nicht um eine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` platziert wird. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, z. B. der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als anfänglicher Wert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft am Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Funktioniert wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, z. B. der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenfolge, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, z. B. als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist im Modul CSS-Werte und -Einheiten definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie nur für diese eine Spezifikation spezifisch sind — zum Beispiel die `fr`-Einheit im [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, z. B. 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichenn angehängt, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als `<number>` mit der `fr`-Einheit und für die Größenbestimmung des Gitterspuren verwendet.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Distanzen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauermaßeinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheitserkennung von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensionswert oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension auch ein Prozent akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

Das Modul [CSS-Farbe](/de/docs/Web/CSS/CSS_colors) definiert den Datentyp {{cssxref("&lt;color&gt;")}} und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Spezifiziert den `<angle>`, entweder mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, zu denen es gehört.

## Bilder

Das Modul [CSS-Bilder](/de/docs/Web/CSS/CSS_images) definiert die Datentypen, die sich mit Bildern befassen, einschließlich Verläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, die anzeigt, wie die Farbe interpoliert wird.
- `<ending-shape>`
  - : Verwendet für radiale Verläufe; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Farbverlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, jedoch nicht eines Prozentsatzes.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in Berechnungen von [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten enthält, die mit Additions- (`+`) und Subtraktions- (`-`) Operatoren durchsetzt sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten enthält, die mit Multiplikations- (`*`) und Divisions- (`/`) Operatoren durchsetzt sind. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen und in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
