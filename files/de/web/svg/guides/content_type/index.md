---
title: Inhaltstyp
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen ihrer Verwendungszwecke auf.

## Winkel

- \<angle>

  - : Winkel werden auf zwei Arten spezifiziert. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gon und `rad` Bogenmaß anzeigt.

    Für in CSS2 definierte Eigenschaften muss ein Winkelkennzeichner angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und ihren entsprechenden Präsentationsattributen ist der Winkelkennzeichner optional. Wird er nicht angegeben, wird der Winkelwert in Grad angenommen. In Präsentationsattributen für alle Eigenschaften, unabhängig davon, ob sie in SVG1.1 oder CSS2 definiert sind, muss der Winkelkennzeichner, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Kennzeichner in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG-DOM werden \<angle>-Werte durch [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekte dargestellt.

## Irgendetwas

- \<anything>

  - : Der Basistyp \<anything> ist eine Folge von null oder mehr Zeichen. Genauer gesagt:

    ```plain
    anything ::= Char*
    ```

    wobei Char ein gültiges nicht-Steuerzeichen in Unicode ist.

## Uhrzeit-Wert

- \<clock-value>

  - : Uhrzeit-Werte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax)-Spezifikation. Die Grammatik für Uhrzeit-Werte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das Standardeinheitszeichen `s` (für Sekunden). Eingebettete Leerzeichen sind in Uhrzeit-Werten nicht erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für gültige Uhrzeit-Werte:

    - Volle Uhrzeit-Werte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilweise Uhrzeit-Werte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Timecount-Werte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind nur (Basis 10) Fließkomma-Definitionen von Sekunden. Daher:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>

  - : Der Basistyp \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> bezieht sich auf die Verwendung des {{SVGAttr("color")}} Attributs in SVG und ist Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG ist exakt dieselbe wie die CSS {{cssxref("color_value", "&lt;color&gt;")}} Definition.

## Koordinate

- \<coordinate>

  - : Eine \<coordinate> ist eine Länge im Nutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Nutzerkoordinatensystems entlang der relevanten Achse darstellt (die x-Achse für X-Koordinaten, die y-Achse für Y-Koordinaten). Ihre Syntax ist dieselbe wie die für [\<length>](#länge).

    Innerhalb des SVG-DOM wird eine \<coordinate> als ein [`SVGLength`](/de/docs/Web/API/SVGLength) oder ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>

  - : Frequenzwerte werden mit akustischen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#zahl) direkt gefolgt von einem Frequenzeinheitskennzeichner. Die Kennzeichner für Frequenzeinheiten sind:

    - `Hz`: Hertz
    - `kHz`: Kiloherz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis entspricht der [CSS URI](/de/docs/Web/CSS/url_value).

## Ganzzahl

- \<integer>

  - : Eine \<integer> wird als ein optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Ist das Vorzeichenzeichen nicht vorhanden, ist die Zahl nicht negativ.

    Sofern nicht anders für ein bestimmtes Attribut oder eine Eigenschaft angegeben, umfasst der Bereich für eine \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Innerhalb des SVG-DOM wird eine \<integer> als `number` oder ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen mithilfe von _IRIs_ (Internationalized Resource Identifiers) identifiziert. Beispielsweise könnte eine SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch eine bestimmte Komponente innerhalb eines XML-Dokuments adressieren, indem er einen _IRI_-Fragmentbezeichner als Teil des _IRI_ enthält. Ein _IRI_, der einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element anzugeben, dessen ID `Lamppost` innerhalb der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}} Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Um eine Textzeichenfolge von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation abgegrenzt ist. Hinweis: Aus historischen Gründen sind die Trennzeichen `url(` und `)`, für die Kompatibilität mit den CSS-Spezifikationen. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG verwendet umfassend _IRI_-Verweise, sowohl absolut als auch relativ, auf andere Objekte. Beispielsweise um ein Rechteck mit einem linear verlaufenden Übergang zu füllen, definieren Sie zunächst ein {{SVGElement("linearGradient")}} Element und geben ihm eine ID, etwa so:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie verweisen dann auf den Verlauf als Wert des {{SVGAttr("fill")}} Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Verweisen:

    - **lokale _IRI_-Verweise**, bei denen der IRI-Verweis kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur einen Fragmentbezeichner (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`) enthält.
    - **nicht-lokale _IRI_-Verweise**, bei denen der _IRI_-Verweis ein \<absoluteIRI> oder \<relativeIRI> enthält.

    IRI ist jetzt ein zurückgezogener Begriff in SVG 2, ersetzt durch den universellen [URL](#url) Typ.

## Länge

- \<length>

  - : Eine Länge ist eine Distanzmessung, angegeben als Zahl zusammen mit einer Einheit.
    Die Spezifikation von SVG2 stimmt mit den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und -werte überein.
    Ein Längeneinheitskennzeichner muss angegeben sein und die Werte der Längeneinheitskennzeichner sind nicht sensibel gegenüber der Groß- und Kleinschreibung.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert wurden, und ihre entsprechenden Präsentationsattribute sind die Einheitskennzeichner in Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Distanz im aktuellen Nutzerkoordinatensystem dar. Längenkennzeichner müssen in Kleinbuchstaben stehen, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, unabhängig davon, ob sie in SVG oder CSS definiert sind. Diese Groß-/Kleinschreibungsempfindlichkeit wurde in SVG2 gelockert, um sich mit CSS abzustimmen.

    Beachten Sie, dass die Nicht-Eigenschafts-Definition von \<length> auch einen Prozentsatz (`%`) Einheitskennzeichner zulässt.
    Die Bedeutung eines Prozentlängenwerts hängt vom Attribut ab, für das der Prozentlängenwert spezifiziert wurde. Zwei gängige Fälle sind:

    - wenn ein Prozentlängenwert einen Prozentsatz der Viewport-Breite oder -Höhe darstellt
    - wenn ein Prozentlängenwert einen Prozentsatz der Begrenzungsbox-Breite oder -Höhe eines bestimmten Objekts darstellt.

    Im SVG-DOM werden \<length>-Werte durch [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekte dargestellt.

## Liste von Ts

- \<list-of-Ts>

  - : (Wo _T_ ein bestimmter Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht explizit anders beschrieben, können Listen in SVGs XML-Attributen entweder komma-getrennt (mit optionalem Leerzeichen davor oder danach) oder leerzeichengetrennt sein.

    Leerzeichen in Listen sind definiert als eines oder mehrere der folgenden aufeinanderfolgenden Zeichen: „Leerzeichen“ (`U+0020`), „Tabulator“ (`U+0009`), „Zeilenumbruch“ (`U+000A`), „Wagenrücklauf“ (`U+000D`) und „Form Feed“ (`U+000C`).

    Folgendes ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts> Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Innerhalb des SVG-DOM werden Werte eines \<list-of-Ts> Typs durch eine spezifische Schnittstelle für den jeweiligen Typ _T_ dargestellt. Beispielsweise wird eine \<list-of-lengths> im SVG-DOM durch ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekt dargestellt.

## Name

- \<name>

  - : Ein Name, der eine Zeichenfolge ist, bei der einige Zeichen von syntaktischer Bedeutung nicht erlaubt sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Zahl

- \<number>

  - : Reelle Zahlen werden auf zwei Arten spezifiziert. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax entspricht der Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen prägnanter anzugeben:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Innerhalb des SVG-DOM wird eine \<number> als Float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Zahl-optionale-Zahl

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei die zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> durch ein Paar von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Deckkraftwert

- \<opacity-value>
  - : Die Deckkraft der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als [\<number>](#zahl). Alle Werte außerhalb des Bereichs von `0.0` (vollständig transparent) bis `1.0` (vollständig opak) werden auf diesen Bereich beschränkt.

## Lackieren

- \<paint>

  - : Die Werte für Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren den Lacktyp, der beim Füllen oder Zeichnen eines grafischen Elements verwendet wird.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` erlauben das Erben von Werten in [marker](/de/docs/Web/SVG/Reference/Element/marker) und [use](/de/docs/Web/SVG/Reference/Element/use) Elementen.

## Prozentsatz

- \<percentage>

  - : Prozentsätze werden als eine Zahl gefolgt von einem `%`-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut, das nicht auch ein Präsentationsattribut ist, angegeben wird.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel einer Länge). Jedes Attribut oder jede Eigenschaft, das/die Prozentsätze erlaubt, definiert auch die Referenzentfernungsmessung, auf die sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> durch ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt dargestellt.

## Zeit

- \<time>
  - : Ein Zeitwert ist ein \<number>, das direkt von einem Zeit-Einheitskennzeichner gefolgt wird. Die Zeit-Einheitskennzeichner sind:
    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen zu spezifizieren. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der {{SVGAttr("transform")}} Attributdefinition gegeben.

    Im SVG-DOM wird ein \<transform-list>-Wert durch ein [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekt dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Folge von {{Glossary("Unicode", "Unicode")}} Zeichen, die eine Adresse zu einer internen oder externen Ressource bildet.

    Vor SVG 2 wurde der stärker eingeschränkte [IRI](#iri) Inhaltstyp stattdessen verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
