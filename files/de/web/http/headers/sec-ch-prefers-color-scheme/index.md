---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint zur Medienfunktion](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints), der die Benutzerpräferenz für helle oder dunkle Design-Themen angibt. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (zum Beispiel, helles oder dunkles Modus) oder eine Benutzereinstellung an.

Signalisiert ein Server einem Client über den {{httpheader("Accept-CH")}} Header, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client daraufhin mit diesem Header antworten, um die Benutzerpräferenz für ein spezifisches Farbschema mitzuteilen. Der Server kann dem Client entsprechend angepasste Inhalte einschließlich Bilder oder CSS senden, um einen hellen oder dunklen Modus für nachfolgende gerenderte Inhalte anzuzeigen.

Dieser Header basiert auf der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`** Header ermöglicht es Websites, die Farbdesign-Präferenz des Benutzers zur Anfragezeit zu erhalten; sie könnten dann aus Leistungsgründen das relevante CSS für die Präferenz des Benutzers inline bereitstellen. Wenn der Server das CSS inline integriert, könnte er einen {{HTTPHeader("Vary")}} Response-Header einschließen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema maßgeschneidert ist.

Wenn die Leistung in diesem Kontext keine entscheidende Rolle spielt, könnten Sie stattdessen die Farbdesign-Präferenz des Benutzers mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API behandeln.

`Sec-CH-Prefers-Color-Scheme` ist ein Hinweis von hoher Entropie, daher muss die Seite sich dafür entscheiden, ihn zu erhalten, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}} Response-Header sendet. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme` Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz theoretisch zum Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Präferenz des Benutzers für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}} Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollten (selbst wenn die URL gleich bleibt).
> Jeder Header, der im `Critical-CH` Header aufgelistet ist, sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der Spezifikation von `Critical-CH` oben), und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header bei nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, die `Accept-CH` ändert sich in Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching sich ändernder Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [`prefers-color-scheme` CSS Media Query](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [Verbesserung von Benutzer-Privatsphäre und Entwickler-Erfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
