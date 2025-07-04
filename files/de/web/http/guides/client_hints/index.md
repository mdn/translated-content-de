---
title: HTTP Client Hints
short-title: Client Hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**Client Hints** sind eine Gruppe von [HTTP-Anforderungsheadern](/de/docs/Web/HTTP/Reference/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Agentenpräferenzen zu erhalten. Der Server kann dann entscheiden, welche Ressourcen basierend auf den Informationen, die der Client bereitstellt, gesendet werden sollen.

Die Gruppe der "Hinweis"-Header ist im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#typen_von_hints).

## Übersicht

Ein Server muss ankündigen, dass er Client Hints unterstützt, indem er den {{HTTPHeader("Accept-CH")}} Header verwendet, um die Hints zu spezifizieren, an denen er interessiert ist. Wenn ein Client, der Client Hints unterstützt, den `Accept-CH` Header empfängt, kann er wählen, einige oder alle der aufgelisteten Client Hint Header zu seinen nachfolgenden Anfragen hinzuzufügen.

Zum Beispiel könnte der Client nachfolgend auf `Accept-CH` in einer Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieses Vorgehen ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Es ist auch relativ "datenschutzfreundlich", da es dem Client überlassen ist, zu entscheiden, welche Informationen er sicher teilen kann.

Es gibt eine kleine Gruppe von [Client Hint Headern mit niedriger Entropie](#hints_mit_niedriger_entropie), die von einem Client auch dann gesendet werden können, wenn sie nicht angefordert wurden.

> [!NOTE]
> Client Hints können auch in HTML mithilfe des {{HTMLElement("meta")}} Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut spezifiziert werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client Hints

Client Hints, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}} Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hint Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Sie können es vorziehen, {{HTTPHeader("Vary")}} nicht zu spezifizieren oder eine andere Strategie für Client Hint Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv uncacheable macht. (Ein neuer Cache-Eintrag wird für jeden eindeutigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hints wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hints

Ein Server spezifiziert die Client-Hint-Header, die er gerne erhalten möchte, im `Accept-CH` Antwort-Header. Der Benutzeragent fügt die angeforderten Client-Hint-Header, oder zumindest die Untermenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten: Die Anforderung für eine bestimmte Gruppe von Hints läuft nicht ab, bis der Browser geschlossen wird.

Ein Server kann die Gruppe der Client-Hints, an denen er interessiert ist, ersetzen, indem er den `Accept-CH` Antwort-Header mit einer neuen Liste erneut sendet. Um beispielsweise keine Hints mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client-Hints einer bestimmten Herkunft können auch durch das Senden eines {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} Antwort-Headers für eine URL innerhalb dieser Herkunft gelöscht werden.

## Hints mit niedriger Entropie

Client-Hints werden grob in Hints mit hoher und niedriger Entropie unterteilt. Die Hints mit niedriger Entropie sind diejenigen, die nicht viel Informationen preisgeben, die möglicherweise zur Erstellung eines {{Glossary("Fingerprinting", "Fingerabdrucks")}} für einen Benutzer verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH` Antwort-Header des Servers, je nach Berechtigungsrichtlinie. Hints mit niedriger Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}} und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hints mit hoher Entropie

Hints mit hoher Entropie sind diejenigen, die potenziell mehr Informationen preisgeben können, die für die Erstellung eines Benutzerfingerabdrucks verwendet werden könnten, und sind daher so gesichert, dass der Benutzeragent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder der Berechtigungsrichtlinie basieren. Alle Client-Hints, die keine Hints mit niedriger Entropie sind, gelten als Hints mit hoher Entropie.

## Kritische Client Hints

Ein _kritischer Client Hint_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite signifikant verändern kann, möglicherweise auf eine Art und Weise, die störend wirkt oder die Nutzbarkeit beeinflusst, und der daher angewendet werden muss, bevor der Inhalt gerendert wird. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hint behandelt, da er das Verhalten von Animationen merklich beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, deren Einstellung benötigt.

Ein Server kann den {{HTTPHeader("Critical-CH")}} Antwort-Header zusammen mit `Accept-CH` verwenden, um zu spezifizieren, dass ein akzeptierter Client Hint auch ein kritischer Client Hint ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der Benutzeragent die Anfrage erneut versuchen, anstatt die Seite zu rendern. Dieses Vorgehen stellt sicher, dass die mit kritischen Client Hints gesetzten Benutzerpräferenzen immer verwendet werden, auch wenn sie in der ersten Anfrage nicht enthalten sind oder sich die Serverkonfiguration ändert.

Zum Beispiel informiert der Server in diesem Fall einen Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um zu spezifizieren, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client Hint betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header spezifiziert, um dem Browser anzuzeigen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheidet, selbst wenn die URL gleich bleibt, sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden und stattdessen diese Antwort separat zwischenspeichern sollte. Jeder in `Critical-CH` aufgeführte Header sollte auch in den Headern `Accept-CH` und `Vary` vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hint ist, der nicht in der ursprünglichen Anfrage enthalten war, versucht der Client die Anfrage automatisch erneut – diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Typen von Hints

### User-Agent Client Hints

Header für User-Agent (UA) Client Hints ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren. Für eine Liste von `Sec-CH-UA-*` Headern, siehe [User-Agent Client Hints Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client Hints sind für JavaScript auf Webseiten über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten aktuell die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}} Header analysieren. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten. UA Client Hints bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie diesen älteren Ansatz letztendlich ersetzen.

> [!NOTE]
> User-Agent Client Hints sind innerhalb von [abgegrenzten Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, weil sie auf [Berechtigungsrichtlinien-](/de/docs/Web/HTTP/Guides/Permissions_Policy) Delegierung basieren, die zum Datenaustritt genutzt werden könnte.

### Client Hints für Benutzerpräferenz-Medienfeatures

Client Hints für Benutzerpräferenz-Medienfeatures erlauben es einem Server, Antworten basierend auf den Präferenzen eines Benutzeragenten für [CSS-Medienfeatures](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hints

Geräte-Client-Hints erlauben es einem Server, Antworten basierend auf den Geräteeigenschaften wie verfügbarem Speicher und Bildschirm-Eigenschaften zu variieren. Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hints

Netzwerk-Client-Hints erlauben es einem Server, Antworten basierend auf der Wahl des Benutzers, der Netzwerkbandbreite und der Latenzzeit zu variieren. Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client Hints Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
