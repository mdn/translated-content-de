---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Refresh`**-{{Glossary("response_header", "Antwortheader")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, wenn eine bestimmte Zeitspanne nach dem vollständigen Laden der Seite verstrichen ist. Er ist genau gleichwertig mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header weiterhin von der HTML-Lademechanik verarbeitet und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie in der [Reihenfolge der Vorrangfolge bei Weiterleitungen](/de/docs/Web/HTTP/Redirections#order_of_precedence).

> [!NOTE]
> Wenn ein Refresh zu einer neuen Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite einbezogen (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach der die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur Ganzzahlen angeben.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser an die angegebene URL weitergeleitet, anstatt die aktuelle URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen sein. Das Präfix `url=` ist nicht groß-/kleinschreibungssensitiv und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach dem vollständigen Laden (d. h. nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) aktualisiert:

```http
Refresh: 5
```

### Umleitung nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das Attribut [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) in der HTML-Referenz für wichtige Informationen zu den Zugänglichkeitsauswirkungen automatischer Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP-Arbeitsgruppen-Nachricht (2019)
