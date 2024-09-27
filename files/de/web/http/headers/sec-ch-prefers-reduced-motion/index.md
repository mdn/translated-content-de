---
title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Motion`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Request-Header zeigt die Präferenz des User-Agents für Animationen mit reduzierter Bewegung an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Bewegung anzuzeigen. Der Server kann dem Client entsprechend angepassten Inhalt senden, zum Beispiel JavaScript oder CSS, um die Bewegung von aufeinanderfolgenden gerenderten Animationen zu reduzieren. Dies könnte beinhalten, die Geschwindigkeit oder Amplitude der Bewegung zu reduzieren, um Unbehagen bei Personen mit vestibulären Bewegungsstörungen zu mindern.

Dieser Header ist nach dem {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media Query modelliert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Request-Header](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : Die Präferenz des User-Agents für Animationen mit reduzierter Bewegung. Diese wird oft aus der Einstellung des zugrunde liegenden Betriebssystems entnommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` auch im {{httpheader("Vary")}}-Header spezifiziert, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt je nach Wert dieses Headers unterschiedlich sein wird, auch wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH` Header aufgeführte Header sollte auch in den Headers `Accept-CH` und `Vary` vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` oben spezifiziert wurde), indem er dem Server über `Sec-CH-Prefers-Reduced-Motion` mitteilt, dass eine Benutzerpräferenz für Animationen mit reduzierter Bewegung vorliegt:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen in der aktuellen Sitzung einschließen, es sei denn, die `Accept-CH` verändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
