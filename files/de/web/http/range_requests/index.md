---
title: HTTP Range-Anfragen
slug: Web/HTTP/Range_requests
l10n:
  sourceCommit: a038fd9512ac11d9055127f6c4f49ac4875aa840
---

{{HTTPSidebar}}

Eine HTTP-{{HTTPHeader("Range")}}-Anfrage fordert den Server auf, Teile einer Ressource an einen Client zu senden. Range-Anfragen sind nützlich für verschiedene Clients wie Medienplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und Download-Manager, die Benutzern ermöglichen, einen Download zu pausieren und fortzusetzen.

## Überprüfung, ob ein Server Teilanfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}}-Header mit einem Wert ungleich `none` enthält, unterstützt der Server Range-Anfragen. Wenn Antworten den `Accept-Ranges`-Header weglassen, zeigt dies an, dass der Server keine Teilanfragen unterstützt. Wenn Range-Anfragen nicht unterstützt werden, können Anwendungen auf diese Bedingung reagieren; beispielsweise können Download-Manager Pause-Schaltflächen deaktivieren, die auf Range-Anfragen angewiesen sind, um einen Download fortzusetzen.

Um zu überprüfen, ob ein Server Range-Anfragen unterstützt, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage stellen, um die Header zu inspizieren, ohne die Ressource vollständig anzufordern. Wenn Sie [curl](https://curl.se/) verwenden, können Sie das `-I`-Flag nutzen, um eine `HEAD`-Anfrage zu stellen:

```bash
curl -I https://i.imgur.com/z4d4kWk.jpg
```

Dies führt zu der folgenden HTTP-Anfrage:

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

In dieser Antwort zeigt `Accept-Ranges: bytes` an, dass 'bytes' als Einheiten zur Definition eines Bereichs verwendet werden können (derzeit ist keine andere Einheit möglich). Der {{HTTPHeader("Content-Length")}}-Header ist ebenfalls hilfreich, da er die Gesamtgröße des Bildes angibt, wenn Sie dieselbe Anfrage mit der `GET`-Methode stellen würden.

## Anforderung eines bestimmten Bereichs von einem Server

Wenn der Server Range-Anfragen unterstützt, können Sie angeben, welchen Teil (oder welche Teile) des Dokuments Sie vom Server erhalten möchten, indem Sie den {{HTTPHeader("Range")}}-Header in einer HTTP-Anfrage einfügen.

### Einteilige Bereiche

Wir können einen einzelnen Bereich von einer Ressource anfordern und dazu curl zur Veranschaulichung verwenden. Die `-H`-Option fügt der Anfrage eine Headerzeile hinzu, in diesem Fall den `Range`-Header, der die ersten 1024 Bytes anfordert. Die letzte Option ist `--output -`, die das Drucken der Binärausgabe auf das Terminal ermöglicht:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

Die ausgegebene Anfrage sieht wie folgt aus:

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

Der {{HTTPHeader("Content-Length")}}-Header zeigt die Größe des angeforderten Bereichs an, nicht die volle Größe des Bildes. Der {{HTTPHeader("Content-Range")}}-Antwortheader gibt an, wo diese Teilnachricht innerhalb der vollständigen Ressource verortet ist.

### Mehrteilige Bereiche

Der {{HTTPHeader("Range")}}-Header ermöglicht es Ihnen auch, mehrere Bereiche gleichzeitig in einem mehrteiligen Dokument zu erhalten. Die Bereiche sind durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206", "206 Partial Content")}}-Status, wie unten gezeigt. Die Antwort enthält einen {{HTTPHeader("Content-Type")}}-Header, der angibt, dass ein mehrteiliger Byterange folgt. Die Grenzzeichenfolge (`3d6b6a416f9b5` in diesem Fall) trennt die Teile des Körpers, von denen jeder seine eigenen `Content-Type` und `Content-Range` Felder hat:

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

Wenn Sie weitere Teile einer Ressource anfordern, müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem letzten empfangenen Fragment nicht geändert wurde.

Der {{HTTPHeader("If-Range")}} HTTP-Anfrageheader macht eine Bereichsanfrage bedingt: Wird die Bedingung erfüllt, wird die Bereichsanfrage gestellt und der Server sendet eine {{HTTPStatus("206")}}-Antwort `Partial Content` mit dem entsprechenden Körper zurück. Wird die Bedingung nicht erfüllt, wird die vollständige Ressource mit einem {{HTTPStatus("200")}} `OK`-Status zurückgesendet. Dieser Header kann entweder mit einem {{HTTPHeader("Last-Modified")}}-Validator oder einem {{HTTPHeader("ETag")}} verwendet werden, aber nicht mit beiden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Antworten auf Teilanfragen

Es gibt drei relevante Status beim Arbeiten mit Range-Anfragen:

- Eine erfolgreiche Range-Anfrage löst einen {{HTTPStatus("206")}} `Partial Content`-Status vom Server aus.
- Eine Range-Anfrage, die außerhalb des zulässigen Bereichs liegt, führt zu einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable`-Status, was bedeutet, dass keine der Bereichswerte den Umfang der Ressource überlappen. Zum Beispiel könnte der erste Byte-Pos jedes Bereichs größer als die Ressourcengröße sein.
- Wenn Range-Anfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK`-Status zurückgesendet und der gesamte Antwortkörper wird übertragen.

## Vergleich zu chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}}-Header erlaubt eine chunked-Kodierung, die nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde. Der Server sendet Daten direkt an den Client, ohne die Antwort zwischenzuspeichern oder die genaue Länge zu bestimmen, was zu verbesserter Latenz führt. Range-Anfragen und Chunking sind kompatibel und können mit oder ohne einander verwendet werden.

## Siehe auch

- Verwandte Statuscodes: {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
