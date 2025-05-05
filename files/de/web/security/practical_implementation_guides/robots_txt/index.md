---
title: robots.txt-Konfiguration
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

{{Glossary("Robots.txt", "`robots.txt`")}} ist eine Textdatei, die Robotern (wie Suchmaschinen-Indizierern) mitteilt, wie sie sich verhalten sollen, indem sie ihnen anweist, bestimmte Pfade auf der Website nicht zu durchsuchen. Sie wird im Root-Verzeichnis einer Website platziert.

## Problem

Viele Faktoren können die Last auf Ihrer Website erhöhen; dazu gehören auch Web-Crawler. Darüber hinaus können Web-Crawler, wenn sie die gesamte Website durchsuchen dürfen, Suchergebnisse mit Ressourcen verschmutzen, die nicht davon profitieren, durchsuchbar zu sein.

## Lösung

Verwenden Sie `robots.txt`, um die Last auf der Website zu reduzieren und ungeeignete Inhalte davon abzuhalten, in den Suchergebnissen zu erscheinen. Die Verwendung dieser Datei ist optional und sollte nur zu diesen Zwecken erfolgen. Sie sollte nicht verwendet werden, um die Offenlegung privater Informationen zu verhindern oder Teile einer Website zu verstecken.

Obwohl die Verwendung dieser Datei verhindern kann, dass Seiten in den Suchmaschinenergebnissen erscheinen, sichert sie Websites nicht gegen Angreifer. Im Gegenteil, sie kann ihnen unbeabsichtigt helfen: `robots.txt` ist öffentlich zugänglich, und indem Sie Ihre vertraulichen Seitenpfade hinzufügen, zeigen Sie potenziellen Angreifern deren Standorte.

Seien Sie sich auch bewusst, dass einige Roboter, wie Malware-Roboter und E-Mail-Adressen-Sammler, Ihre `robots.txt`-Datei ignorieren werden.

## Beispiele

Verhindern, dass alle Suchmaschinen eine Website durchsuchen:

```http
User-agent: *
Disallow: /
```

Bestimmte Verzeichnisse ausblenden (wird nicht empfohlen):

```http example-bad
User-agent: *
Disallow: /secret/admin-interface
```

## Siehe auch

- [Über /robots.txt](https://www.robotstxt.org/robotstxt.html) auf `robotstxt.org`
