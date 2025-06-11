---
title: Inhaltstyp
slug: Web/SVG/Guides/Content_type
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

SVG verwendet eine Vielzahl von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen, wofür sie verwendet werden, auf.

## Winkel

- \<angle>

  - : Winkel werden auf zwei Arten angegeben. Wenn sie als Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gon und `rad` Radianten bezeichnet.

    Für Eigenschaften, die in CSS2 definiert sind, muss ein Winkel-Einheitenkennzeichen angegeben werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und deren entsprechenden Präsentationsattributen ist das Winkel-Einheitenkennzeichen optional. Wenn es nicht angegeben wird, wird der Winkelwert in Grad angenommen. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder CSS2 definiert, muss das Winkelkennzeichen, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> stattdessen wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitenkennzeichen in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG-DOM werden \<angle>-Werte mithilfe von [`SVGAngle`](/de/docs/Web/API/SVGAngle) oder [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Objekten dargestellt.

## Beliebig

- \<anything>

  - : Der grundlegende Typ \<anything> ist eine Sequenz von null oder mehr Zeichen. Genauer:

    ```plain
    anything ::= Char*
    ```

    wobei Char jedes gültige Unicode-Zeichen sein kann, das kein Steuerzeichen ist.

## Uhrenwert

- \<clock-value>

  - : Uhrenwerte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/smil-animation/#Timing-ClockValueSyntax)-Spezifikation. Die Grammatik für Uhrenwerte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das standardmäßige metrische Suffix `s` (für Sekunden). In Uhrenwerten sind keine eingebetteten Leerzeichen erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für zulässige Uhrenwerte:

    - Volle Uhrenwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Partieller Uhrenwert:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10,5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwerte:
      - `3.2h` = 3,2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchteilwerte sind nur (Basis 10) Gleitkommadefinitionen von Sekunden. Daher:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>

  - : Der grundlegende Typ \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für die Verwendung des {{SVGAttr("color")}}-Attributs in SVG und ist ein Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}}, die auch optionale ICC-basierte Farbspezifikationen bieten.

    Die Definition von \<color> in SVG ist genau dieselbe wie die CSS {{cssxref("color_value", "&lt;color&gt;")}}-Definition.

## Koordinate

- \<coordinate>

  - : Eine \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die den gegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (der x-Achse für x-Koordinaten, der y-Achse für y-Koordinaten) darstellt. Ihre Syntax ist dieselbe wie für [\<length>](#länge).

    Im SVG-DOM wird eine \<coordinate> als [`SVGLength`](/de/docs/Web/API/SVGLength) oder ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) dargestellt.

## Frequenz

- \<frequency>

  - : Frequenzwerte werden mit auralen Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert ein [\<number>](#nummer), dem unmittelbar ein Frequenzeinheitenkennzeichen folgt. Die Frequenzeinheitenkennzeichen sind:

    - `Hz`: Hertz
    - `kHz`: Kilohertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für eine Referenz. Die Syntax für diese Referenz ist dieselbe wie der [CSS URI](/de/docs/Web/CSS/url_value).

## Ganzzahl

- \<integer>

  - : Eine \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl nicht negativ.

    Sofern nicht anders für ein bestimmtes Attribut oder eine Eigenschaft angegeben, umfasst der Bereich für eine \<integer> (mindestens) `-2147483648` bis `2147483647`.

    Im SVG-DOM wird eine \<integer> als `number` oder als [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen-**I**dentifikator.

    Im Internet werden Ressourcen durch _IRIs_ (Internationalisierte Ressourcenidentifikatoren) identifiziert. Ein Beispiel für eine SVG-Datei namens `someDrawing.svg`, die unter `http://example.com` liegt, könnte das folgende _IRI_ sein:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments ansprechen, indem es einen Fragmentbezeichner als Teil des _IRI_s enthält. Ein \_IRI_, der einen Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem `#`-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Zum Beispiel kann das folgende _IRI_ verwendet werden, um das Element zu spezifizieren, dessen ID `Lamppost` innerhalb der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textzeichenketten als Inhalt. Um eine Textzeichenkette von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, das mit einer funktionalen Notation umgeben ist. Hinweis: Aus historischen Gründen sind die Trennzeichen `url(` und `)`, zur Kompatibilität mit den CSS-Spezifikationen. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG macht umfangreichen Gebrauch von _IRI_-Referenzen, sowohl absolut als auch relativ, zu anderen Objekten. Zum Beispiel, um ein Rechteck mit einem linearen Farbverlauf zu füllen, definieren Sie zuerst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie verweisen dann auf den linearen Farbverlauf als den Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Typen von _IRI_-Referenzen:

    - **lokale _IRI_-Referenzen**, bei denen die IRI-Referenz kein \<absoluteIRI> oder \<relativeIRI> enthält und somit nur einen Fragmentbezeichner enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Referenzen**, bei denen die _IRI_-Referenz ein \<absoluteIRI> oder \<relativeIRI> enthält.

    IRI ist jetzt ein zurückgezogenes Konzept in SVG 2, ersetzt durch den universellen [URL](#url)-Typ.

## Länge

- \<length>

  - : Eine Länge ist eine Distanzmessung, angegeben als Zahl zusammen mit einer Einheit.
    Die SVG2-Spezifikation stimmt mit den CSS {{cssxref("length")}} Datentypen und Einheiten für die Attributsyntax und -werte überein.
    Ein Längeneinheitenkennzeichen muss angegeben werden und die Werte der Längeneinheitenkennzeichen sind nicht case-sensitiv.
    Die Syntax folgt der CSS `<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und ihren entsprechenden Präsentationsattributen sind die Einheitenkennzeichen in den Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Distanz im aktuellen Benutzerkoordinatensystem dar. Längenkennzeichen müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, ob sie in SVG oder CSS definiert sind. Diese Schreibempfindlichkeit wird in SVG2 gelockert, um mit CSS übereinzustimmen.

    Beachten Sie, dass die Definition ohne Eigenschaft \<length> auch einen Prozentwert (`%`) als Einheitenkennzeichen erlaubt.
    Die Bedeutung eines prozentualen Längenwerts hängt von dem Attribut ab, für das der prozentuale Längenwert angegeben wurde. Zwei häufige Fälle sind:

    - wenn ein prozentualer Längenwert einen Prozentsatz der Viewport-Breite oder -Höhe darstellt
    - wenn ein prozentualer Längenwert einen Prozentsatz der Breite oder Höhe der Begrenzungsbox eines bestimmten Objekts darstellt.

    Im SVG-DOM werden \<length>-Werte mithilfe von [`SVGLength`](/de/docs/Web/API/SVGLength) oder [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekten dargestellt.

## Liste von Ts

- \<list-of-Ts>

  - : (Dabei ist _T_ ein gewisser Typ.) Eine Liste besteht aus einer getrennten Sequenz von Werten. Es sei denn, es ist explizit anders beschrieben, Listen in den XML-Attributen von SVG können sowohl durch Kommata getrennt (mit optionalem Leerzeichen vor oder nach dem Komma) oder durch Leerzeichen getrennt sein.

    Leerzeichen in Listen werden definiert als eines oder mehrere der folgenden aufeinanderfolgenden Zeichen: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`) und "form-feed" (`U+000C`).

    Das Folgende ist ein Template für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Im SVG-DOM werden Werte vom Typ \<list-of-Ts> durch eine schnittstellenspezifische Darstellung für den jeweiligen Typ _T_ repräsentiert. Zum Beispiel wird eine \<list-of-lengths> im SVG-DOM mithilfe eines [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) oder [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Objekts dargestellt.

## Name

- \<name>

  - : Ein Name, der eine Zeichenkette ist, bei der einige Zeichen mit syntaktischer Bedeutung nicht erlaubt sind.

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

    Wenn sie in einem SVG-Attribut verwendet werden, wird ein \<number> anders definiert, um Zahlen mit großen Größenordnungen prägnanter angeben zu können:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Im SVG-DOM wird ein \<number> als float, [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder als [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) dargestellt.

## Nummer-optionale-Nummer

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei der zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG-DOM wird ein \<number-optional-number> mithilfe eines Paares von [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger) oder [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekten dargestellt.

## Opazitätswert

- \<opacity-value>
  - : Die Opazität der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als [\<number>](#nummer). Jegliche Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig opak) werden in diesen Bereich eingegrenzt.

## Farbe

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die zum Füllen oder Umranden eines bestimmten Grafikelements verwendet werden soll.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die `context-fill` und `context-stroke` Werte ermöglichen das Erben von Werten in [marker](/de/docs/Web/SVG/Reference/Element/marker) und [use](/de/docs/Web/SVG/Reference/Element/use) Elementen.

## Prozentsatz

- \<percentage>

  - : Prozentsätze werden als Zahl gefolgt von einem `%`-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut angegeben wird, das nicht auch ein Präsentationsattribut ist.

    Prozentwerte beziehen sich immer auf einen anderen Wert (zum Beispiel eine Länge). Jedes Attribut oder jede Eigenschaft, die Prozentsätze erlaubt, definiert auch das Referenzmaß, auf das sich der Prozentsatz bezieht.

    Im SVG-DOM wird ein \<percentage> mithilfe eines [`SVGNumber`](/de/docs/Web/API/SVGNumber) oder eines [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekts dargestellt.

## Zeit

- \<time>

  - : Ein Zeitwert ist eine \<number> direkt gefolgt von einem Zeiteinheitskennzeichen. Die Zeiteinheitenkennzeichen sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystem-Transformationen zu spezifizieren. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> finden Sie in der {{SVGAttr("transform")}}-Attributdefinition.

    Im SVG-DOM wird ein \<transform-list>-Wert mithilfe eines [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) oder eines [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList)-Objekts dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von {{Glossary("Unicode", "Unicode")}}-Zeichen, die eine Adresse zu einer internen oder externen Ressource bildet.

    Vor SVG 2 wurde der eingeschränktere [IRI](#iri) Inhaltstyp verwendet, da die URL-Spezifikation vorher nicht standardisiert war.
