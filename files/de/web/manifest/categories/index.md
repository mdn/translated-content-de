---
title: categories
slug: Web/Manifest/categories
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `categories`-Mitglied ist ein Array von Zeichenfolgen, das die Namen von Kategorien definiert, denen die Anwendung angeblich angehört.

Es gibt keine Standardliste möglicher Werte, aber das W3C pflegt [eine Liste bekannter Kategorien](https://github.com/w3c/manifest/wiki/Categories).

> **Note:** `categories` werden nur als Hinweise für Kataloge oder Stores verwendet, die Webanwendungen auflisten. Wie Suchmaschinen und Meta-Schlüsselwörter können Kataloge und Stores sie ignorieren.

> **Note:** Die Werte von `categories` werden von den Stores und Katalogen vor der Verarbeitung kleingeschrieben, sodass "News" und "news" als derselbe Wert behandelt werden. Entwicklern wird empfohlen, von Anfang an Kleinbuchstaben zu verwenden.

## Beispiele

```json
"categories": ["books", "education", "medical"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieses Manifest-Mitglied wird von App-Stores und Katalogen beim Veröffentlichen und Listen von Web-Apps verwendet, daher ist die Browser-Kompatibilität nicht anwendbar. Browser können diese Informationen parsen, aber es ist optional und beeinflusst nicht die Kernfunktionalität einer Web-App.
