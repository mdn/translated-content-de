---
title: Sec-CH-Prefers-Reduced-Motion header
short-title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hinweis des Benutzeragenten](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Vorliebe des Benutzeragenten für Animationen mit reduzierter Bewegung angibt.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Bewegungen anzugeben. Der Server kann dann dem Client entsprechend angepasstes Content, wie z.B. JavaScript oder CSS, senden, um die Bewegungen von Animationen in den daraufhin dargestellten Inhalten zu reduzieren. Dies könnte die Geschwindigkeit oder Amplitude der Bewegungen verringern, um Unbehagen bei Personen mit vestibulären Bewegungsstörungen zu vermeiden.

Dieser Header ist an die Media Query {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} angelehnt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Die Präferenz des Benutzeragenten für reduzierten Bewegungsanimationen. Dies wird oft anhand der Einstellung des zugrundeliegenden Betriebssystems bestimmt. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Motion

Der Client sendet eine Anfangsanfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und informiert den Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als ein [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` auch im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt abhängig von diesem Header-Wert unterschiedlich ist, selbst wenn die URL gleich bleibt. Der Browser sollte nicht einfach eine bereits zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH`-Header gelistete Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` oben angegeben ist) und teilt dem Server mittels `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für reduzierte Bewegungsanimationen vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung beibehalten, es sei denn, die `Accept-CH`-Änderungen in den Antworten deuten darauf hin, dass der Server ihn nicht mehr unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
