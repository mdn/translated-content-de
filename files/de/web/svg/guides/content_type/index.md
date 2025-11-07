---
title: Inhaltstyp
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen ihrer Verwendungszwecke auf.

## Winkel

- \<angle>
  - : Winkel werden auf zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gon und `rad` Radianten angibt.

    Für in CSS2 definierte Eigenschaften muss ein Winkel-Einheitenbezeichner angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und deren zugehörigen Präsentationsattributen ist der Winkel-Einheitenbezeichner optional. Wird er nicht angegeben, wird der Winkelwert als Grad angenommen. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder CSS2 definiert, muss der Winkelbezeichner, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitenbezeichner in solchen \<angle> Werten müssen in Kleinbuchstaben sein.

    Im SVG DOM werden \<angle> Werte mit [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekten dargestellt.

## Irgendetwas

- \<anything>
  - : Der Basistyp \<anything> ist eine Sequenz von null oder mehr Zeichen. Genauer gesagt:

    ```plain
    anything ::= Char*
    ```

    wobei Char ein beliebiges gültiges nicht-steuerndes Unicode-Zeichen ist.

## Zeitwert

- \<clock-value>
  - : Zeitwerte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax) Spezifikation. Die Grammatik für Zeitwerte wird hier wiederholt:

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

    Für `Timecount` Werte ist das Standard-Metriksuffix `s` (für Sekunden). In Zeitwerten sind keine eingebetteten Leerzeichen erlaubt, obwohl vorangestellte und nachgestellte Leerzeichen ignoriert werden.

    Folgende Beispiele zeigen gültige Zeitwerte:
    - Volle Zeitwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Partielle Zeitwerte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwerte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind nur (Basis 10) Gleitkommadefinitionen von Sekunden. Somit:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>
  - : Der Basistyp \<color> ist eine mit CSS2 kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> bezieht sich auf SVGs Verwendung des {{SVGAttr("color")}} Attributs und ist ein Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG entspricht exakt der CSS {{cssxref("color_value", "&lt;color&gt;")}} Definition.

## Koordinate

- \<coordinate>
  - : Eine \<coordinate> ist eine Länge im Nutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Nutzerkoordinatensystems entlang der relevanten Achse (die x-Achse für X-Koordinaten, die y-Achse für Y-Koordinaten) darstellt. Ihre Syntax ist dieselbe wie die von [\<length>](#länge).

    Im SVG DOM wird eine \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>
  - : Frequenzwerte werden mit auditiven Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#zahl) unmittelbar gefolgt von einem Frequenzeinheiten-Bezeichner. Die Frequenzeinheiten-Bezeichner sind:
    - `Hz`: Hertz
    - `kHz`: KiloHertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis entspricht der [CSS URI](/de/docs/Web/CSS/Reference/Values/url_value).

## Ganzzahl

- \<integer>
  - : Eine \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht negativ.

    Sofern nicht anders für ein bestimmtes Attribut oder eine Eigenschaft angegeben, umfasst der Bereich für eine \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Im SVG DOM wird eine \<integer> als `number` oder als [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>
  - : Ein **I**nternationalisierter **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen mit _IRIs_ (Internationalisierte Ressourcenidentifikatoren) identifiziert. Ein SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, könnte zum Beispiel den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments adressieren, indem ein _IRI_ Fragmentidentifikator als Teil des _IRI_ eingeschlossen wird. Ein _IRI_, das ein _IRI_ Fragmentidentifikator einschließt, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#` Zeichen und dem _IRI_ Fragmentidentifikator. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element mit der ID `Lamppost` innerhalb der Datei `someDrawing.svg` zu spezifizieren:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}} Attribut verwendet. Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Um eine Textzeichenfolge von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, das mit einer funktionalen Notation abgegrenzt ist. Hinweis: Aus historischen Gründen sind die Begrenzungen `url(` und `)`, um die Kompatibilität mit den CSS-Spezifikationen zu gewährleisten. Die _FuncIRI_ Form wird in Präsentationsattributen verwendet.

    SVG macht umfangreichen Gebrauch von _IRI_-Verweisen, sowohl absoluten als auch relativen, auf andere Objekte. Beispielsweise, um ein Rechteck mit einem linearen Farbverlauf zu füllen, definieren Sie zuerst ein {{SVGElement("linearGradient")}} Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie verweisen dann auf den linearen Farbverlauf als Wert des {{SVGAttr("fill")}} Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Verweisen:
    - **Lokale _IRI_-Verweise**, bei denen der IRI-Verweis kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur ein Fragmentidentifikator enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **Nicht-lokale _IRI_-Verweise**, bei denen der _IRI_-Verweis ein \<absoluteIRI> oder \<relativeIRI> enthält.

    IRI ist jetzt ein veraltetes Konzept in SVG 2, ersetzt durch den universellen [URL](#url) Typ.

## Länge

- \<length>
  - : Eine Länge ist eine Distanzmessung, angegeben als Zahl zusammen mit einer Einheit.
    Die SVG2-Spezifikation stimmt mit den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attribusyntax und Werte überein.
    Ein Längeneinheiten-Bezeichner muss angegeben werden und die Werte der Längeneinheiten-Bezeichner sind nicht case-sensitiv.
    Die Syntax folgt der CSS `<length>` Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und deren entsprechenden Präsentationsattribute sind die Einheitenbezeichner in Werten optional. Wenn nicht angegeben, repräsentiert der Längenwert eine Distanz im aktuellen Benutzerkoordinatensystem. Längenbezeichner müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, ob sie in SVG oder CSS definiert sind. Diese Fall-Sensitivität wurde in SVG2 gelockert, um mit CSS übereinzustimmen.

    Beachten Sie, dass die Nicht-Eigenschaftsdefinition von \<length> auch einen Prozentsatz (`%`) Einheitenbezeichner erlaubt.
    Die Bedeutung eines prozentualen Längenwerts hängt vom Attribut ab, für das der prozentuale Längenwert angegeben wurde. Zwei übliche Fälle sind:
    - wenn ein prozentualer Längenwert einen Prozentsatz der Ansichtsfensterbreite oder -höhe darstellt
    - wenn ein prozentualer Längenwert einen Prozentsatz der Begrenzungsrahmenbreite oder -höhe eines bestimmten Objekts darstellt.

    Im SVG DOM werden \<length> Werte mit [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekten dargestellt.

## Liste von Ts

- \<list-of-Ts>
  - : (Wobei _T_ ein bestimmter Typ ist.) Eine Liste besteht aus einer getrennten Sequenz von Werten. Sofern nicht anders beschrieben, können Listen innerhalb von SVGs XML-Attributen entweder durch Kommas getrennt (mit optionalem Leerzeichen vor oder nach dem Komma) oder durch Leerzeichen getrennt sein.

    Leerzeichen in Listen wird als eines oder mehr der folgenden aufeinanderfolgenden Zeichen definiert: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`) und "form-feed" (`U+000C`).

    Folgendes ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts> Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG DOM werden Werte eines \<list-of-Ts> Typs durch ein auf den jeweiligen Typ _T_ spezifisches Interface dargestellt. Zum Beispiel wird eine \<list-of-lengths> im SVG DOM durch ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekt dargestellt.

## Name

- \<name>
  - : Ein Name, also eine Zeichenfolge, bei der einige Zeichen mit besonderer syntaktischer Bedeutung nicht erlaubt sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Zahl

- \<number>
  - : Reelle Zahlen werden auf eine von zwei Arten angegeben. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax ist dieselbe wie die Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um es zu ermöglichen, Zahlen mit großen Größenordnungen prägnanter anzugeben:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG DOM wird eine \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Zahl-optional-Zahl

- \<number-optional-number>
  - : Ein Paar von \<number>s, wobei der zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG DOM wird eine \<number-optional-number> als Paar von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Deckkraftwert

- \<opacity-value>
  - : Die Deckkraft der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt wird, als [\<number>](#zahl). Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig opak) werden auf diesen Bereich begrenzt.

## Farbe

- \<paint>
  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die beim Füllen oder Umranden eines grafischen Elements zu verwenden ist.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die `context-fill` und `context-stroke` Werte ermöglichen das Erben von Werten in [marker](/de/docs/Web/SVG/Reference/Element/marker) und [use](/de/docs/Web/SVG/Reference/Element/use) Elementen.

## Prozentsatz

- \<percentage>
  - : Prozentsätze werden als eine Zahl gefolgt von einem `%` Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribute, das nicht auch ein Präsentationsattribut ist, angegeben wird.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel einer Länge). Jedes Attribut oder jede Eigenschaft, die Prozentwerte zulässt, definiert auch die Referenzstreckenmessung, auf die sich der Prozentsatz bezieht.

    Im SVG DOM wird ein \<percentage> mit einem [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt dargestellt.

## Zeit

- \<time>
  - : Ein Zeitwert ist ein \<number>, unmittelbar gefolgt von einem Zeit-Einheiten-Bezeichner. Die Zeit-Einheiten-Bezeichner sind:
    - `ms`: Millisekunden
    - `s`: Sekunden

## Umwandlungsliste

- \<transform-list>
  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen anzugeben. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der {{SVGAttr("transform")}} Attributdefinition gegeben.

    Im SVG DOM wird ein \<transform-list> Wert mit einem [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekt dargestellt.

## URL

- URL
  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von {{Glossary("Unicode", "Unicode")}} Zeichen und bildet die Adresse zu einer internen oder externen Ressource.

    Vor SVG 2 wurde der eingeschränktere [IRI](#iri) Inhaltstyp anstelle einer URL verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
