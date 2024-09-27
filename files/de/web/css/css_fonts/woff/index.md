---
title: Das Web Open Font Format (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{CSSRef}}

**WOFF** (das **Web Open Font Format**) ist ein Webschriftformat, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die auch von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und Strukturen für den privaten Gebrauch hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, Lizenzinformationen bereitzustellen, falls gewünscht.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite benötigen und schneller laden als bei der Verwendung von äquivalenten unkomprimierten TrueType- oder OpenType-Dateien.
2. Viele Schriftanbieter, die nicht bereit sind, ihre TrueType- oder OpenType-Format-Schriften für die Webnutzung zu lizenzieren, werden WOFF-Format-Schriften lizenzieren. Dies verbessert die Verfügbarkeit von Schriften für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen aktuellen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich im Hinblick auf den verwendeten Komprimierungsalgorithmus. In {{cssxref("@font-face")}} werden sie jeweils durch den `'woff'` und `'woff2'` Format-Deskriptor identifiziert.

## Verwendung von WOFF

Sie können die {{cssxref("@font-face")}} CSS-Eigenschaft verwenden, um WOFF-Schriften für Text in Webinhalten zu nutzen. Sie funktioniert genau wie OpenType- und TrueType-Format-Schriften, ermöglicht es jedoch wahrscheinlich, dass Ihre Inhalte effizienter heruntergeladen werden, aufgrund der hinzugefügten Kompression.

## Werkzeuge für die Arbeit mit WOFF-Schriften

- [Werkzeuge für die Arbeit mit WOFF-Schriften](https://github.com/odemiral/woff2sfnt-sfnt2woff) stehen zur Verfügung. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
