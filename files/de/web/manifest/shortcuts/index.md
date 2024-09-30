---
title: shortcuts
slug: Web/Manifest/shortcuts
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `shortcuts`-Element definiert ein Array von Shortcuts oder Links zu wichtigen Aufgaben oder Seiten innerhalb einer Webanwendung. Ein User Agent kann diese Werte verwenden, um ein Kontextmenü zusammenzustellen, das vom Betriebssystem angezeigt wird, wenn ein Benutzer mit dem Symbol der Webanwendung interagiert. Wenn ein Benutzer einen Shortcut aufruft, navigiert der User Agent zu der Adresse, die durch das `url`-Element des Shortcuts angegeben ist.

### Werte

Shortcut-Objekte können die folgenden Werte enthalten (nur `name` und `url` sind erforderlich):

- `name`

  - : Eine Zeichenkette, die dem Benutzer in einem Kontextmenü angezeigt werden kann.</td>

- `short_name` {{Optional_Inline}}

  - : Eine Zeichenkette, die angezeigt werden kann, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen des Shortcuts anzuzeigen.

- `description` {{Optional_Inline}}

  - : Eine Zeichenkette, die den Zweck des Shortcuts beschreibt. Sie kann assistiven Technologien zugänglich gemacht werden.

- `url`

  - : Eine URL innerhalb der Anwendung, die geöffnet wird, wenn der Shortcut aktiviert wird.

- `icons` {{Optional_Inline}}
  - : Ein Satz von Icons, die den Shortcut repräsentieren.
    Sie können z.B. im Kontextmenü verwendet werden. Wenn enthalten, muss das Icon-Set ein 96x96 Pixel Icon beinhalten.

## Beispiele

Die folgende Liste zeigt mögliche Shortcuts einer Kalender-App:

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
