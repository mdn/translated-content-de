---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents anzeigt, Animationen mit reduzierter Bewegung anzuzeigen.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für reduzierte Bewegungen anzuzeigen. Der Server kann dem Client entsprechend angepasste Inhalte senden, zum Beispiel JavaScript oder CSS, um die Bewegung von Animationen im nachfolgenden gerenderten Inhalt zu reduzieren. Dies könnte die Reduzierung der Geschwindigkeit oder Amplitude der Bewegung einschließen, um Unbehagen bei Personen mit vestibulären Bewegungsstörungen zu verringern.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media-Query nachempfunden.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Direktiven

- `<preference>`
  - : Die Präferenz des User-Agents für Animationen mit reduzierter Bewegung. Diese wird häufig aus den Einstellung des zugrundeliegenden Betriebssystems entnommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Motion

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) angesehen wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheidet, auch wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH` Header aufgeführte Header sollte auch im `Accept-CH` und `Vary` Header vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund des oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, die `Accept-CH` ändert sich in den Antworten und zeigt an, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
