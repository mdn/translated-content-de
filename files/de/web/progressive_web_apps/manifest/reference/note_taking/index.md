---
title: Notizen
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert zugehörige Informationen, zum Beispiel eine URL, die auf eine Funktionalität zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizfunktionalität der App zu integrieren, z. B. indem eine Option "Neue Notiz" im Kontextmenü der App hinzugefügt oder die App als Option zum Erstellen von Notizen in anderen Apps bereitgestellt wird.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}

  - : Ein String, der die URL darstellt, die der Entwickler bevorzugen würde, wenn der Benutzeragent geladen wird, wenn der Benutzer eine neue Notiz über die Web-App erstellen möchte. Dieser Wert ist ein Hinweis, und verschiedene Implementierungen können entscheiden, ihn zu ignorieren oder an geeigneten Stellen als Auswahlmöglichkeit anzubieten. Die `new_note_url` wird mit der Basis-URL des Manifests der App geparst und ignoriert, wenn sie sich nicht innerhalb des [Scopes](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Manifests befindet.

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
