---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP-**`Sec-CH-Prefers-Color-Scheme`**-{{Glossary("request_header", "Anforderungsheader")}} ist ein [Client-Hint für Medieneigenschaften](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints), der die Präferenz des Benutzers für helle oder dunkle Farbthemen angibt.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. helles oder dunkles Modus) oder eine Benutzereinstellungen an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für ein bestimmtes Farbschema anzuzeigen. Der Server kann dem Client entsprechen angepasste Inhalte wie Bilder oder CSS senden, um einen hellen oder dunklen Modus für nachfolgend gerenderte Inhalte anzuzeigen.

Dieser Header basiert auf der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienabfrage.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja (<code>Sec-</code>-Präfix)</td>
    </tr>
  </tbody>
</table>

## Hinweise zur Verwendung

Der **`Sec-CH-Prefers-Color-Scheme`**-Header ermöglicht es Websites, die Farbpräferenz des Benutzers zur Anforderungszeit zu erhalten; sie könnten dann wählen, das relevante CSS für die Präferenz des Benutzers aus Leistungsgründen inline bereitzustellen. Wenn der Server das CSS inline einbindet, möchte er vielleicht einen {{HTTPHeader("Vary")}}-Antwortheader einfügen, der `Sec-CH-Prefers-Color-Scheme` angibt, um zu kennzeichnen, dass die Antwort für ein bestimmtes Farbschema angepasst ist.

Wenn in diesem Kontext die Leistung keine kritische Überlegung ist, könnten Sie stattdessen die Farbpräferenz des Benutzers mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)-Medienabfrage und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)-API handhaben.

`Sec-CH-Prefers-Color-Scheme` ist ein Hinweis mit hoher Entropie, daher muss die Website sich aktiv dafür entscheiden, ihn zu empfangen, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}}-Antwortheader sendet. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme`-Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz des Benutzers theoretisch für das Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`
  - : Ein String, der die Präferenz des User Agents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im darunterliegenden Betriebssystem stammen.

## Beispiele

### Verwendung von Sec-CH-Prefers-Color-Scheme

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet, indem er dem Client über {{httpheader("Accept-CH")}} mitteilt, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hindeutet, dass `Sec-CH-Prefers-Color-Scheme` als ein [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Color-Scheme` auch im {{httpheader("Vary")}}-Header angegeben, um anzuzeigen, dass Antworten separat basierend auf dem Wert dieses Headers zwischengespeichert werden sollen (selbst wenn die URL gleich bleibt).
> Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern enthalten sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching variierender Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
- [`prefers-color-scheme` CSS-Medienabfrage](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
