---
title: HTTP-Client-Hinweise
short-title: Client hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

**Client-Hinweise** sind eine Reihe von Feldern [HTTP-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten.
Der Server kann basierend auf den Informationen, die der Client bereitwillig zur Verfügung stellt, bestimmen, welche Ressourcen gesendet werden sollen.

Die Reihe von "Hinweis"-Headern sind im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#hinweis-typen).

## Überblick

1. Wenn der Browser zuerst eine Anfrage zum Laden einer Webseite stellt, sendet er den {{httpheader("User-Agent")}}-Header an den Server.
2. Zusätzlich sendet er dem Server eine Standardsammlung von `Sec-CH-UA-*`-Headern; diese Sammlung von Hinweisen wird als [niedrig-entropische Hinweise](#niedrig-entropische_hinweise) bezeichnet. Ein Android-Gerät würde zum Beispiel Folgendes senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   Diese Header liefern die folgenden Informationen:
   - {{httpheader("Sec-CH-UA")}}: Die Hauptversion des Browsers und andere damit verbundene Marken.
   - {{httpheader("Sec-CH-UA-Platform")}}: Die Plattform.
   - {{httpheader("Sec-CH-UA-Mobile")}}: Ein boolescher Wert, der anzeigt, ob der Browser auf einem mobilen Gerät läuft (`?1`) oder nicht (`?0`).

3. Der Server kann ankündigen, dass er Client-Hinweise unterstützt, und zusätzliche Client-Hinweise mithilfe des {{httpheader("Accept-CH")}}-Antwort-Headers anfordern, der eine durch Kommas getrennte Liste der zusätzlichen Header enthält, die er bei nachfolgenden Anfragen erhalten möchte. Zum Beispiel:

   ```http
   Accept-CH: Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   Die Standardsammlung der Header wird immer gesendet; in diesem Fall haben wir auch angefordert:
   - {{httpheader("Sec-CH-UA-Model")}}: Das Gerätemodell, auf dem die Plattform läuft.
   - {{httpheader("Sec-CH-UA-Form-Factors")}}: Die Formfaktoren des Geräts, die angeben, wie der Benutzer mit dem User-Agent interagiert — die Bildschirmgröße, Steuerungen usw.

4. Wenn der Browser darf, wird er die angeforderten Header in allen nachfolgenden Anfragen senden, bis der Browser oder Tab geschlossen wird. Zum Beispiel könnte unser Beispiel-Android-Telefon die folgenden aktualisierten Header bei nachfolgenden Anfragen senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da es dem Client obliegt, zu entscheiden, welche Informationen er sicher teilen kann.

> [!NOTE]
> Client-Hinweise können auch in HTML mithilfe des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Zwischenspeicherung und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten in der Regel auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein.
Dies stellt sicher, dass eine andere Ressource für jeden unterschiedlichen Wert des Hinweis-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Sie können es vorziehen, das Festlegen von {{HTTPHeader("Vary")}} zu unterlassen oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht zwischenspeicherbar macht (für jeden eindeutigen Wert wird ein neuer Cache-Eintrag erstellt).
Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.
Für weitere Informationen siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hinweise

Ein Server gibt die Client-Hinweis-Header an, an denen er interessiert ist, im `Accept-CH`-Antwort-Header an.
Der User-Agent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Untermenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsing-Sitzung hinzu.

Mit anderen Worten: Die Anforderung für einen spezifischen Satz von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann den Satz von Client-Hinweisen, an denen er interessiert ist, ersetzen, indem er den `Accept-CH`-Antwort-Header mit einer neuen Liste erneut sendet.
Um beispielsweise keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Der Client-Hinweis-Satz für einen bestimmten Ursprung kann auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Niedrig-entropische Hinweise

Client-Hinweise werden im Allgemeinen in niedrig- und hoch-entropische Hinweise unterteilt.
Die niedrig-entropischen Hinweise sind jene, die keine umfangreichen Informationen preisgeben, die zur {{Glossary("Fingerprinting", "Fingerabdruckbildung")}} eines Benutzers verwendet werden könnten.
Unabhängig vom `Accept-CH`-Antwort-Header des Servers dürfen sie standardmäßig mit jeder Client-Anfrage gesendet werden, je nach [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features).
Niedrig-entropische Hinweise sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hoch-entropische Hinweise

Die hoch-entropischen Hinweise sind jene, die potenziell mehr Informationen preisgeben können, die zur Erstellung von Benutzer-Fingerabdrücken verwendet werden können. Daher sind sie so gesteuert, dass der User-Agent entscheiden kann, ob sie bereitgestellt werden.
Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder einer [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) basieren.
Alle Client-Hinweise, die keine niedrig-entropischen Hinweise sind, gelten als hoch-entropische Hinweise.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem das Anwenden der Antwort die gerenderte Seite erheblich verändern kann, möglicherweise auf eine Weise, die irritierend ist oder die Benutzerfreundlichkeit beeinträchtigen könnte. Daher muss er angewendet werden, bevor der Inhalt gerendert wird.
Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen erheblich beeinflussen könnte, und weil ein Benutzer, der diese Präferenz wählt, sie gesetzt haben muss.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen).
User-Agents, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der User-Agent die Anfrage erneut senden, statt die Seite zu rendern.
Dieser Ansatz stellt sicher, dass Client-Präferenzen, die mithilfe kritischer Client-Hinweise gesetzt werden, immer genutzt werden, selbst wenn sie nicht in der ersten Anfrage enthalten sind oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel in diesem Fall teilt der Server einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis gilt:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser zu signalisieren, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheiden wird, auch wenn die URL gleich bleibt. Der Browser sollte also nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder Header, der im `Critical-CH`-Header aufgeführt ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, wiederholt der Client automatisch die Anfrage — diesmal dem Server mitteilend, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Zusammengefasst fordert `Accept-CH` alle Werte an, die Sie für die Seite wünschen, während `Critical-CH` nur die Untermenge von Werten anfordert, die Sie beim Laden benötigen, um die Seite ordnungsgemäß zu laden.

## Hinweis-Typen

### User-Agent-Client-Hinweise

User-Agent (UA) Client-Hinweis-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät zu variieren.
Für eine Liste der `Sec-CH-UA-*`-Header siehe [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind für Webseiten-JavaScript über die [User-Agent Client-Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) zugänglich.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren.
> Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten.
> UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten.
> Es wird erwartet, dass sie diesen älteren Ansatz letztendlich ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind innerhalb von [eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) basieren, die verwendet werden könnte, um Daten zu leaken.

### Benutzerpräferenz-Media-Features-Client-Hinweise

Benutzerpräferenz-Media-Features-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Media-Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren.
Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf Geräteeigenschaften einschließlich verfügbarem Speicher und Bildschirmeigenschaften zu variieren.
Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf der Wahl des Benutzers, der Netzwerkbandbreite und der Latenz zu variieren.
Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Verwendung von Client-Hinweisen für Responsive Design

Es ist möglich, Client-Hinweise für Responsive Design zu verwenden, um beispielsweise zu erkennen, ob ein mobiles Gerät oder Tablet Ihre Seite rendert.

Ein Android-Handy würde die folgenden Standard-Client-Hinweise senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?1
```

Ein Android-Tablet hingegen würde Folgendes senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?0
```

Der {{httpheader("Sec-CH-UA-Mobile")}}-Header kann verwendet werden, um festzustellen, ob es sich um ein mobiles Gerät handelt oder nicht. Für hardware-spezifische Anwendungsfälle können das Gerätemodell und der Formfaktor über die hoch-entropischen {{httpheader("Sec-CH-UA-Model")}} und {{httpheader("Sec-CH-UA-Form-Factors")}}-Hinweise angefordert werden.

Für viele Bedürfnisse des Responsive Designs könnten [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) bequemer und flexibler sein. Es kann jedoch Fälle geben, in denen Sie keine Kontrolle über die individuellen Stylesheets einer Seite haben und das bereitgestellte Stylesheet basierend auf der Gerätekennzeichnung oder einer Art von Benutzerpräferenz variieren müssen. Es gibt Client-Hinweise, die einige der "Benutzerpräferenz"-Media Queries widerspiegeln, wie {{httpheader("Sec-CH-Prefers-Color-Scheme")}}, {{httpheader("Sec-CH-Prefers-Reduced-Motion")}}, und {{httpheader("Sec-CH-Prefers-Reduced-Transparency")}}.

## Siehe auch

- [Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User-Agent-Client-Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
- [Zu User-Agent-Client-Hinweisen migrieren](https://web.dev/articles/migrate-to-ua-ch) auf web.dev (2021)
