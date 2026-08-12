---
title: Häufige XSLT-Fehler
slug: Web/XML/XSLT/Guides/Common_errors
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

## MIME-Typen

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-MIME-Typ senden, entweder `text/xml` oder `application/xml`. Um den aktuellen Typ herauszufinden, laden Sie die Datei in Mozilla und schauen Sie sich die Seiteninformationen an. Sie können auch ein Download-Tool verwenden, diese geben normalerweise den MIME-Typ an.

In Firefox 6 und später können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

## Namespace

Der XSLT 1.0-Namespace ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen von IE verwendeten einen anderen Namespace. Diese Versionen verwendeten jedoch auch eine Entwurfsversion von XSLT, die mit der letztendlich zur XSLT 1.0-Spezifikation gewordenen Version inkompatibel ist. Firefox unterstützt nur die offizielle XSLT 1.0-Version.

## Fehlende Funktionen

Es gibt einige Funktionen in der XSLT 1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Insbesondere:

- Die `namespace::`-Achse in XPath-Ausdrücken. Unterstützung hierfür wird hoffentlich in Zukunft verfügbar sein.
- Das `disable-output-escaping`-Attribut. Diese Funktion steuert, wie das erstellte Ausgabedokument serialisiert wird. Firefox serialisiert jedoch niemals das Ausgabedokument, daher ist das Attribut nicht wirklich anwendbar. Während wir versuchen könnten, einige Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments, auf den `disable-output-escaping` angewendet wird, zu serialisieren und erneut zu parsen, führen Heuristiken oft zu falschen Ergebnissen und überraschenden Resultaten, daher waren wir bisher zögerlich, dies hinzuzufügen. Oftmals enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, dies ist gleichbedeutend damit, `&#160;` im Stylesheet zu platzieren, was in allen XSLT-Engines hervorragend funktioniert. Wir sind uns bewusst, dass das Fehlen von `disable-output-escaping` ein Problem darstellt und wir würden gerne eine Lösung dafür finden, jedoch haben wir bisher keine gute Lösung gefunden.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie bei einer der oben genannten Funktionen helfen möchten, wäre Ihre Unterstützung sehr willkommen.
