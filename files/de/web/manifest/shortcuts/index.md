---
title: Kurzbefehle
slug: Web/Manifest/shortcuts
l10n:
  sourceCommit: f33c6e8a7204272b90d8f005f3d8c743333d7dbf
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das `shortcuts`-Element definiert ein Array von Kurzbefehlen oder Links zu wichtigen Aufgaben oder Seiten innerhalb einer Web-App. Ein User-Agent kann diese Werte verwenden, um ein Kontextmenü zusammenzustellen, das vom Betriebssystem angezeigt wird, wenn ein Benutzer das App-Symbol berührt. Wenn der Benutzer einen Kurzbefehl aufruft, wird der User-Agent zur Adresse navigieren, die durch das `url`-Element des Kurzbefehls angegeben ist.

## Werte der Kurzbefehlselemente

Kurzbefehlsobjekte können die folgenden Werte enthalten (nur `name` und `url` sind erforderlich):

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Element</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>name</code></td>
      <td>Ein String, der dem Benutzer in einem Kontextmenü angezeigt werden kann.</td>
    </tr>
    <tr>
      <td><code>short_name</code></td>
      <td>Ein String, der angezeigt werden kann, wenn nicht genügend Platz vorhanden ist, um den vollständigen Namen des Kurzbefehls anzuzeigen.</td>
    </tr>
    <tr>
      <td><code>description</code></td>
      <td>Ein String, der den Zweck des Kurzbefehls beschreibt. Er kann assistiven Technologien zugänglich gemacht werden.</td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>Eine URL innerhalb der Anwendung, die geöffnet wird, wenn der Kurzbefehl aktiviert wird.</td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>Ein Satz von Icons, die den Kurzbefehl repräsentieren. Sie können beispielsweise im Kontextmenü verwendet werden. Wenn enthalten, muss das Icon-Set ein 96x96-Pixel-Icon umfassen.</td>
    </tr>
  </tbody>
</table>

## Beispiele

Im Folgenden finden Sie eine Liste von Kurzbefehlen, die eine Kalender-App haben könnte:

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

- [Erstellen von Aktionsmenüs für PWAs](/de/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
