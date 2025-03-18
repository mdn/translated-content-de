---
title: Inhaltstyp
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibung ihrer Verwendung auf.

## Winkel

- \<angle>

  - : Winkel werden auf zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gradian und `rad` Radiant bedeutet.

    Für in CSS2 definierte Eigenschaften muss eine Winkel-Einheit angegeben werden. Bei Winkelwerten in SVG-spezifischen Eigenschaften und den entsprechenden Präsentationsattributen ist die Angabe der Winkel-Einheit optional. Sofern nicht angegeben, wird der Winkelwert als Grad angenommen. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder CSS2 definiert, muss der Winkelbezeichner, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitenbezeichner in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG-DOM werden \<angle>-Werte mithilfe von [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekten dargestellt.

## Anything

- \<anything>

  - : Der Basistyp \<anything> ist eine Sequenz von null oder mehr Zeichen. Genauer gesagt:

    ```plain
    anything ::= Char*
    ```

    wobei Char jedes gültige, nicht-kontrollierende Unicode-Zeichen ist.

## Clock-value

- \<clock-value>

  - : Clock-Werte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax) Spezifikation. Die Grammatik für Clock-Werte wird hier wiederholt:

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

    Bei `Timecount`-Werten ist das Standardmetrische Suffix `s` (für Sekunden). Eingebettete Leerzeichen sind in Clock-Werten nicht erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für gültige Clock-Werte:

    - Volle Clock-Werte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Partielle Clock-Werte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Timecount-Werte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind nur (im Basis-10) Fließkomma-Definitionen von Sekunden. Beispielsweise:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>

  - : Der Basistyp \<color> ist eine mit CSS2 kompatible Spezifikation einer Farbe im sRGB-Farbraum. \<color> gilt für die Nutzung des {{SVGAttr("color")}} Attributs in SVG und ist ein Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG entspricht genau der CSS-Definition {{cssxref("color_value", "&lt;color&gt;")}}.

## Koordinate

- \<coordinate>

  - : Eine \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten) darstellt. Ihre Syntax entspricht der des [\<length>](#länge).

    Im SVG-DOM wird eine \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>

  - : Frequenzwerte werden mit akustischen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert eine [\<number>](#nummer), gefolgt von einem Frequenzeinheit-Bezeichner. Die Frequenz-Einheitsbezeichner sind:

    - `Hz`: Hertz
    - `kHz`: Kilo Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis entspricht der [CSS-URI](/de/docs/Web/CSS/url_value).

## Ganzzahl

- \<integer>

  - : Eine \<integer> wird als ein optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Sofern das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht-negativ.

    Sofern nicht anders angegeben, umfasst der Bereich für eine \<integer> mindestens `-2147483648` bis `2147483647`.

    Im SVG-DOM wird eine \<integer> als `number` oder [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalized **R**esource **I**dentifier.

    Im Internet werden Ressourcen mit _IRIs_ (Internationalisierte Ressourcenkennungen) identifiziert. Beispielsweise könnte eine SVG-Datei namens `someDrawing.svg`, die unter `http://example.com` gefunden wird, den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments adressieren, indem ein _IRI_-Fragmentbezeichner als Teil des _IRI_ aufgenommen wird. Ein _IRI_, das einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen und dem _IRI_-Fragmentbezeichner. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element mit der ID `Lamppost` innerhalb der Datei `someDrawing.svg` anzugeben:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im Attribut {{SVGAttr("href")}} verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenketten als Inhalt. Um eine Textzeichenkette von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation begrenzt ist. Hinweis: Aus historischen Gründen sind die Begrenzer `url(` und `)`, um mit den CSS-Spezifikationen kompatibel zu sein. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG macht extensiven Gebrauch von _IRI_-Verweisen, sowohl absolut als auch relativ, auf andere Objekte. Beispielsweise, um ein Rechteck mit einem linearen Farbverlauf zu füllen, definieren Sie zuerst ein {{SVGElement("linearGradient")}} Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Anschließend verweisen Sie auf den linearen Farbverlauf als den Wert des {{SVGAttr("fill")}} Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Verweisen:

    - **lokale _IRI_-Verweise**, bei denen der IRI-Verweis kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur einen Fragmentbezeichner enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Verweise**, bei denen der IRI-Verweis ein \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation von IRI-Verweisen in SVG siehe [SVG 1.1 (2. Auflage): IRI-Verweise](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Länge

- \<length>

  - : Eine Länge ist eine Distanzmessung, angegeben als Zahl zusammen mit einer Einheit. Die SVG2-Spezifikation stimmt mit den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und Werte überein. Eine Längeneinheit muss angegeben werden, und die Werte der Längeneinheiten sind nicht groß- und kleinschreibungssensitiv. Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für die in SVG1.1 definierten SVG-spezifischen Eigenschaften und ihre entsprechenden Präsentationsattribute sind die Einheitenbezeichner in Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Distanz im aktuellen Benutzerkoordinatensystem dar. Längenbezeichner müssen in Kleinbuchstaben geschrieben werden, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, egal ob sie in SVG oder in CSS definiert sind. Diese Groß- und Kleinschreibungsempfindlichkeit wird in SVG2 gelockert, um mit CSS übereinzustimmen.

    Beachten Sie, dass die Nicht-Eigenschaftsdefinition von \<length> auch ein Prozentzeichen (`%`) als Einheit erlaubt.
    Die Bedeutung eines prozentualen Längenwertes hängt von dem Attribut ab, für das der prozentuale Längenwert angegeben wurde. Zwei häufige Fälle sind:

    - wenn ein prozentualer Längenwert einen Prozentsatz der Ansichtsbreite oder -höhe darstellt
    - wenn ein prozentualer Längenwert einen Prozentsatz der Begrenzungsboxbreite oder -höhe eines gegebenen Objekts darstellt.

    Im SVG-DOM werden \<length>-Werte mit [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekten dargestellt.

## Liste von Ts

- \<list-of-Ts>

  - : (Wo _T_ ein Typ ist.) Eine Liste besteht aus einer getrennten Sequenz von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen in den XML-Attributen von SVG entweder durch Kommas (mit optionalem Leerzeichen davor oder danach) oder durch Leerzeichen getrennt werden.

    Leerzeichen in Listen wird definiert als eines oder mehrere der folgenden aufeinander folgenden Zeichen: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), und "form-feed" (`U+000C`).

    Das Folgende ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts> Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG-DOM werden Werte eines \<list-of-Ts> Typs durch eine schnittstellenspezifische Darstellung für den speziellen Typ _T_ repräsentiert. Zum Beispiel wird eine \<list-of-lengths> im SVG-DOM unter Verwendung eines [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekts dargestellt.

## Name

- \<name>

  - : Ein Name, der eine Zeichenkette ist, bei der wenige Zeichen von syntaktischer Bedeutung ausgeschlossen sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Nummer

- \<number>

  - : Reelle Zahlen werden auf zwei Arten angegeben. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax entspricht der Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen prägnanter spezifizieren zu können:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG-DOM wird eine \<number> als Float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Nummer-optional-Nummer

- \<number-optional-number>

  - : Ein Paar von \<number>, bei dem die zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> unter Verwendung eines Paares von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Opazitätswert

- \<opacity-value>
  - : Die Opazität der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als [\<number>](#nummer). Alle Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig opak) werden auf diesen Bereich begrenzt.

## Farbe

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die beim Füllen oder Umrahmen eines bestimmten Grafikelements verwendet wird.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` ermöglichen die Vererbung von Werten in [marker](/de/docs/Web/SVG/Reference/Element/marker) und [use](/de/docs/Web/SVG/Reference/Element/use) Elementen.

## Prozent

- \<percentage>

  - : Prozentsätze werden als Zahl gefolgt von einem Prozentzeichen `%` angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut angegeben wird, das nicht auch ein Präsentationsattribut ist.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel eine Länge). Jedes Attribut oder jede Eigenschaft, die Prozentwerte zulässt, definiert auch die Referenz-Distanzmessung, auf die sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> unter Verwendung eines [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekts dargestellt.

## Zeit

- \<time>

  - : Ein Zeitwert ist ein \<number>, dem unmittelbar ein Zeitbezeichner folgt. Die Zeitbezeichner sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen zu spezifizieren. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der {SVGAttr("transform")}} Attributdefinition gegeben.

    Im SVG-DOM wird ein \<transform-list> Wert unter Verwendung eines [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekts dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von {{Glossary("Unicode", "Unicode")}}-Zeichen, die eine Adresse zu einer internen oder externen Ressource bildet.

    Vor SVG 2 wurde der eingeschränktere [IRI](#iri)-Inhaltstyp stattdessen verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
