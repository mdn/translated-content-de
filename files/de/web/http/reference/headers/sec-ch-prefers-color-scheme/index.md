---
title: Sec-CH-Prefers-Color-Scheme header
short-title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-Prefers-Color-Scheme`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [Media Feature Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Benutzerpräferenz für helle oder dunkle Farbthemen angibt. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (zum Beispiel, Licht- oder Dunkelmodus) oder eine Benutzereinstellung an.

Wenn ein Server dem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für ein bestimmtes Farbschema anzugeben. Der Server kann dann entsprechend angepasste Inhalte senden, einschließlich Bildern oder CSS, um einen Licht- oder Dunkelmodus für die anschließend gerenderten Inhalte anzuzeigen.

Dieser Header ist an die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Media-Query angelehnt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Hinweise zur Verwendung

Der **`Sec-CH-Prefers-Color-Scheme`**-Header ermöglicht es Websites, die Benutzerpräferenz für Farbschemata zur Anforderungszeit zu erhalten; sie könnten dann wählen, das relevante CSS für die Benutzerpräferenz aus Leistungsgründen inline bereitzustellen. Wenn der Server das CSS inline bereitstellt, sollte er einen {{HTTPHeader("Vary")}}-Antwortheader einbeziehen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema maßgeschneidert ist.

Wenn Leistung in diesem Kontext keine kritische Überlegung ist, könnten Sie stattdessen die Benutzerpräferenz für Farbschemata mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Media-Query und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-API behandeln.

`Sec-CH-Prefers-Color-Scheme` ist ein hochentropischer Hinweis, daher muss die Site den Empfang durch Senden eines entsprechenden {{HTTPHeader("Accept-CH")}}-Antwortheaders einleiten. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme`-Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz theoretisch zum Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Präferenz des Benutzeragents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was anzeigt, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) angesehen wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat gecached werden sollten (auch wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgelistete Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben spezifizierten `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH`-Antwort ändert sich und zeigt an, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching mit variierenden Antworten](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [`prefers-color-scheme` CSS-Media-Query](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
