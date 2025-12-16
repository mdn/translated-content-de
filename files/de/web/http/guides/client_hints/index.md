---
title: HTTP-Client-Hinweise
short-title: Client hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

**Client-Hinweise** sind eine Reihe von [HTTP-Anforderungs-Header](/de/docs/Web/HTTP/Reference/Headers)-Feldern, die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agent zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereitstellt, bestimmen, welche Ressourcen gesendet werden sollen.

Die Gruppe der "Hinweis"-Header ist im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#hinweis-typen).

## Übersicht

1. Wenn der Browser zum ersten Mal eine Anfrage zum Laden einer Webseite stellt, sendet er den {{httpheader("User-Agent")}}-Header an den Server.
2. Darüber hinaus sendet er dem Server eine Standardgruppe von `Sec-CH-UA-*`-Headern; diese Gruppe von Hinweisen wird als die [Hints mit geringer Entropie](#hints_mit_geringer_entropie) bezeichnet. Ein Android-Gerät würde zum Beispiel etwas wie dieses senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   ```

   Diese Header liefern die folgenden Informationen:
   - {{httpheader("Sec-CH-UA")}}: Die Hauptversion des Browsers und andere damit verbundene Marken.
   - {{httpheader("Sec-CH-UA-Platform")}}: Die Plattform.
   - {{httpheader("Sec-CH-UA-Mobile")}}: Ein Boolean, der angibt, ob der Browser auf einem mobilen Gerät läuft (`?1`) oder nicht (`?0`).

3. Der Server kann ankündigen, dass er Client-Hinweise unterstützt und zusätzliche Client-Hinweise anfordern, indem er den {{httpheader("Accept-CH")}}-Antwortheader verwendet, der eine kommagetrennte Liste der zusätzlichen Header enthält, die er in nachfolgenden Anfragen erhalten möchte. Zum Beispiel:

   ```http
   Accept-CH: Sec-CH-UA-Model, Sec-CH-UA-Form-Factors
   ```

   Die Standardgruppe von Headern wird immer gesendet; in diesem Fall haben wir auch angefordert:
   - {{httpheader("Sec-CH-UA-Model")}}: Das Gerätemodell, auf dem die Plattform läuft.
   - {{httpheader("Sec-CH-UA-Form-Factors")}}: Die Formfaktoren des Geräts, die angeben, wie der Benutzer mit dem User-Agent interagiert — die Bildschirmgröße, Steuerungen usw.

4. Wenn es dem Browser erlaubt ist, sendet er die angeforderten Header in allen nachfolgenden Anfragen, bis der Browser oder Tab geschlossen wird. Zum Beispiel könnte unser Beispiel-Android-Handy mit nachfolgenden Anfragen die folgenden aktualisierten Header senden:

   ```http
   Sec-CH-UA: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
   Sec-CH-UA-Platform: "Android"
   Sec-CH-UA-Mobile: ?1
   Sec-CH-UA-Model: "Pixel 9"
   Sec-CH-UA-Form-Factors: "Mobile"
   ```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzwahrend", da es dem Client überlassen bleibt, zu entscheiden, welche Informationen er sicher teilen kann.

> [!NOTE]
> Client-Hinweise können auch in HTML mithilfe des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut spezifiziert werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten im Allgemeinen auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann bevorzugt werden, {{HTTPHeader("Vary")}} nicht zu spezifizieren oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht zwischenzuspeichern macht. (Ein neuer Cache-Eintrag wird für jeden einzigartigen Wert erstellt.) Dies gilt insbesondere für Netzwerkclient-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Hinweis-Lebensdauer

Ein Server gibt die Client-Hinweis-Header an, an denen er interessiert ist, indem er den `Accept-CH`-Antwortheader verwendet. Der User-Agent fügt die angeforderten Client-Hinweis-Header oder zumindest den Teil, den er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anfrage nach einer bestimmten Gruppe von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann die Gruppe der Client-Hinweise, an der er interessiert ist, ersetzen, indem er den `Accept-CH`-Antwortheader mit einer neuen Liste erneut sendet. Zum Beispiel, um keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Gruppe der Client-Hinweise für einen bestimmten Ursprung kann auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwortheader für eine URL innerhalb dieses Ursprungs gesendet wird.

## Hints mit geringer Entropie

Client-Hinweise werden grob in Hints mit hoher und geringer Entropie unterteilt. Die Hints mit geringer Entropie sind diejenigen, die nicht viel Informationen preisgeben, die zum {{Glossary("Fingerprinting", "Fingerprinting")}} eines Benutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwortheader des Servers, abhängig von der [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features). Hinweise mit geringer Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hints mit hoher Entropie

Die Hints mit hoher Entropie sind jene, die potenziell mehr Informationen preisgeben können, die zum User-Fingerprinting genutzt werden können, und sind daher so gestaltet, dass der User-Agent die Entscheidung treffen kann, ob sie bereitgestellt werden. Die Entscheidung kann auf Nutzerpräferenzen, eine Berechtigungsanfrage oder eine [Berechtigungsrichtlinie](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) basieren. Alle Client-Hinweise, die keine Hints mit geringer Entropie sind, gelten als Hints mit hoher Entropie.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite signifikant verändern kann, möglicherweise in einer störenden Weise oder die Benutzerfreundlichkeit beeinträchtigt, und daher vor der Darstellung des Inhalts angewendet werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da es das Verhalten von Animationen deutlich beeinflussen könnte, und weil ein Benutzer, der diese Präferenz wählt, erwartet, dass sie eingestellt wird.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwortheader zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). User-Agents, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der User-Agent die Anfrage erneut stellen, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass Client-Präferenzen, die mithilfe kritischer Client-Hinweise festgelegt wurden, immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel sagt der Server in diesem Fall einem Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um zu spezifizieren, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis angesehen wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass der servierte Inhalt basierend auf diesem Header-Wert unterschiedlich ist, auch wenn die URL gleich bleibt, so dass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, wird der Client die Anfrage automatisch erneut stellen — diesmal dem Server mit `Sec-CH-Prefers-Reduced-Motion` mitteilend, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

Zusammenfassend fordert `Accept-CH` alle Werte an, die Sie für die Seite benötigen, während `Critical-CH` nur die Teilmenge der Werte anfordert, die Sie beim Laden unbedingt benötigen, um die Seite richtig zu laden.

## Hinweis-Typen

### User-Agent-Client-Hinweise

User-Agent- (UA-) Client-Hinweisheader ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind für JavaScript von Webseiten über die [User-Agent-Client-Hinweise-API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten dieser Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header parsen.
> Aus historischen Gründen enthält dieser Header eine Menge weitgehend irrelevanter Informationen und Informationen, die zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten.
> UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten.
> Es wird erwartet, dass sie diesen älteren Ansatz letztendlich ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind nicht innerhalb von [Fenced Frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) basiert, die genutzt werden könnte, um Daten auslaufen zu lassen.

### Benutzerpräferenz-Media-Feature-Client-Hinweise

Benutzerpräferenz-Media-Feature-Client-Hinweise erlauben es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medien-Features](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wie Farbthema oder reduzierte Bewegung zu variieren. Header schließen ein: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise erlauben es einem Server, Antworten basierend auf Gerätecharakteristiken einschließlich verfügbarem Speicher und Bildschirmeigenschaften zu variieren. Header schließen ein: {{HTTPHeader("Sec-CH-Device-Memory")}}, {{HTTPHeader("Sec-CH-DPR")}}, {{HTTPHeader("Sec-CH-Viewport-Height")}}, {{HTTPHeader("Sec-CH-Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben es einem Server, Antworten basierend auf der Auswahl des Benutzers, der Netzwerkbandbreite und Latenzzeit zu variieren. Header schließen ein: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Verwendung von Client-Hinweisen für responsives Design

Es ist möglich, Client-Hinweise für responsives Design zu verwenden, zum Beispiel um zu erkennen, ob ein mobiles Gerät oder ein Tablet Ihre Seite rendert.

Ein Android-Telefon würde die folgenden Standard-Client-Hinweise senden:

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

Der {{httpheader("Sec-CH-UA-Mobile")}}-Header kann verwendet werden, um festzustellen, ob es sich bei dem Gerät um ein mobiles Gerät handelt oder nicht. Für hardware-spezifische Anwendungsfälle können der Gerätename und die Formfaktoren über die hochentropischen Hinweise {{httpheader("Sec-CH-UA-Model")}} und {{httpheader("Sec-CH-UA-Form-Factors")}} angefordert werden.

Für viele Bedürfnisse des responsiven Designs können [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) bequemer und flexibler sein. Es kann jedoch Fälle geben, in denen Sie keinen Zugriff auf die einzelnen Stylesheets einer Seite haben und das servierte Stylesheet basierend auf der Gerätesignatur oder einer Art Benutzerpräferenz variieren müssen. Es gibt Client-Hinweise, die einige der "Benutzerpräferenz"-Media Queries widerspiegeln, wie {{httpheader("Sec-CH-Prefers-Color-Scheme")}}, {{httpheader("Sec-CH-Prefers-Reduced-Motion")}}, und {{httpheader("Sec-CH-Prefers-Reduced-Transparency")}}.

## Siehe auch

- [Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User-Agent-Client-Hinweise API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
- [Migration zu User-Agent-Client-Hinweisen](/web.dev/articles/migrate-to-ua-ch) auf web.dev (2021)
