---
title: Priorität
slug: Web/HTTP/Headers/Priority
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der **`Priority`** HTTP-Header wird in Anfragen gesendet, um die Präferenz eines Clients für die Prioritätsreihenfolge anzugeben, in der die Antwort mit der angeforderten Ressource gesendet werden soll, relativ zu anderen Ressourcenanforderungen auf derselben Verbindung. Wenn der Header in der Anfrage nicht angegeben ist, wird eine Standardpriorität angenommen.

Der Server ist nicht an die Priorisierung des Clients gebunden und könnte Client-Anfragen nur als Hinweise für seinen eigenen Priorisierungsprozess verwenden.
Ein Beispiel: Ein Server könnte wissen, dass ein bestimmtes Bild für die Benutzererfahrung entscheidend ist und mit höchster Priorität gesendet werden sollte.
Die Serverpriorisierung könnte auch von Faktoren wie Netzwerkkongestion beeinflusst werden.

Diese Anfrage kann zwischengespeichert werden, und es wird erwartet, dass der Server die Zwischenspeicherbarkeit oder die Anwendbarkeit der zwischengespeicherten Antwort durch die Header-Felder steuert, die das Cache-Verhalten kontrollieren, wie {{HTTPHeader("Cache-Control")}} und {{HTTPHeader("Vary")}}.

Der Server kann diesen Header auch in Antworten enthalten, um anzuzeigen, dass er an einer Änderung der Priorisierung interessiert ist.
Diese Information kann dann als Eingabe für den Priorisierungsprozess für zwischenspeichernde Server und andere Server, die die Antwort weiterleiten, verwendet werden.

> [!NOTE]
> Dieser Header ist ein Teil des "Extensible Prioritization Scheme for HTTP", definiert in {{rfc("9218")}}.
> Es gibt auch `PRIORITY_UPDATE`-Frames für HTTP/2 und HTTP/3, die verwendet werden können, um eine Ressourcenanforderung nach dem Senden neu zu priorisieren.
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
    Der Wert ist eine ganze Zahl zwischen 0 und 7 inklusive, in absteigender Reihenfolge der Priorität (0 ist die höchste Dringlichkeit).
    Der Standard-Prioritätswert für Anfragen ist 3.
    Es gibt keinen Standard-Prioritätswert für Antworten: Das Fehlen des Headers in einer Antwort zeigt an, dass der Server beschlossen hat, die Client-Priorität nicht zu ändern.
    Eine Priorität von 7 sollte nur für Ressourcen verwendet werden, die wahrscheinlich die Benutzererfahrung nicht beeinflussen, wie Hintergrundaufgaben oder die Bereitstellung von Software-Updates.

    Browser sollten Dokumente, die wahrscheinlich andere Ressourcen verwenden, auf der Standardprioritätsstufe anfordern.
    Die referenzierten Ressourcen sollten dann mit Werten angefordert werden, die den relativen Einfluss auf die Benutzererfahrung zu ihrem Ankunftszeitpunkt widerspiegeln.

    Server könnten eine andere Sicht auf die Priorität als der Client haben und könnten mit einem anderen Wert antworten, um einen Prioritätshinweis an Zwischensysteme zu geben.
    Das Zwischensystem könnte diesen Wert zusammen mit der ursprünglichen Anforderungspriorität berücksichtigen.
    Das Fehlen des `Priority`-Headers in der Antwort zeigt an, dass der Server die Client-Priorität nicht ändern wollte.

- `i`

  - : Die inkrementelle (`i`) Direktive, falls vorhanden, gibt an, dass eine HTTP-Antwort inkrementell verarbeitet werden kann.

    Ressourcen, die inkrementell verarbeitet werden können, sind solche, bei denen der Empfänger potenziell nützliche Aktionen ausführen kann, sobald ein Teil ankommt, anstatt darauf zu warten, dass die gesamte Ressource verfügbar ist.

    Wenn ein Browser diese Direktive setzt, könnte der Server alle inkrementellen Anfragen gleichzeitig mit der gleichen Dringlichkeit bedienen.
    Dadurch werden die mehreren Anfragen über die Verbindungsbandbreite verteilt, mit dem Ergebnis, dass alle Anfragen früher zu verarbeiten beginnen, aber insgesamt länger dauern, um abgeschlossen zu werden.

    Wenn der Browser diese Direktive nicht setzt, zeigt er an, dass er die Ressource nicht inkrementell verarbeiten wird.
    Server sollten in diesem Fall Antworten mit der gleichen Dringlichkeit nacheinander senden, in der Reihenfolge, in der ihre zugeordneten Anforderungen generiert wurden.

> [!NOTE]
> Es wird erwartet, dass Server Direktiven dieses Headers, die sie nicht verstehen, ignorieren.
> Neue Direktiven, die in Zukunft hinzugefügt werden, sollten mit diesen bestehenden Direktiven kompatibel sein, sodass sie sicher ignoriert werden können.

## Beispiele

### Festlegung der Ressourcendringlichkeit

Das folgende Beispiel zeigt eine Anforderung für eine HTML-Datei.
Die Dringlichkeit ist nicht gesetzt und wird daher standardmäßig auf 3 gesetzt, wobei `i` false ist.
Dies ist die normale Einstellung für ein Dokument, das andere Ressourcen besitzt.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /index.html
```

Die untenstehende Anfrage ist eine mögliche Folgeanfrage für eine CSS-Datei, die von der HTML-Datei verwendet wird.
Die Dringlichkeit ist auf 2 gesetzt, was anzeigt, dass der Browser sie als ziemlich hohe Priorität betrachtet, aber `i` ist nicht gesetzt, da die CSS-Datei nicht inkrementell verarbeitet werden kann.

```http
:method = GET
:scheme = https
:authority = example.net
:path = /style.css
priority = u=2
```

> [!NOTE]
> Die obigen Anfragen verwenden das menschenlesbare Format aus den HTTP/2- oder HTTP/3-Spezifikationen.
> Das HTTP/1.1-Format, das in den meisten dieser Dokumentation verwendet wird, wäre ungefähr so:
>
> ```http
> GET /style.css HTTP/1.1
> Host: example.net
> Priority: u=2
> ```

Eine Antwort könnte wie unten gezeigt aussehen.
Beachten Sie, dass in diesem Fall die `priority` nicht angegeben ist, was darauf hinweist, dass der Server die Priorität für Zwischensysteme nicht ändern wollte.

```http
:status: 200
content-type: text/css
content-length: 610
date: [aktuelles Datum]
```

### Festlegung der inkrementellen Direktive

Der folgende Header zeigt eine Browseranfrage für ein Bild, das inkrementell gerendert werden kann.
In diesem Fall ist die Priorität auf 4 gesetzt (niedriger als der Standardwert von 3), und `i` ist gesetzt, um anzuzeigen, dass der Client die JPG-Datei inkrementell verarbeiten kann.

```http
:method = GET
:path = /image.jpg
:scheme = https
:authority = example.net
priority = u=4, i
```

Der Server könnte eine Antwort wie unten gezeigt senden.
In diesem Fall ist die Priorität auf 1 gesetzt, was anzeigt, dass der Server verstanden hat, dass ein bestimmtes Bild mit hoher Priorität gesendet werden sollte.

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
