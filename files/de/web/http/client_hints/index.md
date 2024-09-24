---
title: HTTP-Client-Hinweise
slug: Web/HTTP/Client_hints
l10n:
  sourceCommit: 810682f11400bad32c92ae7182daddfc0ca973b3
---

{{HTTPSidebar}}

**Client-Hinweise** sind eine Reihe von Feldern in den [HTTP-Anforderungsheadern](/de/docs/Web/HTTP/Headers), die ein Server proaktiv vom Client anfordern kann, um Informationen über das Gerät, das Netzwerk, den Benutzer und benutzerspezifische Präferenzen des User-Agents zu erhalten. Der Server kann basierend auf den Informationen, die der Client bereitzustellen wählt, entscheiden, welche Ressourcen gesendet werden sollen.

Die "Hint"-Header sind im Thema [HTTP-Header](/de/docs/Web/HTTP/Headers#client_hints) aufgelistet und werden [unten zusammengefasst](#hinweistypen).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise anzugeben, die er zu erhalten wünscht. Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header empfängt, kann er wählen, einige oder alle der aufgelisteten Client-Hinweis-Header in seinen nachfolgenden Anforderungen hinzuzufügen.

Zum Beispiel könnte der Client nach dem folgenden `Accept-CH` in einer Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anforderungen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Es ist auch relativ "datenschutzfreundlich", da es dem Client überlassen bleibt, welche Informationen sicher geteilt werden können.

Es gibt eine kleine Gruppe von [niedrig entropiehaltigen Client-Hinweis-Headern](#niedrig_entropiehaltige_hinweise), die von einem Client gesendet werden können, selbst wenn sie nicht angefordert werden.

> [!NOTE]
> Client-Hinweise können auch in HTML mittels des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten generell auch im {{HTTPHeader("Vary")}}-Header der betroffenen Antwort enthalten sein. Dies gewährleistet, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Es kann bevorzugt werden, die Angabe von {{HTTPHeader("Vary")}} zu unterlassen oder eine andere Strategie für Client-Hinweis-Header zu verwenden, deren Wert sich häufig ändert, da dies die Ressource effektiv uncachebar macht. (Für jeden eindeutigen Wert wird ein neuer Cache-Eintrag erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Weitere Informationen finden Sie unter [HTTP Caching > Vary](/de/docs/Web/HTTP/Caching#vary).

## Lebensdauer von Hinweisen

Ein Server gibt die Client-Hinweis-Header an, die er im `Accept-CH`-Antwort-Header erhalten möchte. Der User Agent fügt die angeforderten Client-Hinweis-Header, oder zumindest die Teilmenge, die er mit diesem Server teilen möchte, zu allen nachfolgenden Anfragen in der aktuellen Browsersitzung hinzu.

Mit anderen Worten, die Anfrage nach einem bestimmten Satz von Hinweisen läuft nicht ab, bis der Browser geschlossen wird.

Ein Server kann die Menge von Client-Hinweisen, die er erhalten möchte, durch das erneute Senden des `Accept-CH`-Antwort-Headers mit einer neuen Liste ersetzen. Zum Beispiel würde er `Accept-CH` mit einer leeren Liste senden, um das Anfordern von Hinweisen ganz zu stoppen.

> [!NOTE]
> Die für einen bestimmten Ursprung festgelegten Client-Hinweise können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Niedrig entropiehaltige Hinweise

Client-Hinweise werden generell in hoch- und niedrig entropiehaltige Hinweise unterteilt.

Die niedrig entropiehaltigen Hinweise sind diejenigen, die nicht viele Informationen preisgeben, die zur Erstellung eines [Fingerabdrucks](/de/docs/Glossary/Fingerprinting) für einen Benutzer verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, je nach Erlaubnisrichtlinie. Diese Hinweise umfassen: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Sec-CH-UA")}}, {{HTTPHeader("Sec-CH-UA-Mobile")}}, {{HTTPHeader("Sec-CH-UA-Platform")}}.

Die hoch entropiehaltigen Hinweise sind diejenigen, die das Potenzial haben, mehr Informationen preiszugeben, die für das Benutzer-Fingerprinting verwendet werden können. Daher sind sie so geschützt, dass der User Agent entscheiden kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanfrage oder der Erlaubnisrichtlinie basieren. Alle Client-Hinweise, die keine niedrig entropiehaltigen Hinweise sind, gelten als hoch entropiehaltig.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich ändern kann, möglicherweise auf eine störende Weise oder mit Auswirkungen auf die Benutzerfreundlichkeit, und der daher angewendet werden muss, bevor der Inhalt gerendert wird. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` häufig als kritischer Hinweis behandelt, weil er das Verhalten von Animationen merklich beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, diese Einstellung benötigt.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` erscheinen). Benutzeragenten, die eine Antwort mit `Critical-CH` erhalten, müssen überprüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Wenn nicht, wird der Benutzeragent die Anfrage erneut versuchen, anstatt die Seite zu rendern. Dieser Ansatz stellt sicher, dass Client-Präferenzen, die mit kritischen Client-Hinweisen festgelegt wurden, immer verwendet werden, auch wenn sie nicht in der ersten Anfrage enthalten waren oder sich die Serverkonfiguration ändert.

Zum Beispiel teilt der Server einem Client in diesem Fall über {{httpheader("Accept-CH")}} mit, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um festzulegen, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header spezifiziert, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt basierend auf diesem Headerwert unterschiedlich sein wird, selbst wenn die URL gleich bleibt. Das bedeutet, dass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden sollte, sondern diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgeführte Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der nicht in der ursprünglichen Anfrage enthalten war, versucht der Client die Anfrage automatisch erneut — diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduziertere Animationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweistypen

### User-Agent-Client-Hinweise

Mit User-Agent (UA) Client-Hinweis-Headern kann ein Server Antworten basierend auf dem User-Agent (Browser), Betriebssystem und Gerät variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [User Agent Client Hints headers](/de/docs/Web/HTTP/Headers#user_agent_client_hints).

Client-Hinweise sind im JavaScript einer Webseite über die [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten dieser Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die verwendet werden könnten, um einen _bestimmten Benutzer_ zu identifizieren. UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie diesen älteren Ansatz schließlich ersetzen.

> [!NOTE]
> User-Agent-Client-Hinweise sind nicht in [fenced frames](/de/docs/Web/API/Fenced_frame_API) verfügbar, da sie auf [Erlaubnisrichtlinien](/de/docs/Web/HTTP/Permissions_Policy)-Delegation basieren, die zur Datenleckage genutzt werden könnten.

### Benutzerpräferenz-Media-Features-Client-Hinweise

Mit Benutzerpräferenz-Media-Features-Client-Hinweisen kann ein Server Antworten basierend auf den Präferenzen eines User-Agents für [CSS-Media-Features](/de/docs/Web/CSS/@media#media_features) wie Farbschema oder reduzierte Bewegungen variieren. Zu den Headern gehören: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Mit Geräte-Client-Hinweisen kann ein Server Antworten basierend auf den Eigenschaften des Geräts variieren, einschließlich verfügbarem Speicher und Display-Eigenschaften. Zu den Headern gehören: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Mit Netzwerk-Client-Hinweisen kann ein Server Antworten basierend auf der Wahl des Benutzers, Netzwerkbandbreite und Latenz variieren. Zu den Headern gehören: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client Hints headers](/de/docs/Web/HTTP/Headers#client_hints)
- [`Vary` HTTP Header](/de/docs/Web/HTTP/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
