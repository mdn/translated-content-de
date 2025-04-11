---
title: HTTP Client-Hinweise
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von [HTTP-Anfrageheader](/de/docs/Web/HTTP/Reference/Headers)-Feldern, die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereitzustellen wählt, entscheiden, welche Ressourcen gesendet werden.

Die Reihe von "Hinweis"-Headern sind im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise zu spezifizieren, an denen er interessiert ist. Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header empfängt, kann er wählen, einige oder alle der aufgelisteten Client-Hinweis-Header zu seinen nachfolgenden Anfragen hinzuzufügen.

Zum Beispiel könnte der Client nach dem `Accept-CH` in einer Antwort unten die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da es dem Client überlassen ist zu entscheiden, welche Informationen er sicher teilen kann.

Es gibt eine kleine Menge an [niedrig-Entropie-Client-Hinweis-Headern](#niedrig-entropie-hinweise), die von einem Client auch gesendet werden können, wenn sie nicht angefordert werden.

> [!NOTE]
> Client-Hinweise können auch in HTML mittels des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut spezifiziert werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass eine unterschiedliche Ressource für jeden unterschiedlichen Wert des Hinweis-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Sie ziehen es vielleicht vor, die Spezifizierung von {{HTTPHeader("Vary")}} auszulassen oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv nicht zwischenspeicherbar macht. (Ein neuer Cache-Eintrag wird für jeden eindeutigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hinweise

Ein Server gibt die Client-Hinweis-Header an, die er erhalten möchte, im `Accept-CH`-Antwort-Header an. Der User-Agent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, zu allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anforderung für eine bestimmte Reihe von Hinweisen läuft nicht ab, bevor der Browser geschlossen wird.

Ein Server kann die Reihe der Client-Hinweise, die er erhalten möchte, ersetzen, indem er den `Accept-CH`-Antwort-Header mit einer neuen Liste erneut sendet. Um beispielsweise keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client-Hinweise für einen bestimmten Ursprung können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Niedrig-Entropie-Hinweise

Client-Hinweise werden grob in Hinweise mit hoher und niedriger Entropie unterteilt. Die niedrig-Entropie-Hinweise sind solche, die nicht viele Informationen preisgeben, die dazu verwendet werden könnten, ein {{Glossary("Fingerprinting", "Fingerprinting")}} eines Benutzers zu erstellen. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, je nach Berechtigungspolitik. Niedrig-Entropie-Hinweise sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}} und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hoch-Entropie-Hinweise

Die hoch-Entropie-Hinweise sind solche, die potenziell mehr Informationen preisgeben können, die für das Fingerprinting eines Benutzers verwendet werden könnten, und sind daher in einer Weise beschränkt, dass der User-Agent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder der Berechtigungspolitik basieren. Alle Client-Hinweise, die keine niedrig-Entropie-Hinweise sind, werden als hoch-Entropie-Hinweise betrachtet.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern kann, möglicherweise auf eine Weise, die unangenehm ist oder die Benutzerfreundlichkeit beeinträchtigt, und der daher angewendet werden muss, bevor der Inhalt gerendert wird. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen deutlich beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, benötigt, dass sie eingestellt wird.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um zu spezifizieren, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). User-Agents, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der User-Agent die Anfrage erneut senden, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass die durch kritische Client-Hinweise festgelegten Präferenzen des Clients immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind oder wenn die Serverkonfiguration geändert wird.

Zum Beispiel teilt der Server in diesem Fall einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um zu spezifizieren, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header spezifiziert, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt basierend auf diesem Header-Wert unterschiedlich sein wird, auch wenn die URL gleich bleibt, sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden sollte, sondern stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte ebenfalls in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, wiederholt der Client die Anfrage automatisch — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für animationsarme Bewegungen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### User-Agent-Client-Hinweise

User-Agent (UA)-Client-Hinweis-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät zu variieren. Für eine Liste der `Sec-CH-UA-*` Header, siehe [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind für JavaScript-Webseiten über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die verwendet werden könnten, um _einen bestimmten Benutzer_ zu identifizieren. UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie mittelfristig diesen älteren Ansatz ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die verwendet werden könnte, um Daten zu leaken.

### Benutzerpräferenz-Medienmerkmale-Client-Hinweise

Benutzerpräferenz-Medienmerkmale-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medienmerkmale](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Header umfassen: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf Geräteeigenschaften einschließlich verfügbarem Speicher und Bildschirmeigenschaften zu variieren. Header umfassen: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf der Wahl des Benutzers, der Netzwerkbandbreite und der Latenz zu variieren. Header umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
