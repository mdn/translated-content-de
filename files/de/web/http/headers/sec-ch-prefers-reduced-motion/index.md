---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Motion`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header gibt die Vorliebe des Benutzeragenten für Animationen mit reduzierter Bewegung an.

Wenn ein Server über den {{httpheader("Accept-CH")}}-Header einem Client signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client mit diesem Header antworten, um die Benutzerpräferenz für reduzierte Bewegung anzuzeigen. Der Server kann daraufhin dem Client entsprechend angepasste Inhalte senden, zum Beispiel JavaScript oder CSS, um die Bewegung von Animationen im daraufhin gerenderten Inhalt zu reduzieren. Dies könnte das Reduzieren der Geschwindigkeit oder der Amplitude der Bewegung umfassen, um Unbehagen bei Personen mit vestibulären Bewegungsstörungen zu reduzieren.

Dieser Header basiert auf der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media-Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Direktiven

- `<preference>`

  - : Die Vorliebe des Benutzeragenten für Animationen mit reduzierter Bewegung. Diese wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client sendet eine initiale Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was bedeutet, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheiden wird, auch wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder Header, der im `Critical-CH`-Header aufgeführt ist, sollte auch in den `Accept-CH`- und `Vary`-Headers vorhanden sein.

Der Client wiederholt aufgrund des oben festgelegten `Critical-CH` automatisch die Anfrage und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in den nachfolgenden Anfragen in der aktuellen Sitzung beibehalten, es sei denn, die `Accept-CH`-Änderung in Antworten zeigt an, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Client_hints)
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerfreundlichkeit und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
