---
title: Critical-CH
slug: Web/HTTP/Headers/Critical-CH
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Critical-CH`**-{{Glossary("response_header", "Antwortheader")}} wird zusammen mit {{HTTPHeader("Accept-CH")}} verwendet, um die akzeptierten [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) zu identifizieren, die als [kritisch](/de/docs/Web/HTTP/Client_hints#critical_client_hints) angesehen werden.

Empfängt ein Benutzeragent eine Antwort mit `Critical-CH`, muss er überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der Benutzeragent die Anfrage mit den kritischen Headern erneut senden, anstatt die Seite zu rendern. Diese Vorgehensweise stellt sicher, dass Einstellungen der Client-Präferenzen, die mit kritischen Client-Hinweisen gesetzt wurden, immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten waren oder nach Änderungen an der Serverkonfiguration.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Critical-CH: <ch-list>
```

### Direktiven

- `<ch-list>`
  - : Eine Liste von einem oder mehreren durch Kommas getrennten Client-Hinweis-Headern, die der Server als kritische Client-Hinweise ansieht.

## Beispiele

Der Client stellt eine anfängliche Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und gibt über {{HTTPHeader("Accept-CH")}} an, dass er {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird `Critical-CH` ebenfalls verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` im {{HTTPHeader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Nutzerpräferenz für reduzierte Bewegungsanimationen besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Nutzer-Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
