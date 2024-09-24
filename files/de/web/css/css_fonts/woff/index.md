---
title: Das Web Open Font Format (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{CSSRef}}

**WOFF** (das **Web Open Font Format**) ist ein Webschriftartenformat, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und private Datenstrukturen hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, gegebenenfalls Lizenzinformationen bereitzustellen.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftartdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite nutzen und schneller laden als wenn sie äquivalente unkomprimierte TrueType- oder OpenType-Dateien verwenden würden.
2. Viele Schriftartenanbieter, die nicht bereit sind, ihre TrueType- oder OpenType-Schriftarten für die Webnutzung zu lizenzieren, werden WOFF-Schriftarten lizenzieren. Dies verbessert die Verfügbarkeit von Schriftarten für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftartenformat für das Web zu werden, im Gegensatz zu anderen aktuellen Schriftartenformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich im Hinblick auf den verwendeten Komprimierungsalgorithmus. In {{cssxref("@font-face")}} werden sie jeweils durch die Formatbezeichnung `'woff'` und `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die CSS-Eigenschaft {{cssxref("@font-face")}} verwenden, um WOFF-Schriftarten für Text in Webinhalten zu verwenden. Sie funktioniert genau wie OpenType- und TrueType-Format-Schriftarten, ermöglicht jedoch wahrscheinlich, dass Ihre Inhalte aufgrund der zusätzlichen Komprimierung effizienter heruntergeladen werden.

## Werkzeuge zum Arbeiten mit WOFF-Schriftarten

- [Werkzeuge zum Arbeiten mit WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) Schriftarten sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
