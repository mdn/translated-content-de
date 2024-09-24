---
title: robots.txt-Konfiguration
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

[`robots.txt`](/de/docs/Glossary/Robots.txt) ist eine Textdatei, die Robotern (wie Suchmaschinen-Indizierer) Anweisungen gibt, indem sie ihnen vorgibt, bestimmte Pfade auf der Website nicht zu durchsuchen. Sie wird im Stammverzeichnis einer Website platziert.

## Problem

Viele Faktoren können die Belastung Ihrer Website erhöhen; dazu gehören Webcrawler. Zusätzlich, wenn sie die gesamte Website durchsuchen, können Webcrawler die Suchergebnisse mit Ressourcen verschmutzen, die keinen Nutzen davon haben, durchsuchbar zu sein.

## Lösung

Verwenden Sie `robots.txt`, um die Belastung der Website zu reduzieren und ungeeignete Inhalte aus den Suchergebnissen fernzuhalten. Die Verwendung dieser Datei ist optional und sollte nur für diese Zwecke eingesetzt werden. Sie sollte nicht als Mittel zur Verhinderung der Offenlegung privater Informationen oder zum Verbergen von Teilen einer Website verwendet werden.

Obwohl die Verwendung dieser Datei verhindern kann, dass Seiten in den Suchmaschinenergebnissen erscheinen, sichert sie Websites nicht gegen Angreifer. Im Gegenteil, sie kann ihnen unabsichtlich helfen: `robots.txt` ist öffentlich zugänglich, und indem Sie die Pfade zu Ihren sensiblen Seiten hinzufügen, zeigen Sie potenziellen Angreifern deren Standorte.

Beachten Sie auch, dass einige Roboter, wie Malware-Roboter und E-Mail-Adressen-Sammler, Ihre `robots.txt`-Datei ignorieren werden.

## Beispiele

Verhindern Sie, dass alle Suchmaschinen eine Website durchsuchen:

```http
User-agent: *
Disallow: /
```

Bestimmte Verzeichnisse verbergen (dies wird nicht empfohlen):

```http example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## Siehe auch

- [Über /robots.txt](https://www.robotstxt.org/robotstxt.html) auf `robotstxt.org`
