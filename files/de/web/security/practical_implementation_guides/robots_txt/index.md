---
title: robots.txt-Konfiguration
slug: Web/Security/Practical_implementation_guides/Robots_txt
l10n:
  sourceCommit: a3693d282028046f4e0dadf0b1aa068b407d1158
---

{{Glossary("Robots.txt", "`robots.txt`")}} ist eine Textdatei, die Robotern (wie Suchmaschinenindexern) anweist, wie sie sich verhalten sollen, indem sie ihnen mitteilt, bestimmte Pfade auf der Website nicht zu durchsuchen. Sie wird im Stammverzeichnis einer Website platziert.

## Problem

Viele Faktoren können die Belastung Ihrer Website erhöhen, einschließlich Webcrawler. Wenn Webcrawler die gesamte Website durchsuchen dürfen, können sie zudem Suchergebnisse mit Ressourcen verunreinigen, die nicht davon profitieren, dass sie durchsuchbar sind.

## Lösung

Verwenden Sie `robots.txt`, um die Website-Belastung zu reduzieren und ungeeignete Inhalte in Suchergebnissen zu verhindern. Die Verwendung dieser Datei ist optional und sollte nur zu diesen Zwecken erfolgen. Sie sollte nicht als Mittel verwendet werden, um die Offenlegung privater Informationen zu verhindern oder um Teile einer Website zu verstecken.

Obwohl die Verwendung dieser Datei verhindern kann, dass Seiten in Suchmaschinenergebnissen erscheinen, sichert sie Websites nicht gegen Angreifer. Im Gegenteil, sie kann ihnen unbeabsichtigt helfen: `robots.txt` ist öffentlich zugänglich, und durch das Hinzufügen Ihrer sensiblen Seitenpfade zeigen Sie potenziellen Angreifern deren Standorte.

Beachten Sie auch, dass einige Roboter, wie Malware-Roboter und E-Mail-Adressen-Sammler, Ihre `robots.txt`-Datei ignorieren.

## Beispiele

Alle Suchmaschinen daran hindern, eine Website zu crawlen:

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

- {{HTTPHeader("X-Robots-Tag")}} HTTP-Header
- [`<meta name="robots">`](/de/docs/Web/HTML/Reference/Elements/meta/name/robots) HTML-Element ("robots-Tag")
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [About /robots.txt](https://www.robotstxt.org/robotstxt.html) auf `robotstxt.org`
