---
title: Transformation von XML mit XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: de7efb5a4741ef1ae33a6e160066801c745633e4
---

Die Trennung von Inhalt und Darstellung ist ein zentrales Designelement von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments soll wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst aufzeigen und verdeutlichen, ohne dass es notwendig ist, Informationen darüber bereitzustellen, wie diese Daten letztendlich präsentiert werden sollten. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datenübertragungen automatisiert ablaufen und zwischen hochgradig heterogenen Maschinen erfolgen, die über ein Netzwerk verbunden sind.

Letztendlich muss jedoch ein Großteil der in XML-Dokumenten gespeicherten Inhalte menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und äußerst flexible Oberfläche bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Firefox, das auf einer Vielzahl von XML-Technologien basiert, integriert alle Mechanismen, die erforderlich sind, um sowohl originale XML-Dokumente als auch die spezialisierten Stylesheets zu verarbeiten, die zur Gestaltung und Layout-Zuweisung für die HTML-Anzeige verwendet werden. Dies reduziert die Serverlast durch clientseitige Verarbeitung.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Kontrolle des Erscheinungsbildes — Schriftarten, Farben, Position usw. — verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf dem zweiten Typ von Stylesheet, den Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist treffend. XSLT ermöglicht es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: das Manipulieren und Sortieren des Inhalts, einschließlich einer vollständigen Umordnung, falls gewünscht, und das Transformieren des Inhalts in ein anderes Format (im Fall von Firefox liegt der Fokus darauf, es in Echtzeit in HTML zu konvertieren, das dann vom Browser angezeigt werden kann).

## Was ist XSLT?

Die eXtensible Stylesheet Language/Transform ist eine sehr leistungsfähige Sprache, und eine vollständige Diskussion darüber liegt weit außerhalb des Umfangs dieses Artikels. Eine kurze Erörterung einiger grundlegender Konzepte wird jedoch hilfreich sein, um das Verständnis der folgenden Beschreibung der Fähigkeiten von Netscape zu verstehen.

Ein XSLT-Stylesheet ist ein XML-Dokument. Im Gegensatz zu CSS, das seine eigene spezialisierte Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln, einschließlich der Wohlgeformtheit, einhalten muss. Das Transformationsmodell besteht also darin, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.

Ein XSLT-Stylesheet wird als solches markiert durch die Aufnahme eines standardmäßigen XSLT-Kopfteils. Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>` Element sein (eine akzeptable Alternative ist das `<xsl:transform>` Element). Dieses Element enthält mindestens eine Namensraumdeklaration und das obligatorische Attribut `version`. Weitere Namensräume und drei optionale Attribute können ebenfalls enthalten sein.

## Der XSLT-Namensraum

Der obligatorische Namensraum für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`. Namensräume sind ein Thema, das in XML oft Verwirrung stiftet. Obwohl Namensräume oft als URIs erscheinen, beziehen sie sich tatsächlich nicht auf eine Ressource unter dieser Adresse. Stattdessen stellen sie eine Methode zur Spezifizierung einer eindeutigen Kennung für eine bekannte Menge von Elementen dar. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die Elemente als Teil der von der W3C in der XSLT-Empfehlung von 1999 festgelegten Tags kennzeichnet. Ein weiterer, gelegentlich in Stylesheets zu findender String, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Konformität mit einem früheren Arbeitsentwurf (daher WD) des W3C-Dokuments an. Dieser letztgenannte Namensraum ist nicht kompatibel mit dem, den die W3C letztendlich angenommen hat, und wird von Netscape nicht unterstützt.

Da das wiederholte Eingeben von `"http://www.w3.org/1999/XSL/Transform"` mühsam wäre und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus zur Zuweisung eines Kurznamens zu dem Namensraum im Stylesheet-Kopf. Ein vollständiges Beispiel für das Eröffnungselement des Stylesheets könnte somit folgendermaßen aussehen.

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

Das `xmlns`-Pseudo-Attribut ordnet den Kurznamen `xsl` dem vollständigen Namensraum zur Verwendung im gesamten nachfolgenden Dokument zu. Das Stylesheet-Element oben wird daher mit `xsl:` versehen. Obwohl `xsl` der konventionell verwendete Kurzname (Prefix) ist, ist es nicht obligatorisch und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des `xsl`-Präfixes aus.

## Wie XSLT XML-Bäume verarbeitet

Die XSLT-Transformationsengine, genannt Prozessor, arbeitet nicht direkt auf Dokumenten. Bevor eine Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokument(e) durch einen Parser geleitet werden, der eine abstrakte Repräsentation der Struktur des Dokuments im Speicher erstellt. Diese Repräsentation, genannt der Baum, wird tatsächlich vom Prozessor manipuliert. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor unterschiedlich implementiert werden kann. Netscape verwendet eine Struktur ähnlich der W3C DOM als seine Baumstruktur, aber andere sind möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, deren Eigenschaften und ihre Beziehungen.

Der Baum besteht aus einem hierarchischen Rahmenwerk von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungshinweisknoten und Namensraumknoten.

An der Spitze des Baums befindet sich der Wurzelknoten. Der Wurzelknoten entspricht keinem individuellen Teil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich seine Kinder, die Elemente, Kommentare, Verarbeitungshinweise und so weiter sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und dies kann über mehrere Ebenen hinweg fortgesetzt werden. Es gibt bestimmte Einschränkungen, welche Knotentypen wo auftreten können: beispielsweise können Textknoten keine Kinder haben.

Das Ergebnis des Prozessorvorgangs ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um die Inhalte im Browserfenster darzustellen.

## XPath und Knotenauswahl

Im Grunde ist ein XSLT-Stylesheet eine Sammlung von Regeln, genannt Templates, die deklarieren, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert und an dieser spezifischen Position im Ergebnisbaum enden soll. Die Einzelheiten, wie dies erreicht werden soll, bleiben dem Prozessor überlassen. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebenwirkungen erzeugt. Darin ähnelt es Lisp oder Scheme.

Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum genau zu bestimmen. Um dies zu erleichtern, hat das W3C beschlossen, eine separate Sprache zu verwenden, XPath, die auch außerhalb des XSLT-Kontexts Verwendungen hat. Wie der Name schon sagt, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden sollen, Ausdrücken, die eine Vielzahl von Bedingungen enthalten können, eine Assoziationsmethode von Knoten und/oder eine Richtung innerhalb des Baums angeben können. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath folgt im Referenzabschnitt.

Potenzielle Konflikte bei der Template-Zuordnung werden durch eine Reihe von Prioritätsregeln gelöst. Im Allgemeinen hat eine spezifischere Template-Regel Vorrang vor einer weniger spezifischen. Gleiche Bedingungen vorausgesetzt, hat eine Template-Regel, die später im Dokument erscheint, Vorrang vor einer, die früher erschienen ist.

Stylesheets können über eine Verarbeitungshinweis an ein XML-Dokument angehängt werden. Um anzugeben, welches XSLT-Stylesheet zur Verarbeitung eines bestimmten XML-Dokuments verwendet werden soll, wird eine Verarbeitungshinweis in das XML-Dokument aufgenommen. Zum Beispiel, wenn das Stylesheet "inventory.xsl" heißt und sich im gleichen Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungshinweis im XML-Dokument so aussehen:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Dies muss im Prolog des XML-Dokuments platziert werden.

## XSLT/XPath-Referenz

- [Elemente](/de/docs/Web/XML/XSLT/Reference/Element)
- [Achsen](/de/docs/Web/XML/XPath/Reference/Axes)
- [Funktionen](/de/docs/Web/XML/XPath/Reference/Functions)

## Weiterführende Literatur

### Bücher

- **XSLT: Programmer's Reference, Second Edition**

  - **Autor**: Michael H. Kay
  - **Länge**: 992 Seiten
  - **Verlag**: Wrox; 2. Auflage (3. Mai 2001)
  - **ISBN**: 0764543814

    - Michael Kay ist Mitglied der W3C XSL Arbeitsgruppe und Entwickler seines eigenen Open-Source XSLT-Prozessors, Saxon. Er ist auch der Autor des einzigen Buches zu diesem Thema, das eine zweite Ausgabe erreicht hat. Dies ist ein sehr umfangreiches Buch, gut strukturiert und erschöpfend, wenn auch manchmal erschöpfend detailliert, und deckt alle möglichen Aspekte der XSLT-Geschichte ab.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**

  - **Autor**: Doug Tidwell
  - **Länge**: 473 Seiten
  - **Verlag**: O'Reilly Media; 1. Auflage (15. August 2001)
  - **ISBN**: 0596000537

    - Doug Tidwell ist ein leitender Entwickler bei IBM und ein bekannter Evangelist für XML-Technologien im Allgemeinen. Er ist Autor mehrerer Artikel und Tutorials zu verschiedenen Aspekten von XML auf der umfangreichen XML-Entwicklerseite von IBM. Dieses Buch ist etwas weniger umfassend als das von Michael Kay, deckt jedoch die Grundlagen gut ab und bietet einige faszinierende Beispiele.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**

  - **Autor**: Erik T. Ray
  - **Länge**: 432 Seiten
  - **Verlag**: O'Reilly Media; 2. Auflage (22. September 2003)
  - **ISBN**: 0596004206

    - Wie der Titel schon sagt, handelt es sich um einen Überblick über XML im Allgemeinen. Kapitel 6 ist speziell XSLT gewidmet.

<https://www.amazon.com/gp/product/0596004206>

### Spezifikationen

- **Die Haupt-XSL-Seite**: <https://www.w3.org/Style/XSL/>
- **XSLT-Spezifikationsübersicht**: <https://www.w3.org/TR/xslt/>
- **Archiv der öffentlichen Stil- (CSS und XSLT) Diskussionen**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **XPath-Spezifikationsübersicht**: <https://www.w3.org/TR/xpath/>

### Artikel

- [Hands-on XSL](https://developer.ibm.com/technologies/web-development/) von Don R. Day
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) von G. Ken Holman

### Tutorials/Beispiele

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/)

### Sonstiges

- [Extensible Stylesheet Language (XSL)](https://xml.coverpages.org/xsl.html)
