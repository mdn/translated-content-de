---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Refresh`** {{Glossary("response_header", "Response-Header")}} weist einen Webbrowser an, entweder die Seite zu aktualisieren oder umzuleiten, wenn ein bestimmter Zeitraum nach dem vollständigen Laden der Seite verstrichen ist. Er entspricht genau der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) in HTML.

> [!NOTE]
> Obwohl er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header immer noch von der HTML-Lademechanik verarbeitet und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie unter [Rangfolge der Weiterleitung](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn eine Aktualisierung zu einer neuen Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite aufgenommen (wenn dies durch die {{httpheader("Referrer-Policy")}} erlaubt ist) und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach der die Seite aktualisiert wird. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser zur angegebenen URL umleiten, anstatt die aktuelle URL zu aktualisieren. Diese URL kann in Anführungszeichen gesetzt oder weggelassen werden. Das `url=`-Präfix ist nicht groß- und kleinschreibungssensitiv und optional.

## Beispiele

### Aktualisierung einer Seite nach einer bestimmten Zeit

Dieser Header wird dazu führen, dass der Browser die Seite 5 Sekunden, nachdem sie vollständig geladen ist (d.h. nach dem [`load`](/de/docs/Web/API/Window/load_event)-Event), aktualisiert:

```http
Refresh: 5
```

### Weiterleitung nach einer bestimmten Zeit

Dieser Header wird dazu führen, dass der Browser zur einer URL 5 Sekunden, nachdem die Seite vollständig geladen ist, umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Sehen Sie im HTML-Referenzdokument unter [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh) nach wichtigen Informationen zu den Zugänglichkeitsauswirkungen automatischer Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP Working Group Nachricht (2019)
