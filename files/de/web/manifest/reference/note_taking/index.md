---
title: note_taking
slug: Web/Manifest/Reference/note_taking
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert zugehörige Informationen, beispielsweise eine URL, die auf Funktionen zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizfunktionen der App zu integrieren, beispielsweise indem sie eine Option "Neue Notiz" im Kontextmenü der App bereitstellen oder die App als Option zum Aufnehmen einer Notiz in anderen Apps anbieten.

### Werte

Ein Objekt, das folgende Werte enthalten kann:

- `new_note_url` {{experimental_inline}}

  - : Ein String, der die URL darstellt, die der Entwickler bevorzugt, wenn der Benutzer über die Web-App eine neue Notiz erstellen möchte. Dieser Wert ist ein Hinweis, und unterschiedliche Implementierungen können sich entscheiden, ihn zu ignorieren oder als Auswahlmöglichkeit an geeigneten Stellen bereitzustellen. Die `new_note_url` wird mit der URL des Manifests als Basis-URL geparst und wird ignoriert, wenn sie sich nicht innerhalb des [scope](/de/docs/Web/Manifest/Reference/scope) des Manifests befindet.

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
