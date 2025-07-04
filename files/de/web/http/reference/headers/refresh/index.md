---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

Der HTTP-**`Refresh`**-{{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, wenn eine bestimmte Zeit nach dem vollständigen Laden der Seite verstrichen ist. Es ist genau das gleiche wie die Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) in HTML.

> [!NOTE]
> Auch wenn es sich im HTTP-Antwort befindet, wird der `Refresh`-Header dennoch vom HTML-Lademaschinen verarbeitet und tritt nach HTTP- oder JavaScript-Weiterleitungen auf. Weitere Informationen finden Sie unter [Redirection order of precedence](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn eine Aktualisierung zu einer neuen Seite umleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite einbezogen (sofern es die {{httpheader("Referrer-Policy")}} zulässt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird nach der Navigation auf die Referrer-URL gesetzt.

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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, leitet der Browser zur angegebenen URL weiter, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen angegeben werden. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach dem vollständigen Laden (d.h. nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) aktualisiert:

```http
Refresh: 5
```

### Umleiten nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL weiterleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh)-Attribut in der HTML-Referenz für wichtige Informationen zu den Barrierefreiheit-Implikationen von automatischen Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) Nachricht der HTTP Working Group (2019)
