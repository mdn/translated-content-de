---
title: Inhaltstyp
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{SVGRef}}

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen, wofür sie verwendet werden, auf.

## Winkel

- \<angle>

  - : Winkel werden in zwei Formen angegeben. Wird ein \<angle> im Wert einer Eigenschaft in einem Stylesheet verwendet, wird es wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gon und `rad` Radianten anzeigt.

    Für Eigenschaften, die in CSS2 definiert sind, muss eine Winkel-Einheitsbezeichnung angegeben werden. Für Winkelangaben in SVG-spezifischen Eigenschaften und deren entsprechenden Präsentationsattributen ist die Einheitsbezeichnung optional. Wenn sie nicht angegeben wird, wird der Winkelwert in Grad angenommen. In Präsentationsattributen für alle Eigenschaften, ob sie in SVG1.1 oder CSS2 definiert sind, muss die Einheitsbezeichnung, falls angegeben, in Kleinbuchstaben geschrieben werden.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitsbezeichnungen in solchen \<angle>-Werten müssen in Kleinbuchstaben geschrieben werden.

    Im SVG-DOM werden \<angle>-Werte mithilfe von [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Objekten dargestellt.

## Beliebige Werte

- \<anything>

  - : Der grundlegende Typ \<anything> ist eine Sequenz aus null oder mehr Zeichen. Genauer gesagt:

    ```plain
    anything ::= Char*
    ```

    wobei Char jedes gültige nicht-kontrollierende Unicode-Zeichen ist.

## Zeitwert

- \<clock-value>

  - : Zeitwerte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax)-Spezifikation. Die Grammatik für Zeitwerte wird hier wiederholt:

    ```plain
    Clock-val         ::= Full-clock-val | Partial-clock-val
                          | Timecount-val
    Full-clock-val    ::= Hours ":" Minutes ":" Seconds ("." Fraction)?
    Partial-clock-val ::= Minutes ":" Seconds ("." Fraction)?
    Timecount-val     ::= Timecount ("." Fraction)? (Metric)?
    Metric            ::= "h" | "min" | "s" | "ms"
    Hours             ::= DIGIT+; any positive number
    Minutes           ::= 2DIGIT; range from 00 to 59
    Seconds           ::= 2DIGIT; range from 00 to 59
    Fraction          ::= DIGIT+
    Timecount         ::= DIGIT+
    2DIGIT            ::= DIGIT DIGIT
    DIGIT             ::= [0-9]
    ```

    Für `Timecount`-Werte ist die Standardmetrik-Suffixangabe `s` (für Sekunden). In Zeitwerten ist kein eingebettetes Leerzeichen erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Beispiele für gültige Zeitwerte:

    - Vollständige Zeitwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilweise Zeitwerte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10.5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitzählwerte:
      - `3.2h` = 3.2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind einfach (auf Basis 10) Gleitkommazahlen in Sekunden. Zum Beispiel:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>

  - : Der grundlegende Typ \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für die Verwendung des {{SVGAttr("color")}}-Attributs in SVG und ist Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG entspricht genau der Definition im CSS {{cssxref("color_value", "&lt;color&gt;")}}.

## Koordinate

- \<coordinate>

  - : Eine \<coordinate> ist eine Länge im vom Benutzer definierten Koordinatensystem, die den angegebenen Abstand vom Ursprung des Koordinatensystems entlang der relevanten Achse darstellt (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten). Ihre Syntax ist identisch mit der von [\<length>](#länge).

    Im SVG-DOM wird eine \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>

  - : Frequenzwerte werden mit Hörbaren-Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert eine [\<number>](#zahl), gefolgt von einer Frequenzeinheit. Die Frequenzeinheiten sind:

    - `Hz`: Hertz
    - `kHz`: Kilohertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für eine Referenz. Die Syntax dieser Referenz entspricht der Syntax des [CSS URI](/de/docs/Web/CSS/url_value).

## Ganzzahl

- \<integer>

  - : Eine \<integer> wird definiert als ein optionales Vorzeichenzeichen (`+` oder `-`), gefolgt von einer oder mehreren Ziffern `0` bis `9`:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht negativ.

    Sofern für ein bestimmtes Attribut oder eine Eigenschaft nichts anderes angegeben ist, umfasst der Bereich für eine \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Im SVG-DOM wird eine \<integer> als `number` oder als [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen durch _IRIs_ (Internationalisierte Ressourcen-Identifikatoren) identifiziert. Zum Beispiel könnte eine SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element in einem XML-Dokument ansprechen, indem ein _IRI_-Fragmentbezeichner als Teil des _IRI_ inkludiert wird. Ein _IRI_, das einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Zum Beispiel kann folgender _IRI_ verwendet werden, um das Element mit der ID `Lamppost` innerhalb der Datei `someDrawing.svg` zu spezifizieren:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Um eine Textzeichenfolge von einem relativen _IRI_ zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation abgegrenzt wird. Hinweis: Aus historischen Gründen sind die Begrenzungszeichen `url(` und `)`, um mit den CSS-Spezifikationen kompatibel zu sein. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG verwendet umfangreich _IRI_-Referenzen, sowohl absolute als auch relative, auf andere Objekte. Zum Beispiel, um ein Rechteck mit einem linearen Verlauf zu füllen, definiert man zunächst ein {{SVGElement("linearGradient")}}-Element und gibt ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Anschließend referenziert man den linearen Verlauf als Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Referenzen:

    - **Lokale _IRI_-Referenzen**, bei denen die _IRI_-Referenz keinen \<absoluteIRI> oder \<relativeIRI> enthält und daher nur einen Fragmentbezeichner (z. B. `#<elementID>` oder `#xpointer(id<elementID>)`) enthält.
    - **Nicht-lokale _IRI_-Referenzen**, bei denen die _IRI_-Referenz einen \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation der _IRI_-Referenzen in SVG siehe [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Länge

- \<length>

  - : Eine Länge ist eine Maßangabe der Entfernung, angegeben als Zahl zusammen mit einer Einheit.
    Die SVG2-Spezifikation richtet sich nach den CSS {{cssxref("length")}} Datentypen und Einheiten für die Syntax und Werte der Attribute.
    Eine Einheitsangabe muss bereitgestellt werden, und die Werte der Einheitensymbole sind nicht case-sensitiv.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und deren entsprechenden Präsentationsattribute, sind die Einheitenangaben in Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Entfernung im aktuellen Benutzerkoordinatensystem dar. Einheitsangaben müssen in Kleinbuchstaben geschrieben werden, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, ob sie in SVG oder CSS definiert sind. Diese Case-Sensitivity wurde in SVG2 gelockert, um mit CSS übereinzustimmen.

    Beachten Sie, dass die nicht-Eigenschaftsdefinition von \<length> auch eine Prozentangabe (`%`) als Einheit erlaubt.
    Die Bedeutung eines prozentualen Längenwerts hängt vom Attribut ab, für das der prozentuale Längenwert angegeben wurde. Zwei häufige Fälle sind:

    - wenn ein prozentualer Längenwert einen Prozentsatz der Ansichtsfensterbreite oder -höhe darstellt
    - wenn ein prozentualer Längenwert einen Prozentsatz der Begrenzungsrahmenbreite oder -höhe eines gegebenen Objekts darstellt.

    Im SVG-DOM werden \<length>-Werte als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekte dargestellt.

## Liste von Ts

- \<list-of-Ts>

  - : (Dabei ist _T_ ein Typ.) Eine Liste besteht aus einer getrennten Sequenz von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen innerhalb von SVGs XML-Attributen entweder durch Kommas (mit optionalem Leerzeichen davor oder danach) oder Leerzeichen getrennt sein.

    Leerzeichen in Listen werden als ein oder mehrere der folgenden aufeinanderfolgenden Zeichen definiert: "Leerzeichen" (`U+0020`), "Tabulator" (`U+0009`), "Zeilenumbruch" (`U+000A`), "Wagenrücklauf" (`U+000D`), und "Seitenvorschub" (`U+000C`).

    Folgendes ist ein Template für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG-DOM werden Werte eines \<list-of-Ts>-Typs durch ein spezifisches Interface für den jeweiligen Typ _T_ repräsentiert. Zum Beispiel wird eine \<list-of-lengths> im SVG-DOM mithilfe eines [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Objekts dargestellt.

## Name

- \<name>

  - : Ein Name ist eine Zeichenkette, bei der einige Zeichen mit syntaktischer Bedeutung ausgeschlossen sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Zahl

- \<number>

  - : Reelle Zahlen werden in zwei Formen angegeben. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax entspricht der Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn eine Zahl in einem SVG-Attribut verwendet wird, wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen effizienter anzugeben:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG-DOM wird ein \<number> als Float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Optionale Zahl-Paare

- \<number-optional-number>

  - : Ein Paar von \<number>, wobei die zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> durch ein Paar von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Opazitätswert

- \<opacity-value>
  - : Die Deckkraft der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als [\<number>](#zahl). Werte außerhalb des Bereichs von `0.0` (vollständig transparent) bis `1.0` (vollständig deckend) werden auf diesen Bereich begrenzt.

## Farbe/Anstrich

- \<paint>

  - : Die Werte der Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe/Anstrich, die für das Füllen oder Umranden eines grafischen Elements verwendet werden soll.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` erlauben das Vererben von Werten in [marker](/de/docs/Web/SVG/Element/marker)- und [use](/de/docs/Web/SVG/Element/use)-Elementen.

## Prozentsatz

- \<percentage>

  - : Prozentangaben werden als Zahl gefolgt von einem `%`-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut, das nicht auch ein Präsentationsattribut ist, angegeben wird.

    Prozentwerte beziehen sich immer auf einen anderen Wert (z. B. eine Länge). Jedes Attribut oder jede Eigenschaft, die Prozentsätze erlaubt, definiert auch die Referenzmaßeinheit, auf die sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> mithilfe eines [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekts dargestellt.

## Zeit

- \<time>

  - : Ein Zeitwert ist eine \<number>, gefolgt von einer Zeiteinheit. Die Zeiteinheiten sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatentransformationen zu spezifizieren. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> finden Sie in der Definition des Attributs {{SVGAttr("transform")}}.

    Im SVG-DOM wird ein \<transform-list>-Wert mithilfe eines [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Objekts dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von {{Glossary("Unicode", "Unicode")}}-Zeichen, die eine Adresse zu einer internen oder externen Ressource bilden.

    Vor SVG 2 wurde der stärker eingeschränkte [IRI](#iri)-Inhaltstyp verwendet, da die URL-Spezifikation noch nicht standardisiert war.
