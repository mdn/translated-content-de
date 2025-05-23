---
title: Priority header
short-title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Priority`**-Header gibt die Präferenz eines Clients für die Prioritätsreihenfolge an, in der die Antwort mit der angeforderten Ressource im Vergleich zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll.
Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.
Der Server kann diesen Header auch in Antworten aufnehmen, um anzuzeigen, dass er ein Interesse daran hat, die vom Client angegebenen Priorisierungspräferenzen zu ändern.
In Antworten kann diese Information als Eingabe in den Priorisierungsprozess für Caching-Server und andere Server, die die Antwort weiterleiten, verwendet werden.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte Client-Prioritäten nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Ein Server kann beispielsweise wissen, dass ein bestimmtes Bild für das Benutzererlebnis wichtig ist und mit höchster Priorität gesendet werden sollte.
Die Priorisierung des Servers kann auch durch Faktoren wie Netzüberlastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Zwischenspeicherbarkeit oder Anwendbarkeit der zwischengespeicherten Antwort mithilfe der Header-Felder kontrolliert, die das Cache-Verhalten steuern, wie z. B. {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

> [!NOTE]
> Dieser Header ist ein Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch `PRIORITY_UPDATE`-Frames in HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanforderung nach dem Senden neu zu priorisieren.
> Die Anfrage kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
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
    Der Wert ist eine ganze Zahl zwischen 0 und 7 inklusive, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standardprioritätswert für Anfragen ist 3.
    Es gibt keinen Standardprioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die voraussichtlich keinen Einfluss auf das Benutzererlebnis haben, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente, die voraussichtlich andere Ressourcen verwenden, auf der Standardprioritätsebene anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss ihrer Ankunftszeit auf das Benutzererlebnis widerspiegeln.

    Server können eine andere Ansicht zur Priorität haben als der Client und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben.
    Der Zwischenserver kann diesen Wert neben der ursprünglichen Anfragpriorität berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`)-Direktive gibt an, ob vorhanden, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell etwas Nützliches tun kann, sobald ein Chunk eintrifft, anstatt darauf zu warten, dass die gesamte Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die mehreren Anfragen über die Verbindungsbandbreite, mit dem Ergebnis, dass alle Anfragen früher bearbeitet werden, aber insgesamt länger dauern, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird.
    Server sollten in diesem Fall Antworten mit derselben Dringlichkeit nacheinander senden, in der Reihenfolge, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven in diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollten mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegen der Ressourcendringlichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht festgelegt und wird daher auf 3 gesetzt, wobei `i` falsch ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die nachfolgende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die von dem HTML verwendet wird.
Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als ziemlich hohe Priorität betrachtet, aber `i` ist nicht gesetzt, weil die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das in der meisten dieser Dokumentation verwendete HTTP/1.1-Format würde etwa so aussehen:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server nicht der Meinung war, dass er die Priorität für Zwischenserver ändern musste.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegen der inkrementellen Direktive

Der untenstehende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standardwert von 3) und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie unten senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was darauf hinweist, dass der Server ein Verständnis davon hat, dass dieses spezielle Bild mit hoher Priorität gesendet werden sollte.

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
