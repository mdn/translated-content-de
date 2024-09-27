---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Color-Scheme`** [Client-Hinweis zur Benutzerpräferenz für Medienmerkmale](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header gibt die Präferenz des Benutzers für helle oder dunkle Farbthemen an. Ein Benutzer zeigt seine Präferenz durch eine Einstellung im Betriebssystem (zum Beispiel, helles oder dunkles Modus) oder eine Einstellung im Benutzeragenten an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für ein bestimmtes Farbschema anzugeben. Der Server kann dann dem Client entsprechend angepasste Inhalte einschließlich Bilder oder CSS senden, um einen hellen oder dunklen Modus für anschließend gerenderte Inhalte anzuzeigen.

Dieser Header basiert auf der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hinweis</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Unzulässiger Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`** Header erlaubt es Websites, die Benutzerfarbschema-Präferenz zum Zeitpunkt der Anfrage zu erhalten; sie könnten dann aus Leistungsgründen wählen, das relevante CSS für die Benutzerpräferenz direkt einzubinden. Wenn der Server das CSS einbindet, könnte es sinnvoll sein, einen {{HTTPHeader("Vary")}} Antwort-Header anzugeben, der `Sec-CH-Prefers-Color-Scheme` spezifiziert, um anzuzeigen, dass die Antwort für ein bestimmtes Farbschema maßgeschneidert ist.

Wenn Leistung in diesem Kontext keine entscheidende Rolle spielt, könnte stattdessen die Farbschema-Präferenz des Benutzers mit der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query und/oder der [`Window.matchMedia()`](/de/docs/Web/API/Window/matchMedia) API behandelt werden.

`Sec-CH-Prefers-Color-Scheme` ist ein Hinweis mit hoher Entropie, daher muss die Website sich entscheiden, ihn zu empfangen, indem sie einen entsprechenden {{HTTPHeader("Accept-CH")}} Antwort-Header sendet. Ein Benutzeragent kann den `Sec-CH-Prefers-Color-Scheme` Header bewusst auslassen, um die Privatsphäre der Benutzer zu schützen, da die Präferenz theoretisch zum Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`

  - : Ein String, der die Präferenz des Benutzeragenten für dunkle oder helle Inhalte angibt: `"light"` oder `"dark"`.
    Der Wert kann von einer entsprechenden Einstellung im zugrundeliegenden Betriebssystem stammen.

## Beispiele

Der Client stellt eine erste Anfrage an den Server:

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
> Wir haben auch `Sec-CH-Prefers-Color-Scheme` im {{httpheader("Vary")}} Header angegeben, um anzuzeigen, dass Antworten basierend auf dem Wert dieses Headers separat zwischengespeichert werden sollten (selbst wenn die URL gleich bleibt).
> Jeder im `Critical-CH` Header angegebene Header sollte auch in den `Accept-CH` und `Vary` Headern vorhanden sein.

Der Client wiederholt automatisch die Anfrage (aufgrund der oben angegebenen `Critical-CH`) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass eine Benutzerpräferenz für dunkle Inhalte besteht:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einbeziehen, es sei denn, die `Accept-CH` Angabe in Antworten ändert sich, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hinweise](/de/docs/Web/HTTP/Client_hints)
- [`prefers-color-scheme` CSS Media Query](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching unterschiedlicher Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
