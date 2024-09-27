---
title: robots.txt Konfiguration
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[`robots.txt`](/de/docs/Glossary/Robots.txt) ist eine Textdatei, die Robotern (wie z.B. Suchmaschinenindexern) Anweisungen gibt, wie sie sich verhalten sollen, indem sie ihnen untersagt, bestimmte Pfade auf der Website zu durchsuchen. Sie wird im Stammverzeichnis einer Webseite platziert.

## Problem

Viele Faktoren können die Belastung Ihrer Website erhöhen; dazu gehören auch Webcrawler. Zusätzlich können Webcrawler, wenn sie die gesamte Seite durchsuchen dürfen, Suchergebnisse mit Ressourcen verschmutzen, die nicht von der Durchsuchbarkeit profitieren.

## Lösung

Verwenden Sie `robots.txt`, um die Belastung der Website zu reduzieren und ungeeignete Inhalte davon abzuhalten, in den Suchergebnissen zu erscheinen. Die Verwendung dieser Datei ist optional und sollte nur für diese Zwecke genutzt werden. Sie sollte nicht als Mittel eingesetzt werden, um die Offenlegung privater Informationen zu verhindern oder um Teile einer Website zu verbergen.

Während die Nutzung dieser Datei verhindern kann, dass Seiten in den Suchergebnissen von Suchmaschinen auftauchen, sichert sie Websites nicht gegen Angreifer. Im Gegenteil: Sie kann ihnen unbeabsichtigt helfen, denn `robots.txt` ist öffentlich zugänglich, und indem Sie sensible Seitenpfade hinzufügen, zeigen Sie potenziellen Angreifern deren Standorte.

Seien Sie sich auch bewusst, dass einige Roboter, wie Malware-Roboter und E-Mail-Adressen-Erntemaschinen, Ihre `robots.txt`-Datei ignorieren werden.

## Beispiele

Alle Suchmaschinen davon abhalten, eine Seite zu durchsuchen:

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
