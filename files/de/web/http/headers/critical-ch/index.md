---
title: Critical-CH
slug: Web/HTTP/Headers/Critical-CH
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Critical-CH`** [Client-Hint](/de/docs/Web/HTTP/Client_hints) Antwort-Header wird zusammen mit {{HttpHeader("Accept-CH")}} verwendet, um anzugeben, dass akzeptierte Client-Hints auch [kritische Client-Hints](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header im ursprünglichen Anforderungsheader enthalten waren. Wenn nicht, wird der Benutzeragent die Anforderung mit den kritischen Headern erneut senden, anstatt die Seite zu rendern. Dieser Ansatz gewährleistet, dass die mit kritischen Client-Hints gesetzten Client-Präferenzen immer verwendet werden, auch wenn sie nicht in der ersten Anforderung enthalten sind oder nach Serverkonfigurationsänderungen.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Critical-CH: <ch-list>
```

### Direktiven

- `<ch-list>`

  - : Eine Liste mit einem oder mehreren durch Komma getrennten Client-Hint-Headern, die der Server als kritische Client-Hints betrachtet.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er {{httpheader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird auch `Critical-CH` verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hint gilt.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten unabhängig vom Wert dieses Headers separat zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client sendet die Anfrage automatisch erneut (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für reduzierte Bewegungsanimationen besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, die `Accept-CH` in den Antworten ändert sich, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
