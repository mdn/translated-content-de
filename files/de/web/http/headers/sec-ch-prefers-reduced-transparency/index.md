---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request_header", "Request-Header")}} ist ein [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints), der die Präferenz des User-Agents für reduzierte Transparenz anzeigt.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Transparenz anzugeben. Der Server kann dann entsprechend angepasste Inhalte senden – beispielsweise CSS oder Bilder – um die Transparenz der Inhalte zu reduzieren.

Dieser Header basiert auf der {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}-Media-Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
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

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über den {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} benutzt, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt sich basierend auf diesem Headerwert unterscheiden wird – auch wenn die URL gleich bleibt – sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte auch im `Accept-CH`- und `Vary`-Header enthalten sein.

Der Client versucht automatisch, die Anfrage erneut zu senden (aufgrund der oben angegebenen Spezifikation von `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass er eine Benutzerpräferenz für reduzierte Transparenz hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzugeben, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und der {{HTTPHeader("Vary")}}-Header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
