---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder weiterzuleiten, wenn eine angegebene Zeitspanne nach dem vollständigen Laden der Seite verstrichen ist. Dies entspricht genau der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) in HTML.

> [!NOTE]
> Obwohl es in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header dennoch von der HTML-Lade-Mechanik verarbeitet und tritt nach HTTP- oder JavaScript-Weiterleitungen auf. Siehe [Rangordnung von Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence) für weitere Informationen.

> [!NOTE]
> Wenn ein Refresh zu einer neuen Seite weiterleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite aufgenommen (wenn erlaubt durch die {{httpheader("Referrer-Policy")}}), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.

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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser an die angegebene URL weiterleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen angegeben werden. Das `url=`-Präfix ist nicht auf Groß- und Kleinschreibung beschränkt und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header veranlasst den Browser, die Seite 5 Sekunden nach dem vollständigen Laden (das heißt, nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) zu aktualisieren:

```http
Refresh: 5
```

### Weiterleitung nach einer bestimmten Zeit

Dieser Header veranlasst den Browser, 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL weiterzuleiten:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#refresh)-Attribut in der HTML-Referenz für wichtige Informationen zu den Auswirkungen automatischer Weiterleitungen auf die Barrierefreiheit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [Der Refresh-Header ist immer noch mit uns](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP-Arbeitsgruppen-Nachricht (2019)
