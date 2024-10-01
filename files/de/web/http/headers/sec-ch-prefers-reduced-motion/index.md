---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Motion`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Anforderungsheader gibt die Präferenz des User-Agents an, Animationen mit reduzierter Bewegung anzuzeigen.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client dann mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Bewegung anzuzeigen. Der Server kann dem Client entsprechend angepasste Inhalte senden, zum Beispiel JavaScript oder CSS, um die Bewegung von Animationen im nachfolgenden gerenderten Inhalt zu reduzieren. Dies könnte beinhalten, die Geschwindigkeit oder Amplitude der Bewegung zu verringern, um das Unbehagen für Personen mit vestibulären Bewegungsstörungen zu reduzieren.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media Query nachempfunden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Die Präferenz des User-Agents für Animationen mit reduzierter Bewegung. Dies wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client stellt eine anfängliche Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) angesehen wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt basierend auf diesem Header-Wert unterschiedlich sein wird, selbst wenn die URL gleich bleibt, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden sollte und diese Antwort stattdessen separat zwischenspeichern sollte. Jeder Header, der im `Critical-CH` Header aufgeführt ist, sollte auch in den `Accept-CH` und `Vary` Headern vorhanden sein.

Der Client versucht automatisch erneut die Anfrage zu senden (aufgrund der oben angegebenen `Critical-CH`), und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass eine Benutzerpräferenz für Animationen mit reduzierter Bewegung besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, die `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
