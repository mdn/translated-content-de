---
title: HTTP Client hints
slug: Web/HTTP/Client_hints
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{HTTPSidebar}}

**Client hints** sind eine Reihe von [HTTP-Anfrage-Header](/de/docs/Web/HTTP/Headers)-Feldern, die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereitzustellen bereit ist, bestimmen, welche Ressourcen gesendet werden sollen.

Die Liste der „Hint“-Header finden Sie im Thema [HTTP Headers](/de/docs/Web/HTTP/Headers#client_hints) und [nachfolgend zusammengefasst](#hint-typen).

## Überblick

Ein Server muss ankündigen, dass er Client Hints unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hints anzugeben, an denen er interessiert ist. Wenn ein Client, der Client Hints unterstützt, den `Accept-CH`-Header erhält, kann er einige oder alle der aufgeführten Client Hints Header in seinen nachfolgenden Anfragen anhängen.

Zum Beispiel könnte der Client nachfolgend aus der `Accept-CH`-Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} an alle nachfolgenden Anfragen anhängen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er nützlich verarbeiten kann. Er ist auch relativ „datenschutzfreundlich“, da es dem Client überlassen ist, welche Informationen er sicher teilen kann.

Es gibt eine kleine Reihe von [low entropy client hint headers](#low_entropy_hints), die von einem Client auch dann gesendet werden können, wenn sie nicht angefordert wurden.

> [!NOTE]
> Client Hints können auch in HTML über das {{HTMLElement("meta")}}-Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client Hints

Client Hints, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten im Allgemeinen auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Dies stellt sicher, dass eine andere Ressource für jeden anderen Wert des Hint-Headers zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann sinnvoll sein, das Angeben von {{HTTPHeader("Vary")}} zu unterlassen oder eine andere Strategie für Client Hints Header zu verwenden, bei denen sich der Wert häufig ändert, da dies die Ressource effektiv uncacheable macht. (Ein neuer Cache-Eintrag wird für jeden einzigartigen Wert erstellt.) Dies gilt insbesondere für Netzwerk-Client Hints wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Für weitere Informationen siehe [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary).

## Lebensdauer der Hints

Ein Server gibt die Client Hints Header an, die er erhalten möchte, im `Accept-CH`-Antwort-Header an. Der User-Agent hängt die angeforderten Client Hints Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, an alle nachfolgenden Anfragen in der aktuellen Sitzung im Browser an.

Mit anderen Worten, die Anforderung für eine bestimmte Reihe von Hints läuft erst ab, wenn der Browser heruntergefahren wird.

Ein Server kann die Reihe von Client Hints, die er erhalten möchte, durch erneutes Senden des `Accept-CH`-Antwort-Headers mit einer neuen Liste ersetzen. Zum Beispiel würde er "Accept-CH" mit einer leeren Liste senden, um keine Hints mehr anzufordern.

> [!NOTE]
> Die gesetzten Client Hints für einen bestimmten Ursprung können auch durch Senden eines {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Headers für eine URL innerhalb dieses Ursprungs gelöscht werden.

## Low entropy hints

Client Hints werden grob in High- und Low-Entropy-Hints unterteilt.

Die Low-Entropy-Hints sind diejenigen, die nicht viele Informationen preisgeben, die zur Erstellung eines [Fingerprinting](/de/docs/Glossary/Fingerprinting) eines Benutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, abhängig von der Berechtigungspolitik. Diese Hints umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Sec-CH-UA")}}, {{HTTPHeader("Sec-CH-UA-Mobile")}}, {{HTTPHeader("Sec-CH-UA-Platform")}}.

Die High-Entropy-Hints sind diejenigen, die potenziell mehr Informationen preisgeben, die zur Erstellung eines Fingerprints eines Nutzers verwendet werden könnten, und werden daher so gesteuert, dass der User-Agent entscheiden kann, ob er diese bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder der Berechtigungspolitik basieren. Alle Client Hints, die keine Low-Entropy-Hints sind, gelten als High-Entropy-Hints.

## Kritische Client Hints

Ein _kritischer Client Hint_ ist ein Hint, bei dem die Anwendung der Antwort die gerenderte Seite erheblich verändern kann, möglicherweise auf eine Weise, die störend ist oder die Benutzerfreundlichkeit beeinträchtigt. Deshalb muss der Hint angewendet werden, bevor der Inhalt gerendert wird. Beispielsweise wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, da er das Verhalten von Animationen deutlich beeinflussen könnte. Ein Benutzer, der diese Präferenz wählt, muss sie eingestellt haben.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client Hint auch ein kritischer Client Hint ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Benutzeragent die Anfrage erneut senden, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass Client-Präferenzen, die mit kritischen Client Hints eingestellt werden, immer verwendet werden, selbst wenn sie nicht in der ersten Anfrage enthalten sind oder wenn sich die Serverkonfiguration ändert.

Zum Beispiel teilt der Server in diesem Fall dem Client über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client Hint angesehen wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt basierend auf diesem Header-Wert unterschiedlich sein wird, selbst wenn die URL gleichbleibt, sodass der Browser nicht einfach eine vorhandene gecachte Antwort verwenden, sondern diese Antwort separat zwischenspeichern sollte. Jeder Header, der im `Critical-CH`-Header aufgelistet ist, sollte ebenfalls in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hint ist, der nicht in der ursprünglichen Anfrage enthalten war, wiederholt der Client die Anfrage automatisch — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduziertes Bewegungs-Animationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hint-Typen

### User-Agent Client Hints

User-Agent (UA) Client Hint Headers ermöglichen einem Server, Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User agent client hints headers](/de/docs/Web/HTTP/Headers#user_agent_client_hints).

Client Hints sind über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) im JavaScript einer Webseite verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten dieser Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header parsen. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die möglicherweise zur Identifizierung eines _bestimmten Benutzers_ verwendet werden könnten. UA Client Hints bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie diesen älteren Ansatz schließlich ersetzen.

> [!NOTE]
> User-Agent Client Hints sind innerhalb von [fenced frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie auf der [permissions policy](/de/docs/Web/HTTP/Permissions_Policy)-Delegierung basieren, die verwendet werden könnte, um Daten zu leaken.

### Benutzervorliebe-Media-Features-Client-Hints

Benutzervorliebe Media Features Client Hints ermöglichen es einem Server, Antworten basierend auf den Präferenzen eines User-Agents für [CSS Media Features](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierter Bewegung zu variieren. Header umfassen: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hints

Geräte-Client-Hints erlauben es einem Server, Antworten basierend auf den Eigenschaften eines Geräts zu variieren, einschließlich verfügbarer Speicher und Bildschirm-Eigenschaften. Header umfassen: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hints

Netzwerk-Client-Hints erlauben es einem Server, Antworten basierend auf der Wahl des Nutzers, der Netzwerkbandbreite und der Latenz zu variieren. Header umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client Hints headers](/de/docs/Web/HTTP/Headers#client_hints)
- [`Vary` HTTP Header](/de/docs/Web/HTTP/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Nutzer-Privatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
