---
title: Sec-CH-Prefers-Reduced-Transparency header
short-title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents für reduzierte Transparenz angibt.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client diesen Header verwenden, um die Benutzerpräferenz für reduzierte Transparenz anzugeben. Der Server kann dann entsprechend angepassten Inhalt — zum Beispiel CSS oder Bilder — senden, um die Transparenz des Inhaltes zu verringern.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media-Query nachempfunden.

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
  - : Die Präferenz des User-Agents für reduzierte Transparenz. Diese wird oft aus den Einstellungen des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Transparency

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}}-Header angegeben, um dem Browser zu signalisieren, dass der bereitgestellte Inhalt sich basierend auf diesem Header-Wert unterscheiden wird — auch wenn die URL gleich bleibt — daher sollte der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH` Header aufgeführte Header sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server mit `Sec-CH-Prefers-Reduced-Transparency` mit, dass eine Benutzerpräferenz für reduzierte Transparenz besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung beibehalten, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und der {{HTTPHeader("Vary")}} Header
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
