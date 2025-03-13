---
title: HTTP Client Hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**Client Hints** sind eine Reihe von Feldern im [HTTP-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers), die ein Server proaktiv vom Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und spezifische Einstellungen des User-Agents zu erhalten. Der Server kann entscheiden, welche Ressourcen gesendet werden, basierend auf den Informationen, die der Client bereitstellt.

Die Reihe von "Hinweis"-Headers wird im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgeführt und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client Hints unterstützt, indem er den {{HTTPHeader("Accept-CH")}} Header verwendet, um die Hints festzulegen, an denen er interessiert ist. Wenn ein Client, der Client Hints unterstützt, den `Accept-CH` Header erhält, kann er wählen, einige oder alle aufgeführten Client Hint Header in seinen nachfolgenden Anfragen hinzuzufügen.

Zum Beispiel könnte der Client nachfolgend {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} Header zu allen nachfolgenden Anfragen hinzufügen, nachdem er den `Accept-CH` im folgenden Antwortbeispiel berücksichtigt hat.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Es ist auch relativ "datenschutzfreundlich", da es dem Client überlassen bleibt, welche Informationen er sicher teilen kann.

Es gibt eine kleine Anzahl von [Client Hint Headern mit niedriger Entropie](#hints_mit_niedriger_entropie), die von einem Client gesendet werden können, selbst wenn sie nicht angefordert wurden.

> [!NOTE]
> Client Hints können auch in HTML unter Verwendung des {{HTMLElement("meta")}} Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv) Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client Hints

Client Hints, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten im Allgemeinen auch im {{HTTPHeader("Vary")}} Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass eine andere Ressource für jeden anderen Wert des Hinweis-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann bevorzugt werden, {{HTTPHeader("Vary")}} nicht anzugeben oder eine andere Strategie für Client Hint Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht cachefähig macht. (Ein neuer Cache-Eintrag wird für jeden eindeutigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hints wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Hinweis-Lebensdauer

Ein Server spezifiziert die Client Hint Header, an denen er interessiert ist, im `Accept-CH` Antwort-Header. Der User-Agent fügt die angeforderten Client Hint Header, oder zumindest die Untermenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anfrage nach einem bestimmten Satz von Hints läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann den Satz von Client Hints, für die er sich interessiert, durch erneutes Senden des `Accept-CH` Antwort-Headers mit einer neuen Liste ersetzen. Um beispielsweise keine Hints mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die für eine bestimmte Herkunft festgelegten Client Hints können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}} Antwort-Header für eine URL innerhalb dieser Herkunft gesendet wird.

## Hints mit niedriger Entropie

Client Hints werden generell in Hints mit hoher und niedriger Entropie unterteilt. Die Hints mit niedriger Entropie sind diejenigen, die nicht viele Informationen preisgeben, die zur Erstellung einer {{Glossary("Fingerprinting", "Fingerabdruckerkennung")}} für einen Benutzer verwendet werden könnten. Diese können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH` Antwort-Header des Servers, je nach Berechtigungspolitik. Hints mit niedriger Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}} und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hints mit hoher Entropie

Die Hints mit hoher Entropie sind diejenigen, die potenziell mehr Informationen preisgeben können, die zur Fingerabdruckerstellung eines Benutzers verwendet werden könnten, und daher so gesteuert werden müssen, dass der User-Agent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, eine Berechtigungsanfrage oder die Berechtigungspolitik basieren. Alle Client Hints, die keine Hints mit niedriger Entropie sind, gelten als Hints mit hoher Entropie.

## Kritische Client Hints

Ein _kritischer Client Hint_ ist einer, dessen Anwendung die gerenderte Seite möglicherweise erheblich verändert, potenziell auf eine störende Art und Weise oder die Benutzerfreundlichkeit beeinträchtigt, und daher vor dem Rendern des Inhalts angewendet werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` allgemein als kritischer Hint behandelt, da er das Verhalten von Animationen beträchtlich beeinflussen könnte und Benutzer, die diese Präferenz wählen, diese Einstellung benötigen.

Ein Server kann den {{HTTPHeader("Critical-CH")}} Antwort-Header zusammen mit `Accept-CH` verwenden, um festzulegen, dass ein akzeptierter Client Hint auch ein kritischer Client Hint ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Benutzer-Agents, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der Benutzer-Agent die Anfrage anstelle der Seitendarstellung erneut ausführen. Dieser Ansatz stellt sicher, dass die mit kritischen Client Hints festgelegten Benutzereinstellungen immer genutzt werden, selbst wenn sie nicht in der ersten Anfrage enthalten sind oder sich die Serverkonfiguration ändert.

Zum Beispiel sagt der Server in diesem Fall dem Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um festzulegen, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client Hint angesehen wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}} Header angegeben, um dem Browser zu signalisieren, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheiden wird, selbst wenn die URL gleich bleibt, sodass der Browser nicht eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hint ist, der nicht in der ursprünglichen Anfrage enthalten war, versucht der Client automatisch, die Anfrage zu wiederholen — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für Animationen mit reduzierter Bewegung hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### User-Agent Client Hints

User-Agent (UA) Client Hint Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren. Für eine Liste der `Sec-CH-UA-*` Header siehe [User Agent Client Hints Headers](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client Hints sind für JavaScript auf Webseiten über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}} Header analysieren. Aus historischen Gründen enthält dieser Header eine Menge weitgehend irrelevanter Informationen und Informationen, die verwendet werden könnten, um einen _bestimmten Benutzer_ zu identifizieren. UA Client Hints bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie letztendlich diesen älteren Ansatz ersetzen.

> [!NOTE]
> User-Agent Client Hints sind in [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, weil sie auf der Delegation der [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die verwendet werden könnte, um Daten zu leaken.

### Benutzerpräferenz-Medienmerkmale-Client-Hints

Benutzerpräferenz-Medienmerkmale-Client-Hints ermöglichen einem Server, Antworten basierend auf den Präferenzen des User-Agents für [CSS-Medienmerkmale](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hints

Geräte-Client-Hints ermöglichen einem Server, Antworten basierend auf Geräteeigenschaften wie verfügbarem Speicher und Bildeigenschaften zu variieren. Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hints

Netzwerk-Client-Hints ermöglichen einem Server, Antworten basierend auf der Benutzerauswahl, der Netzwerkbandbreite und der Latenz zu variieren. Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client Hints Headers](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
