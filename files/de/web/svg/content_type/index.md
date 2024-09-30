---
title: Content type
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen ihrer Verwendungszwecke auf.

## Angle

- \<angle>

  - : Winkel werden auf eine von zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Neugrad und `rad` Radiant bedeutet.

    Für in CSS2 definierte Eigenschaften muss eine Winkel-Einheit angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und deren entsprechenden Präsentationsattributen ist die Winkel-Einheit optional. Wenn nicht angegeben, wird der Winkelwert in Grad angenommen. Bei Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder CSS2 definiert, muss die Winkelangabe, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitensymbole in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG-DOM werden \<angle>-Werte durch [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekte dargestellt.

## Anything

- \<anything>

  - : Der Basistyp \<anything> ist eine Folge von null oder mehr Zeichen. Genauer:

    ```plain
    anything ::= Char*
    ```

    wobei [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) die Definition für ein Zeichen ist, wie in XML 1.0, Abschnitt 2.2, definiert.

## Clock-value

- \<clock-value>

  - : Uhrzeitwerte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) Spezifikation. Die Grammatik für Uhrzeitwerte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das Standardsuffix `s` (für Sekunden). Eingebettete Leerzeichen sind in Uhrzeitwerten nicht erlaubt, obwohl führende und nachgestellte Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für gültige Uhrzeitwerte:

    - Volle Uhrzeitwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teil-Uhrzeitwert:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10.5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwerte in Intervallen:
      - `3.2h` = 3.2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchteile von Werten sind einfach (Basis 10) Gleitkomma-Definitionen von Sekunden. So ergibt sich:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Color

- \<color>

  - : Der Basistyp \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für SVGs Verwendung des {{SVGAttr("color")}}-Attributs und ist ein Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    SVG unterstützt alle Syntax-Alternativen für \<color>, die in [CSS2 Syntax und Basis-Datentypen](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color) definiert sind, und (abhängig von der Implementierung) zukünftig im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/).

    Ein \<color> ist entweder ein Schlüsselwort oder eine numerische RGB-Spezifikation.

    Zusätzlich zu diesen Farbschlüsselwörtern dürfen Benutzer Schlüsselwörter angeben, die den Farben von Objekten in der Umgebung des Benutzers entsprechen. Die normative Definition dieser Schlüsselwörter findet sich in [Benutzervorgaben für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2).

    Das Format eines RGB-Werts in hexadezimaler Notation ist ein `#`, gefolgt von entweder drei oder sechs hexadezimalen Zeichen. Die dreistellige RGB-Notation (`#rgb`) wird in die sechsstellige Form (`#rrggbb`) umgewandelt, indem Zeichen wiederholt werden, nicht durch Hinzufügen von Nullen. Zum Beispiel expandiert `#fb0` zu `#ffbb00`. Dies stellt sicher, dass Weiß (`#ffffff`) mit der kurzen Notation (`#fff`) festgelegt werden kann und beseitigt Abhängigkeiten von der Farbtiefe des Displays. Das Format eines RGB-Werts in funktionaler Notation ist eine RGB-Startfunktion, gefolgt von einer kommaseparierten Liste von drei numerischen Werten (entweder drei ganze Zahlen oder drei Prozentwerte), gefolgt von `)`. Eine RGB-Startfunktion ist die nicht auf Groß- und Kleinschreibung achtende Zeichenkette `rgb(`, zum Beispiel `RGB(` oder `rGb(`. Aus Kompatibilitätsgründen wird die vollständig kleingeschriebene Form `rgb(` bevorzugt. Der Ganzzahlwert `255` entspricht `100%` und `F` oder `FF` in der hexadezimalen Notation: `rgb(255 255 255)` = `rgb(100% 100% 100%)` = `#FFF`. Leerzeichen sind um die numerischen Werte herum erlaubt. Alle RGB-Farben werden im sRGB-Farbraum angegeben. Die Verwendung von sRGB bietet eine eindeutige und objektiv messbare Definition der Farbe, die sich auf internationale Standards beziehen lässt.

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer integer integer")"
                  | "rgb("integer "%" integer "%" integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    wobei `color-keyword` (nicht auf Groß- und Kleinschreibung achtend) einem der Farbschlüsselwörter entspricht, die im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) aufgeführt sind, oder einem der Systemfarbschlüsselwörter, die unter [Benutzervorgaben für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2) aufgeführt sind.

## Coordinate

- \<coordinate>

  - : Ein \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten) darstellt. Seine Syntax ist die gleiche wie die für [\<length>](#length).

    Im SVG-DOM wird ein \<coordinate> durch ein [`SVGLength`](/de/docs/Web/API/SVGLength) oder ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequency

- \<frequency>

  - : Frequenzwerte werden mit lauter Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#number), der sofort von einem Frequenzeinheitensymbol gefolgt wird. Die Frequenzeinheitensymbole sind:

    - `Hz`: Hertz
    - `kHz`: kilo Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für eine Referenz. Die Syntax für diese Referenz ist dieselbe wie bei der [CSS URI](/de/docs/Web/CSS/url_value).

## Integer

- \<integer>

  - : Ein \<integer> wird als ein optionales Vorzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern von `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichen fehlt, ist die Zahl nicht negativ.

    Sofern nicht anders für ein bestimmtes Attribut oder eine Eigenschaft angegeben, reicht der Bereich für ein \<integer> mindestens von `-2147483648` bis `2147483647`.

    Im SVG-DOM wird ein \<integer> als `number` oder als [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen mit _IRIs_ (Internationalisierte Ressourcenidentifikatoren) identifiziert. Beispielsweise könnte eine SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments adressieren, indem er einen _IRI_-Fragmentbezeichner als Bestandteil des _IRI_ enthält. Ein _IRI_, der einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen und dem _IRI_-Fragmentbezeichner. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element zu spezifizieren, dessen ID `Lamppost` innerhalb der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet. Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Um eine Textzeichenfolge von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation abgegrenzt ist. Hinweis: Aus historischen Gründen sind die Begrenzer `url(` und `)`, um Kompatibilität mit den CSS-Spezifikationen zu gewährleisten. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG macht umfangreichen Gebrauch von _IRI_-Referenzen, sowohl absolut als auch relativ, zu anderen Objekten. Zum Beispiel, um ein Rechteck mit einem linearen Gradienten zu füllen, definieren Sie zunächst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie im folgenden Beispiel:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie verweisen dann auf den linearen Gradient als Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Referenzen:

    - **Lokale _IRI_-Referenzen**, bei denen die IRI-Referenz kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur aus einem Fragmentbezeichner besteht (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **Nicht-lokale _IRI_-Referenzen**, bei denen die IRI-Referenz ein \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation von IRI-Referenzen in SVG siehe [SVG 1.1 (2. Auflage): IRI-Referenzen](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length

- \<length>

  - : Eine Länge ist eine Entfernungsangabe, die als Zahl zusammen mit einer Einheit angegeben wird.
    Die SVG2-Spezifikation orientiert sich an den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und -werte.
    Ein Längeneinheitensymbol muss angegeben werden, und die Werte der Längeneinheitensymbole sind nicht auf Groß- und Kleinschreibung festgelegt.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und ihre entsprechenden Präsentationsattribute sind die Einheitensymbole in Werten optional. Wenn sie nicht angegeben werden, stellt der Längenwert eine Entfernung im aktuellen Benutzerkoordinatensystem dar. Längenangaben müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, unabhängig davon, ob sie in SVG oder in CSS definiert sind. Diese Empfindlichkeit für die Groß- und Kleinschreibung wird in SVG2 gelockert, um sich an CSS anzupassen.

    Beachten Sie, dass die Nicht-Eigenschafts-Definition von \<length> auch ein Prozent (`%`)-Einheitensymbol zulässt.
    Die Bedeutung eines Prozentsatzes des Längenwertes hängt vom Attribut ab, für das der Prozentsatz des Längenwertes angegeben wurde. Zwei häufige Fälle sind:

    - Wenn ein prozentualer Längenwert einen Prozentsatz der Ansichtsfenster-Breite oder -Höhe darstellt
    - Wenn ein prozentualer Längenwert einen Prozentsatz der Begrenzungsrahmen-Breite oder -Höhe eines gegebenen Objekts darstellt.

    Im SVG-DOM werden \<length>-Werte durch [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekte dargestellt.

## List-of-Ts

- \<list-of-Ts>

  - : (Wobei _T_ ein bestimmter Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen in den XML-Attributen von SVG entweder durch Kommas getrennt (mit optionalem Leerraum vor oder nach dem Komma) oder durch Leerzeichen getrennt sein.

    Leerzeichen in Listen werden als eine oder mehrere der folgenden aufeinanderfolgenden Zeichen definiert: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), und "form-feed" (`U+000C`).

    Das folgende ist ein Template für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG-DOM werden die Werte eines \<list-of-Ts>-Typs durch eine schnittstellenspezifische Methode für den bestimmten Typ _T_ dargestellt. Beispielsweise wird eine \<list-of-lengths> im SVG-DOM durch ein [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder ein [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekt dargestellt.

## Name

- \<name>

  - : Ein Name, das ist eine Zeichenfolge, bei der einige zeichenbedeutende Zeichen nicht zulässig sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number

- \<number>

  - : Reelle Zahlen werden auf eine von zwei Arten spezifiziert. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax ist die gleiche wie die Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet wird, wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen prägnanter anzugeben:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG-DOM wird ein \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Number-optional-number

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei der zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> durch ein Paar [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekte dargestellt.

## Opacity value

- \<opacity-value>
  - : Die Deckkraft der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als [\<number>](#number). Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig undurchsichtig) werden in diesen Bereich eingeklemmt.

## Paint

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Füllung oder Umrandung eines bestimmten Grafikelements.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` ermöglichen die Vererbung von Werten in [marker](/de/docs/Web/SVG/Element/marker)- und [use](/de/docs/Web/SVG/Element/use)-Elementen.

## Percentage

- \<percentage>

  - : Prozentsätze werden als Zahl gefolgt von einem `%`-Zeichen spezifiziert:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut angegeben wird, das nicht ebenfalls ein Präsentationsattribut ist.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel einer Länge). Jedes Attribut oder jede Eigenschaft, das/die Prozentsätze zulässt, definiert auch die Referenz-Distanzmessung, auf die sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> durch ein [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Time

- \<time>

  - : Ein Zeitwert ist ein \<number>, dem sofort ein Zeit-Einheitensymbol folgt. Die Zeit-Einheitensymbole sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transform-list

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen zu spezifizieren. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der Definition des {{SVGAttr("transform")}}-Attributs gegeben.

    Im SVG-DOM wird ein \<transform-list>-Wert durch ein [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von [Unicode](/de/docs/Glossary/Unicode)-Zeichen, die eine Adresse zu einer internen oder externen Ressource bildet.

    Vor SVG 2 wurde stattdessen der begrenztere [IRI](#iri)-Inhaltstyp verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
