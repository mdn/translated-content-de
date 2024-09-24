---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Color-Scheme`** [Client-Hinweis zur Nutzerpräferenz für Medienfunktionen](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) ermöglicht es, die Nutzerpräferenz für helle oder dunkle Farbthemen bereitzustellen. Ein Nutzer gibt seine Präferenz durch eine Einstellung im Betriebssystem (zum Beispiel, heller oder dunkler Modus) oder eine Browser-Einstellung an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client dann mit diesem Header antworten, um die Präferenz des Nutzers für ein bestimmtes Farbschema anzugeben. Der Server kann dem Client entsprechend angepasstes Material, einschließlich Bildern oder CSS, senden, um einen hellen oder dunklen Modus für den nachfolgenden Inhalt anzuzeigen.

Dieser Header ist an die {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienabfrage angelehnt.

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

## Verwendungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`** Header ermöglicht es Websites, die Präferenz des Nutzers für das Farbschema zur Anforderungszeit zu ermitteln; sie könnten dann wählen, das entsprechende CSS für die Präferenz des Nutzers aus Leistungsgründen inline bereitzustellen. Wenn der Server das CSS inline einbettet, könnte er einen {{HTTPHeader("Vary")}} Antwortheader einfügen, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema maßgeschneidert ist.

Wenn Leistung in diesem Kontext keine kritische Überlegung ist, können Sie stattdessen die Präferenz des Nutzers für das Farbschema mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage und/oder der {{domxref("Window.matchMedia()")}} API behandeln.

`Sec-CH-Prefers-Color-Scheme` ist ein Hinweis mit hoher Entropie, daher muss die Site sich dafür entscheiden, ihn zu empfangen, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}} Antwortheader sendet. Ein User-Agent kann den `Sec-CH-Prefers-Color-Scheme` Header absichtlich weglassen, um die Privatsphäre des Nutzers zu schützen, da die Präferenz theoretisch zum Fingerabdruck des Nutzers verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`

  - : Ein String, der die Präferenz des User-Agents für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#critical_client_hints) angesehen wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}} Header spezifiziert, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollen (auch wenn die URL gleich bleibt).
> Jeder Header, der im `Critical-CH` Header aufgelistet ist, sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client versucht die Anfrage automatisch erneut (wegen des oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Präferenz für dunkle Inhalte hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, die `Accept-CH` Informationen ändern sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [`prefers-color-scheme` CSS-Medienabfrage](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching variierender Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
