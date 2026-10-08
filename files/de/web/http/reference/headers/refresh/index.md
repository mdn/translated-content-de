---
title: Refresh header
short-title: Refresh
slug: Web/HTTP/Reference/Headers/Refresh
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Der HTTP-{{Glossary("response_header", "Response-Header")}} **`Refresh`** weist einen Webbrowser an, die Seite zu aktualisieren oder weiterzuleiten, sobald nach dem vollständigen Laden der Seite eine festgelegte Zeit verstrichen ist.
Er entspricht genau der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) in HTML.

> [!NOTE]
> Obwohl der `Refresh`-Header in der HTTP-Antwort enthalten ist, wird er von den HTML-Lademechanismen verarbeitet und erst nach HTTP- oder JavaScript-Weiterleitungen ausgeführt. Weitere Informationen finden Sie unter [Prioritätsreihenfolge von Weiterleitungen](/de/docs/Web/HTTP/Guides/Redirections#order_of_precedence).

> [!NOTE]
> Wenn eine Aktualisierung zu einer neuen Seite weiterleitet, wird der {{httpheader("Referer")}}-Header in die Anfrage für die neue Seite aufgenommen (sofern die {{httpheader("Referrer-Policy")}} dies zulässt). Nach der Navigation wird [`document.referrer`](/de/docs/Web/API/Document/referrer) auf die Referrer-URL gesetzt.

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
  - : Eine nicht negative Anzahl von Sekunden, nach der die Seite aktualisiert wird. Nachkommastellen werden erkannt, aber ignoriert; geben Sie daher nur ganze Zahlen an.
- `<url>` {{optional_inline}}
  - : Falls angegeben, leitet der Browser zur angegebenen URL weiter, statt die Seite unter der aktuellen URL zu aktualisieren. Die URL kann in Anführungszeichen stehen oder ohne Anführungszeichen angegeben werden. Das Präfix `url=` ist optional; die Groß- und Kleinschreibung spielt dabei keine Rolle.

## Beispiele

### Eine Seite nach einer bestimmten Zeit aktualisieren

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach dem vollständigen Laden aktualisiert (also nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis):

```http
Refresh: 5
```

### Nach einer bestimmten Zeit weiterleiten

Dieser Header bewirkt, dass der Browser 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL weiterleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Wichtige Informationen zu den Auswirkungen automatischer Weiterleitungen auf die Barrierefreiheit finden Sie beim Attribut [`http-equiv="refresh"`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv#refresh) in der HTML-Referenz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [Der Refresh-Header ist immer noch da](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html), Nachricht der HTTP Working Group (2019)
