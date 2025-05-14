---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder Verarbeitung ermöglichen. Andere Typen werden in den Spezifikationen definiert, auf die sie zutreffen.

Im Folgenden finden Sie einen Verweis auf die Typen, die Sie am ehesten antreffen werden. Es ist jedoch kein umfassender Verweis auf alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort bezeichnet, das zwischen den spitzen Klammern `<` und `>` steht.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des Elternelements.
    - {{CSSXref("revert")}}
      - : Setzt das Aufheben der Kaskade auf den Wert des vorherigen Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt das Aufheben der Kaskade auf den Wert der vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial` je nachdem, ob die Eigenschaft vererbbar ist oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, beispielsweise bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Datentypen ist in der Values and Units-Spezifikation definiert, weitere spezifikationenspezifische Typen werden in anderen Spezifikationen beschrieben — zum Beispiel die `fr`-Einheit im [CSS-Grid-Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel 1 oder 1,34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit daran angeschlossen, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen daran angeschlossen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als `<number>` mit der `fr`-Einheit daran angefügt und für die Rasterspaltengrößenanpassung verwendet.

## Größenangaben

Diese Typen werden verwendet, um Entfernungen und andere Größen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer Einheit `Hz` oder `kHz`.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einem Einheitenkennzeichen `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können entweder eine Dimension oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert zu einer Menge aufgelöst, die der erlaubten Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension auch einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

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
  - : Gibt den `<angle>` mit einem Einheitenkennzeichen `deg`, `grad`, `rad` oder `turn` an oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, von denen er ein Bestandteil ist.

## Bilder

[Die CSS-Bildspezifikation](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern, einschließlich Verläufen, befassen.

- {{cssxref("&lt;image&gt;")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Eine `<color>` und ein `<length-percentage>`, um den Farbverlauf zu kennzeichnen.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für Radialverläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe des Endshapes des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird wie für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematik-Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, unterbrochen durch Addition (`+`) und Subtraktion (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, unterbrochen durch Multiplikation (`*`) und Division (`/`) Operatoren. Bei der Multiplikation muss ein Wert einheitenlos sein. Bei der Division muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematik-Funktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
