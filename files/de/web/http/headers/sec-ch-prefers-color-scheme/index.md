---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Color-Scheme`** [Benutzervorliebe-Medienfeature-Client-Hinweis](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header bietet die Präferenz des Benutzers für helle oder dunkle Farbschemas an. Ein Benutzer gibt seine Präferenz durch eine Einstellung im Betriebssystem (zum Beispiel, heller oder dunkler Modus) oder eine Benutzereinstellungs-Agent an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client darauf mit diesem Header antworten, um die Präferenz des Benutzers für ein bestimmtes Farbschema anzuzeigen. Der Server kann dem Client entsprechend angepasste Inhalte senden, einschließlich Bildern oder CSS, um einen hellen oder dunklen Modus für nachfolgend darzustellende Inhalte zu präsentieren.

Dieser Header ist nach dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medien-Abfrage modelliert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Verwendungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`** Header erlaubt es Websites, die Farbschema-Präferenz des Benutzers zur Anfragezeit zu erhalten; sie könnten dann wählen, relevante CSS für die Präferenz des Benutzers inline bereitzustellen, aus Leistungsgründen. Wenn der Server das CSS miteinander verbindet, möchte er möglicherweise einen {{HTTPHeader("Vary")}} Antwort-Header einschließen, der `Sec-CH-Prefers-Color-Scheme` angibt, um zu signalisieren, dass die Antwort für ein bestimmtes Farbschema maßgeschneidert ist.

Wenn die Leistung in diesem Kontext nicht entscheidend ist, könnten Sie stattdessen die Farbschema-Präferenz des Benutzers mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medien-Abfrage und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API behandeln.

`Sec-CH-Prefers-Color-Scheme` ist ein High-Entropy-Hinweis, daher muss die Seite dazu optieren, ihn zu empfangen, indem ein entsprechender {{HTTPHeader("Accept-CH")}} Antwort-Header gesendet wird. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme` Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz des Benutzers theoretisch zur Fingerabdruckerstellung verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`

  - : Ein String, der die Präferenz des Benutzeragents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

Der Client sendet eine initiale Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}}-Header spezifiziert, um anzuzeigen, dass Antworten getrennt basierend auf dem Wert dieses Headers zwischengespeichert werden sollten (auch wenn die URL gleich bleibt).
> Jeder in dem `Critical-CH` Header angegebene Header sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` wie oben angegeben spezifiziert wurde), und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, das `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es nicht mehr vom Server unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [`prefers-color-scheme` CSS-Medien-Abfrage](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Zwischenspeicherung von variierenden Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
