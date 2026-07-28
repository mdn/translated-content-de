---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

**HTTP-Nachrichten** sind der Mechanismus, um Daten zwischen einem Server und einem Client im HTTP-Protokoll auszutauschen.
Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die der Server als Reaktion auf eine Anfrage sendet.

Entwickler erstellen selten, wenn überhaupt, HTTP-Nachrichten von Grund auf neu.
Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die darauf ausgelegt ist, HTTP-Nachrichten zuverlässig und effizient zu erstellen.
Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis zu HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben.
In HTTP/2 sind Nachrichten in binärer Segmentierung verpackt, was sie etwas schwieriger lesbar macht.
Die zugrunde liegenden Semantiken des Protokolls sind jedoch die gleichen, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format der HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten mit dem HTTP/1.1-Format.
Wir heben einige Unterschiede hervor, die Sie möglicherweise für die Beschreibung von HTTP/2 im letzten Abschnitt benötigen.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklertools eines Browsers sehen oder wenn Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) beispielsweise in die Konsole drucken.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, schauen wir uns HTTP/1.1-Nachrichten an und untersuchen die Struktur.
Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzige Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionaler Satz von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage für eine Ressource die erlaubten Formate dieser Ressource enthalten, während die Antwort Header enthalten könnte, die das tatsächlich zurückgegebene Format anzeigen.
3. Eine leere Zeile, die anzeigt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnten POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der danach folgende Teil, der den Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Schauen wir uns folgendes Beispiel für eine HTTP-`POST`-Anfrage an, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

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
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch bekannt als _HTTP-Verb_) ist eines von mehreren definierten Wörtern, das die Bedeutung der Anfrage und das gewünschte Ergebnis beschreibt. Zum Beispiel zeigt `GET` an, dass der Client eine Ressource im Gegenzug erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Ziel der Anfrage ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert. Das Format des Anfrageziels hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab. Es wird im Abschnitt [Anfrageziele](#anfrageziele) unten genauer beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert, fungiert als Indikator für die erwartete Version, die für die Antwort verwendet werden soll. Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind. In HTTP/2 und höher ist die Protokollversion in Nachrichten nicht enthalten, da sie aus dem Verbindungsaufbau verstanden wird.

### Anfrageziele

Es gibt einige Möglichkeiten, ein Anfrageziel zu beschreiben, aber die bei weitem häufigste ist die "Origin-Form".
Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In _Origin-Form_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann dem Pfad für zusätzliche Informationen (normalerweise im `key=value`-Format) angehängt werden. Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _Absolute Form_ ist eine vollständige URL, einschließlich der Authority, und wird bei `GET`, beim Verbinden mit einem Proxy, verwendet:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _Authority-Form_ ist die Authority und der Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Asterisk-Form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) im Gegensatz zu einer benannten Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrage-Header

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden.
Im [Formularübermittlungsbeispiel](#http-anfragen) oben sind das die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49
```

In HTTP/1.x ist jeder Header eine **nicht casesensitive** Zeichenfolge, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile. Diese Zeile kann in einigen Fällen recht lang sein, beispielsweise der {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben könnten:

- {{Glossary("Request_header", "Anfrage-Header")}} bieten zusätzlichen Kontext für eine Anfrage oder fügen zusätzliche Logik hinzu, wie sie vom Server behandelt werden sollte (z. B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Darstellungs-Header")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewandte Kodierung. Dies ermöglicht es dem Empfänger, zu verstehen, wie er die Ressource rekonstruieren kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Anfrage-Body

Der Anfrage-Body ist der Teil einer Anfrage, der Informationen an den Server übermittelt.
Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body.
Im [Formularübermittlungsbeispiel](#http-anfragen) ist dieser Teil der Body:

```http
name=FirstName+LastName&email=bsmth%40example.com
```

Der Body in der Formulardatenanfrage enthält eine relativ kleine Menge an Informationen als `key=value`-Paare, aber ein Anfrage-Body könnte andere Arten von Daten enthalten, die der Server erwartet:

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
Die Antwort informiert den Client darüber, was das Ergebnis der Anfrage war.
Hier ist ein Beispiel für eine HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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
<protocol> <status-code> <reason-phrase>
```

- `<protocol>`
  - : Die _HTTP-Version_ der Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist. Gängige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<reason-phrase>` {{optional_inline}}
  - : Der optionale Text nach dem Statuscode ist eine kurze, rein informative Textbeschreibung des Status, um einem Menschen dabei zu helfen, das Ergebnis einer Anfrage zu verstehen. Der Begründungssatz wird gelegentlich in Klammern gesetzt (z. B. "201 (Created)") und zeigt an, dass er optional ist.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden.
In HTTP/1.x ist jeder Header eine **nicht casesensitive** Zeichenfolge, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format davon abhängt, welcher Header verwendet wird.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrage-Header gibt es viele verschiedene Header, die in Antworten auftauchen können, und sie sind kategorisiert als:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen machen sollte. Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware, während {{HTTPHeader("Date")}} angibt, wann die Antwort erzeugt wurde. Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Darstellungs-Header")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewandte Kodierung. Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp formatiert sein, wie XML oder JSON, lokalisiert in einer bestimmten Schreibweise oder geografischen Region, und/oder komprimiert oder anderweitig codiert für die Übertragung. Dies ermöglicht es einem Empfänger zu verstehen, wie er die Ressource rekonstruieren kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird.
In erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET`-Anfrage angefordert hat.
Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und Hinweise liefert, ob dies dauerhaft oder vorübergehend ist.

Antwort-Bodies können sein:

- Single-Resource-Bodies, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Chunks kodiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Multi-Resource-Bodies](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, von denen jeder ein anderes Stück Information enthält. Mehrteilige Bodies sind in der Regel mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verbunden, können aber auch als Antwort auf [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne Nachrichteninhalt einzuschließen, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, aber dadurch einige Nachteile haben. Sie können Nachrichten-Bodies mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, jedoch nicht die Header. Header sind oft ähnlich oder identisch in einer Client-Server-Interaktion, aber sie werden in aufeinander folgenden Nachrichten auf einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um sich wiederholenden Text sehr effizient zu komprimieren, was eine große Menge an Einsparungen bei der Bandbreite ungenutzt lässt.

HTTP/1.x hat auch ein Problem namens {{Glossary("Head_of_line_blocking", "Head-of-line-Blocking (HOL)")}}, bei dem ein Client auf eine Antwort vom Server warten muss, bevor die nächste Anfrage gesendet wird. HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dies zu umgehen, aber aufgrund von schlechter Unterstützung und Komplexität wird es selten verwendet und ist schwierig richtig umzusetzen. Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig zu senden; und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte aufgrund des TCP-Slowstarts.

In HTTP/1.1, wenn Sie zwei Anfragen parallel machen wollen, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server senden](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, eingeschränkt sind, was typischerweise auf 6 parallele Verbindungen beschränkt ist.

HTTP/2 ermöglicht es Ihnen, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu nutzen. Dies geschieht, indem Nachrichten in einen Binärrahmen eingepackt und die Anfragen und Antworten in einem nummerierten **Strom** auf einer Verbindung gesendet werden. Daten- und Header-Frames werden getrennt gehandhabt, was es ermöglicht, Header über einen Algorithmus namens HPACK zu komprimieren. Die Verwendung derselben TCP-Verbindung, um mehrere Anfragen gleichzeitig zu bearbeiten, wird als _Multiplexing_ bezeichnet.

![Multiplexing von Anfragen und Antworten in HTTP/2 mit einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht notwendigerweise sequenziell: Strom 9 muss nicht auf den Abschluss von Strom 7 warten, zum Beispiel. Die Daten aus mehreren Strömen werden normalerweise auf der Verbindung verflochten, sodass Strom 9 und 7 vom Client gleichzeitig empfangen werden können. Es gibt einen Mechanismus für das Protokoll, um eine Priorität für jeden Stream oder jede Ressource festzulegen. Ressourcen mit niedriger Priorität verbrauchen weniger Bandbreite als Ressourcen mit höherer Priorität, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv sequentiell über dieselbe Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst bearbeitet werden sollten.

Im Allgemeinen, trotz aller Verbesserungen und Abstraktionen die über HTTP/1.x hinzugefügt wurden, sind nahezu keine Änderungen in den von Entwicklern verwendeten APIs erforderlich um HTTP/2 über HTTP/1.x zu nutzen. Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es automatisch eingeschaltet und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung bei Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Während HTTP/1.x die Nachrichtenstartzeile verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schemenanteil der Ziel-URI, oft HTTP(S).
- `:authority` - der Authority-Teil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur eine Pseudo-Header, und das ist der `:status`, der den Code der Antwort liefert.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) machen, um `example.com` abzurufen, was die Anfrage in einer lesbareren Form ausgibt. Sie können die Anfrage mit diesem Befehl erstellen, wobei die Option `-n` die heruntergeladene Daten verwirft und `-v` für 'verbose' Ausgabe steht, die die Übertragung und den Empfang von Frames anzeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie sich die Ausgabe durchsehen, werden Sie die Zeitdauer für jeden übertragenen und empfangenen Frame sehen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Frame im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach der Header-Übertragung sehen Sie die folgenden Zeilen:

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

Dies sollte vertraut aussehen, wenn Sie bereits mit HTTP/1.x arbeiten und die früher behandelten Konzepte weiterhin gelten. Dies ist der Binärrahmen mit der `GET`-Anfrage für `example.com`, in eine lesbare Form von `nghttp` konvertiert. Wenn Sie weiter in der Ausgabe des Befehls nach unten schauen, sehen Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams:

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

Und wenn Sie die Zeit- und Stream-ID von dieser Nachricht entfernen, sollte es noch vertrauter sein:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Weiter in die Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird, vorzudringen, liegt außerhalb des Rahmens dieses Leitfadens, aber zum Zweck des Verständnisses und Debuggens von HTTP/2-Nachrichten sollten Sie gut ausgerüstet sein mit dem Wissen und den Werkzeugen in diesem Artikel.

## Schlussfolgerung

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, mit dem HTTP/1.1-Format zur Veranschaulichung.
Wir haben auch die Rahmenstruktur von HTTP/2-Nachrichten untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem grundlegenden Transportprotokoll einführt, ohne die Semantik von HTTP grundlegend zu verändern.
HTTP/2 wurde eingeführt, um die {{Glossary("head_of_line_blocking", "Head-of-line-Blocking")}}-Probleme, die in HTTP/1.x vorhanden sind, durch das Ermöglichen von Multiplexing von Anfragen zu lösen.

Ein Problem, das in HTTP/2 geblieben ist, ist, dass obwohl das Head-of-line-Blocking auf der Protokollebene behoben wurde, es immer noch einen Leistungsengpass aufgrund des Head-of-line-Blockings innerhalb von TCP (auf der Transportebene) gibt.
HTTP/3 behebt diese Einschränkung durch die Verwendung von QUIC, einem auf UDP basierenden Protokoll, anstelle von TCP.
Diese Änderung verbessert die Leistung, reduziert die Verbindungsaufbauzeit und verbessert die Stabilität in verschlechterten oder instabilen Netzwerken.
HTTP/3 behält die gleichen grundlegenden HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header konsistent über alle drei Haupt-HTTP-Versionen hinweg bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage für das Verständnis von HTTP/2 und HTTP/3.
Der Hauptunterschied liegt darin, **wie** diese Semantiken auf der Transportschicht implementiert werden.
Anhand der Beispiele und Konzepte in diesem Leitfaden sollten Sie nun ausgerüstet sein, um mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen und wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
