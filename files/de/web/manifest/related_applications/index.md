---
title: related_applications
slug: Web/Manifest/related_applications
l10n:
  sourceCommit: b3d5659a6f16dc6cb8be5c48d19820a67434ecb9
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das Feld `related_applications` ist ein Array von Objekten, das native Anwendungen angibt, die auf der zugrunde liegenden Plattform installierbar oder zugänglich sind — zum Beispiel eine native Android-Anwendung, die über den Google Play Store erhältlich ist. Solche Anwendungen sollen Alternativen zur Website des Manifests sein, die ähnliche/gleichwertige Funktionalitäten bieten — wie das Äquivalent zur nativen Anwendung.

> [!NOTE]
> Entwickler können angeben, dass die nativen Anwendungen gegenüber der Webanwendung bevorzugt werden, indem sie `prefer_related_applications` auf `true` setzen.

## Beispiele

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }, {
    "platform": "windows",
    "url": "https://apps.microsoft.com/store/detail/example-app1/id123456789"
  }
]
```

## Eigenschaften der verwandten Anwendungen

Anwendungsobjekte können folgende Eigenschaften enthalten:

| Mitglied   | Beschreibung                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `platform` | Die Plattform, auf der die Anwendung gefunden werden kann. [Liste verfügbarer Werte](https://github.com/w3c/manifest/wiki/Platforms) |
| `url`      | Die URL, unter der die Anwendung gefunden werden kann.                                                                               |
| `id`       | Die ID, die zur Darstellung der Anwendung auf der angegebenen Plattform verwendet wird.                                              |

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
