---
title: Häufige XSLT-Fehler
slug: Web/XSLT/Guides/Common_errors
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-MIME-Typ versenden: `text/xml` oder `application/xml`. Um den aktuellen Typ herauszufinden, laden Sie die Datei in Mozilla und schauen Sie sich die Seiteninformationen an. Oder verwenden Sie ein Download-Tool, diese geben normalerweise den MIME-Typ an.

Ab Firefox 6 können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

### Namensraum

Der XSLT 1.0 Namensraum ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen von IE verwendeten einen anderen Namensraum. Diese Versionen benutzten jedoch auch eine Entwurfsversion von XSLT, die mit der endgültigen XSLT 1.0 Spezifikation nicht kompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0 Version.

### Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Insbesondere:

- Die `namespace::`-Achse in XPath-Ausdrücken. Unterstützung hierfür wird hoffentlich in Zukunft verfügbar sein.
- Das `disable-output-escaping`-Attribut. Diese Funktion steuert, wie das erzeugte Ausgabedokument serialisiert wird. Aber Firefox serialisiert das Ausgabedokument niemals, daher ist das Attribut eigentlich nicht anwendbar. Auch wenn wir versuchen könnten, einige Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments zu serialisieren und zu reparsen, auf den `disable-output-escaping` angewendet wurde, führen Heuristiken oft zu falschen und überraschenden Ergebnissen. Daher waren wir zögerlich, dies hinzuzufügen. Oftmals enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, was dem Einfügen von `&#160;` im Stylesheet entspricht und in allen XSLT-Engines gut funktioniert. Wir sind uns bewusst, dass der Mangel an `disable-output-escaping` ein Problem darstellt und möchten dafür eine Lösung finden, allerdings haben wir bisher keine guten Lösungen gefunden.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie bei der Unterstützung einer der oben genannten Funktionen helfen möchten, wäre Ihre Hilfe sehr willkommen.
