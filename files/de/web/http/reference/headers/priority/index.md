---
title: Priority header
short-title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP-**`Priority`**-Header gibt die Präferenz eines Clients für die Prioritätsreihenfolge an, in der die Antwort mit der angeforderten Ressource im Vergleich zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll.
Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.
Der Server kann diesen Header auch in Antworten einfügen, um anzuzeigen, dass er ein Interesse daran hat, die vom Client angegebenen Priorisierungsvorgaben zu ändern.
In Antworten kann diese Information als Eingabe für den Priorisierungsprozess von Cache-Servern und anderen Servern genutzt werden, die die Antwort weiterleiten.

Der Server ist nicht an die Priorisierung durch den Client gebunden und könnte die Client-Prioritäten lediglich als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Ein Server könnte beispielsweise wissen, dass ein spezifisches Bild für die Benutzererfahrung entscheidend ist und mit höchster Priorität gesendet werden sollte.
Die Priorisierung durch den Server könnte auch von Faktoren wie Netzwerkkongestion beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Cachefähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mithilfe der Header-Felder steuert, die das Caching-Verhalten kontrollieren, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

> [!NOTE]
> Dieser Header ist Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch `PRIORITY_UPDATE`-Frames in HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanforderung nach deren Versand neu zu priorisieren.
> Die Anforderung kann in jeder HTTP-Version gesendet werden.

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
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

  - : Der "urgency" (`u`)-Parameter spezifiziert einen Prioritätswert `<priority>` für die Ressource.
    Der Wert ist ein ganzzahliger Wert zwischen 0 und 7, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standardprioritätswert für Anfragen ist 3.
    Es gibt keinen Standardprioritätswert für Antworten: das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die voraussichtlich keinen Einfluss auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder das Bereitstellen von Software-Updates.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, auf dem Standardprioritätslevel anfordern.
    Die referenzierten Ressourcen sollten anschließend mit Werten angefordert werden, die den relativen Einfluss auf die Benutzererfahrung ihrer Ankunftszeit widerspiegeln.

    Server könnten eine andere Sicht auf die Priorität als der Client haben und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben.
    Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anfragepriorität berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort zeigt, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`)-Direktive zeigt, wenn vorhanden, an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger möglicherweise etwas Nützliches tun kann, sobald ein Block ankommt, anstatt zu warten, bis die gesamte Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die mehreren Anfragen über die Verbindungsbandbreite, mit dem Ergebnis, dass alle Anfragen früher bearbeitet werden, aber insgesamt länger benötigen, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird.
    In diesem Fall sollten Server Antworten mit derselben Dringlichkeit nacheinander in der Reihenfolge senden, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven in diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollen mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegen der Ressourcendringlichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht gesetzt und beträgt daher standardmäßig 3, wobei `i` falsch ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die nachstehende Anfrage ist eine mögliche Folgelast für eine CSS-Datei, die vom HTML verwendet wird.
Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als recht hohe Priorität betrachtet, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das HTTP/1.1-Format, das in den meisten Dokumentationen verwendet wird, wäre etwas wie:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was anzeigt, dass der Server nicht das Gefühl hatte, die Priorität für Zwischenserver ändern zu müssen.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegen der inkrementellen Direktive

Der untenstehende Header zeigt eine Browser-Anfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standardwert von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die untenstehende senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was anzeigt, dass der Server das Verständnis hat, dass das spezielle Bild mit hoher Priorität gesendet werden sollte.

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
