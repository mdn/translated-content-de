---
title: HTTP-Nachrichten
slug: Web/HTTP/Guides/Messages
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**HTTP-Nachrichten** sind der Mechanismus, der im HTTP-Protokoll zum Datenaustausch zwischen einem Server und einem Client verwendet wird.
Es gibt zwei Arten von Nachrichten: **Anfragen**, die vom Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die Antwort, die der Server auf eine Anfrage sendet.

Entwickler erstellen HTTP-Nachrichten selten, wenn überhaupt, von Grund auf neu.
Anwendungen wie ein Browser, Proxy oder Webserver verwenden Software, die dafür entwickelt wurde, HTTP-Nachrichten zuverlässig und effizient zu erstellen.
Wie Nachrichten erstellt oder transformiert werden, wird über APIs in Browsern, Konfigurationsdateien für Proxies oder Server, oder andere Schnittstellen gesteuert.

In den HTTP-Protokollversionen bis HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem man sich mit dem Format vertraut gemacht hat.
In HTTP/2 sind Nachrichten in binäre Rahmen eingepackt, wodurch sie etwas schwieriger ohne bestimmte Werkzeuge zu lesen sind.
Die zugrunde liegende Semantik des Protokolls bleibt jedoch die gleiche, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten auf der Grundlage des textbasierten Formats von HTTP/1.x-Nachrichten lernen können und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erklärt die Struktur von HTTP-Nachrichten anhand des HTTP/1.1-Formats.
Wir heben einige Unterschiede hervor, die Sie möglicherweise zur Beschreibung von HTTP/2 benötigen, im letzten Abschnitt.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklertools eines Browsers einsehen oder indem Sie HTTP-Nachrichten mittels CLI-Tools wie [curl](https://curl.se/) zur Konsole ausgeben, zum Beispiel.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, betrachten wir HTTP/1.1-Nachrichten und untersuchen deren Struktur.
Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen in HTTP eine gemeinsame Struktur](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten haben eine ähnliche Struktur:

1. Eine _Startzeile_, eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Eine optionale Gruppe von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Zum Beispiel könnte eine Anfrage nach einer Ressource die zulässigen Formate dieser Ressource beinhalten, während die Antwort Header enthalten könnte, die das tatsächlich zurückgegebene Format angeben.
3. Eine leere Zeile, die angibt, dass die Metadaten der Nachricht vollständig sind.
4. Ein optionaler _Körper_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnte POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird.
   Ob eine Nachricht einen Körper enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht sind kollektiv als der _Kopf_ der Anfragen bekannt, und der Teil danach, der den Inhalt enthält, ist als der _Körper_ bekannt.

## HTTP-Anfragen

Betrachten wir das folgende Beispiel einer HTTP `POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite abschickt:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49

name=FirstName+LastName&email=bsmth%40example.com
```

Die Startzeile in HTTP/1.x-Anfragen (`POST /users HTTP/1.1` im obigen Beispiel) wird als "Anfragelinie" bezeichnet und besteht aus drei Teilen:

```http
<method> <request-target> <protocol>
```

- `<method>`
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Reference/Methods) (auch als _HTTP-Verb_ bekannt) ist eines von mehreren definierten Wörtern, das die Bedeutung der Anfrage und das gewünschte Ergebnis beschreibt.
    Zum Beispiel bedeutet `GET`, dass der Client gerne eine Ressource erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anfrage-Ziel ist in der Regel eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert.
    Das Format des Anfrage-Ziels hängt von der verwendeten HTTP-Methode und dem Anfragekontext ab.
    Es wird im Abschnitt [Anfrage-Ziele](#anfrage-ziele) weiter unten ausführlicher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator für die erwartete Version zur Antwortherstellung dient.
    Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind.
    In HTTP/2 und höher ist die Protokollversion in den Nachrichten nicht enthalten, da diese aus der Verbindungsherstellung resultiert.

### Anfrage-Ziele

Es gibt einige Möglichkeiten, ein Anfrage-Ziel zu beschreiben, aber die bei weitem häufigste ist die "origin form".
Hier ist eine Liste der Arten von Zielen und wann sie verwendet werden:

1. In der _origin form_ kombiniert der Empfänger einen absoluten Pfad mit den Informationen aus dem {{HTTPHeader("Host")}}-Header.
   Eine Abfragezeichenkette kann für zusätzliche Informationen (in der Regel im `key=value`-Format) an den Pfad angehängt werden.
   Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

2. Die _absolute form_ ist eine vollständige URL inklusive der Authority und wird mit `GET` beim Verbinden zu einem Proxy verwendet:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages HTTP/1.1
   ```

3. Die _authority form_ ist die Authority und der Port, getrennt durch einen Doppelpunkt (`:`).
   Sie wird nur mit der Methode {{HTTPMethod("CONNECT")}} verwendet, wenn ein HTTP-Tunnel aufgebaut wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _asterisk form_ wird nur mit `OPTIONS` verwendet, wenn Sie den Server als Ganzes (`*`) darstellen möchten, im Gegensatz zu einer benannten Ressource:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anfragen-Header

Header sind Metadaten, die nach der Startzeile und vor dem Körper mit einer Anfrage gesendet werden.
Im [Beispiel für die Formularübermittlung](#http-anfragen) oben sind sie die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 49
```

In HTTP/1.x ist jeder Header eine **nicht-empfindliche** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format vom Header abhängt.
Der gesamte Header, einschließlich des Wertes, besteht aus einer einzigen Zeile.
Diese Zeile kann in einigen Fällen recht lang sein, wie z.B. dem {{HTTPHeader("Cookie")}}-Header.

![Beispiel für Header in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder sie eine spezifische Kategorisierung haben:

- {{Glossary("Request_header", "Anfragen-Header")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie sie von einem Server behandelt werden sollte (z.B. [bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentations-Header")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Körper hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewandte Kodierung.
  Dies ermöglicht dem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Anfrage-Körper

Der Anfrage-Körper ist der Teil einer Anfrage, der Informationen an den Server übermittelt.
Nur `PATCH`-, `POST`- und `PUT`-Anfragen enthalten einen Körper.
Im [Beispiel für die Formularübermittlung](#http-anfragen) ist dieser Teil der Körper:

```http
name=FirstName+LastName&email=bsmth%40example.com
```

Der Körper der Formularübermittlungsanfrage enthält eine relativ kleine Menge an Informationen als `key=value`-Paare, aber ein Anfragekörper könnte andere Arten von Daten enthalten, die der Server erwartet:

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
Die Antwort teilt dem Client mit, wie das Ergebnis der Anfrage war.
Hier ist eine Beispielantwort auf eine HTTP/1.1 `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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

Die Startzeile (`HTTP/1.1 201 Created` obene) wird in Antworten als "Statuszeile" bezeichnet und hat drei Teile:

```http
<protocol> <status-code> <status-text>
```

- `<protocol>`
  - : Die _HTTP-Version_ der restlichen Nachricht.
- `<status-code>`
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Reference/Status), der anzeigt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist.
    Häufige Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, reine informative, textuelle Beschreibung des Statuscodes, um einem Menschen zu helfen, die HTTP-Nachricht zu verstehen.

### Antwort-Header

Antwort-Header sind die Metadaten, die mit einer Antwort gesendet werden.
In HTTP/1.x ist jeder Header eine **nicht-empfindliche** Zeichenkette, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format davon abhängt, welcher Header verwendet wird.

![Beispiel für Header in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Wie Anfrage-Header, gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie sind kategorisiert als:

- {{Glossary("Response_header", "Antwort-Header")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie der Client nachfolgende Anfragen stellen sollte.
  Zum Beispiel enthalten Header wie {{HTTPHeader("Server")}} Informationen über die Server-Software, während {{HTTPHeader("Date")}} enthält, wann die Antwort generiert wurde.
  Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}) oder wie sie zwischengespeichert werden soll ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentations-Header")}}, wenn die Nachricht einen Körper hat, beschreiben sie die Form der Nachrichtendaten und jede angewandte Kodierung.
  Zum Beispiel könnte die gleiche Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert sein, lokalisiert auf eine bestimmte Schriftsprache oder geografische Region, und/oder komprimiert oder anderweitig für die Übertragung kodiert sein.
  Dies ermöglicht es einem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Antwort-Körper

Ein Antwort-Körper ist in den meisten Nachrichten enthalten, wenn auf einen Client geantwortet wird.
In erfolgreichen Anfragen enthält der Antwort-Körper die Daten, die der Client in einer `GET`-Anfrage angefordert hat.
Wenn es Probleme mit der Anfrage des Clients gibt, ist es üblich, dass der Antwort-Körper beschreibt, warum die Anfrage fehlgeschlagen ist, und andeutet, ob es sich um ein permanentes oder temporäres Problem handelt.

Antwort-Körper können sein:

- Einzelressourcen-Körper, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Abschnitten kodiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrere Ressourcen-Körper](/de/docs/Web/HTTP/Guides/MIME_types#multipartform-data), bestehend aus einem Körper, der mehrere Teile enthält, von denen jeder ein anderes Informationsstück enthält.
  Multipart-Körper sind in der Regel mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) assoziiert, können aber auch als Antwort auf [Range-Anfragen](/de/docs/Web/HTTP/Guides/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne dass es erforderlich ist, dass Nachrichteninhalt enthalten ist, wie beispielsweise {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Körper.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu erstellen sind, hat jedoch einige Nachteile.
Sie können Nachrichten-Körper mit `gzip` oder anderen Komprimierungsalgorithmen komprimieren, aber nicht die Header.
Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, werden jedoch in aufeinanderfolgenden Nachrichten einer Verbindung wiederholt.
Es gibt viele bekannte Methoden, repetitive Texte sehr effizient zu komprimieren, wodurch ein Großteil des Bandbreite-Einsparungspotentials ungenutzt bleibt.

HTTP/1.x hat auch ein Problem namens "Head-of-line Blocking" (HOL), bei dem ein Client auf eine Antwort des Servers warten muss, bevor er die nächste Anfrage senden kann.
HTTP [Pipelining](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dies zu umgehen, aber schlechte Unterstützung und Komplexität führen dazu, dass es selten verwendet wird und schwer richtig zu implementieren ist.
Mehrere Verbindungen müssen geöffnet werden, um Anfragen parallel zu senden; und warme (etablierte und ausgelastete) Verbindungen sind effizienter als kalte, aufgrund des langsamen Starts bei TCP.

In HTTP/1.1, wenn Sie zwei Anfragen parallel stellen möchten, müssen Sie zwei Verbindungen öffnen:

![Zwei HTTP-Anfragen parallel an einen Server stellen](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, begrenzt sind, was in der Regel auf 6 parallele Verbindungen begrenzt ist.

HTTP/2 ermöglicht es, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden.
Dies geschieht, indem Nachrichten in einen binären Rahmen gepackt und die Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung gesendet werden.
Daten- und Header-Rahmen werden separat gehandhabt, was es ermöglicht, Header mittels eines Algorithmus namens HPACK zu komprimieren.
Der Einsatz derselben TCP-Verbindung zum gleichzeitigen Handhaben mehrerer Anfragen wird als _Multiplexing_ bezeichnet.

![Multiplexing von Anfragen und Antworten in HTTP/2 mit einer einzigen TCP-Verbindung.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequenziell: Stream 9 muss nicht auf das Ende von Stream 7 warten, beispielsweise.
Die Daten von mehreren Streams sind normalerweise auf der Verbindung verschachtelt, sodass Stream 9 und 7 gleichzeitig vom Client empfangen werden können.
Es gibt einen Mechanismus im Protokoll, um jedem Stream oder jeder Ressource eine Priorität zuzuweisen.
Niedrigpriorisierte Ressourcen nehmen weniger Bandbreite ein als höher priorisierte Ressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv auf derselben Verbindung sequentiell gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

Im Allgemeinen sind trotz aller Verbesserungen und Abstraktionen gegenüber HTTP/1.x kaum Änderungen in den APIs erforderlich, die Entwickler verwenden, um HTTP/2 anstelle von HTTP/1.x zu nutzen.
Wenn HTTP/2 sowohl im Browser als auch auf dem Server verfügbar ist, wird es automatisch aktiviert und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung an Nachrichten in HTTP/2 ist der Einsatz von Pseudo-Headern.
Wo HTTP/1.x die Nachrichten-Startzeile verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen.
In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schema-Teil der Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Authority-Teil der Ziel-URI.
- `:path` - der Pfad und die Abfrageteile der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort liefert.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) stellen, um `example.com` abzurufen, der die Anfrage in einer lesbareren Form ausdruckt.
Sie können die Anfrage mit diesem Befehl stellen, wobei die Option `-n` die heruntergeladenen Daten verwirft und `-v` für 'verbose' Ausgabe steht, die Empfang und Übertragung von Rahmen anzeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie sich die Ausgabe anschauen, sehen Sie das Timing für jeden übertragenen und empfangenen Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail bei dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`.
In den Zeilen nach der Kopfzeilenübertragungen sehen Sie die folgenden Zeilen:

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

Dies sollte Ihnen vertraut vorkommen, wenn Sie bereits mit der Arbeit mit HTTP/1.x vertraut sind, und die in früheren Abschnitten dieses Leitfadens behandelten Konzepte gelten weiterhin.
Dies ist der binäre Rahmen mit der `GET`-Anfrage für `example.com`, umwandelt in eine lesbare Form durch `nghttp`.
Wenn Sie weiter unten in der Ausgabe des Befehls schauen, werden Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams sehen:

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

Tiefer in Nachrichtenrahmen, Stream-IDs und wie die Verbindung verwaltet wird zu dringen, überschreitet den Umfang dieses Leitfadens, aber zum Zweck des Verständnisses und der Fehlersuche von HTTP/2-Nachrichten, sollten Sie mit dem Wissen und den Werkzeugen in diesem Artikel gut gerüstet sein.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, indem das HTTP/1.1-Format zur Veranschaulichung verwendet wird.
Wir haben auch HTTP/2-Nachrichtenrahmen betrachtet, die eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführen, ohne die Semantik von HTTP grundlegend zu ändern.
HTTP/2 wurde eingeführt, um die Probleme von {{Glossary("head_of_line_blocking", "Head-of-line Blocking")}}, die in HTTP/1.x vorhanden sind, durch die Aktivierung von Multiplex-Anfragen zu lösen.

Ein Problem, das in HTTP/2 bestehen bleibt, besteht darin, dass auch wenn das Head-of-line Blocking auf Protokollebene gelöst wurde, es immer noch einen Leistungsflaschenhals durch Head-of-line Blocking innerhalb von TCP (auf Transporteebene) gibt.
HTTP/3 adressiert diese Einschränkung, indem es QUIC, ein auf UDP basierendes Protokoll, anstelle von TCP verwendet.
Diese Änderung verbessert die Leistung, verkürzt die Verbindungsaufbauzeit, und erhöht die Stabilität auf degradierten oder unzuverlässigen Netzwerken.
HTTP/3 behält die gleichen Kern-HTTP-Semantiken bei, sodass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei Haupt-HTTP-Versionen hinweg konsistent sind.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu verstehen.
Der Hauptunterschied liegt darin, **wie** diese Semantiken auf Transporteebene implementiert sind.
Indem Sie den Beispielen und Konzepten in diesem Leitfaden folgen, sollten Sie sich jetzt gut gerüstet fühlen, um mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen, und wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
