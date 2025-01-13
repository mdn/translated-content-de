---
title: Notizen_machen
slug: Web/Manifest/note_taking
l10n:
  sourceCommit: bd74b053c1e3e395db091669476f0c04189a95c6
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `note_taking`-Element identifiziert eine Web-App als Notizen-App und definiert zugehörige Informationen, z. B. eine URL, die auf eine Funktionalität zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizen-Funktionalität der App zu integrieren, indem sie beispielsweise eine Option "Neue Notiz" im Kontextmenü der App hinzufügen oder die App als Option zum Erstellen einer Notiz in anderen Apps bereitstellen.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}

  - : Ein String, der die URL darstellt, die der Entwickler bevorzugt, wenn der Benutzer über die Web-App eine neue Notiz erstellen möchte. Dieser Wert ist ein Hinweis, und verschiedene Implementierungen können sich dazu entscheiden, ihn zu ignorieren oder ihn an geeigneten Stellen als Option anzubieten. Die `new_note_url` wird mit der Basis-URL des Manifests der App geparst und ignoriert, wenn sie nicht innerhalb des [scope](/de/docs/Web/Manifest/scope) des Manifests liegt.

## Beispiele

```json
{
  "name": "My Note Taking App",
  "description": "You can take notes!",
  "icons": [
    {
      "src": "icon/hd_hi",
      "sizes": "128x128"
    }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "note_taking": {
    "new_note_url": "/new_note.html"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
