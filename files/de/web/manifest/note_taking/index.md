---
title: note_taking
slug: Web/Manifest/note_taking
l10n:
  sourceCommit: 3b15ee880963aef293c0e9a65290f75097c33a99
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `note_taking`-Mitglied identifiziert eine Web-App als Notiz-App und definiert damit verbundene Informationen, wie z. B. eine URL, die auf eine Funktionalität zum Erstellen einer neuen Notiz verweist. Dies ermöglicht es Betriebssystemen, die Notizfunktionalität der App zu integrieren, zum Beispiel indem eine Option "Neue Notiz" im Kontextmenü der App aufgenommen wird oder die App als Option zum Erstellen einer Notiz in anderen Apps angeboten wird.

### Werte

Ein Objekt, das die folgenden Werte enthalten kann:

- `new_note_url`

  - : Ein String, der die URL repräsentiert, die der Entwickler bevorzugen würde, dass der Nutzer-Agent lädt, wenn der Nutzer eine neue Notiz über die Web-App erstellen möchte. Dieser Wert ist ein Hinweis, und unterschiedliche Implementierungen können sich entscheiden, ihn zu ignorieren oder als Auswahl an geeigneten Stellen bereitzustellen. Die `new_note_url` wird mit der URL des App-Manifests als Basis-URL geparst und wird ignoriert, wenn sie nicht innerhalb des [Geltungsbereichs](/de/docs/Web/Manifest/scope) des Manifests liegt.

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
