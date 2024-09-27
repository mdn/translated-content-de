---
title: HTTP Range Requests
slug: Web/HTTP/Range_requests
l10n:
  sourceCommit: a038fd9512ac11d9055127f6c4f49ac4875aa840
---

{{HTTPSidebar}}

Eine HTTP {{HTTPHeader("Range")}}-Anfrage bittet den Server, Teile eines Ressourcen-Backups an einen Client zu senden.
Bereichsanfragen sind nützlich für verschiedene Clients, einschließlich Medienplayer, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die es Nutzern ermöglichen, einen Download zu pausieren und fortzusetzen.

## Überprüfen, ob ein Server Teilanfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}}-Header mit einem anderen Wert als `none` enthält, unterstützt der Server Bereichsanfragen.
Wenn Antworten den `Accept-Ranges`-Header weglassen, zeigt dies an, dass der Server keine Teilanfragen unterstützt.
Wenn Bereichsanfragen nicht unterstützt werden, können Anwendungen darauf reagieren; zum Beispiel können Download-Manager Pausentasten deaktivieren, die von Bereichsanfragen abhängig sind, um einen Download fortzusetzen.

Um zu überprüfen, ob ein Server Bereichsanfragen unterstützt, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage stellen, um Header zu inspizieren, ohne die Ressource vollständig anzufordern.
Wenn Sie [curl](https://curl.se/) verwenden, können Sie das `-I`-Flag verwenden, um eine `HEAD`-Anfrage zu stellen:

```bash
curl -I https://i.imgur.com/z4d4kWk.jpg
```

Dies erzeugt die folgende HTTP-Anfrage:

```http
HEAD /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Die Antwort enthält nur Header und keinen Antwortkörper:

```http
HTTP/2 200
content-type: image/jpeg
last-modified: Thu, 02 Feb 2017 11:15:53 GMT
…
accept-ranges: bytes
content-length: 146515
```

In dieser Antwort gibt `Accept-Ranges: bytes` an, dass 'Bytes' als Einheiten verwendet werden können, um einen Bereich zu definieren (derzeit ist keine andere Einheit möglich).
Der {{HTTPHeader("Content-Length")}}-Header ist ebenfalls hilfreich, da er die Gesamtgröße des Bildes angibt, falls Sie dieselbe Anfrage mit der `GET`-Methode stellen würden.

## Anfordern eines spezifischen Bereichs von einem Server

Wenn der Server Bereichsanfragen unterstützt, können Sie angeben, welchen Teil (oder welche Teile) des Dokuments der Server durch Einschließen des {{HTTPHeader("Range")}}-Headers in eine HTTP-Anfrage zurückgeben soll.

### Einzelne Bereichsanfragen

Wir können einen einzelnen Bereich aus einer Ressource anfordern, indem wir curl zur Veranschaulichung verwenden.
Die Option `-H` fügt der Anfrage eine Kopfzeile hinzu, die in diesem Fall der `Range`-Header ist, der die ersten 1024 Bytes anfordert.
Die letzte Option ist `--output -`, die es ermöglicht, die binäre Ausgabe im Terminal auszugeben:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

Die ausgegebene Anfrage sieht so aus:

```http
GET /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
Range: bytes=0-1023
```

Der Server antwortet mit einem {{HTTPStatus("206", "206 Partial Content")}}-Status:

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

Der {{HTTPHeader("Content-Length")}}-Header gibt die Größe des angeforderten Bereichs an, nicht die volle Größe des Bildes.
Der {{HTTPHeader("Content-Range")}}-Antwortheader gibt an, wo diese Teilnachricht innerhalb der vollständigen Ressource gehört.

### Mehrteilige Bereichsanfragen

Der {{HTTPHeader("Range")}}-Header ermöglicht es Ihnen auch, mehrere Bereiche gleichzeitig in einem mehrteiligen Dokument abzurufen. Die Bereiche werden durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206", "206 Partial Content")}}-Status wie unten gezeigt.
Die Antwort enthält einen {{HTTPHeader("Content-Type")}}-Header, der anzeigt, dass ein mehrteiliger Byterange folgt.
Die Grenzzeichenfolge (`3d6b6a416f9b5` in diesem Fall) trennt die Hauptteile, von denen jeder eigene `Content-Type`- und `Content-Range`-Felder hat:

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html lang="en-US">
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### Bedingte Bereichsanfragen

Wenn Sie weitere Teile einer Ressource anfordern, müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem Empfang des letzten Fragments nicht geändert wurde.

Der {{HTTPHeader("If-Range")}}-HTTP-Anfrageheader macht eine Bereichsanfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Bereichsanfrage ausgeführt und der Server sendet eine {{HTTPStatus("206")}} `Partial Content`-Antwort mit dem entsprechenden Körper zurück. Wenn die Bedingung nicht erfüllt ist, wird die volle Ressource mit einem {{HTTPStatus("200")}} `OK`-Status zurückgesendet. Dieser Header kann entweder mit einem {{HTTPHeader("Last-Modified")}}-Validator oder mit einem {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Teilanfrage-Antworten

Es gibt drei relevante Statuscodes, wenn man mit Bereichsanfragen arbeitet:

- Eine erfolgreiche Bereichsanfrage führt zu einem {{HTTPStatus("206")}} `Partial Content`-Status vom Server.
- Eine Bereichsanfrage, die außerhalb der Grenzen liegt, führt zu einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable`-Status, was bedeutet, dass keiner der Bereichswerte mit dem Umfang der Ressource überlappt. Zum Beispiel könnte der Anfangsbyte-Punkt jedes Bereichs größer sein als die Ressourcenlänge.
- Wenn Bereichsanfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK`-Status zurückgesendet und der gesamte Antwortkörper übertragen.

## Vergleich zu chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}}-Header ermöglicht Chunked-Encoding, was nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort erst bekannt ist, wenn die Anfrage vollständig verarbeitet wurde. Der Server sendet Daten direkt an den Client, ohne die Antwort zu puffern oder die exakte Länge zu bestimmen, was zu einer verbesserten Latenz führt. Bereichsanfragen und Chunking sind kompatibel und können mit oder ohne einander verwendet werden.

## Siehe auch

- Verwandte Statuscodes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
