---
title: Sec-CH-Prefers-Color-Scheme header
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 6c43d5c2607cbc84c8ec488400ebb66448992958
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Color-Scheme`** {{Glossary("request_header", "Request-Header")}} ist ein [Medien-Feature-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Benutzerpräferenz für helle oder dunkle Farbthemen bereitstellt.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (zum Beispiel heller oder dunkler Modus) oder eine Benutzereinstellung des User-Agents an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für ein bestimmtes Farbthema zu kennzeichnen. Der Server kann dem Client entsprechend angepasste Inhalte senden, einschließlich Bilder oder CSS, um einen hellen oder dunklen Modus für nachfolgende gerenderte Inhalte darzustellen.

Dieser Header basiert auf der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Query.

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

Der **`Sec-CH-Prefers-Color-Scheme`** Header ermöglicht es Websites, die Farbpräferenz eines Benutzers zur Anforderungszeit zu erhalten; sie könnten dann das relevante CSS für die Präferenz des Benutzers inline bereitstellen, um aus Leistungsgründen zu agieren. Wenn der Server das CSS inline einfügt, möchte er möglicherweise einen {{HTTPHeader("Vary")}}-Response-Header einschließen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbthema maßgeschneidert ist.

Wenn die Leistung in diesem Kontext keine kritische Rolle spielt, könnten Sie stattdessen die Farbpräferenz des Benutzers mit der {{cssxref("@media/prefers-color-scheme")}} Media Query und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API handhaben.

`Sec-CH-Prefers-Color-Scheme` ist ein High-Entropy-Hint, sodass die Website durch das Senden eines entsprechenden {{HTTPHeader("Accept-CH")}} Response-Headers optieren muss, um diesen zu erhalten. Ein User-Agent kann absichtlich den `Sec-CH-Prefers-Color-Scheme`-Header weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz theoretisch für das Fingerprinting genutzt werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Präferenz des User-Agents für dunklen oder hellen Inhalt angibt: `"light"` oder `"dark"`.
    Der Wert kann von einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine anfängliche Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als ein [kritischer Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}}-Header spezifiziert, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollten (auch wenn die URL unverändert bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund des oben spezifizierten `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass eine Benutzerpräferenz für dunklen Inhalt vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung beibehalten, es sei denn, das `Accept-CH` in den Antworten ändert sich und zeigt an, dass er von dem Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching von variierenden Antworten](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- {{cssxref("@media/prefers-color-scheme")}} CSS-Media-Query
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
