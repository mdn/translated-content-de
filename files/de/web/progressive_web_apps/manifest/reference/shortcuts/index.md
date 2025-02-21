---
title: shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `shortcuts`-Manifestmitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung anzugeben. Browser können diese Informationen nutzen, um ein Kontextmenü zu erstellen, das typischerweise angezeigt wird, wenn ein Benutzer mit dem Symbol der Web-App interagiert.

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

      - : Ein String, der eine Kurzversion des Namens der Verknüpfung darstellt.
        Browser können dies in Kontexten verwenden, in denen nicht genügend Platz ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}

      - : Ein String, der den Zweck der Verknüpfung beschreibt.
        Browser können diese Information assistiven Technologien, wie Bildschirmlesegeräten, zur Verfügung stellen, um Benutzern zu helfen, den Zweck der Verknüpfung zu verstehen.

    - `url`

      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird.
        Die URL muss innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests liegen.
        Ist der Wert absolut, sollte er gleichen Ursprungs wie die Seite sein, die auf die Manifestsdatei verweist.
        Ist der Wert relativ, wird er relativ zur URL der Manifestsdatei aufgelöst.

    - [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}

      - : Ein Array von Icon-Objekten, die die Verknüpfung in verschiedenen Kontexten darstellen.
        Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Manifestmitglied.

## Beschreibung

Das `shortcuts`-Mitglied ermöglicht es Ihnen, Benutzern direkten Zugriff auf wichtige Funktionen Ihrer Web-App zu bieten.
Verknüpfungen werden Benutzern in der Regel in einem Kontextmenü angezeigt, wenn sie mit dem Symbol der Web-App interagieren, z. B. durch Rechtsklick oder langes Drücken.
Wenn Benutzer eine Verknüpfung aus diesem Menü aktivieren, navigieren Browser sie zu der in der `url` der Verknüpfung angegebenen Adresse.

Browser zeigen Verknüpfungen in der Regel in der gleichen Reihenfolge an, wie sie in der Manifestsdatei der App angegeben sind.

> [!NOTE]
> Die Darstellung und die Anzahl der den Nutzern angezeigten Verknüpfungen liegen im Ermessen der Browser und/oder des Betriebssystems.
> Beispielsweise können Browser die Liste der deklarierten Verknüpfungen kürzen, um mit den Konventionen oder Einschränkungen des Hostbetriebssystems konsistent zu bleiben.

### Vorteile des Hinzufügens von Verknüpfungen

Verknüpfungen können die Benutzererfahrung verbessern, indem sie:

- Direkte Navigation zu häufig genutzten Funktionen oder Seiten in der Web-App bieten
- Ihre Web-App benutzerfreundlicher und vertrauter wirken lassen.

Beispielsweise können Verknüpfungen verwendet werden, um direkt auf die Timeline eines Benutzers innerhalb einer Social-Media-App zu verlinken oder schnellen Zugriff auf die letzten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu bieten.

### Best Practices zum Hinzufügen von Verknüpfungen

Wenn Sie Verknüpfungen für Ihre Web-App erstellen, beachten Sie die folgenden Richtlinien:

- Halten Sie die Namen der Verknüpfungen kurz, aber aussagekräftig genug, um ihren Zweck den Nutzern klar zu vermitteln.
- Stellen Sie sicher, dass die URLs der Verknüpfungen im Bereich Ihrer Web-App liegen.
- Fügen Sie Icons für Verknüpfungen hinzu, um die visuelle Erkennung zu verbessern.
  Stellen Sie auf mehreren Größen Icons bereit, um eine qualitativ hochwertige Anzeige auf verschiedenen Geräten und in verschiedenen Kontexten zu gewährleisten.
- Ordnen Sie die Verknüpfungen von am wichtigsten bis am wenigsten wichtig, basierend auf der Relevanz und Nutzung der Funktionen, auf die sie verweisen.
- Bevorzugen Sie das Hinzufügen einiger wichtiger Verknüpfungen. Eine lange Liste kann Benutzer überwältigen und von einigen Plattformen oder Browsern möglicherweise gekürzt werden.

## Beispiele

### Definieren von Verknüpfungen für eine Aufgabenmanagement-Web-App

Betrachten Sie eine Aufgabenmanagement-App. Dieses Beispiel zeigt, wie Sie zwei Verknüpfungen hinzufügen. Die "Neue Aufgabe"-Verknüpfung bringt Benutzer direkt zur Aufgabenerstellungsseite, und die "Aufgaben von heute"-Verknüpfung bietet schnellen Zugriff auf ihre Liste der Aufgaben für den aktuellen Tag.

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

Aufbauend auf dem vorherigen Beispiel fügt der untenstehende Code den beiden Verknüpfungen Symbole hinzu und demonstriert die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects` URL wird relativ zur URL des App-Manifests aufgelöst. Wenn sich die Manifestsdatei der App z. B. unter `/dashboard/manifest.json` befindet, würde diese Verknüpfung nach `/projects` navigieren.

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

- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Manifestmitglied
- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope)-Manifestmitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)-Manifestmitglied
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Anleitung zum [Bereitstellen allgemeiner Aktionen als Verknüpfungen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
