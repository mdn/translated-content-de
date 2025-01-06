---
title: CSS-Datentypen
slug: Web/CSS/CSS_Types
l10n:
  sourceCommit: 2084d85fce9f7a4144db5fb4cc8b4aaa22551df6
---

{{CSSRef}}

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwerttyp](https://www.w3.org/TR/css3-values/#component-types).

Die am häufigsten verwendeten Typen sind in der [CSS Values and Units](/de/docs/Web/CSS/CSS_Values_and_Units)-Spezifikation definiert. Diese Spezifikation definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Im Folgenden finden Sie einen Verweis auf die Typen, mit denen Sie am wahrscheinlichsten konfrontiert werden, es ist jedoch kein umfassender Verweis auf alle Typen, die in jeder CSS-Spezifikation definiert sind.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In formaler CSS-Syntax werden Datentypen durch ein Schlüsselwort gekennzeichnet, das zwischen den spitzen Klammern `<` und `>` gesetzt wird.

## Textuelle Datentypen

Diese Typen schließen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs ein.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der als Anfangswert der Eigenschaft festgelegte Wert.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft des Elternelements.
    - {{CSSXref("revert")}}
      - : Setzt den Kaskadenwert auf den Wert der vorherigen Quelle zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt den Kaskadenwert auf den Wert der vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Fungiert je nach Vererbungsstatus als `inherit` oder `initial`.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der mittels der {{cssxref("grid-area")}}-Eigenschaft vergebene Name.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass es mit zwei Bindestrichen beginnen muss, beispielsweise bei [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenkette, wie sie für einen Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die Mehrheit dieser Typen wird in der Values and Units-Spezifikation definiert, jedoch werden zusätzliche Typen in anderen Spezifikationen beschrieben, wenn sie spezifisch für diese Spezifikation allein sind — beispielsweise die `fr`-Einheit im [CSS-Grid-Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die auch eine Bruchkomponente haben können, zum Beispiel 1 oder 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der `fr`-Einheit angehängt und verwendet zur Größenbestimmung von Rasterspuren.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind eine `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind eine `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad`, oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Dauereinheiten sind eine `<dimension>` mit einer Einheit `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind eine `<dimension>` mit einer angehängten Einheit `Hz` oder `kHz`.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist eine `<dimension>` mit einer Einheitenkennung `dpi`, `dpcm`, `dppx`, oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können einen Dimensions- oder Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der zulässigen Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder ein Prozent als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder ein Prozent als Wert akzeptieren kann.

## Farbe

[Die CSS-Farbspezifikation](https://www.w3.org/TR/css-color-4/) definiert den {{cssxref("&lt;color&gt;")}}-Datentyp und andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Spezifiziert die Transparenz einer Farbe. Kann eine `<number>` sein, wobei 0 völlig transparent und 1 völlig undurchsichtig ist, oder ein `<percentage>`, wobei 0% völlig transparent und 100% völlig undurchsichtig ist.
- {{cssxref("&lt;hue&gt;")}}
  - : Spezifiziert den `<angle>`, mit einer Einheitenkennung `deg`, `grad`, `rad`, oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbrads")}}, das spezifisch für die `<absolute-color-functions>` ist, von denen es ein Bestandteil ist.

## Bilder

[Die CSS-Bilderspezifikation](https://www.w3.org/TR/css-images-3/) definiert die Datentypen, die mit Bildern zu tun haben, einschließlich Verläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Eine URL-Verknüpfung zu einem Bild oder einem Farbverlauf.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : Eine Liste von zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhints.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : Ein `<color>` und ein `<length-percentage>`, um den Farbverlauf für diesen Teil des Gradienten anzuzeigen.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : Ein `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert wird.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Wird für radiale Verläufe verwendet; kann einen Schlüsselwortwert `circle` oder `ellipse` haben.
- {{cssxref("&lt;size&gt;")}}
  - : Bestimmt die Größe der Endform des radialen Gradienten. Dies akzeptiert einen Schlüsselwortwert oder eine `<length>`, aber keinen Prozentwert.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird interpretiert, wie er für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert ist.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left`, oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematische Funktionen](/de/docs/Web/CSS/CSS_Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten darstellt, durch Addition (`+`) und Subtraktion (`-`) Operatoren unterbrochen. Bei diesem Datentyp müssen beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten darstellt, durch Multiplikations (`*`) und Divisions (`/`) Operatoren unterbrochen. Beim Multiplizieren muss ein Wert einheitslos sein. Beim Dividieren muss der zweite Wert einheitslos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten wie `e` und `π` darstellen und in CSS-Mathematikfunktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Units and Values](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS Funktionale Notation](/de/docs/Web/CSS/CSS_Functions)
