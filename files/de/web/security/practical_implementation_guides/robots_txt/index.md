---
title: robots.txt-Konfiguration
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

{{Glossary("Robots.txt", "`robots.txt`")}} ist eine Textdatei, die Robotern (wie etwa Suchmaschinen-Indexern) mitteilt, wie sie sich verhalten sollen, indem sie anweist, bestimmte Pfade auf der Website nicht zu durchsuchen. Sie wird im Stammverzeichnis einer Website platziert.

## Problem

Viele Faktoren können die Belastung Ihrer Website erhöhen, einschließlich Webcrawler. Wenn Crawler die gesamte Website durchsuchen dürfen, kann dies dazu führen, dass Suchergebnisse mit Ressourcen verschmutzt werden, die nicht davon profitieren, durchsuchbar zu sein.

## Lösung

Verwenden Sie `robots.txt`, um die Belastung der Website zu reduzieren und ungeeignete Inhalte aus den Suchergebnissen fernzuhalten. Die Verwendung dieser Datei ist optional und sollte nur zu diesen Zwecken eingesetzt werden. Sie sollte nicht zur Verhinderung der Offenlegung privater Informationen oder zum Verstecken von Teilen einer Website verwendet werden.

Obwohl die Verwendung dieser Datei verhindern kann, dass Seiten in den Suchmaschinenergebnissen erscheinen, sichert sie Websites nicht gegen Angreifer. Im Gegenteil, sie kann ihnen unbeabsichtigt helfen: `robots.txt` ist öffentlich zugänglich, und wenn Sie sensible Seitenpfade hinzufügen, zeigen Sie potenziellen Angreifern deren Standorte.

Seien Sie sich auch bewusst, dass einige Roboter, wie Malware-Robots und E-Mail-Adressen-Sammler, Ihre `robots.txt`-Datei ignorieren werden.

## Beispiele

Alle Suchmaschinen vom Crawlen einer Website abhalten:

```http
User-agent: *
Disallow: /
```

Bestimmte Verzeichnisse ausblenden (dies wird nicht empfohlen):

```http example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## Siehe auch

- [Über /robots.txt](https://www.robotstxt.org/robotstxt.html) auf `robotstxt.org`
