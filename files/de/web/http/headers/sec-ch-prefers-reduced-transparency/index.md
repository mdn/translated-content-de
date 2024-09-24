---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Transparency`** [User-Agent-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Anforderungsheader zeigt die Präferenz des User-Agents für reduzierte Transparenz an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Nutzers für reduzierte Transparenz anzugeben. Der Server kann dann dem Client entsprechend angepasste Inhalte senden — zum Beispiel CSS oder Bilder — um die Transparenz der Inhalte zu reduzieren.

Dieser Header orientiert sich an der {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Medienabfrage.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
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
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### Direktiven

- `<preference>`

  - : Die Präferenz des User-Agents für reduzierte Transparenz. Diese wird oft aus der Einstellung des darunterliegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was anzeigt, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Transparency` im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass der ausgelieferte Inhalt basierend auf diesem Header-Wert variieren wird — auch wenn die URL gleich bleibt — sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH` Header aufgeführte Header sollte auch im `Accept-CH` und `Vary` Header vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`), und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass er eine Nutzerpräferenz für reduzierte Transparenz hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird diesen Header in nachfolgenden Anfragen in der aktuellen Sitzung beibehalten, es sei denn, dass die `Accept-CH` Antworten darauf hinweisen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
