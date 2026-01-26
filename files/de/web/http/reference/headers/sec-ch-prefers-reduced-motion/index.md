---
title: Sec-CH-Prefers-Reduced-Motion header
short-title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request_header", "Anforderungsheader")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents für die Anzeige von Animationen mit reduzierter Bewegung angibt.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Bewegung anzugeben. Der Server kann dem Client entsprechend angepassten Inhalt senden, zum Beispiel JavaScript oder CSS, um die Bewegung von Animationen im nachfolgenden gerenderten Inhalt zu reduzieren. Dies könnte eine Reduzierung der Geschwindigkeit oder Amplitude von Bewegungen umfassen, um Unwohlsein bei Personen mit vestibulären Bewegungsstörungen zu reduzieren.

Dieser Header basiert auf der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}-Media-Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Die Präferenz des User-Agents für reduzierte Bewegungs-Animationen. Dies wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Motion

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was anzeigt, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheiden wird, selbst wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client führt automatisch die Anfrage erneut aus (da `Critical-CH` oben angegeben wurde) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für reduzierte Bewegungs-Animationen vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, die `Accept-CH`-Änderungen in den Antworten zeigen an, dass sie vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- {{cssxref("@media/prefers-reduced-motion")}} CSS-Media-Query
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [Verbesserung des Benutzerdatenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
