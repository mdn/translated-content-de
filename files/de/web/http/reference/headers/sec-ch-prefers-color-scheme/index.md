---
title: Sec-CH-Prefers-Color-Scheme header
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hinweis für Medienmerkmale](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Vorliebe des Benutzers für helle oder dunkle Farbthemen bereitstellt. Ein Benutzer gibt seine Präferenz über eine Einstellung des Betriebssystems (zum Beispiel, Licht- oder Dunkelmodus) oder eine Benutzeragenten-Einstellung an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client darauf mit diesem Header antworten, um die Vorliebe des Benutzers für ein bestimmtes Farbschema anzugeben. Der Server kann daraufhin dem Client entsprechend angepassten Inhalt senden, einschließlich Bildern oder CSS, um einen hellen oder dunklen Modus für den nachfolgenden gerenderten Inhalt darzustellen.

Dieser Header ist an die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Query angelehnt.

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

## Nutzungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`** Header ermöglicht es Seiten, die Farbvorliebe des Benutzers zur Anforderungszeit zu ermitteln; sie könnten dann wählen, das relevante CSS für die Vorliebe des Benutzers aus Leistungsgründen inline bereitzustellen. Wenn der Server das CSS inline bereitstellt, könnte er auch einen {{HTTPHeader("Vary")}} Antwort-Header einschließen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema optimiert ist.

Wenn die Leistung in diesem Zusammenhang keine kritische Rolle spielt, könnten Sie stattdessen die Farbvorliebe des Benutzers mit der [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media-Query und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API verarbeiten.

`Sec-CH-Prefers-Color-Scheme` ist ein High-Entropy-Hinweis, daher muss die Seite den Empfang durch das Senden eines entsprechenden {{HTTPHeader("Accept-CH")}} Antwort-Headers aktivieren. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme` Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Vorliebe theoretisch zum Fingerprinting genutzt werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Vorliebe des Benutzeragenten für dunklen oder hellen Inhalt angibt: `"light"` oder `"dark"`.
    Der Wert kann von einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}} Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollten (selbst wenn die URL gleich bleibt).
> Jeder im `Critical-CH` Header aufgeführte Header sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` oben angegeben wurde) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass es eine Benutzervorliebe für dunklen Inhalt gibt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Session einbeziehen, es sei denn, die `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass sie nicht mehr vom Server unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [Caching variierende HTTP-Antworten](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [`prefers-color-scheme` CSS Media-Query](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
