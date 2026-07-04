---
title: Critical-CH header
short-title: Critical-CH
slug: Web/HTTP/Reference/Headers/Critical-CH
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{SeeCompatTable}}{{SecureContext_Header}}{{non-standard_header}}

Der HTTP-**`Critical-CH`**-{{Glossary("response_header", "Antwortheader")}} wird zusammen mit {{HTTPHeader("Accept-CH")}} verwendet, um die akzeptierten [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints) zu identifizieren, die als [kritisch](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) angesehen werden.

Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header im ursprünglichen Request gesendet wurden. Wenn nicht, wird der Benutzeragent den Request zusammen mit den kritischen Headern erneut senden, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass die mittels kritischer Client-Hints festgelegten Client-Präferenzen immer berücksichtigt werden, auch wenn sie nicht im ersten Request enthalten sind oder nach Serverkonfigurationsänderungen.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Critical-CH: <ch-list>
```

### Direktiven

- `<ch-list>`
  - : Eine Liste von einem oder mehreren durch Kommas getrennten Client-Hint-Headern, die der Server als kritische Client-Hints betrachtet.

## Beispiele

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und gibt über {{HTTPHeader("Accept-CH")}} an, dass er {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird `Critical-CH` auch verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hint betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` im {{HTTPHeader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollen (auch wenn die URL gleich bleibt).
> Jeder Header, der im `Critical-CH`-Header aufgeführt ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch den Request (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für reduzierte Bewegungsanimationen besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, die `Accept-CH`-Antworten ändern sich, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Privatsphäre von Benutzern und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
