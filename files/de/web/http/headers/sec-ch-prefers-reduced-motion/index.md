---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hinweis des User-Agents](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents angibt, dass Animationen mit reduzierter Bewegung angezeigt werden sollen.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client daraufhin mit diesem Header antworten, um die Benutzerpräferenz für reduzierte Bewegungen anzugeben. Der Server kann dann entsprechend angepassten Inhalt, zum Beispiel JavaScript oder CSS, an den Client senden, um die Bewegung von Animationen im dargestellten Inhalt zu reduzieren. Dies könnte das Verringern der Geschwindigkeit oder der Amplitude der Bewegung beinhalten, um Unbehagen für Personen mit vestibulären Bewegungsstörungen zu reduzieren.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media Query nachempfunden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Direktiven

- `<preference>`
  - : Die Präferenz des User-Agents für Animationen mit reduzierter Bewegung. Diese wird oft von den Einstellungen des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Motion

Der Client macht eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was anzeigt, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` auch im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass der ausgelieferte Inhalt basierend auf diesem Header-Wert unterschiedlich sein wird, auch wenn die URL gleich bleibt, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`), indem er dem Server über `Sec-CH-Prefers-Reduced-Motion` mitteilt, dass eine Benutzerpräferenz für Animationen mit reduzierter Bewegung besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, das `Accept-CH` ändert sich in Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
