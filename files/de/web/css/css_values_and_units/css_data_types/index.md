---
title: CSS-Datentypen
slug: Web/CSS/CSS_Values_and_Units/CSS_data_types
l10n:
  sourceCommit: a35316157231254177e82fd548da22ca4b4cd8e2
---

**CSS-Datentypen** definieren typische Werte (einschließlich Schlüsselwörter und Einheiten), die von CSS-Eigenschaften und -Funktionen akzeptiert werden. Sie sind eine spezielle Art von [Komponentenwert-Typ](https://drafts.csswg.org/css-values/#component-types).

Die am häufigsten verwendeten Typen sind im [CSS-Werte- und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)-Modul definiert. Dieses Modul definiert auch [funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), die komplexere Typen oder Verarbeitungen ermöglichen. Andere Typen sind in den Spezifikationen definiert, auf die sie zutreffen.

Unten finden Sie eine Referenz zu den Typen, die Ihnen am wahrscheinlichsten begegnen, jedoch ist dies keine umfassende Referenz für alle in jeder CSS-Spezifikation definierten Typen.

## Syntax

In der formalen CSS-Syntax werden Datentypen durch ein Schlüsselwort angezeigt, das zwischen den spitzen Klammern `<` und `>` steht. Sie entsprechen keinem greifbaren CSS-Code-Element.

## Textuelle Datentypen

Diese Typen umfassen Schlüsselwörter und Bezeichner sowie Zeichenfolgen und URLs.

- Vordefinierte Schlüsselwörter
  - : Schlüsselwörter mit einer vordefinierten Bedeutung, zum Beispiel der Wert `collapse` für die {{cssxref("border-collapse")}}-Eigenschaft.
- CSS-weite Schlüsselwörter
  - : Alle Eigenschaften, einschließlich benutzerdefinierter Eigenschaften, akzeptieren die CSS-weiten Schlüsselwörter:
    - {{CSSXref("initial")}}
      - : Der Wert, der als Anfangswert der Eigenschaft angegeben wurde.
    - {{CSSXref("inherit")}}
      - : Der berechnete Wert der Eigenschaft auf dem Elternelement.
    - {{CSSXref("revert")}}
      - : Setzt die Kaskade auf den Wert des früheren Ursprungs zurück.
    - {{CSSXref("revert-layer")}}
      - : Setzt die Kaskade auf den Wert der vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) zurück.
    - {{CSSXref("unset")}}
      - : Wirkt als `inherit` oder `initial`, abhängig davon, ob die Eigenschaft vererbt wird oder nicht.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : Ein benutzerdefinierter Bezeichner, zum Beispiel der mit der {{cssxref("grid-area")}}-Eigenschaft zugewiesene Name.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : Ein `<custom-ident>` mit der zusätzlichen Einschränkung, dass er mit zwei Bindestrichen beginnen muss, zum Beispiel bei [CSS Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, wie sie beispielsweise bei einem Wert der {{cssxref("content")}}-Eigenschaft verwendet wird.
- {{cssxref("url_value", "&lt;url&gt;")}}
  - : Ein Verweis auf eine Ressource, zum Beispiel als Wert von {{cssxref("background-image")}}.

## Numerische Datentypen

Diese Datentypen werden verwendet, um Mengen, Indizes und Positionen anzugeben. Die meisten dieser Typen sind im CSS-Werte- und Einheiten-Modul definiert, jedoch werden zusätzliche Typen in anderen Modulen beschrieben, wo sie allein für diese Spezifikation spezifisch sind — zum Beispiel die `fr`-Einheit im [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul.

- {{cssxref("&lt;integer&gt;")}}
  - : Eine oder mehrere Dezimaleinheiten von 0 bis 9.
- {{cssxref("&lt;number&gt;")}}
  - : Reelle Zahlen, die ebenfalls eine gebrochene Komponente haben können, zum Beispiel 1 oder 1,34.
- {{cssxref("&lt;dimension&gt;")}}
  - : Eine Zahl mit einer angehängten Einheit, zum Beispiel 23px oder 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Zahl mit einem angehängten Prozentzeichen, zum Beispiel 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : Ein Verhältnis, geschrieben mit der Syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : Eine flexible Länge, eingeführt für das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), geschrieben als `<number>` mit der angehängten `fr`-Einheit und verwendet für die Größenbestimmung der Gitternetzspur.

## Mengen

Diese Typen werden verwendet, um Entfernungen und andere Mengen anzugeben.

- {{cssxref("&lt;length&gt;")}}
  - : Längen sind ein `<dimension>` und beziehen sich auf Entfernungen.
- {{cssxref("&lt;angle&gt;")}}
  - : Winkel werden in Eigenschaften wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} verwendet und sind ein `<dimension>` mit einer der Einheiten `deg`, `grad`, `rad` oder `turn`.
- {{cssxref("&lt;time&gt;")}}
  - : Zeiteinheiten sind ein `<dimension>` mit einer Einheit von `s` oder `ms`.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequenzen sind ein `<dimension>` mit einer Einheitenkennung von `Hz` oder `kHz`.
- {{cssxref("&lt;resolution&gt;")}}
  - : Ist ein `<dimension>` mit einer Einheitenkennung von `dpi`, `dpcm`, `dppx` oder `x`.

## Kombinationen von Typen

Einige CSS-Eigenschaften können eine Dimension oder einen Prozentwert annehmen. In diesem Fall wird der Prozentwert auf eine Menge aufgelöst, die der erlaubten Dimension entspricht. Eigenschaften, die zusätzlich zu einer Dimension einen Prozentwert akzeptieren können, verwenden einen der unten aufgeführten Typen.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : Ein Typ, der eine Länge oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : Ein Typ, der eine Frequenz oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : Ein Typ, der einen Winkel oder einen Prozentwert als Wert akzeptieren kann.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : Ein Typ, der eine Zeit oder einen Prozentwert als Wert akzeptieren kann.

## Farbe

Das [CSS-Farb](/de/docs/Web/CSS/CSS_colors)-Modul definiert den {{cssxref("&lt;color&gt;")}}-Datentyp sowie andere Typen, die sich auf Farbe in CSS beziehen.

- {{cssxref("&lt;color&gt;")}}
  - : Angegeben als Schlüsselwort oder numerischer Farbwert.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Gibt die Transparenz einer Farbe an. Kann ein `<number>` sein, wobei 0 vollständig transparent und 1 vollständig undurchsichtig ist, oder ein `<percentage>`, wobei 0% vollständig transparent und 100% vollständig undurchsichtig sind.
- {{cssxref("&lt;hue&gt;")}}
  - : Gibt den `<angle>` an, mit einer Einheitenkennung von `deg`, `grad`, `rad` oder `turn`, oder eine einheitenlose `<number>`, die als `deg` interpretiert wird, des {{Glossary("color_wheel", "Farbkreises")}}, der spezifisch ist für die `<absolute-color-functions>`, dessen Bestandteil es ist.

## Bilder

Das [CSS-Bilder](/de/docs/Web/CSS/CSS_images)-Modul definiert die Datentypen, die sich mit Bildern befassen, einschließlich Farbverläufen.

- {{cssxref("&lt;image&gt;")}}
  - : Ein URL-Verweis auf ein Bild oder einen Farbverlauf.
- `<color-stop-list>`
  - : Eine Liste aus zwei oder mehr Farbstopps mit optionalen Übergangsinformationen unter Verwendung eines Farbhinweises.
- `<linear-color-stop>`
  - : Eine `<color>` und eine `<length-percentage>`, um den Farbpunkt für diesen Teil des Verlaufs anzuzeigen.
- `<linear-color-hint>`
  - : Eine `<length-percentage>`, um anzuzeigen, wie die Farbe interpoliert.
- `<ending-shape>`
  - : Wird für radiale Farbverläufe verwendet; kann einen Schlüsselwortwert von `circle` oder `ellipse` haben.
- `<size>`
  - : Bestimmt die Größe der abschließenden Form des radialen Farbverlaufs. Dies akzeptiert einen Wert eines Schlüsselworts oder eines `<length>`, aber keinen Prozentsatz.

## 2D-Positionierung

Der {{cssxref("&lt;position&gt;")}}-Datentyp wird wie für die {{cssxref("&lt;background-position&gt;")}}-Eigenschaft definiert interpretiert.

- {{cssxref("&lt;position&gt;")}}
  - : Definiert die Position eines Objektbereichs. Akzeptiert einen Schlüsselwortwert wie `top` oder `left` oder ein `<length-percentage>`.

## Berechnungsdatentypen

Diese Datentypen werden in [CSS-Mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions)-Berechnungen verwendet.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Additions- (`+`) und Subtraktions- (`-`) Operatoren. Dieser Datentyp erfordert, dass beide Werte Einheiten haben.
- {{cssxref("&lt;calc-product&gt;")}}
  - : Eine Berechnung, die eine Folge von Berechnungswerten ist, durchsetzt mit Multiplikations- (`*`) und Division- (`/`) Operatoren. Beim Multiplizieren muss ein Wert einheitenlos sein. Bei der Division muss der zweite Wert einheitenlos sein.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Definiert akzeptierte Werte für Berechnungen, Werte wie {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-keyword&gt;")}} oder verschachtelte {{cssxref("&lt;calc-sum&gt;")}} Berechnungen.
- {{cssxref("&lt;calc-keyword&gt;")}}
  - : Definiert eine Anzahl von CSS-Schlüsselwörtern, die numerische Konstanten darstellen, wie `e` und `π`, die in CSS-Mathematischen Funktionen verwendet werden können.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [CSS-funktionale Notationen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)
