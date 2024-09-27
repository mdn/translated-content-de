---
title: Ein Überblick
slug: Web/XSLT/Transforming_XML_with_XSLT/An_Overview
l10n:
  sourceCommit: b74462b088bf7ee06f27038728a7f6ea39630ca3
---

{{XsltSidebar}}

[« Transforming XML with XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT)

Das eXtensible Stylesheet Language/Transform ist eine sehr mächtige Sprache, und eine vollständige Diskussion darüber geht weit über den Rahmen dieses Artikels hinaus. Aber eine kurze Diskussion über einige grundlegende Konzepte wird hilfreich sein, um das Verständnis der nachfolgenden Beschreibung von Netscapes Fähigkeiten zu erleichtern.

- Ein XSLT-Stylesheet ist ein XML-Dokument.
  - : Im Gegensatz zu CSS, das seine eigene spezielle Syntax hat, ist ein XSLT-Stylesheet ein XML-Dokument, das alle XML-Regeln, einschließlich der Wohlgeformtheit, erfüllen muss. Das Modell für die Transformation ist also, dass ein XML-Dokument verwendet wird, um ein anderes XML-Dokument zu transformieren.
- Ein XSLT-Stylesheet wird als solches durch die Einbeziehung einer standardmäßigen XSLT-Überschrift gekennzeichnet.
  - : Das äußerste Element in einem XSLT-Stylesheet muss das `<xsl:stylesheet>`-Element sein (eine akzeptable Alternative ist das `<xsl:transform>`-Element). Dieses Element enthält mindestens eine Namespace-Deklaration und das obligatorische Versionsattribut. Weitere Namespaces und drei optionale Attribute können ebenfalls enthalten sein.
- Der obligatorische Namespace für XSLT ist `"http://www.w3.org/1999/XSL/Transform"`.

  - : Namespaces sind in XML ein Thema, das häufig Verwirrung stiftet. Trotz der Tatsache, dass Namespaces oft als URIs erscheinen, beziehen sie sich tatsächlich nicht auf eine Ressource an dieser Adresse. Sie dienen vielmehr dazu, einen eindeutigen Bezeichner für einen bekannten Satz von Elementen anzugeben. Der String `"http://www.w3.org/1999/XSL/Transform"` ist eine Konstante, die die damit markierten Elemente als zu dem Satz von Tags gehörend kennzeichnet, der in der XSLT-Empfehlung des W3C von 1999 aufgeführt ist. Ein weiterer String, der gelegentlich in Stylesheets zu sehen ist, `"http://www.w3.org/TR/WD-xsl"`, zeigt die Einhaltung eines früheren Entwurfs (daher das WD) des W3C-Dokuments an. Dieser letzte Namespace ist nicht kompatibel mit demjenigen, den das W3C schließlich angenommen hat und wird von Netscape nicht unterstützt.

    Da es mühsam wäre, `"http://www.w3.org/1999/XSL/Transform"` wiederholt einzugeben und das Markup schwer lesbar machen würde, gibt es einen Standardmechanismus, um im Stylesheet-Kopf einen Kurznamen für den Namespace zuzuweisen. Ein vollständiges Beispiel für das öffnende Stylesheet-Element könnte so aussehen:

- `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">`
  - : Das xmlns-Pseudoattribut ordnet den Kurznamen `xsl` dem vollständigen Namespace zu, der im folgenden Dokument verwendet wird. Das obige Stylesheet-Element wird daher mit `xsl:` präfixiert. Obwohl `xsl` der konventionell verwendete Kurznamen (Prefix) ist, ist es nicht obligatorisch und es ist durchaus möglich, einen anderen zu wählen. Die Beispiele in diesem Artikel gehen alle von der Verwendung des `xsl`-Präfixes aus.
- Alle XSLT-Transformationen werden auf Bäumen durchgeführt, nicht auf Dokumenten.

  - : Die XSLT-Transformationsmaschine, genannt Prozessor, arbeitet nicht direkt an Dokumenten. Bevor die Transformation stattfinden kann, müssen das primäre XML-Dokument(e) und das Stylesheet-Dokument(e) durch einen Parser laufen, der eine abstrakte Darstellung der Struktur des Dokuments im Speicher erstellt. Diese Darstellung, der Baum, wird tatsächlich vom Prozessor manipuliert. Der Baum ist ein abstrakter Datentyp, ein konzeptionelles Modell, das je nach Parser und Prozessor auf verschiedene Weise implementiert werden kann: Netscape verwendet eine Struktur, die der W3C-DOM als Baumstruktur ähnelt, aber andere sind ebenfalls möglich. Die einzigen Anforderungen betreffen die Anordnung der Objekte im Baum, ihre Eigenschaften und ihre Beziehungen.

    Der Baum besteht aus einem hierarchischen Rahmen von Knoten. Er kann aus sieben verschiedenen Knotentypen bestehen: dem einzelnen Wurzelknoten, Elementknoten, Textknoten, Attributknoten, Kommentarknoten, Verarbeitungsanweisungsknoten und Namespace-Knoten.

    An der Spitze des Baums befindet sich der Wurzelknoten. Der Wurzelknoten entspricht keinem Einzelteil des XML-Dokuments: Er repräsentiert das Dokument als Ganzes. Unterhalb des Wurzelknotens befinden sich dessen Kinder, die Elemente, Kommentare, Verarbeitungsanweisungen usw. sein können. Einige dieser Kinder können ebenfalls Kinder haben. Und das kann sich über mehrere Ebenen fortsetzen. Es gibt bestimmte Beschränkungen, welche Knotentypen wo auftreten können: Beispielsweise können Textknoten keine Kinder haben.

    Das Ergebnis der Aktion des Prozessors ist ebenfalls ein Baum. Netscape verwendet diesen Baum, um den Inhalt im Browserfenster darzustellen.

- XSLT ist eine hochstufige deklarative Sprache.
  - : Im Wesentlichen ist ein XSLT-Stylesheet eine Satz von Regeln, sogenannten Vorlagen, welche erklären, dass jeder Knoten, der diesem spezifischen Muster entspricht, auf diese spezifische Weise manipuliert und an dieser spezifischen Stelle im Ergebnisbaum enden soll. Die Einzelheiten, wie dies zu bewerkstelligen ist, überlässt man dem Prozessor. Da die Reihenfolge der Ausführung des Stylesheets nicht garantiert werden kann, unterstützt XSLT keine Funktionalität, die Nebeneffekte produziert. In dieser Hinsicht ähnelt es Lisp oder Scheme.
- Positionen im Baum werden mit XPath, einer weiteren W3C-Empfehlung, spezifiziert.
  - : Transformationen hängen davon ab, dass der Prozessor in der Lage ist, einzelne Knoten im Baum exakt zu bestimmen. Um dies zu erleichtern, hat sich das W3C entschieden, eine eigene Sprache, XPath, zu verwenden, die auch außerhalb des XSLT-Kontexts Verwendung findet. Wie der Name es andeutet, definiert XPath einen "Pfad", den der Prozessor durch den Baum nehmen muss, um zum gewünschten Knoten zu gelangen. Dieser Pfad besteht aus XPath-spezifischen Ausdrücken, die ausgewertet werden müssen, Ausdrücken, die eine Reihe von zu erfüllenden Bedingungen, eine Art von Assoziation zwischen Knoten und/oder eine Angabe zur Richtung innerhalb des Baums umfassen können. Eine ausführlichere Beschreibung der in XSLT am häufigsten verwendeten Teile von XPath folgt im Referenzteil.
- Mögliche Konflikte beim Vorlagenabgleich werden durch ein Set von kaskadierenden Vorrangregeln gelöst.
  - : Im Allgemeinen hat eine spezifischere Vorlagenregel Vorrang vor einer weniger spezifischen und, wenn die übrigen Bedingungen gleich sind, hat eine später im Dokument erscheinende Vorlagenregel Vorrang vor einer früher erscheinenden.
- Stylesheets können über eine Verarbeitungsanweisung an ein XML-Dokument angehängt werden.
  - : Der einfachste Weg anzugeben, welches XSLT-Stylesheet zum Verarbeiten eines bestimmten XML-Dokuments verwendet werden soll, ist, in das XML-Dokument selbst eine Verarbeitungsanweisung aufzunehmen. Wenn das Stylesheet beispielsweise inventory.xsl heißt und sich im selben Verzeichnis wie das XML-Dokument befindet, würde die Verarbeitungsanweisung im XML-Dokument so aussehen:
- `<?xml-stylesheet type="text/xml" href="inventory.xsl"?>`
  - : Dies muss im Prolog des XML-Dokuments platziert werden.

Um mehr über XSLT und XPath zu erfahren, sehen Sie im Abschnitt [Weiterführende Literatur](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading) am Ende dieses Artikels nach.
