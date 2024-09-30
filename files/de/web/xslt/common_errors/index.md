---
title: Häufige XSLT-Fehler
slug: Web/XSLT/Common_errors
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

### MIME-Typen

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-MIME-Typ senden, `text/xml` oder `application/xml`. Um den aktuellen Typ zu ermitteln, laden Sie die Datei in Mozilla und schauen Sie sich die Seiteninformationen an. Alternativ können Sie ein Download-Tool verwenden, diese geben normalerweise den MIME-Typ an.

Ab Firefox 6 können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

### Namespace

Der XSLT 1.0-Namensraum ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen des IE verwendeten einen anderen Namensraum. Diese Versionen nutzten jedoch auch eine Entwurfsversion von XSLT, die mit der letztendlich veröffentlichten XSLT 1.0-Spezifikation nicht kompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0-Version.

### Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Insbesondere:

- Die `namespace::`-Achse in XPath-Ausdrücken. Die Unterstützung dafür wird hoffentlich in Zukunft verfügbar sein.
- Das `disable-output-escaping`-Attribut. Diese Funktion steuert, wie das konstruierte Ausgabedokument serialisiert wird. Firefox serialisiert jedoch nie das Ausgabedokument, weshalb das Attribut nicht wirklich anwendbar ist. Während wir versuchen könnten, einige Heuristiken hinzuzufügen, um genau den Teil des Ausgabedokuments zu serialisieren und erneut zu parsen, auf den `disable-output-escaping` angewendet wird, führen Heuristiken oft zu falschen Ergebnissen und überraschenden Resultaten, daher waren wir bisher zögerlich, dies hinzuzufügen. Oftmals enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, was gleichbedeutend damit ist, `&#160;` im Stylesheet zu verwenden, was in allen XSLT-Engines hervorragend funktioniert. Wir sind uns bewusst, dass das Fehlen von `disable-output-escaping` ein Problem darstellt und wir würden gerne eine Lösung dafür finden, jedoch haben wir bisher noch keine guten Lösungen gefunden.
- Das `<xsl:namespace-alias>` Element.

Falls Sie bei irgendeiner der oben genannten Funktionen helfen möchten, wäre Ihre Unterstützung sehr willkommen.
