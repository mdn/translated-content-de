---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Weitere Typen sind in den jeweiligen Spezifikationen definiert, auf die sie sich beziehen.

Nachfolgend finden Sie eine Referenz zu den Typen, die Ihnen am wahrscheinlichsten begegnen werden. Es ist jedoch keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort bezeichnet, das zwischen den spitzen Klammern `<` und `>` steht.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, beispielsweise der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als anfänglicher Wert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des übergeordneten Elements.
    - {{CSSXref("revert")}}
      - : Setzt die Cascade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Cascade auf den Wert der früheren [Cascade-Ebene](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, beispielsweise der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesene Name.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, zum Beispiel mit [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine zitierte Zeichenkette, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, beispielsweise als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzuzeigen. Die Mehrheit dieser Typen ist in der Werte- und Einheitenspezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, wo sie spezifisch für diese Spezifikation sind — beispielsweise die `fr`-Einheit im [CSS-Grid-Layout](https://drafts.csswg.org/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere dezimale Einheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, beispielsweise 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, beispielsweise 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, das mit der Syntax `<number> / <number>` geschrieben wird.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, die für das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) eingeführt wurde, geschrieben als `<number>` mit der Einheit `fr` angehängt und verwendet für die Größenbestimmung von Rastern.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn` angehängt.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer `s`- oder `ms`-Einheit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer `Hz`- oder `kHz`-Einheit angehängt.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheitenkennzeichnung von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensionstyp oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert in eine Menge aufgelöst, die der zugelassenen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentsatz akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://drafts.csswg.org/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als ein Schlüsselwort oder ein numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennzeichnung von `deg`, `grad`, `rad` oder `turn`, oder einen einheitslosen `<number>`, der als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, spezifisch für die `<absolute-color-functions>`, von denen es eine Komponente ist.

## Bilder

[Die CSS-Bildspezifikation](https://drafts.csswg.org/css-images-3/) definiert die Datentypen, die sich mit Bildern beschäftigen, einschließlich Verläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- `<linear-color-stop>`
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbstop für diesen Teil des Verlaufs anzuzeigen.
- `<linear-color-hint>`
  - : Ein `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der Endform des radialen Verlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird interpretiert, wie er für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert ist.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten, durchsetzt mit Addition (`+`) und Subtraktion (`-`) Operatoren, ist. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten, durchsetzt mit Multiplikation (`*`) und Division (`/`) Operatoren, ist. Beim Multiplizieren muss ein Wert einheitenlos sein. Bei der Division muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, die in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Funktionale Notation](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
