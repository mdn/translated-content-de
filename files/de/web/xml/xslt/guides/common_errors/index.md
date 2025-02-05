---
title: Häufige XSLT-Fehler
slug: Web/XML/XSLT/Guides/Common_errors
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Ihr Server muss sowohl die Quelle als auch das Stylesheet mit einem XML-MIME-Typ senden, `text/xml` oder `application/xml`. Um den aktuellen Typ herauszufinden, laden Sie die Datei in Mozilla und sehen Sie sich die Seiteninformationen an. Alternativ können Sie ein Download-Tool verwenden, da diese normalerweise den MIME-Typ anzeigen.

In Firefox 6 und höher können Sie auch den offiziellen XSLT-MIME-Typ verwenden: `application/xslt+xml`.

### Namespace

Der Namespace für XSLT 1.0 ist [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Ältere Versionen des Internet Explorers verwendeten einen anderen Namespace. Diese Versionen nutzten jedoch auch eine Entwurfsfassung von XSLT, die nicht mit der endgültigen XSLT-1.0-Spezifikation kompatibel ist. Firefox unterstützt ausschließlich die offizielle XSLT-1.0-Version.

### Fehlende Funktionen

Es gibt einige Funktionen in der XSLT-1.0-Spezifikation, die Firefox leider noch nicht unterstützt. Konkret:

- Die `namespace::`-Achse in XPath-Ausdrücken. Unterstützung dafür wird hoffentlich in Zukunft verfügbar sein.
- Das Attribut `disable-output-escaping`. Diese Funktion steuert, wie das serialisierte Ausgabedokument erstellt wird. Allerdings serialisiert Firefox nie das Ausgabedokument, daher ist das Attribut in diesem Zusammenhang nicht wirklich anwendbar. Zwar könnten wir versuchen, Heuristiken hinzuzufügen, um nur den Teil des Ausgabedokuments, auf den `disable-output-escaping` angewendet wird, zu serialisieren und erneut zu analysieren, jedoch führen Heuristiken oft zu falschen Ergebnissen und überraschendem Verhalten. Daher waren wir bisher zurückhaltend, dies hinzuzufügen. Oftmals enthalten Stylesheets Code wie `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, was dem Einfügen von `&#160;` im Stylesheet entspricht. Dies funktioniert problemlos in allen XSLT-Engines. Wir sind uns bewusst, dass der Mangel an `disable-output-escaping` ein Problem darstellt und würden gern eine Lösung dafür finden. Bisher ist uns jedoch noch keine gute Lösung dafür eingefallen.
- Das `<xsl:namespace-alias>`-Element.

Wenn Sie bei der Unterstützung einer der oben genannten Funktionen helfen möchten, würden wir uns über Ihre Hilfe sehr freuen.
