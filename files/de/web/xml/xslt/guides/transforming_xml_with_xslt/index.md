---
title: Umwandlung von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Die Trennung von Inhalt und Präsentation ist ein zentrales Gestaltungsmerkmal von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerspiegeln und klären, ohne dass es erforderlich ist, Hinweise darauf zu geben, wie diese Daten letztendlich präsentiert werden sollen. Diese intelligente Strukturierung ist insbesondere wichtig, da immer mehr Datentransfers automatisiert ablaufen und zwischen hochgradig heterogenen Maschinen über ein Netzwerk stattfinden.

Letztendlich muss jedoch ein Großteil des Inhalts, der in XML-Dokumenten gespeichert ist, menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und hochflexible Benutzeroberfläche bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten zu liefern. Firefox, das von Grund auf unter Verwendung einer Vielzahl von XML-Technologien entwickelt wurde, beinhaltet alle Mechanismen, die erforderlich sind, um sowohl ursprüngliche XML-Dokumente als auch die spezialisierten Stylesheets zu verarbeiten, die verwendet werden, um sie für die HTML-Anzeige zu stylen und zu layouten, was die Serverlast mit clientseitiger Verarbeitung reduziert.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Kontrolle über das Erscheinungsbild — Schriftarten, Farben, Position usw. — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist passend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei signifikante Arten zu transformieren: durch Manipulation und Sortierung des Inhalts, einschließlich einer umfassenden Neuordnung, falls gewünscht, und durch Umwandlung des Inhalts in ein anderes Format (und im Fall von Firefox liegt der Fokus darauf, es spontan in HTML zu konvertieren, das dann vom Browser angezeigt werden kann).

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine vollständige Diskussion darüber würde den Rahmen dieses Artikels sprengen, aber eine kurze Diskussion einiger grundlegender Konzepte wird hilfreich sein, um das Verständnis für die folgenden Fähigkeiten von Netscape zu vertiefen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Im Gegensatz zu CSS, das eine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das sich an alle XML-Regeln, einschließlich der Wohlgeformtheit, halten muss. Das Modell für die Transformation ist also, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.

Ein XSLT-Stylesheet wird als solches durch die Einbeziehung eines standardisierten XSLT-Kopfs markiert. Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element wird mindestens eine Namespace-Deklaration und das obligatorische Versionsattribut enthalten. Weitere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.

## Der XSLT-Namespace

Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`. Namespaces sind in XML ein häufiges Verwirrungsthema. Obwohl Namespaces oft wie URIs erscheinen, beziehen sie sich in Wirklichkeit nicht auf eine Ressource an dieser Adresse. Stattdessen sind sie eine Möglichkeit, einen eindeutigen Bezeichner für einen bekannten Satz von Elementen zu spezifizieren. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die Elemente kennzeichnet, die zu dem von der W3C im XSLT-Merkmal 1999 festgelegten Satz von Tags gehören. Ein weiterer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, weist auf die Einhaltung eines früheren Arbeitsentwurfs (daher das WD) des W3C-Dokuments hin. Dieser letztere Namespace ist nicht mit dem letztendlich von der W3C angenommenen Namespace kompatibel und wird von Netscape nicht unterstützt.

Da es mühsam wäre, `"http://www.w3.org/1999/XSL/Transform"` ständig neu zu tippen und das Markup schwer lesbar wird, gibt es einen Standardmechanismus, um dem Namespace im Stylesheet-Kopf einen Kurznamen zuzuweisen. Ein vollständiges Beispiel für das eröffnende Stylesheet-Element könnte so aussehen.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das `xmlns`-Pseudoattribut weist den Kurznamen `xsl` dem vollständigen Namespace zu, damit er im gesamten folgenden Dokument verwendet werden kann. So wird das Stylesheet-Element oben mit `xsl:` vorangestellt. Obwohl `xsl` der konventionell verwendete Kurzname (genannt Präfix) ist, ist dies nicht zwingend erforderlich, und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des `xsl`-Präfixes aus.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformationsmaschine, genannt Prozessor, arbeitet nicht direkt mit Dokumenten. Bevor eine Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokumente durch einen Parser laufen, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, als Baum bezeichnet, ist das, was tatsächlich vom Prozessor manipuliert wird. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann. Netscape verwendet eine Struktur, die der W3C DOM-Ähnlich ist, als seine Baumstruktur, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, deren Eigenschaften und deren Beziehungen.

Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Arten von Knoten bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungshinweisknoten und Namespace-Knoten.

An der Spitze des Baumes steht der Wurzelknoten. Der Wurzelknoten entspricht keinem einzelnen Teil des XML-Dokuments: Er stellt das Dokument als Ganzes dar. Unter dem Wurzelknoten befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungshinweise usw. sein können. Einige dieser Kinder können auch Kinder haben. Und dies kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Einschränkungen dafür, welche Art von Knoten wo auftreten kann: Beispielsweise können Textknoten keine Kinder haben.

Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und Knotenauswahl

Im Grunde genommen ist ein XSLT-Stylesheet eine Menge von Regeln, sogenannte Templates, die festlegen, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert werden soll und an dieser spezifischen Position im Ergebnisbaum enden soll. Die Einzelheiten, wie dies erreicht werden soll, überlässt man dem Prozessor. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Seiteneffekte erzeugt. In dieser Hinsicht ähnelt es Lisp oder Scheme.

Transformationen hängen davon ab, dass der Prozessor einzelne Knoten im Baum genau ansprechen kann. Um dies zu erleichtern, hat das W3C beschlossen, eine separate Sprache, XPath, zu verwenden, die auch außerhalb des XSLT-Kontexts verwendet werden kann. Wie der Name impliziert, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die bewertet werden müssen, Ausdrücken, die eine Reihe von zu erfüllenden Bedingungen, eine Art der Zuordnung von Knoten und/oder eine Richtungsangabe im Baum umfassen können. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath finden Sie im Referenzabschnitt.

Potenzielle Konflikte bei der Template-Übereinstimmung werden durch eine Reihe aufeinanderfolgender Vorrangregeln gelöst. Im Allgemeinen hat eine spezifischere Template-Regel Vorrang vor einer weniger spezifischen, und, alles andere gleich, eine Template-Regel, die später im Dokument erscheint, hat Vorrang vor einer, die früher erscheint.

Stylesheets können über einen Verarbeitungshinweis an ein XML-Dokument angehängt werden. Um anzugeben, welches XSLT-Stylesheet zur Verarbeitung eines bestimmten XML-Dokuments verwendet werden soll, fügen Sie einen Verarbeitungshinweis in das XML-Dokument selbst ein. Zum Beispiel, wenn das Stylesheet inventory.xsl heißt und im gleichen Verzeichnis wie das XML-Dokument liegt, würde der Verarbeitungshinweis im XML-Dokument so aussehen:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Dies muss im Prolog des XML-Dokuments platziert werden.

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Weitere Lektüre

### Bücher

- **XSLT: Programmer's Reference, Second Edition**
  - **Autor**: Michael H. Kay
  - **Umfang**: 992 Seiten
  - **Verlag**: Wrox; 2. Auflage (3. Mai 2001)
  - **ISBN**: 0764543814
    - Michael Kay ist Mitglied der W3C XSL Working Group und der Entwickler seines eigenen Open-Source-XSLT-Prozessors, Saxon. Er ist auch der Autor des einzigen Buches zu diesem Thema, das eine zweite Auflage erreicht hat. Dies ist ein sehr umfangreiches Buch, gut strukturiert und erschöpfend, wenn auch manchmal erschöpfend detailliert, und deckt alle möglichen Grundlagen der XSLT-Geschichte ab.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Umfang**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell ist ein leitender Entwickler bei IBM und ein prominenter Verfechter von XML-Technologien im Allgemeinen. Er ist Autor mehrerer Artikel und Tutorials zu verschiedenen Aspekten von XML auf der umfangreichen XML-Entwicklerseite von IBM. Dieses Buch ist etwas weniger umfassend als das von Michael Kay, deckt aber die Grundlagen gut ab und bietet einige faszinierende Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Umfang**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206
    - Wie der Titel andeutet, handelt es sich um einen Überblick über XML im Allgemeinen. Kapitel 6 ist speziell XSLT gewidmet.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die Hauptseite von XSL**: <https://www.w3.org/Style/XSL/>
- **Überblick über die XSLT-Spezifikationen**: <https://www.w3.org/TR/xslt/>
- **Archiv der öffentlichen Stil (CSS und XSLT) Diskussionen**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **Überblick über die XPath-Spezifikationen**: <https://www.w3.org/TR/xpath/>

### Artikel

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) von Don R. Day
- [Was ist XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials/Beispiele

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)
