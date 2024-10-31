---
title: Critical-CH
slug: Web/HTTP/Headers/Critical-CH
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Critical-CH`** {{Glossary("response_header", "Antwort-Header")}} wird zusammen mit {{HTTPHeader("Accept-CH")}} verwendet, um die akzeptierten [Client-Hinweise](/de/docs/Web/HTTP/Client_hints) zu identifizieren, die [kritisch](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header im ursprünglichen Request gesendet wurden. Falls nicht, wird der Benutzeragent den Request zusammen mit den kritischen Headern erneut senden, anstatt die Seite darzustellen. Auf diese Weise wird sichergestellt, dass die durch kritische Client-Hinweise festgelegten Präferenzen des Clients immer verwendet werden, selbst wenn sie nicht im ersten Request enthalten sind oder nach Änderungen in der Serverkonfiguration.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : Eine Liste von einem oder mehreren durch Komma getrennten Client-Hinweis-Headern, die der Server als kritische Client-Hinweise betrachtet.

## Beispiele

Der Client macht einen ersten Request an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und gibt über {{HTTPHeader("Accept-CH")}} an, dass er {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird `Critical-CH` auch verwendet, um zu spezifizieren, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` im {{HTTPHeader("Vary")}}-Header angegeben, um zu verdeutlichen, dass Antworten separat auf der Grundlage des Werts dieses Headers zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt den Request automatisch (da `Critical-CH` oben angegeben ist) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für Animationen mit reduziertem Bewegungsumfang vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Requests in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH`-Angabe ändert sich in den Antworten und gibt an, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerfreundlichkeit und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
