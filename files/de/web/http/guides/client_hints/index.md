---
title: HTTP-Client-Hinweise
short-title: Client hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von Feldern in [HTTP-Anforderungsheadern](/de/docs/Web/HTTP/Reference/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, Nutzer- und benutzerspezifische Präferenzen zu erhalten. Der Server kann basierend auf den Informationen, die der Client zu liefern bereit ist, bestimmen, welche Ressourcen gesendet werden sollen.

Die Liste der "Hinweis"-Header ist im Thema [HTTP Headers](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgeführt und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise anzugeben, die er zu erhalten wünscht. Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header erhält, kann er entscheiden, einige oder alle der aufgeführten Client-Hinweis-Header in seinen nachfolgenden Anforderungen hinzuzufügen.

Zum Beispiel könnte der Client nach einem `Accept-CH`-Header in einer Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anforderungen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da der Client entscheidet, welche Informationen er sicher mitteilen kann.

Es gibt einen kleinen Satz von [Client-Hinweis-Headern mit niedriger Entropie](#hinweise_mit_niedriger_entropie), die von einem Client gesendet werden können, auch wenn sie nicht angefordert wurden.

> [!NOTE]
> Client-Hinweise können auch in HTML unter Verwendung des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Zwischenspeicherung und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten in der Regel auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es könnte bevorzugt werden, {{HTTPHeader("Vary")}} nicht anzugeben oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv uncacheable macht. (Für jeden einzigartigen Wert wird ein neuer Cache-Eintrag erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer von Hinweisen

Ein Server gibt die Client-Hinweis-Header an, die er im `Accept-CH`-Antwort-Header erhalten möchte. Der Nutzeragent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, zu allen nachfolgenden Anforderungen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anforderung für eine spezifische Reihe von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann die Reihe der Client-Hinweise, die er zu erhalten wünscht, ersetzen, indem er den `Accept-CH`-Antwort-Header mit einer neuen Liste erneut sendet. Um zum Beispiel keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client-Hinweis-Einstellung für einen bestimmten Ursprung kann auch durch Senden eines {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Headers für eine URL innerhalb dieses Ursprungs gelöscht werden.

## Hinweise mit niedriger Entropie

Client-Hinweise werden grob in Hinweis mit hoher und niedriger Entropie unterteilt. Die Hinweise mit niedriger Entropie sind diejenigen, die nicht viele Informationen preisgeben, die zum Erstellen eines {{Glossary("Fingerprinting", "Fingerabdrucks")}} eines Nutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anforderung gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, abhängig von der Berechtigungsrichtlinie. Hinweise mit niedriger Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hinweise mit hoher Entropie

Hinweise mit hoher Entropie sind solche, die potenziell mehr Informationen preisgeben, die zur Erstellung eines Nutzer-Fingerabdrucks verwendet werden können, und daher so kontrolliert werden, dass der Nutzeragent entscheiden kann, ob er diese bereitstellen möchte. Die Entscheidung könnte auf Nutzerpräferenzen, einer Berechtigungsanforderung oder der Berechtigungsrichtlinie basieren. Alle Client-Hinweise, die nicht Hinweise mit niedriger Entropie sind, werden als Hinweise mit hoher Entropie betrachtet.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern könnte, möglicherweise auf eine störende Weise oder die Benutzbarkeit beeinträchtigt, und daher vor der Darstellung des Inhalts angewandt werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen erheblich beeinflussen könnte und weil ein Nutzer, der diese Präferenz auswählt, sie eingestellt haben muss.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Nutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anforderung gesendet wurden. Falls nicht, wird der Nutzeragent die Anforderung erneut senden, anstatt die Seite darzustellen. Dieser Ansatz stellt sicher, dass die mit kritischen Client-Hinweisen gesetzten Client-Präferenzen immer verwendet werden, selbst wenn sie nicht in der ersten Anforderung enthalten sind oder sich die Serverkonfiguration ändert.

Zum Beispiel teilt in diesem Fall der Server einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt je nach Wert dieses Headers unterschiedlich sein wird, auch wenn die URL gleich bleibt, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden, sondern diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anforderung enthalten war, wiederholt der Client die Anforderung automatisch — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Nutzerpräferenz für Animationen mit reduzierter Bewegung hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### Hinweise des Nutzeragenten-Clients

Header für Nutzeragenten (UA)-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf dem Nutzeragenten (Browser), dem Betriebssystem und dem Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User agent client hints headers](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) für JavaScript auf Webseiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten dieser Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die zur Identifikation eines _bestimmten Nutzers_ verwendet werden könnten. UA-Client-Hinweise bieten eine effizientere und datenschutzerhaltendere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie diesen älteren Ansatz schließlich ersetzen.

> [!NOTE]
> Nutzeragenten-Client-Hinweise sind in [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie von der [Berechtigungsrichtlinien-](/de/docs/Web/HTTP/Guides/Permissions_Policy)Delegierung abhängen, die zum Leaken von Daten verwendet werden könnte.

### Client-Hinweise für Medienmerkmale der Nutzerpräferenz

Client-Hinweise für Medienmerkmale der Nutzerpräferenz ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines Nutzeragenten für [CSS-Medienmerkmale](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Header umfassen: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Hinweise des Gerät-Clients

Hinweise des Geräte-Clients ermöglichen es einem Server, Antworten basierend auf Geräteeigenschaften, einschließlich verfügbarem Speicher und Bildschirmmerkmalen, zu variieren. Header umfassen: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf der Wahl des Nutzers, der Netzwerkbandbreite und der Latenz zu variieren. Header umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hints-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client-Hints-Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
