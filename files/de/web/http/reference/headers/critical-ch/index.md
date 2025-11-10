---
title: Critical-CH header
short-title: Critical-CH
slug: Web/HTTP/Reference/Headers/Critical-CH
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Critical-CH`** {{Glossary("response_header", "Response-Header")}} wird zusammen mit {{HTTPHeader("Accept-CH")}} verwendet, um die akzeptierten [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints) zu identifizieren, die als [kritisch](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) angesehen werden.

Browser, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Browser die Anfrage zusammen mit den kritischen Headern wiederholen, anstatt die Seite darzustellen. Dieser Ansatz stellt sicher, dass die durch kritische Client-Hinweise eingestellten Präferenzen stets berücksichtigt werden, auch wenn sie in der ersten Anfrage nicht enthalten waren oder nach Änderungen an der Serverkonfiguration.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch im `Accept-CH`- und `Vary`-Header vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine Liste von einem oder mehreren kommagetrennten Client-Hinweis-Headern, die der Server als kritische Client-Hinweise ansieht.

## Beispiele

Der Client sendet eine erste Anfrage an den Server:

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
> Wir haben `Sec-CH-Prefers-Reduced-Motion` im {{HTTPHeader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten separat basierend auf dem Wert dieses Headers zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch im `Accept-CH`- und `Vary`-Header vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben spezifizierten `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, das `Accept-CH` ändert sich in Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}
- [`PerformanceNavigationTiming.criticalCHRestart`](/de/docs/Web/API/PerformanceNavigationTiming/criticalCHRestart)
