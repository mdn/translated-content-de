---
title: Save-Data
slug: Web/HTTP/Headers/Save-Data
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Save-Data`** [Netzwerk-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#network_client_hints) ist ein booleanischer Anfrage-Header, der die Präferenz des Clients für einen reduzierten Datenverbrauch angibt. Dies kann aus Gründen wie hohen Übertragungskosten, langsamen Verbindungs-geschwindigkeiten usw. der Fall sein.

**`Save-Data`** ist ein [Hinweis mit niedriger Entropie](/de/docs/Web/HTTP/Client_hints#low_entropy_hints). Daher kann es vom Client gesendet werden, auch wenn es nicht vom Server über einen {{HTTPHeader("Accept-CH")}} Antwort-Header angefordert wurde. Darüber hinaus sollte es verwendet werden, um die zum Client gesendeten Daten zu reduzieren, unabhängig von den Werten anderer Client-Hinweise, die die Netzwerkfähigkeit angeben, wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.

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
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

Ein Wert von `On` zeigt an, dass der Benutzer ausdrücklich der Reduzierung des Datenverbrauchs auf dem Client zustimmt, und ermöglicht es den Ursprüngen, alternative Inhalte zu liefern, um die heruntergeladene Datenmenge zu reduzieren, wie z.B. kleinere Bild- und Videoressourcen, unterschiedliche Markup- und Stilarten, deaktiviertes Polling und automatische Updates usw.

> [!NOTE]
> Das Deaktivieren von HTTP/2 Server Push ({{RFC("7540", "Server Push", "8.2")}}) könnte ebenfalls wünschenswert sein, um Daten-Downloads zu reduzieren.

## Syntax

```http
Save-Data: <sd-token>
```

## Direktiven

- `<sd-token>`
  - : Ein Wert, der angibt, ob der Client in den Modus für reduzierten Datenverbrauch wechseln möchte. `on` bedeutet ja, während `off` (der Standardwert) nein bedeutet.

## Beispiele

Der {{HTTPHeader("Vary")}} Header stellt sicher, dass der Inhalt korrekt zwischengespeichert wird (z.B. um sicherzustellen, dass dem Benutzer kein Bild mit niedrigerer Qualität aus dem Cache bereitgestellt wird, wenn der `Save-Data` Header nicht mehr vorhanden ist \[_z.B._ nach dem Wechsel von Mobilfunk zu Wi-Fi]).

### Mit `Save-Data: on`

Anfrage:

```http
GET /image.jpg HTTP/1.1
Host: example.com
Save-Data: on
```

Antwort:

```http
HTTP/1.1 200 OK
Content-Length: 102832
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

### Ohne `Save-Data`

Anfrage:

```http
GET /image.jpg HTTP/1.1
Host: example.com
```

Antwort:

```http
HTTP/1.1 200 OK
Content-Length: 481770
Vary: Accept-Encoding, Save-Data
Cache-Control: public, max-age=31536000
Content-Type: image/jpeg

[…]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Helfen Sie Ihren Benutzern `Save-Data` - CSS Tricks](https://css-tricks.com/help-users-save-data/)
- [Bereitstellung schneller und leichter Anwendungen mit Save-Data - web.dev](https://web.dev/articles/optimizing-content-efficiency-save-data)
- {{HTTPHeader("Vary")}} Header, der anzeigt, dass der bereitgestellte Inhalt je nach Wert von `Save-Data` variiert (siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary))
- CSS @media Feature [`prefers-reduced-data`](/de/docs/Web/CSS/@media/prefers-reduced-data) {{experimental_inline}}
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{domxref("NetworkInformation.saveData")}}
