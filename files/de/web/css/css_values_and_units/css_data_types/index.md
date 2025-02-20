---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörtern und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind im [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) Modul definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie sich beziehen.

Nachfolgend finden Sie eine Referenz der Typen, die Ihnen am wahrscheinlichsten begegnen werden. Dies ist jedoch keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` steht.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Strings und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der Wert, der als anfänglicher Wert der Eigenschaft angegeben ist.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft am übergeordneten Element.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der früheren [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, beispielsweise in [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Ein umschlossener String, wie er als Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, z. B. als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die meisten dieser Typen sind in der Values and Units-Spezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, wo sie spezifisch für diese Spezifikation allein sind – beispielsweise die `fr`-Einheit im [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalziffern von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als `<number>` mit der `fr`-Einheit und verwendet für die Größe der Gitridspuren.

## Größen

Diese Typen werden verwendet, um Distanzen und andere Größen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Distanzen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einem Einheitenbezeichner von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können eine Dimension oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der erlaubten Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://www.w3.org/TR/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farben in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, von denen er ein Bestandteil ist.

## Bilder

[Die CSS Images Specification](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern, einschließlich Verläufen, befassen.

- {{cssxref("&lt;image&gt;")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbstopp für diesen Teil des Verlaufs anzugeben.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert wird.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Gradienten verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Akzeptiert einen Wert eines Schlüsselwortes oder einer `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird wie für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in Berechnungen der [CSS-Mathematikfunktion](/de/docs/Web/CSS/CSS_Functions#math_functions) verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die aus einer Folge von Berechnungswerten besteht, die mit Additions- (`+`) und Subtraktionsoperatoren (`-`) durchsetzt sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die aus einer Folge von Berechnungswerten besteht, die mit Multiplikations- (`*`) und Divisionsoperatoren (`/`) durchsetzt sind. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/CSS_Functions)
