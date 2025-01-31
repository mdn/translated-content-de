---
title: shortcuts
slug: Web/Manifest/Reference/shortcuts
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `shortcuts`-Manifestglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung festzulegen. Browser können diese Informationen verwenden, um ein Kontextmenü zu erstellen, das typischerweise angezeigt wird, wenn ein Benutzer mit dem Symbol der Web-App interagiert.

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

  - : Ein Array von Objekten. Jedes Objekt repräsentiert eine Hauptaufgabe oder Seite in der Webanwendung.

    Jedes Objekt kann eine oder mehrere Eigenschaften haben. Davon sind nur `name` und `url` erforderlich. Die möglichen Eigenschaften sind:

    - `name`

      - : Ein Zeichenfolge, die den Namen der Verknüpfung darstellt, der den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}

      - : Eine Zeichenfolge, die eine Kurzversion des Namens der Verknüpfung darstellt. Browser können diese verwenden, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}

      - : Eine Zeichenfolge, die den Zweck der Verknüpfung beschreibt. Browser können diese Informationen für unterstützende Technologien wie Bildschirmlesegeräte bereitstellen, die Benutzern helfen können, den Zweck der Verknüpfung zu verstehen.

    - `url`

      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird. Die URL muss innerhalb des [Bereichs](/de/docs/Web/Manifest/Reference/scope) des Web-App-Manifests liegen. Wenn der Wert absolut ist, sollte er vom gleichen Ursprung wie die Seite sein, die auf die Manifestdatei verweist. Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    - [`icons`](/de/docs/Web/Manifest/Reference/icons) {{Optional_Inline}}

      - : Ein Array von Symbolobjekten, die die Verknüpfung in verschiedenen Kontexten darstellen. Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Manifest/Reference/icons)-Manifestglied.

## Beschreibung

Das `shortcuts`-Mitglied ermöglicht es Ihnen, Benutzern direkten Zugriff auf wichtige Funktionen Ihrer Web-App zu bieten. Verknüpfungen werden Benutzern in der Regel in einem Kontextmenü angezeigt, wenn sie mit dem Symbol der Web-App interagieren, z. B. durch Rechtsklick oder langes Drücken. Wenn Benutzer eine Verknüpfung aus diesem Menü aktivieren, navigieren Browser sie zur im `url` der Verknüpfung angegebenen Adresse.

Browser rendern Verknüpfungen normalerweise in derselben Reihenfolge, wie sie in der Manifestdatei der App angegeben sind.

> [!NOTE]
> Die Darstellung und die Anzahl der den Benutzern angezeigten Verknüpfungen liegt im Ermessen der Browser und/oder des Betriebssystems. Beispielsweise können Browser die Liste der angegebenen Verknüpfungen kürzen, um mit den Konventionen oder Einschränkungen des Host-Betriebssystems konsistent zu bleiben.

### Vorteile des Hinzufügens von Verknüpfungen

Verknüpfungen können die Benutzererfahrung verbessern durch:

- Direkte Navigation zu häufig genutzten Funktionen oder Seiten innerhalb der Web-App
- Ihre Web-App fühlt sich für Benutzer plattformnativer und vertrauter an.

Zum Beispiel können Verknüpfungen verwendet werden, um direkt zur Timeline eines Benutzers innerhalb einer Social-Media-App zu verlinken oder schnellen Zugriff auf die letzten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu bieten.

### Beste Praktiken für das Hinzufügen von Verknüpfungen

Beim Erstellen von Verknüpfungen für Ihre Web-App sollten Sie die folgenden Richtlinien beachten:

- Halten Sie die Namen der Verknüpfungen kurz, aber beschreibend genug, um ihren Zweck den Benutzern klar zu vermitteln.
- Stellen Sie sicher, dass die URLs der Verknüpfungen innerhalb des Bereichs Ihrer Web-App liegen.
- Fügen Sie Symbole für Verknüpfungen hinzu, um die visuelle Erkennung zu verbessern. Stellen Sie Symbole in mehreren Größen bereit, um eine qualitativ hochwertige Anzeige auf verschiedenen Geräten und in verschiedenen Kontexten zu gewährleisten.
- Ordnen Sie die Verknüpfungen von der wichtigsten bis zur unwichtigsten nach Relevanz und Nutzung der Funktionen, zu denen sie verlinken.
- Ziehen Sie es vor, nur einige wichtige Verknüpfungen hinzuzufügen. Eine lange Liste kann Benutzer nicht nur überwältigen, sondern kann auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Definieren von Verknüpfungen für eine Aufgabenverwaltungs-Web-App

Betrachten Sie eine Aufgabenverwaltungs-App. Dieses Beispiel zeigt, wie zwei Verknüpfungen hinzugefügt werden. Die Verknüpfung "Neue Aufgabe" führt Benutzer direkt zur Aufgaben-Erstellungsseite, und die Verknüpfung "Heutige Aufgaben" bietet schnellen Zugriff auf ihre Aufgabenliste für den aktuellen Tag.

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

Aufbauend auf dem vorherigen Beispiel fügt der untenstehende Code Symbole zu den beiden Verknüpfungen hinzu und demonstriert die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects`-URL wird relativ zur URL des App-Manifests aufgelöst. Zum Beispiel, wenn sich die App-Manifestdatei unter `/dashboard/manifest.json` befindet, würde diese Verknüpfung zu `/projects` navigieren.

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

- [`icons`](/de/docs/Web/Manifest/Reference/icons)-Manifestglied
- [`scope`](/de/docs/Web/Manifest/Reference/scope)-Manifestglied
- [`start_url`](/de/docs/Web/Manifest/Reference/start_url)-Manifestglied
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- Anleitung zum [Expose common actions as shortcuts](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
