---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**CSS-Datentypen** definieren typische Werte (einschließlich Keywords und Einheiten), die von CSS-Eigenschaften und Funktionen akzeptiert werden. Sie sind eine besondere Art von [Komponentenwerttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen werden in den Spezifikationen definiert, auf die sie zutreffen.

Im Folgenden finden Sie eine Referenz zu den Typen, die Ihnen am wahrscheinlichsten begegnen werden, es ist jedoch keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Keyword angezeigt, das zwischen spitzen Klammern `<` und `>` gesetzt wird. Sie entsprechen keiner greifbaren CSS-Code-Entität.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert von `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des übergeordneten Elements.
    - {{CSSXref("revert")}}
      - : Rollt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Rollt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Agiert wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel für [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenfolge, wie sie beispielsweise für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, beispielsweise als Wert einer {{cssxref("background-image")}}-Eigenschaft.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzuzeigen. Der Großteil dieser Typen ist in der Values and Units-Spezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, wo sie spezifisch für diese Spezifikation allein sind — zum Beispiel die `fr`-Einheit im [CSS-Rasterlayout](https://drafts.csswg.org/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere dezimale Einheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der angehängten `fr`-Einheit und verwendet für die Größenbestimmung von Rasterspuren.

## Mengen

Diese Typen werden verwendet, um Abstände und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind eine `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind eine `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind eine `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind eine `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist eine `<dimension>` mit einem Einheitenbezeichner von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensions- oder Prozentwert annehmen. In diesem Fall wird der Prozentwert in eine Menge umgewandelt, die mit der zulässigen Dimension übereinstimmt. Eigenschaften, die zusätzlich zu einer Dimension auch einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://drafts.csswg.org/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farben in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als ein Schlüsselwort oder als numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, in diesem Fall ist 0 vollständig transparent und 1 vollständig undurchsichtig, oder ein `<percentage>`, in diesem Fall ist 0% vollständig transparent und 100% vollständig undurchsichtig.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` mit einem Einheitenbezeichner von `deg`, `grad`, `rad` oder `turn` an, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird. Diese repräsentiert den {{Glossary("color_wheel", "Farbkreis")}}, der spezifisch für die `<absolute-color-functions>` ist, deren Bestandteil sie ist.

## Bilder

[Die CSS-Bilderspezifikation](https://drafts.csswg.org/css-images-3/) definiert die Datentypen, die sich mit Bildern, einschließlich Verläufen, befassen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionaler Übergangsinformation unter Verwendung eines Farbhinweises.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Keyword-Wert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird definiert, wie er für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft interpretiert wird.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Keyword-Wert wie `top` oder `left`, oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Additions- (`+`) und Subtraktions- (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Multiplikations- (`*`) und Divisions- (`/`) Operatoren. Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Modul CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
