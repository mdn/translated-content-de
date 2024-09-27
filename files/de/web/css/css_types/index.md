---
title: CSS-Datentypen
slug: Web/CSS/CSS_Types
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwert-Typ](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) Spezifikation definiert. Diese Spezifikation definiert auch [Funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Unten finden Sie eine Referenz zu den Typen, die Sie am wahrscheinlichsten antreffen werden. Es handelt sich jedoch nicht um eine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

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
  - : Schlüsselwörter mit vordefinierter Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft festgelegte Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des Elternelements.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("unset")}}
      - : Agiert wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS-basierten benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie z.B. für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die meisten von ihnen sind in der Values and Units Spezifikation definiert, zusätzliche Typen sind jedoch in anderen Spezifikationen beschrieben, bei denen sie spezifisch für diese Spezifikation sind — zum Beispiel die `fr`-Einheit im [CSS grid layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1,34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer daran angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen daran, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für das [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, dargestellt als `<number>` mit der `fr`-Einheit und verwendet für die Raster-Spurengrößen.

## Mengen

Diese Typen werden verwendet, um Distanzen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind ein `<dimension>` mit einer `s` oder `ms` Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz` oder `kHz` Einheit.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheitenbezeichnung von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Wert in Dimensionen oder Prozent annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS Color Specification](https://www.w3.org/TR/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}} Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder als numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, in welchem Fall 0 völlig transparent und 1 völlig undurchsichtig ist, oder ein `<percentage>`, in welchem Fall 0% völlig transparent und 100% völlig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenbezeichnung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des [Farbkreises](/de/docs/Glossary/color_wheel), das zu den `<absolute-color-functions>` gehört, deren Bestandteil es ist.

## Bilder

[Die CSS Images Specification](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern einschließlich Farbverläufen beschäftigen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhinweises.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbverlauf für diesen Teil des Farbverlaufs anzuzeigen.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Eine `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Farbverläufe verwendet; kann den Schlüsselwortwert `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform des radialen Farbverlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder einer `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird interpretiert wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Additions- (`+`) und Subtraktions- (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Mal- (`*`) und Divisions- (`/`) Operatoren. Beim Multiplizieren muss ein Wert einheitenlos sein. Beim Dividieren muss der zweite Wert einheitenlos sein.
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
