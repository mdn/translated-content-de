---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttypen](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der Spezifikation [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units) definiert. Diese Spezifikation definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen werden in den entsprechenden Spezifikationen definiert, auf die sie angewendet werden.

Im Folgenden finden Sie eine Referenz zu den Typen, die Sie am wahrscheinlichsten antreffen, allerdings ist dies keine umfassende Referenz für alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort beschrieben, das zwischen spitzen Klammern `<` und `>` steht.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Identifikatoren sowie Zeichenketten und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, beispielsweise der Wert `collapse` für die Eigenschaft {{cssxref("border-collapse")}}.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die folgenden CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Standardwert der Eigenschaft angegebene Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des Elternelements.
    - {{CSSXref("revert")}}
      - : Setzt den Cascade-Wert auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Cascade auf den Wert der früheren [Cascade-Schicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt wie `inherit` oder `initial`, je nachdem, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Identifikator, zum Beispiel der Name, der mit der Eigenschaft {{cssxref("grid-area")}} zugewiesen wurde.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, z. B. bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie für einen Wert der Eigenschaft {{cssxref("content")}} verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, beispielsweise als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen zeigen Mengen, Indizes und Positionen an. Die meisten von ihnen sind in der Spezifikation "Values and Units" definiert, allerdings werden zusätzliche Typen in anderen Spezifikationen beschrieben, wenn sie spezifisch für diese Spezifikation sind — beispielsweise die `fr`-Einheit in [CSS-Grid-Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimalstellen von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, z. B. 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der angehängten Einheit `fr` und verwendet für die Größenbestimmung von Grid-Tracks.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer angehängten Einheit `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind ein `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer angehängten Einheit `Hz` oder `kHz`.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheit `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensionswert oder einen Prozentwert akzeptieren. In diesem Fall wird der Prozentwert in eine Quantität aufgelöst, die mit der zulässigen Dimension übereinstimmt. Eigenschaften, die zusätzlich zur Dimension auch einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentsatz als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentsatz als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://www.w3.org/TR/css-color-4/) definiert den Datentyp {{cssxref("&lt;color&gt;")}} und andere Typen, die sich auf Farben in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann entweder ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheit `deg`, `grad`, `rad` oder `turn`, oder einer einheitenlosen `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch für die `<absolute-color-functions>` ist, zu denen er gehört.

## Bilder

[Die CSS-Images-Spezifikation](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die sich mit Bildern beschäftigen, einschließlich Farbverläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Referenz auf ein Bild oder einen Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbverlaufsstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbe-Hinweises.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Eine `<color>` und eine `<length-percentage>`, um den Stopp für diesen Teil des Farbverlaufs anzugeben.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Eine `<length-percentage>`, um den Verlauf der Farbe anzugeben.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Farbverläufe verwendet; kann einen Schlüsselwortwert wie `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform eines radialen Farbverlaufs. Dies akzeptiert einen Wert eines Schlüsselwortes oder einer `<length>`, jedoch keinen Prozentsatz.

## 2D-Positionierung

Der Datentyp {{cssxref("&lt;position&gt;")}} wird wie für die Eigenschaft {{cssxref("&lt;background-position&gt;")}} definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder eine `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, unterbrochen durch Addieren (`+`) und Subtrahieren (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Sequenz von Berechnungswerten ist, unterbrochen durch Multiplikations- (`*`) und Divisionsoperatoren (`/`). Beim Multiplizieren muss einer der Werte einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, beispielsweise {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder geschachtelte {{cssxref("&lt;calc-sum&gt;")}}-Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Reihe von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen, und in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Units and Values](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-Funktionsnotation](/de/docs/Web/CSS/CSS_Functions)
