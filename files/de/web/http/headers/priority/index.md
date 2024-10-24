---
title: Priority
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP-Header **`Priority`** signalisiert die Präferenz des Clients für die Reihenfolge, in der die Antwort, die die angeforderte Ressource enthält, relativ zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll.
Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.
Der Server kann diesen Header auch in Antworten verwenden, um anzuzeigen, dass er Interesse daran hat, die vom Client angezeigten Priorisierungsvorlieben zu ändern.
In Antworten kann diese Information als Eingabe für den Priorisierungsprozess für Caching-Server und andere Server, die die Antwort weiterleiten, verwendet werden.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte Client-Prioritäten nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Zum Beispiel kann ein Server wissen, dass ein bestimmtes Bild entscheidend für die Benutzererfahrung ist und sollte mit höchster Priorität gesendet werden.
Die Server-Priorisierung kann auch durch Faktoren wie Netzwerküberlastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und der Server wird erwartet, die Zwischenspeicherbarkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mittels der Header-Felder, die das Caching-Verhalten kontrollieren, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}, zu steuern.

> [!NOTE]
> Dieser Header ist ein Teil des "Extensible Prioritization Scheme for HTTP", das in {{rfc("9218")}} definiert ist.
> Es gibt auch `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanforderung nach deren Versand neu zu priorisieren.
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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Der "urgency" (`u`)-Parameter gibt einen Prioritätswert `<priority>` für die Ressource an.
    Der Wert ist eine ganze Zahl zwischen 0 und 7 inklusive, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standardprioritätswert für Anforderungen ist 3.
    Es gibt keinen Standardprioritätswert für Antworten: das Fehlen des Headers in einer Antwort bedeutet, dass der Server sich entschieden hat, die Client-Priorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die voraussichtlich keinen Einfluss auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder das Ausliefern von Software-Updates.

    Browser sollten Dokumente, die voraussichtlich andere Ressourcen verwenden, mit dem Standardprioritätslevel anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die die relative Auswirkung ihrer Ankunftszeit auf die Benutzererfahrung widerspiegeln.

    Server können eine andere Sicht auf die Priorität als der Client haben und können mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischenserver zu senden.
    Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort bedeutet, dass der Server sich entschieden hat, die Client-Priorität nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`)-Direktive, falls vorhanden, zeigt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger möglicherweise etwas Nützliches tun kann, sobald ein Abschnitt angekommen ist, anstatt darauf zu warten, dass die komplette Ressource verfügbar wird.

    Wenn ein Browser diese Direktive setzt, kann der Server sich entscheiden, alle inkrementellen Anfragen mit der gleichen Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die mehreren Anfragen über die Verbindungskapazität, mit dem Ergebnis, dass alle Anfragen früher begonnen werden zu verarbeiten, aber insgesamt länger brauchen, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, signalisiert er, dass er die Ressource nicht inkrementell verarbeiten wird.
    In diesem Fall sollten Server Antworten mit gleicher Dringlichkeit eine nach der anderen senden, in der Reihenfolge, in der ihre zugehörigen Anfragen erzeugt wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven ignorieren, die sie auf diesem Header nicht verstehen.
> Es wird erwartet, dass neue Direktiven, die in Zukunft hinzugefügt werden, mit diesen existierenden Direktiven kompatibel sind, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegen der Ressourcenpriorität

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht gesetzt und entspricht daher dem Standardwert 3, wobei `i` auf false gesetzt ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die Anfrage unten ist eine mögliche Anschlussanforderung für eine vom HTML verwendete CSS-Datei.
Die Dringlichkeit ist auf 2 gesetzt, was darauf hinweist, dass der Browser sie als ziemlich hohe Priorität betrachtet, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das in den meisten dieser Dokumentation verwendete HTTP/1.1-Format wäre etwa:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte folgendermaßen aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was bedeutet, dass der Server nicht der Meinung war, dass er die Priorität für Zwischenserver ändern musste.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Festlegen der inkrementellen Direktive

Der untenstehende Header zeigt eine Browseranforderung für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standard von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die untenstehende senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was darauf hindeutet, dass der Server die Ansicht hat, dass das spezifische Bild mit hoher Priorität gesendet werden sollte.

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
