---
title: Priority header
short-title: Priority
slug: Web/HTTP/Reference/Headers/Priority
l10n:
  sourceCommit: 5ada695d77acd2bab29ecb003effc563e5bab691
---

Der HTTP **`Priority`**-Header gibt die Präferenz eines Clients für die Reihenfolge an, in der die Antwort mit der angeforderten Ressource im Vergleich zu anderen Ressourcenanforderungen auf derselben Verbindung gesendet werden soll.
Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.
Der Server kann diesen Header auch in Antworten einfügen, um anzugeben, dass er ein Interesse daran hat, die Priorisierungspräferenzen zu ändern, die der Client angegeben hat.
In Antworten kann diese Information als Input für den Priorisierungsprozess von Caching-Servern und anderen Servern, die die Antwort weiterleiten, verwendet werden.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte nur Client-Prioritäten als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Zum Beispiel könnte ein Server wissen, dass ein bestimmtes Bild entscheidend für die Benutzererfahrung ist und mit der höchsten Priorität gesendet werden sollte.
Die Priorisierung des Servers könnte auch durch Faktoren wie Netzwerküberlastung beeinflusst werden.

Diese Anfrage könnte zwischengespeichert werden, und es wird erwartet, dass der Server die Cachefähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort über die Header-Felder kontrolliert, die das Cache-Verhalten steuern, wie z.B. {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

> [!NOTE]
> Dieser Header ist ein Teil des "Erweiterbaren Priorisierungsschemas für HTTP", das in {{rfc("9218")}} definiert ist.
> Es gibt auch `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanfrage nach dem Senden neu zu priorisieren.
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
  - : Der "Dringlichkeits"-Parameter (`u`) spezifiziert einen Prioritätswert `<priority>` für die Ressource.
    Der Wert ist eine ganze Zahl zwischen 0 und 7 inklusive, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standardprioritätswert für Anfragen ist 3.
    Es gibt keinen Standardprioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Client-Priorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die die Benutzererfahrung wahrscheinlich nicht beeinträchtigen, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, auf dem Standardprioritätslevel anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss ihrer Ankunftszeit auf die Benutzererfahrung widerspiegeln.

    Server könnten eine andere Sichtweise auf die Priorität als der Client haben und mit einem anderen Wert antworten, um einen Prioritätshinweis an zwischengeschaltete Server zu geben.
    Der zwischengeschaltete Server könnte diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Client-Priorität nicht zu ändern.

- `i`
  - : Die inkrementelle (`i`) Direktive, falls vorhanden, zeigt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell etwas Nützliches tun kann, sobald ein Chunk ankommt, anstatt darauf zu warten, dass die vollständige Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, könnte der Server sich entscheiden, alle inkrementellen Anfragen mit der gleichen Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die mehrfachen Anfragen über die Verbindungsbandbreite, mit dem Ergebnis, dass alle Anfragen früher verarbeitet werden, aber länger insgesamt benötigen, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird.
    In diesem Fall sollten die Server Antworten mit derselben Dringlichkeit einzeln senden, in der Reihenfolge, in der ihre zugehörigen Anfragen erstellt wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven in diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollen mit diesen bestehenden Direktiven kompatibel sein, so dass sie sicher ignoriert werden können.

## Beispiele

### Einstellen der Ressourcendringlichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht gesetzt und somit ist der Standardwert 3, wobei `i` als false gesetzt ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die folgende Anfrage ist eine mögliche Weiterleitungsanfrage für eine CSS-Datei, die von dem HTML verwendet wird.
Die Dringlichkeit wird auf 2 gesetzt, was andeutet, dass der Browser sie als ziemlich hohe Priorität betrachtet, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das HTTP/1.1-Format, das in den meisten dieser Dokumentation verwendet wird, wäre etwa so etwas:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht spezifiziert ist, was darauf hindeutet, dass der Server nicht das Bedürfnis hatte, die Priorität für zwischengeschaltete Server zu ändern.

```http
:status: 200
content-type: text/css
content-length: 610
date: [current date]
```

### Einstellen der inkrementellen Direktive

Der unten stehende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall wird die Priorität auf 4 gesetzt (niedriger als der Standard von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die unten stehende senden.
In diesem Fall wird die Priorität auf 1 gesetzt, was darauf hinweist, dass der Server die Auffassung hat, dass dieses bestimmte Bild mit hoher Priorität gesendet werden sollte.

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
