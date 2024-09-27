---
title: Kategorien
slug: Web/Manifest/categories
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `categories`-Mitglied ist ein Array von Zeichenketten, das die Namen von Kategorien definiert, denen die Anwendung angeblich angehört.

Es gibt keine standardisierte Liste möglicher Werte, aber das W3C pflegt [eine Liste bekannter Kategorien](https://github.com/w3c/manifest/wiki/Categories).

> **Note:** `categories` werden nur als Hinweise für Kataloge oder Stores verwendet, die Webanwendungen auflisten. Wie Suchmaschinen und Metaschlüsselwörter können Kataloge und Stores sie ignorieren.

> **Note:** `categories`-Werte werden von den Stores und Katalogen vor der Verarbeitung in Kleinbuchstaben umgewandelt, sodass "News" und "news" als derselbe Wert behandelt werden. Es wird empfohlen, von Anfang an Kleinbuchstaben zu verwenden.

## Beispiele

```json
"categories": ["books", "education", "medical"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Manifestmitglied wird von App-Stores und Katalogen verwendet, wenn Web-Apps veröffentlicht und aufgelistet werden, daher ist die Browser-Kompatibilität nicht anwendbar. Browser können diese Informationen zwar parsen, aber es ist optional und beeinträchtigt nicht die Kernfunktionalität einer Web-App.
