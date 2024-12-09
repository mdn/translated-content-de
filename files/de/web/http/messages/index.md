---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, der im HTTP-Protokoll zum Datenaustausch zwischen einem Server und einem Client verwendet wird. Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die das Ergebnis der Anfrage vom Server zurücksenden.

Entwickler bauen nur selten, wenn überhaupt, HTTP-Nachrichten von Grund auf neu. Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die entwickelt wurde, um HTTP-Nachrichten zuverlässig und effizient zu erstellen. Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokoll-Versionen bis HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben. In HTTP/2 sind Nachrichten in einen binären Rahmen eingebettet, was das Lesen ohne bestimmte Tools etwas schwieriger macht. Die grundlegenden Semantiken des Protokolls bleiben jedoch gleich, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten auf Basis des textbasierten Formats von HTTP/1.x lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten anhand des HTTP/1.1-Formats. Wir heben einige Unterschiede hervor, die Sie möglicherweise für die Beschreibung von HTTP/2 im letzten Abschnitt benötigen.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Network**-Tab der Entwicklerwerkzeuge eines Browsers sehen oder wenn Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) in die Konsole ausgeben, zum Beispiel.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, betrachten wir HTTP/1.1-Nachrichten und untersuchen die Struktur. Die folgende Illustration zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Eine optionale Reihe von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Beispielsweise könnte eine Anfrage nach einer Ressource die zulässigen Formate dieser Ressource einschließen, während die Antwort Header enthalten könnte, um das tatsächlich zurückgegebene Format anzugeben.
3. Eine Leerzeile, die anzeigt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten zur Nachricht enthält. Dies könnten POST-Daten sein, die an den Server in einer Anfrage gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und Header der HTTP-Nachricht werden zusammen als der _Kopf_ der Anfragen bezeichnet, und der danach befindliche Teil, der den Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Schauen wir uns das folgende Beispiel einer HTTP `POST`-Anfrage an, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite eingereicht hat:

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
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Methods) (auch bekannt als _HTTP-Verb_) ist eines von einer definierten Menge von Wörtern, die die Bedeutung der Anfrage und das gewünschte Ergebnis beschreiben. Zum Beispiel zeigt `GET` an, dass der Client eine Ressource im Austausch erhält, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Der Anforderungs-Zielort ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird gekennzeichnet durch den Kontext der Anfrage. Das Format des Anforderungs-Zielorts hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab. Es wird im Abschnitt [Anforderungs-Zielorte](#request-targets) unten genauer beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator der erwarteten Version für die Antwort dient. Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind. In HTTP/2 und höher ist die Protokollversion nicht in Nachrichten enthalten, da sie bei der Verbindungseinrichtung verstanden wird.

### Anforderungs-Zielorte

Es gibt mehrere Möglichkeiten, ein Anforderungs-Ziel zu beschreiben, aber bei weitem am häufigsten ist die "origin form". Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In _origin form_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann an den Pfad für zusätzliche Informationen (normalerweise im `key=value` Format) angehängt werden. Dies wird mit `GET`, `POST`, `HEAD` und `OPTIONS`-Methoden verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` verwendet, wenn eine Verbindung zu einem Proxy besteht:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

3. Die _authority form_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _asterisk form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) repräsentieren möchten, im Gegensatz zu einer benannten Ressource:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrage-Header

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden. Im [Formularübermittelungsbeispiel](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header eine **nicht-anfällig** Zeichenfolge, die von einem Doppelpunkt (`:`) und einem Wert gefolgt wird, dessen Format vom Header abhängt. Der ganze Header, einschließlich des Wertes, besteht aus einer einzigen Zeile. Diese Zeile kann in einigen Fällen ziemlich lang sein, wie z.B. der {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben könnten:

- {{Glossary("Request_header", "Anfrage-Header")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z.B. [konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentations-Header")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewandte Kodierung. Dies ermöglicht es dem Empfänger zu verstehen, wie die Ressource wiederhergestellt werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Anfrage-Body

Der Anfrage-Body ist der Teil einer Anfrage, der Informationen an den Server überträgt. Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body. Im [Formularübermittlungsbeispiel](#http-anfragen) ist dies der Body:

```http
name=FirstName%20LastName&email=bsmth%40example.com
```

Der Body in der Formularübermittlungsanfrage enthält eine relativ kleine Menge Informationen als `key=value`-Paare, aber ein Anfrage-Body könnte andere Arten von Daten enthalten, die der Server erwartet:

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

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage zurücksendet. Die Antwort lässt den Client wissen, was das Ergebnis der Anfrage war. Hier ist ein Beispiel für eine HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Status), der anzeigt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist. Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden. In HTTP/1.x ist jeder Header eine **nicht-anfällig** Zeichenfolge, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrage-Header gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie werden wie folgt kategorisiert:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext zur Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen soll. Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Server-Software, während {{HTTPHeader("Date")}} angibt, wann die Antwort generiert wurde. Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}), oder wie sie zwischengespeichert werden soll ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentations-Header")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewandte Kodierung. Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, auf eine bestimmte Schriftsprache oder geografische Region zugeschnitten und/oder komprimiert oder anderweitig für die Übertragung kodiert sein. Dies ermöglicht es einem Empfänger zu verstehen, wie die Ressource wiederhergestellt werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn eine Antwort an einen Client gesendet wird. In erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET`-Anfrage angefordert hat. Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und Hinweise gibt, ob es sich um ein permanentes oder temporäres Problem handelt.

Antwort-Bodys können sein:

- Einzelressourcen-Bodys, definiert durch die zwei Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Abschnitte kodiert, mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Bodys](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, von denen jeder ein anderes Stück Information enthält. Multipart-Bodys sind typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) assoziiert, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Daten in der Nachricht enthalten sein müssen, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, hat jedoch dadurch einige Nachteile. Sie können Nachrichtenbodys mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, aber nicht die Header. Header sind oft ähnlich oder identisch in einer Client-Server-Interaktion, werden jedoch in aufeinanderfolgenden Nachrichten bei einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um sich wiederholenden Text sehr effizient zu komprimieren, was zu einer ungenutzten großen Bandbreiteneinsparung führt.

HTTP/1.x hat auch ein Problem, das Kopfblockierung genannt wird, bei dem ein Client auf eine Antwort des Servers warten muss, bevor er die nächste Anfrage senden kann. HTTP [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dieses Problem zu umgehen, aber schlechte Unterstützung und Komplexität bedeuten, dass es selten verwendet und schwer richtig umzusetzen ist. Mehrere Verbindungen müssen geöffnet werden, um Anfragen parallel zu senden; und warme (etablierte und beschäftigt) Verbindungen sind effizienter als kalte aufgrund des TCP-Slow-Starts.

In HTTP/1.1 müssen Sie, wenn Sie zwei Anfragen parallel stellen möchten, zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Dies bedeutet, dass Browser in der Anzahl der Ressourcen eingeschränkt sind, die sie gleichzeitig herunterladen und rendern können, was typischerweise auf 6 parallele Verbindungen begrenzt wurde.

HTTP/2 erlaubt es, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden. Dies wird erreicht, indem Nachrichten in einen binären Rahmen eingebettet werden und die Anfragen und Antworten in einem nummerierten **Stream** über eine Verbindung gesendet werden. Daten- und Headerrahmen werden separat behandelt, was es ermöglicht, die Header über einen Algorithmus namens HPACK zu komprimieren. Die Verwendung derselben TCP-Verbindung zur gleichzeitigen Bearbeitung mehrerer Anfragen wird als _Multiplexing_ bezeichnet.

![Multiplexing von Anfragen und Antworten in HTTP/2 mit einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequentiell: Stream 9 muss nicht auf das Ende von Stream 7 warten. Die Daten aus mehreren Streams werden normalerweise auf der Verbindung vermischt, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können. Es gibt einen Mechanismus für das Protokoll, um eine Priorität für jeden Stream oder jede Ressource festzulegen. Niedrigprioritätsressourcen beanspruchen weniger Bandbreite als Hochprioritätsressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv nacheinander über dieselbe Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst bearbeitet werden sollten.

Im Allgemeinen sind trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, kaum Änderungen an den APIs erforderlich, die Entwickler verwenden, um HTTP/2 über HTTP/1.x zu nutzen. Wenn HTTP/2 sowohl im Browser als auch im Server verfügbar ist, wird es automatisch eingeschaltet und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Wo HTTP/1.x die Nachrichtenstartzeile verwendet hat, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Scheme-Teil des Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Autoritätsteil des Ziel-URI.
- `:path` - der Pfad- und Abfrage-Teil des Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort liefert.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) erstellen, um `example.com` abzurufen, was die Anfrage in einer lesbareren Form ausdrucken wird. Sie können die Anfrage mit diesem Befehl stellen, wobei die `-n`-Option die heruntergeladenen Daten verwirft und `-v` für 'verbose' Ausgabe dient, die Sendung und Empfang von Rahmen zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie durch die Ausgabe nach unten schauen, sehen Sie das Timing für jeden übertragenen und empfangenen Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach der Übertragung der Header sehen Sie die folgenden Zeilen:

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

Dies sollte vertraut aussehen, wenn Sie bereits mit HTTP/1.x vertraut sind, und die in dem vorherigen Abschnitt dieses Leitfadens behandelten Konzepte gelten weiterhin. Dies ist der binäre Rahmen mit der `GET`-Anfrage für `example.com`, umgewandelt in eine lesbare Form durch `nghttp`. Wenn Sie weiter unten in der Ausgabe des Befehls schauen, sehen Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams:

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

Und wenn Sie das Timing und die Stream-ID von dieser Nachricht entfernen, sollte es noch vertrauter sein:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Sich tiefer in Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird einzugraben, geht über den Rahmen dieses Leitfadens hinaus, aber für das Verständnis und die Fehlersuche von HTTP/2-Nachrichten sollten Sie mit dem Wissen und den Werkzeugen, die in diesem Artikel beschrieben sind, gut gerüstet sein.

## Schlussfolgerung

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, wobei das HTTP/1.1-Format zur Veranschaulichung verwendet wird. Wir haben auch die Rahmen von HTTP/2-Nachrichten untersucht, die eine Ebene zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführt, ohne die Semantik von HTTP grundlegend zu modifizieren. HTTP/2 wurde eingeführt, um die in HTTP/1.x vorhandenen Kopfblockierungsprobleme zu lösen, indem Multiplexing von Anfragen ermöglicht wurde.

Ein Problem, das in HTTP/2 weiterhin besteht, ist, dass selbst wenn Kopfblockierung auf Protokollebene behoben wurde, immer noch ein Leistungsengpass aufgrund von Kopfblockierung innerhalb von TCP (auf Transportunterlegungsebene) besteht. HTTP/3 adressiert diese Einschränkung durch den Einsatz von QUIC, einem Protokoll, das auf UDP statt TCP aufbaut. Diese Änderung verbessert die Leistung, verkürzt die Verbindungsaufbauzeit und erhöht die Stabilität bei verschlechterten oder unzuverlässigen Netzwerken. HTTP/3 behält dieselben grundlegenden HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei Haupt-HTTP-Versionen hinweg konsistent bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu erfassen. Der Hauptunterschied liegt darin, **wie** diese Semantiken auf Transportunterlegungsebene umgesetzt werden. Wenn Sie den in diesem Leitfaden beschriebenen Beispielen und Konzepten folgen, sollten Sie sich nun in der Lage fühlen, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen sowie zu verstehen, wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.
