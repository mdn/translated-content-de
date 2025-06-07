---
title: HTTP-Client-Hinweise
short-title: Client hints
slug: Web/HTTP/Guides/Client_hints
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

**Client-Hints** sind eine Reihe von [HTTP-Anfrageheader](/de/docs/Web/HTTP/Reference/Headers)-Feldern, die ein Server proaktiv von einem Client anfordern kann, um Informationen über das Gerät, Netzwerk, die Benutzer- und Benutzeragenten-spezifischen Präferenzen zu erhalten. Der Server kann bestimmen, welche Ressourcen gesendet werden sollen, basierend auf den Informationen, die der Client bereitzustellen wählt.

Die Reihe der "Hinweis"-Header ist im Thema [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints) aufgelistet und [unten zusammengefasst](#hinweise-typen).

## Überblick

Ein Server muss ankündigen, dass er Client-Hinweise unterstützt, indem er den {{HTTPHeader("Accept-CH")}}-Header verwendet, um die Hinweise anzugeben, die er erhalten möchte. Wenn ein Client, der Client-Hinweise unterstützt, den `Accept-CH`-Header erhält, kann er einige oder alle der aufgelisteten Client-Hinweis-Header in seine anschließenden Anfragen einfügen.

Zum Beispiel könnte der Client nach einem `Accept-CH` in einer unten stehenden Antwort die Header {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} und {{HTTPHeader("Sec-CH-UA")}} zu allen nachfolgenden Anfragen hinzufügen.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

Dieser Ansatz ist effizient, da der Server nur die Informationen anfordert, die er sinnvoll verarbeiten kann. Er ist auch relativ "datenschutzfreundlich", da es dem Client überlassen bleibt zu entscheiden, welche Informationen er sicher weitergeben kann.

Es gibt eine kleine Reihe von [Client-Hinweis-Headern mit geringer Entropie](#hinweise_mit_niedriger_entropie), die von einem Client gesendet werden können, auch wenn sie nicht angefordert werden.

> [!NOTE]
> Client-Hinweise können auch in HTML mittels des {{HTMLElement("meta")}}-Elements mit dem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut angegeben werden.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA" />
> ```

## Caching und Client-Hinweise

Client-Hinweise, die bestimmen, welche Ressourcen in Antworten gesendet werden, sollten im Allgemeinen auch im betroffenen {{HTTPHeader("Vary")}}-Header der Antwort enthalten sein. Dies stellt sicher, dass für jeden unterschiedlichen Wert des Hinweis-Headers eine andere Ressource zwischengespeichert wird.

```http
Vary: Accept, Width, ECT
```

Sie möchten möglicherweise darauf verzichten, {{HTTPHeader("Vary")}} anzugeben, oder eine andere Strategie für Client-Hinweis-Header verwenden, deren Wert sich häufig ändert, da dies die Ressource faktisch uncacheable macht. (Für jeden eindeutigen Wert wird ein neuer Cache-Eintrag erstellt.) Dies gilt insbesondere für Netzwerk-Client-Hinweise wie {{HTTPHeader("Downlink")}} und {{HTTPHeader("RTT")}}. Weitere Informationen finden Sie unter [HTTP-Caching > Vary](/de/docs/Web/HTTP/Guides/Caching#vary).

## Lebensdauer der Hinweise

Ein Server gibt die Client-Hinweis-Header an, die er im `Accept-CH`-Antwort-Header erhalten möchte. Der Benutzeragent fügt die angeforderten Client-Hinweis-Header oder zumindest die Untermenge, die er mit diesem Server teilen möchte, zu allen nachfolgenden Anfragen in der aktuellen Browsing-Sitzung hinzu.

Mit anderen Worten, die Anfrage nach einer bestimmten Reihe von Hinweisen läuft nicht ab, bis der Browser heruntergefahren wird.

Ein Server kann die Menge der Client-Hinweise, die er erhalten möchte, durch erneutes Senden des `Accept-CH`-Antwort-Headers mit einer neuen Liste ersetzen. Um zum Beispiel keine Hinweise mehr anzufordern, würde er `Accept-CH` mit einer leeren Liste senden.

> [!NOTE]
> Die Client-Hinweise für einen bestimmten Ursprung können auch gelöscht werden, indem ein {{httpheader("Clear-Site-Data", "Clear-Site-Data: \"clientHints\"")}}-Antwort-Header für eine URL innerhalb dieses Ursprungs gesendet wird.

## Hinweise mit niedriger Entropie

Client-Hinweise werden im Allgemeinen in solche mit hoher und niedriger Entropie unterteilt. Hinweise mit niedriger Entropie sind solche, die nicht viele Informationen preisgeben, die für die Erstellung eines {{Glossary("Fingerprinting", "Fingerabdrucks")}} eines Benutzers verwendet werden könnten. Sie können standardmäßig bei jeder Client-Anfrage gesendet werden, unabhängig vom `Accept-CH`-Antwort-Header des Servers, abhängig von der Berechtigungsrichtlinie. Hinweise mit niedriger Entropie sind:

- {{HTTPHeader("Save-Data")}},
- {{HTTPHeader("Sec-CH-UA")}},
- {{HTTPHeader("Sec-CH-UA-Mobile")}}, und
- {{HTTPHeader("Sec-CH-UA-Platform")}}.

## Hinweise mit hoher Entropie

Hinweise mit hoher Entropie sind solche, die potenziell mehr Informationen preisgeben, die für die Erstellung eines Benutzers Fingerabdruck verwendet werden könnten, und daher so gesteuert werden, dass der Benutzeragent eine Entscheidung treffen kann, ob er sie bereitstellt. Die Entscheidung könnte auf Benutzerpräferenzen, einer Berechtigungsanforderung oder der Berechtigungsrichtlinie basieren. Alle Client-Hinweise, die keine Hinweise mit niedriger Entropie sind, werden als Hinweise mit hoher Entropie betrachtet.

## Kritische Client-Hinweise

Ein _kritischer Client-Hinweis_ ist einer, bei dem die Anwendung der Antwort die gerenderte Seite erheblich ändern könnte, potenziell auf eine Weise, die störend ist oder die Benutzerfreundlichkeit beeinträchtigt, und die daher vor der Inhaltsdarstellung angewendet werden muss. Zum Beispiel wird `Sec-CH-Prefers-Reduced-Motion` oft als kritischer Hinweis behandelt, da er das Verhalten von Animationen stark beeinflussen könnte und weil ein Benutzer, der diese Präferenz wählt, sie gesetzt haben muss.

Ein Server kann den {{HTTPHeader("Critical-CH")}}-Antwort-Header zusammen mit `Accept-CH` verwenden, um anzugeben, dass ein akzeptierter Client-Hinweis auch ein kritischer Client-Hinweis ist (ein Header in `Critical-CH` muss auch in `Accept-CH` enthalten sein). Benutzeragenten, die eine Antwort mit `Critical-CH` empfangen, müssen prüfen, ob die angegebenen kritischen Header in der ursprünglichen Anfrage gesendet wurden. Falls nicht, wird der Benutzeragent die Anfrage erneut ausführen, anstatt die Seite darzustellen. Diese Vorgehensweise stellt sicher, dass die durch kritische Client-Hinweise gesetzten Benutzereinstellungen immer verwendet werden, auch wenn sie in der ersten Anfrage nicht enthalten waren oder sich die Serverkonfiguration ändert.

Zum Beispiel informiert der Server in diesem Fall einen Client über {{httpheader("Accept-CH")}}, dass er `Sec-CH-Prefers-Reduced-Motion` akzeptiert, und {{httpheader("Critical-CH")}} wird verwendet, um anzugeben, dass `Sec-CH-Prefers-Reduced-Motion` als kritischer Client-Hinweis betrachtet wird:

```http
HTTP/1.1 200 OK
Content-Type: text/html
Accept-CH: Sec-CH-Prefers-Reduced-Motion
Vary: Sec-CH-Prefers-Reduced-Motion
Critical-CH: Sec-CH-Prefers-Reduced-Motion
```

> [!NOTE]
> Wir haben auch `Sec-CH-Prefers-Reduced-Motion` im {{httpheader("Vary")}}-Header angegeben, um dem Browser anzuzeigen, dass der bereitgestellte Inhalt je nach diesem Header-Wert unterschiedlich sein wird, selbst wenn die URL gleich bleibt, sodass der Browser nicht einfach eine vorhandene zwischengespeicherte Antwort verwenden sollte und stattdessen diese Antwort separat zwischenspeichern sollte. Jeder im `Critical-CH`-Header aufgelistete Header sollte auch in den `Accept-CH`- und `Vary`-Headern vorhanden sein.

Da `Sec-CH-Prefers-Reduced-Motion` ein kritischer Hinweis ist, der in der ursprünglichen Anfrage nicht enthalten war, führt der Client die Anfrage automatisch erneut aus - diesmal teilt er dem Server über `Sec-CH-Prefers-Reduced-Motion` mit, dass er eine Benutzerpräferenz für reduzierte Bewegungsanimationen hat.

```http
GET / HTTP/1.1
Host: example.com
Sec-CH-Prefers-Reduced-Motion: "reduce"
```

## Hinweise-Typen

### Benutzeragenten-Client-Hinweise

Benutzeragenten (UA) Client-Hinweis-Header erlauben es einem Server, Antworten basierend auf dem Benutzeragent (Browser), Betriebssystem und Gerät zu variieren. Eine Liste der `Sec-CH-UA-*`-Header finden Sie unter [Benutzeragenten-Client-Hinweis-Header](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints).

Client-Hinweise sind für JavaScript auf Webseiten über die [Benutzeragenten-Client-Hinweis-API](/de/docs/Web/API/User-Agent_Client_Hints_API) verfügbar.

> [!NOTE]
> Server erhalten derzeit die meisten derselben Informationen, indem sie den {{HTTPHeader("User-Agent")}}-Header analysieren. Aus historischen Gründen enthält dieser Header viele weitgehend irrelevante Informationen und Informationen, die verwendet werden könnten, um einen _bestimmten Benutzer_ zu identifizieren. UA-Client-Hinweise bieten eine effizientere und datenschutzfreundlichere Möglichkeit, die gewünschten Informationen zu erhalten. Es wird erwartet, dass sie schließlich diese ältere Methode ersetzen.

> [!NOTE]
> Benutzeragenten-Client-Hinweise sind innerhalb von [geschützten Frames](/de/docs/Web/API/Fenced_frame_API) nicht verfügbar, da sie sich auf die [Berechtigungsrichtlinien](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation stützen, die zum Datenleak verwendet werden könnte.

### Benutzerpräferenz-Medienfeatures-Client-Hinweise

Benutzerpräferenz-Medienfeatures-Client-Hinweise erlauben es einem Server, Antworten basierend auf den Vorlieben eines Benutzeragenten für [CSS-Medienfeatures](/de/docs/Web/CSS/@media#media_features) wie Farbgebung oder reduzierte Bewegung zu variieren. Header beinhalten: {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}.

### Geräte-Client-Hinweise

Geräte-Client-Hinweise ermöglichen es einem Server, Antworten basierend auf den Geräteeigenschaften, einschließlich verfügbarem Speicher und Bildschirm-Eigenschaften, zu variieren. Header beinhalten: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Netzwerk-Client-Hinweise

Netzwerk-Client-Hinweise erlauben es einem Server, Antworten basierend auf der Wahl des Benutzers, der Netzwerkbandbreite und der Latenz zu variieren. Header beinhalten: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## Siehe auch

- [Client-Hints-Header](/de/docs/Web/HTTP/Reference/Headers#client_hints)
- [`Vary` HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Vary)
- [Client-Hints-Infrastruktur](https://wicg.github.io/client-hints-infrastructure/)
- [Benutzeragenten-Client-Hinweis-API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit Benutzeragenten-Client-Hinweisen](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
