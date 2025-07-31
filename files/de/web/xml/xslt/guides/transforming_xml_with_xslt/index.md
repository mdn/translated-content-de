---
title: Transformation von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 19bf2ac9d21bb9c97591c226d68edfbc0363a237
---

Die Trennung von Inhalt und Präsentation ist ein zentrales Designelement von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments ist darauf ausgelegt, wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerzuspiegeln und zu klären, ohne dass Angaben darüber gemacht werden müssen, wie diese Daten letztendlich präsentiert werden sollen. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datentransfers automatisiert und zwischen hochheterogenen Maschinen in einem Netzwerk durchgeführt werden.

Letztendlich muss jedoch ein Großteil der in XML-Dokumenten gespeicherten Inhalte menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und hochflexible Schnittstelle bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Firefox, von Grund auf mit einer Vielzahl von XML-Technologien entwickelt, integriert alle Mechanismen, die benötigt werden, um sowohl Original-XML-Dokumente zu verarbeiten als auch die spezialisierten Stylesheets, die zum Styling und zur Layout-Erstellung für die HTML-Anzeige verwendet werden. Dies reduziert die Serverlast durch Client-seitige Verarbeitung.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Steuerung von Erscheinungsbild — Schriftarten, Farben, Position usw. — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: dem XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist passend. XSLT ermöglicht es einem Stylesheet-Entwickler, ein primäres XML-Dokument auf zwei signifikante Weisen zu transformieren: Manipulation und Sortierung des Inhalts, einschließlich einer umfassenden Neuordnung, wenn gewünscht, und Transformation des Inhalts in ein anderes Format (im Falle von Firefox liegt der Fokus darauf, es im Handumdrehen in HTML zu konvertieren, das dann vom Browser angezeigt werden kann).

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine ausführliche Diskussion darüber geht weit über den Rahmen dieses Artikels hinaus, aber eine kurze Besprechung einiger grundlegender Konzepte wird hilfreich sein, um das folgende Netzscape-Fähigkeitsbeschreibung zu verstehen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax besitzt, ist ein XSLT-Stylesheet ein XML-Dokument, das allen XML-Regeln, einschließlich der Wohlgeformtheit, entsprechen muss. Das Modell für die Transformation besteht darin, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.

Ein XSLT-Stylesheet wird als solches durch die Einbindung eines standardmäßigen XSLT-Headers gekennzeichnet. Das äußere Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element wird mindestens eine Namespace-Deklaration und das obligatorische Attribut `version` enthalten. Andere Namespaces und drei optionale Attribute können ebenfalls hinzugefügt werden.

## Der XSLT-Namespace

Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`. Namespaces sind das Thema einiger Verwirrung in XML. Obwohl Namespaces oft wie URIs erscheinen, beziehen sie sich tatsächlich nicht auf eine Ressource, die unter dieser Adresse zu finden ist. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für eine bekannte Menge von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die so markierten Elemente als zur von der W3C im XSLT-Empfehlung von 1999 bezeichneten Tag-Menge zugehörig kennzeichnet. Ein weiterer gelegentlich in Stylesheets gesehener String, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Konformität mit einem früheren Arbeitsentwurf (daher das WD) des W3C-Dokuments an. Dieser letztere Namespace ist nicht kompatibel mit dem letztendlich von der W3C angenommenen und wird von Netscape nicht unterstützt.

Da die mehrfache Eingabe von `"http://www.w3.org/1999/XSL/Transform"` mühsam wäre und das Markup schwer zu lesen machen würde, gibt es einen Standardmechanismus zum Zuweisen eines Kurznamens zum Namespace im Stylesheet-Header. Ein volles Beispiel für das öffnende Stylesheet-Element könnte so aussehen.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das `xmlns`-Pseudoattribut ordnet den Kurznamen `xsl` dem vollständigen Namespace zur Verwendung im gesamten folgenden Dokument zu. Deshalb ist das obige Stylesheet-Element mit `xsl:` vorangestellt. Obwohl `xsl` der konventionell verwendete Kurzname (genannt Präfix) ist, ist er nicht zwingend erforderlich, und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des Präfixes `xsl` aus.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformationseinheit, genannt Prozessor, arbeitet nicht direkt an Dokumenten. Bevor eine Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokument(e) durch einen Parser geleitet werden, der eine abstrakte Darstellung der Dokumentstruktur im Speicher erstellt. Diese Darstellung, genannt der Baum, ist das, was tatsächlich vom Prozessor manipuliert wird. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann. :Netscape verwendet eine Struktur, die dem W3C DOM als Baumstruktur ähnelt, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen.

Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungshinweisknoten und Namespaceknoten.

An der Spitze des Baumes steht der Wurzelknoten. Der Wurzelknoten entspricht keinem einzelnen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich dessen Kinder, die Elemente, Kommentare, Verarbeitungshinweise und so weiter sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und das kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen, welche Knotentypen wo auftreten können: Zum Beispiel können Textknoten keine Kinder haben.

Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und Knotenauswahl

Im Wesentlichen ist ein XSLT-Stylesheet eine Menge von Regeln, genannt Templates, die erklären, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert werden und an dieser spezifischen Position im Ergebnissbaum enden sollte. Die Einzelheiten, wie dies zu erreichen ist, überlässt man dem Prozessor. Da die Ausführungsreihenfolge des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionen, die Nebeneffekte erzeugen. Darin ähnelt es Lisp oder Scheme.

Transformationen hängen davon ab, dass der Prozessor einzelne Knoten im Baum genau identifizieren kann. Um dies zu erleichtern, hat das W3C beschlossen, eine eigene Sprache, XPath, zu verwenden, die auch außerhalb des XSLT-Kontexts Verwendung findet. Wie der Name schon sagt, definiert XPath einen „Pfad“, den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden müssen; Ausdrücke, die eine Reihe von Bedingungen enthalten können, eine Möglichkeit der Assoziation von Knoten und/oder eine Angabe der Richtung innerhalb des Baumes. Eine ausführlichere Beschreibung der am häufigsten in XSLT verwendeten Teile von XPath folgt im Referenzabschnitt.

Potenzielle Konflikte im Template-Matching werden durch einen Satz von Kaskaden-Vorrangregeln gelöst. Im Allgemeinen hat eine spezifischere Template-Regel Vorrang vor einer weniger spezifischen, und, unter sonst gleichen Bedingungen, hat eine Template-Regel, die später im Dokument erscheint, Vorrang vor einer, die früher erscheint.

Stylesheets können über eine Verarbeitungshinweis an ein XML-Dokument angehängt werden. Um anzugeben, welches XSLT-Stylesheet verwendet werden soll, um ein bestimmtes XML-Dokument zu verarbeiten, fügen Sie eine Verarbeitungshinweis in das XML-Dokument selbst ein. Zum Beispiel, wenn das Stylesheet `inventory.xsl` genannt wird und sich im selben Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungshinweis im XML-Dokument so aussehen:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Dies muss im Prolog-Abschnitt des XML-Dokuments platziert werden.

## Grundlegendes Beispiel

Dieses erste Beispiel demonstriert die Grundlagen der Einrichtung einer XSLT-Transformation in einem Browser. Das Beispiel nimmt ein XML-Dokument, das Informationen über einen Artikel (Titel, Autorenliste und Haupttext) enthält, und präsentiert es in einer menschenlesbaren Form.

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

Die `?xml-stylesheet`-Verarbeitungshinweis im XML-Dokument gibt das anzuwendende XSLT-Stylesheet in ihrem `href`-Attribut an.

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

Ein XSLT-Stylesheet beginnt mit dem `xsl:stylesheet`-Element, das alle _Templates_ enthält, die verwendet werden, um die endgültige Ausgabe zu erstellen. Das obige Beispiel enthält zwei Templates - eines, das dem Wurzelknoten entspricht, und eines, das `Author`-Knoten entspricht. Das Template, das dem Wurzelknoten entspricht, gibt den Titel des Artikels aus und sagt dann, dass alle Templates verarbeitet werden sollen (über `apply-templates`), die den `Author`-Knoten entsprechen, die Kinder des `Authors`-Knotens sind.

Um das Beispiel auszuprobieren:

1. Erstellen Sie ein Verzeichnis in Ihrem Dateisystem und erstellen Sie darin die Dateien `example.xml` und `example.xsl`, wie oben angegeben.
2. [Starten Sie einen lokalen Server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) im Directory, das die Dateien enthält.
   Dadurch können Sie die Dateien im Directory so durchsuchen, als ob sie im Internet gehostet wären.

   > [!WARNING]
   > Das Öffnen der XML-Datei direkt aus dem Dateisystem wird nicht funktionieren, da das Laden des Stylesheets aus dem Dateisystem eine [Cross-Origin-Anfrage](/de/docs/Web/HTTP/Guides/CORS) ist und standardmäßig blockiert wird.
   > Das Hosten der XML und des Stylesheets auf demselben lokalen Server stellt sicher, dass sie denselben Ursprung haben.

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

Eine häufige Anwendung von XSLT im Browser besteht darin, XML auf dem Client in HTML zu transformieren. Dieses Beispiel wird das Eingabedokument (example2.xml), das Informationen über einen Artikel enthält, in ein HTML-Dokument umwandeln.

Das `<body>`-Element des Artikels enthält jetzt HTML-Elemente (ein `<b>` und ein `<u>` Tag). Das XML-Dokument enthält sowohl HTML-Elemente als auch XML-Elemente, aber es wird nur ein Namespace benötigt, nämlich für die XML-Elemente. Da es keinen HTML-Namespace gibt, und die Verwendung des XHTML-Namespace das XSL dazu zwingen würde, ein XML-Dokument zu erstellen, das sich nicht wie ein HTML-Dokument verhält, sorgt `xsl:output` im XSL Stylesheet dafür, dass das resultierende Dokument als HTML behandelt wird. Für die XML-Elemente wird unser eigener Namespace benötigt, `http://devedge.netscape.com/2002/de`, und es wird der Präfix `myNS` `(xmlns:myNS="http://devedge.netscape.com/2002/de")` zugewiesen.

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

Das verwendete XSL-Stylesheet benötigt zwei Namespaces - einen für die XSLT-Elemente und einen für unsere eigenen im XML-Dokument verwendeten XML-Elemente. Die Ausgabe des XSL-Stylesheets wird durch das `xsl:output`-Element auf `HTML` gesetzt. Indem die Ausgabe auf HTML gesetzt wird und kein Namespace auf die resultierenden Elemente (blau gefärbt) angewendet wird, werden diese Elemente als HTML-Elemente behandelt.

### XSL-Stylesheet mit 2 Namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Ein Template, das dem Wurzelknoten des XML-Dokuments entspricht, wird erstellt und verwendet, um die grundlegende Struktur der HTML-Seite zu erstellen.

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

Drei weitere `xsl:template`s werden benötigt, um das Beispiel abzuschließen. Das erste `xsl:template` wird für die Author-Knoten verwendet, während das zweite den Body-Knoten verarbeitet. Das dritte Template hat eine allgemeine Matching-Regel, die auf jeden Knoten und jedes Attribut passt. Es wird benötigt, um die HTML-Elemente im XML-Dokument zu bewahren, da es alle von ihnen übereinstimmt und in das HTML-Dokument kopiert, das die Transformation erstellt.

### Letzte 3 Templates

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

Das endgültige XSLT-Stylesheet sieht folgendermaßen aus:

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

## XSLT/XPath Referenz

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
    - Michael Kay ist Mitglied der W3C XSL Arbeitsgruppe und Entwickler seines eigenen Open-Source XSLT Prozessors, Saxon. Er ist auch der Autor des einzigen Buchs zu diesem Thema, das eine zweite Auflage erreicht hat. Dies ist ein sehr großes Buch, gut strukturiert und erschöpfend, wenn auch manchmal ermüdend im Detail, und deckt alle möglichen Grundlagen der XSLT-Geschichte ab.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Länge**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell ist ein leitender Entwickler bei IBM und ein prominenter Evangelist für XML-Technologien im Allgemeinen. Er ist Autor mehrerer Artikel und Tutorials zu verschiedenen Aspekten von XML auf IBMs umfangreicher XML-Entwicklerseite. Dieses Buch ist nicht ganz so umfassend wie Michael Kays, aber es behandelt die Grundlagen gut und bietet einige faszinierende Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Länge**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206
    - Wie der Titel andeutet, ist dies ein Überblick über XML im Allgemeinen. Kapitel 6 ist speziell XSLT gewidmet.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die Haupt-XSL-Seite**: <https://www.w3.org/Style/XSL/>
- **Übersicht über XSLT-Spezifikationen**: <https://www.w3.org/TR/xslt/>
- **Archiv öffentlicher Style (CSS und XSLT) Diskussionen**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **Übersicht über XPath-Spezifikationen**: <https://www.w3.org/TR/xpath/>

### Artikel

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) von Don R. Day
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials/Beispiele

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)
