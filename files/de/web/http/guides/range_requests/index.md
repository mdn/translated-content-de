---
title: HTTP-Range-Anfragen
short-title: Range requests
slug: Web/HTTP/Guides/Range_requests
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

Eine HTTP-{{HTTPHeader("Range")}}-Anfrage fordert den Server auf, Teile einer Ressource an einen Client zu senden. Range-Anfragen sind nützlich für verschiedene Clients, einschließlich Mediaplayern, die zufälligen Zugriff unterstützen, Datentools, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die Benutzern ermöglichen, einen Download zu pausieren und fortzusetzen.

## Überprüfung, ob ein Server Teilanfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}}-Header mit einem anderen Wert als `none` enthält, unterstützt der Server Range-Anfragen. Wenn Antworten den `Accept-Ranges`-Header auslassen, bedeutet dies, dass der Server Teilanfragen nicht unterstützt. Werden Range-Anfragen nicht unterstützt, können Anwendungen auf diese Bedingung reagieren; beispielsweise können Download-Manager Pause-Tasten deaktivieren, die auf Range-Anfragen angewiesen sind, um einen Download fortzusetzen.

Um zu überprüfen, ob ein Server Range-Anfragen unterstützt, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage senden, um Header zu inspizieren, ohne die Ressource vollständig anzufordern. Wenn Sie [curl](https://curl.se/) verwenden, können Sie das `-I`-Flag verwenden, um eine `HEAD`-Anfrage zu erstellen:

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

In dieser Antwort zeigt `Accept-Ranges: bytes` an, dass 'bytes' als Einheiten zur Definition eines Bereichs verwendet werden können (derzeit sind keine anderen Einheiten möglich). Der {{HTTPHeader("Content-Length")}}-Header ist ebenfalls hilfreich, da er die Gesamtgröße des Bildes angibt, wenn Sie dieselbe Anfrage stattdessen mit der `GET`-Methode stellen würden.

## Anfordern eines spezifischen Bereichs von einem Server

Wenn der Server Range-Anfragen unterstützt, können Sie angeben, welchen Teil (oder welche Teile) des Dokuments der Server zurückgeben soll, indem Sie den {{HTTPHeader("Range")}}-Header in einer HTTP-Anfrage einfügen.

### Einteilige Bereiche

Wir können einen einzelnen Bereich von einer Ressource anfordern, indem wir curl zur Veranschaulichung verwenden. Die Option `-H` hängt der Anfrage eine Kopfzeile an, die in diesem Fall der `Range`-Header ist, der die ersten 1024 Bytes anfordert. Die letzte Option ist `--output -`, die das Drucken der binären Ausgabe im Terminal ermöglicht:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

Die erstellte Anfrage sieht so aus:

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

Der {{HTTPHeader("Content-Length")}}-Header gibt die Größe des angeforderten Bereichs an, nicht die volle Größe des Bildes. Der {{HTTPHeader("Content-Range")}}-Antwortheader zeigt an, wo diese Teilnachricht innerhalb der vollständigen Ressource liegt.

### Mehrteilige Bereiche

Der {{HTTPHeader("Range")}}-Header ermöglicht es Ihnen auch, mehrere Bereiche gleichzeitig in einem mehrteiligen Dokument zu erhalten. Die Bereiche sind durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206", "206 Partial Content")}}-Status, wie unten gezeigt. Die Antwort enthält einen {{HTTPHeader("Content-Type")}}-Header, der angibt, dass ein mehrteiliger Byterange folgt. Der Abgrenzungsstring (`3d6b6a416f9b5` in diesem Fall) trennt die Nachrichtenteile, von denen jeder seine eigenen `Content-Type`- und `Content-Range`-Felder hat:

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

### Bedingte Range-Anfragen

Wenn Sie mehr Teile einer Ressource anfordern möchten, müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem letzten erhaltenen Fragment nicht geändert wurde.

Der {{HTTPHeader("If-Range")}}-HTTP-Anfragenheader macht eine Range-Anfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Range-Anfrage gestellt und der Server sendet eine {{HTTPStatus("206")}} `Partial Content`-Antwort mit dem entsprechenden Körper zurück. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200")}} `OK`-Status zurückgesendet. Dieser Header kann entweder mit einem {{HTTPHeader("Last-Modified")}}-Validierungstag oder mit einem {{HTTPHeader("ETag")}} verwendet werden, jedoch nicht mit beiden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Antworten auf Teilanfragen

Es gibt drei relevante Statuscodes, wenn es um Range-Anfragen geht:

- Eine erfolgreiche Range-Anfrage führt zu einem {{HTTPStatus("206")}} `Partial Content`-Status vom Server.
- Eine Range-Anfrage, die außerhalb der Grenzen liegt, resultiert in einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable`-Status, was bedeutet, dass keiner der Range-Werte den Bereich der Ressource überlappt. Zum Beispiel könnte der erste Byte-Position aller Bereiche größer als die Länge der Ressource sein.
- Wenn Range-Anfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK`-Status zurückgesendet und der gesamte Antwortkörper wird übertragen.

## Vergleich mit dem Chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}}-Header erlaubt Chunked-Encoding, was nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde. Der Server sendet Daten direkt an den Client, ohne die Antwort zu puffern oder die genaue Länge zu bestimmen, was die Latenz verbessert. Range-Anfragen und Chunking sind kompatibel und können mit oder ohne einander verwendet werden.

## Siehe auch

- Verwandte Statuscodes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
