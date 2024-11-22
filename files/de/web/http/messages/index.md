---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: f341bd4728d3448faf6b9fc3b45980c35c067f25
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, um Daten zwischen einem Server und einem Client im HTTP-Protokoll auszutauschen. Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die Antwort, die der Server auf eine Anfrage sendet.

Entwickler erstellen selten HTTP-Nachrichten von Grund auf. Anwendungen wie ein Browser, ein Proxy oder ein Webserver verwenden Software, die HTTP-Nachrichten auf zuverlässige und effiziente Weise erstellt. Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis zu HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben. In HTTP/2 sind Nachrichten in binärer Rahmenstruktur verpackt, was sie ohne bestimmte Werkzeuge etwas schwieriger zu lesen macht. Die zugrunde liegende Semantik des Protokolls bleibt jedoch gleich, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten, um die Lesbarkeit zu verbessern, und erklärt die Struktur von HTTP-Nachrichten anhand des Formats von HTTP/1.1. Wir heben einige Unterschiede hervor, die Sie möglicherweise benötigen, um HTTP/2 im letzten Abschnitt zu beschreiben.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklertools eines Browsers sehen oder wenn Sie HTTP-Nachrichten mit CLI-Tools wie [curl](https://curl.se/) an die Konsole ausgeben.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, betrachten wir HTTP/1.1-Nachrichten und untersuchen die Struktur. Die folgende Illustration zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionales Set von _HTTP-Headern_ mit Metadaten, die die Nachricht beschreiben. Zum Beispiel kann eine Anfrage für eine Ressource die zulässigen Formate dieser Ressource enthalten, während die Antwort Header enthalten kann, die das tatsächlich zurückgegebene Format angeben.
3. Eine leere Zeile, die anzeigt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnten POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, entscheidet sich anhand der Startzeile und der HTTP-Header.

Die Startzeile und Header der HTTP-Nachricht werden zusammen als _Kopf_ der Anfragen bezeichnet, und der Teil danach, der deren Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Betrachten wir das folgende Beispiel einer HTTP-`POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=FirstName%20LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Anfragelinie" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Methods) (auch als _HTTP-Verb_ bekannt) ist eines von mehreren definierten Wörtern, die die Bedeutung der Anfrage und das gewünschte Ergebnis beschreiben. Zum Beispiel zeigt `GET` an, dass der Client gerne eine Ressource zurückerhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anforderungsziel ist in der Regel eine absolute oder relative {{Glossary("URL", "URL")}} und zeichnet sich durch den Kontext der Anfrage aus. Das Format des Anforderungsziels hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab. Es wird im Abschnitt [Anforderungsziele](#request-targets) weiter unten detailliert beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version dient, die für die Antwort verwendet werden soll. Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind. In HTTP/2 und darüber hinaus ist die Protokollversion nicht in Nachrichten enthalten, da sie aus dem Verbindungsaufbau abgeleitet wird.

### Anforderungsziele

Es gibt einige Möglichkeiten, ein Anforderungsziel zu beschreiben, aber bei weitem die häufigste ist die "Origin-Form". Hier ist eine Liste der Arten von Zielen und wann sie verwendet werden:

1. In der _Origin-Form_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann an den Pfad angehängt werden, um zusätzliche Informationen bereitzustellen (normalerweise im `key=value`-Format). Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` verwendet, wenn eine Verbindung zu einem Proxy hergestellt wird:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

3. Die _authority-Form_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der Methode {{HTTPMethod("CONNECT")}} verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _asterisk Form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) und nicht als benannte Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfrageheader

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden. Im [Formularübermittlung-Beispiel](#http-anfragen) oben sind sie die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header ein **nicht fallunabhängiger** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile. Diese Zeile kann in einigen Fällen recht lang sein, wie etwa beim {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben können:

- {{Glossary("Request_header", "Anfrageheader")}} bieten zusätzlichen Kontext für eine Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z.B. [bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentationsheader")}} werden in eine Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewendete Kodierung. Dies ermöglicht es dem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Anfrage-Body

Der Anfrage-Body ist der Teil einer Anfrage, der Informationen an den Server überträgt. Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body. Im [Formularübermittlung-Beispiel](#http-anfragen) ist dieser Teil der Body:

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

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage zurücksendet. Die Antwort informiert den Client über das Ergebnis der Anfrage. Hier ist ein Beispiel für eine HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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

Die Startzeile (`HTTP/1.1 201 Created` oben) wird als "Statuszeile" in Antworten bezeichnet und hat drei Teile:

```http
<protocol> <status-code> <status-text>
```

- `<protocol>`
  - : Die _HTTP-Version_ der verbleibenden Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist. Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textliche Beschreibung des Statuscodes, um einem Menschen das Verständnis der HTTP-Nachricht zu erleichtern.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden. In HTTP/1.x ist jeder Header ein **nicht fallunabhängiger** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom verwendeten Header abhängt.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrageheader gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie werden in folgende Kategorien eingeteilt:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen sollte. Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Server-Software, während {{HTTPHeader("Date")}} das Datum enthält, wann die Antwort generiert wurde. Außerdem gibt es Informationen über die zurückgegebene Ressource, wie deren Inhaltstyp ({{HTTPHeader("Content-Type")}}), oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}} werden gesendet, wenn die Nachricht einen Body hat, und beschreiben die Form der Nachrichtendaten und jede angewendete Kodierung. Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp formatierte Form (wie XML oder JSON), in einer bestimmten Sprache oder geografischen Region lokalisiert und/oder für die Übertragung komprimiert oder anderweitig kodiert sein. Dies erlaubt es einem Empfänger zu verstehen, wie die Ressource rekonstruiert werden konnte, wie sie vor der Übertragung über das Netzwerk war.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird. Bei erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET`-Anfrage angefordert hat. Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und einen Hinweis darauf gibt, ob es sich um ein dauerhaftes oder ein temporäres Problem handelt.

Antwort-Bodys können folgende sein:

- Einzelnressourcen-Bodys, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Chunked-Codierung mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Bodys](/de/docs/Web/HTTP/MIME_types#multipartform-data), bestehend aus einem Body, der mehrere Teile enthält, von denen jeder ein anderes Stück Information enthält. Multipart-Bodys sind typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) assoziiert, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass es erforderlich ist, Nachrichteninhalt einzuschließen, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu erstellen sind, hat jedoch einige Nachteile. Sie können Nachrichten-Bodys mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, jedoch nicht die Header. Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, werden aber in aufeinanderfolgenden Nachrichten bei einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um wiederholten Text effizient zu komprimieren, was zu einer großen Menge ungenutzter Bandbreiteneinsparungen führt.

HTTP/1.x hat auch ein Problem namens Head-of-Line-Blocking (HOL-Blocking), bei dem ein Client auf eine Antwort vom Server warten muss, bevor er die nächste Anfrage senden kann. HTTP [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dies zu umgehen, aber schlechtes Support und Komplexität bedeutet, dass es selten verwendet wird und schwer richtig hinzubekommen ist. Es müssen mehrere Verbindungen geöffnet werden, um Anfragen gleichzeitig zu senden, und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte, aufgrund von TCP Slow Start.

In HTTP/1.1, wenn Sie zwei Anfragen parallel ausführen möchten, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server senden](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, beschränkt sind, was typischerweise auf 6 parallele Verbindungen beschränkt war.

HTTP/2 ermöglicht es Ihnen, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden. Dies geschieht, indem Nachrichten in einen binären Rahmen verpackt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden. Daten- und Header-Frames werden getrennt behandelt, was es ermöglicht, Header mithilfe eines Algorithmus namens HPACK zu komprimieren. Die gleiche TCP-Verbindung zur Handhabung mehrerer Anfragen gleichzeitig zu nutzen, wird als _Multiplexing_ bezeichnet.

![Multiplexing von Anfragen und Antworten in HTTP/2 mithilfe einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequenziell: Stream 9 muss nicht auf das Ende von Stream 7 warten, zum Beispiel. Die Daten aus mehreren Streams sind in der Regel in der Verbindung verflochten, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können. Es gibt einen Mechanismus, über den das Protokoll eine Priorität für jeden Stream oder jede Ressource festlegen kann. Ressourcen mit geringer Priorität beanspruchen weniger Bandbreite als hochpriorisierte Ressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv nacheinander auf derselben Verbindung gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen sind, trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, praktisch keine Änderungen an den von Entwicklern verwendeten APIs erforderlich, um HTTP/2 über HTTP/1.x zu verwenden. Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es automatisch aktiviert und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Während HTTP/1.x die Startzeile der Nachricht verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schementeil der Ziel-URI, was oft HTTP(S) ist.
- `:authority` - der Autoritätsteil der Ziel-URI.
- `:path` - der Pfad und der Abfrageteil der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, das `:status`, das den Code der Antwort bereitstellt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) durchführen, um `example.com` abzurufen, was die Anfrage in einer lesbareren Form ausgeben wird. Sie können die Anfrage mit diesem Befehl durchführen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für "verbose" steht, was den Empfang und die Übertragung von Frames zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie durch die Ausgabe scrollen, sehen Sie das Timing für jedes übertragene und empfangene Frame:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail dieser Ausgabe gehen, aber achten Sie auf das `HEADERS`-Frame im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach der Headerübertragung sehen Sie die folgenden Zeilen:

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

Dies sollte vertraut aussehen, wenn Sie bereits mit HTTP/1.x arbeiten und die in den früheren Abschnitten dieses Leitfadens behandelten Konzepte immer noch gelten. Dies ist der binäre Frame mit der `GET`-Anfrage für `example.com`, umgewandelt in eine lesbare Form durch `nghttp`. Wenn Sie weiter unten in der Ausgabe des Befehls schauen, werden Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams sehen:

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

Und wenn Sie das Timing und die Stream-ID aus dieser Nachricht entfernen, sollte es noch vertrauter aussehen:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Sich weiter in Nachrichtenframes, Stream-IDs und die Verwaltung der Verbindung zu vertiefen, liegt außerhalb des Umfangs dieses Leitfadens, aber zum Zweck des Verständnisses und Debuggens von HTTP/2-Nachrichten sollten Sie mit dem Wissen und den Werkzeugen in diesem Artikel gut ausgestattet sein.

## Abschluss

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, wobei das HTTP/1.1-Format zur Veranschaulichung verwendet wird. Wir haben auch die HTTP/2-Nachrichtenrahmen untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführen, ohne die Semantik von HTTP grundlegend zu ändern. HTTP/2 wurde eingeführt, um die in HTTP/1.x vorhandenen Head-of-Line-Blocking-Probleme zu lösen, indem Multiplexing von Anfragen ermöglicht wird.

Ein Problem, das in HTTP/2 verbleibt, ist, dass auch wenn das Head-of-Line-Blocking auf Protokollebene behoben wurde, es immer noch einen Leistungsengpass aufgrund von Head-of-Line-Blocking innerhalb von TCP (auf Transportschicht) gibt. HTTP/3 behebt diese Einschränkung, indem es QUIC, ein auf UDP basierendes Protokoll, anstelle von TCP verwendet. Diese Änderung verbessert die Leistung, reduziert die Verbindungsaufbauzeit und erhöht die Stabilität bei verschlechterten oder unzuverlässigen Netzwerken. HTTP/3 behält die gleichen grundlegenden HTTP-Semantiken bei, weshalb Funktionen wie Anfragemethoden, Statuscodes und Header konsistent über alle drei Hauptversionen von HTTP bleiben.

Wenn Sie die Semantiken von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu erfassen. Der Hauptunterschied liegt darin, **wie** diese Semantiken auf Transportschicht implementiert werden. Durch das Befolgen der Beispiele und Konzepte in diesem Leitfaden sollten Sie nun gut gerüstet sein, um mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen sowie wie Anwendungen HTTP zum Senden und Empfangen von Daten verwenden.
