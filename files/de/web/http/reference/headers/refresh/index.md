---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Refresh`**-{{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine bestimmte Zeit vergangen ist, nachdem die Seite vollständig geladen wurde. Er ist genau gleichbedeutend mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn es sich im HTTP-Antwortheader befindet, wird der `Refresh`-Header dennoch von der HTML-Lademaschine verarbeitet und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie in der [Rangfolge der Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn eine Aktualisierung auf eine neue Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite aufgenommen (falls durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser zur angegebenen URL umgeleitet, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann in Anführungszeichen stehen oder nicht. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

### Aktualisierung einer Seite nach einer bestimmten Zeit

Dieser Header führt dazu, dass der Browser die Seite 5 Sekunden nach vollständiger Ladung (d.h. nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) aktualisiert:

```http
Refresh: 5
```

### Weiterleitung nach einer bestimmten Zeit

Dieser Header führt dazu, dass der Browser 5 Sekunden nach der vollständigen Ladung der Seite zu einer URL weiterleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#refresh)-Attribut im HTML-Referenzdokument für wichtige Informationen zu den Barrierefreiheit-Auswirkungen von automatischen Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [Der Refresh-Header ist immer noch mit uns](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP-Arbeitsgruppennachricht (2019)
