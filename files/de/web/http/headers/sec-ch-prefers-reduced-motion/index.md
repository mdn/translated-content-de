---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Motion`** [user agent client hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header gibt an, dass der User Agent eine Präferenz für Animationen mit reduzierter Bewegung hat.

Wenn ein Server durch den {{httpheader("Accept-CH")}} Header einem Client signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client daraufhin mit diesem Header antworten, um die Präferenz des Nutzers für reduzierte Bewegung anzuzeigen. Der Server kann dann dem Client entsprechend angepassten Inhalt, wie JavaScript oder CSS, senden, um die Bewegung von jeglichen Animationen in nachfolgend gerendertem Inhalt zu reduzieren. Dies könnte das Verringern der Geschwindigkeit oder Amplitude von Bewegungen einschließen, um Unwohlsein für Personen mit vestibulären Bewegungsstörungen zu vermindern.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienabfrage nachempfunden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Direktiven

- `<preference>`

  - : Die Präferenz des User Agents für reduziertere Bewegungsanimationen. Dies wird oft von der Einstellung des zugrundeliegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass `Sec-CH-Prefers-Reduced-Motion` akzeptiert wird. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` auch im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt je nach Wert dieses Headers unterschiedlich sein wird, auch wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH` Header aufgeführte Header sollte auch in den `Accept-CH` und `Vary` Headers enthalten sein.

Der Client versucht automatisch erneut die Anfrage (aufgrund der oben angegebenen `Critical-CH`), indem er dem Server über `Sec-CH-Prefers-Reduced-Motion` mitteilt, dass es eine Nutzerpräferenz für reduzierte Bewegungsanimationen gibt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, das `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [`prefers-reduced-motion` CSS-Medienabfrage](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
