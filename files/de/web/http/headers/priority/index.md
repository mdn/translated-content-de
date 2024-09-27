---
title: Priority
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Priority`** HTTP-Header wird in Anfragen gesendet, um die Prioritätsreihenfolge anzugeben, in der die Antwort mit der angeforderten Ressource relativ zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll. Wenn der Header in der Anfrage nicht angegeben ist, wird standardmäßig eine Priorität angenommen.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte Clientanfragen nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden. Beispielsweise könnte ein Server wissen, dass ein bestimmtes Bild für die Benutzererfahrung entscheidend ist und mit höchster Priorität gesendet werden sollte. Die Priorisierung des Servers könnte auch durch Faktoren wie Netzwerküberlastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Cache-Fähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mit den Header-Feldern kontrolliert, die das Caching-Verhalten steuern, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

Der Server kann diesen Header auch in Antworten einschließen, um anzuzeigen, dass er Interesse an einer Änderung der Priorisierung hat. Diese Informationen können dann als Eingabe in den Priorisierungsprozess für zwischengeschaltete Server und andere Server, die die Antwort weiterleiten, verwendet werden.

> [!NOTE]
> Dieser Header ist Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch HTTP/2 und HTTP/3 `PRIORITY_UPDATE` Frames, die verwendet werden können, um eine Ressourcenanforderung nach dem Senden erneut zu priorisieren.
> Die Anforderung kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Anforderungs-Header](/de/docs/Glossary/Request_header),
        [Antwort-Header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener-Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

  - : Der "Dringlichkeit" (`u`) Parameter gibt einen Prioritätswert `<priority>` für die Ressource an. Der Wert ist eine ganze Zahl zwischen 0 und 7 inklusiv, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit). Der Standard-Prioritätswert für Anfragen ist 3. Es gibt keinen Standard-Prioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server beschlossen hat, die Clientpriorität nicht zu ändern. Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die wahrscheinlich keinen Einfluss auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder Software-Updates.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, auf dem Standard-Prioritätsniveau anfordern. Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss auf die Benutzererfahrung durch ihre Ankunftszeiten widerspiegeln.

    Server könnten eine andere Ansicht der Priorität als der Client haben und mit einem anderen Wert antworten, um einen Prioritätshinweis an zwischengeschaltete Server zu geben. Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen. Das Fehlen des `Priority` Headers in der Antwort zeigt an, dass der Server beschlossen hat, die Clientpriorität nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`) Direktive, falls vorhanden, zeigt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potentiell etwas Nützliches tun kann, sobald ein Teil ankommt, anstatt darauf zu warten, dass die komplette Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, könnte der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen. Dies verteilt die mehreren Anfragen über die Verbindungsbandbreite, mit dem Ergebnis, dass alle Anfragen früher begonnen werden zu verarbeiten, aber insgesamt länger benötigen, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird. In diesem Fall sollten Server Antworten mit derselben Dringlichkeit nacheinander senden, in der Reihenfolge, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven in diesem Header ignorieren, die sie nicht verstehen. Neue Direktiven, die in Zukunft hinzugefügt werden, sollten mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Dringlichkeit von Ressourcen festlegen

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei. Die Dringlichkeit ist nicht festgelegt und wird daher auf 3 gesetzt, wobei `i` falsch ist. Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die untenstehende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die vom HTML verwendet wird. Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als relativ hohe Priorität ansieht, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die oben genannten Anfragen verwenden das menschenlesbare Format aus den HTTP/2 oder HTTP/3 Spezifikationen. Das in den meisten Dokumentationen verwendete HTTP/1.1 Format wäre etwa:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen. Beachten Sie, dass in diesem Fall die `Priorität` nicht angegeben ist, was darauf hindeutet, dass der Server nicht der Meinung war, dass es notwendig sei, die Priorität für zwischengeschaltete Server zu ändern.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegen der inkrementellen Direktive

Der unten gezeigte Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann. In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standard von 3) und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die unten gezeigte senden. In diesem Fall ist die Priorität auf 1 gesetzt, was darauf hindeutet, dass der Server der Meinung ist, dass ein bestimmtes Bild mit hoher Priorität gesendet werden sollte.

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
