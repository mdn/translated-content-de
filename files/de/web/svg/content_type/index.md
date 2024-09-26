---
title: Content Type
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen auf, wofür sie verwendet werden.

## Angle

- \<angle>

  - : Winkel werden auf zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Grads und `rad` Bogenmaß anzeigt.

    Für in CSS2 definierte Eigenschaften muss ein Winkel-Einheitenbezeichner angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und ihre entsprechenden Präsentationsattribute ist der Winkel-Einheitenbezeichner optional. Wenn nicht angegeben, wird der Winkelwert in Grad angenommen. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder in CSS2 definiert, muss der Winkel-Einheitenbezeichner, wenn angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitenbezeichner in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG-DOM werden \<angle>-Werte mithilfe von [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekten dargestellt.

## Anything

- \<anything>

  - : Der Basistyp \<anything> ist eine Folge von null oder mehr Zeichen. Genauer:

    ```plain
    anything ::= Char*
    ```

    wobei [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) die Produktion für ein Zeichen ist, wie in XML 1.0, Abschnitt 2.2 definiert.

## Clock-value

- \<clock-value>

  - : Uhrwerte haben die gleiche Syntax wie in der Spezifikation [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/). Die Grammatik für Uhrwerte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das Standard-Metriksuffix `s` (für Sekunden). Im Uhrwert sind keine eingebetteten Leerzeichen erlaubt, obwohl führende und nachlaufende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für legale Uhrwerte:

    - Volle Uhrwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilweise Uhrwerte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwerte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind einfach (Basis 10) Gleitkomma-Definitionen von Sekunden. Daher:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Color

- \<color>

  - : Der Basistyp \<color> ist eine mit CSS2 kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für SVGs Verwendung des {{SVGAttr("color")}}-Attributs und ist Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}}, die ebenfalls optionale ICC-basierte Farbspezifikationen bieten.

    SVG unterstützt alle der im [CSS2 Syntax und grundlegende Datentypen](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color) definierten Syntaxalternativen für \<color> und (abhängig von der Implementierung) in Zukunft im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/).

    Ein \<color> ist entweder ein Schlüsselwort oder eine numerische RGB-Spezifikation.

    Neben diesen Farb-Schlüsselwörtern können Benutzer Schlüsselwörter angeben, die den Farben entsprechen, die von Objekten in der Umgebung des Benutzers verwendet werden. Die normative Definition dieser Schlüsselwörter findet sich unter [Benutzereinstellungen für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2).

    Das Format eines RGB-Wertes in hexadezimaler Notation besteht aus einem `#`, gefolgt von entweder drei oder sechs hexadezimalen Zeichen. Die dreistellige RGB-Notation (`#rgb`) wird in eine sechsstellige Form (`#rrggbb`) umgewandelt, indem die Ziffern repliziert werden, nicht durch Hinzufügen von Nullen. Zum Beispiel wird `#fb0` zu `#ffbb00`. Dies stellt sicher, dass Weiß (`#ffffff`) mit der Kurznotation (`#fff`) angegeben werden kann und beseitigt jegliche Abhängigkeit von der Farbtiefe des Displays. Das Format eines RGB-Wertes in der Funktionsnotation ist eine RGB-Start-Funktion, gefolgt von einer durch Kommas getrennten Liste von drei numerischen Werten (entweder drei ganze Zahlen oder drei Prozentwerte) gefolgt von `)`. Eine RGB-Start-Funktion ist die nicht case-sensitive Zeichenkette `rgb(`, zum Beispiel `RGB(` oder `rGb(`. Aus Kompatibilitätsgründen wird die vollständig kleingeschriebene Form `rgb(` bevorzugt. Der ganzzahlige Wert `255` entspricht `100%` und `F` oder `FF` in der hexadezimalen Notation: `rgb(255 255 255)` = `rgb(100% 100%)` = `#FFF`. Leerzeichen sind um die numerischen Werte herum erlaubt. Alle RGB-Farben werden im sRGB-Farbraum angegeben. Die Verwendung von sRGB bietet eine eindeutige und objektiv messbare Definition der Farbe, die mit internationalen Standards in Verbindung gebracht werden kann.

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer integer integer")"
                  | "rgb("integer "%" integer "%" integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    wobei `color-keyword` (case insensitively) einem der in [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) aufgeführten Farbschlüsselwörter oder einem der Systemsfarben-Schlüsselwörter in [Benutzereinstellungen für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2) entspricht.

## Coordinate

- \<coordinate>

  - : Ein \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten) darstellt. Seine Syntax entspricht der für [\<length>](#length).

    Im SVG-DOM wird ein \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequency

- \<frequency>

  - : Häufigkeitswerte werden mit den auralen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#number), gefolgt von einem Frequenzeinheitenbezeichner. Die Frequenzeinheitenbezeichner sind:

    - `Hz`: Hertz
    - `kHz`: Kilo-Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis entspricht dem [CSS URI](/de/docs/Web/CSS/url_value).

## Integer

- \<integer>

  - : Ein \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht negativ.

    Sofern nicht anders für ein bestimmtes Attribut oder eine bestimmte Eigenschaft angegeben, umfasst der Bereich für ein \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Im SVG-DOM wird ein \<integer> als `number` oder [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Eine **I**nternationale **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen mit _IRIs_ (Internationalized Resource Identifiers) identifiziert. Beispielsweise könnte eine SVG-Datei namens `someDrawing.svg`, die sich auf `http://example.com` befindet, über den folgenden _IRI_ verfügen:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch auf ein bestimmtes Element innerhalb eines XML-Dokuments verweisen, indem ein _IRI_-Fragmentbezeichner als Teil des _IRI_ enthalten ist. Ein _IRI_, der einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Beispielsweise könnte der folgende _IRI_ verwendet werden, um das Element zu spezifizieren, dessen ID `Lamppost` innerhalb der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Um eine Textzeichenfolge von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation begrenzt ist. Hinweis: Aus historischen Gründen sind die Begrenzungszeichen `url(` und `)`, für die Kompatibilität mit den CSS-Spezifikationen. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG verwendet IRI-Referenzen ausgiebig, sowohl absolute als auch relative, zu anderen Objekten. Beispielsweise, um ein Rechteck mit einem linearen Farbverlauf zu füllen, definieren Sie zuerst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie verweisen dann auf den linearen Farbverlauf als den Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Referenzen:

    - **lokale _IRI_-Referenzen**, bei denen der IRI-Verweis kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur einen Fragment-Identifier enthält (d. h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Referenzen**, bei denen der _IRI_-Verweis ein \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation von IRI-Referenzen in SVG siehe [SVG 1.1 (2. Ausgabe): IRI-Referenzen](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length

- \<length>

  - : Eine Länge ist eine Distanzmessung, angegeben als eine Zahl zusammen mit einer Einheit.
    Die SVG2-Spezifikation orientiert sich an den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und -werte.
    Ein Längeneinheitenbezeichner muss angegeben werden und die Werte der Längeneinheitenbezeichner sind nicht case-sensitiv.
    Die Syntax folgt der CSS-`<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und ihre entsprechenden Präsentationsattribute sind die Einheitenbezeichner in Werten optional. Wenn nicht angegeben, repräsentiert der Längenwert eine Entfernung im aktuellen Benutzerkoordinatensystem. Längeneinheitenbezeichner müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, ob sie in SVG oder in CSS definiert sind. Diese Groß-/Kleinschreibung ist in SVG2 gelockert, um sich mit CSS abzustimmen.

    Beachten Sie, dass die Nicht-Eigenschafts-`<length>`-Definition auch einen Prozent- (`%`) Einheitenbezeichner erlaubt.
    Die Bedeutung eines Prozentlängenwertes hängt von dem Attribut ab, für das der Prozentlängenwert angegeben wurde. Zwei allgemeine Fälle sind:

    - wenn ein Prozentlängenwert einen Prozentsatz der Ansichtsfenster-Breite oder -Höhe darstellt
    - wenn ein Prozentlängenwert einen Prozentsatz der Begrenzungsrahmen-Breite oder -Höhe auf einem bestimmten Objekt darstellt.

    Im SVG-DOM werden \<length>-Werte mithilfe von [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekten dargestellt.

## List-of-Ts

- \<list-of-Ts>

  - : (Wobei _T_ ein bestimmter Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht anders ausdrücklich beschrieben, können Listen innerhalb von SVG-XML-Attributen entweder durch Kommas getrennt (mit optionalen Leerzeichen davor oder danach) oder durch Leerzeichen getrennt sein.

    Leerzeichen in Listen sind definiert als ein oder mehrere der folgenden aufeinanderfolgenden Zeichen: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`) und "form-feed" (`U+000C`).

    Das folgende ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG-DOM werden Werte eines \<list-of-Ts>-Typs durch eine schnittspezifische Schnittstelle für den bestimmten Typ _T_ dargestellt. Beispielsweise wird eine \<list-of-lengths> im SVG-DOM mithilfe eines [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekts dargestellt.

## Name

- \<name>

  - : Ein Name, der eine Zeichenfolge ist, bei der einige Zeichen mit syntaktischer Bedeutung nicht erlaubt sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number

- \<number>

  - : Reelle Zahlen werden auf zwei Arten angegeben. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax ist dieselbe wie in CSS (CSS2, Abschnitt 4.3.1) definiert.

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um Zahlen mit großem Umfang prägnanter angeben zu können:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG-DOM wird ein \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Number-optional-number

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei der zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> mit einem Paar von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Opacity value

- \<opacity-value>
  - : Die Deckkraft der Farbe oder der Inhalt, mit dem das aktuelle Objekt gefüllt ist, als ein [\<number>](#number). Alle Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig undurchsichtig) werden in diesen Bereich angepasst.

## Paint

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die beim Füllen oder Umranden eines bestimmten grafischen Elements verwendet werden soll.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` ermöglichen das Vererben von Werten in [marker](/de/docs/Web/SVG/Element/marker) und [use](/de/docs/Web/SVG/Element/use) Elementen.

## Percentage

- \<percentage>

  - : Prozentsätze werden als Zahl gefolgt von einem `%`-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition eines \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut, das nicht gleichzeitig ein Präsentationsattribut ist, angegeben ist.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel eine Länge). Jedes Attribut oder jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Referenz-Distanzmessung, auf die sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> mit einem [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt dargestellt.

## Time

- \<time>

  - : Ein Zeitwert ist ein \<number>, unmittelbar gefolgt von einem Zeit-Einheitenbezeichner. Die Zeit-Einheitenbezeichner sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transform-list

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystem-Transformationen anzugeben. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der Definition des {{SVGAttr("transform")}}-Attributs angegeben.

    Im SVG-DOM wird ein \<transform-list>-Wert mithilfe eines [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder eines [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekts dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Folge von [Unicode](/de/docs/Glossary/Unicode)-Zeichen und bildet eine Adresse zu einer internen oder externen Ressource.

    Vor SVG 2 wurde der eingeschränktere [IRI](#iri) Inhaltstyp stattdessen verwendet, da die URL-Spezifikation vorher nicht standardisiert war.
