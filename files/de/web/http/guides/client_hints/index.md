---
title: HTTP-Client-Hinweise
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von Feldern im [HTTP-Request-Header](/de/docs/Web/HTTP/Reference/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, die Benutzer- und nutzerspezifische Präferenzen des User-Agents zu erhalten.
Der Server kann basierend auf den Informationen, die der Client zu übermitteln wählt, bestimmen, welche Ressourcen gesendet werden sollen.

Die Reihe von "Hinweis"-Headern wird im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgeführt und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise zu spezifizieren, an denen er interessiert ist.
Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header erhält, kann er wählen, einige oder alle der aufgelisteten Client-Hinweis-Header in seinen nachfolgenden Anfragen hinzuzufügen.

Zum Beispiel, nach der folgenden `Accept-CH`-Antwort könnte der Client die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfragt, die er sinnvoll verarbeiten kann.
Er ist auch relativ "datenschutzschonend", da der Client entscheidet, welche Informationen er sicher teilen kann.

Es gibt eine kleine Menge von [niedrig-Entropie-Client-Hinweis-Headern](#niedrig-entropie-hinweise), die von einem Client auch dann gesendet werden können, wenn sie nicht angefordert wurden.

> [!NOTE]
> Client-Hinweise können auch in HTML mithilfe des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Zwischenspeicherung und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein.
Dies stellt sicher, dass eine andere Ressource für jeden unterschiedlichen Wert des Hinweis-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann bevorzugt werden, die Spezifizierung von {{HTTPHeader("Vary")}} auszulassen oder eine andere Strategie für Client-Hinweis-Header zu verwenden, deren Wert sich häufig ändert, da dies effektiv die Ressource uncachebar macht. (Ein neuer Cache-Eintrag wird für jeden einzigartigen Wert erstellt.)
Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}.
Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Hinweisdauer

Ein Server spezifiziert die Client-Hinweis-Header, die er interessiert ist zu erhalten, im `Accept-CH`-Antwortheader.
Der User-Agent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anforderung für einen spezifischen Satz von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann den Satz der Client-Hinweise, die er erhalten möchte, ersetzen, indem er den `Accept-CH`-Antwortheader mit einer neuen Liste erneut sendet.
Zum Beispiel, um keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client-Hinweise für einen bestimmten Ursprung können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwortheader für eine URL innerhalb dieses Ursprungs gesendet wird.

## Niedrig-Entropie-Hinweise

Client-Hinweise sind grob in hohe und niedrige Entropie-Hinweise unterteilt.
Die niedrig-Entropie-Hinweise sind diejenigen, die nicht viele Informationen preisgeben, die möglicherweise zur Erstellung eines {{Glossary("Fingerprinting", "Fingerabdrucks")}} eines Nutzers verwendet werden könnten.
Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwortheader des Servers, je nach Berechtigungsrichtlinie.
Niedrig-Entropie-Hinweise sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hoch-Entropie-Hinweise

Die hoch-Entropie-Hinweise sind diejenigen, die potenziell mehr Informationen preisgeben, die zur Erstellung eines Nutzer-Fingerabdrucks verwendet werden könnten, und sind daher so gestaltet, dass der User-Agent entscheiden kann, ob sie bereitgestellt werden sollen.
Die Entscheidung könnte auf Benutzereinstellungen, einer Berechtigungsanfrage oder der Berechtigungsrichtlinie basieren.
Alle Client-Hinweise, die keine niedrig-Entropie-Hinweise sind, werden als hoch-Entropie-Hinweise betrachtet.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern könnte, möglicherweise auf eine Weise, die störend ist oder die Benutzerfreundlichkeit beeinträchtigt. Daher muss er angewendet werden, bevor der Inhalt gerendert wird.
Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen merklich beeinflussen könnte und da ein Benutzer, der diese Präferenz wählt, möchte, dass sie festgelegt wird.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwortheader zusammen mit `Accept-CH` verwenden, um zu spezifizieren, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen).
User-Agents, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der User-Agent die Anfrage erneut senden, anstatt die Seite zu rendern.
Dieser Ansatz stellt sicher, dass die mit kritischen Client-Hinweisen gesetzten Client-Präferenzen immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel teilt der Server hier einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser mitzuteilen, dass sich der bereitgestellte Inhalt basierend auf diesem Header-Wert unterscheidet, auch wenn die URL gleich bleibt. Der Browser sollte also nicht einfach eine bestehende zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern. Jeder Header, der im `Critical-CH`-Header aufgeführt ist, sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, wiederholt der Client automatisch die Anfrage — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### User-Agent-Client-Hinweise

User-Agent (UA) Client-Hinweis-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren.
Für eine Liste der `Sec-CH-UA-*`-Header siehe [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) für JavaScript auf Webseiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren.
> Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die zur Identifizierung eines _bestimmten Nutzers_ verwendet werden könnten.
> UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten.
> Es wird erwartet, dass sie letztendlich dieses ältere Verfahren ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) basieren, die zum Datenleak verwendet werden könnte.

### Benutzervorlieben-Medienmerkmale-Client-Hinweise

Client-Hinweise zu Benutzervorlieben und Medienmerkmalen erlauben es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Medienmerkmale](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren.
Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise erlauben es einem Server, Antworten basierend auf Geräteeigenschaften wie verfügbarem Speicher und Bildschirmeigenschaften zu variieren.
Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben es einem Server, Antworten basierend auf Benutzerwahl, Netzwerkbandbreite und Latenz zu variieren.
Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
