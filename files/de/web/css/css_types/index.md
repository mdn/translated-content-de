---
title: CSS-Datentypen
slug: Web/CSS/CSS_Types
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttypen](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Spezifikation definiert. Diese Spezifikation definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie angewendet werden.

Nachfolgend finden Sie eine Referenz zu den Typen, auf die Sie höchstwahrscheinlich stoßen, es ist jedoch keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort dargestellt, das zwischen den Ungleichheitszeichen "`<`" und "`>`" platziert wird.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem Elternelement.
    - {{CSSXref("revert")}}
      - : Kehrt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("unset")}}
      - : Funktioniert je nach Vererbung der Eigenschaft als `inherit` oder `initial`.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, wie zum Beispiel mit [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie zum Beispiel für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen ist in der Werte- und Einheiten-Spezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, in denen sie speziell nur für diese Spezifikation gelten — zum Beispiel die `fr`-Einheit im [CSS-Rasterlayout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, beispielsweise 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der Einheit `fr` und verwendet für die Größenbestimmung von Rastertracks.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer `s` oder `ms` Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz` oder `kHz` Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheit von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensions- oder Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://www.w3.org/TR/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann eine `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitslose `<number>`, die als `deg` interpretiert wird, des {{glossary("Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, deren Komponente es ist.

## Bilder

[Die CSS-Bilder-Spezifikation](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern, einschließlich Farbverläufen, befassen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste aus zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Abschnitt des Farbverlaufs anzuzeigen.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Eine `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Farbverläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Abschlussform eines radialen Farbverlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird definiert interpretiert für die Eigenschaft {{cssxref("&lt;background-position&gt;")}}.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktion](/de/docs/Web/CSS/CSS_Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten darstellt, die mit Addition (`+`) und Subtraktion (`-`) Operators durchsetzt sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten darstellt, die mit Multiplikations (`*`) und Divisions (`/`) Operators durchsetzt sind. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Funktionale Notation](/de/docs/Web/CSS/CSS_Functions)
