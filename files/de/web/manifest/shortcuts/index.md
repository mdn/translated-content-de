---
title: Shortcuts
slug: Web/Manifest/shortcuts
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `shortcuts`-Mitglied definiert ein Array von Shortcuts oder Links zu wichtigen Aufgaben oder Seiten innerhalb einer Web-App. Ein User-Agent kann diese Werte nutzen, um ein Kontextmenü zusammenzustellen, das vom Betriebssystem angezeigt wird, wenn ein Benutzer mit dem Icon der Web-App interagiert. Wenn ein Benutzer einen Shortcut aufruft, navigiert der User-Agent zur Adresse, die durch das `url`-Mitglied des Shortcuts angegeben ist.

### Werte

Shortcut-Objekte können die folgenden Werte enthalten (nur `name` und `url` sind erforderlich):

- `name`

  - : Ein String, der dem Benutzer in einem Kontextmenü angezeigt werden kann.

- `short_name` {{Optional_Inline}}

  - : Ein String, der angezeigt werden kann, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen des Shortcuts anzuzeigen.

- `description` {{Optional_Inline}}

  - : Ein String, der den Zweck des Shortcuts beschreibt. Er kann assistiver Technologie zugänglich gemacht werden.

- `url`

  - : Eine URL innerhalb der Anwendung, die geöffnet wird, wenn der Shortcut aktiviert wird.

- `icons` {{Optional_Inline}}
  - : Eine Reihe von Symbolen, die den Shortcut darstellen.
    Sie können z.B. im Kontextmenü verwendet werden. Wenn sie enthalten sind, muss das Symbolset ein 96x96-Pixel-Symbol umfassen.

## Beispiele

Im Folgenden ist eine Liste von Shortcuts aufgeführt, die eine Kalender-App haben könnte:

```json
"shortcuts" : [
  {
    "name": "Today's agenda",
    "url": "/today",
    "description": "List of events planned for today"
  },
  {
    "name": "New event",
    "url": "/create/event"
  },
  {
    "name": "New reminder",
    "url": "/create/reminder"
  }
]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erstellen von Shortcut-Aktionsmenüs für PWAs](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
