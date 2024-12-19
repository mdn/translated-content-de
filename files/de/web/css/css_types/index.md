---
title: CSS-Datentypen
slug: Web/CSS/CSS_Types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der Spezifikation [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Diese Spezifikation definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Weitere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Im Folgenden finden Sie eine Referenz zu den Typen, die Ihnen höchstwahrscheinlich begegnen werden. Es handelt sich jedoch nicht um eine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

Im formalen CSS-Syntax werden Datentypen durch ein zwischen den spitzen Klammern `<` und `>` platziertes Schlüsselwort dargestellt.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vorgegebene Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem übergeordneten Element.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wird.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenfolge, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Zeiger auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Der Großteil davon ist in der Values and Units-Spezifikation definiert, jedoch werden in anderen Spezifikationen zusätzliche Typen beschrieben, die spezifisch für diese Spezifikation sind — zum Beispiel die Einheit `fr` im [CSS-Grid-Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem Prozentzeichen, zum Beispiel 10 %.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge eingeführt für [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der Einheit `fr` und verwendet für die Größe von Grid-Spuren.

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
  - : Ist ein `<dimension>` mit einem Einheitenbezeichner von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Maßwert oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die dem zulässigen Maß entspricht. Eigenschaften, die zusätzlich zu einem Maß einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der ein Maß oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbenspezifikation](https://www.w3.org/TR/css-color-4/) definiert den Datentyp {{cssxref("&lt;color&gt;")}} und andere Typen, die sich auf Farben in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0 % vollständig transparent und 100 % vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einem Einheitsbezeichner von `deg`, `grad`, `rad` oder `turn`, oder ein einheitloses `<number>`, das als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, von denen es ein Bestandteil ist.

## Bilder

[Die CSS-Bilderspezifikation](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern befassen, einschließlich Farbverläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Eine URL-Referenz zu einem Bild oder einem Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Eine `<color>` und ein `<length-percentage>`, um den Farbverlauf für diesen Teil des Verlaufs anzugeben.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Ein `<length-percentage>`, um anzugeben, wie die Farbe interpoliert.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}} Datentyp wird so interpretiert wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Math-Funktion](/de/docs/Web/CSS/CSS_Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten ist, die mit Addition (`+`) und Subtraktion (`-`) verknüpft sind. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Abfolge von Berechnungswerten ist, die mit Multiplikation (`*`) und Division (`/`) verknüpft sind. Bei der Multiplikation muss ein Wert einheitslos sein. Bei der Division muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Math-Funktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Units and Values](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Learn: Values and units](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Functional Notation](/de/docs/Web/CSS/CSS_Functions)
