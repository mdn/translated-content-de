---
title: Inhaltstyp
slug: Web/SVG/Content_type
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{SVGRef}}

SVG verwendet eine Reihe von Datentypen. Dieser Artikel listet diese Typen zusammen mit ihrer Syntax und Beschreibungen ihrer Anwendungen auf.

## Winkel

- \<angle>

  - : Winkel werden auf zwei Arten angegeben. Wenn sie im Wert einer Eigenschaft in einem Stylesheet verwendet werden, wird ein \<angle> wie folgt definiert:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    wobei `deg` Grad, `grad` Gon und `rad` Bogenmaß angibt.

    Für in CSS2 definierte Eigenschaften muss ein Winkel-Einheitskennzeichen bereitgestellt werden. Für Winkelwerte in SVG-spezifischen Eigenschaften und deren entsprechenden Präsentationsattributen ist das Winkel-Einheitskennzeichen optional. Wenn nicht angegeben, wird angenommen, dass der Winkelwert in Grad gemessen wird. In Präsentationsattributen für alle Eigenschaften, ob in SVG1.1 oder in CSS2 definiert, muss das Winkelkennzeichen, falls angegeben, in Kleinbuchstaben sein.

    Wenn Winkel in einem SVG-Attribut verwendet werden, wird \<angle> wie folgt definiert:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    Die Einheitkennzeichen in solchen \<angle>-Werten müssen in Kleinbuchstaben sein.

    Im SVG DOM werden \<angle>-Werte mit {{domxref("SVGAngle")}} oder {{domxref("SVGAnimatedAngle")}}-Objekten dargestellt.

## Anything

- \<anything>

  - : Der Basistyp \<anything> ist eine Sequenz von null oder mehr Zeichen. Speziell:

    ```plain
    anything ::= Char*
    ```

    wobei [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) die Produktion für ein Zeichen gemäß XML 1.0, Abschnitt 2.2, ist.

## Uhrwert

- \<clock-value>

  - : Uhrwerte haben die gleiche Syntax wie in der [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/)-Spezifikation. Die Grammatik für Uhrwerte wird hier wiederholt:

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

    Für `Timecount`-Werte ist das Standardsuffix für die Maßeinheit "`s`" (für Sekunden). In Uhrwerten sind keine eingebetteten Leerzeichen erlaubt, obwohl führende und nachfolgende Leerzeichen ignoriert werden.

    Die folgenden sind Beispiele für gültige Uhrwerte:

    - Volle Uhrwerte:
      - `02:30:03` = 2 Stunden, 30 Minuten und 3 Sekunden
      - `50:00:10.25` = 50 Stunden, 10 Sekunden und 250 Millisekunden
    - Teilweise Uhrwerte:
      - `02:33` = 2 Minuten und 33 Sekunden
      - `00:10.5` = 10.5 Sekunden = 10 Sekunden und 500 Millisekunden
    - Zeitwerte:
      - `3.2h` = 3.2 Stunden = 3 Stunden und 12 Minuten
      - `45min` = 45 Minuten
      - `30s` = 30 Sekunden
      - `5ms` = 5 Millisekunden
      - `12.467` = 12 Sekunden und 467 Millisekunden
    - Bruchwerte sind nur (Basis 10) Gleitkommadefinitionen von Sekunden. Somit:
      - `00.5s` = 500 Millisekunden
      - `00:00.005` = 5 Millisekunden

## Farbe

- \<color>

  - : Der Basistyp \<color> ist eine CSS2-kompatible Spezifikation für eine Farbe im sRGB-Farbraum. \<color> gilt für die Verwendung des {{SVGAttr("color")}}-Attributs in SVG und ist Bestandteil der Definitionen der Attribute {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}} und {{SVGAttr("lighting-color")}}, welche auch optionale ICC-basierte Farbspezifikationen bieten.

    SVG unterstützt alle Syntaxalternativen für \<color>, die in [CSS2 Syntax and Basic Data Types](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color) definiert sind und (abhängig von der Implementierung) in der Zukunft im [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/).

    Ein \<color> ist entweder ein Schlüsselwort oder eine numerische RGB-Spezifikation.

    Zusätzlich zu diesen Farbschlüsselwörtern können Benutzer Schlüsselwörter spezifizieren, die den Farben entsprechen, die von Objekten in der Benutzerumgebung verwendet werden. Die normative Definition dieser Schlüsselwörter findet sich in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2).

    Das Format eines RGB-Werts in hexadezimaler Notation ist ein "`#`", gefolgt von entweder drei oder sechs hexadezimalen Zeichen. Die dreistellige RGB-Notation (`#rgb`) wird in die sechsstellige Form (`#rrggbb`) konvertiert, indem die Ziffern repliziert, nicht durch Nullen ergänzt werden. Beispielsweise wird `#fb0` zu `#ffbb00`. Dies stellt sicher, dass Weiß (`#ffffff`) mit der Kurznotation (`#fff`) angegeben werden kann und beseitigt Abhängigkeiten von der Farbtiefe der Anzeige. Das Format eines RGB-Werts in der funktionalen Notation ist ein RGB-Startfunktion, gefolgt von einer kommagetrennten Liste von drei numerischen Werten (entweder drei Ganzzahlen oder drei Prozentwerte), gefolgt von "`)`". Ein RGB-Startfunktion ist der gross-/kleinschreibungunabhängige String "`rgb(`", beispielsweise "`RGB(`" oder "`rGb(`". Zur Kompatibilität wird die vollständig in Kleinbuchstaben gehaltene Form "`rgb(`" bevorzugt. Der Ganzzahlwert `255` entspricht `100%` und `F` oder `FF` in der hexadezimalen Notation: `rgb(255 255 255)` = `rgb(100% 100% 100%)` = `#FFF`. Leerzeichen sind um die numerischen Werte erlaubt. Alle RGB-Farben werden im sRGB-Farbraum angegeben. Die Verwendung von sRGB bietet eine eindeutige und objektiv messbare Definition der Farbe, die sich auf internationale Standards beziehen lässt.

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer integer integer")"
                  | "rgb("integer "%" integer "%" integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    wobei `color-keyword` (ohne Berücksichtigung der Groß- und Kleinschreibung) einem der in [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/) aufgelisteten Farbschlüsselwörter entspricht oder einem der in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, Abschnitt 18.2) aufgeführten Systemfarbenschlüsselwörter.

## Koordinate

- \<coordinate>

  - : Eine \<coordinate> ist eine Länge im Benutzerkoordinatensystem, die die angegebene Distanz vom Ursprung des Benutzerkoordinatensystems entlang der relevanten Achse (x-Achse für X-Koordinaten, y-Achse für Y-Koordinaten) darstellt. Ihre Syntax entspricht der für [\<length>](#länge).

    Innerhalb des SVG DOM wird eine \<coordinate> als {{domxref("SVGLength")}} oder {{domxref("SVGAnimatedLength")}} dargestellt.

## Frequenz

- \<frequency>

  - : Frequenzwerte werden mit Aural-Eigenschaften verwendet. Wie in CSS2 definiert, ist ein Frequenzwert eine [\<number>](#zahl), gefolgt von einem Frequenzeinheitkennzeichen. Die Frequenzeinheitkennzeichen sind:

    - `Hz`: Hertz
    - `kHz`: Kilo Hertz

    Frequenzwerte dürfen nicht negativ sein.

## FuncIRI

- \<FuncIRI>
  - : Funktionale Notation für einen Bezug. Die Syntax für diesen Bezug entspricht der [CSS URI](/de/docs/Web/CSS/url_value).

## Ganzzahl

- \<integer>

  - : Eine \<integer> wird als optionales Vorzeichenzeichen (`+` oder `-`) gefolgt von einer oder mehreren Ziffern `0` bis `9` angegeben:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    Wenn das Vorzeichenzeichen nicht vorhanden ist, ist die Zahl positiv.

    Sofern nicht anders für ein bestimmtes Attribut oder eine Eigenschaft angegeben, reicht der Bereich für eine \<integer> mindestens von `-2147483648` bis `2147483647`.

    Innerhalb des SVG DOM wird eine \<integer> als `number` oder eine {{domxref("SVGAnimatedInteger")}} dargestellt.

## IRI

- \<IRI>

  - : Ein **I**nternationalisierter **R**essourcen**i**dentifikator.

    Im Internet werden Ressourcen mithilfe von _IRIs_ (Internationalized Resource Identifiers) identifiziert. Beispielsweise könnte eine SVG-Datei namens `someDrawing.svg` unter `http://example.com` folgenden _IRI_ haben:

    ```plain
    http://example.com/someDrawing.svg
    ```

    Ein _IRI_ kann auch ein bestimmtes Element innerhalb eines XML-Dokuments adressieren, indem ein _IRI_-Fragmentbezeichner als Teil des _IRI_ hinzugefügt wird. Ein _IRI_, das einen _IRI_-Fragmentbezeichner enthält, besteht aus einem optionalen Basis-_IRI_, gefolgt von einem "`#`"-Zeichen, gefolgt vom _IRI_-Fragmentbezeichner. Beispielsweise kann der folgende _IRI_ verwendet werden, um das Element zu spezifizieren, dessen ID "`Lamppost`" in der Datei `someDrawing.svg` ist:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ werden im {{SVGAttr("href")}}-Attribut verwendet.
    Einige Attribute erlauben sowohl _IRIs_ als auch Textstrings als Inhalt. Um einen Textstring von einem relativen IRI zu unterscheiden, wird die funktionale Notation \<FuncIRI> verwendet. Dies ist ein _IRI_, der mit einer funktionalen Notation abgegrenzt ist. Hinweis: Aus historischen Gründen sind die Trennzeichen "`url(`" und "`)`", zur Kompatibilität mit den CSS-Spezifikationen. Die _FuncIRI_-Form wird in Präsentationsattributen verwendet.

    SVG verwendet intensiv _IRI_-Referenzen, sowohl absolute als auch relative, zu anderen Objekten. Zum Beispiel, um ein Rechteck mit einem linearen Farbverlauf zu füllen, definieren Sie zunächst ein {{SVGElement("linearGradient")}}-Element und geben ihm eine ID, wie in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    Sie referenzieren dann den linearen Farbverlauf als Wert des {{SVGAttr("fill")}}-Attributs für das Rechteck, wie im folgenden Beispiel:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG unterstützt zwei Arten von _IRI_-Referenzen:

    - **lokale _IRI_-Referenzen**, bei denen die IRI-Referenz keinen \<absoluteIRI> oder \<relativeIRI> enthält und somit nur einen Fragmentbezeichner enthält (d.h. `#<elementID>` oder `#xpointer(id<elementID>)`).
    - **nicht-lokale _IRI_-Referenzen**, bei denen die _IRI_-Referenz einen \<absoluteIRI> oder \<relativeIRI> enthält.

      Für die vollständige Spezifikation von IRI-Referenzen in SVG siehe [SVG 1.1 (2nd Edition): IRI Reference](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Länge

- \<length>

  - : Eine Länge ist ein Abstandsmaß, angegeben als Zahl zusammen mit einer Einheit. Die SVG2-Spezifikation stimmt mit den CSS {{cssxref("length")}}-Datentypen und -Einheiten für die Attributsyntax und -werte überein.
    Ein Kennzeichen für eine Längeneinheit muss angegeben werden und die Werte der Längeneinheitskennzeichen sind groß-/kleinschreibungsunabhängig.
    Die Syntax folgt der CSS-`<length>`-Syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    Für SVG-spezifische Eigenschaften, die in SVG1.1 definiert sind, und deren entsprechende Präsentationsattribute sind die Kennzeichen in den Werten optional. Wenn nicht angegeben, stellt der Längenwert eine Entfernung im aktuellen Benutzerkoordinatensystem dar. Längenkennzeichen müssen in Kleinbuchstaben sein, wenn sie in Präsentationsattributen für alle Eigenschaften verwendet werden, egal ob sie in SVG oder in CSS definiert sind. Diese Groß-/Kleinschreibungsregeln werden in SVG2 gelockert, um mit CSS übereinzustimmen.

    Beachten Sie, dass die Definition von Nicht-Eigenschafts-<length> auch das Prozentzeichen (`%`) als Einheit zulässt.
    Die Bedeutung eines Prozentsatz-Längenwerts hängt vom Attribut ab, für das der Prozentsatz-Längenwert angegeben wurde. Zwei häufige Fälle sind:

    - wenn ein Prozentsatz-Längenwert einen Prozentsatz der Ansichtsbreite oder -höhe darstellt
    - wenn ein Prozentsatz-Längenwert einen Prozentsatz der Begrenzungsrahmenbreite oder -höhe eines gegebenen Objekts darstellt.

    Im SVG DOM werden \<length>-Werte mit {{domxref("SVGLength")}} oder {{domxref("SVGAnimatedLength")}}-Objekten dargestellt.

## Liste von Ts

- \<list-of-Ts>

  - : (Wobei _T_ ein Typ ist.) Eine Liste besteht aus einer getrennten Folge von Werten. Sofern nicht ausdrücklich anders beschrieben, können Listen in den XML-Attributen von SVG entweder kommasepariert (mit optionalem Leerzeichen vor oder nach dem Komma) oder leerzeichengetrennt sein.

    Leerzeichen in Listen werden als eine oder mehrere der folgenden aufeinanderfolgenden Zeichen definiert: "Leertaste" (`U+0020`), "Tabulator" (`U+0009`), "Zeilenumbruch" (`U+000A`), "Wagenrücklauf" (`U+000D`) und "Formularvorschub" (`U+000C`).

    Das folgende ist eine Vorlage für eine EBNF-Grammatik, die die \<list-of-Ts>-Syntax beschreibt:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Innerhalb des SVG DOM werden Werte eines \<list-of-Ts> Typs durch eine schnittspezifische Schnittstelle für den jeweiligen Typ _T_ dargestellt. Beispielsweise wird eine \<list-of-lengths> im SVG DOM mit einem {{domxref("SVGLengthList")}} oder {{domxref("SVGAnimatedLengthList")}}-Objekt dargestellt.

## Name

- \<name>

  - : Ein Name, der ein String ist, bei dem einige Zeichen mit syntaktischer Bedeutung nicht zugelassen sind.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Zahl

- \<number>

  - : Reelle Zahlen werden in einer von zwei Weisen angegeben. Wenn sie in einem Stylesheet verwendet werden, wird eine \<number> wie folgt definiert:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    Diese Syntax entspricht der Definition in CSS (CSS2, Abschnitt 4.3.1).

    Wenn sie in einem SVG-Attribut verwendet werden, wird eine \<number> anders definiert, um Zahlen mit großer Größenordnung präziser anzugeben:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Innerhalb des SVG DOM wird eine \<number> als float, {{domxref("SVGNumber")}} oder eine {{domxref("SVGAnimatedNumber")}} dargestellt.

## Zahl-optional-Zahl

- \<number-optional-number>

  - : Ein Paar von \<number>s, wobei die zweite \<number> optional ist.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    Im SVG DOM wird eine \<number-optional-number> mit einem Paar von {{domxref("SVGAnimatedInteger")}} oder {{domxref("SVGAnimatedNumber")}}-Objekten dargestellt.

## Transparenzwert

- \<opacity-value>
  - : Die Transparenz der Farbe oder des Inhalts, mit dem das aktuelle Objekt gefüllt ist, als ein [\<number>](#zahl). Alle Werte außerhalb des Bereichs `0.0` (vollständig transparent) bis `1.0` (vollständig opak) werden in diesen Bereich begrenzt.

## Farbe

- \<paint>

  - : Die Werte für die Eigenschaften {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} definieren die Art der Farbe, die beim Füllen oder Zeichnen eines gegebenen Grafikelements verwendet werden soll.
    Die verfügbaren Optionen und die Syntax für \<paint> sind:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    Die `context-fill` und `context-stroke` Werte ermöglichen das Erben von Werten in [marker](/de/docs/Web/SVG/Element/marker)- und [use](/de/docs/Web/SVG/Element/use)-Elementen.

## Prozentsatz

- \<percentage>

  - : Prozentsätze werden als eine Zahl gefolgt von einem "`%`"-Zeichen angegeben:

    ```plain
    percentage ::= number "%"
    ```

    Beachten Sie, dass die Definition von \<number> davon abhängt, ob der Prozentsatz in einem Stylesheet oder in einem Attribut, das nicht auch ein Präsentationsattribut ist, angegeben wird.

    Prozentsatzwerte sind immer relativ zu einem anderen Wert (zum Beispiel einer Länge). Jedes Attribut oder jede Eigenschaft, die Prozentsätze zulässt, definiert auch den Bezugsabstand, auf den sich der Prozentsatz bezieht.

    Innerhalb des SVG DOM wird ein \<percentage> mit einem {{domxref("SVGNumber")}} oder {{domxref("SVGAnimatedNumber")}}-Objekt dargestellt.

## Zeit

- \<time>

  - : Ein Zeitwert ist eine \<number>, gefolgt von einem Zeit-Einheitskennzeichen. Die Zeit-Einheitskennzeichen sind:

    - `ms`: Millisekunden
    - `s`: Sekunden

## Transformationsliste

- \<transform-list>

  - : Eine \<transform-list> wird verwendet, um eine Liste von Koordinatensystemtransformationen anzugeben. Eine detaillierte Beschreibung der möglichen Werte für eine \<transform-list> wird in der {{SVGAttr("transform")}}-Attributdefinition gegeben.

    Innerhalb des SVG DOM wird ein \<transform-list> Wert mit einem {{domxref("SVGTransformList")}} oder {{domxref("SVGAnimatedTransformList")}}-Objekt dargestellt.

## URL

- URL

  - : Ein **U**niform **R**esource **L**ocator.

    Eine URL ist eine Sequenz von {{Glossary("Unicode")}}-Zeichen, die eine Adresse für eine interne oder externe Ressource bildet.

    Vor SVG 2 wurde stattdessen der eingeschränktere [IRI](#iri) Inhaltstyp verwendet, da die URL-Spezifikation zuvor nicht standardisiert war.
