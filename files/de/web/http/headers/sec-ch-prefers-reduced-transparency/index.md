---
title: Sec-CH-Prefers-Reduced-Transparency
slug: Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Transparency
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}{{SecureContext_Header}}

Der **`Sec-CH-Prefers-Reduced-Transparency`** [User-Agent-Client-Hint](/de/docs/Web/HTTP/Client_hints#user_preference_media_features_client_hints) Anforderungsheader zeigt die Präferenz des User-Agents für reduzierte Transparenz an.

Wenn ein Server einem Client über den {{httpheader("Accept-CH")}}-Header signalisiert, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert, kann der Client mit diesem Header antworten, um die Präferenz des Nutzers für reduzierte Transparenz zu kennzeichnen. Der Server kann dem Client entsprechend angepasste Inhalte senden — zum Beispiel CSS oder Bilder — um die Transparenz der Inhalte zu reduzieren.

Dieser Header basiert auf der {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} Media Query.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        [Anforderungsheader](/de/docs/Glossary/Request_header),
        <a href="/de/docs/Web/HTTP/Client_hints">Client-Hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Prefers-Reduced-Transparency: <preference>
```

### Direktiven

- `<preference>`

  - : Die Präferenz des User-Agents für reduzierte Transparenz. Diese wird oft aus der Einstellung des zugrunde liegenden Betriebssystems übernommen. Der Wert dieser Direktive kann entweder `no-preference` oder `reduce` sein.

## Beispiele

Der Client sendet eine erste Anfrage an den Server:

```http
GET / HTTP/1.1
Host: example.com
```

Der Server antwortet und teilt dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Transparency` akzeptiert. In diesem Beispiel wird auch {{httpheader("Critical-CH")}} verwendet, was darauf hinweist, dass `Sec-CH-Prefers-Reduced-Transparency` als [kritischer Client-Hint](/de/docs/Web/HTTP/Client_hints#critical_client_hints) betrachtet wird.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Transparency
Vary: Sec-CH-Prefers-Reduced-Transparency
Critical-CH: Sec-CH-Prefers-Reduced-Transparency
```

> [!NOTE]
> Wir haben `Sec-CH-Prefers-Reduced-Transparency` auch im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass der bereitgestellte Inhalt basierend auf diesem Headerwert unterschiedlich sein wird — auch wenn die URL gleich bleibt — damit der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwendet, sondern diese Antwort separat zwischenspeichert. Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte auch im `Accept-CH`- und `Vary`-Header vorhanden sein.

Der Client versucht automatisch erneut die Anfrage (aufgrund von oben angegebenem `Critical-CH`), und teilt dem Server über `Sec-CH-Prefers-Reduced-Transparency` mit, dass er eine Nutzerpräferenz für reduzierte Transparenz hat:

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Transparency: "reduce"
```

Der Client wird den Header bei nachfolgenden Anfragen in der aktuellen Sitzung aufnehmen, es sei denn, das `Accept-CH` ändert sich in den Antworten, um anzuzeigen, dass er vom Server nicht mehr unterstützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Client-Hints](/de/docs/Web/HTTP/Client_hints)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Accept-CH")}}
- [HTTP-Caching > Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}
