---
title: The Web Open Font Format (WOFF)
short-title: Web Open Font Format (WOFF)
slug: Web/CSS/CSS_fonts/WOFF
l10n:
  sourceCommit: f14efcb019167e20c4f216c588d9b33c22fcbca0
---

{{CSSRef}}

**WOFF** (das **Web Open Font Format**) ist ein Webschriftartformat, das von Mozilla in Zusammenarbeit mit Type Supply, LettError und anderen Organisationen entwickelt wurde. Es verwendet eine komprimierte Version der gleichen tabellenbasierten `sfnt`-Struktur, die von TrueType, OpenType und Open Font Format verwendet wird, fügt jedoch Metadaten und Datenstrukturen für die private Nutzung hinzu, einschließlich vordefinierter Felder, die Gießereien und Anbietern ermöglichen, bei Bedarf Lizenzinformationen bereitzustellen.

Es gibt drei Hauptvorteile bei der Verwendung von WOFF:

1. Die Schriftdaten sind komprimiert, sodass Websites, die WOFF verwenden, weniger Bandbreite nutzen und schneller laden als beim Einsatz gleichwertiger unkomprimierter TrueType- oder OpenType-Dateien.
2. Viele Schrifthersteller, die nicht bereit sind, ihre TrueType- oder OpenType-Format-Schriften für die Nutzung im Web zu lizenzieren, werden Schriften im WOFF-Format lizenzieren. Dies verbessert die Verfügbarkeit von Schriften für Webdesigner.
3. Sowohl proprietäre als auch freie Software-Browseranbieter mögen das WOFF-Format, sodass es das Potenzial hat, ein wirklich universelles, interoperables Schriftformat für das Web zu werden, im Gegensatz zu anderen derzeitigen Schriftformaten.

Es gibt zwei Versionen von WOFF: WOFF und WOFF2. Sie unterscheiden sich hauptsächlich im Hinblick auf den verwendeten Komprimierungsalgorithmus. In {{cssxref("@font-face")}} werden sie durch den Format-Deskriptor `'woff'` bzw. `'woff2'` identifiziert.

## Verwendung von WOFF

Sie können die CSS-Eigenschaft {{cssxref("@font-face")}} verwenden, um WOFF-Schriften für Text in Webinhalten zu verwenden. Es funktioniert genau wie OpenType- und TrueType-Format-Schriften, ermöglicht jedoch wahrscheinlich eine effizientere Inhaltsübertragung aufgrund der hinzugefügten Komprimierung.

## Werkzeuge für die Arbeit mit WOFF-Schriften

- [Werkzeuge für die Arbeit mit WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) Schriften sind verfügbar. `sfnt2woff` und `woff2sfnt` konvertieren zwischen WOFF und OpenType.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
