---
title: HTTP Range-Anfragen
slug: Web/HTTP/Guides/Range_requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Eine HTTP {{HTTPHeader("Range")}}-Anfrage fordert den Server auf, Teile einer Ressource an einen Client zurückzusenden. Bereichsanfragen sind nützlich für verschiedene Clients, einschließlich Mediaplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die nur einen Teil einer großen Datei benötigen, und Download-Manager, mit denen Benutzer einen Download pausieren und fortsetzen können.

## Überprüfen, ob ein Server Teilanfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}}-Header mit einem anderen Wert als `none` enthält, unterstützt der Server Bereichsanfragen. Wenn Antworten den `Accept-Ranges`-Header weglassen, zeigt dies an, dass der Server keine Teilanfragen unterstützt. Wenn Bereichsanfragen nicht unterstützt werden, können Anwendungen auf diese Bedingung reagieren; zum Beispiel können Download-Manager Pausenschaltflächen deaktivieren, die sich auf Bereichsanfragen verlassen, um einen Download fortzusetzen.

Um zu überprüfen, ob ein Server Bereichsanfragen unterstützt, können Sie eine {{HTTPMethod("HEAD")}}-Anfrage senden, um Header zu inspizieren, ohne die Ressource vollständig anzufordern. Wenn Sie [curl](https://curl.se/) verwenden, können Sie das `-I`-Flag verwenden, um eine `HEAD`-Anfrage zu erstellen:

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

In dieser Antwort zeigt `Accept-Ranges: bytes`, dass 'bytes' als Einheiten zur Definition eines Bereichs verwendet werden können (derzeit ist keine andere Einheit möglich). Der {{HTTPHeader("Content-Length")}}-Header ist ebenfalls hilfreich, da er die Gesamtgröße des Bildes angibt, wenn Sie die gleiche Anfrage mit der `GET`-Methode stellen würden.

## Anfordern eines bestimmten Bereichs von einem Server

Wenn der Server Bereichsanfragen unterstützt, können Sie angeben, welchen Teil (oder Teile) des Dokuments Sie vom Server zurückgegeben haben möchten, indem Sie den {{HTTPHeader("Range")}}-Header in eine HTTP-Anfrage einfügen.

### Einzelne Bereichsanfragen

Wir können einen einzelnen Bereich von einer Ressource mit curl als Illustration anfordern. Die Option `-H` fügt der Anfrage eine Header-Zeile hinzu, in diesem Fall den `Range`-Header, der die ersten 1024 Bytes anfordert. Die letzte Option ist `--output -`, wodurch die binäre Ausgabe im Terminal angezeigt wird:

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

Die herausgegebene Anfrage sieht so aus:

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

Der {{HTTPHeader("Content-Length")}}-Header gibt die Größe des angeforderten Bereichs und nicht die volle Größe des Bildes an. Der {{HTTPHeader("Content-Range")}}-Antwort-Header gibt an, wo diese Teilnachricht innerhalb der vollständigen Ressource gehört.

### Mehrteilige Bereichsanfragen

Der {{HTTPHeader("Range")}}-Header ermöglicht es Ihnen auch, mehrere Bereiche gleichzeitig in einem mehrteiligen Dokument abzurufen. Die Bereiche sind durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206", "206 Partial Content")}}-Status, wie unten gezeigt. Die Antwort enthält einen {{HTTPHeader("Content-Type")}}-Header, der anzeigt, dass ein mehrteiliger Bytebereich folgt. Die Trennzeichen-Zeichenkette (`3d6b6a416f9b5` in diesem Fall) trennt die Teile des Körpers, von denen jeder seine eigenen `Content-Type`- und `Content-Range`-Felder hat:

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

Beim Fortsetzen des Anforderns weiterer Teile einer Ressource müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem Empfang des letzten Fragments nicht geändert wurde.

Der {{HTTPHeader("If-Range")}} HTTP-Anfrag-Kopf macht eine Bereichsanfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Bereichsanfrage gesendet und der Server sendet eine {{HTTPStatus("206")}} `Partial Content`-Antwort mit dem entsprechenden Körper. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource zurückgesendet, mit einem {{HTTPStatus("200")}} `OK`-Status. Dieser Header kann entweder zusammen mit einem {{HTTPHeader("Last-Modified")}}-Validator oder mit einem {{HTTPHeader("ETag")}} verwendet werden, jedoch nicht mit beiden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Antworten auf Teilanfragen

Es gibt drei relevante Statusse beim Arbeiten mit Bereichsanfragen:

- Eine erfolgreiche Bereichsanfrage löst einen {{HTTPStatus("206")}} `Partial Content`-Status vom Server aus.
- Eine Bereichsanfrage, die außerhalb der Grenzen liegt, führt zu einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable`-Status, was bedeutet, dass keiner der Bereichswerte den Umfang der Ressource überschneidet. Zum Beispiel könnte das erste Byte-Pos jedes Bereichs größer als die Ressourcenlänge sein.
- Wenn Bereichsanfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK`-Status zurückgesendet und der gesamte Antwortkörper wird übertragen.

## Vergleich mit chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}}-Header ermöglicht die Chunked-Codierung, die nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde. Der Server sendet Daten sofort an den Client, ohne die Antwort zu puffern oder die genaue Länge zu bestimmen, was die Latenz verbessert. Bereichsanfragen und Chunking sind miteinander kompatibel und können zusammen oder unabhängig voneinander verwendet werden.

## Siehe auch

- Verwandte Status Codes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
