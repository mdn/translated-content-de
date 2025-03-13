---
title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Priority`**-Header gibt die Präferenz eines Clients für die Prioritätsreihenfolge an, in der die Antwort mit der angeforderten Ressource im Vergleich zu anderen Ressourcenanfragen auf derselben Verbindung gesendet werden soll.
Wenn der Header in der Anfrage nicht angegeben wird, wird eine Standardpriorität angenommen.
Der Server kann diesen Header auch in Antworten aufnehmen, um anzuzeigen, dass er ein Interesse daran hat, die vom Client angegebenen Prioritäten zu ändern.
In Antworten kann diese Information als Eingabe in den Priorisierungsprozess für zwischenspeichernde Server und andere Server genutzt werden, die die Antwort weiterleiten.

Der Server ist nicht an die Priorisierung durch den Client gebunden und könnte die Clientprioritäten nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Beispielsweise kann ein Server wissen, dass ein bestimmtes Bild wichtig für die Benutzererfahrung ist und mit der höchsten Priorität gesendet werden sollte.
Die Priorisierung durch den Server kann auch durch Faktoren wie Netzwerküberlastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Cachefähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mithilfe der Header-Felder steuert, die das Caching-Verhalten kontrollieren, wie z.B. {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

> [!NOTE]
> Dieser Header ist ein Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch `PRIORITY_UPDATE`-Frames in HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanfrage nach dem Senden neu zu priorisieren.
> Die Anfrage kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Priority: u=<priority>
Priority: i
Priority: u=<priority>, i
```

## Direktiven

- `u=<priority>`

  - : Der „urgency“ (`u`)-Parameter spezifiziert einen Prioritätswert `<priority>` für die Ressource.
    Der Wert ist eine Ganzzahl zwischen 0 und 7 einschließlich, in absteigender Prioritätsreihenfolge (0 ist die höchste Dringlichkeit).
    Der Standardprioritätswert für Anfragen ist 3.
    Für Antworten gibt es keinen Standardprioritätswert: das Fehlen des Headers in einer Antwort zeigt an, dass der Server beschlossen hat, die Clientpriorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die voraussichtlich keinen Einfluss auf die Benutzererfahrung haben, wie z.B. Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente, die voraussichtlich andere Ressourcen verwenden, auf dem Standardprioritätsniveau anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss ihrer Ankunftszeit auf die Benutzererfahrung widerspiegeln.

    Server können eine andere Sicht auf die Priorität haben als der Client und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben.
    Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anforderung berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Clientpriorität nicht zu ändern.

- `i`

  - : Die `incremental` (`i`)-Direktive, falls vorhanden, gibt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell etwas Nützliches tun kann, sobald ein Teil ankommt, anstatt auf die vollständige Ressource zu warten.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit der gleichen Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die mehreren Anfragen über die Verbindungsbandbreite, sodass alle Anfragen früher verarbeitet werden, aber insgesamt länger zur Fertigstellung benötigen.

    Wenn der Browser diese Direktive nicht setzt, zeigt das an, dass er die Ressource nicht inkrementell verarbeiten wird.
    In diesem Fall sollten Server die Antworten mit der gleichen Dringlichkeit nacheinander in der Reihenfolge senden, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven in diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollen mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Ressourcendringlichkeit festlegen

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht gesetzt und standardmäßig auf 3, wobei `i` falsch ist.
Dies ist die übliche Einstellung für ein Dokument, das andere Ressourcen enthält.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die folgende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die vom HTML verwendet wird.
Die Dringlichkeit ist auf 2 gesetzt und zeigt an, dass der Browser sie als ziemlich hohe Priorität ansieht, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell gehandhabt werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das HTTP/1.1-Format, das in den meisten dieser Dokumentationen verwendet wird, wäre etwa:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server nicht das Bedürfnis sah, die Priorität für Zwischenserver zu ändern.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Die inkrementelle Direktive festlegen

Der folgende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standardwert von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie unten senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was darauf hinweist, dass der Server ein Verständnis dafür hat, dass das bestimmte Bild mit hoher Priorität gesendet werden sollte.

```http
:status: 200
content-type = image/jpeg
content-length = 610
...
priority = u=1, i
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Vary")}}
