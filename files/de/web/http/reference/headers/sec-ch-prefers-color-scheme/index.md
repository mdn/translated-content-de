---
title: Sec-CH-Prefers-Color-Scheme header
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request_header", "Request-Header")}} ist ein [Client-Hint für Medienmerkmale](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Benutzerpräferenz für helle oder dunkle Farbthemen angibt. Ein Benutzer zeigt seine Präferenz durch eine Betriebssystemeinstellung (zum Beispiel Licht- oder Dunkelmodus) oder eine Benutzereinstellung des User-Agents an.

Wenn ein Server dem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für ein bestimmtes Farbschema anzugeben. Der Server kann dem Client entsprechend angepasste Inhalte, einschließlich Bildern oder CSS, senden, um einen Licht- oder Dunkelmodus für anschließend gerenderte Inhalte anzuzeigen.

Dieser Header ist an das {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage angelehnt.

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

## Nutzungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`**-Header ermöglicht es Websites, die Farbpräferenz des Benutzers zur Anforderungszeit zu erhalten; sie könnten dann aus Leistungsgründen wählen, das relevante CSS für die Benutzerpräferenz inline bereitzustellen. Wenn der Server das CSS inline einfügt, könnte es sinnvoll sein, einen {{HTTPHeader("Vary")}}-Response-Header einzufügen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema zugeschnitten ist.

Wenn die Leistung in diesem Kontext keine kritische Überlegung ist, könnten Sie stattdessen die Farbpräferenz des Benutzers mithilfe der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-API handhaben.

`Sec-CH-Prefers-Color-Scheme` ist ein High Entropy Hint, sodass die Seite sich freiwillig dafür entscheiden muss, ihn zu erhalten, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}}-Response-Header sendet. Ein User-Agent kann den `Sec-CH-Prefers-Color-Scheme`-Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Benutzerpräferenz theoretisch für das Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Präferenz des User-Agents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann von einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, um anzuzeigen, dass `Sec-CH-Prefers-Color-Scheme` als ein [kritischer Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) behandelt wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}}-Header spezifiziert, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers getrennt zwischengespeichert werden sollten (selbst wenn die URL gleich bleibt).
> Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client versucht automatisch erneut die Anfrage (aufgrund des oben spezifizierten `Critical-CH`), teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching mit unterschiedlichen Antworten](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [`prefers-color-scheme`-CSS-Medienabfrage](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
