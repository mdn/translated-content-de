---
title: Priority
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Priority`** Header gibt die Präferenz eines Clients für die Prioritätenreihenfolge an, in der die Antwort mit der angeforderten Ressource im Verhältnis zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll. Wenn der Header in der Anforderung nicht angegeben wird, wird eine Standardpriorität angenommen. Der Server kann diesen Header auch in Antworten einschließen, um anzuzeigen, dass er ein Interesse daran hat, die von dem Client angegebenen Prioritätseinstellungen zu ändern. In Antworten kann diese Information als Input für den Priorisierungsprozess für Caching-Server und andere Server, die die Antwort weiterleiten, verwendet werden.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte Client-Prioritäten nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden. Zum Beispiel könnte ein Server wissen, dass ein spezifisches Bild für die Benutzererfahrung entscheidend ist und sollte daher mit der höchsten Priorität gesendet werden. Die Priorisierung des Servers könnte auch durch Faktoren wie Netzwerkkongestion beeinflusst werden.

Diese Anfrage könnte zwischengespeichert werden, und der Server wird erwartet, die Cachebarkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mit den Headerfeldern, die das Caching-Verhalten steuern, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}, zu kontrollieren.

> [!NOTE]
> Dieser Header ist Teil des "Extensible Prioritization Scheme for HTTP", das in {{rfc("9218")}} definiert ist. Es gibt auch HTTP/2- und HTTP/3-`PRIORITY_UPDATE`-Frames, die verwendet werden können, um die Priorität einer Ressourcenanforderung nach dem Senden neu zu priorisieren. Die Anfrage kann in jeder HTTP-Version gesendet werden.

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

  - : Der "urgency" (`u`) Parameter gibt einen Prioritätswert `<priority>` für die Ressource an. Der Wert ist eine ganze Zahl zwischen 0 und 7 einschließlich, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit). Der Standard-Prioritätswert für Anforderungen ist 3. Es gibt keinen Standard-Prioritätswert für Antworten: das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern. Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die voraussichtlich keinen Einfluss auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente anfordern, die wahrscheinlich andere Ressourcen auf der Standard-Prioritätsebene verwenden. Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss ihrer Ankunftszeit auf die Benutzererfahrung widerspiegeln.

    Server könnten eine andere Ansicht zur Priorität als der Client haben und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben. Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen. Das Fehlen des `Priority` Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Priorität des Clients nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`) Direktive, falls vorhanden, zeigt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell nützlich sein kann, sobald ein Teil ankommt, anstatt darauf zu warten, dass die vollständige Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen. Dies verteilt die mehreren Anfragen über die Verbindungsbandbreite, so dass alle Anfragen früher verarbeitet werden, aber insgesamt länger brauchen, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt es an, dass er die Ressource nicht inkrementell verarbeiten wird. In diesem Fall sollten Server Antworten mit derselben Dringlichkeit nacheinander senden, in der Reihenfolge, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven, die sie nicht verstehen, auf diesem Header ignorieren. Neue Direktiven, die in Zukunft hinzugefügt werden, sollen zu diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegung der Ressourcen-Dringlichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei. Die Dringlichkeit ist nicht festgelegt und hat daher den Standardwert 3, wobei `i` auf falsch gesetzt ist. Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die nachfolgende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die vom HTML verwendet wird. Die Dringlichkeit wird auf 2 gesetzt, was darauf hinweist, dass der Browser sie für ziemlich hochprioritär hält, jedoch ist `i` nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen. Das in dieser Dokumentation meist verwendete HTTP/1.1 Format wäre etwa so:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen. Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server nicht der Meinung war, dass er die Priorität für Zwischenserver ändern musste.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegung der inkrementellen Direktive

Der folgende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann. In diesem Fall wird die Priorität auf 4 gesetzt (niedriger als der Standardwert von 3), und `i` wird gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die unten dargestellte senden. In diesem Fall wird die Priorität auf 1 gesetzt, was anzeigt, dass der Server weiß, dass das spezielle Bild mit hoher Priorität gesendet werden sollte.

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
