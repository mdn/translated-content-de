---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents für reduzierte Transparenz anzeigt.

Wenn ein Server dem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Transparenz anzugeben. Der Server kann dann dem Client entsprechend angepassten Inhalt senden — zum Beispiel CSS oder Bilder — um die Transparenz des Inhalts zu reduzieren.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media Query nachempfunden.

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
  - : Die Präferenz des User-Agents für reduzierte Transparenz. Diese wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Transparency

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt je nach Wert dieses Headers unterschiedlich sein wird — auch wenn die URL gleich bleibt —, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder Header, der im `Critical-CH`-Header aufgeführt ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client versucht die Anfrage automatisch erneut (da `Critical-CH` oben angegeben wurde) und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass eine Benutzerpräferenz für reduzierte Transparenz besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung aufnehmen, es sei denn, das `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es nicht mehr vom Server unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und der {{HTTPHeader("Vary")}}-Header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
