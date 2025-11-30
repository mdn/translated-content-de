---
title: shortcuts
slug: Web/Progressive_web_apps/Manifest/Reference/shortcuts
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Das `shortcuts` Manifest-Mitglied wird verwendet, um Links zu wichtigen Aufgaben oder Seiten innerhalb Ihrer Webanwendung anzugeben. Browser können diese Informationen nutzen, um ein Kontextmenü zu erstellen, das typischerweise angezeigt wird, wenn ein Benutzer mit dem Symbol der Web-App interagiert.

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
    Die möglichen Eigenschaften sind:
    - `name`
      - : Ein String, der den Namen der Verknüpfung darstellt, der den Benutzern in einem Kontextmenü angezeigt wird.

    - `short_name` {{Optional_Inline}}
      - : Ein String, der eine kurze Version des Namens der Verknüpfung darstellt.
        Browser können diesen in Kontexten verwenden, in denen nicht genug Platz zur Verfügung steht, um den vollständigen Namen anzuzeigen.

    - `description` {{Optional_Inline}}
      - : Ein String, der den Zweck der Verknüpfung beschreibt.
        Browser können diese Informationen assistierender Technologie, wie z.B. Bildschirmlesegeräten, bereitstellen, um den Benutzern zu helfen, den Zweck der Verknüpfung zu verstehen.

    - `url`
      - : Eine App-URL, die geöffnet wird, wenn die zugehörige Verknüpfung aktiviert wird.
        Die URL muss innerhalb des [scopes](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) des Web-App-Manifests liegen.
        Wenn der Wert absolut ist, sollte er von derselben Herkunft sein wie die Seite, die auf die Manifestdatei verweist.
        Wenn der Wert relativ ist, wird er gegen die URL der Manifestdatei aufgelöst.

    - [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) {{Optional_Inline}}
      - : Ein Array von Icon-Objekten, die die Verknüpfung in verschiedenen Kontexten darstellen.
        Dies hat dasselbe Format wie das [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Manifest-Mitglied.

## Beschreibung

Das `shortcuts` Mitglied ermöglicht es Ihnen, den Benutzern direkten Zugriff auf wichtige Funktionen Ihrer Web-App zu bieten. Verknüpfungen werden normalerweise den Benutzern in einem Kontextmenü angezeigt, wenn sie mit dem Symbol der Web-App interagieren, z.B. durch Rechtsklick oder langes Drücken. Wenn Benutzer eine Verknüpfung aus diesem Menü aktivieren, navigieren die Browser sie zu der im `url` der Verknüpfung angegebenen Adresse.

Browser rendern Verknüpfungen in der Regel in der gleichen Reihenfolge, wie sie in der Manifestdatei der App angegeben sind.

> [!NOTE]
> Die Präsentation und die Anzahl der den Benutzern gezeigten Verknüpfungen liegt im Ermessen der Browser und/oder des Betriebssystems.
> Beispielsweise können Browser die Liste der deklarierten Verknüpfungen kürzen, um die Konventionen oder Beschränkungen des zugrunde liegenden Betriebssystems einzuhalten.

### Vorteile der Hinzufügung von Verknüpfungen

Verknüpfungen können das Benutzererlebnis verbessern durch:

- Bereitstellung direkter Navigation zu häufig genutzten Funktionen oder Seiten innerhalb der Web-App
- Dafür sorgen, dass sich Ihre Web-App für die Benutzer plattformspezifischer und vertrauter anfühlt.

Zum Beispiel können Verknüpfungen verwendet werden, um direkt zur Zeitleiste eines Benutzers innerhalb einer Social-Media-App zu verlinken oder um schnellen Zugriff auf die letzten Bestellungen eines Benutzers in einem E-Commerce-Kontext zu bieten.

### Beste Praktiken für die Hinzufügung von Verknüpfungen

Wenn Sie Verknüpfungen für Ihre Web-App erstellen, beachten Sie die folgenden Leitlinien:

- Halten Sie die Namen der Verknüpfungen kurz, aber aussagekräftig genug, um ihren Zweck für die Benutzer klar zu vermitteln.
- Stellen Sie sicher, dass Verknüpfungs-URLs innerhalb des Scopes Ihrer Web-App liegen.
- Schließen Sie Icons für Verknüpfungen ein, um die visuelle Erkennung zu verbessern.
  Stellen Sie Icons in mehreren Größen bereit, um eine qualitativ hochwertige Darstellung auf verschiedenen Geräten und in verschiedenen Kontexten zu gewährleisten.
- Ordnen Sie die Verknüpfungen von der wichtigsten bis zur unwichtigsten, basierend auf der Relevanz und Nutzung der Funktionen, zu denen sie verlinken.
- Bevorzugen Sie das Hinzufügen weniger wichtiger Verknüpfungen. Eine lange Liste kann Benutzer nicht nur überwältigen, sondern möglicherweise auch von einigen Plattformen oder Browsern gekürzt werden.

## Beispiele

### Definition von Verknüpfungen für eine Aufgabenverwaltungs-Web-App

Betrachten Sie eine Aufgabenverwaltungs-App. Dieses Beispiel zeigt, wie man zwei Verknüpfungen hinzufügt. Die "New Task"-Verknüpfung führt die Benutzer direkt zur Aufgaben-Erstellungsseite, und die "Today's Tasks"-Verknüpfung bietet schnellen Zugriff auf ihre Aufgabenliste für den aktuellen Tag.

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

### Hinzufügen von Verknüpfungssymbolen und Verwenden relativer URLs

Aufbauend auf dem vorherigen Beispiel fügt der folgende Code den beiden Verknüpfungen Symbole hinzu und zeigt die Verwendung einer relativen URL in einer zusätzlichen dritten Verknüpfung. Die `../projects` URL wird relativ zur URL des App-Manifests aufgelöst. Wenn die Manifestsda Datei beispielsweise unter `/dashboard/manifest.json` gespeichert ist, würde diese Verknüpfung zu `/projects` navigieren.

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
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- Anleitung zum [Exponieren häufiger Aktionen als Verknüpfungen](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts) in PWAs
