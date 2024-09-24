---
title: Kategorien
slug: Web/Manifest/categories
l10n:
  sourceCommit: b3518a84f7c578b434e3c38ff7933ae03ac73966
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code> von <code>String</code>s</td>
    </tr>
  </tbody>
</table>

Das `categories`-Mitglied ist ein Array von Strings, das die Namen von Kategorien definiert, denen die Anwendung angeblich angehört. Es gibt keine standardisierte Liste möglicher Werte, aber das W3C pflegt [eine Liste bekannter Kategorien](https://github.com/w3c/manifest/wiki/Categories).

> [!NOTE] `categories` dienen nur als Hinweise für Kataloge oder Stores, die Webanwendungen auflisten. Ähnlich wie Suchmaschinen und Meta-Keywords sind Kataloge und Stores frei, diese zu ignorieren.

> [!NOTE] Werte von `categories` werden von den Stores und Katalogen vor der Verarbeitung in Kleinbuchstaben umgewandelt, sodass "News" und "news" als gleicher Wert behandelt werden. Entwicklern wird empfohlen, von Anfang an Kleinbuchstaben zu verwenden.

## Beispiel

```json
"categories": ["books", "education", "medical"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
