---
title: HTTP Client Hints
short-title: Client Hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Client Hints** sind eine Reihe von [HTTP-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers)-Feldern, die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Nutzer und agentenspezifische Präferenzen zu erhalten. Der Server kann auf der Grundlage der Informationen, die der Client bereitstellt, entscheiden, welche Ressourcen gesendet werden sollen.

Die Reihe von "Hint"-Headern sind im Thema [HTTP Headers](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#hint-typen).

## Übersicht

1. Wenn der Browser zum ersten Mal eine Anfrage zum Laden einer Webseite stellt, sendet er den {{httpheader("User-Agent")}}-Header an den Server.
2. Zusätzlich sendet er dem Server eine Standardsatz von `Sec-CH-UA-*`-Headern; dieser Satz von Hinweisen wird als die [niedriges Entropie-Hinweise](#niedriges_entropie-hints) bezeichnet. Ein Android-Gerät würde zum Beispiel etwas wie das Folgende senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   Diese Header liefern folgende Informationen:
   - {{httpheader("Sec-CH-UA")}}: Die Hauptbrowser-Version und andere damit verbundene Marken.
   - {{httpheader("Sec-CH-UA-Platform")}}: Die Plattform.
   - {{httpheader("Sec-CH-UA-Mobile")}}: Ein Boolescher Wert, der anzeigt, ob der Browser auf einem mobilen Gerät (`?1`) oder nicht (`?0`) läuft.

3. Der Server kann ankündigen, dass er Client Hints unterstützt und zusätzliche Client Hints anfordern, indem er den {{httpheader("Accept-CH")}} Antwort-Header verwendet, der eine durch Kommata getrennte Liste der zusätzlichen Header enthält, die er in nachfolgenden Anfragen erhalten möchte. Zum Beispiel:

   ```http
   Accept-CH: Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   Der Standardsatz von Headern wird immer gesendet; in diesem Fall haben wir auch angefordert:
   - {{httpheader("Sec-CH-UA-Model")}}: Das Gerätemodell, auf dem die Plattform läuft.
   - {{httpheader("Sec-CH-UA-Form-Factors")}}: Die Formfaktoren des Geräts, die angeben, wie der Nutzer mit dem User-Agent interagiert — die Bildschirmgröße, Steuerungen etc.

4. Wenn der Browser dazu berechtigt ist, wird er die angeforderten Header bei allen nachfolgenden Anfragen senden, bis der Browser oder der Tab geschlossen wird. Unser Beispiel-Android-Telefon könnte mit nachfolgenden Anfragen die folgenden aktualisierten Header senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist außerdem relativ datenschutzfreundlich, da es dem Client überlassen ist, zu entscheiden, welche Informationen sicher geteilt werden können.

> [!NOTE]
> Client Hints können auch in HTML mit dem {{HTMLElement("meta")}}-Element und dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut spezifiziert werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client Hints

Client Hints, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Das stellt sicher, dass eine andere Ressource für jeden unterschiedlichen Wert des Hinweis-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann bevorzugt werden, {{HTTPHeader("Vary")}} nicht anzugeben oder eine andere Strategie für Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht zwischenspeicherbar macht. (Ein neuer Cache-Eintrag wird für jeden eindeutigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hints wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Weitere Informationen finden Sie unter [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hints

Ein Server gibt die Client-Hints-Header an, die er interessiert erhält, im `Accept-CH` Antwort-Header an. Der User-Agent fügt die angeforderten Client-Hints-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anforderung für eine spezifische Reihe von Hints läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann die Menge der Client Hints, die er zu erhalten wünscht, ändern, indem er den `Accept-CH` Antwort-Header mit einer neuen Liste erneut sendet. Zum Beispiel würde er, um keine Hints mehr anzufordern, `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client Hints, die für einen bestimmten Ursprung gesetzt sind, können ebenfalls gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Niedriges Entropie-Hints

Client Hints werden allgemein in hoch und niedriges Entropie-Hints unterteilt. Die niedrigen Entropie-Hints sind solche, die nicht viele Informationen preisgeben, die dazu verwendet werden könnten, einen Nutzer zu {{Glossary("Fingerprinting", "fingerprinten")}}. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH` Antwort-Header des Servers, abhängig von der [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features). Die niedrigen Entropie-Hints sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hoches Entropie-Hints

Die hoch Entropie-Hints sind solche, die potenziell mehr Informationen preisgeben können, die für ein Benutzer-Fingerprint verwendet werden könnten, und daher auf eine Weise gesteuert werden, dass der User-Agent entscheiden kann, ob sie bereitgestellt werden. Die Entscheidung kann auf Benutzerpräferenzen, einer Berechtigungsanfrage oder einer [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) basieren. Alle Client Hints, die keine niedrigen Entropie-Hints sind, werden als hoch Entropie-Hints betrachtet.

## Kritische Client Hints

Ein _kritischer Client Hint_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern könnte, möglicherweise auf eine Weise, die störend ist oder die Benutzerfreundlichkeit beeinträchtigen könnte, und daher vor dem Rendern des Inhalts angewendet werden muss. Beispielsweise wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen deutlich beeinflussen könnte und ein Benutzer, der diese Präferenz wählt, sie gesetzt haben muss.

Ein Server kann den {{HTTPHeader("Critical-CH")}} Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hint auch ein kritischer Client-Hint ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). User Agents, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der User Agent die Anfrage erneut versuchen, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass Client-Präferenzen, die mit kritischen Client-Hints gesetzt wurden, immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind oder sich die Serverkonfiguration ändert.

Zum Beispiel sagt der Server in diesem Fall einem Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hint betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header angegeben, um dem Browser anzuzeigen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheidet, selbst wenn die URL gleich bleibt, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden und stattdessen diese Antwort separat zwischenspeichern soll. Jeder Header, der im `Critical-CH` Header aufgelistet ist, sollte auch in den `Accept-CH` und `Vary` Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, wiederholt der Client automatisch die Anfrage — diesmal sagt er dem Server über `Sec-CH-Prefers-Reduced-Motion`, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Zusammenfassend fordert `Accept-CH` alle Werte an, die für die Seite gewünscht sind, während `Critical-CH` nur die Teilmenge von Werten anfordert, die unbedingt beim Laden der Seite erforderlich sind.

## Hint-Typen

### User-Agent-Client-Hints

User-Agent (UA) Client-Hint-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät zu variieren. Für eine Liste der `Sec-CH-UA-*`-Header siehe [User-Agent-Client-Hints-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hints sind über die [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API) für JavaScript-Webseiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren. Aus historischen Gründen enthält dieser Header viele größtenteils irrelevante Informationen und Informationen, die zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten. UA-Client-Hints bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie diese ältere Methode schließlich ersetzen.

> [!NOTE]
> User-Agent-Client-Hints sind nicht innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die verwendet werden könnte, um Daten zu leaken.

### Client-Hints für Benutzerpräferenzen-Medienmerkmale

Client-Hints für Benutzerpräferenzen-Medienmerkmale ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medienmerkmale](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hints

Geräte-Client-Hints ermöglichen es einem Server, Antworten basierend auf Gerätecharakteristika einschließlich verfügbarem Speicher und Bildschirmeigenschaften zu variieren. Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen es einem Server, Antworten basierend auf der Wahl des Nutzers, der Netzwerkbandbreite und der Latenz zu variieren. Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Verwendung von Client-Hints für Responsive Design

Es ist möglich, Client-Hints für Responsive Design zu verwenden, um beispielsweise zu erkennen, ob ein mobiles Gerät oder ein Tablet Ihre Website rendert.

Ein Android-Telefon würde die folgenden Standard-Client-Hints senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?1
```

Ein Android-Tablet hingegen würde die folgenden senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?0
```

Der {{httpheader("Sec-CH-UA-Mobile")}}-Header kann verwendet werden, um zu bestimmen, ob das Gerät ein mobiles Gerät ist oder nicht. Für hardware-spezifische Anwendungsfälle können der Gerätename und das Formfaktor über die hoch Entropie-Hints {{httpheader("Sec-CH-UA-Model")}} und {{httpheader("Sec-CH-UA-Form-Factors")}} angefordert werden.

Für viele Responsive-Design-Anforderungen können [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) bequemer und flexibler sein. Es kann jedoch Fälle geben, in denen Sie keine Kontrolle über die individuellen Stylesheets einer Website haben und das ausgelieferte Stylesheet basierend auf der Gerätesignatur oder einer Art von Benutzerpräferenz variieren müssen. Es gibt Client-Hints, die einige der „Benutzerpräferenz“-Media Queries spiegeln, wie {{httpheader("Sec-CH-Prefers-Color-Scheme")}}, {{httpheader("Sec-CH-Prefers-Reduced-Motion")}} und {{httpheader("Sec-CH-Prefers-Reduced-Transparency")}}.

## Siehe auch

- [Client-Hints-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Benutzer-Datenschutzes und der Entwicklererfahrung durch User-Agent-Client-Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
- [Migration zu User-Agent-Client-Hints](https://web.dev/articles/migrate-to-ua-ch) auf web.dev (2021)
