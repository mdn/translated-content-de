---
title: Priority header
short-title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Priority`**-Header zeigt die Präferenz des Clients für die Prioritätsreihenfolge an, in der die Antwort mit der angeforderten Ressource gesendet werden soll, im Vergleich zu anderen Ressourcenanforderungen auf derselben Verbindung. Wenn der Header in der Anfrage nicht spezifiziert ist, wird eine Standardpriorität angenommen. Der Server kann diesen Header auch in Antworten einfügen, um anzuzeigen, dass er ein Interesse daran hat, die vom Client beworbenen Priorisierungsvorlieben zu ändern. In Antworten kann diese Information als Eingabe für den Priorisierungsprozess bei Caching-Servern und anderen Servern, die die Antwort weiterleiten, verwendet werden.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte die Client-Prioritäten nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden. Beispielsweise könnte ein Server wissen, dass ein bestimmtes Bild entscheidend für die Benutzererfahrung ist und mit höchster Priorität gesendet werden sollte. Die Serverpriorisierung könnte auch durch Faktoren wie Netzwerkauslastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Zwischenspeicherfähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mit den Header-Feldern steuert, die das Caching-Verhalten bestimmen, wie z. B. {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

> [!NOTE]
> Dieser Header ist Teil des "Extensible Prioritization Scheme for HTTP", das in {{rfc("9218")}} definiert ist.
> Es gibt auch `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanforderung nach dem Senden neu zu priorisieren.
> Die Anforderung kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
    Der Wert ist eine Ganzzahl zwischen 0 und 7, in absteigender Reihenfolge der Priorität (0 hat die höchste Dringlichkeit).
    Der Standard-Prioritätswert für Anfragen ist 3.
    Es gibt keinen Standard-Prioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server entschieden hat, die Client-Priorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die wahrscheinlich keinen Einfluss auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, auf der Standardprioritätsstufe anfordern. Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss auf die Benutzererfahrung durch ihre Ankunftszeit widerspiegeln.

    Server können eine andere Sichtweise auf die Priorität haben als der Client und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu geben. Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen. Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server entschieden hat, die Client-Priorität nicht zu ändern.

- `i`
  - : Die inkrementelle (`i`)-Direktive, falls vorhanden, gibt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger möglicherweise etwas Nützliches tun kann, sobald ein Teil ankommt, anstatt darauf zu warten, dass die vollständige Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, dann kann der Server entscheiden, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen. Dies verteilt die mehreren Anfragen über die Verbindungskapazität, mit dem Ergebnis, dass alle Anfragen früher bearbeitet werden, aber insgesamt länger für den Abschluss benötigen.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird. Server sollten in diesem Fall Antworten mit derselben Dringlichkeit nacheinander senden, in der Reihenfolge, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven ignorieren, die sie in diesem Header nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollen mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegen der Ressourcendringleichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei. Die Dringlichkeit ist nicht gesetzt und wird daher auf 3, mit `i` als false, standardisiert. Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die untenstehende Anfrage ist eine mögliche Folgeanforderung für eine CSS-Datei, die vom HTML verwendet wird. Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als ziemlich hohe Priorität ansieht, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen. Das HTTP/1.1-Format, das in den meisten Teilen dieser Dokumentation verwendet wird, sähe etwa so aus:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen. Beachten Sie, dass in diesem Fall die `priority` nicht spezifiziert ist, was anzeigt, dass der Server nicht das Gefühl hatte, dass er die Priorität für Zwischenserver ändern musste.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegen der inkrementellen Direktive

Der untenstehende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann. In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standard von 3) und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die untenstehende senden. In diesem Fall ist die Priorität auf 1 gesetzt, was anzeigt, dass der Server verstanden hat, dass das spezifische Bild mit hoher Priorität gesendet werden sollte.

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
