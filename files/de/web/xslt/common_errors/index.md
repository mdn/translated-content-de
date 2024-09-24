---
title: Häufige XSLT-Fehler
slug: Web/XSLT/Common_errors
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

### MIME-Typen

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-Mime-Typ senden, entweder `text/xml` oder `application/xml`. Um den aktuellen Typ herauszufinden, laden Sie die Datei in Mozilla und schauen Sie sich die Seiteninformationen an. Oder verwenden Sie ein Download-Tool, diese geben normalerweise den Mime-Typ an.

In Firefox 6 und später können Sie auch den offiziellen XSLT-Mime-Typ verwenden: `application/xslt+xml`.

### Namensraum

Der XSLT 1.0 Namensraum ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen des IE benutzten einen anderen Namensraum. Diese Versionen verwendeten jedoch auch eine Entwurfsfassung von XSLT, die mit der letztendlich zur XSLT 1.0 Spezifikation gewordenen Version nicht kompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0 Version.

### Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0 Spezifikation, die Firefox leider noch nicht unterstützt. Insbesondere:

- Die `namespace::`-Achse in XPath-Ausdrücken. Die Unterstützung hierfür wird hoffentlich zukünftig verfügbar sein.
- Das Attribut `disable-output-escaping`. Diese Funktion steuert, wie das erstellte Ausgabedokument serialisiert wird. Firefox serialisiert das Ausgabedokument jedoch nie, sodass das Attribut nicht wirklich anwendbar ist. Während wir versuchen könnten, einige Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments zu serialisieren und erneut zu parsen, auf den `disable-output-escaping` angewendet wird, führen Heuristiken oft zu falsch interpretierten Ergebnissen und zu überraschenden Resultaten. Daher waren wir bisher zurückhaltend, dies hinzuzufügen. Oftmals enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, dies ist gleichbedeutend damit, `&#160;` im Stylesheet zu platzieren, was in allen XSLT-Engines hervorragend funktioniert. Wir erkennen an, dass das Fehlen von `disable-output-escaping` ein Problem darstellt und wir würden gerne eine Lösung dafür finden, jedoch haben wir bisher keine gute Lösung gefunden.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie bei einer der oben genannten Funktionen helfen möchten, würden wir Ihre Unterstützung sehr begrüßen.
