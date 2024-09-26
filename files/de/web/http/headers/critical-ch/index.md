---
title: Critical-CH
slug: Web/HTTP/Headers/Critical-CH
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Critical-CH`** [Client-Hinweis](/de/docs/Web/HTTP/Client_hints)-Antwortheader wird zusammen mit {{HttpHeader("Accept-CH")}} verwendet, um anzugeben, dass akzeptierte Client-Hinweise auch [kritische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#critical_client_hints) sind.

Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Benutzeragent die Anfrage zusammen mit den kritischen Headern erneut senden, anstatt die Seite darzustellen. Dieser Ansatz stellt sicher, dass die durch kritische Client-Hinweise gesetzten Client-Präferenzen immer verwendet werden, selbst wenn sie nicht in der ersten Anfrage enthalten sind oder nach Änderungen an der Serverkonfiguration.

Jeder im `Critical-CH`-Header aufgeführte Header sollte auch im `Accept-CH`- und `Vary`-Header vorhanden sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
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

  - : Eine Liste von einem oder mehreren durch Kommas getrennten Client-Hinweis-Headern, die der Server als kritische Client-Hinweise betrachtet.

## Beispiele

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er {{httpheader("Sec-CH-Prefers-Reduced-Motion")}} akzeptiert. In diesem Beispiel wird auch `Critical-CH` verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header spezifiziert, um anzugeben, dass Antworten separat basierend auf dem Wert dieses Headers zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch im `Accept-CH`- und `Vary`-Header vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` wie oben angegeben ist) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Animationen hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzer-Privatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
- {{domxref("PerformanceNavigationTiming.criticalCHRestart")}}
