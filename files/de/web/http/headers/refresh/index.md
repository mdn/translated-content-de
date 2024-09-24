---
title: Aktualisieren
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTTPSidebar}}

Der **`Refresh`** Antwort-Header weist einen Webbrowser an, entweder die Seite zu aktualisieren oder umzuleiten, wenn eine bestimmte Zeit nach dem vollständigen Laden der Seite vergangen ist. Es ist genau gleichbedeutend mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header immer noch von der HTML-Lademaschine behandelt und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie unter [Reihenfolge der Weiterleitungspriorität](/de/docs/Web/HTTP/Redirections#order_of_precedence).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Refresh: <time>
Refresh: <time>, url=<url>
Refresh: <time>; url=<url>
```

- `<time>`
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser zur angegebenen URL umgeleitet, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann in Anführungszeichen oder ohne angegeben werden. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

Dieser Header wird den Browser veranlassen, die Seite 5 Sekunden nach vollständigem Laden (also nach dem {{domxref("Window/load_event", "load")}}-Ereignis) zu aktualisieren:

```http
Refresh: 5
```

Dieser Header wird den Browser veranlassen, 5 Sekunden nach vollständigem Laden der Seite zur Homepage umzuleiten:

```http
Refresh: 5; url=https://example.com/
```

Siehe das Attribut [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) im HTML-Referenzdokument für wichtige Informationen über die Zugänglichkeitsauswirkungen automatischer Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
