---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: 7a32241450ff246ab9035aca6e54483349ce855b
---

**HTTP-Nachrichten** sind der Mechanismus, um Daten im HTTP-Protokoll zwischen einem Server und einem Client auszutauschen. Es gibt zwei Arten von Nachrichten: **Requests** (Anfragen), die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Responses** (Antworten), die der Server als Reaktion auf eine Anfrage sendet.

Entwickler erstellen selten, wenn überhaupt, HTTP-Nachrichten von Grund auf neu. Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die darauf ausgelegt ist, HTTP-Nachrichten auf zuverlässige und effiziente Weise zu erstellen. Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In den HTTP-Protokollversionen bis HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem man sich mit dem Format vertraut gemacht hat. In HTTP/2 sind Nachrichten in binäre Rahmen verpackt, was sie etwas schwerer lesbar macht. Die zugrunde liegenden Semantiken des Protokolls bleiben jedoch dieselben, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten anhand des Formats von HTTP/1.1. Wir heben einige Unterschiede hervor, die Sie für die Beschreibung von HTTP/2 im letzten Abschnitt benötigen könnten.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklerwerkzeuge eines Browsers sehen oder indem Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) in die Konsole ausgeben, zum Beispiel.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, betrachten wir HTTP/1.1-Nachrichten und untersuchen die Struktur. Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionaler Satz von _HTTP-Headern_, der Metadaten enthält, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage für eine Ressource die erlaubten Formate dieser Ressource enthalten, während die Antwort Header enthalten könnte, die das tatsächlich zurückgegebene Format anzeigen.
3. Eine leere Zeile, die anzeigt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnten POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der Teil danach, der den Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Betrachten wir das folgende Beispiel einer HTTP-`POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite eingereicht hat:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49

name=FirstName+LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Anfragezeile" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch bekannt als ein _HTTP-Verb_) ist eines von mehreren definierten Wörtern, das die Bedeutung der Anfrage und das gewünschte Ergebnis beschreibt. Beispielsweise zeigt `GET` an, dass der Client eine Ressource als Antwort erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anforderungsziel ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert. Das Format des Anforderungsziels hängt von der verwendeten HTTP-Methode und dem Anforderungskontext ab. Es wird im Abschnitt [Anforderungsziele](#anforderungsziele) weiter unten ausführlicher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version für die Antwort dient. Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind. In HTTP/2 und darüber hinaus ist die Protokollversion in Nachrichten nicht enthalten, da sie aus dem Verbindungsaufbau hervorgeht.

### Anforderungsziele

Es gibt einige Möglichkeiten, ein Anforderungsziel zu beschreiben, aber bei weitem am häufigsten ist die "Ursprungsform". Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In _Ursprungsform_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann zum Pfad für zusätzliche Informationen hinzugefügt werden (normalerweise im `key=value`-Format). Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` beim Verbinden mit einem Proxy verwendet:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _Autoritätsform_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Sternchenform_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) anstelle einer benannten Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrage-Header

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden. Im [Formularbeispiel](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49
```

In HTTP/1.x ist jeder Header ein **nicht-empfindlicher** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt. Der gesamte Header einschließlich des Wertes besteht aus einer einzigen Zeile. Diese Zeile kann in einigen Fällen ziemlich lang sein, z. B. der {{HTTPHeader("Cookie")}}-Header.

![Beispiel für Header in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können, oder sie könnten eine spezifischere Kategorisierung haben:

- {{Glossary("Request_header", "Anfrage-Header")}} geben zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z. B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentations-Header")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewendete Kodierung. Dies ermöglicht es dem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Anfrage-Body

Der Anfragetext ist der Teil einer Anfrage, der Informationen an den Server überträgt. Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body. Im [Formularbeispiel](#http-anfragen) ist dies der Body:

```http
name=FirstName+LastName&email=bsmth%40example.com
```

Der Body in der Formulardateneinreichungsanfrage enthält eine relativ kleine Informationsmenge als `key=value`-Paare, aber ein Anfragetext könnte andere Datentypen enthalten, die der Server erwartet:

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

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage an den Client sendet. Die Antwort teilt dem Client mit, wie das Ergebnis der Anfrage ausfiel. Hier ist ein Beispiel für eine HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist. Gebräuchliche Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<reason-phrase>` {{optional_inline}}
  - : Der optionale Text nach dem Statuscode ist eine kurze, rein informative, textuelle Beschreibung des Status, um einem Mensch zu helfen, das Ergebnis einer Anfrage zu verstehen. Der Grundsatz ist gelegentlich in Klammern (z. B. "201 (Created)") angegeben, um anzugeben, dass er optional ist.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden. In HTTP/1.x ist jeder Header ein **nicht-empfindlicher** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt.

![Beispiel für Header in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfragen-Header gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie sind kategorisiert als:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen sollte. Zum Beispiel beinhalten Header wie {{HTTPHeader("Server")}} Informationen über die Server-Software, während {{HTTPHeader("Date")}} beinhaltet, wann die Antwort generiert wurde. Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentations-Header")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewendete Kodierung. Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, lokalisiert für eine bestimmte geschriebene Sprache oder geografische Region, und/oder komprimiert oder anderweitig für die Übertragung kodiert sein. Dies ermöglicht es einem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung war.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird. In erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET`-Anfrage angefordert hat. Gibt es Probleme mit der Anfrage des Clients, ist es üblich, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und Hinweise gibt, ob es sich um ein dauerhaftes oder vorübergehendes Problem handelt.

Antwortkörper können sein:

- Einzelressourcen-Körper, die durch die beiden Header {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}} definiert sind, oder von unbekannter Länge und in Teilen kodiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), die aus einem Body bestehen, der mehrere Teile enthält, jeweils mit unterschiedlichen Informationen. Multipart-Bodies sind in der Regel mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verbunden, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Inhalte enthalten sein müssen, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2 Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu erstellen sind, bringt aber ein paar Nachteile mit sich. Man kann Nachrichtentexte mit `gzip` oder anderen Komprimierungsalgorithmen komprimieren, jedoch nicht die Header. Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, aber sie werden in aufeinanderfolgenden Nachrichten auf einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um wiederholten Text sehr effizient zu komprimieren, was eine Menge Bandbreitenersparnis ungenutzt lässt.

HTTP/1.x hat auch ein Problem namens {{Glossary("Head_of_line_blocking", "HEAD-of-Line-Blocking (HOL)")}}, bei dem ein Client auf eine Antwort des Servers warten muss, bevor er die nächste Anfrage sendet. HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dies zu umgehen, aber schlechte Unterstützung und Komplexität machen es selten verwendet und schwierig, es richtig zu machen. Es müssen mehrere Verbindungen geöffnet werden, um Anfragen gleichzeitig zu senden; und warme (etablierte und ausgelastete) Verbindungen sind effizienter als kalte aufgrund des langsamen Starts von TCP.

In HTTP/1.1, wenn Sie zwei Anfragen parallel stellen wollen, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen gleichzeitig an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, eingeschränkt sind, was typischerweise auf 6 parallele Verbindungen begrenzt war.

HTTP/2 erlaubt Ihnen, eine einzelne TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden. Dies geschieht, indem Nachrichten in einen binären Rahmen gewickelt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden. Daten- und Headerrahmen werden separat behandelt, was es ermöglicht, Header mit einem Algorithmus namens HPACK zu komprimieren. Die gleiche TCP-Verbindung zu verwenden, um mehrere Anfragen gleichzeitig zu bearbeiten, nennt man _Multiplexing_.

![Multiplexing von Anfragen und Antworten in HTTP/2 unter Verwendung einer einzelnen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequenziell: Stream 9 muss nicht warten, bis Stream 7 abgeschlossen ist, beispielsweise. Die Daten von mehreren Streams sind auf der Verbindung normalerweise vermischt, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können. Es gibt einen Mechanismus für das Protokoll, um eine Priorität für jeden Stream oder jede Ressource festzulegen. Ressourcen mit niedriger Priorität beanspruchen weniger Bandbreite als höher priorisierte Ressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv sequenziell auf derselben Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen, trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, sind praktisch keine Änderungen an den APIs nötig, die Entwickler verwenden, um HTTP/2 über HTTP/1.x zu nutzen. Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es eingeschaltet und automatisch verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Wo HTTP/1.x die Startzeile der Nachricht verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schema-Teil der Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Autoritätsteil der Ziel-URI.
- `:path` - der Pfad und die Abfrageteile der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort angibt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) stellen, um `example.com` abzurufen, was die Anfrage in einer Form ausgibt, die lesbarer ist. Sie können die Anfrage mit diesem Befehl stellen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'verbose' Ausgabe steht, die Empfang und Übermittlung von Rahmen zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie die Ausgabe durchsehen, sehen Sie das Timing für jeden gesendetem und empfangenem Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach der Header-Übertragung werden Sie die folgenden Zeilen sehen:

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

Dies sollte Ihnen bekannt vorkommen, wenn Sie bereits vertraut mit HTTP/1.x arbeiten, und die in der früheren Abschnitt dieses Leitfadens behandelten Konzepte gelten immer noch. Dies ist der binäre Rahmen mit der `GET`-Anfrage für `example.com`, konvertiert in eine lesbare Form durch `nghttp`. Wenn Sie weiter unten den Output des Befehls sehen, werden Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams sehen:

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

Und wenn Sie das Timing und die Stream-ID aus dieser Nachricht entfernen, sollte es noch vertrauter sein:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Weiter in die kleinen Details von Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird, geht über den Umfang dieses Leitfadens hinaus, aber zum Zweck des Verständnisses und Debuggens von HTTP/2-Nachrichten sollten Sie gut gerüstet sein, die in diesem Artikel genannten Kenntnisse und Werkzeuge zu verwenden.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten anhand des HTTP/1.1-Formats als Illustration. Wir haben auch das Framing von HTTP/2-Nachrichten untersucht, das eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführt, ohne die Semantiken von HTTP grundlegend zu ändern. HTTP/2 wurde eingeführt, um die Probleme des {{Glossary("head_of_line_blocking", "head-of-line blocking")}}, die in HTTP/1.x vorhanden sind, zu lösen, indem das Multiplexing von Anfragen ermöglicht wird.

Ein Problem, das in HTTP/2 verblieben ist, ist, dass obwohl das head-of-line blocking auf Protokollebene behoben wurde, es immer noch eine Leistungsengstelle aufgrund von head-of-line blocking innerhalb des TCP (auf Transporteebene) gibt. HTTP/3 adressiert diese Einschränkung durch die Verwendung von QUIC, einem auf UDP basierenden Protokoll, anstelle von TCP. Diese Änderung verbessert die Leistung, reduziert die Verbindungsaufbauzeit und erhöht die Stabilität auf beschädigten oder unzuverlässigen Netzwerken. HTTP/3 behält die gleichen grundlegenden HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header in allen drei Hauptversionen von HTTP konsistent bleiben.

Wenn Sie die Semantiken von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu verstehen. Der Hauptunterschied liegt in **wie** diese Semantiken auf der Transporteebene implementiert sind. Indem Sie den Beispielen und Konzepten in diesem Leitfaden folgen, sollten Sie jetzt in der Lage sein, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen und wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
