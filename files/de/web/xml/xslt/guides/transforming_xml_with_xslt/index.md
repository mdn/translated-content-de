---
title: Transformation von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 5431a637ec932c0c8c978210809e0994f0cf9ee1
---

Die Trennung von Inhalt und Präsentation ist ein zentrales Gestaltungselement von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerspiegeln und klären, ohne einen Hinweis darauf geben zu müssen, wie diese Daten letztendlich präsentiert werden sollen. Diese intelligente Strukturierung ist besonders wichtig, da mehr und mehr Datentransfers automatisiert ablaufen und zwischen hochgradig heterogenen, durch ein Netzwerk verbundenen Maschinen stattfinden.

Letztendlich müssen jedoch viele der in XML-Dokumenten gespeicherten Inhalte menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und sehr flexible Schnittstelle bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Firefox, das von Grund auf mit einer Vielzahl von XML-Technologien gebaut wurde, verfügt über alle Mechanismen, die benötigt werden, um sowohl ursprüngliche XML-Dokumente als auch die spezialisierten Stylesheets, die für die HTML-Anzeige verwendet werden, zu verarbeiten und so die Serverlast durch clientseitige Verarbeitung zu reduzieren.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Kontrolle des Aussehens — Schriftarten, Farben, Position und so weiter — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform und der Name ist treffend. XSLT erlaubt es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Weise zu transformieren: die Manipulation und Sortierung des Inhalts, einschließlich einer kompletten Neuordnung, falls gewünscht, und die Umwandlung des Inhalts in ein anderes Format (im Fall von Firefox liegt der Fokus darauf, es umgehend in HTML umzuwandeln, damit es vom Browser angezeigt werden kann).

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine umfassende Diskussion über sie liegt weit außerhalb des Rahmens dieses Artikels, aber eine kurze Diskussion über einige Grundkonzepte wird hilfreich sein, um die Beschreibung der Fähigkeiten von Netscape, die folgt, zu verstehen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Anders als CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln einhalten muss, einschließlich der Wohlgeformtheit. Das Modell für die Transformation ist also, dass ein XML-Dokument genutzt wird, um ein anderes XML-Dokument zu transformieren.

Ein XSLT-Stylesheet wird durch die Aufnahme eines standardmäßigen XSLT-Headers als solches markiert. Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element wird mindestens eine Namensraumdeklaration und das zwingend erforderliche Versionsattribut enthalten. Weitere Namensräume und drei optionale Attribute können auch enthalten sein.

## Der XSLT-Namensraum

Der obligatorische Namensraum für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`. Namensräume sind in XML oftmals Verwirrung stiftend. Trotz der Tatsache, dass sie häufig wie URIs erscheinen, beziehen sie sich in Wirklichkeit nicht auf eine Ressource an dieser Adresse. Vielmehr stellen sie eine Möglichkeit dar, einen eindeutigen Bezeichner für eine bekannte Menge von Elementen anzugeben. Die Zeichenfolge `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die markierten Elemente als zu dem vom W3C in der XSLT-Empfehlung von 1999 designierten Set von Tags zugehörig bezeichnet. Eine andere Zeichenfolge, die gelegentlich in Stylesheets gesehen wird, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Konformität mit einem früheren Entwurf (daher das WD) des W3C-Dokuments an. Dieser letztere Namensraum ist nicht kompatibel mit dem, den das W3C letztendlich angenommen hat, und wird von Netscape nicht unterstützt.

Da das wiederholte Eintippen von `"http://www.w3.org/1999/XSL/Transform"` mühsam wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus für die Zuweisung eines Kurznamens zum Namensraum im Stylesheet-Header. So könnte ein vollständiges Beispiel des öffnenden Stylesheet-Elements folgendermaßen aussehen.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das Pseudoattribut `xmlns` ordnet den Kurznamen `xsl` dem vollständigen Namensraum zu, der im gesamten folgenden Dokument verwendet wird. Daher ist das Stylesheet-Element oben mit `xsl:` vorangestellt. Obwohl `xsl` der konventionell verwendete Kurzname (Prefix genannt) ist, ist er nicht zwingend erforderlich und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des `xsl`-Präfixes aus.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformations-Engine, genannt Prozessor, arbeitet nicht direkt mit Dokumenten. Bevor die Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokument(e) durch einen Parser laufen, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, genannt Baum, ist das, was vom Prozessor tatsächlich manipuliert wird. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann. Netscape verwendet eine Struktur, die dem W3C-DOM als Baumstruktur ähnelt, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, deren Eigenschaften und deren Beziehungen.

Der Baum besteht aus einem hierarchischen Framework von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Element-Knoten, Text-Knoten, Attribut-Knoten, Kommentar-Knoten, Verarbeitungsanweisungsknoten und Namensraum-Knoten.

An der Spitze des Baums steht der Wurzelknoten. Der Wurzelknoten entspricht keinem einzelnen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungsanweisungen usw. sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und dies kann sich über mehrere Ebenen erstrecken. Es gibt bestimmte Beschränkungen, welche Art von Knoten wo auftreten kann: Beispielsweise können Textknoten keine Kinder haben.

Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und Knotenauswahl

Im Wesentlichen ist ein XSLT-Stylesheet eine Reihe von Regeln, sogenannte Vorlagen, die erklären, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert und an dieser speziellen Position im Ergebnisbaum enden soll. Die Einzelheiten, wie dies erreicht werden soll, werden dem Prozessor überlassen. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebeneffekte erzeugt. In diesem Punkt ähnelt es Lisp oder Scheme.

Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum zu identifizieren. Um dies zu erleichtern, hat das W3C beschlossen, eine separate Sprache zu verwenden, XPath, die auch außerhalb des XSLT-Kontexts Verwendung findet. Wie der Name impliziert, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um den gewünschten Knoten zu erreichen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden, Ausdrücken, die eine Anzahl von zu erfüllenden Bedingungen, eine Möglichkeit zur Assoziation von Knoten und/oder eine Richtungsangabe innerhalb des Baums enthalten können. Eine umfassendere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath folgt im Referenzabschnitt.

Potenzielle Konflikte bei der Vorlagenzuordnung werden durch die Verwendung eines Satzes von kaskadierenden Vorrangregeln gelöst. Im Allgemeinen hat eine spezifischere Vorlagenregel Vorrang vor einer weniger spezifischen und, bei sonst gleichen Bedingungen, eine Vorlagenregel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.

Stylesheets können über eine Verarbeitungsanweisung einem XML-Dokument angefügt werden. Um anzugeben, welches XSLT-Stylesheet verwendet werden soll, um ein bestimmtes XML-Dokument zu verarbeiten, fügen Sie eine Verarbeitungsanweisung in das XML-Dokument selbst ein. Wenn das Stylesheet beispielsweise inventory.xsl heißt und sich im selben Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungsanweisung im XML-Dokument so aussehen:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Dies muss im Prolog-Abschnitt des XML-Dokuments platziert werden.

## Grundlegendes Beispiel

Dieses erste Beispiel zeigt die Grundlagen zur Einrichtung einer XSLT-Transformation in einem Browser.
Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel enthält (Titel, Liste der Autoren und Haupttext) und präsentiert es in lesbarer Form für Menschen.

Das XML-Dokument (**example.xml**) wird unten gezeigt.

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example.xsl"?>
<Article>
  <Title>My Article</Title>
  <Authors>
    <Author>Mr. Foo</Author>
    <Author>Mr. Bar</Author>
  </Authors>
  <Body>This is my article text.</Body>
</Article>
```

Die `?xml-stylesheet` Verarbeitungsanweisung in der XML-Datei gibt im `href`-Attribut das anzuwendende XSLT-Stylesheet an.

Diese XSL-Stylesheet-Datei (**example.xsl**) wird unten gezeigt:

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title"/>
    Authors: <xsl:apply-templates select="/Article/Authors/Author"/>
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>
```

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet`-Element, das alle _Vorlagen_ enthält, die benutzt werden, um die finale Ausgabe zu erstellen. Das obige Beispiel hat zwei Vorlagen - eine, die dem Wurzelknoten entspricht und eine, die den `Author`-Knoten entspricht. Die Vorlage, die dem Wurzelknoten entspricht, gibt den Titel des Artikels aus und sagt dann, dass alle Vorlagen (über `apply-templates`) verarbeitet werden sollen, die den `Author`-Knoten entsprechen, der Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und erzeugen Sie darin die Dateien `example.xml` und `example.xsl`, die oben aufgelistet sind.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Verzeichnis, das die Dateien enthält. Dies ermöglicht Ihnen, die Dateien im Verzeichnis so zu durchsuchen, als ob sie im Internet gehostet wären.

   > [!WARNING]
   > Das direkte Öffnen der XML-Datei vom Dateisystem wird nicht funktionieren, da das Laden des Stylesheets vom Dateisystem eine [Cross-Origin-Anfrage](/de/docs/Web/HTTP/Guides/CORS) darstellt und standardmäßig nicht erlaubt wird. Das Hosten von XML und Stylesheet auf demselben lokalen Server stellt sicher, dass sie denselben Ursprung haben.

3. Öffnen Sie **example.xml** im Browser.
4. Die Browserausgabe wird dann wie unten gezeigt angezeigt:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## Generierung von HTML

Eine häufige Anwendung von XSLT im Browser ist die Transformation von XML in HTML auf dem Client. Dieses Beispiel wird das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument umwandeln.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>`- und `<u>`-Tag). Das XML-Dokument enthält sowohl HTML-Elemente als auch XML-Elemente, aber nur ein Namensraum ist notwendig, nämlich für die XML-Elemente. Da es keinen HTML-Namensraum gibt und die Verwendung des XHTML-Namensraums das XSL zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, stellt das `xsl:output` im XSL-Stylesheet sicher, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente benötigen wir unseren eigenen Namensraum, `http://devedge.netscape.com/2002/de`, und dieser wird mit dem Präfix myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")` versehen.

### XML-Datei

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
  <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
    <myNS:Title>My Article</myNS:Title>
    <myNS:Authors>
      <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
      <myNS:Author>Mr. Bar</myNS:Author>
    </myNS:Authors>
    <myNS:Body>
      The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
    </myNS:Body>
  </myNS:Article>
```

Das verwendete XSL-Stylesheet muss zwei Namensräume enthalten - einen für die XSLT-Elemente und einen für unsere eigenen XML-Elemente, die im XML-Dokument verwendet werden. Die Ausgabe des XSL-Stylesheets wird auf `HTML` gesetzt, indem das `xsl:output`-Element verwendet wird. Indem die Ausgabe auf HTML gesetzt wird und es keinen Namensraum für die resultierenden Elemente gibt (blau gefärbt), werden diese Elemente als HTML-Elemente behandelt.

### XSL-Stylesheet mit 2 Namensräumen

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Eine Vorlage, die auf den Wurzelknoten des XML-Dokuments passt, wird erstellt und verwendet, um die grundlegende Struktur der HTML-Seite zu erstellen.

### Erstellen des grundlegenden HTML-Dokuments

```xml
…
<xsl:template match="/">
<html>

  <head>

    <title>
      <xsl:value-of select="/myNS:Article/myNS:Title"/>
    </title>

    <style>
      .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
    </style>

  </head>

  <body>
    <p class="myBox">
      <span class="title">
        <xsl:value-of select="/myNS:Article/myNS:Title"/>
      </span> </br>

      Authors:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

Drei weitere `xsl:template` sind erforderlich, um das Beispiel zu vervollständigen. Die erste `xsl:template` wird für die Author-Knoten verwendet, während die zweite den Body-Knoten verarbeitet. Die dritte Vorlage hat eine allgemeine Passregel, die auf jeden Knoten und jedes Attribut passt. Sie ist notwendig, um die HTML-Elemente im XML-Dokument zu erhalten, da sie alle von ihnen passt und in das HTML-Dokument, das die Transformation erstellt, kopiert.

### Letzte 3 Vorlagen

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
    ::   <b>  <xsl:value-of select="@company" />  </b>
  </xsl:if>

  <br />
</xsl:template>
```

```xml
<xsl:template match="myNS:Body">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>
…
```

Das endgültige XSLT-Stylesheet sieht wie folgt aus:

### Endgültiges XSLT-Stylesheet

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
      --   <xsl:value-of select="." />

    <xsl:if test="@company">
      ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Für weiterführende Lektüre

### Bücher

- **XSLT: Programmer's Reference, Second Edition**
  - **Autor**: Michael H. Kay
  - **Länge**: 992 Seiten
  - **Verlag**: Wrox; 2. Auflage (3. Mai 2001)
  - **ISBN**: 0764543814
    - Michael Kay ist Mitglied der W3C XSL Working Group und der Entwickler seines eigenen Open-Source XSLT-Prozessors, Saxon. Er ist auch der Autor des einzigen Buches zu diesem Thema, das eine zweite Auflage erreicht hat. Dies ist ein sehr umfangreiches Buch, gut strukturiert und erschöpfend, manchmal ermüdend in den Details, und deckt jede mögliche Basis in der XSLT-Geschichte ab.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Länge**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell ist ein Senior-Entwickler bei IBM und ein bekannter Evangelist für XML-Technologien im Allgemeinen. Er ist Autor mehrerer Artikel und Tutorials über verschiedene Aspekte von XML auf IBMs umfangreicher XML-Entwicklerseite. Dieses Buch ist etwas weniger umfassend als das von Michael Kay, deckt die Grundlagen jedoch gut ab und bietet einige faszinierende Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Länge**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206
    - Wie der Titel andeutet, bietet dies einen Überblick über XML im Allgemeinen. Kapitel 6 ist speziell XSLT gewidmet.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die Haupt-XSL-Seite**: <https://www.w3.org/Style/XSL/>
- **XSLT-Spezifikationsübersicht**: <https://www.w3.org/TR/xslt/>
- **Archiv öffentlicher Stil (CSS und XSLT) Diskussionen**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **XPath-Spezifikationsübersicht**: <https://www.w3.org/TR/xpath/>

### Artikel

- [XSL Transformations](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html) von Elliotte Rusty Harold
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials/Beispiele

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) von Miloslav Nic, Jiri Jirat
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/) von Paul Grosso, Norman Walsh
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) von Miloslav Nic
