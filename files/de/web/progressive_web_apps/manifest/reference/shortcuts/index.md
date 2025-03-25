---
title: Shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Der `shortcuts`-Manifest-Mitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung anzugeben.
Browser können diese Informationen verwenden, um ein Kontextmenü zu erstellen, das in der Regel angezeigt wird, wenn ein Benutzer mit dem Icon der Web-App interagiert.

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

      - : Ein String, der den Namen der Verknüpfung darstellt, der den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}

      - : Ein String, der eine kurze Version des Namens der Verknüpfung darstellt.
        Browser können dies in Kontexten verwenden, in denen nicht genügend Platz ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}

      - : Ein String, der den Zweck der Verknüpfung beschreibt.
        Browser können diese Informationen assistive Technologien zugänglich machen, wie z.B. Screenreader, die Benutzern helfen können, den Zweck der Verknüpfung zu verstehen.

    - `url`

      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird.
        Die URL muss innerhalb des [Geltungsbereichs](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests liegen.
        Wenn der Wert absolut ist, sollte er denselben Ursprung haben wie die Seite, die auf die Manifestdatei verweist.
        Wenn der Wert relativ ist, wird er im Verhältnis zur URL der Manifestdatei aufgelöst.

    - [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}

      - : Ein Array von Icon-Objekten, die die Verknüpfung in verschiedenen Kontexten repräsentieren.
        Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Manifestmitglied.

## Beschreibung

Das `shortcuts`-Mitglied erlaubt es Ihnen, Benutzern direkten Zugang zu wichtigen Funktionen Ihrer Web-App zu bieten.
Verknüpfungen werden Benutzern in der Regel in einem Kontextmenü präsentiert, wenn sie mit dem Icon der Web-App interagieren, z. B. durch Rechtsklick oder langes Drücken.
Wenn Benutzer eine Verknüpfung aus diesem Menü aktivieren, leiten Browser sie zur in der `url` der Verknüpfung angegebenen Adresse weiter.

Browser rendern Verknüpfungen in der Regel in derselben Reihenfolge, wie sie in der Manifestdatei der App angegeben sind.

> [!NOTE]
> Die Darstellung und die Anzahl der Verknüpfungen, die Benutzern angezeigt werden, liegt im Ermessen der Browser und/oder des Betriebssystems.
> Zum Beispiel können Browser die Liste der erklärten Verknüpfungen kürzen, um mit den Konventionen oder Beschränkungen des Host-Betriebssystems konsistent zu bleiben.

### Vorteile von Verknüpfungen

Verknüpfungen können das Benutzererlebnis verbessern, indem sie:

- Direkte Navigation zu häufig verwendeten Funktionen oder Seiten innerhalb der Web-App bieten
- Ihre Web-App plattform-nativer und für Benutzer vertrauter erscheinen lassen.

Beispielsweise können Verknüpfungen verwendet werden, um direkt auf die Zeitleiste eines Benutzers innerhalb einer Social-Media-App oder für einen schnellen Zugriff auf die letzten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu verlinken.

### Best Practices für Verknüpfungen

Beachten Sie die folgenden Richtlinien, wenn Sie Verknüpfungen für Ihre Web-App erstellen:

- Halten Sie die Namen der Verknüpfungen kurz, aber beschreibend genug, um ihre Funktion für Benutzer klar zu vermitteln.
- Stellen Sie sicher, dass die URLs der Verknüpfungen innerhalb des Geltungsbereichs Ihrer Web-App liegen.
- Fügen Sie Icons zu den Verknüpfungen hinzu, um die visuelle Wiedererkennung zu verbessern.
  Stellen Sie Icons in mehreren Größen bereit, um eine qualitativ hochwertige Darstellung auf verschiedenen Geräten und in verschiedenen Kontexten zu gewährleisten.
- Ordnen Sie die Verknüpfungen von der wichtigsten bis zur unwichtigsten, basierend auf der Relevanz und Nutzung der Funktionen, zu denen sie führen.
- Ziehen Sie es vor, einige wichtige Verknüpfungen hinzuzufügen. Eine lange Liste kann nicht nur Benutzer überwältigen, sondern auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Definition von Verknüpfungen für eine Aufgabenmanagement-Web-App

Betrachten Sie eine Aufgabenmanagement-App. Dieses Beispiel zeigt, wie zwei Verknüpfungen hinzugefügt werden können. Die Verknüpfung "Neue Aufgabe" führt Benutzer direkt zur Seite der Aufgabenerstellung, und die Verknüpfung "Aufgaben von heute" bietet schnellen Zugang zu ihrer Liste der Aufgaben für den aktuellen Tag.

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

### Hinzufügen von Verknüpfungssymbolen und Verwendung relativer URLs

Aufbauend auf dem vorherigen Beispiel fügt der folgende Code Icons zu den beiden Verknüpfungen hinzu und zeigt die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects`-URL wird relativ zur URL des App-Manifests aufgelöst. Wenn sich die Manifestdatei der App z.B. unter `/dashboard/manifest.json` befindet, würde diese Verknüpfung zu `/projects` navigieren.

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

- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifest-Mitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Mitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifest-Mitglied
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Anleitung zur [Freigabe häufiger Aktionen als Verknüpfungen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
