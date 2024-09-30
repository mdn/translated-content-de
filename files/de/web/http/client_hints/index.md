---
title: HTTP Client-Hinweise
slug: Web/HTTP/Client_hints
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von Feldern in [HTTP-Anforderungsheader](/de/docs/Web/HTTP/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, die Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten.
Der Server kann basierend auf den Informationen, die der Client bereitstellen möchte, bestimmen, welche Ressourcen gesendet werden sollen.

Die Liste der "Hinweis"-Header finden Sie im Thema [HTTP-Header](/de/docs/Web/HTTP/Headers#client_hints) und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise zu spezifizieren, die er gerne empfangen möchte.
Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header empfängt, kann er wählen, einige oder alle der aufgelisteten Client-Hinweis-Header in seinen nachfolgenden Anfragen hinzuzufügen.

Zum Beispiel könnte der Client nachfolgend auf `Accept-CH` in einer Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann.
Es ist auch relativ "datenschutzfreundlich", da es dem Client überlassen bleibt, zu entscheiden, welche Informationen er sicher teilen kann.

Es gibt eine kleine Menge von [niedrig-Entropie-Client-Hinweis-Headern](#hinweise_mit_niedriger_entropie), die von einem Client gesendet werden können, selbst wenn sie nicht angefordert werden.

> [!NOTE]
> Client-Hinweise können auch in HTML mit dem {{HTMLElement("meta")}}-Element und dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut spezifiziert werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Zwischenspeicherung und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im betroffenen {{HTTPHeader("Vary")}}-Header der Antwort enthalten sein.
Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es könnte vorzuziehen sein, {{HTTPHeader("Vary")}} nicht zu spezifizieren oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht zwischenspeicherbar macht. (Für jeden eindeutigen Wert wird ein neuer Cacheeintrag erstellt.)
Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.
Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary).

## Hinweislebensdauer

Ein Server spezifiziert die Client-Hinweis-Header, die er gerne erhalten möchte, im `Accept-CH` Antwort-Header.
Der User-Agent fügt die angeforderten Client-Hinweis-Header oder zumindest den Teilbereich, den er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anfrage für eine spezifische Menge von Hinweisen läuft erst ab, wenn der Browser heruntergefahren wird.

Ein Server kann die Menge der Client-Hinweise, an deren Empfang er interessiert ist, ersetzen, indem er den `Accept-CH` Antwort-Header mit einer neuen Liste erneut sendet.
Zum Beispiel könnte er, um keine Hinweise mehr anzufordern, `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die für einen bestimmten Ursprung festgelegten Client-Hinweise können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Hinweise mit niedriger Entropie

Client-Hinweise werden grob in Hinweise mit hoher und niedriger Entropie unterteilt.

Die Hinweise mit niedriger Entropie sind solche, die nicht viel Informationen preisgeben, die zur Erstellung eines [Fingerabdrucks](/de/docs/Glossary/Fingerprinting) eines Benutzers verwendet werden könnten.
Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH` Antwort-Header des Servers, abhängig von den Berechtigungsrichtlinien.
Zu diesen Hinweisen gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Sec-CH-UA")}}, {{HTTPHeader("Sec-CH-UA-Mobile")}}, {{HTTPHeader("Sec-CH-UA-Platform")}}.

Die Hinweise mit hoher Entropie sind solche, die das Potenzial haben, mehr Informationen preiszugeben, die für das Fingerprinting von Benutzern verwendet werden können, und sind daher so gestaltet, dass der User-Agent entscheiden kann, ob er sie bereitstellen möchte.
Die Entscheidung könnte auf den Benutzerpräferenzen, einer Berechtigungsanfrage oder der Berechtigungsrichtlinie basieren.
Alle Client-Hinweise, die keine Hinweise mit niedriger Entropie sind, gelten als Hinweise mit hoher Entropie.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern könnte, potenziell auf eine Art, die störend wirkt oder die Benutzerfreundlichkeit beeinträchtigt, und der daher angewendet werden muss, bevor der Inhalt gerendert wird.
Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen deutlich beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, benötigt, dass sie gesetzt wird.

Ein Server kann den {{HTTPHeader("Critical-CH")}} Antwort-Header zusammen mit `Accept-CH` verwenden, um zu spezifizieren, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen).
Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Benutzeragent die Anfrage erneut stellen, anstatt die Seite zu rendern.
Dieser Ansatz stellt sicher, dass die mit kritischen Client-Hinweisen festgelegten Benutzerpräferenzen immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind, oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel teilt in diesem Fall der Server einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um zu spezifizieren, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben ebenfalls `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header spezifiziert, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt basierend auf diesem Headerwert unterschiedlich sein wird, selbst wenn die URL gleich bleibt, sodass der Browser keine bestehende gecachte Antwort verwenden sollte und stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH` Header aufgeführte Header sollte auch in den `Accept-CH` und `Vary` Headers vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der in der ursprünglichen Anfrage nicht vorhanden war, stellt der Client die Anfrage automatisch erneut — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### User-Agent-Client-Hinweise

User-Agent (UA) Client-Hinweis-Header ermöglichen einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren.
Für eine Liste der `Sec-CH-UA-*` Header, siehe [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Headers#user_agent_client_hints).

Client-Hinweise sind über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) für JavaScript auf Web-Seiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen durch die Analyse des {{HTTPHeader("User-Agent")}} Headers.
> Aus historischen Gründen enthält dieser Header viele größtenteils irrelevante Informationen und Informationen, die verwendet werden könnten, um einen _bestimmten Benutzer_ zu identifizieren.
> UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten.
> Es wird erwartet, dass sie schließlich diesen älteren Ansatz ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Permissions_Policy) Delegation angewiesen sind, die verwendet werden könnte, um Daten zu leaken.

### Benutzerpräferenz-Mediendienste-Client-Hinweise

Benutzerpräferenz-Mediendienste-Client-Hinweise ermöglichen einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medienfeatures](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren.
Header umfassen: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise ermöglichen einem Server, Antworten basierend auf Geräteeigenschaften einschließlich verfügbarem Arbeitsspeicher und Anzeigeeigenschaften zu variieren.
Header umfassen: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen einem Server, Antworten basierend auf der Wahl des Benutzers, der Netzwerkbandbreite und der Latenz zu variieren.
Header umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hinweis-Header](/de/docs/Web/HTTP/Headers#client_hints)
- [HTTP `Vary` Header](/de/docs/Web/HTTP/Headers/Vary)
- [Client Hints Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Privatsphäre der Benutzer und der Entwicklererfahrung mit User-Agent Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
