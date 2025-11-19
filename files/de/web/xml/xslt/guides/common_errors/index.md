---
title: Häufige XSLT-Fehler
slug: Web/XML/XSLT/Guides/Common_errors
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

## MIME-Typen

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-MIME-Typ senden, `text/xml` oder `application/xml`. Um den aktuellen Typ herauszufinden, laden Sie die Datei in Mozilla und schauen Sie sich die Seiteninformationen an. Oder verwenden Sie ein Download-Tool, diese geben normalerweise den MIME-Typ an.

In Firefox 6 und darüber hinaus können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

## Namespace

Der XSLT 1.0 Namespace ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen von IE verwendeten einen anderen Namespace. Diese Versionen nutzten jedoch auch eine Entwurfsversion von XSLT, die mit der letztlich verabschiedeten XSLT 1.0-Spezifikation inkompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0-Version.

## Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Insbesondere:

- Die `namespace::`-Achse in XPath-Ausdrücken. Unterstützung dafür wird hoffentlich in Zukunft verfügbar sein.
- Das Attribut `disable-output-escaping`. Diese Funktion steuert, wie die Serialisierung des konstruierten Ausgabedokuments funktioniert. Firefox serialisiert das Ausgabedokument jedoch nie, daher ist das Attribut nicht wirklich anwendbar. Obwohl wir versuchen könnten, einige Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments zu serialisieren und neu zu parsen, auf den `disable-output-escaping` angewendet wird, führen Heuristiken oft zu falschen Ergebnissen und überraschenden Resultaten, weshalb wir bisher zögerlich waren, dies hinzuzufügen. Häufig enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, dies ist gleichwertig mit dem Einfügen von `&#160;` im Stylesheet, was in allen XSLT-Engines hervorragend funktioniert. Wir erkennen an, dass das Fehlen von `disable-output-escaping` ein Problem darstellt und würden gerne eine Lösung dafür finden, jedoch haben wir bislang keine guten Lösungen gefunden.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie helfen möchten, einige der oben genannten Funktionen zu unterstützen, wäre Ihre Hilfe sehr willkommen.
