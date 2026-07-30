---
title: Inhaltstyp
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: 69ff5fe627a17cf397ebd7b0f88a83c272c0bce5
---

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und einer Beschreibung, wofür sie verwendet werden, auf.

## Winkel

- \<angle>
  - : Winkel werden auf zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Grads und `rad` Radianten angibt.

    Für in CSS2 definierte Eigenschaften muss ein Winkel-Einheitsbezeichner angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und deren entsprechenden Präsentationsattributen ist der Winkel-Einheitsbezeichner optional. Wird er nicht angegeben, wird angenommen, dass der Winkelwert in Grad vorliegt. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder in CSS2 definiert, muss der Winkelbezeichner, falls spezifiziert, in Kleinbuchstaben angegeben werden.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitsbezeichner in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG DOM werden \<angle>-Werte mit [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) Objekten dargestellt.

## Beliebig

- \<anything>
  - : Der Basistyp \<anything> ist eine Folge von null oder mehr Zeichen. Konkret:

    ```plain
    anything ::= Char*
    ```

    wobei Char ein beliebiges gültiges nicht-kontrollierendes Unicode-Zeichen ist.

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

    Für `Timecount`-Werte ist das Standard-Metrik-Suffix `s` (für Sekunden). In Zeitwerten ist kein eingebetteter Leerraum erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Folgende sind Beispiele für gültige Zeitwerte:
    - Volle Zeitwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilzeitwerte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Timecount-Werte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind einfach (Basis 10) Gleitkommadefinitionen von Sekunden. Somit:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>
  - : Der Basistyp \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für die Verwendung des {{SVGAttr("color")}}-Attributs in SVG und ist ein Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG ist genau dieselbe wie die CSS {{cssxref("color_value", "&lt;color&gt;")}}-Definition.

## Koordinate

- \<coordinate>
  - : Eine \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die der gegebene Abstand vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für X-Koordinaten, der y-Achse für Y-Koordinaten) ist. Ihre Syntax ist dieselbe wie die für [\<length>](#länge).

    Innerhalb des SVG DOM wird eine \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>
  - : Frequenzwerte werden mit auralen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert eine [\<number>](#zahl) sofort gefolgt von einem Frequenzeinheitsbezeichner. Die Frequenzeinheitsbezeichner sind:
    - `Hz`: Hertz
    - `kHz`: Kilo Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Verweis. Die Syntax für diesen Verweis ist die gleiche wie die [CSS URI](/de/docs/Web/CSS/Reference/Values/url_value).

## Ganzzahl

- \<integer>
  - : Eine \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichen nicht vorhanden ist, ist die Zahl nicht negativ.

    Sofern nicht anders angegeben, umfasst der Bereich für eine \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Innerhalb des SVG DOM wird eine \<integer> als `number` oder [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>
  - : Ein **I**nternationalisierter **R**essourcen**i**dentifikator.

    Im Internet werden Ressourcen mit _IRIs_ (Internationalisierte Ressourcenidentifikatoren) identifiziert. Zum Beispiel könnte eine SVG-Datei namens `someDrawing.svg`, die sich unter `http://example.com` befindet, das folgende _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments adressieren, indem er einen _IRI_-Fragment-Identifikator als Teil des _IRI_ enthält. Ein _IRI_, der einen _IRI_-Fragment-Identifikator enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragment-Identifikator. Zum Beispiel kann der folgende _IRI_ verwendet werden, um das Element zu spezifizieren, dessen ID `Lamppost` innerhalb der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenketten als Inhalt. Um eine Textzeichenkette von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, das durch eine funktionale Notation begrenzt ist. Hinweis: Aus historischen Gründen sind die Trennzeichen `url(` und `)`, um die Kompatibilität mit den CSS-Spezifikationen zu gewährleisten. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG macht umfangreichen Gebrauch von _IRI_-Verweisen, sowohl absolut als auch relativ, zu anderen Objekten. Um zum Beispiel ein Rechteck mit einem linearen Gradienten zu füllen, definieren Sie zunächst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient id="MyGradient">...</linearGradient>
    ```

    Dann verweisen Sie auf den linearen Gradienten als den Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Verweisen:
    - **lokale _IRI_-Verweise**, wobei der IRI-Verweis kein \<absoluteIRI> oder \<relativeIRI> enthält und daher nur einen Fragment-Identifikator enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Verweise**, wobei der _IRI_-Verweis ein \<absoluteIRI> oder \<relativeIRI> enthält.

    Der IRI ist jetzt ein zurückgezogenes Konzept in SVG 2, ersetzt durch den universellen [URL](#url)-Typ.

## Länge

- \<length>
  - : Eine Länge ist ein Distanzmaß, das als Zahl zusammen mit einer Einheit angegeben wird.
    Die SVG2-Spezifikation stimmt mit den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und -werte überein.
    Ein Längenwert-Einheitsbezeichner muss angegeben werden und die Werte der Längeneinheiten-Bezeichner sind nicht unterscheidungsfähig nach Groß- und Kleinschreibung.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind und deren entsprechende Präsentationsattribute sind die Einheitsbezeichner in Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Entfernung im aktuellen Benutzerkoordinatensystem dar. Längenbezeichner müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, unabhängig davon, ob sie in SVG oder in CSS definiert sind. Diese Groß- und Kleinschreibungsempfindlichkeit wird in SVG2 gelockert, um sich mit CSS abzustimmen.

    Beachten Sie, dass die Nicht-Eigenschafts-\<length>-Definition auch einen Prozentwert (`%`) Einheitsbezeichner zulässt.
    Die Bedeutung eines Prozentlängenwerts hängt von dem Attribut ab, für das der Prozentsatzlängenwert angegeben wurde. Zwei häufige Fälle sind:
    - wenn ein Prozentsatzlängenwert einen Prozentsatz der Ansichtfensterbreite oder -höhe darstellt
    - wenn ein Prozentsatzlängenwert einen Prozentsatz der Begrenzungsrahmenbreite oder -höhe eines bestimmten Objekts darstellt.

    Im SVG DOM werden \<length>-Werte als [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) Objekte dargestellt.

## Liste von Ts

- \<list-of-Ts>
  - : (Wobei _T_ ein Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen in den XML-Attributen von SVG entweder durch Kommas getrennt (mit optionalem Leerraum davor oder danach) oder durch Leerzeichen getrennt werden.

    Leerraum in Listen wird definiert als eines oder mehrere der folgenden aufeinanderfolgenden Zeichen: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`) und "form-feed" (`U+000C`).

    Das folgende ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Innerhalb des SVG DOM werden Werte eines \<list-of-Ts>-Typs durch eine spezifische Schnittstelle für den bestimmten Typ _T_ dargestellt. Zum Beispiel wird eine \<list-of-lengths> innerhalb des SVG DOM als [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) Objekt dargestellt.

## Name

- \<name>
  - : Ein Name, der eine Zeichenfolge ist, bei der einige Zeichen von syntaktischer Bedeutung unzulässig sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Zahl

- \<number>
  - : Reelle Zahlen werden auf zwei Arten angegeben. Wenn sie in einem Stylesheet verwendet werden, wird ein \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax ist dieselbe wie die Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um zu ermöglichen, dass Zahlen mit großen Größenordnungen präziser angegeben werden können:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG DOM wird ein \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Zahl-optionale-Zahl

- \<number-optional-number>
  - : Ein Paar von \<numbers>, wobei die zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG DOM wird ein \<number-optional-number> unter Verwendung eines Paares von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekten dargestellt.

## Opazitätswert

- \<opacity-value>
  - : Die Opazität der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als ein [\<number>](#zahl). Alle Werte außerhalb des Bereichs `0,0` (vollständig transparent) bis `1,0` (vollständig undurchsichtig) werden auf diesen Bereich begrenzt.

## Anstrich

- \<paint>
  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art des Anstrichs, der beim Füllen oder Umranden eines gegebenen Grafikelements verwendet wird.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die Werte `context-fill` und `context-stroke` ermöglichen das Erben von Werten in [marker](/de/docs/Web/SVG/Reference/Element/marker) und [use](/de/docs/Web/SVG/Reference/Element/use) Elementen.

## Prozentwert

- \<percentage>
  - : Prozentsätze werden als Zahl angegeben, gefolgt von einem `%`-Zeichen:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentwert in einem Stylesheet oder in einem Attribut angegeben ist, das nicht auch ein Präsentationsattribut ist.

    Prozentwerte sind immer relativ zu einem anderen Wert (zum Beispiel einer Länge). Jedes Attribut oder jede Eigenschaft, das/die Prozentwerte zulässt, definiert auch die Referenzdistanzmessung, auf die sich der Prozentsatz bezieht.

    Im SVG DOM wird ein \<percentage> mit einem [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt dargestellt.

## Zeit

- \<time>
  - : Ein Zeitwert ist eine \<number> unmittelbar gefolgt von einem Zeiteinheitsbezeichner. Die Zeiteinheitsbezeichner sind:
    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>
  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen anzugeben. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> finden Sie in der Definition des {{SVGAttr("transform")}} Attributs.

    Im SVG DOM wird ein \<transform-list>-Wert mit einem [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) Objekt dargestellt.

## URL

- URL
  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Folge von {{Glossary("Unicode", "Unicode")}}-Zeichen, die eine Adresse zu einer internen oder externen Ressource bildet.

    Vor SVG 2 wurde der eingeschränktere [IRI](#iri) Inhaltstyp stattdessen verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
