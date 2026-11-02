---
title: XML mit XSLT transformieren
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Die Trennung von Inhalt und Darstellung ist ein zentrales Gestaltungsprinzip von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst abbilden und verdeutlichen, ohne durch Anforderungen an die spätere Darstellung der Daten eingeschränkt zu werden. Diese durchdachte Strukturierung ist besonders wichtig, da immer mehr Datenübertragungen automatisiert zwischen sehr unterschiedlichen, über ein Netzwerk verbundenen Systemen stattfinden.

Letztlich muss jedoch ein großer Teil der in XML-Dokumenten gespeicherten Inhalte für Menschen dargestellt werden. Da ein Browser eine vertraute und äußerst flexible Oberfläche bietet, eignet er sich ideal für die Ausgabe solcher Darstellungsformen von XML-Inhalten. Firefox wurde von Grund auf unter Verwendung vielfältiger XML-Technologien entwickelt und enthält alle Mechanismen, die zur Verarbeitung sowohl der ursprünglichen XML-Dokumente als auch der speziellen Stylesheets für deren Gestaltung und Anordnung zur HTML-Anzeige erforderlich sind. Die clientseitige Verarbeitung verringert dabei die Serverlast.

Derzeit unterstützt Gecko, die Layout-Engine von Firefox, zwei Arten von XML-Stylesheets. Für die grundlegende Steuerung des Erscheinungsbilds – etwa von Schriftarten, Farben und Positionen – verwendet Gecko [CSS](/de/docs/Web/CSS).

Hier geht es um die zweite von Gecko unterstützte Art von Stylesheets: XSLT-Stylesheets. XSLT steht für „eXtensible Stylesheet Language/Transform“ – eine treffende Bezeichnung. Mit XSLT können Autoren eines Stylesheets ein ursprüngliches XML-Dokument auf zwei wesentliche Arten transformieren: Sie können Inhalte bearbeiten und sortieren, bei Bedarf auch vollständig neu anordnen, und sie können die Inhalte in ein anderes Format umwandeln. Im Fall von Firefox steht dabei die unmittelbare Umwandlung in HTML im Vordergrund, das der Browser anschließend anzeigen kann.

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr leistungsfähige Sprache. Eine vollständige Erörterung würde den Rahmen dieses Artikels weit überschreiten. Ein kurzer Überblick über einige Grundbegriffe hilft jedoch dabei, die nachfolgende Beschreibung der Möglichkeiten von Netscape zu verstehen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Anders als CSS, das eine eigene Syntax besitzt, muss ein XSLT-Stylesheet daher sämtliche XML-Regeln erfüllen und unter anderem wohlgeformt sein. Das Transformationsmodell besteht folglich darin, ein XML-Dokument zur Transformation eines anderen XML-Dokuments zu verwenden.

Ein XSLT-Stylesheet wird durch einen standardisierten XSLT-Kopfbereich als solches gekennzeichnet. Das äußerste Element eines XSLT-Stylesheets muss `<xsl:stylesheet>` sein; alternativ ist `<xsl:transform>` zulässig. Dieses Element enthält mindestens eine Namespace-Deklaration und das obligatorische version-Attribut. Weitere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.

## Der XSLT-Namespace

Der obligatorische Namespace für XSLT lautet `"http://www.w3.org/1999/XSL/Transform"`. Namespaces sorgen in XML häufig für Verwirrung. Obwohl sie oft wie URIs aussehen, verweisen sie tatsächlich nicht auf eine Ressource unter der angegebenen Adresse. Stattdessen dienen sie als eindeutige Kennung für eine bekannte Gruppe von Elementen. Die Zeichenfolge `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die entsprechend gekennzeichnete Elemente der Gruppe von Tags zuordnet, die das W3C in der XSLT-Empfehlung von 1999 festgelegt hat. Eine weitere Zeichenfolge, die gelegentlich in Stylesheets vorkommt, ist `"http://www.w3.org/TR/WD-xsl"`. Sie weist auf die Übereinstimmung mit einem früheren Arbeitsentwurf des W3C-Dokuments hin – daher „WD“. Dieser ältere Namespace ist nicht mit dem schließlich vom W3C übernommenen Namespace kompatibel und wird von Netscape nicht unterstützt.

Die wiederholte Eingabe von `"http://www.w3.org/1999/XSL/Transform"` wäre mühsam und würde das Markup schwer lesbar machen. Deshalb gibt es einen Standardmechanismus, um dem Namespace im Kopfbereich des Stylesheets einen Kurznamen zuzuweisen. Ein vollständiges Beispiel für das öffnende stylesheet-Element könnte so aussehen:

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das `xmlns`-Pseudoattribut ordnet den Kurznamen `xsl` dem vollständigen Namespace zu, sodass er im restlichen Dokument verwendet werden kann. Deshalb steht vor dem obigen stylesheet-Element das Präfix `xsl:`. `xsl` ist zwar der übliche Kurzname, auch Präfix genannt, aber nicht vorgeschrieben; es kann ebenso ein anderer gewählt werden. Alle Beispiele in diesem Artikel setzen das Präfix `xsl` voraus.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformations-Engine, der sogenannte Prozessor, arbeitet nicht unmittelbar mit Dokumenten. Bevor eine Transformation stattfinden kann, müssen die ursprünglichen XML-Dokumente und die Stylesheet-Dokumente von einem Parser verarbeitet werden. Dieser erstellt im Arbeitsspeicher eine abstrakte Darstellung der Dokumentstruktur. Diese als Baum bezeichnete Darstellung wird vom Prozessor tatsächlich bearbeitet. Der Baum ist ein abstrakter Datentyp, also ein konzeptionelles Modell, das je nach Parser und Prozessor unterschiedlich implementiert werden kann. Netscape verwendet als Baumstruktur eine dem W3C-DOM ähnliche Struktur; andere Implementierungen sind jedoch ebenfalls möglich. Vorgegeben sind lediglich die Anordnung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen zueinander.

Der Baum besteht aus einer hierarchischen Struktur von Knoten. Er kann sieben verschiedene Knotentypen enthalten: den einzigen Wurzelknoten sowie Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Knoten für Verarbeitungsanweisungen und Namespace-Knoten.

An der Spitze des Baums steht der Wurzelknoten. Er entspricht keinem einzelnen Teil des XML-Dokuments, sondern repräsentiert das Dokument als Ganzes. Unter ihm befinden sich seine Kindknoten, bei denen es sich beispielsweise um Elemente, Kommentare oder Verarbeitungsanweisungen handeln kann. Einige dieser Kindknoten können wiederum Kindknoten besitzen. Das kann sich über mehrere Ebenen fortsetzen. Dabei gelten bestimmte Einschränkungen dafür, welche Knotentypen wo auftreten dürfen: Textknoten können beispielsweise keine Kindknoten haben.

Auch das Ergebnis der Verarbeitung durch den Prozessor ist ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und die Auswahl von Knoten

Im Wesentlichen besteht ein XSLT-Stylesheet aus einer Reihe von Regeln, den sogenannten Templates. Sie legen fest, dass jeder Knoten, der einem bestimmten Muster entspricht, auf eine bestimmte Weise bearbeitet und an einer bestimmten Stelle im Ergebnisbaum eingefügt werden soll. Wie dies im Einzelnen geschieht, bleibt dem Prozessor überlassen. Da die Ausführungsreihenfolge des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionen, die Seiteneffekte erzeugen. In dieser Hinsicht ähnelt es Lisp oder Scheme.

Für Transformationen muss der Prozessor einzelne Knoten im Baum gezielt finden können. Um dies zu ermöglichen, entschied sich das W3C für eine eigenständige Sprache: XPath, die auch außerhalb von XSLT verwendet wird. Wie der Name nahelegt, beschreibt XPath einen „Pfad“, dem der Prozessor durch den Baum zum gewünschten Knoten folgt. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden. Sie können mehrere Bedingungen für die Übereinstimmung, Angaben zur Beziehung zwischen Knoten und/oder Richtungsangaben innerhalb des Baums enthalten. Eine ausführlichere Beschreibung der XPath-Bestandteile, die in XSLT am häufigsten verwendet werden, folgt im Referenzabschnitt.

Mögliche Konflikte bei der Zuordnung von Templates werden anhand einer Reihe abgestufter Vorrangregeln aufgelöst. Im Allgemeinen hat eine spezifischere Template-Regel Vorrang vor einer weniger spezifischen. Sind die Regeln ansonsten gleichwertig, hat eine später im Dokument stehende Template-Regel Vorrang vor einer früheren.

Stylesheets können über eine Verarbeitungsanweisung mit einem XML-Dokument verknüpft werden. Um festzulegen, welches XSLT-Stylesheet ein bestimmtes XML-Dokument verarbeiten soll, fügen Sie dem XML-Dokument eine solche Anweisung hinzu. Wenn das Stylesheet beispielsweise inventory.xsl heißt und im selben Verzeichnis wie das XML-Dokument liegt, sieht die Verarbeitungsanweisung im XML-Dokument so aus:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Sie muss im Prolog-Abschnitt des XML-Dokuments stehen.

## Einfaches Beispiel

Dieses erste Beispiel zeigt die Grundlagen zum Einrichten einer XSLT-Transformation im Browser. Es verwendet ein XML-Dokument mit Informationen über einen Artikel – Titel, Autorenliste und Fließtext – und stellt diese Informationen in einer für Menschen lesbaren Form dar.

Das XML-Dokument (**example.xml**) ist nachfolgend dargestellt.

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

Die Verarbeitungsanweisung `?xml-stylesheet` in der XML-Datei gibt über ihr `href`-Attribut das anzuwendende XSLT-Stylesheet an.

Die XSL-Stylesheet-Datei (**example.xsl**) ist nachfolgend dargestellt:

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

Ein XSLT-Stylesheet beginnt mit dem Element `xsl:stylesheet`, das alle _Templates_ enthält, mit denen die endgültige Ausgabe erzeugt wird. Das obige Beispiel enthält zwei Templates: eines für den Wurzelknoten und eines für `Author`-Knoten. Das Template für den Wurzelknoten gibt den Titel des Artikels aus und veranlasst anschließend die Verarbeitung aller Templates (über `apply-templates`), die zu `Author`-Knoten passen, welche Kindknoten des `Authors`-Knotens sind.

So probieren Sie das Beispiel aus:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und legen Sie darin die oben aufgeführten Dateien `example.xml` und `example.xsl` an.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_local_http_server) im Verzeichnis mit diesen Dateien. So können Sie die Dateien im Browser aufrufen, als würden sie im Internet gehostet.

   > [!WARNING]
   > Wenn Sie die XML-Datei direkt aus dem Dateisystem öffnen, funktioniert das Beispiel nicht: Das Laden des Stylesheets aus dem Dateisystem ist eine [Cross-Origin-Anfrage](/de/docs/Web/HTTP/Guides/CORS) und wird standardmäßig blockiert.
   > Wenn Sie die XML-Datei und das Stylesheet auf demselben lokalen Server bereitstellen, haben beide denselben Ursprung.

3. Öffnen Sie **example.xml** im Browser.
4. Die Ausgabe im Browser sieht dann wie folgt aus:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## HTML erzeugen

Eine häufige Anwendung von XSLT im Browser ist die clientseitige Umwandlung von XML in HTML. Dieses Beispiel transformiert das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument.

Das `<body>`-Element des Artikels enthält nun HTML-Elemente (ein `<b>`- und ein `<u>`-Tag). Das XML-Dokument enthält sowohl HTML- als auch XML-Elemente, benötigt aber nur einen Namespace, nämlich für die XML-Elemente. Da kein HTML-Namespace vorhanden ist und die Verwendung des XHTML-Namespace XSL dazu zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, sorgt `xsl:output` im XSL-Stylesheet dafür, dass das Ergebnisdokument als HTML behandelt wird. Für die XML-Elemente ist ein eigener Namespace erforderlich: `http://devedge.netscape.com/2002/de`. Ihm wird das Präfix myNS zugewiesen: `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

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

Das verwendete XSL-Stylesheet benötigt zwei Namespaces: einen für die XSLT-Elemente und einen für die eigenen XML-Elemente im XML-Dokument. Mit dem Element `xsl:output` wird das Ausgabeformat des XSL-Stylesheets auf `HTML` gesetzt. Da die Ausgabe als HTML festgelegt ist und die resultierenden Elemente (blau markiert) keinen Namespace besitzen, werden sie als HTML-Elemente behandelt.

### XSL-Stylesheet mit zwei Namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Ein Template, das zum Wurzelknoten des XML-Dokuments passt, wird erstellt und zum Aufbau der Grundstruktur der HTML-Seite verwendet.

### Das grundlegende HTML-Dokument erstellen

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

Drei weitere `xsl:template`-Elemente sind nötig, um das Beispiel zu vervollständigen. Das erste `xsl:template` wird für die Autorenknoten verwendet, während das zweite den body-Knoten verarbeitet. Das dritte Template besitzt eine allgemeine Abgleichregel, die zu jedem Knoten und jedem Attribut passt. Es wird benötigt, um die HTML-Elemente im XML-Dokument zu erhalten: Es erfasst sie alle und kopiert sie in das durch die Transformation erzeugte HTML-Dokument.

### Die letzten drei Templates

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

Das vollständige XSLT-Stylesheet sieht wie folgt aus:

### Vollständiges XSLT-Stylesheet

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

## XSLT-/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Weiterführende Literatur

### Bücher

- **XSLT: Programmer's Reference, Second Edition**
  - **Autor**: Michael H. Kay
  - **Umfang**: 992 Seiten
  - **Verlag**: Wrox; 2. Auflage (3. Mai 2001)
  - **ISBN**: 0764543814
    - Michael Kay ist Mitglied der W3C XSL Working Group und Entwickler des Open-Source-XSLT-Prozessors Saxon. Er ist auch Autor des einzigen Buches zu diesem Thema, das eine zweite Auflage erreicht hat. Dieses umfangreiche, gut strukturierte Buch behandelt sämtliche Aspekte von XSLT erschöpfend und bisweilen ermüdend detailliert.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Umfang**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell ist leitender Entwickler bei IBM und ein bekannter Verfechter von XML-Technologien. Er hat mehrere Artikel und Tutorials zu verschiedenen Aspekten von XML auf der umfangreichen XML-Entwicklerwebsite von IBM veröffentlicht. Dieses Buch ist etwas weniger umfassend als das von Michael Kay, behandelt die Grundlagen aber gut und bietet einige interessante Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Umfang**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206
    - Wie der Titel erkennen lässt, bietet dieses Buch einen allgemeinen Überblick über XML. Kapitel 6 widmet sich speziell XSLT.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die wichtigste XSL-Seite**: <https://www.w3.org/Style/XSL/>
- **Überblick über die XSLT-Spezifikationen**: <https://www.w3.org/TR/xslt/>
- **Archiv öffentlicher Diskussionen zu Styles (CSS und XSLT)**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **Überblick über die XPath-Spezifikationen**: <https://www.w3.org/TR/xpath/>

### Artikel

- [XSL-Transformationen](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html) von Elliotte Rusty Harold
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials und Beispiele

- [Jenis XSLT-Seiten](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XPath-Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) von Miloslav Nic und Jiri Jirat
- [XSL-Tutorial](https://nwalsh.com/docs/tutorials/xsl/) von Paul Grosso und Norman Walsh
- [XSLT-Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) von Miloslav Nic
