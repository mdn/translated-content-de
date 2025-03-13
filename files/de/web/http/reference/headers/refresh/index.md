---
title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine angegebene Zeitspanne vergangen ist, nachdem die Seite vollständig geladen wurde. Dies entspricht genau der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Obwohl er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header immer noch von der HTML-Lademechanik behandelt und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Siehe [Reihenfolge der Prioritäten bei Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence) für weitere Informationen.

> [!NOTE]
> Wenn eine Aktualisierung zu einer neuen Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite aufgenommen (sofern durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.

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
  - : Eine nicht-negative Anzahl von Sekunden, nach der die Seite aktualisiert wird. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser zur angegebenen URL umleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann zitiert oder unzitiert sein. Das `url=`-Präfix ist nicht case-sensitiv und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden, nachdem sie vollständig geladen wurde (also nach dem [`load`](/de/docs/Web/API/Window/load_event) Event), aktualisiert:

```http
Refresh: 5
```

### Umleiten nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser 5 Sekunden, nachdem die Seite vollständig geladen wurde, zu einer URL umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) Attribut in der HTML-Dokumentation für wichtige Informationen über die Zugänglichkeitsauswirkungen von automatischen Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP Arbeitsgruppe Nachricht (2019)
