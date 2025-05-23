---
title: Sec-CH-Prefers-Reduced-Transparency header
short-title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Transparency`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint des Benutzer-Agents](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des Benutzer-Agents für reduzierte Transparenz angibt.

Wenn ein Server über den {{httpheader("Accept-CH")}}-Header einem Client signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client daraufhin mit diesem Header antworten, um die Benutzerpräferenz für reduzierte Transparenz anzuzeigen. Der Server kann dem Client entsprechend angepasste Inhalte senden — zum Beispiel CSS oder Bilder — um die Transparenz der Inhalte zu reduzieren.

Dieser Header ist dem {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media Query nachempfunden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
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
  - : Die Präferenz des Benutzer-Agents für reduzierte Transparenz. Diese wird oft aus den Einstellungen des zugrunde liegenden Betriebssystems entnommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Transparency

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Transparency` als ein [kritischer Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Transparency` auch im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der gelieferte Inhalt auf der Grundlage dieses Header-Wertes unterschiedlich sein wird — selbst wenn die URL gleich bleibt —, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden und stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgelistete Header sollte auch in den `Accept-CH`- und `Vary`-Headers vorhanden sein.

Der Client wiederholt die Anfrage automatisch (aufgrund des oben spezifizierten `Critical-CH`), und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass er eine Benutzerpräferenz für reduzierte Transparenz hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung aufnehmen, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und der {{HTTPHeader("Vary")}}-Header
- [Verbesserung der Privatsphäre der Nutzer und der Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
