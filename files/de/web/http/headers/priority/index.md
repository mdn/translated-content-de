---
title: Priority
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Priority`** HTTP-Header wird in Anfragen gesendet, um die Präferenz des Clients für die Prioritätsreihenfolge anzugeben, in der die Antwort mit der angeforderten Ressource gesendet werden soll, relativ zu anderen Ressourcenanfragen auf derselben Verbindung. Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.

Der Server ist nicht an die Priorisierung durch den Client gebunden und könnte Anfragen des Clients nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden. Beispielsweise kann ein Server wissen, dass ein bestimmtes Bild entscheidend für die Benutzererfahrung ist und mit höchster Priorität gesendet werden sollte. Die Priorisierung des Servers könnte auch durch Faktoren wie Netzwerküberlastungen beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und der Server wird erwartet, die Cachefähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mit Hilfe der Header-Felder zu steuern, die das Cacheverhalten kontrollieren, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

Der Server kann diesen Header auch in Antworten einschließen, um anzuzeigen, dass er ein Interesse daran hat, die Priorisierung zu ändern. Diese Informationen können dann als Input für den Priorisierungsprozess für Caching-Server und andere Server, die die Antwort weiterleiten, verwendet werden.

> [!NOTE]
> Dieser Header ist ein Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch HTTP/2 und HTTP/3 `PRIORITY_UPDATE`-Frames, die verwendet werden können, um eine Ressourcenanfrage nach deren Sendung neu zu priorisieren.
> Die Anfrage kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
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

  - : Der "urgency" (`u`) Parameter gibt einen Prioritätswert `<priority>` für die Ressource an. Der Wert ist eine Ganzzahl zwischen 0 und 7 einschließlich, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit). Der Standard-Prioritätswert für Anfragen ist 3. Es gibt keinen Standard-Prioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern. Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die wahrscheinlich die Benutzererfahrung nicht beeinflussen, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente anfordern, die voraussichtlich andere Ressourcen auf der Standardprioritätsebene verwenden. Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss auf die Benutzererfahrung ihrer Ankunftszeit widerspiegeln.

    Server können eine andere Ansicht der Priorität als der Client haben und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben. Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anfragepriorität berücksichtigen. Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`) Direktive, falls vorhanden, zeigt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell etwas Nützliches tun kann, sobald ein Datenblock eintrifft, anstatt darauf zu warten, dass die vollständige Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen. Dies verteilt die mehreren Anfragen über die Bandbreite der Verbindung, mit dem Ergebnis, dass alle Anfragen früher verarbeitet werden, aber länger in der Gesamtdauer zur Fertigstellung benötigen.

    Wenn der Browser diese Direktive nicht setzt, gibt er an, dass er die Ressource nicht inkrementell verarbeitet. Server sollten in diesem Fall Antworten mit derselben Dringlichkeit einzeln senden, in der Reihenfolge, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Von Servern wird erwartet, dass sie Direktiven auf diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in der Zukunft hinzugefügt werden, sollen mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Dringlichkeit von Ressourcen festlegen

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei. Die Dringlichkeit ist nicht gesetzt und wird daher auf 3 gesetzt, wobei `i` falsch ist. Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die untenstehende Anfrage ist eine mögliche Folgeanfrage für eine von dem HTML gebrauchte CSS-Datei. Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als ziemlich hohe Priorität ansieht, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell gehandhabt werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2 oder HTTP/3 Spezifikationen.
> Das HTTP/1.1 Format, das in den meisten dieser Dokumentation verwendet wird, wäre etwa so:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen. Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server nicht das Bedürfnis sah, die Priorität für Zwischenserver zu ändern.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Die inkrementelle Direktive festlegen

Der Header unten zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann. In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standard von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie unten senden. In diesem Fall ist die Priorität auf 1 gesetzt, was anzeigt, dass der Server verstanden hat, dass das bestimmte Bild mit hoher Priorität gesendet werden sollte.

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
