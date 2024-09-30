---
title: CSS Datentypen
slug: Web/CSS/CSS_Types
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine besondere Art von [Komponentenwerttyp](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)-Spezifikation definiert. Diese Spezifikation definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitung erlauben. Andere Typen werden in den Spezifikationen definiert, auf die sie sich beziehen.

Im Folgenden finden Sie eine Referenz zu den Typen, die Ihnen am häufigsten begegnen, jedoch ist es keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` platziert wird.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Identifikatoren sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der errechnete Wert der Eigenschaft des übergeordneten Elements.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("unset")}}
      - : Agiert wie `inherit` oder `initial`, je nachdem ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Identifikator, zum Beispiel der Name, der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenfolge, wie sie für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit davon ist in der Values and Units-Spezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, wo sie spezifisch für diese sind — zum Beispiel die Einheit `fr` in [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalstellen von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine gebrochene Komponente haben können, zum Beispiel 1 oder 1,34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer zugehörigen Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als `<number>` mit der `fr`-Einheit und verwendet für die Größenbestimmung der Rasterspur.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind ein `<dimension>` mit einer `s` oder `ms` Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz` oder `kHz` Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einem Einheitenkennzeichen `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können sowohl eine Dimension als auch einen Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension auch einen Prozentsatz akzeptieren können, werden einen der unten aufgelisteten Typen verwenden.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS Color Specification](https://www.w3.org/TR/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig opak ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig opak ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einem Einheitenkennzeichen `deg`, `grad`, `rad` oder `turn`, oder eine einheitslose `<number>`, die als `deg` interpretiert wird, des [Farbkreises](/de/docs/Glossary/color_wheel), der spezifisch für die `<absolute-color-functions>` ist, von denen es ein Bestandteil ist.

## Bilder

[Die CSS Images Specification](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern beschäftigen, einschließlich Gradienten.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbstopps mit optionaler Übergangsinformation unter Verwendung eines Farbhints.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Ein `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Gradienten verwendet; kann einen Schlüsselwortwert `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform des radialen Gradienten. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird interpretiert, wie er für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert ist.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktion](/de/docs/Web/CSS/CSS_Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten, unterbrochen durch Additions- (`+`) und Subtraktions- (`-`) Operatoren, darstellt. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten, unterbrochen durch Multiplikations- (`*`) und Divisions- (`/`) Operatoren, darstellt. Bei der Multiplikation muss ein Wert einheitslos sein. Bei der Division muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, wie zum Beispiel {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und ` π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Units and Values](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Funktionale Notation](/de/docs/Web/CSS/CSS_Functions)
