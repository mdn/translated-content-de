---
title: Sec-CH-Prefers-Color-Scheme
slug: Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Color-Scheme`** [Client Hint für benutzerdefinierte Medieneinstellung](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Anforderungsheader gibt die Präferenz des Benutzers für helle oder dunkle Farbdesigns an. Der Benutzer wählt seine Präferenz über eine Betriebssystemeinstellung (zum Beispiel heller oder dunkler Modus) oder über eine Benutzeragenteneinstellung aus.

Wenn ein Server dem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert, kann der Client daraufhin mit diesem Header antworten, um die Präferenz des Benutzers für ein bestimmtes Farbdesign anzugeben. Der Server kann dem Client entsprechend angepassten Inhalt, einschließlich Bildern oder CSS, senden, um einen hellen oder dunklen Modus für nachfolgende gerenderte Inhalte anzuzeigen.

Dieser Header orientiert sich an der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Nutzungshinweise

Der **`Sec-CH-Prefers-Color-Scheme`**-Header ermöglicht es Websites, zur Anfragezeit die Farbdesign-Präferenz des Benutzers zu ermitteln; sie könnten dann dafür entscheiden, das relevante CSS für die Benutzerpräferenz inline bereitzustellen, aus Leistungsgründen. Wenn der Server das CSS inline setzt, möchte er möglicherweise einen {{HTTPHeader("Vary")}}-Antwortheader einfügen, der `Sec-CH-Prefers-Color-Scheme` angibt, um zu signalisieren, dass die Antwort speziell für ein bestimmtes Farbdesign angepasst ist.

Wenn die Leistung in diesem Zusammenhang keine entscheidende Rolle spielt, könnte man stattdessen die Präferenz des Benutzers für das Farbdesign mithilfe der [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media-Query und/oder der {{domxref("Window.matchMedia()")}} API behandeln.

`Sec-CH-Prefers-Color-Scheme` ist ein Hinweis mit hoher Entropie, daher muss die Website ihre Annahme durch Senden eines entsprechenden {{HTTPHeader("Accept-CH")}}-Antwortheaders signalisieren. Ein Benutzeragent könnte den `Sec-CH-Prefers-Color-Scheme` Header absichtlich weglassen, um die Privatsphäre des Benutzers zu schützen, da die Präferenz theoretisch zum Fingerprinting verwendet werden könnte.

## Syntax

```http
Sec-CH-Prefers-Color-Scheme: <preference>
```

### Direktiven

- `<preference>`

  - : Ein String, der die Präferenz des Benutzeragents für dunklen oder hellen Inhalt angibt: `"light"` oder `"dark"`.
    Der Wert kann aus einer entsprechenden Einstellung im zugrunde liegenden Betriebssystem stammen.

## Beispiele

Der Client sendet eine initiale Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Color-Scheme` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Color-Scheme` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) gilt.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Color-Scheme
Vary: Sec-CH-Prefers-Color-Scheme
Critical-CH: Sec-CH-Prefers-Color-Scheme
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Color-Scheme` auch im {{httpheader("Vary")}}-Header spezifiziert, um anzuzeigen, dass Antworten separat zwischengespeichert werden sollten, basierend auf dem Wert dieses Headers (auch wenn sich die URL nicht ändert).
> Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client versucht die Anfrage automatisch erneut (da `Critical-CH` oben angegeben wurde) und teilt dem Server über `Sec-CH-Prefers-Color-Scheme` mit, dass er eine Benutzerpräferenz für dunklen Inhalt hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Color-Scheme: "dark"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einfügen, es sei denn, die `Accept-CH`-Einstellungen in den Antworten ändern sich und zeigen an, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Client hints](/de/docs/Web/HTTP/Client_hints)
- [`prefers-color-scheme` CSS Media Query](/de/docs/Web/CSS/@media/prefers-color-scheme)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching von variierenden Antworten](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
