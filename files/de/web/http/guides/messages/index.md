---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: cd16ae6171a0a04eb3bc5955f939f57e02c1fa8d
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, der zum Datenaustausch zwischen einem Server und einem Client im HTTP-Protokoll verwendet wird.
Es gibt zwei Arten von Nachrichten: **Anfragen** (Requests), die vom Client gesendet werden, um eine Aktion auf dem Server zu initiieren, und **Antworten** (Responses), die Antwort, die der Server als Reaktion auf eine Anfrage sendet.

Entwickler erstellen selten HTTP-Nachrichten von Grund auf.
Anwendungen wie ein Browser, ein Proxy oder ein Webserver verwenden Software, die dafür entwickelt wurde, HTTP-Nachrichten zuverlässig und effizient zu erstellen.
Wie Nachrichten erstellt oder umgewandelt werden, wird über APIs in Browsern, Konfigurationsdateien für Proxies oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis zu HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben.
In HTTP/2 sind Nachrichten in binäre Rahmen eingebettet, was sie etwas schwerer lesbar macht, ohne bestimmte Tools zu verwenden.
Die zugrunde liegende Semantik des Protokolls bleibt jedoch gleich, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten im HTTP/1.1-Format.
Wir heben einige Unterschiede hervor, die Sie möglicherweise benötigen, um HTTP/2 im letzten Abschnitt zu beschreiben.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwickler-Tools eines Browsers sehen oder indem Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) auf der Konsole ausgeben lassen.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, schauen wir uns HTTP/1.1-Nachrichten an und untersuchen die Struktur.
Die folgende Illustration zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Eine optionale Gruppe von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage nach einer Ressource die erlaubten Formate dieser Ressource enthalten, während die Antwort Header enthalten könnte, um das tatsächlich zurückgegebene Format anzuzeigen.
3. Eine leere Zeile zeigt an, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der mit der Nachricht verknüpfte Daten enthält. Dies könnte POST-Daten umfassen, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird.
   Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als der _Kopf_ der Anfragen bezeichnet, und der Teil danach, der deren Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Schauen wir uns das folgende Beispiel einer HTTP-`POST`-Anfrage an, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49

name=FirstName+LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Request-Line" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch als _HTTP-Verb_ bekannt) ist eines von mehreren definierten Wörtern, die die Bedeutung der Anfrage und das gewünschte Ergebnis beschreiben.
    Zum Beispiel zeigt `GET` an, dass der Client eine Ressource im Gegenzug erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anfrageziel ist in der Regel eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage gekennzeichnet.
    Das Format des Anfrageziels hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab.
    Es wird im Abschnitt [Request targets](#anfrageziele) unten ausführlicher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version für die Antwort dient.
    Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind.
    In HTTP/2 und darüber hinaus ist die Protokollversion nicht in Nachrichten enthalten, da sie aus der Verbindungseinrichtung verstanden wird.

### Anfrageziele

Es gibt einige Möglichkeiten, ein Anfrageziel zu beschreiben, aber bei weitem die häufigste ist die "Origin-Form".
Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In _Origin-Form_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header.
   Eine Abfragezeichenfolge kann an den Pfad für zusätzliche Informationen angehängt werden (in der Regel im `key=value`-Format).
   Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _Absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` verwendet, wenn eine Verbindung zu einem Proxy hergestellt wird:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _Authority Form_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`).
   Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Asterisk Form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) anstelle einer benannten Ressource repräsentieren möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrageheader

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden.
Im [Beispiel der Formularübermittlung](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49
```

In HTTP/1.x ist jeder Header eine **nicht case-sensitive** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem Header abhängt.
Der ganze Header, einschließlich des Wertes, besteht aus einer einzigen Zeile.
Diese Zeile kann in einigen Fällen ziemlich lang sein, wie beispielsweise der {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben könnten:

- {{Glossary("Request_header", "Anfrageheader")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden soll (z. B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentationsheader")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewendete Kodierung.
  Damit kann der Empfänger verstehen, wie die Ressource rekonstruiert werden soll, wie sie vor der Übertragung über das Netzwerk war.

### Anfragebody

Der Anfragebody ist der Teil einer Anfrage, der Informationen an den Server überträgt.
Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body.
Im [Beispiel der Formularübermittlung](#http-anfragen) ist dies der Body:

```http
name=FirstName+LastName&email=bsmth%40example.com
```

Der Body in der Formularübermittlungsanfrage enthält eine relativ kleine Menge an Informationen als `key=value`-Paare, aber ein Anfragebody könnte andere Arten von Daten enthalten, die der Server erwartet:

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
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist.
    Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen das Verständnis der HTTP-Nachricht zu erleichtern.

### Antwortheader

Antwortheader sind die Metadaten, die mit einer Antwort gesendet werden.
In HTTP/1.x ist jeder Header eine **nicht case-sensitive** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrageheader gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie werden wie folgt kategorisiert:

- {{Glossary("Response_header", "Antwortheader")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen sollte.
  Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware, während {{HTTPHeader("Date")}} beinhaltet, wann die Antwort generiert wurde.
  Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden soll ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewendete Kodierung.
  Zum Beispiel könnte die gleiche Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert werden, lokalisiert in einer bestimmten geschriebenen Sprache oder geografischen Region und/oder komprimiert oder auf andere Weise für die Übertragung kodiert.
  Dies ermöglicht es einem Empfänger zu verstehen, wie die Ressource rekonstruiert werden soll, wie sie vor der Übertragung über das Netzwerk war.

### Antwortbody

Ein Antwortbody ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird.
Bei erfolgreichen Anfragen enthält der Antwortbody die Daten, die der Client in einer `GET`-Anfrage angefordert hat.
Wenn es Probleme mit der Anfrage des Clients gibt, beschreibt der Antwortbody oft, warum die Anfrage fehlgeschlagen ist, und gibt Hinweise darauf, ob sie dauerhaft oder vorübergehend ist.

Antwortbodies können sein:

- Einzelressourcen-Bodies, die durch die beiden Header definiert werden: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Blöcken kodiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrteilige Ressourcen-Bodies](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, wobei jeder einen anderen Informationsausschnitt enthält.
  Mehrteilige Bodies sind typischerweise mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verbunden, könnten aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Nachrichteninhalt erforderlich ist, wie z.B. {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2 Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, aber dadurch einige Nachteile haben.
Sie können die Nachrichtenbodies mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, nicht jedoch die Header.
Header sind oft ähnlich oder identisch in einer Client-Server-Interaktion, aber sie werden in aufeinanderfolgenden Nachrichten auf einer Verbindung wiederholt.
Es gibt viele bekannte Methoden, um wiederholte Texteffizient zu komprimieren, was Einsparungen bei der Bandbreite ungenutzt lässt.

HTTP/1.x hat auch ein Problem namens Head-of-Line-Blocking (HOL), bei dem ein Client auf eine Antwort des Servers warten muss, bevor er die nächste Anfrage senden kann.
HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dies zu umgehen, aber schlechte Unterstützung und Komplexität führen dazu, dass es selten benutzt wird und schwer richtig hinzubekommen ist.
Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig zu senden, und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte aufgrund des TCP-Slow-Starts.

In HTTP/1.1 müssen Sie, wenn Sie zwei Anfragen parallel stellen möchten, zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen limitiert sind, die sie gleichzeitig herunterladen und rendern können, was typischerweise auf 6 parallele Verbindungen beschränkt war.

HTTP/2 ermöglicht die Nutzung einer einzigen TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig.
Dies wird erreicht, indem Nachrichten in einen binären Rahmen gewickelt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden.
Daten- und Header-Rahmen werden separat behandelt, was es ermöglicht, Header über einen Algorithmus namens HPACK zu komprimieren.
Das Verwenden derselben TCP-Verbindung, um mehrere Anfragen gleichzeitig zu bearbeiten, wird als _Multiplexing_ bezeichnet.

![Multiplexen von Anfragen und Antworten in HTTP/2 über eine einzelne TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen müssen nicht unbedingt sequentiell sein: Stream 9 muss nicht auf das Ende von Stream 7 warten.
Die Daten von mehreren Streams sind normalerweise auf der Verbindung verflochten, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können.
Es gibt einen Mechanismus für das Protokoll, um die Priorität für jeden Stream oder jede Ressource festzulegen.
Ressourcen mit niedriger Priorität beanspruchen weniger Bandbreite als Ressourcen mit höherer Priorität, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv sequentiell auf derselben Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen sind trotz all der Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, fast keine Änderungen in den von Entwicklern verwendeten APIs erforderlich, um HTTP/2 über HTTP/1.x zu nutzen.
Wenn HTTP/2 sowohl im Browser als auch im Server verfügbar ist, wird es automatisch aktiviert und verwendet.

### Pseudokopfzeilen

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist die Verwendung von Pseudokopfzeilen.
Wo HTTP/1.x die Nachrichtenstartzeile verwendete, verwendet HTTP/2 spezielle Pseudokopfzeilenfelder, die mit `:` beginnen.
In Anfragen gibt es die folgenden Pseudokopfzeilen:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schemaanteil der Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Autoritätsanteil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur eine Pseudokopfzeile, und das ist der `:status`, der den Code der Antwort angibt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) stellen, um `example.com` abzurufen, wodurch die Anfrage in einer lesbareren Form ausgegeben wird.
Sie können die Anfrage mit diesem Befehl stellen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'verbose' steht und die Übertragung und den Empfang der Rahmen zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie sich die Ausgabe genauer ansehen, sehen Sie das Timing für jeden übertragenen und empfangenen Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail bei dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`.
In den Zeilen nach der Header-Übertragung sehen Sie die folgenden Zeilen:

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

Dies sollte Ihnen bekannt vorkommen, wenn Sie bereits mit HTTP/1.x vertraut sind, und die in den vorherigen Abschnitten dieses Leitfadens behandelten Konzepte gelten weiterhin.
Dies ist der Binärrahmen mit der `GET`-Anfrage an `example.com`, der von `nghttp` in eine lesbare Form umgewandelt wurde.
Wenn Sie weiter unten in der Ausgabe des Befehls nachsehen, sehen Sie die `:status`-Pseudokopfzeile in einem der vom Server empfangenen Streams:

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

Und wenn Sie das Timing und die Stream-ID aus dieser Nachricht entfernen, sollte es noch bekannter aussehen:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Das tiefergehende Eintauchen in Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird, liegt außerhalb des Umfangs dieses Leitfadens, aber zum Verständnis und zur Fehlerbehebung von HTTP/2-Nachrichten sollten Sie mit dem Wissen und den Werkzeugen in diesem Artikel gut gerüstet sein.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, wobei das HTTP/1.1-Format zur Veranschaulichung verwendet wird.
Wir haben auch HTTP/2-Nachrichtenrahmen untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführen, ohne die Semantik von HTTP grundlegend zu ändern.
HTTP/2 wurde eingeführt, um die im HTTP/1.x vorhandenen {{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}-Probleme durch Aktivierung des Multiplexings von Anfragen zu lösen.

Ein Problem, das in HTTP/2 geblieben ist, ist, dass auch wenn das Head-of-Line-Blocking auf Protokollebene behoben wurde, immer noch ein Leistungsengpass durch Head-of-Line-Blocking innerhalb von TCP (auf Transportrahmenebene) besteht.
HTTP/3 behebt diese Einschränkung, indem es QUIC verwendet, ein auf UDP basierendes Protokoll, anstelle von TCP.
Diese Änderung verbessert die Leistung, verkürzt die Verbindungsaufbauzeiten und erhöht die Stabilität bei degradierten oder unzuverlässigen Netzwerken.
HTTP/3 behält die gleichen grundlegenden HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei Hauptversionen von HTTP konsistent bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu erfassen.
Der Hauptunterschied liegt darin, **wie** diese Semantiken auf Transportebene implementiert werden.
Indem Sie den Beispielen und Konzepten in diesem Leitfaden folgen, sollten Sie sich nun fähig fühlen, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen und wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
