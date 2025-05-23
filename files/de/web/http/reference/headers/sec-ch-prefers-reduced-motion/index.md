---
title: Sec-CH-Prefers-Reduced-Motion header
short-title: Sec-CH-Prefers-Reduced-Motion
slug: Web/HTTP/Reference/Headers/Sec-CH-Prefers-Reduced-Motion
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der HTTP **`Sec-CH-Prefers-Reduced-Motion`** {{Glossary("request_header", "Anfrage-Header")}} ist ein [Client-Hint des Benutzeragenten](/de/docs/Web/HTTP/Guides/Client_hints#user_preference_media_features_client_hints), der die Präferenz des Benutzeragenten für Animationen mit reduzierter Bewegung anzeigt.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}} Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, kann der Client dann mit diesem Header antworten, um die Präferenz des Benutzers für reduzierte Bewegung anzuzeigen. Der Server kann dem Client entsprechend angepassten Inhalt senden, zum Beispiel JavaScript oder CSS, um die Bewegung von Animationen im anschließend gerenderten Inhalt zu reduzieren. Dies könnte das Reduzieren der Geschwindigkeit oder Amplitude der Bewegung beinhalten, um Unannehmlichkeiten für Personen mit Störungen des Gleichgewichtsinns zu reduzieren.

Dieser Header ist nach der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media Query modelliert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        <a href="/de/docs/Web/HTTP/Guides/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja (<code>Sec-</code> Präfix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Motion: <preference>
```

### Direktiven

- `<preference>`
  - : Die Präferenz des Benutzeragenten für Animationen mit reduzierter Bewegung. Dies wird oft aus den Einstellungen des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

### Verwendung von Sec-CH-Prefers-Reduced-Motion

Der Client stellt eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client mit, dass er via {{httpheader("Accept-CH")}} `Sec-CH-Prefers-Reduced-Motion` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als [kritischer Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Motion` auch im {{httpheader("Vary")}} Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt auf Grundlage dieses Header-Werts unterschiedlich sein wird, auch wenn die URL gleich bleibt. Daher sollte der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern stattdessen diese Antwort getrennt zwischenspeichern. Jeder Header, der im `Critical-CH` Header aufgelistet ist, sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Der Client wiederholt automatisch die Anfrage (da `Critical-CH` oben angegeben wurde) und teilt dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Der Client wird den Header in nachfolgenden Anfragen innerhalb der aktuellen Sitzung einschließen, es sei denn, die `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass es nicht mehr vom Server unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- {{HTTPHeader("Accept-CH")}}
- [`prefers-reduced-motion` CSS Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion)
- [HTTP Zwischenspeicherung: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
- [Verbesserung des Datenschutzes und des Entwicklererlebnisses mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
