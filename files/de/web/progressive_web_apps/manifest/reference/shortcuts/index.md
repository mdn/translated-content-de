---
title: shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `shortcuts`-Manifestmitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung zu spezifizieren. Browser können diese Informationen verwenden, um ein Kontextmenü zu erstellen, das typischerweise angezeigt wird, wenn ein Benutzer mit dem Symbol der Web-App interagiert.

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
      - : Ein String, der den Namen der Verknüpfung darstellt, der den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}
      - : Ein String, der eine kurze Version des Namens der Verknüpfung darstellt.
        Browser können dies in Kontexten verwenden, in denen nicht genug Platz ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}
      - : Ein String, der den Zweck der Verknüpfung beschreibt.
        Browser können diese Information assistiven Technologien, wie z.B. Screenreadern, zur Verfügung stellen, die Nutzern helfen können, den Zweck der Verknüpfung zu verstehen.

    - `url`
      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird.
        Die URL muss innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests liegen.
        Wenn der Wert absolut ist, sollte er gleichen Ursprungs wie die Seite sein, die auf die Manifestdatei verweist.
        Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    - [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}
      - : Ein Array von Icon-Objekten, die die Verknüpfung in verschiedenen Kontexten repräsentieren.
        Dies hat das gleiche Format wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Manifestmitglied.

## Beschreibung

Das `shortcuts`-Mitglied ermöglicht es Ihnen, Nutzern direkten Zugriff auf wichtige Funktionen Ihrer Web-App zu bieten. Verknüpfungen werden in der Regel in einem Kontextmenü angezeigt, wenn Nutzer mit dem Symbol der Web-App interagieren, z. B. durch Rechtsklick oder langes Drücken. Wenn Nutzer eine Verknüpfung aus diesem Menü aktivieren, navigieren Browser sie zur in der `url` der Verknüpfung angegebenen Adresse.

Browser geben Verknüpfungen normalerweise in der gleichen Reihenfolge wieder, in der sie in der Manifestdatei der App angegeben sind.

> [!NOTE]
> Die Präsentation und die Anzahl der Verknüpfungen, die den Nutzern angezeigt werden, liegen im Ermessen der Browser und/oder des Betriebssystems.
> Beispielsweise können Browser die Liste der angegebenen Verknüpfungen kürzen, um mit den Konventionen oder Einschränkungen des Host-Betriebssystems übereinzustimmen.

### Vorteile der Hinzufügung von Verknüpfungen

Verknüpfungen können die Benutzererfahrung verbessern, indem sie:

- Direkte Navigation zu häufig genutzten Funktionen oder Seiten innerhalb der Web-App bieten.
- Ihre Web-App sich für Nutzer plattformnativer und vertrauter anfühlen lassen.

Zum Beispiel können Verknüpfungen verwendet werden, um direkt zur Zeitleiste eines Nutzers innerhalb einer Social-Media-App zu verlinken oder schnellen Zugriff auf die letzten Bestellungen eines Nutzers in einem E-Commerce-Kontext zu bieten.

### Beste Praktiken für das Hinzufügen von Verknüpfungen

Wenn Sie Verknüpfungen für Ihre Web-App erstellen, beachten Sie die folgenden Richtlinien:

- Halten Sie die Verknüpfungsnamen kurz, aber aussagekräftig genug, um ihren Zweck für die Nutzer klar zu vermitteln.
- Stellen Sie sicher, dass die URLs der Verknüpfungen innerhalb des Geltungsbereichs Ihrer Web-App liegen.
- Fügen Sie Icons für Verknüpfungen hinzu, um die visuelle Erkennung zu verbessern.
  Stellen Sie Icons in mehreren Größen zur Verfügung, um eine qualitativ hochwertige Anzeige über verschiedene Geräte und Kontexte hinweg zu gewährleisten.
- Ordnen Sie die Verknüpfungen von der wichtigsten zur am wenigsten wichtigen Funktion in Bezug auf Relevanz und Nutzung.
- Fügen Sie lieber einige wenige wichtige Verknüpfungen hinzu. Eine lange Liste kann Nutzer nicht nur überfordern, sondern könnte auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Definition von Verknüpfungen für eine Aufgabenmanagement-Web-App

Betrachten Sie eine Aufgabenmanagement-App. Dieses Beispiel zeigt, wie zwei Verknüpfungen hinzugefügt werden. Die Verknüpfung "Neue Aufgabe" führt die Nutzer direkt zur Aufgaben-Erstellungsseite, und die Verknüpfung "Heutige Aufgaben" bietet schnellen Zugriff auf ihre Aufgabenliste für den aktuellen Tag.

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

### Hinzufügen von Verknüpfungs-Icons und Verwendung relativer URLs

Aufbauend auf dem vorherigen Beispiel fügt der untenstehende Code den beiden Verknüpfungen Icons hinzu und demonstriert die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects`-URL wird relativ zur URL des App-Manifests aufgelöst. Zum Beispiel, wenn sich die Manifestdatei der App unter `/dashboard/manifest.json` befindet, würde diese Verknüpfung zu `/projects` navigieren.

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
- Anleitung zum [Expose common actions as shortcuts](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
