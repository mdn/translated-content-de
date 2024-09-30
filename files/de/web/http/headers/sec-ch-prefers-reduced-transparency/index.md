---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Transparency`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header gibt die Präferenz des User-Agents für reduzierte Transparenz an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für reduzierte Transparenz anzuzeigen. Der Server kann dann entsprechend angepasstes Material, wie zum Beispiel CSS oder Bilder, senden, um die Transparenz des Inhalts zu reduzieren.

Dieser Header ist an die {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media-Query angelehnt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### Direktiven

- `<preference>`

  - : Die Präferenz des User-Agents für reduzierte Transparenz. Diese wird häufig aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}}-Header spezifiziert, um dem Browser anzuzeigen, dass der gelieferte Inhalt sich basierend auf diesem Header-Wert unterscheidet, selbst wenn die URL gleich bleibt. Daher sollte der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH` und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben spezifizierten `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass er eine Benutzerpräferenz für reduzierte Transparenz hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH`-Antworten ändern sich, um anzuzeigen, dass der Server ihn nicht mehr unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
