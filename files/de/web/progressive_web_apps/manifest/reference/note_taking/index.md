---
title: note_taking
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert damit verbundene Informationen, zum Beispiel eine URL, die auf Funktionen zum Erstellen einer neuen Notiz verweist. Dies ermöglicht Betriebssystemen, die Notizfunktionalität der App zu integrieren, zum Beispiel durch Hinzufügen einer "Neue Notiz"-Option im Kontextmenü der App oder durch Anbieten der App als Option zum Erstellen einer Notiz in anderen Apps.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}

  - : Ein String, der die URL darstellt, die der Entwickler bevorzugt, wenn der Benutzer über die Web-App eine neue Notiz erstellen möchte. Dieser Wert ist ein Hinweis, und unterschiedliche Implementierungen können sich dafür entscheiden, ihn zu ignorieren oder als Option an geeigneten Stellen anzubieten. Die `new_note_url` wird mit der Manifest-URL der App als Basis-URL analysiert und ignoriert, wenn sie nicht im [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Manifests enthalten ist.

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
