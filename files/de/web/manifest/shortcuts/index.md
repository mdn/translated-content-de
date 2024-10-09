---
title: Shortcuts
slug: Web/Manifest/shortcuts
l10n:
  sourceCommit: 0d056d937a925b5474fedc5d38383325a04826bc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `shortcuts`-Manifestmitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung anzugeben. Browser können diese Informationen verwenden, um ein Kontextmenü zu erstellen, das normalerweise angezeigt wird, wenn ein Benutzer mit dem Symbol der Web-App interagiert.

## Syntax

```json-nolint
/* Single shortcut with all properties */
"shortcuts": [
  {
    "name": "Today's agenda",
    "short_name": "Agenda",
    "description": "View your agenda for today",
    "url": "/today",
    "icons": [
      {
        "src": "today.png",
        "sizes": "192x192"
        }
    ]
  }
]

/* Two shortcuts with the required properties */
"shortcuts": [
  {
    "name": "Today's agenda",
    "url": "/today"
  },
  {
    "name": "Tomorrow's agenda",
    "url": "/tomorrow"
  }
]

/* Shortcut with a relative URL */
"shortcuts": [
  {
    "name": "This week's agenda",
    "url": "../agenda"
  }
]
```

### Werte

- `shortcuts`

  - : Ein Array von Objekten. Jedes Objekt repräsentiert eine wichtige Aufgabe oder Seite in der Web-App.

    Jedes Objekt kann eine oder mehrere Eigenschaften haben. Davon sind nur `name` und `url` erforderlich. Die möglichen Eigenschaften umfassen:

    - `name`

      - : Ein String, der den Namen des Shortcuts darstellt, der den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}

      - : Ein String, der eine Kurzversion des Shortcut-Namens darstellt.
        Browser können dies in Kontexten verwenden, in denen nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}

      - : Ein String, der den Zweck des Shortcuts beschreibt.
        Browser können diese Information zugänglich machen, zum Beispiel für assistive Technologien wie Bildschirmlesegeräte, die Benutzern helfen können, den Zweck des Shortcuts zu verstehen.

    - `url`

      - : Eine App-URL, die geöffnet wird, wenn der zugehörige Shortcut aktiviert wird.
        Die URL muss innerhalb des [Geltungsbereichs](/de/docs/Web/Manifest/scope) des Web-App-Manifests liegen.
        Wenn der Wert absolut ist, sollte er gleichen Ursprungs wie die Seite sein, die auf die Manifestdatei verlinkt.
        Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    - [`icons`](/de/docs/Web/Manifest/icons) {{Optional_Inline}}

      - : Ein Array von Icon-Objekten, das den Shortcut in verschiedenen Kontexten darstellt.
        Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Manifest/icons) Manifestmitglied.

## Beschreibung

Das `shortcuts`-Mitglied ermöglicht es Ihnen, Benutzern direkten Zugriff auf wichtige Funktionen Ihrer Web-App zu geben. Shortcuts werden Benutzern normalerweise in einem Kontextmenü angezeigt, wenn sie mit dem Symbol der Web-App interagieren, z.B. durch Rechtsklick oder langes Drücken. Wenn Benutzer einen Shortcut aus diesem Menü aktivieren, navigieren Browser sie zu der im `url` des Shortcuts angegebenen Adresse.

Browser stellen Shortcuts in der Regel in der Reihenfolge dar, in der sie in der Manifestdatei der App angegeben sind.

> [!NOTE]
> Die Darstellung und die Anzahl der Shortcuts, die Benutzern angezeigt werden, liegt im Ermessen der Browser und/oder des Betriebssystems.
> Zum Beispiel können Browser die Liste der deklarierten Shortcuts kürzen, um mit den Konventionen oder Einschränkungen des Host-Betriebssystems übereinzustimmen.

### Vorteile des Hinzufügens von Shortcuts

Shortcuts können die Benutzererfahrung verbessern, indem sie:

- Direktes Navigieren zu häufig genutzten Funktionen oder Seiten innerhalb der Web-App ermöglichen
- Ihre Web-App plattformnäher und den Benutzern vertrauter erscheinen lassen.

Zum Beispiel können Shortcuts verwendet werden, um direkt zur Timeline eines Benutzers innerhalb einer Social-Media-App zu verlinken oder schnellen Zugriff auf die kürzlich getätigten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu ermöglichen.

### Beste Praktiken für das Hinzufügen von Shortcuts

Beim Erstellen von Shortcuts für Ihre Web-App sollten Sie die folgenden Richtlinien beachten:

- Halten Sie die Namen der Shortcuts kurz, aber ausreichend beschreibend, um ihren Zweck für die Benutzer klar zu vermitteln.
- Stellen Sie sicher, dass Shortcut-URLs innerhalb des Geltungsbereichs Ihrer Web-App liegen.
- Fügen Sie Icons für Shortcuts hinzu, um die visuelle Erkennung zu verbessern.
  Bieten Sie Icons in mehreren Größen an, um eine qualitativ hochwertige Anzeige auf verschiedenen Geräten und in verschiedenen Kontexten sicherzustellen.
- Ordnen Sie die Shortcuts in der Reihenfolge ihrer Wichtigkeit, basierend auf der Relevanz und Nutzung der Funktionen, auf die sie verlinken.
- Bevorzugen Sie das Hinzufügen einiger wichtiger Shortcuts. Eine lange Liste kann Benutzer nicht nur überfordern, sondern könnte auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Definieren von Shortcuts für eine Aufgabenverwaltungs-Web-App

Betrachten Sie eine Aufgabenverwaltungs-App. Dieses Beispiel zeigt, wie zwei Shortcuts hinzugefügt werden. Der "Neue Aufgabe"-Shortcut führt Benutzer direkt zur Task-Erstellungsseite, und der "Aufgaben von heute"-Shortcut bietet schnellen Zugriff auf ihre Aufgabenliste für den aktuellen Tag.

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new"
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today"
    }
  ]
}
```

### Hinzufügen von Shortcut-Icons und Verwendung von relativen URLs

Aufbauend auf dem vorherigen Beispiel fügt der folgende Code Icons zu den beiden Shortcuts hinzu und zeigt die Verwendung einer relativen URL in einem zusätzlichen dritten Shortcut. Die `../projects` URL wird relativ zur URL des App-Manifests aufgelöst. Zum Beispiel würde dieser Shortcut zu `/projects` navigieren, wenn sich die App-Manifestdatei unter `/dashboard/manifest.json` befindet.

```json
{
  "name": "TaskPro",
  "short_name": "Tasks",
  "start_url": "/dashboard",
  "display": "standalone",
  "shortcuts": [
    {
      "name": "New Task",
      "short_name": "Add",
      "description": "Quickly add a new task",
      "url": "/tasks/new",
      "icons": [
        {
          "src": "/images/add.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "Today's Tasks",
      "short_name": "Today",
      "description": "View your tasks for today",
      "url": "/tasks/today",
      "icons": [
        {
          "src": "/images/calendar.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "All Projects",
      "short_name": "Projects",
      "description": "View all your projects",
      "url": "../projects"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`icons`](/de/docs/Web/Manifest/icons)-Manifestmitglied
- [`scope`](/de/docs/Web/Manifest/scope)-Manifestmitglied
- [`start_url`](/de/docs/Web/Manifest/start_url)-Manifestmitglied
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Anleitung zum [Darstellen von häufig genutzten Aktionen als Shortcuts](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
