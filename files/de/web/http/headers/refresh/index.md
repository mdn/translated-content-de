---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTTPSidebar}}

Der **`Refresh`** Antwort-Header weist einen Webbrowser an, die Seite entweder zu aktualisieren oder weiterzuleiten, nachdem eine angegebene Zeitspanne seit dem vollständigen Laden der Seite vergangen ist. Er ist genau gleichbedeutend mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header immer noch von der HTML-Lademechanik verarbeitet und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie unter [Rangordnung der Weiterleitungen](/de/docs/Web/HTTP/Redirections#order_of_precedence).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser zur angegebenen URL weitergeleitet, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen sein. Das `url=`-Präfix ist nicht fallabhängig und optional.

## Beispiele

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach ihrem vollständigen Laden (das heißt, nach dem [`load`](/de/docs/Web/API/Window/load_event) Ereignis) aktualisiert:

```http
Refresh: 5
```

Dieser Header bewirkt, dass der Browser zur Startseite weiterleitet 5 Sekunden nachdem die Seite vollständig geladen wurde:

```http
Refresh: 5; url=https://example.com/
```

Wichtige Informationen zu den Auswirkungen automatischer Weiterleitungen auf die Barrierefreiheit finden Sie im HTML-Verweis unter dem Attribut [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
