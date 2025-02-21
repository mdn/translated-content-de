---
title: note_taking
slug: Web/Progressive_web_apps/Manifest/Reference/note_taking
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notizen-App und definiert verwandte Informationen, z.B. eine URL, die auf eine Funktion zeigt, um eine neue Notiz zu erstellen. Dies ermöglicht es Betriebssystemen, die Notizen-Funktionalität der App zu integrieren, beispielsweise indem sie eine Option "Neue Notiz" im Kontextmenü der App hinzufügen oder die App als Option zum Erstellen einer Notiz in anderen Apps bereitstellen.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url` {{experimental_inline}}

  - : Ein String, der die URL darstellt, die der Entwickler bevorzugt, dass der Benutzeragent lädt, wenn der Benutzer eine neue Notiz über die Web-App erstellen möchte. Dieser Wert ist ein Hinweis, und verschiedene Implementierungen können sich entscheiden, ihn zu ignorieren oder an geeigneten Stellen zur Auswahl anzubieten. Die `new_note_url` wird mit der Basis-URL des App-Manifests geparst und ignoriert, wenn sie nicht innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Manifests liegt.

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
