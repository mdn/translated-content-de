---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, der zum Datenaustausch zwischen einem Server und einem Client im HTTP-Protokoll verwendet wird. Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die der Server als Reaktion auf eine Anfrage sendet.

Entwickler erstellen HTTP-Nachrichten selten, wenn überhaupt, von Grund auf neu. Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die darauf ausgelegt ist, HTTP-Nachrichten auf zuverlässige und effiziente Weise zu erstellen. Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxys oder Server sowie andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis HTTP/2 sind die Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem Sie sich mit dem Format vertraut gemacht haben. In HTTP/2 sind die Nachrichten in eine binäre Struktur eingebunden, was sie ohne bestimmte Werkzeuge etwas schwieriger zu lesen macht. Die zugrundeliegende Semantik des Protokolls ist jedoch dieselbe, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten auf Grundlage des textbasierten Formats der HTTP/1.x-Nachrichten erlernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten für die Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten unter Verwendung des HTTP/1.1-Formats. Wir heben einige Unterschiede hervor, die Sie möglicherweise zur Beschreibung von HTTP/2 im letzten Abschnitt benötigen.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklertools eines Browsers sehen oder HTTP-Nachrichten in die Konsole drucken, indem Sie CLI-Tools wie [curl](https://curl.se/) verwenden.

## Aufbau einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, schauen wir uns HTTP/1.1-Nachrichten an und untersuchen die Struktur. Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_, die aus einer einzigen Zeile besteht, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Eine optionale Menge von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage für eine Ressource die erlaubten Formate dieser Ressource beinhalten, während die Antwort Header enthalten könnte, um das tatsächlich zurückgegebene Format anzuzeigen.
3. Eine leere Zeile, die angibt, dass die Metadaten der Nachricht abgeschlossen sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verknüpft sind. Dies könnten POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die an den Client in einer Antwort zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, wird von der Startzeile und den HTTP-Headern bestimmt.

Die Startzeile und die Header der HTTP-Nachricht werden zusammen als der _Kopf_ der Anfragen bezeichnet und der danach folgende Teil, der deren Inhalt enthält, wird als _Body_ bezeichnet.

## HTTP-Anfragen

Werfen wir einen Blick auf das folgende Beispiel einer HTTP-`POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abgeschickt hat:

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
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Methods) (auch bekannt als ein _HTTP-Verb_) ist eines von mehreren definierten Wörtern, das die Bedeutung der Anfrage und das gewünschte Ergebnis beschreibt. Zum Beispiel gibt `GET` an, dass der Client gerne eine Ressource im Gegenzug erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anfragenziel ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert. Das Format des Anfragenziels hängt von der verwendeten HTTP-Methode und dem Kontext der Anfrage ab. Es wird im Abschnitt über [Anfragenziele](#request-targets) weiter unten näher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der restlichen Nachricht definiert und als Indikator für die erwartete Version zur Verwendung in der Antwort dient. Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind. In HTTP/2 und darüber hinaus ist die Protokollversion in den Nachrichten nicht enthalten, da sie aus dem Verbindungsaufbau verstanden wird.

### Anfragenziele

Es gibt einige Möglichkeiten, ein Anfragenziel zu beschreiben, aber bei weitem die gebräuchlichste ist die "Ursprungsform". Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In der _Ursprungsform_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann an den Pfad angehängt werden, um zusätzliche Informationen zu erhalten (normalerweise im `key=value`-Format). Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Authority, und wird mit `GET` verwendet, wenn eine Verbindung zu einem Proxy hergestellt wird:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

3. Die _Authority-Form_ besteht aus der Authority und dem Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Asterisk-Form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) und nicht als benannte Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfragen-Header

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden. Im [Formularübermittlungsbeispiel](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header eine **nicht durch Groß-/Kleinschreibung unterscheidbare** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt. Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile. Diese Zeile kann in einigen Fällen ziemlich lang sein, wie z. B. der {{HTTPHeader("Cookie")}}-Header.

![Beispiel von Headern in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben könnten:

- {{Glossary("Request_header", "Anfragen-Header")}} bieten zusätzlichen Kontext für eine Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z. B. [bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)).
- {{Glossary("Representation_header", "Darstellungsheader")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewendete Kodierung. Dies ermöglicht es dem Empfänger zu verstehen, wie er die Ressource so rekonstruieren kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Anfragen-Body

Der Anfragen-Body ist der Teil einer Anfrage, der Informationen an den Server trägt. Nur `PATCH`, `POST` und `PUT` Anfragen haben einen Body. In dem [Formularübermittlungsbeispiel](#http-anfragen) ist dieser Teil der Body:

```http
name=FirstName%20LastName&email=bsmth%40example.com
```

Der Body in der Formularübermittlungsanfrage enthält eine relativ kleine Menge an Informationen als `key=value` Paare, aber ein Anfragen-Body könnte andere Datentypen enthalten, die der Server erwartet:

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

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage sendet. Die Antwort teilt dem Client mit, was das Ergebnis der Anfrage war. Hier ist ein Beispiel für eine HTTP/1.1 Antwort auf eine `POST` Anfrage, die einen neuen Benutzer erstellt hat:

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

Die Startzeile (`HTTP/1.1 201 Created` oben) in Antworten wird als "Statuszeile" bezeichnet und hat drei Teile:

```http
<protocol> <status-code> <status-text>
```

- `<protocol>`
  - : Die _HTTP-Version_ der restlichen Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist. Gängige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}}, oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textliche Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden. In HTTP/1.x ist jeder Header eine **nicht durch Groß-/Kleinschreibung unterscheidbare** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format davon abhängt, welcher Header verwendet wird.

![Beispiel von Headern in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfragen-Header gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie werden kategorisiert als:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen machen sollte. Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware, während {{HTTPHeader("Date")}} enthält, wann die Antwort generiert wurde. Es gibt auch Informationen über die zurückgegebene Ressource, wie deren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden sollte ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Darstellungsheader")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewendete Kodierung. Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, lokalisiert in einer bestimmten Schriftsprache oder geografischen Region, und/oder komprimiert oder anderweitig zur Übertragung kodiert sein. Dies ermöglicht es einem Empfänger zu verstehen, wie er die Ressource so rekonstruieren kann, wie sie war, bevor sie über das Netzwerk übertragen wurde.

### Antwort-Body

Ein Antwort-Body ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird. Bei erfolgreichen Anfragen enthält der Antwort-Body die Daten, die der Client in einer `GET` Anfrage angefordert hat. Wenn es Probleme mit der Anfrage des Clients gibt, ist es häufig, dass der Antwort-Body beschreibt, warum die Anfrage fehlgeschlagen ist, und andeutet, ob dies dauerhaft oder vorübergehend ist.

Antwort-Bodies können Folgendes sein:

- Single-Resource Bodies, die durch die zwei Header {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}} definiert sind, oder von unbekannter Länge und in Teile kodiert sind mit {{HTTPHeader("Transfer-Encoding")}}, die auf `chunked` gesetzt ist.
- [Mehrere-Ressourcen-Bodies](/de/docs/Web/HTTP/MIME_types#multipartform-data), die aus einem Body bestehen, der mehrere Teile enthält, wobei jeder ein anderes Informationsstück enthält. Multipart-Bodies sind typischerweise mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verbunden, können aber auch in Antwort auf [Range-Anfragen](/de/docs/Web/HTTP/Range_requests) gesendet werden. 

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass Nachrichteninhalt enthalten sein muss, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, haben aber als Ergebnis einige Nachteile. Sie können Nachrichten-Bodies mit `gzip` oder anderen Kompressionsalgorithmen komprimieren, aber nicht die Header. Header sind häufig ähnlich oder identisch in einer Client-Server-Interaktion, werden jedoch in aufeinanderfolgenden Nachrichten auf einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um sich wiederholenden Text sehr effizient zu komprimieren, was eine große Menge ungenutzter Bandbreiteneinsparung hinterlässt.

HTTP/1.x hat auch ein Problem, das als Head-of-Line (HOL) Blocking bezeichnet wird, bei dem ein Client auf eine Antwort vom Server warten muss, bevor er die nächste Anfrage sendet. HTTP [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) versuchte dies zu umgehen, aber schlechte Unterstützung und Komplexität bedeuten, dass es selten genutzt und schwierig korrekt zu implementieren ist. Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig zu senden; und warme (etablierte und viel genutzte) Verbindungen sind effizienter als kalte, aufgrund des langsamen Starts von TCP.

In HTTP/1.1, wenn Sie zwei Anfragen parallel machen möchten, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Dies bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, begrenzt sind, typischerweise auf 6 parallele Verbindungen.

HTTP/2 ermöglicht die Verwendung einer einzelnen TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig. Dies geschieht, indem Nachrichten in einen binären Rahmen eingewickelt und die Anfragen und Antworten in einem nummerierten **Strom** auf einer Verbindung gesendet werden. Daten- und Headerrahmen werden separat gehandhabt, was es erlaubt, Header über einen Algorithmus namens HPACK zu komprimieren. Die Verwendung derselben TCP-Verbindung zur Behandlung mehrerer Anfragen gleichzeitig wird als _Multiplexing_ bezeichnet.

![Multiplexing von Anfragen und Antworten in HTTP/2 unter Verwendung einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequenziell: Strom 9 muss nicht auf den Abschluss von Strom 7 warten, zum Beispiel. Die Daten von mehreren Strömen sind normalerweise auf der Verbindung verschachtelt, sodass Strom 9 und 7 gleichzeitig vom Client empfangen werden können. Es gibt einen Mechanismus im Protokoll, um eine Priorität für jeden Strom oder jede Ressource festzulegen. Ressourcen mit niedriger Priorität verbrauchen weniger Bandbreite als Ressourcen mit hoher Priorität, wenn sie über verschiedene Ströme gesendet werden, oder sie könnten effektiv auf derselben Verbindung sequenziell gesendet werden, wenn es kritische Ressourcen gibt, die zuerst gehandhabt werden sollten.

Im Allgemeinen sind trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, praktisch keine Änderungen in den von Entwicklern verwendeten APIs notwendig, um HTTP/2 über HTTP/1.x zu nutzen. Wenn HTTP/2 sowohl im Browser als auch im Server verfügbar ist, wird es aktiviert und automatisch verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung der Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Während HTTP/1.x die Nachrichten-Startzeile verwendet, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schemenanteil der Ziel-URI, häufig HTTP(S).
- `:authority` - der Authority-Teil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort liefert.

Wir können eine HTTP/2 Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) machen, um `example.com` abzurufen, das die Anfrage in einer Form ausgibt, die lesbarer ist. Sie können die Anfrage mit diesem Befehl machen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'Verbose'-Ausgabe steht, die Empfang und Versand von Rahmen zeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie den Output hinuntersehen, werden Sie das Timing für jeden gesendeten und empfangenen Rahmen sehen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail bei dieser Ausgabe gehen, aber achten Sie auf den `HEADERS` Rahmen im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach dem Header-Übermittlung sehen Sie die folgenden Zeilen:

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

Dies sollte vertraut aussehen, wenn Sie sich bereits mit der Arbeit mit HTTP/1.x auskennen und die in den früheren Abschnitten dieses Leitfadens behandelten Konzepte weiterhin gelten. Dies ist der binäre Rahmen mit der `GET` Anfrage für `example.com`, von `nghttp` in eine lesbare Form konvertiert. Wenn Sie weiter unten im Output des Befehls schauen, werden Sie den `:status` Pseudo-Header in einem der empfangenen Ströme von dem Server sehen:

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

Weiter in Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird, eingehen, geht über den Umfang dieses Leitfadens hinaus, aber um HTTP/2 Nachrichten zu verstehen und zu debuggen, sollten Sie mit dem Wissen und den Werkzeugen in diesem Artikel gut ausgerüstet sein.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über den Aufbau von HTTP-Nachrichten, wobei das HTTP/1.1-Format zur Veranschaulichung verwendet wird. Wir haben auch die Rahmenstruktur von HTTP/2-Nachrichten untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem darunterliegenden Transportprotokoll hinzufügt, ohne die HTTP-Semantik grundlegend zu ändern. HTTP/2 wurde eingeführt, um die Head-of-Line-Blocking-Probleme zu lösen, die in HTTP/1.x vorhanden sind, indem das Multiplexing von Anfragen ermöglicht wird.

Ein Problem, das in HTTP/2 geblieben ist, ist, dass obwohl das Head-of-Line-Blocking auf der Protokollebene behoben wurde, eine Performance-Einschränkung aufgrund von Head-of-Line-Blocking innerhalb von TCP (auf der Transportebene) besteht. HTTP/3 geht diese Einschränkung an, indem es QUIC verwendet, ein Protokoll, das auf UDP statt TCP aufbaut. Diese Änderung verbessert die Leistung, verringert die Verbindungsaufbauzeit und erhöht die Stabilität in degradierenden oder unzuverlässigen Netzwerken. HTTP/3 behält die gleichen zentralen HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei großen HTTP-Versionen hinweg konsistent bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu verstehen. Der Hauptunterschied liegt darin, **wie** diese Semantiken auf der Transporteebene implementiert sind. Indem Sie den Beispielen und Konzepten in diesem Leitfaden folgen, sollten Sie sich nun befähigt fühlen, mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen sowie zu erkennen, wie Anwendungen HTTP zum Senden und Empfangen von Daten verwenden.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- Glossаре-Begriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
