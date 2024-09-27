---
title: Häufige XSLT-Fehler
slug: Web/XSLT/Common_errors
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

### MIME-Typen

Ihr Server muss sowohl die Quelldatei als auch das Stylesheet mit einem XML-MIME-Typ senden, `text/xml` oder `application/xml`. Um den aktuellen Typ zu ermitteln, laden Sie die Datei in Mozilla und sehen Sie sich die Seiteninformationen an. Oder verwenden Sie ein Download-Tool, diese geben normalerweise den MIME-Typ an.

In Firefox 6 und später können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

### Namensraum

Der XSLT 1.0-Namensraum ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen von IE nutzten einen anderen Namensraum. Diese Versionen verwendeten jedoch auch einen Entwurf von XSLT, der mit der endgültigen XSLT 1.0-Spezifikation nicht kompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0-Version.

### Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Konkret:

- Die `namespace::`-Achse in XPath-Ausdrücken. Die Unterstützung dafür wird hoffentlich in Zukunft verfügbar sein.
- Das Attribut `disable-output-escaping`. Diese Funktion steuert, wie das generierte Ausgabedokument serialisiert wird. Firefox serialisiert das Ausgabedokument jedoch nie, daher ist das Attribut nicht wirklich anwendbar. Während wir versuchen könnten, einige Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments zu serialisieren und erneut zu parsen, auf den `disable-output-escaping` angewendet wird, führen Heuristiken oft zu überraschenden Ergebnissen, weshalb wir bisher zögerlich waren, dies hinzuzufügen. Oft enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, was dem Einfügen von `&#160;` im Stylesheet entspricht, das in allen XSLT-Engines hervorragend funktioniert. Wir erkennen an, dass das Fehlen von `disable-output-escaping` ein Problem ist und wir würden gerne eine Lösung dafür finden, jedoch haben wir bisher keine guten Lösungen gefunden.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie bei einer der oben genannten Funktionen helfen möchten, wäre Ihre Hilfe sehr willkommen.
