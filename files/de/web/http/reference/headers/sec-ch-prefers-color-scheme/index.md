---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für Medienmerkmale](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Benutzerpräferenz für helle oder dunkle Farbthemen bereitstellt.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (zum Beispiel Licht- oder Dunkelmodus) oder eine Benutzereinstellung des Browsers an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für ein bestimmtes Farbschema anzugeben. Der Server kann dem Client entsprechend angepasste Inhalte senden, einschließlich Bildern oder CSS, um einen Licht- oder Dunkelmodus für die nachfolgend ausgegebenen Inhalte darzustellen.

Dieser Header ist nach der Medienabfrage {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} modelliert.

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

## Verwendungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`**-Header ermöglicht Websites, die Benutzerpräferenz für ein Farbschema zur Anforderungszeit zu erhalten; sie können dann wählen, das relevante CSS inline anzubieten, zum Zwecke der Performance. Wenn der Server das CSS inline einfügt, sollte ein {{HTTPHeader("Vary")}}-Response-Header angegeben werden, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um zu zeigen, dass die Antwort auf ein bestimmtes Farbschema maßgeschneidert ist.

Wenn die Performance in diesem Kontext keine kritische Rolle spielt, könnte stattdessen die Benutzerpräferenz für das Farbschema mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API behandelt werden.

`Sec-CH-Prefers-Color-Scheme` ist ein High-Entropy-Hinweis, daher muss die Website sich dafür entscheiden, ihn zu empfangen, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}}-Response-Header sendet. Ein User-Agent könnte den `Sec-CH-Prefers-Color-Scheme`-Header absichtlich weglassen, um die Privatsphäre des Benutzers zu wahren, da die Benutzerpräferenz theoretisch zum Fingerprinting genutzt werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Anweisungen

- `<preference>`
  - : Eine Zeichenkette, die die Präferenz des User-Agents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann von einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als ein [wichtiger Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}}-Header spezifiziert, um anzuzeigen, dass Antworten separat basierend auf dem Wert dieses Headers zwischengespeichert werden sollten (selbst wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headers vorhanden sein.

Der Client versucht die Anfrage automatisch erneut (da `Critical-CH` oben spezifiziert wurde) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass eine Benutzerpräferenz für dunkle Inhalte vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH`-Änderungen in Antworten zeigen an, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching variierender Antworten](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [`prefers-color-scheme` CSS-Medienabfrage](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
