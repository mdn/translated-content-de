---
title: Web Open Font Format (WOFF)
short-title: WOFF
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

**WOFF** (das **Web Open Font Format**) ist ein Webfont-Format, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version derselben tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format genutzt wird, fügt jedoch Metadaten und private Datenstrukturen hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, bei Bedarf Lizenzinformationen bereitzustellen.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Fontdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite nutzen und schneller laden als wenn sie gleichwertige unkomprimierte TrueType- oder OpenType-Dateien verwenden würden.
2. Viele Schriftanbieter, die nicht bereit sind, ihre TrueType- oder OpenType-Format-Schriften für die Verwendung im Web zu lizenzieren, werden WOFF-Format-Schriften lizenzieren. Dies verbessert die Verfügbarkeit von Schriften für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen derzeitigen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich im Hinblick auf den verwendeten Kompressionsalgorithmus. In {{cssxref("@font-face")}} werden sie durch die Formatbeschreibungen `'woff'` und `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die CSS-Eigenschaft {{cssxref("@font-face")}} verwenden, um WOFF-Schriften für Text in Webinhalten zu nutzen. Sie funktioniert genau wie die Fontformate OpenType und TrueType, wird jedoch wahrscheinlich Ihr Content effizienter herunterladen lassen durch die Hinzufügung der Kompression.

## Werkzeuge zur Arbeit mit WOFF-Schriften

- [Tools für die Arbeit mit WOFF-Schriften](https://github.com/odemiral/woff2sfnt-sfnt2woff) sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
