---
title: Web Open Font Format (WOFF)
short-title: WOFF
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**WOFF** (das **Web Open Font Format**) ist ein Web-Schriftformat, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format genutzt wird, fügt jedoch Metadaten und private Datenstrukturen hinzu, einschließlich vordefinierter Felder, die Gießereien und Anbietern die Möglichkeit geben, Lizenzinformationen bereitzustellen, falls gewünscht.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftartdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite benötigen und schneller geladen werden als wenn sie gleichwertige unkomprimierte TrueType- oder OpenType-Dateien verwenden.
2. Viele Schriftartenanbieter, die nicht bereit sind, ihre TrueType- oder OpenType-Schriftartenformate für die Webnutzung zu lizenzieren, lizenzieren WOFF-Format-Schriften. Dies verbessert die Verfügbarkeit von Schriftarten für Seitendesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen aktuellen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich hinsichtlich des verwendeten Komprimierungsalgorithmus. In {{cssxref("@font-face")}} werden sie jeweils durch die Formatbezeichner `'woff'` und `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die CSS-Eigenschaft {{cssxref("@font-face")}} verwenden, um WOFF-Schriftarten für Text in Webinhalten zu nutzen. Sie funktioniert genauso wie OpenType- und TrueType-Schriftarten, mit dem Vorteil, dass Ihre Inhalte aufgrund der zusätzlichen Kompression wahrscheinlich effizienter heruntergeladen werden.

## Werkzeuge zur Arbeit mit WOFF-Schriftarten

- [Werkzeuge zur Arbeit mit WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) Schriftarten sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
