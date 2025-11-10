---
title: HTTP-Bereichsanfragen
short-title: Range requests
slug: Web/HTTP/Guides/Range_requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Eine HTTP {{HTTPHeader("Range")}} Anfrage fordert den Server auf, Teile einer Ressource an einen Client zu senden. Bereichsanfragen sind nützlich für verschiedene Clients, einschließlich Mediaplayern, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die Nutzern das Anhalten und Fortsetzen eines Downloads ermöglichen.

## Überprüfen, ob ein Server Teilanfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}} Header mit einem Wert ungleich `none` enthält, unterstützt der Server Bereichsanfragen. Wenn Antworten den `Accept-Ranges` Header weglassen, deutet dies darauf hin, dass der Server keine Teilanfragen unterstützt. Wenn Bereichsanfragen nicht unterstützt werden, können Anwendungen sich an diese Bedingung anpassen; zum Beispiel können Download-Manager Anhalten-Schaltflächen deaktivieren, die auf Bereichsanfragen angewiesen sind, um einen Download fortzusetzen.

Um zu überprüfen, ob ein Server Bereichsanfragen unterstützt, können Sie eine {{HTTPMethod("HEAD")}} Anfrage senden, um die Header zu inspizieren, ohne die Ressource vollständig anzufordern. Wenn Sie [curl](https://curl.se/) verwenden, können Sie das `-I` Flag verwenden, um eine `HEAD` Anfrage zu stellen:

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

Die Antwort enthält nur Header und keinen Antwortinhalt:

```http
HTTP/2 200
content-type: image/jpeg
last-modified: Thu, 02 Feb 2017 11:15:53 GMT
…
accept-ranges: bytes
content-length: 146515
```

In dieser Antwort zeigt `Accept-Ranges: bytes` an, dass 'bytes' als Einheiten zur Definition eines Bereichs verwendet werden können (derzeit ist keine andere Einheit möglich). Der {{HTTPHeader("Content-Length")}} Header ist ebenfalls hilfreich, da er die Gesamtgröße des Bildes angibt, wenn Sie dieselbe Anfrage stattdessen mit der `GET` Methode stellen würden.

## Anfordern eines bestimmten Bereichs von einem Server

Wenn der Server Bereichsanfragen unterstützt, können Sie angeben, welchen Teil (oder welche Teile) des Dokuments Sie vom Server zurückgesendet bekommen möchten, indem Sie den {{HTTPHeader("Range")}} Header in einer HTTP-Anfrage einschließen.

### Einteilige Bereiche

Wir können einen einzelnen Bereich von einer Ressource anfordern, indem wir zur Veranschaulichung curl verwenden. Die `-H` Option hängt eine Headerzeile an die Anfrage an, in diesem Fall den `Range` Header, der die ersten 1024 Bytes anfordert. Die letzte Option ist `--output -`, die es erlaubt, die binäre Ausgabe im Terminal auszugeben:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

Die gestellte Anfrage sieht so aus:

```http
GET /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
Range: bytes=0-1023
```

Der Server antwortet mit einem {{HTTPStatus("206", "206 Partial Content")}} Status:

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

Der {{HTTPHeader("Content-Length")}} Header gibt die Größe des angeforderten Bereichs an, nicht die volle Größe des Bildes. Der {{HTTPHeader("Content-Range")}} Antwort-Header zeigt an, wo diese Teilnachricht innerhalb der gesamten Ressource steht.

### Mehrteilige Bereiche

Der {{HTTPHeader("Range")}} Header ermöglicht es auch, mehrere Bereiche gleichzeitig in einem mehrteiligen Dokument zu erhalten. Die Bereiche sind durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206", "206 Partial Content")}} Status, wie unten gezeigt. Die Antwort enthält einen {{HTTPHeader("Content-Type")}} Header, der anzeigt, dass ein mehrteiliger Bytebereich folgt. Die Trennzeichenkette (`3d6b6a416f9b5` in diesem Fall) trennt die Körperteile, von denen jeder seine eigenen `Content-Type` und `Content-Range` Felder hat:

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

Beim Fortsetzen der Anfrage nach weiteren Teilen einer Ressource müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem Empfang des letzten Fragments nicht verändert wurde.

Der {{HTTPHeader("If-Range")}} HTTP-Anfrage-Header macht eine Bereichsanfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Bereichsanfrage ausgeführt und der Server sendet eine {{HTTPStatus("206")}} `Partial Content` Antwort mit dem entsprechenden Inhalt zurück. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200")}} `OK` Status zurückgesendet. Dieser Header kann entweder mit einem {{HTTPHeader("Last-Modified")}} Validator oder mit einer {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Antworten auf Teilanfragen

Es gibt drei relevante Status, wenn mit Bereichsanfragen gearbeitet wird:

- Eine erfolgreiche Bereichsanfrage führt zu einem {{HTTPStatus("206")}} `Partial Content` Status vom Server.
- Eine Bereichsanfrage, die außerhalb des zulässigen Bereichs liegt, resultiert in einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable` Status, was bedeutet, dass keiner der Bereichswerte den Umfang der Ressource überschneidet. Zum Beispiel könnte der erste-Byte-pos jedes Bereichs größer als die Ressourcengröße sein.
- Wenn Bereichsanfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK` Status zurückgesendet und der gesamte Antwortinhalt wird übertragen.

## Vergleich mit chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}} Header ermöglicht chunked Encoding, das nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde. Der Server sendet Daten sofort an den Client, ohne die Antwort zu puffern oder die exakte Länge zu bestimmen, was zu einer verbesserten Latenz führt. Bereichsanfragen und Chunking sind kompatibel und können miteinander oder unabhängig voneinander verwendet werden.

## Siehe auch

- Verwandte Statuscodes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
