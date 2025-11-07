---
title: Web Open Font Format (WOFF)
short-title: WOFF
slug: Web/CSS/Guides/Fonts/WOFF
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**WOFF** (das **Web Open Font Format**) ist ein Webschriftformat, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und Datenstrukturen für den privaten Gebrauch hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, bei Bedarf Lizenzinformationen bereitzustellen.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftartdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite nutzen und schneller laden als wenn sie äquivalente unkomprimierte TrueType- oder OpenType-Dateien verwenden.
2. Viele Schriftanbieter, die ihre TrueType- oder OpenType-Format-Schriftarten nicht für die Webnutzung lizenzieren möchten, lizenzieren WOFF-Format-Schriftarten. Dies verbessert die Verfügbarkeit von Schriftarten für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen aktuellen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich in Bezug auf den verwendeten Komprimierungsalgorithmus. In {{cssxref("@font-face")}} werden sie durch den Formatdeskriptor `'woff'` bzw. `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die CSS-Eigenschaft {{cssxref("@font-face")}} verwenden, um WOFF-Schriftarten für Text in Webinhalten zu nutzen. Es funktioniert genau wie Schriftarten im OpenType- und TrueType-Format, mit dem Unterschied, dass Ihr Inhalt aufgrund der zusätzlichen Kompression wahrscheinlich effizienter heruntergeladen wird.

## Tools zur Arbeit mit WOFF-Schriftarten

- [Werkzeuge zur Arbeit mit WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) Schriftarten sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
