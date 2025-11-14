---
title: note_taking
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert zugehörige Informationen, zum Beispiel eine URL, die auf eine Funktionalität zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizfunktionalität der App zu integrieren, indem sie zum Beispiel eine Option "Neue Notiz" im Kontextmenü der App hinzufügen oder die App als Option zum Notieren in anderen Apps anbieten.

## Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}
  - : Ein String, der die URL repräsentiert, die der Entwickler bevorzugt, dass der Benutzeragent lädt, wenn der Benutzer eine neue Notiz über die Web-App erstellen möchte. Dieser Wert ist ein Hinweis, und unterschiedliche Implementierungen können sich entscheiden, ihn zu ignorieren oder als Auswahlmöglichkeit an geeigneten Stellen bereitzustellen. Die `new_note_url` wird mit der Manifest-URL der App als Basis-URL geparst und ignoriert, wenn sie nicht innerhalb des [Geltungsbereichs](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Manifests liegt.

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
