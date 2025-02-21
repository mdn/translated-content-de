---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cde3e6bbe77c1fe22375cb83b755ed0dc44302f3
---

{{HTTPSidebar}}

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine bestimmte Zeitspanne seit dem vollständigen Laden der Seite vergangen ist. Er ist genau gleichwertig mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header dennoch von der HTML-Ladevorrichtung verarbeitet und erfolgt nach HTTP- oder JavaScript-Umleitungen. Siehe [Redirectionsreihenfolge der Vorrangigkeit](/de/docs/Web/HTTP/Redirections#order_of_precedence) für weitere Informationen.

> [!NOTE]
> Wenn eine Aktualisierung auf eine neue Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite einbezogen (falls durch die {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Eine nicht-negative Anzahl von Sekunden nach denen die Seite aktualisiert wird. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser zur angegebenen URL umleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann wörtlich oder unwörtlich sein. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

### Aktualisierung einer Seite nach einer bestimmten Zeit

Dieser Header wird bewirken, dass der Browser die Seite 5 Sekunden nach dem vollständigen Laden (d.h. nach dem [`load`](/de/docs/Web/API/Window/load_event) Ereignis) aktualisiert:

```http
Refresh: 5
```

### Umleitung nach einer bestimmten Zeit

Dieser Header wird bewirken, dass der Browser 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) Attribut im HTML-Referenz für wichtige Informationen über die Barrierefreiheit von automatischen Umleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP-Arbeitsgruppen-Nachricht (2019)
