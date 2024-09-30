---
title: Das Web Open Font Format (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{CSSRef}}

**WOFF** (das **Web Open Font Format**) ist ein Webfont-Format, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und private Nutzdatenstrukturen hinzu, einschließlich vordefinierter Felder, die es Schriftgießereien und Anbietern ermöglichen, bei Bedarf Lizenzinformationen bereitzustellen.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftartdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite nutzen und schneller laden als wenn sie gleichwertige unkomprimierte TrueType- oder OpenType-Dateien verwenden würden.
2. Viele Schriftanbieter, die nicht bereit sind, ihre TrueType- oder OpenType-Format-Schriften für die Nutzung im Web zu lizenzieren, werden WOFF-Format-Schriften lizenzieren. Dies verbessert die Verfügbarkeit von Schriftarten für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen aktuellen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich im verwendeten Kompressionsalgorithmus. In {{cssxref("@font-face")}} werden sie durch den Format-Descriptor `'woff'` bzw. `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die {{cssxref("@font-face")}} CSS-Eigenschaft verwenden, um WOFF-Schriften für Textinhalte im Web zu verwenden. Sie funktioniert genau wie Schriftarten im OpenType- und TrueType-Format, mit der Ausnahme, dass sie wahrscheinlich effizienteres Herunterladen Ihrer Inhalte ermöglicht, dank der zusätzlichen Komprimierung.

## Werkzeuge für die Arbeit mit WOFF-Schriften

- [Werkzeuge für die Arbeit mit WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) Schriften sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
