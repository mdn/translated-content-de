---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hinweis des Benutzeragenten](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des Benutzeragenten für reduzierte Transparenz anzeigt.

Wenn ein Server über den {{httpheader("Accept-CH")}} Header einem Client signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Transparenz anzuzeigen. Der Server kann dem Client entsprechend angepasste Inhalte senden — zum Beispiel CSS oder Bilder — um die Transparenz der Inhalte zu verringern.

Dieser Header basiert auf der {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media-Query.

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
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### Direktiven

- `<preference>`
  - : Die Präferenz des Benutzeragenten für reduzierte Transparenz. Diese wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Transparency

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird außerdem {{httpheader("Critical-CH")}} verwendet, um anzuzeigen, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass sich die gelieferten Inhalte basierend auf diesem Header-Wert unterscheiden werden — selbst wenn die URL gleich bleibt —, sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH` Header angegebene Header sollte auch in den `Accept-CH` und `Vary` Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund des oben angegebenen `Critical-CH`), um dem Server über `Sec-CH-Prefers-Reduced-Transparency` mitzuteilen, dass eine Benutzerpräferenz für reduzierte Transparenz besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, das `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und der {{HTTPHeader("Vary")}} Header
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
