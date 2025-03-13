---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus zum Austausch von Daten zwischen einem Server und einem Client im HTTP-Protokoll.
Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die die Antwort des Servers auf eine Anfrage darstellen.

Entwickler erstellen selten, wenn überhaupt, HTTP-Nachrichten von Grund auf neu.
Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die HTTP-Nachrichten auf zuverlässige und effiziente Weise erstellt.
Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis zu HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben.
In HTTP/2 sind Nachrichten in binäre Rahmen eingebettet, was es ein wenig schwieriger macht, sie ohne bestimmte Tools zu lesen.
Die zugrunde liegenden Semantiken des Protokolls sind jedoch gleich, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten erlernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten der Lesbarkeit halber und erklärt die Struktur von HTTP-Nachrichten mithilfe des HTTP/1.1-Formats.
Wir heben einige Unterschiede hervor, die Sie möglicherweise benötigen, um HTTP/2 im letzten Abschnitt zu beschreiben.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Network**-Tab der Entwickler-Tools eines Browsers sehen oder wenn Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) beispielsweise in die Konsole drucken.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, werden wir HTTP/1.1-Nachrichten betrachten und die Struktur untersuchen.
Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionales Set von _HTTP-Headern_, das Metadaten enthält, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage nach einer Ressource die erlaubten Formate dieser Ressource einschließen, während die Antwort Header enthalten könnte, um das tatsächlich zurückgegebene Format anzuzeigen.
3. Eine leere Zeile, die anzeigt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnte POST-Daten sein, die in einer Anfrage zum Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird.
   Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der Teil danach, der seinen Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Betrachten wir das folgende Beispiel einer HTTP-`POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=FirstName%20LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Request-Line" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch bekannt als _HTTP-Verb_) ist eines von einer festgelegten Menge von Wörtern, die die Bedeutung der Anfrage und das gewünschte Ergebnis beschreiben.
    Zum Beispiel zeigt `GET` an, dass der Client eine Ressource zurückerhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anforderungsziel ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und ist durch den Kontext der Anfrage gekennzeichnet.
    Das Format des Anforderungsziels hängt von der verwendeten HTTP-Methode und dem Anforderungskontext ab.
    Es wird im Abschnitt [Anforderungsziele](#request-targets) weiter unten ausführlicher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete zu verwendende Antwortversion dient.
    Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind.
    In HTTP/2 und darüber hinaus ist die Protokollversion nicht in Nachrichten enthalten, da sie aus dem Verbindungsaufbau erschlossen wird.

### Anforderungsziele

Es gibt einige Möglichkeiten, ein Anforderungsziel zu beschreiben, aber bei weitem am häufigsten ist die "Ursprungsform".
Hier ist eine Liste der Zieltypen und ihrer Verwendung:

1. In _Ursprungsform_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header.
   Ein Abfrage-String kann für zusätzliche Informationen an den Pfad angehängt werden (üblicherweise im `key=value`-Format).
   Dies wird mit `GET`, `POST`, `HEAD` und `OPTIONS`-Methoden verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` verwendet, wenn eine Verbindung zu einem Proxy hergestellt wird:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _Autoritätsform_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`).
   Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Sternchenform_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) im Gegensatz zu einer benannten Ressource repräsentieren möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrage-Header

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden.
Im obigen [Formularübermittlungsbeispiel](#http-anfragen) sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header eine **nicht fallabhängige** Zeichenfolge, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt.
Der gesamte Header, einschließlich des Werts, besteht aus einer einzigen Zeile.
Diese Zeile kann in einigen Fällen sehr lang sein, wie etwa der {{HTTPHeader("Cookie")}}-Header.

![Beispiel für Header in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben:

- {{Glossary("Request_header", "Anfrage-Header")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z.B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentations-Header")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jegliche angewandte Kodierungen.
  Dadurch wird dem Empfänger ermöglicht zu verstehen, wie die Ressource so rekonstruiert werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Anfrage-Body

Der Anfrage-Body ist der Teil einer Anfrage, der Informationen an den Server übermittelt.
Nur `PATCH`-, `POST`- und `PUT`-Anfragen haben einen Body.
Im [Formularübermittlungsbeispiel](#http-anfragen) ist dies der Body:

```http
name=FirstName%20LastName&email=bsmth%40example.com
```

Der Body in der Formularübermittlungsanfrage enthält eine relativ kleine Menge an Informationen als `key=value`-Paare, aber ein Anfrage-Body könnte andere Arten von Daten enthalten, die der Server erwartet:

```json
{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "bsmth@example.com",
  "more": "data"
}
```

oder Daten in mehreren Teilen:

```http
--delimiter123
Content-Disposition: form-data; name="field1"

value1
--delimiter123
Content-Disposition: form-data; name="field2"; filename="example.txt"

Text file contents
--delimiter123--
```

## HTTP-Antworten

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage zurücksendet.
Die Antwort teilt dem Client mit, was das Ergebnis der Anfrage war.
Hier ist ein Beispiel einer HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Example",
    "lastName": "Person",
    "email": "bsmth@example.com"
  }
}
```

Die Startzeile (`HTTP/1.1 201 Created` oben) wird in Antworten als "Statuszeile" bezeichnet und hat drei Teile:

```http
<protocol> <status-code> <status-text>
```

- `<protocol>`
  - : Die _HTTP-Version_ der verbleibenden Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist.
    Gängige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden.
In HTTP/1.x ist jeder Header eine **nicht fallabhängige** Zeichenfolge, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom verwendeten Header abhängt.

![Beispiel für Header in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie bei Anfrage-Headern gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie werden kategorisiert als:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext zur Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen ausführen sollte.
  Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware, während {{HTTPHeader("Date")}} angibt, wann die Antwort generiert wurde.
  Es gibt auch Informationen über die zurückgegebene Ressource, wie ihr Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentations-Header")}} beschreiben, falls die Nachricht einen Body hat, die Form der Nachrichtendaten und jegliche angewandte Kodierungen.
  Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert, in eine bestimmte Schriftsprache oder geografische Region lokalisiert und/oder komprimiert oder anderweitig für die Übermittlung kodiert sein.
  Dies ermöglicht einem Empfänger zu verstehen, wie die Ressource so rekonstruiert werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn einem Client geantwortet wird.
Bei erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET`-Anfrage angefordert hat.
Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und Hinweise gibt, ob es sich um ein permanentes oder temporäres Problem handelt.

Antwort-Bodies können sein:

- Einzelressourcen-Bodies, die durch die beiden Header {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}} definiert sind, oder von unbekannter Länge und in Teilen kodiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Bodies](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, von denen jeder ein anderes Stück Informationen enthält.
  Mehrteilige Bodies werden typischerweise mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Verbindung gebracht, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Nachrichteninhalt enthalten sein muss, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2 Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, hat aber dadurch einige Nachteile.
Sie können Nachrichten-Bodies mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, aber nicht Header.
Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, werden jedoch in aufeinanderfolgenden Nachrichten in einer Verbindung wiederholt.
Es gibt viele bekannte Methoden, um sich wiederholende Texte sehr effizient zu komprimieren, wodurch eine große Bandbreitenersparnis ungenutzt bleibt.

HTTP/1.x hat auch ein Problem namens Head-of-Line (HOL) Blocking, bei dem ein Client auf eine Antwort des Servers warten muss, bevor er die nächste Anfrage senden kann.
HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dieses Problem zu umgehen, aber schlechte Unterstützung und Komplexität bedeuten, dass es selten genutzt wird und schwer zu beherrschen ist.
Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig senden zu können, und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte aufgrund von TCP Slow Start.

In HTTP/1.1, wenn Sie zwei Anfragen parallel stellen möchten, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server senden](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Dies bedeutet, dass Browser in der Anzahl von Ressourcen beschränkt sind, die sie gleichzeitig herunterladen und rendern können, was typischerweise auf 6 parallele Verbindungen begrenzt ist.

HTTP/2 erlaubt es Ihnen, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden.
Dies wird erreicht, indem Nachrichten in einen binären Rahmen eingewickelt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden.
Daten- und Header-Rahmen werden getrennt behandelt, was es ermöglicht, Header mittels eines Algorithmus namens HPACK zu komprimieren.
Die gleiche TCP-Verbindung zu verwenden, um mehrere Anfragen gleichzeitig zu behandeln, wird _Multiplexing_ genannt.

![Multiplexing von Anfragen und Antworten in HTTP/2 über eine einzige TCP-Verbindung](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequentiell: Stream 9 muss nicht warten, bis Stream 7 beendet ist, zum Beispiel.
Die Daten aus mehreren Streams sind auf der Verbindung normalerweise verschachtelt, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können.
Es gibt einen Mechanismus im Protokoll, um eine Priorität für jeden Stream oder jede Ressource festzulegen.
Niedrigpriorisierte Ressourcen nehmen weniger Bandbreite in Anspruch als höherpriorisierte Ressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten im selben Stream tatsächlich nacheinander gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen, trotz all der Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, sind praktisch keine Änderungen in den von Entwicklern verwendeten APIs erforderlich, um HTTP/2 gegenüber HTTP/1.x zu nutzen.
Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es automatisch aktiviert und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern.
Wo HTTP/1.x die Nachrichtenstartzeile verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen.
In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schema-Teil der Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Autoritäts-Teil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort bereitstellt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) machen, um `example.com` abzurufen, was die Anfrage in einer Form ausgibt, die besser lesbar ist.
Sie können die Anfrage mit diesem Befehl machen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'verbose'-Ausgabe steht, die Empfang und Übertragung von Rahmen zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie den Ausgabeverlauf betrachten, sehen Sie das Timing für jeden übermittelten und empfangenen Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht allzu sehr ins Detail zu dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`.
In den Zeilen nach der Header-Übermittlung sehen Sie die folgenden Zeilen:

```http
[  0.447] send HEADERS frame ...
          ...
          :method: GET
          :path: /
          :scheme: https
          :authority: www.example.com
          accept: */*
          accept-encoding: gzip, deflate
          user-agent: nghttp2/1.61.0
```

Das sollte vertraut aussehen, wenn Sie bereits mit HTTP/1.x und den in dem vorherigen Abschnitt dieses Leitfadens behandelten Konzepten vertraut sind, die weiterhin gelten.
Dies ist der binäre Rahmen mit der `GET`-Anfrage für `example.com`, die von `nghttp` in eine lesbare Form umgewandelt wurde.
Wenn Sie weiter unten in der Ausgabe des Befehls suchen, werden Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams sehen:

```http
[  0.433] recv (stream_id=13) :status: 200
[  0.433] recv (stream_id=13) content-encoding: gzip
[  0.433] recv (stream_id=13) age: 112721
[  0.433] recv (stream_id=13) cache-control: max-age=604800
[  0.433] recv (stream_id=13) content-type: text/html; charset=UTF-8
[  0.433] recv (stream_id=13) date: Fri, 13 Sep 2024 12:56:07 GMT
[  0.433] recv (stream_id=13) etag: "3147526947+gzip"
...
```

Und wenn Sie das Timing und die Stream-ID von dieser Nachricht entfernen, sollte es noch vertrauter erscheinen:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Weiter in Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird, zu graben, geht über den Rahmen dieses Leitfadens hinaus, aber für das Verständnis und Debugging von HTTP/2-Nachrichten sollten Sie nun gut ausgestattet sein mit dem Wissen und den Werkzeugen in diesem Artikel.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten unter Verwendung des HTTP/1.1-Formats als Illustration.
Wir haben auch die Nachrichtenrahmung in HTTP/2 untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführt, ohne die Semantiken von HTTP grundlegend zu verändern.
HTTP/2 wurde eingeführt, um die in HTTP/1.x vorhandenen {{Glossary("head_of_line_blocking", "Head-of-Line Blocking")}}-Probleme zu lösen, indem Multiplexing von Anfragen ermöglicht wird.

Ein Thema, das in HTTP/2 blieb, ist, dass obwohl das Head-of-Line Blocking auf der Protokollebene behoben wurde, es immer noch eine Leistungsengstelle aufgrund von Head-of-Line Blocking innerhalb von TCP (auf der Transporteebene) gibt.
HTTP/3 adressiert diese Einschränkung, indem anstelle von TCP das auf UDP basierende Protokoll QUIC verwendet wird.
Diese Änderung verbessert die Leistung, reduziert die Verbindungsaufbauzeit und erhöht die Stabilität in verschlechterten oder unzuverlässigen Netzwerken.
HTTP/3 behält die gleiche grundlegende HTTP-Semantik bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header konsistent über alle drei großen HTTP-Versionen hinweg bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu begreifen.
Der Hauptunterschied liegt darin, **wie** diese Semantiken auf der Transporteebene implementiert werden.
Indem Sie die Beispiele und Konzepte in diesem Leitfaden befolgen, sollten Sie sich jetzt in der Lage fühlen, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen und wie Anwendungen HTTP nutzen, um Daten zu senden und zu empfangen.

## Siehe auch

- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Aktualisierungsmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
