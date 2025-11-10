---
title: note_taking
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert zugehörige Informationen, wie zum Beispiel eine URL, die auf eine Funktion zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizfunktion der App zu integrieren, beispielsweise durch Einfügen einer Option "Neue Notiz" im Kontextmenü der App oder indem die App als Option zum Erstellen einer Notiz in anderen Apps bereitgestellt wird.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}
  - : Ein String, der die URL darstellt, die der Entwickler bevorzugt, wenn der Benutzer über die Web-App eine neue Notiz erstellen möchte. Dieser Wert ist ein Hinweis, und unterschiedliche Implementierungen können entscheiden, ihn zu ignorieren oder an geeigneten Stellen als Auswahlmöglichkeit bereitzustellen. Die `new_note_url` wird mit der Manifest-URL der App als Basis-URL geparst und ignoriert, wenn sie nicht innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Manifests liegt.

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
