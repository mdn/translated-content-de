---
title: shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `shortcuts`-Manifestmitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung anzugeben.
Browser können diese Informationen nutzen, um ein Kontextmenü zu erstellen, das typischerweise angezeigt wird, wenn ein Benutzer mit dem Icon der Web-App interagiert.

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

    Jedes Objekt kann eine oder mehrere Eigenschaften haben. Davon sind nur `name` und `url` erforderlich.
    Die möglichen Eigenschaften umfassen:

    - `name`

      - : Ein String, der den Namen der Verknüpfung darstellt, welcher den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}

      - : Ein String, der eine kurze Version des Namens der Verknüpfung darstellt.
        Browser können dies in Kontexten verwenden, in denen nicht genug Platz ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}

      - : Ein String, der den Zweck der Verknüpfung beschreibt.
        Browser können diese Information assistiver Technologie zugänglich machen, wie z.B. Screenreadern, die den Benutzern helfen können, den Zweck der Verknüpfung zu verstehen.

    - `url`

      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird.
        Die URL muss innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests liegen.
        Wenn der Wert absolut ist, sollte er gleiche Ursprünge mit der Seite haben, die auf die Manifest-Datei verweist.
        Wenn der Wert relativ ist, wird er relativ zur URL der Manifest-Datei aufgelöst.

    - [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}

      - : Ein Array von Icon-Objekten, die die Verknüpfung in verschiedenen Kontexten darstellen.
        Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifestmitglied.

## Beschreibung

Das `shortcuts`-Mitglied ermöglicht es Ihnen, Benutzern direkten Zugang zu wichtigen Funktionen Ihrer Web-App zu bieten.
Verknüpfungen werden Benutzern in der Regel in einem Kontextmenü präsentiert, wenn sie mit dem Icon der Web-App interagieren, z.B. durch Rechtsklick oder langes Drücken.
Wenn Benutzer eine Verknüpfung aus diesem Menü aktivieren, navigieren Browser sie zu der in der `url` der Verknüpfung angegebenen Adresse.

Browser rendern Verknüpfungen in der Regel in der Reihenfolge, in der sie in der Manifest-Datei der App bereitgestellt werden.

> [!NOTE]
> Die Darstellung und Anzahl der den Benutzern gezeigten Verknüpfungen liegt im Ermessen der Browser und/oder des Betriebssystems.
> Zum Beispiel können Browser die Liste der deklarierten Verknüpfungen kürzen, um konsistent mit den Konventionen oder Einschränkungen des Host-Betriebssystems zu bleiben.

### Vorteile des Hinzufügens von Verknüpfungen

Verknüpfungen können das Benutzererlebnis verbessern, indem sie:

- Direkte Navigation zu häufig verwendeten Funktionen oder Seiten innerhalb der Web-App bieten
- Ihre Web-App für die Benutzer plattformnäher und vertrauter erscheinen lassen.

Zum Beispiel können Verknüpfungen verwendet werden, um direkt auf die Timeline eines Benutzers innerhalb einer Social-Media-App zu verlinken oder schnellen Zugriff auf die letzten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu bieten.

### Best Practices für das Hinzufügen von Verknüpfungen

Beim Erstellen von Verknüpfungen für Ihre Web-App sollten Sie die folgenden Richtlinien beachten:

- Halten Sie die Namen der Verknüpfungen kurz, aber beschreibend genug, um den Benutzern ihren Zweck klar zu vermitteln.
- Stellen Sie sicher, dass Verknüpfungs-URLs innerhalb des Bereichs Ihrer Web-App liegen.
- Fügen Sie Icons für Verknüpfungen hinzu, um die visuelle Erkennung zu verbessern.
  Stellen Sie Icons in mehreren Größen bereit, um eine qualitativ hochwertige Anzeige auf verschiedenen Geräten und in verschiedenen Kontexten zu gewährleisten.
- Ordnen Sie die Verknüpfungen von der wichtigsten bis zur am wenigsten wichtigen, basierend auf der Relevanz und Nutzung der Funktionen, zu denen sie verlinken.
- Bevorzugen Sie das Hinzufügen weniger wichtiger Verknüpfungen. Eine lange Liste kann Benutzer nicht nur überwältigen, sondern möglicherweise auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Festlegen von Verknüpfungen für eine Aufgabenverwaltungs-Web-App

Betrachten Sie eine Aufgabenverwaltungs-App. Dieses Beispiel zeigt, wie zwei Verknüpfungen hinzugefügt werden. Die "Neue Aufgabe"-Verknüpfung führt die Benutzer direkt auf die Aufgabenerstellungsseite, und die "Aufgaben von heute"-Verknüpfung bietet schnellen Zugriff auf ihre Liste von Aufgaben für den aktuellen Tag.

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

### Hinzufügen von Verknüpfungsicons und Verwendung relativer URLs

Aufbauend auf dem vorherigen Beispiel fügt der folgende Code Icons zu den beiden Verknüpfungen hinzu und zeigt die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects`-URL wird relativ zur URL des App-Manifests aufgelöst. Wenn sich beispielsweise die Manifest-Datei der App unter `/dashboard/manifest.json` befindet, würde diese Verknüpfung auf `/projects` navigieren.

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

- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifestmitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Anleitung zum [Exponieren häufiger Aktionen als Verknüpfungen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
