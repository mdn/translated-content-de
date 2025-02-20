---
title: HTTP-Client-Hinweise
slug: Web/HTTP/Client_hints
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von Feldern im [HTTP-Anfrage-Header](/de/docs/Web/HTTP/Headers), die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereitstellt, entscheiden, welche Ressourcen gesendet werden.

Die Liste der "Hinweis"-Header ist im Thema [HTTP Headers](/de/docs/Web/HTTP/Headers#client_hints) aufgeführt und [unten zusammengefasst](#hinweisarten).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise zu spezifizieren, die er zu erhalten wünscht. Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header empfängt, kann er wählen, einige oder alle der aufgeführten Client-Hinweis-Header in seine nachfolgenden Anfragen aufzunehmen.

Beispielsweise könnte der Client nachfolgend dem `Accept-CH` im untenstehenden Antwortbeispiel die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da es dem Client überlassen ist, zu entscheiden, welche Informationen sicher geteilt werden können.

Es gibt eine kleine Menge an [Client-Hinweis-Headern mit geringer Entropie](#hinweise_mit_geringer_entropie), die vom Client gesendet werden können, auch wenn sie nicht angefordert wurden.

> [!NOTE]
> Client-Hinweise können auch in HTML mit dem {{HTMLElement("meta")}}-Element unter Verwendung des [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attributs angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}}-Header der betreffenden Antwort enthalten sein. Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es könnte bevorzugt werden, darauf zu verzichten, {{HTTPHeader("Vary")}} zu spezifizieren, oder eine andere Strategie für Client-Hinweis-Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv unveränderlich macht. (Ein neuer Cache-Eintrag wird für jeden einzigartigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Weitere Informationen finden Sie unter [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary).

## Hinweislebensdauer

Ein Server gibt die Client-Hinweis-Header an, die er im `Accept-CH`-Antwort-Header erhalten möchte. Der User-Agent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, allen nachfolgenden Anfragen in der aktuellen Browsing-Sitzung hinzu.

Mit anderen Worten, die Anforderung einer bestimmten Reihe von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann die Menge an Client-Hinweisen, die er erhalten möchte, ersetzen, indem er den `Accept-CH`-Antwort-Header mit einer neuen Liste erneut sendet. Um beispielsweise keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die für eine bestimmte Herkunft festgelegten Client-Hinweise können auch durch Senden eines {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Headers für eine URL innerhalb dieser Herkunft gelöscht werden.

## Hinweise mit geringer Entropie

Client-Hinweise werden grob in solche mit hoher und niedriger Entropie eingeteilt. Die Hinweise mit niedriger Entropie sind diejenigen, die nicht viel Informationen preisgeben, die möglicherweise zur Erstellung eines {{Glossary("Fingerprinting", "Fingerabdrucks")}} eines Benutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, je nach Erlaubnisrichtlinie. Hinweise mit geringer Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hinweise mit hoher Entropie

Die Hinweise mit hoher Entropie sind solche, die potenziell mehr Informationen preisgeben könnten, die für das Fingerprinting eines Benutzers genutzt werden können, und daher so gestaltet sind, dass der User-Agent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzereinstellungen, einer Berechtigungsanfrage oder der Erlaubnisrichtlinie basieren. Alle Client-Hinweise, die keine Hinweise mit niedriger Entropie sind, gelten als Hinweise mit hoher Entropie.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite signifikant verändern kann, potenziell auf eine Weise, die störend ist oder die Benutzerfreundlichkeit beeinträchtigt, und daher vor dem Darstellen des Inhalts angewendet werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, weil er das Verhalten von Animationen stark beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, sie eingestellt haben muss.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Bei Erhalt einer Antwort mit `Critical-CH` müssen User-Agents überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der User-Agent die Anfrage erneut senden, anstatt die Seite darzustellen. Dieser Ansatz stellt sicher, dass Client-Präferenzen, die über kritische Client-Hinweise festgelegt werden, immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten sind oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel teilt in diesem Fall der Server einem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header spezifiziert, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt auf Basis des Header-Wertes unterschiedlich sein wird, selbst wenn die URL gleich bleibt, sodass der Browser nicht einfach eine bestehende zwischengespeicherte Antwort verwenden und stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage war, wiederholt der Client automatisch die Anfrage – diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweisarten

### User-Agent-Client-Hinweise

User-Agent (UA) Client-Hinweis-Header ermöglichen es einem Server, Antworten basierend auf dem User-Agent (Browser), dem Betriebssystem und dem Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User-Agent-Client-Hinweis-Header](/de/docs/Web/HTTP/Headers#user_agent_client_hints).

Client-Hinweise sind über die [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API) für JavaScript auf Webseiten verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten der gleichen Informationen durch das Parsing des {{HTTPHeader("User-Agent")}}-Headers. Aus historischen Gründen enthält dieser Header eine Menge größtenteils irrelevanter Informationen und Informationen, die zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten. UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Sie sollen letztendlich diesen älteren Ansatz ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise stehen nicht in [fenced frames](/de/docs/Web/API/Fenced_frame_API) zur Verfügung, da sie auf der Delegation der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) basieren, die zum Datenleak verwendet werden könnte.

### Benutzerpräferenz-Media-Features-Client-Hinweise

Benutzerpräferenz-Media-Features-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Media-Features](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegung zu variieren. Header beinhalten: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf Gerätemerkmalen einschließlich verfügbarem Speicher und Bildschirmparametern zu variieren. Header beinhalten: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf der Benutzerwahl, der Netzwerkbandbreite und der Latenz zu variieren. Header beinhalten: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hints-Header](/de/docs/Web/HTTP/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Headers/Vary)
- [Client-Hints-Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [User-Agent-Client-Hints-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
