---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, der zum Austausch von Daten zwischen einem Server und einem Client im HTTP-Protokoll verwendet wird.
Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die Antwort, die der Server als Reaktion auf eine Anfrage sendet.

Entwickler erstellen selten, wenn überhaupt, HTTP-Nachrichten von Grund auf neu.
Anwendungen wie Browser, Proxys oder Webserver verwenden Software, die darauf ausgelegt ist, HTTP-Nachrichten auf zuverlässige und effiziente Weise zu erstellen.
Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben.
In HTTP/2 werden Nachrichten in einem binären Rahmen verpackt, was sie ohne bestimmte Werkzeuge etwas schwerer lesbar macht.
Die zugrunde liegende Semantik des Protokolls bleibt jedoch dieselbe, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten anhand des HTTP/1.1-Formats.
Wir heben einige Unterschiede hervor, die Sie in der abschließenden Sektion zur Beschreibung von HTTP/2 benötigen könnten.

> [!NOTE]
> Sie können HTTP-Nachrichten in der **Netzwerk**-Registerkarte der Entwicklerwerkzeuge eines Browsers sehen oder wenn Sie HTTP-Nachrichten mithilfe von CLI-Tools wie [curl](https://curl.se/) in die Konsole ausgeben.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, schauen wir uns HTTP/1.1-Nachrichten an und untersuchen die Struktur.
Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen sich eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten teilen eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionaler Satz von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Beispielsweise könnte eine Anfrage für eine Ressource die erlaubten Formate dieser Ressource enthalten, während die Antwort Header enthalten könnte, um das tatsächlich zurückgegebene Format anzuzeigen.
3. Eine leere Zeile, die angibt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnten POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die dem Client in einer Antwort zurückgegeben wird.
   Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der nachfolgende Teil, der ihren Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Schauen wir uns das folgende Beispiel einer HTTP-`POST`-Anfrage an, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=FirstName%20LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Anfragezeile" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch bekannt als _HTTP-Verb_) ist eines aus einer Reihe von definierten Wörtern, das die Bedeutung der Anfrage und das gewünschte Ergebnis beschreibt.
    Zum Beispiel gibt `GET` an, dass der Client eine Ressource im Gegenzug erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anfrageziel ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert.
    Das Format des Anfrageziels hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab.
    Es wird im Abschnitt [Anfrageziele](#anfrageziele) unten genauer beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der restlichen Nachricht definiert und als Indikator für die erwartete Version dient, die für die Antwort verwendet werden soll.
    Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind.
    In HTTP/2 und höheren Versionen ist die Protokollversion nicht in Nachrichten enthalten, da sie aus dem Verbindungsaufbau heraus verstanden wird.

### Anfrageziele

Es gibt einige Möglichkeiten zur Beschreibung eines Anfrageziels, aber die weitaus häufigste ist die "Ursprungsform".
Hier ist eine Liste der Arten von Zielen und wann sie verwendet werden:

1. In _Ursprungsform_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header.
   Ein Abfrage-String kann an den Pfad für zusätzliche Informationen angehängt werden (normalerweise im `key=value`-Format).
   Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` bei der Verbindung zu einem Proxy verwendet:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _Autorisierungsform_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`).
   Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Sternchenform_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) im Gegensatz zu einer benannten Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrageheader

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden.
Im [Beispiel zur Formularübermittlung](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header eine **nicht auf Groß- und Kleinschreibung achtende** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt.
Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile.
Diese Zeile kann in einigen Fällen ziemlich lang sein, wie der {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben:

- {{Glossary("Request_header", "Anfrageheader")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z.B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentationsheader")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewandte Kodierung.
  Dies ermöglicht es dem Empfänger, zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Anfragebody

Der Anfragebody ist der Teil einer Anfrage, der Informationen an den Server übermittelt.
Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body.
Im [Beispiel zur Formularübermittlung](#http-anfragen) ist dieser Teil der Body:

```http
name=FirstName%20LastName&email=bsmth%40example.com
```

Der Body in der Formulardanfrage enthält eine relativ kleine Menge an Informationen als `key=value`-Paare, aber ein Anfragebody könnte andere Arten von Daten enthalten, die der Server erwartet:

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
Die Antwort informiert den Client über das Ergebnis der Anfrage.
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
  - : Die _HTTP-Version_ der restlichen Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist.
    Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informelle, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

### Antwortheader

Antwortheader sind die Metadaten, die mit einer Antwort gesendet werden.
In HTTP/1.x ist jeder Header eine **nicht auf Groß- und Kleinschreibung achtende** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format davon abhängt, welcher Header verwendet wird.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrageheader gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie sind kategorisiert als:

- {{Glossary("Response_header", "Antwortheader")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen sollte.
  Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware, während {{HTTPHeader("Date")}} angibt, wann die Antwort generiert wurde.
  Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewandte Kodierung.
  Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, auf eine bestimmte geschriebene Sprache oder geografische Region lokalisiert und/oder komprimiert oder anderweitig zur Übertragung kodiert sein.
  Dies ermöglicht es einem Empfänger, zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Antwortbody

Ein Antwortbody ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird.
Bei erfolgreichen Anfragen enthält der Antwortbody die Daten, die der Client in einer `GET`-Anfrage angefordert hat.
Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwortbody beschreibt, warum die Anfrage fehlgeschlagen ist, und möglicherweise andeutet, ob es sich um ein dauerhaftes oder vorübergehendes Problem handelt.

Antwortbodies können sein:

- Einzelressourcenbodies, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Chunk-Form mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` eingestellt.
- [Mehrfachressourcenbodies](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, von denen jeder ein anderes Stück Information enthält.
  Mehrteilige Bodies sind typischerweise mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verbunden, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Nachrichteninhalt eingeschlossen werden muss, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, aber dadurch einige Nachteile haben.
Sie können Nachrichtenbodies mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, aber nicht die Header.
Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, aber sie werden in aufeinanderfolgenden Nachrichten auf einer Verbindung wiederholt.
Es gibt viele bekannte Methoden, um sich wiederholenden Text zu komprimieren, die sehr effizient sind, was eine große Menge Bandbreiteneinsparung ungenutzt lässt.

HTTP/1.x hat auch ein Problem namens Head-of-Line (HOL) Blocking, bei dem ein Client auf eine Antwort vom Server warten muss, bevor die nächste Anfrage gesendet wird.
HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dieses Problem zu umgehen, aber mangelnde Unterstützung und Komplexität bedeuten, dass es selten genutzt und schwer richtig umzusetzen ist.
Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig zu senden; und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte aufgrund des TCP Slow Start.

In HTTP/1.1, wenn Sie zwei Anfragen parallel stellen möchten, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen begrenzt sind, die sie gleichzeitig herunterladen und rendern können, was typischerweise auf 6 parallele Verbindungen begrenzt wurde.

HTTP/2 ermöglicht es Ihnen, eine einzelne TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu nutzen.
Dies wird erreicht, indem Nachrichten in einen binären Frame gepackt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden.
Daten- und Headerframes werden separat behandelt, was es ermöglicht, Header über einen Algorithmus namens HPACK zu komprimieren.
Die Verwendung derselben TCP-Verbindung zur gleichzeitigen Handhabung mehrerer Anfragen wird _Multiplexing_ genannt.

![Multiplexing von Anfragen und Antworten in HTTP/2 mit einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequenziell: Stream 9 muss nicht darauf warten, dass Stream 7 beendet ist, zum Beispiel.
Die Daten aus mehreren Streams sind normalerweise auf der Verbindung durchmischt, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können.
Es gibt einen Mechanismus im Protokoll, um jeder Stream- oder Ressource eine Priorität zuzuweisen.
Niedrigpriorisierte Ressourcen beanspruchen weniger Bandbreite als höherpriorisierte, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv nacheinander über dieselbe Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen sind trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, praktisch keine Änderungen in den von Entwicklern verwendeten APIs erforderlich, um HTTP/2 über HTTP/1.x zu nutzen.
Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es automatisch eingeschaltet und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung der Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern.
Während HTTP/1.x die Nachrichten-Startzeile verwendet, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen.
In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der schematische Teil der Ziel-URI, der häufig HTTP(S) ist.
- `:authority` - der Autoritätsteil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort angibt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) stellen, um `example.com` abzurufen, was die Anfrage in einer Form ausgibt, die lesbarer ist.
Sie können die Anfrage mit diesem Befehl stellen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'verbose' Ausgabe steht, um den Empfang und die Übertragung von Frames anzuzeigen:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie den Output durchsehen, sehen Sie die Zeitierung für jeden übertragenen und empfangenen Frame:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail über diesen Output gehen, aber achten Sie auf das `HEADERS`-Frame im Format `[  0.123] send HEADERS frame ...`.
In den Zeilen nach der Übertragung des Headers sehen Sie die folgenden Zeilen:

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

Dies sollte Ihnen vertraut vorkommen, wenn Sie bereits mit HTTP/1.x und den in den vorherigen Abschnitten dieses Leitfadens behandelten Konzepten vertraut sind.
Dies ist der binäre Frame mit der `GET`-Anfrage für `example.com`, konvertiert in eine lesbare Form von `nghttp`.
Wenn Sie weiter unten im Output des Befehls schauen, sehen Sie den `:status`-Pseudo-Header in einem der Streams, die vom Server empfangen wurden:

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

Und wenn Sie die Zeitierung und die Stream-ID von dieser Nachricht entfernen, sollte sie noch vertrauter aussehen:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Sich weiter in Nachrichtenframes, Stream-IDs und wie die Verbindung verwaltet wird, einzugraben, liegt außerhalb des Rahmens dieses Leitfadens, aber für das Verständnis und Debugging von HTTP/2-Nachrichten sollten Sie gut ausgestattet sein, die in diesem Artikel behandelten Kenntnisse und Werkzeuge zu nutzen.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten unter Verwendung des HTTP/1.1-Formats zur Veranschaulichung.
Wir haben auch die Rahmenstruktur von HTTP/2-Nachrichten erkundet, die eine Ebene zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführt, ohne die Semantik von HTTP grundlegend zu verändern.
HTTP/2 wurde eingeführt, um die Probleme des {{Glossary("head_of_line_blocking", "Head-of-Line Blocking")}} in HTTP/1.x zu lösen, indem es das Multiplexing von Anfragen ermöglicht.

Ein Problem, das in HTTP/2 blieb, ist, dass obwohl das Head-of-Line Blocking auf Protokollebene behoben wurde, es immer noch einen Leistungsengpass aufgrund des Head-of-Line Blocking innerhalb von TCP (auf der Transporteebene) gibt.
HTTP/3 behebt diese Einschränkung, indem es QUIC verwendet, ein auf UDP aufgebautes Protokoll, anstelle von TCP.
Diese Änderung verbessert die Leistung, reduziert die Verbindungsaufbauzeit und erhöht die Stabilität in verschlechterten oder unzuverlässigen Netzwerken.
HTTP/3 behält dieselben grundlegenden HTTP-Semantiken, sodass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei großen HTTP-Versionen hinweg konsistent bleiben.

Wenn Sie die Semantiken von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu erfassen.
Der Hauptunterschied liegt darin, **wie** diese Semantiken auf der Transporteebene implementiert werden.
Indem Sie die Beispiele und Konzepte in diesem Leitfaden befolgen, sollten Sie sich nun in der Lage fühlen, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen, sowie zu verstehen, wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
