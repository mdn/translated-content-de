---
title: Content-Typ
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen, wofür sie verwendet werden.

## Angle

- \<angle>

  - : Winkel werden auf zwei Arten angegeben. Bei der Verwendung im Wert einer Eigenschaft in einem Stylesheet wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gradian und `rad` Radiant anzeigt.

    Für Eigenschaften, die in CSS2 definiert sind, muss ein Winkel-Einheitenkennzeichen angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und ihren entsprechenden Darstellungseigenschaften ist das Winkel-Einheitenkennzeichen optional. Wenn nicht angegeben, wird der Winkelwert in Grad angenommen. Bei Darstellungsattributen für alle Eigenschaften, egal ob sie in SVG1.1 oder in CSS2 definiert sind, muss der Winkel, falls angegeben, im Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitenkennzeichen in solchen \<angle>-Werten müssen im Kleinbuchstaben sein.

    Im SVG DOM werden \<angle>-Werte mit [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekten dargestellt.

## Anything

- \<anything>

  - : Der Basistyp \<anything> ist eine Sequenz von null oder mehr Zeichen. Genauer:

    ```plain
    anything ::= Char*
    ```

    wobei [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) die Produktion für ein Zeichen ist, wie in XML 1.0, Abschnitt 2.2 definiert.

## Clock-value

- \<clock-value>

  - : Uhrzeitwerte haben dieselbe Syntax wie in der [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) Spezifikation. Die Grammatik für Uhrzeitwerte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das Standard-Metrik-Suffix `s` (für Sekunden). In Uhrzeitwerten sind keine eingebetteten Leerzeichen erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für legale Uhrzeitwerte:

    - Volle Uhrzeitwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilweise Uhrzeitwert:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10.5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwertas:
      - `3.2h` = 3.2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind einfach (basis 10) Fließkomma-Definitionen von Sekunden. Daher:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Color

- \<color>

  - : Der Basistyp \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für die Verwendung des {{SVGAttr("color")}} Attributs von SVG und ist ein Bestandteil der Definitionen von Attributen wie {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    SVG unterstützt alle syntaktischen Alternativen für \<color>, die in [CSS2 Syntax und grundlegende Datentypen](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color), und (abhängig von der Implementierung) zukünftig im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) definiert sind.

    Ein \<color> ist entweder ein Schlüsselwort oder eine numerische RGB-Spezifikation.

    Zusätzlich zu diesen Farb-Schlüsselwörtern können Benutzer Schlüsselwörter angeben, die den von Objekten in der Benutzerumgebung verwendeten Farben entsprechen. Die normative Definition dieser Schlüsselwörter finden Sie unter [Benutzereinstellungen für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2).

    Das Format eines RGB-Wertes in Hexadezimalnotation ist ein `#`, gefolgt von entweder drei oder sechs hexadezimalen Zeichen. Die dreistellige RGB-Notation (`#rgb`) wird in die sechsstellige Form (`#rrggbb`) konvertiert, indem Ziffern repliziert und keine Nullen hinzugefügt werden. Zum Beispiel wird `#fb0` zu `#ffbb00` erweitert. Dadurch kann Weiß (`#ffffff`) mit der Kurznotation (`#fff`) angegeben werden und Abhängigkeiten von der Farbtiefe des Displays werden entfernt. Das Format eines RGB-Wertes in der Funktionsnotation ist eine RGB-Startfunktion, gefolgt von einer kommagetrennten Liste aus drei numerischen Werten (entweder drei Ganzzahlen oder drei Prozentwerte), gefolgt von `)`. Eine RGB-Startfunktion ist die nicht casesensitive Zeichenfolge `rgb(`, zum Beispiel `RGB(` oder `rGb(`. Zum Zweck der Kompatibilität wird die komplett kleingeschriebene Form `rgb(` bevorzugt. Der ganzzahlige Wert `255` entspricht `100%`, und `F` oder `FF` in der hexadezimal-Notation: `rgb(255 255 255)` = `rgb(100% 100% 100%)` = `#FFF`. Leerzeichen sind um die numerischen Werte erlaubt. Alle RGB-Farben werden im sRGB-Farbraum angegeben. Die Verwendung von sRGB bietet eine eindeutige und objektiv messbare Definition der Farbe, die im Zusammenhang mit internationalen Standards steht.

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer integer integer")"
                  | "rgb("integer "%" integer "%" integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    wobei `color-keyword` (casesensitiv) eines der Farb-Schlüsselwörter ist, die im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) oder eines der Systemfarbenschlüsselwörter aus [Benutzereinstellungen für Farben](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2) aufgeführt sind.

## Coordinate

- \<coordinate>

  - : Ein \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten) darstellt. Seine Syntax entspricht der von [\<length>](#length).

    Im SVG DOM wird ein \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequency

- \<frequency>

  - : Frequenzwerte werden mit akustischen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#number), gefolgt von einem Frequenz-Einheitenkennzeichen. Die Frequenz-Einheitenkennzeichen sind:

    - `Hz`: Hertz
    - `kHz`: Kilo-Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis entspricht der [CSS URI](/de/docs/Web/CSS/url_value).

## Integer

- \<integer>

  - : Ein \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht-negativ.

    Sofern nicht anders angegeben, umfasst der Bereich für ein \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Im SVG DOM wird ein \<integer> als `number` oder ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen**i**dentifikator.

    Im Internet werden Ressourcen mithilfe von _IRIs_ (Internationalisierte Ressourcen-Identifikatoren) identifiziert. Zum Beispiel könnte eine SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, den folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments ansprechen, indem ein _IRI_-Fragmentbezeichner als Teil des _IRI_ eingefügt wird. Ein _IRI_, das einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-IRI, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element mit der ID `Lamppost` innerhalb der Datei `someDrawing.svg` zu spezifizieren:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}} Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenfolgen als Inhalt. Zur Unterscheidung einer Textzeichenfolge von einem relativen IRI wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, das mit einer funktionalen Notation abgegrenzt ist. Hinweis: Aus historischen Gründen sind die Abgrenzungen `url(` und `)`, für die Kompatibilität mit den CSS-Spezifikationen. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG nutzt intensiv _IRI_-Verweise, sowohl absolute als auch relative, zu anderen Objekten. Zum Beispiel, um ein Rechteck mit einem linearen Gradienten zu füllen, definieren Sie zuerst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie beziehen sich dann auf den linearen Farbverlauf als Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Verweisen:

    - **lokale _IRI_-Verweise**, bei denen der IRI-Verweis keinen \<absoluteIRI> oder \<relativeIRI> enthält und daher nur einen Fragmentbezeichner enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Verweise**, bei denen der _IRI_-Verweis einen \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation von IRI-Verweisen in SVG siehe [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length

- \<length>

  - : Eine Länge ist eine Distanzmessung, angegeben als Zahl zusammen mit einer Einheit.
    Die SVG2-Spezifikation richtet sich nach CSS {{cssxref("length")}} Datentypen und Einheiten für die Attribut-Syntax und -Werte.
    Ein Längen-Einheitenkennzeichen muss angegeben werden, und die Werte der Längeneinheitenkennzeichen sind nicht casesensitiv.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind und ihre entsprechenden Darstellungseigenschaften, sind die Einheitenkennzeichen in Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Distanz im aktuellen Benutzerkoordinatensystem dar. Längenkennzeichen müssen im Kleinbuchstaben sein, wenn sie in Darstellungsattributen für alle Eigenschaften verwendet werden, egal ob sie in SVG oder in CSS definiert sind. Diese Case-Sensitivity wird in SVG2 entspannt, um sich an CSS anzugleichen.

    Beachten Sie, dass die nicht-eigenschaftliche \<length>-Definition auch einen Prozentzeichen (`%`) Einheit-Identifier erlaubt.
    Die Bedeutung eines Prozent-Längenwertes hängt vom Attribut ab, für das der Prozent-Längenwert angegeben wurde. Zwei häufige Fälle sind:

    - wenn ein Prozentlängenwert einen Prozentsatz der Viewport-Breite oder -Höhe darstellt
    - wenn ein Prozentlängenwert einen Prozentsatz der Begrenzungsrahmenbreite oder -höhe auf einem gegebenen Objekt darstellt.

    Im SVG DOM werden \<length>-Werte mit [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekten dargestellt.

## List-of-Ts

- \<list-of-Ts>

  - : (Wo _T_ irgendein Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen in SVG's XML-Attributen entweder komma-getrennt (mit optionalen Leerzeichen davor oder danach) oder leerzeichen-getrennt sein.

    Leerzeichen in Listen sind als eine oder mehrere der folgenden aufeinanderfolgenden Zeichen definiert: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), und "form-feed" (`U+000C`).

    Das folgende ist eine Vorlage für eine EBNF Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG DOM werden Werte eines \<list-of-Ts>-Typs mit einer schnittstellenspezifischen Darstellung für den speziellen Typ _T_ dargestellt. Zum Beispiel wird eine \<list-of-lengths> im SVG DOM mit einem [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) dargestellt.

## Name

- \<name>

  - : Ein Name, der eine Zeichenfolge ist, in der einige Zeichen mit syntaktischer Bedeutung nicht erlaubt sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number

- \<number>

  - : Reelle Zahlen werden auf zwei Arten angegeben. Bei der Verwendung in einem Stylesheet wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax stimmt mit der Definition in CSS (CSS2, Abschnitt 4.3.1) überein.

    Bei der Verwendung in einem SVG-Attribut wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen prägnanter zu spezifizieren:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG DOM wird ein \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Number-optional-number

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei der zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG DOM wird ein \<number-optional-number> mit einem Paar von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Opacity value

- \<opacity-value>
  - : Die Opazität der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als ein [\<number>](#number). Alle Werte außerhalb des Bereichs von `0.0` (vollständig transparent) bis `1.0` (vollständig undurchsichtig) werden auf diesen Bereich beschränkt.

## Paint

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die beim Füllen oder Umranden eines gegebenen Grafikelements verwendet wird.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` erlauben es, Werte in [Marker](/de/docs/Web/SVG/Element/marker) und [Use](/de/docs/Web/SVG/Element/use) Elementen zu erben.

## Percentage

- \<percentage>

  - : Prozentsätze werden als eine Zahl gefolgt von einem `%`-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut, das nicht auch ein Präsentationsattribut ist, angegeben ist.

    Prozentsatzwerte sind immer relativ zu einem anderen Wert (zum Beispiel eine Länge). Jedes Attribut oder jede Eigenschaft, die Prozentsätze zulässt, definiert auch die Bezugsgrößenmessung, auf die sich der Prozentsatz bezieht.

    Im SVG DOM wird ein \<percentage> mit einem [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt dargestellt.

## Time

- \<time>

  - : Ein Zeitwert ist ein \<number>, das direkt von einem Zeiteinheiten-Kennzeichen gefolgt wird. Die Zeiteinheits-Kennzeichen sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transform-list

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystem-Transformationen anzugeben. Eine detaillierte Beschreibung der möglichen Wert für eine \<transform-list> wird in der {{SVGAttr("transform")}} Attributdefinition gegeben.

    Im SVG DOM wird ein \<transform-list>-Wert mit einem [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekt dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von [Unicode](/de/docs/Glossary/Unicode)-Zeichen, die eine Adresse für eine interne oder externe Ressource bildet.

    Vor SVG 2 wurde der begrenztere [IRI](#iri)-Inhaltstyp anstelle der URL verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
