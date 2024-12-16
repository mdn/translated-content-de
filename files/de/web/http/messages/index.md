---
title: HTTP-Nachrichten
slug: Web/HTTP/Messages
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

**HTTP-Nachrichten** sind der Mechanismus, der zum Datenaustausch zwischen einem Server und einem Client im HTTP-Protokoll verwendet wird. Es gibt zwei Arten von Nachrichten: **Anfragen**, die von einem Client gesendet werden, um eine Aktion auf dem Server auszulösen, und **Antworten**, die der Server als Antwort auf eine Anfrage sendet.

Entwickler erstellen HTTP-Nachrichten selten, wenn überhaupt, von Grund auf. Anwendungen wie ein Browser, ein Proxy oder ein Webserver verwenden Software, die darauf ausgelegt ist, HTTP-Nachrichten zuverlässig und effizient zu erstellen. Wie Nachrichten erstellt oder umgewandelt werden, wird über APIs in Browsern, Konfigurationsdateien für Proxies oder Server oder andere Schnittstellen gesteuert.

In HTTP-Protokollversionen bis zu HTTP/2 sind Nachrichten textbasiert und relativ einfach zu lesen und zu verstehen, nachdem man sich mit dem Format vertraut gemacht hat. In HTTP/2 sind Nachrichten in binäre Rahmung eingeschlossen, was es etwas schwieriger macht, sie ohne bestimmte Tools zu lesen. Die zugrunde liegende Semantik des Protokolls bleibt jedoch dieselbe, sodass Sie die Struktur und Bedeutung von HTTP-Nachrichten basierend auf dem textbasierten Format von HTTP/1.x-Nachrichten lernen und dieses Verständnis auf HTTP/2 und darüber hinaus anwenden können.

Dieser Leitfaden verwendet HTTP/1.1-Nachrichten zur besseren Lesbarkeit und erläutert die Struktur von HTTP-Nachrichten unter Verwendung des Formats von HTTP/1.1. Wir heben einige Unterschiede hervor, die Sie möglicherweise benötigen, um HTTP/2 im letzten Abschnitt zu beschreiben.

> [!NOTE]
> Sie können HTTP-Nachrichten im **Netzwerk**-Tab der Entwicklertools eines Browsers sehen oder wenn Sie HTTP-Nachrichten an die Konsole ausgeben, indem Sie CLI-Tools wie [curl](https://curl.se/) verwenden, zum Beispiel.

## Anatomie einer HTTP-Nachricht

Um zu verstehen, wie HTTP-Nachrichten funktionieren, betrachten wir HTTP/1.1-Nachrichten und untersuchen die Struktur. Die folgende Abbildung zeigt, wie Nachrichten in HTTP/1.1 aussehen:

![Anfragen und Antworten teilen eine gemeinsame Struktur in HTTP](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)

Sowohl Anfragen als auch Antworten weisen eine ähnliche Struktur auf:

1. Eine _Startzeile_ ist eine einzelne Zeile, die die HTTP-Version zusammen mit der Anfragemethode oder dem Ergebnis der Anfrage beschreibt.
2. Ein optionaler Satz von _HTTP-Headern_, die Metadaten enthalten, die die Nachricht beschreiben. Zum Beispiel kann eine Anfrage nach einer Ressource die erlaubten Formate dieser Ressource enthalten, während die Antwort Header enthalten kann, die das tatsächlich zurückgegebene Format angeben.
3. Eine leere Zeile, die anzeigt, dass die Metadaten der Nachricht abgeschlossen sind.
4. Ein optionaler _Body_, der Daten enthält, die mit der Nachricht verbunden sind. Dies könnte POST-Daten sein, die in einer Anfrage an den Server gesendet werden, oder eine Ressource, die in einer Antwort an den Client zurückgegeben wird. Ob eine Nachricht einen Body enthält oder nicht, wird durch die Startzeile und die HTTP-Header bestimmt.

Die Startzeile und die Header der HTTP-Nachricht sind zusammen bekannt als der _Kopf_ der Anfragen, und der Teil danach, der deren Inhalt enthält, ist bekannt als der _Body_.

## HTTP-Anfragen

Betrachten wir das folgende Beispiel einer HTTP-`POST`-Anfrage, die gesendet wird, nachdem ein Benutzer ein Formular auf einer Webseite eingereicht hat:

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
  - : Die [HTTP-Methode](/de/docs/Web/HTTP/Methods) (auch bekannt als ein _HTTP-Verb_) ist eines von mehreren definierten Worten, die die Bedeutung der Anfrage und das gewünschte Ergebnis beschreiben.
    Zum Beispiel zeigt `GET` an, dass der Client eine Ressource im Gegenzug erhalten möchte, und `POST` bedeutet, dass der Client Daten an einen Server sendet.
- `<request-target>`
  - : Das Anfrageziel ist normalerweise eine absolute oder relative {{Glossary("URL", "URL")}} und wird durch den Kontext der Anfrage charakterisiert.
    Das Format des Anfrageziels hängt von der verwendeten HTTP-Methode und dem Anforderungskontext ab.
    Es wird in dem Abschnitt [Anfrageziele](#request-targets) weiter unten näher beschrieben.
- `<protocol>`
  - : Die _HTTP-Version_, die die Struktur der verbleibenden Nachricht definiert und als Indikator der erwarteten Version dient, die für die Antwort verwendet wird.
    Dies ist fast immer `HTTP/1.1`, da `HTTP/0.9` und `HTTP/1.0` veraltet sind.
    In HTTP/2 und darüber hinaus ist die Protokollversion nicht in Nachrichten enthalten, da sie aus dem Verbindungsaufbau verstanden wird.

### Anfrageziele

Es gibt einige Möglichkeiten, ein Anfrageziel zu beschreiben, aber bei weitem die häufigste ist die "Ursprungsform". Hier ist eine Liste der Zieltypen und wann sie verwendet werden:

1. In _Ursprungsform_ kombiniert der Empfänger einen absoluten Pfad mit der Information im {{HTTPHeader("Host")}}-Header. Eine Abfragezeichenfolge kann dem Pfad für zusätzliche Informationen angehängt werden (normalerweise im `key=value`-Format). Dies wird mit den Methoden `GET`, `POST`, `HEAD` und `OPTIONS` verwendet:

   ```http
   GET /en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

2. Die _absolute Form_ ist eine vollständige URL, einschließlich der Autorität, und wird mit `GET` beim Herstellen einer Verbindung zu einem Proxy verwendet:

   ```http
   GET https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
   ```

3. Die _Autoritätsform_ ist die Autorität und der Port, getrennt durch einen Doppelpunkt (`:`). Sie wird nur mit der {{HTTPMethod("CONNECT")}}-Methode verwendet, wenn ein HTTP-Tunnel eingerichtet wird:

   ```http
   CONNECT developer.mozilla.org:443 HTTP/1.1
   ```

4. Die _Sternchenform_ wird nur mit `OPTIONS` verwendet, wenn Sie den gesamten Server (`*`) anstelle einer benannten Ressource darstellen möchten:

   ```http
   OPTIONS * HTTP/1.1
   ```

### Anforderungsheader

Header sind Metadaten, die mit einer Anfrage nach der Startzeile und vor dem Body gesendet werden. Im [Formularübermittlungs-Beispiel](#http-anfragen) oben sind dies die folgenden Zeilen der Nachricht:

```http
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50
```

In HTTP/1.x ist jeder Header ein **nicht fallunterscheidender** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt. Der gesamte Header einschließlich des Werts besteht aus einer einzelnen Zeile. Diese Zeile kann in manchen Fällen recht lang sein, wie der {{HTTPHeader("Cookie")}}-Header.

![Beispiel für Header in einer HTTP-Anfrage](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)

Einige Header werden ausschließlich in Anfragen verwendet, während andere sowohl in Anfragen als auch in Antworten gesendet werden können oder eine spezifischere Kategorisierung haben:

- {{Glossary("Request_header", "Anforderungsheader")}} bieten zusätzlichen Kontext zu einer Anfrage oder fügen zusätzliche Logik hinzu, wie diese vom Server behandelt werden sollte (z.B. [bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)).
- {{Glossary("Representation_header", "Repräsentationsheader")}} werden in einer Anfrage gesendet, wenn die Nachricht einen Body hat, und sie beschreiben die ursprüngliche Form der Nachrichtendaten und jede angewendete Kodierung.
  Dies ermöglicht dem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Anforderungskörper

Der Anforderungskörper ist der Teil einer Anfrage, der Informationen an den Server trägt. Nur `PATCH`, `POST` und `PUT`-Anfragen haben einen Body. Im [Formularübermittlungs-Beispiel](#http-anfragen) ist dies der Body:

```http
name=FirstName%20LastName&email=bsmth%40example.com
```

Der Body der Formularübermittlungsanfrage enthält eine relativ geringe Menge an Informationen in `key=value`-Paaren, aber ein Anforderungskörper könnte andere Arten von Daten enthalten, die der Server erwartet:

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

Antworten sind die HTTP-Nachrichten, die ein Server als Antwort auf eine Anfrage zurücksendet. Die Antwort teilt dem Client mit, was das Ergebnis der Anfrage war. Hier ist ein Beispiel für eine HTTP/1.1-Antwort auf eine `POST`-Anfrage, die einen neuen Benutzer erstellt hat:

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
  - : Ein numerischer [Statuscode](/de/docs/Web/HTTP/Status), der angibt, ob die Anfrage erfolgreich war oder fehlgeschlagen ist.
    Bekannte Statuscodes sind {{HTTPStatus("200")}}, {{HTTPStatus("404")}} oder {{HTTPStatus("302")}}.
- `<status-text>`
  - : Der Status-Text ist eine kurze, rein informative, textliche Beschreibung des Statuscodes, die einem Menschen helfen soll, die HTTP-Nachricht zu verstehen.

### Antwortheader

Antwortheader sind die Metadaten, die mit einer Antwort gesendet werden. In HTTP/1.x ist jeder Header ein **nicht fallunterscheidender** String, gefolgt von einem Doppelpunkt (`:`) und einem Wert, dessen Format von dem verwendeten Header abhängt.

![Beispiel für Header in einer HTTP-Antwort](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)

Ähnlich wie bei Anforderungsheadern gibt es viele verschiedene Header, die in Antworten erscheinen können, und sie sind wie folgt kategorisiert:

- {{Glossary("Response_header", "Antwortheader")}}, die zusätzlichen Kontext über die Nachricht geben oder zusätzliche Logik hinzufügen, wie nachfolgende Anfragen vom Client behandelt werden sollen.
  Zum Beispiel geben Header wie {{HTTPHeader("Server")}} Informationen über die Serversoftware an, während {{HTTPHeader("Date")}} enthält, wann die Antwort generiert wurde.
  Es gibt auch Informationen über die zurückgegebene Ressource, wie ihren Inhaltstyp ({{HTTPHeader("Content-Type")}}), oder wie sie zwischengespeichert werden soll ({{HTTPHeader("Cache-Control")}}).
- {{Glossary("Representation_header", "Repräsentationsheader")}}, wenn die Nachricht einen Body hat, beschreiben sie die Form der Nachrichtendaten und jede angewendete Kodierung.
  Zum Beispiel könnte dieselbe Ressource in einem bestimmten Medientyp wie XML oder JSON formatiert, in eine bestimmte geschriebene Sprache oder geografische Region lokalisiert und/oder für die Übertragung komprimiert oder anderweitig kodiert sein.
  Dies ermöglicht es einem Empfänger zu verstehen, wie die Ressource rekonstruiert werden kann, wie sie vor der Übertragung über das Netzwerk war.

### Antwortkörper

Ein Antwortkörper ist in den meisten Nachrichten enthalten, wenn auf eine Anfrage an einen Client geantwortet wird. Bei erfolgreichen Anfragen enthält der Antwortkörper die Daten, die der Client in einer `GET`-Anfrage angefordert hat. Wenn Probleme mit der Anfrage des Clients bestehen, ist es häufig, dass der Antwortkörper beschreibt, warum die Anfrage fehlgeschlagen ist, und Hinweise darauf gibt, ob es sich um ein dauerhaftes oder vorübergehendes Problem handelt.

Antwortkörper können sein:

- Einzelnressourcen-Körper, definiert durch die beiden Header: {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Length")}}, oder von unbekannter Länge und in Teilen codiert mit {{HTTPHeader("Transfer-Encoding")}} auf `chunked` gesetzt.
- [Mehrfachressourcen-Körper](/de/docs/Web/HTTP/MIME_types#multipartform-data), die aus einem Körper bestehen, der mehrere Teile enthält, jeder mit einem anderen Informationsstück.
  Mehrteilige Körper werden typischerweise mit [HTML-Formularen](/de/docs/Learn/Forms) assoziiert, können aber auch als Antwort auf [Bereichsanfragen](/de/docs/Web/HTTP/Range_requests) gesendet werden.

Antworten mit einem Statuscode, der die Anfrage beantwortet, ohne Inhaltsnachricht einschließen zu müssen, wie {{HTTPStatus("201", "201 Created")}} oder {{HTTPStatus("204", "204 No Content")}}, haben keinen Body.

## HTTP/2-Nachrichten

HTTP/1.x verwendet textbasierte Nachrichten, die einfach zu lesen und zu konstruieren sind, aber aus diesem Grund einige Nachteile haben. Sie können Nachrichtentexte mit `gzip` oder anderen Komprimierungsalgorithmen komprimieren, aber nicht Header. Header sind in einer Client-Server-Interaktion oft ähnlich oder identisch, aber sie werden in nachfolgenden Nachrichten auf einer Verbindung wiederholt. Es gibt viele bekannte Methoden, um sich wiederholenden Text effizient zu komprimieren, was ein großes Potenzial für Einsparungen bei der Bandbreite unerfüllt lässt.

HTTP/1.x hat auch ein Problem namens Head-of-Line-Blocking (HOL-Blocking), bei dem ein Client auf eine Antwort vom Server warten muss, bevor er die nächste Anfrage senden kann. HTTP [Pipelining](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x#http_pipelining) versuchte, dieses Problem zu umgehen, aber mangelhafte Unterstützung und Komplexität bedeuten, dass es selten verwendet wird und schwierig umzusetzen ist. Mehrere Verbindungen müssen geöffnet werden, um Anfragen gleichzeitig zu senden; und warme (etablierte und beschäftigte) Verbindungen sind effizienter als kalte aufgrund des TCP Slow Start.

In HTTP/1.1 müssen Sie, wenn Sie zwei Anfragen parallel stellen wollen, zwei Verbindungen öffnen:

![Making two HTTP requests to a server in parallel](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-1-connection.png)

Das bedeutet, dass Browser in der Anzahl der Ressourcen, die sie gleichzeitig herunterladen und rendern können, begrenzt sind, was typischerweise auf 6 parallele Verbindungen begrenzt war.

HTTP/2 ermöglicht es Ihnen, eine einzige TCP-Verbindung für mehrere Anfragen und Antworten gleichzeitig zu verwenden. Dies geschieht durch das Verpacken von Nachrichten in einen binären Rahmen und das Senden von Anfragen und Antworten in einem nummerierten **Stream** auf einer Verbindung. Daten- und Headerrahmen werden separat behandelt, was es ermöglicht, Header mithilfe eines Algorithmus namens HPACK zu komprimieren. Die Verwendung derselben TCP-Verbindung zur Bearbeitung mehrerer Anfragen gleichzeitig wird als _Multiplexing_ bezeichnet.

![Multiplexing requests and responses in HTTP/2 using a single TCP connection.](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-2-connection.png)

Anfragen sind nicht unbedingt sequentiell: Stream 9 muss nicht warten, bis Stream 7 fertig ist, zum Beispiel. Die Daten mehrerer Streams sind normalerweise auf der Verbindung verschachtelt, sodass Stream 9 und 7 vom Client zur selben Zeit empfangen werden können. Es gibt einen Mechanismus für das Protokoll, um eine Priorität für jeden Stream oder jede Ressource festzulegen. Niedrigprioritäre Ressourcen beanspruchen weniger Bandbreite als höherpriorisierte Ressourcen, wenn sie über verschiedene Streams gesendet werden, oder sie könnten effektiv in der gleichen Verbindung sequentiell gesendet werden, wenn es kritische Ressourcen gibt, die zuerst behandelt werden sollten.

In der Regel, trotz aller Verbesserungen und Abstraktionen, die über HTTP/1.x hinzugefügt wurden, sind keine Änderungen in den APIs erforderlich, die von Entwicklern verwendet werden, um von HTTP/2 gegenüber HTTP/1.x zu profitieren. Wenn HTTP/2 sowohl im Browser als auch im Server verfügbar ist, wird es automatisch eingeschaltet und verwendet.

### Pseudo-Header

Eine bemerkenswerte Änderung von Nachrichten in HTTP/2 ist die Verwendung von Pseudo-Headern. Wo HTTP/1.x die Nachrichtenstartzeile verwendete, verwendet HTTP/2 spezielle Pseudo-Header-Felder, die mit `:` beginnen. In Anfragen gibt es die folgenden Pseudo-Header:

- `:method` - die HTTP-Methode.
- `:scheme` - der Schema-Teil der Ziel-URI, der oft HTTP(S) ist.
- `:authority` - der Autoritätsteil der Ziel-URI.
- `:path` - der Pfad- und Abfrageteil der Ziel-URI.

In Antworten gibt es nur einen Pseudo-Header, und das ist der `:status`, der den Code der Antwort bereitstellt.

Wir können eine HTTP/2-Anfrage mit [nghttp](https://github.com/nghttp2/nghttp2) stellen, um `example.com` abzurufen, was die Anfrage in einer besser lesbaren Form ausgibt. Sie können die Anfrage mit diesem Befehl stellen, wobei die `-n`-Option die heruntergeladene Daten verwirft und `-v` für 'verbose'-Ausgabe steht, die Empfang und Übertragung von Rahmen anzeigt:

```bash
nghttp -nv https://www.example.com
```

Wenn Sie die Ausgabe durchsehen, sehen Sie das Timing für jeden übertragenen und empfangenen Rahmen:

```plain
[  0.123] <send|recv> <frame-type> <frame-details>
```

Wir müssen nicht zu sehr ins Detail dieser Ausgabe gehen, aber achten Sie auf den `HEADERS`-Rahmen im Format `[  0.123] send HEADERS frame ...`. In den Zeilen nach der Header-Übertragung sehen Sie folgende Zeilen:

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

Dies sollte bekannt vorkommen, wenn Sie bereits mit HTTP/1.x und den in dem früheren Abschnitt dieses Leitfadens behandelten Konzepten vertraut sind. Dies ist der binäre Rahmen mit der `GET`-Anfrage für `example.com`, in eine lesbare Form umgewandelt durch `nghttp`. Wenn Sie weiter unten in der Ausgabe des Befehls schauen, sehen Sie den `:status`-Pseudo-Header in einem der vom Server empfangenen Streams:

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

Und wenn Sie das Timing und die Stream-ID aus dieser Nachricht entfernen, sollte es noch bekannter sein:

```http
:status: 200
content-encoding: gzip
age: 112721
```

Weiter in die Nachrichtenausgabe, die Stream-IDs und wie die Verbindung verwaltet wird, zu graben, liegt außerhalb des Umfangs dieses Leitfadens, aber um HTTP/2-Nachrichten zu verstehen und zu debuggen, sollten Sie gut ausgestattet sein, indem Sie das Wissen und die Werkzeuge in diesem Artikel verwenden.

## Fazit

Dieser Leitfaden bietet einen allgemeinen Überblick über die Anatomie von HTTP-Nachrichten, dargestellt am Beispiel des HTTP/1.1-Formats. Wir haben auch die Nachrichtenrahmen von HTTP/2 untersucht, die eine Schicht zwischen der HTTP/1.x-Syntax und dem zugrunde liegenden Transportprotokoll einführen, ohne die Semantik von HTTP grundlegend zu ändern. HTTP/2 wurde eingeführt, um die Head-of-Line-Blocking-Probleme zu lösen, die in HTTP/1.x vorhanden sind, indem es Multiplexing von Anfragen ermöglicht.

Ein Problem, das in HTTP/2 geblieben ist, ist, dass selbst wenn das Head-of-Line-Blocking auf Protokollebene behoben wurde, es immer noch ein Leistungsengpass durch das Head-of-Line-Blocking innerhalb von TCP (auf Transportschicht) gibt. HTTP/3 löst diese Einschränkung, indem es QUIC, ein auf UDP aufgebautes Protokoll, anstelle von TCP verwendet. Diese Änderung verbessert die Leistung, verkürzt die Verbindungszeit und erhöht die Stabilität auf abgestuften oder unzuverlässigen Netzwerken. HTTP/3 behält die gleichen Kern-HTTP-Semantiken bei, so dass Funktionen wie Anfragemethoden, Statuscodes und Header über alle drei großen HTTP-Versionen hinweg konsistent bleiben.

Wenn Sie die Semantik von HTTP/1.1 verstehen, haben Sie bereits eine solide Grundlage, um HTTP/2 und HTTP/3 zu erfassen. Der Hauptunterschied liegt darin, **wie** diese Semantiken auf der Transportschicht implementiert sind. Indem Sie den Beispielen und Konzepten in diesem Leitfaden folgen, sollten Sie sich jetzt gut gerüstet fühlen, um mit HTTP zu arbeiten und die Bedeutung von Nachrichten zu verstehen sowie wie Anwendungen HTTP verwenden, um Daten zu senden und zu empfangen.

## Siehe auch

- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- Glossarpunkte:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
