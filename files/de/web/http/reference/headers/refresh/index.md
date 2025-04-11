---
title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder weiterzuleiten, nachdem eine bestimmte Zeit vergangen ist, seit die Seite vollständig geladen wurde. Er ist genau gleichbedeutend mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) in HTML.

> [!NOTE]
> Obwohl es im HTTP-Antwort enthalten ist, wird der `Refresh`-Header immer noch von der HTML-Lademaschine verarbeitet und tritt nach HTTP- oder JavaScript-Weiterleitungen auf. Weitere Informationen finden Sie in der [Prioritätenordnung bei Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn ein Refresh auf eine neue Seite weiterleitet, wird der {{httpheader("Referer")}}-Header in die Anforderung für die neue Seite aufgenommen (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Verweis-URL gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert wird. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, leitet der Browser zur angegebenen URL weiter, anstatt die aktuelle URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen angegeben werden. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header wird den Browser veranlassen, die Seite 5 Sekunden nach dem vollständigen Laden (das heißt, nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) zu aktualisieren:

```http
Refresh: 5
```

### Weiterleitung nach einer bestimmten Zeit

Dieser Header wird den Browser veranlassen, 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL weiterzuleiten:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Wichtige Informationen über die Barrierefreiheit von automatischen Weiterleitungen finden Sie im HTML-Referat für das [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#refresh)-Attribut.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) Nachricht der HTTP-Arbeitsgruppe (2019)
