---
title: Priority
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Priority`** HTTP-Header wird in Anfragen gesendet, um anzugeben, welche Priorität die Antwort auf die angeforderte Ressource relativ zu anderen Ressourcenanfragen auf derselben Verbindung haben soll. Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte die Anfragen des Clients nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden. Zum Beispiel kann ein Server wissen, dass ein bestimmtes Bild für die Benutzererfahrung entscheidend ist und deshalb mit höchster Priorität gesendet werden sollte. Die Priorisierung des Servers kann auch durch Faktoren wie Netzwerküberlastung beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und der Server sollte die Cachefähigkeit oder die Anwendbarkeit der zwischengespeicherten Antwort mit den Header-Feldern steuern, die das Caching-Verhalten kontrollieren, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

Der Server kann diesen Header auch in Antworten einfügen, um anzuzeigen, dass er an einer Änderung der Priorisierung interessiert ist. Diese Information kann dann als Eingabe für den Priorisierungsprozess von zwischenspeichernden Servern und anderen Servern, die die Antwort weiterleiten, verwendet werden.

> [!NOTE]
> Dieser Header ist ein Teil des "Erweiterbaren Priorisierungsschemas für HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanfrage nach dem Versand neu zu priorisieren.
> Die Anfrage kann in jeder HTTP-Version gesendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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

  - : Der "Dringlichkeit" (`u`) Parameter gibt einen Prioritätswert `<priority>` für die Ressource an.
    Der Wert ist eine ganze Zahl zwischen 0 und 7, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standardwert der Priorität für Anfragen ist 3.
    Es gibt keinen Standardprioritätswert für Antworten: das Fehlen des Headers in einer Antwort zeigt an, dass der Server sich entschieden hat, die Clientpriorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die wahrscheinlich keine Auswirkungen auf die Benutzererfahrung haben, wie Hintergrundaufgaben oder die Bereitstellung von Softwareaktualisierungen.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, mit der Standardprioritätsstufe anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die die relative Auswirkung ihrer Ankunftszeit auf die Benutzererfahrung widerspiegeln.

    Server können eine andere Sicht auf die Priorität als der Client haben und können mit einem anderen Wert antworten, um einen Hinweis auf die Priorität für Zwischenserver zu geben.
    Der Zwischenserver kann diesen Wert zusammen mit der ursprünglichen Anfragepriorität berücksichtigen.
    Das Fehlen des `Priority` Headers in der Antwort zeigt an, dass der Server sich entschieden hat, die Clientpriorität nicht zu ändern.

- `i`

  - : Die inkrementelle (`i`) Direktive zeigt an, ob vorhanden, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell etwas Nützliches tun kann, sobald ein Teil ankommt, anstatt darauf zu warten, dass die gesamte Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, kann der Server wählen, alle inkrementellen Anfragen mit derselben Dringlichkeit gleichzeitig zu bedienen.
    Dies verteilt die Mehrfachanfragen über die Verbindungsbandbreite, wodurch alle Anfragen früher bearbeitet werden, es jedoch länger dauert, bis sie vollständig abgeschlossen sind.

    Wenn der Browser diese Direktive nicht setzt, signalisiert er, dass er die Ressource nicht inkrementell verarbeitet.
    In diesem Fall sollten Server Antworten mit derselben Dringlichkeit nacheinander in der Reihenfolge senden, in der ihre zugehörigen Anfragen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven auf diesem Header ignorieren, die sie nicht verstehen.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollten mit diesen vorhandenen Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegen der Ressourcendringlichkeit

Das folgende Beispiel zeigt eine Anfrage für eine HTML-Datei.
Die Dringlichkeit ist nicht festgelegt und wird daher auf 3 standardmäßig gesetzt, wobei `i` falsch ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die untenstehende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die vom HTML verwendet wird.
Die Dringlichkeit ist auf 2 gesetzt, was darauf hinweist, dass der Browser sie als ziemlich hohe Priorität ansieht, aber `i` ist nicht gesetzt, weil die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obenstehenden Anfragen verwenden das menschenlesbare Format aus den HTTP/2 oder HTTP/3 Spezifikationen.
> Das HTTP/1.1 Format, das in den meisten dieser Dokumentationen verwendet wird, wäre in etwa:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server nicht die Notwendigkeit sah, die Priorität für Zwischenserver zu ändern.

```http
:status: 200
content-type: text/css
content-length: 610
date: [aktuelles Datum]
```

### Festlegen der inkrementellen Direktive

Der untenstehende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standard von 3), und `i` ist gesetzt, um anzugeben, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie die untenstehende senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was darauf hinweist, dass der Server Verständnis dafür hat, dass das bestimmte Bild mit hoher Priorität gesendet werden sollte.

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
