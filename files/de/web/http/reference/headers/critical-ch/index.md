---
title: Critical-CH header
short-title: Critical-CH
slug: Web/HTTP/Reference/Headers/Critical-CH
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Critical-CH`** {{Glossary("response_header", "Response-Header")}} wird zusammen mit {{HTTPHeader("Accept-CH")}} verwendet, um die akzeptierten [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) zu identifizieren, die als [kritisch](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) angesehen werden.

Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header im ursprünglichen Request gesendet wurden. Falls nicht, wiederholt der Benutzeragent den Request zusammen mit den kritischen Headern, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass die durch kritische Client-Hinweise festgelegten Benutzereinstellungen immer verwendet werden, selbst wenn sie nicht im ersten Request enthalten sind oder nach serverseitigen Konfigurationsänderungen.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Critical-CH: <ch-list>
```

### Anweisungen

- `<ch-list>`
  - : Eine Liste von einem oder mehreren durch Kommas getrennten Client-Hinweis-Headern, die der Server als kritische Client-Hinweise betrachtet.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und gibt über {{HTTPHeader("Accept-CH")}} an, dass er {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird `Critical-CH` auch verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` im {{HTTPHeader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten separat basierend auf dem Wert dieses Headers zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch den Request (aufgrund der obigen Angabe von `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzervorliebe für Animationen mit reduzierter Bewegung vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, der `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
