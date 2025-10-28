---
title: HTTP-Client-Hinweise
short-title: Client hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

**Client-Hinweise** sind eine Reihe von Feldern im [HTTP-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers), die ein Server von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereit zu stellen entscheidet, festlegen, welche Ressourcen gesendet werden sollen.

Die Liste der "Hinweis"-Header finden Sie im Thema [HTTP Headers](/de/docs/Web/HTTP/Reference/Headers#client_hints) und [unten zusammengefasst](#hinweistypen).

## Überblick

1. Wenn der Browser erstmals eine Anfrage zum Laden einer Webseite stellt, sendet er den {{httpheader("User-Agent")}}-Header an den Server.
2. Zusätzlich sendet er dem Server eine Standardsatz von `Sec-CH-UA-*` Headers; dieser Satz von Hinweisen wird als [low entropy hints](#low_entropy_hints) bezeichnet. Ein Android-Gerät würde zum Beispiel so etwas senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   Diese Header liefern die folgenden Informationen:
   - {{httpheader("Sec-CH-UA")}}: Die Hauptversion des Browsers und andere damit verbundene Marken.
   - {{httpheader("Sec-CH-UA-Platform")}}: Die Plattform.
   - {{httpheader("Sec-CH-UA-Mobile")}}: Ein Boolescher Wert, der angibt, ob der Browser auf einem mobilen Gerät ausgeführt wird (`?1`) oder nicht (`?0`).

3. Der Server kann ankündigen, dass er Client-Hinweise unterstützt und zusätzliche Client-Hinweise mit dem {{httpheader("Accept-CH")}}-Antwort-Header anfordern, der eine durch Kommas getrennte Liste der zusätzlichen Header enthält, die er in nachfolgenden Anfragen erhalten möchte. Zum Beispiel:

   ```http
   Accept-CH: Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   Der Standardsatz von Headern wird immer gesendet; in diesem Fall haben wir auch angefordert:
   - {{httpheader("Sec-CH-UA-Model")}}: Das Gerätemodell, auf dem die Plattform läuft.
   - {{httpheader("Sec-CH-UA-Form-Factors")}}: Die Formfaktoren des Gerätes, die angeben, wie der Benutzer mit dem User-Agent interagiert — Bildschirmgröße, Steuerungselemente usw.

4. Wenn es dem Browser erlaubt ist, sendet er die angeforderten Header in allen nachfolgenden Anfragen, bis der Browser oder Tab geschlossen wird. Zum Beispiel, unser Beispiel-Android-Telefon könnte die folgenden aktualisierten Header mit nachfolgenden Anfragen senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da es dem Client überlassen bleibt zu entscheiden, welche Informationen er sicher teilen kann.

> [!NOTE]
> Client-Hinweise können auch in HTML mit dem {{HTMLElement("meta")}}-Element und dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten im Allgemeinen auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein.
Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es könnte bevorzugt werden, das Festlegen von {{HTTPHeader("Vary")}} zu unterlassen oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht-zwischenspeicherbar macht. (Ein neuer Cache-Eintrag wird für jeden eindeutigen Wert erstellt.) Dies trifft insbesondere auf Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}} zu. Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hinweise

Ein Server gibt die Client-Hinweis-Header, die er erhalten möchte, im `Accept-CH`-Antwort-Header an.
Der Benutzeragent fügt die angeforderten Client-Hinweis-Header oder zumindest die Teilmenge, die er bereit ist, mit diesem Server zu teilen, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten: Die Anfrage nach einem bestimmten Satz von Hinweisen läuft nicht ab, bis der Browser beendet wird.

Ein Server kann das Set von Client-Hinweisen, die er erhalten möchte, ersetzen, indem er den `Accept-CH`-Antwort-Header mit einer neuen Liste erneut sendet. Zum Beispiel, um keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die für eine bestimmte Herkunft festgelegten Client-Hinweise können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Header für eine URL innerhalb dieser Herkunft gesendet wird.

## Low entropy hints

Client-Hinweise werden grob in high und low entropy hints unterteilt. Die low entropy hints sind diejenigen, die nicht viele Informationen offenbaren, die zur {{Glossary("Fingerprinting", "Profilerstellung")}} eines Benutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, abhängig von der [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features). Low entropy hints sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}} und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## High entropy hints

Die high entropy hints sind diejenigen, die mehr Informationen preisgeben können, die zur Benutzerprofilierung verwendet werden könnten, und sind daher so geschützt, dass der Benutzeragent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder einer [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) basieren. Alle Client-Hinweise, die keine low entropy hints sind, werden als high entropy hints betrachtet.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist ein solcher, bei dem das Anwenden der Antwort die gerenderte Seite signifikant verändern könnte, möglicherweise auf eine störende Weise oder die Benutzerfreundlichkeit beeinflussend, und daher vor dem Rendern des Inhalts angewendet werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen erheblich beeinflussen könnte und da ein Benutzer, der diese Präferenz wählt, möchte, dass sie eingestellt wird.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Benutzeragent die Anfrage erneut senden anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass die mit kritischen Client-Hinweisen festgelegten Benutzerpräferenzen immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten waren oder sich die Serverkonfiguration ändert.

Zum Beispiel, in diesem Fall teilt der Server einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt sich basierend auf diesem Header-Wert unterscheidet, auch wenn die URL gleich bleibt. Der Browser sollte daher nicht einfach eine bestehende zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, sendet der Client die Anfrage automatisch erneut — dieses Mal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Animationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Zusammengefasst fordert `Accept-CH` alle Werte an, die Sie für die Seite wünschen, während `Critical-CH` nur die Teilmenge der Werte anfordert, die Sie beim Laden der Seite unbedingt benötigen, um die Seite ordnungsgemäß zu laden.

## Hinweistypen

### User-Agent-Client-Hinweise

User-Agent- (UA-) Client-Hinweis-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User agent client hints headers](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) im JavaScript von Webseiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten Informationen durch das Parsen des {{HTTPHeader("User-Agent")}}-Headers.
> Aus historischen Gründen enthält dieser Header viele Informationen, die weitgehend irrelevant und für die Identifizierung eines _bestimmten Benutzers_ nützlich sind.
> UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten.
> Es wird erwartet, dass sie letztendlich diesen älteren Ansatz ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind in [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation basieren, die zum Lecken von Daten verwendet werden könnte.

### Benutzerpräferenzmedienfunktionen Client-Hinweise

Client-Hinweise zu Benutzerpräferenzmedienfunktionen erlauben einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medienfunktionen](/de/docs/Web/CSS/@media#media_features) wie Farbschemata oder reduzierte Bewegung zu variieren. Zu den Headers gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise erlauben einem Server, Antworten basierend auf Geräteeigenschaften einschließlich verfügbarem Speicher und Bildschirmeigenschaften zu variieren. Zu den Headers gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben einem Server, Antworten basierend auf der Entscheidung des Benutzers, der Netzwerkbandbreite und der Latenz zu variieren. Zu den Headers gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Verwenden von Client-Hinweisen für responsives Design

Es ist möglich, Client-Hinweise für responsives Design zu verwenden, zum Beispiel um zu erkennen, ob ein Mobilgerät oder Tablet Ihre Website rendert.

Ein Android-Telefon würde die folgenden Standard-Client-Hinweise senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?1
```

Ein Android-Tablet wiederum würde Folgendes senden:

```http
Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Mobile: ?0
```

Der {{httpheader("Sec-CH-UA-Mobile")}}-Header kann verwendet werden, um festzustellen, ob es sich bei dem Gerät um ein Mobilgerät handelt oder nicht. Für hardware-spezifische Anwendungsfälle können der Gerätename und der Formfaktor über die high-entropy-Hinweise {{httpheader("Sec-CH-UA-Model")}} und {{httpheader("Sec-CH-UA-Form-Factors")}} angefordert werden.

Für viele Anforderungen des responsiven Designs können [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) bequemer und flexibler sein. Es kann jedoch Fälle geben, in denen Sie keine Kontrolle über die einzelnen Stylesheets einer Seite haben und das bereitgestellte Stylesheet basierend auf der Gerätesignatur oder einer Art von Benutzerpräferenz variieren müssen. Es gibt Client-Hinweise, die einige der "Benutzerpräferenz"-Media-Queries spiegeln, wie {{httpheader("Sec-CH-Prefers-Color-Scheme")}}, {{httpheader("Sec-CH-Prefers-Reduced-Motion")}}, und {{httpheader("Sec-CH-Prefers-Reduced-Transparency")}}.

## Siehe auch

- [Client Hints headers](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
- [Umstieg auf User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch) auf web.dev (2021)
