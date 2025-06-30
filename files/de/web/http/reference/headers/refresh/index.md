---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine bestimmte Zeit nach dem vollständigen Laden der Seite vergangen ist. Er entspricht genau der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) in HTML.

> [!NOTE]
> Obwohl es im HTTP-Antwort enthalten ist, wird der `Refresh`-Header immer noch von der HTML-Lademechanik verarbeitet und geschieht nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie in der [Prioritätenreihenfolge von Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn ein Refresh zu einer neuen Seite umleitet, wird der {{httpheader("Referer")}}-Header in der Anfrage für die neue Seite einbezogen (sofern von der {{httpheader("Referrer-Policy")}} erlaubt), und [`document.referrer`](/de/docs/Web/API/Document/referrer) wird auf die Referrer-URL nach der Navigation gesetzt.

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
  - : Eine nichtnegative Anzahl von Sekunden, nach der die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser zu der angegebenen URL umleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann mit oder ohne Anführungszeichen angegeben werden. Das `url=`-Präfix ist nicht case-sensitive und optional.

## Beispiele

### Aktualisieren einer Seite nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach ihrem vollständigen Laden (d.h. nach dem [`load`](/de/docs/Web/API/Window/load_event) Event) aktualisiert:

```http
Refresh: 5
```

### Umleiten nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser 5 Sekunden nach dem vollständig Laden der Seite zu einer URL umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta#refresh) Attribut in der HTML-Referenz für wichtige Informationen über die Auswirkungen automatischer Weiterleitungen auf die Zugänglichkeit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [The Refresh header is still with us](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP Working Group Mitteilung (2019)
