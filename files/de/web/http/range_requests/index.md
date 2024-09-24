---
title: HTTP-Anforderungsbereiche
slug: Web/HTTP/Range_requests
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

Eine HTTP-Anforderung mit dem {{HTTPHeader("Range")}}-Header verlangt vom Server, nur einen Teil einer HTTP-Nachricht an einen Client zurückzusenden. Anforderungsbereiche sind nützlich für Clients wie Mediaplayer, die zufälligen Zugriff unterstützen, Datenwerkzeuge, die wissen, dass sie nur einen Teil einer großen Datei benötigen, und Download-Manager, die dem Benutzer das Pausieren und Fortsetzen des Downloads ermöglichen.

## Überprüfung, ob ein Server partielle Anfragen unterstützt

Wenn eine HTTP-Antwort den {{HTTPHeader("Accept-Ranges")}}-Header enthält und dessen Wert etwas anderes als "`none`" ist, dann unterstützt der Server Anforderungsbereiche. Sie können eine manuelle Überprüfung durchführen, indem Sie eine {{HTTPMethod("HEAD")}}-Anfrage mit einem Tool wie cURL ausführen.

```bash
curl -I http://i.imgur.com/z4d4kWk.jpg
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: bytes
Content-Length: 146515
```

In dieser Antwort zeigt `Accept-Ranges: bytes`, dass Bytes als Einheiten zur Definition eines Bereichs verwendet werden können. Hier ist auch der {{HTTPHeader("Content-Length")}}-Header nützlich, da er die vollständige Größe des abzurufenden Bildes angibt.

Wenn Websites den `Accept-Ranges`-Header weglassen, unterstützen sie wahrscheinlich keine partiellen Anfragen. Einige Seiten schließen den Header ein, geben ihm jedoch explizit den Wert "`none`", um anzuzeigen, dass Unterstützung fehlt:

```bash
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA
```

```http
HTTP/1.1 200 OK
…
Accept-Ranges: none
```

Ein Download-Manager könnte in diesem Fall die Pausentaste deaktivieren.

## Anfordern eines bestimmten Bereichs von einem Server

Wenn der Server Anforderungsbereiche unterstützt, können Sie durch Einfügen des {{HTTPHeader("Range")}}-Headers in Ihre HTTP-Anfrage angeben, welchen Teil oder welche Teile des Dokuments Sie vom Server zurückgesendet haben möchten.

### Einzelsegmentbereiche

Wir können einen einzelnen Bereich von einer Ressource anfordern. Erneut können wir eine Anfrage mit cURL testen. Die "`-H`"-Option fügt der Anfrage eine Headerzeile hinzu, die in diesem Fall den `Range`-Header enthält, der die ersten 1024 Bytes anfordert.

```bash
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

Die erstellte Anfrage sieht so aus:

```http
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

Der Server antwortet mit dem {{HTTPStatus("206")}} `Partial Content`-Status:

```http
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
…
(binary content)
```

Der {{HTTPHeader("Content-Length")}}-Header gibt nun die Größe des angeforderten Bereichs an (und nicht die vollständige Größe des Bildes). Der {{HTTPHeader("Content-Range")}}-Antwortheader zeigt an, wo sich diese Teilnachricht in der vollständigen Ressource befindet.

### Mehrteilige Bereiche

Der {{HTTPHeader("Range")}}-Header ermöglicht es Ihnen auch, mehrere Bereiche gleichzeitig in einem Multipart-Dokument zu erhalten. Die Bereiche werden durch ein Komma getrennt.

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

Der Server antwortet mit dem {{HTTPStatus("206")}} `Partial Content`-Status und einem {{HTTPHeader("Content-Type")}}`: multipart/byteranges; boundary=3d6b6a416f9b5`-Header, der angibt, dass ein Multipart-Bytebereich folgt. Jeder Teil enthält seine eigenen `Content-Type`- und `Content-Range`-Felder und der erforderliche Grenzeparameter gibt die Grenzzeichenkette an, die zum Trennen jedes Nachrichtenteils verwendet wird.

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

Wenn Sie weitere Teile einer Ressource anfordern, müssen Sie sicherstellen, dass die gespeicherte Ressource seit dem Empfang des letzten Fragments nicht verändert wurde.

Der {{HTTPHeader("If-Range")}}-HTTP-Anforderungsheader macht eine Bereichsanfrage bedingt: Wenn die Bedingung erfüllt ist, wird die Bereichsanfrage durchgeführt und der Server sendet eine {{HTTPStatus("206")}} `Partial Content`-Antwort mit dem entsprechenden Inhalt zurück. Wenn die Bedingung nicht erfüllt ist, wird die vollständige Ressource mit einem {{HTTPStatus("200")}} `OK`-Status zurückgesendet. Dieser Header kann entweder mit einem {{HTTPHeader("Last-Modified")}}-Validator oder mit einem {{HTTPHeader("ETag")}}, aber nicht mit beiden verwendet werden.

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Antworten auf partielle Anfragen

Es gibt drei relevante Statuscodes, wenn man mit Bereichsanfragen arbeitet:

- Eine erfolgreiche Bereichsanfrage veranlasst den Server, mit einem {{HTTPStatus("206")}} `Partial Content`-Status zu antworten.
- Eine Bereichsanfrage, die außerhalb der Grenzen liegt, führt zu einem {{HTTPStatus("416")}} `Requested Range Not Satisfiable`-Status, was bedeutet, dass keiner der Bereichswerte den Umfang der Ressource überlappt. Zum Beispiel könnte die erste-Byte-Pos jedes Bereichs größer als die Ressourcenlänge sein.
- Wenn Bereichsanfragen nicht unterstützt werden, wird ein {{HTTPStatus("200")}} `OK`-Status zurückgesendet und der gesamte Antwortinhalt wird übertragen.

## Vergleich mit chunked `Transfer-Encoding`

Der {{HTTPHeader("Transfer-Encoding")}}-Header erlaubt eine komprimierte Kodierung, die nützlich ist, wenn größere Datenmengen an den Client gesendet werden und die Gesamtgröße der Antwort nicht bekannt ist, bis die Anfrage vollständig verarbeitet wurde. Der Server sendet die Daten direkt an den Client, ohne die Antwort zwischenzuspeichern oder die genaue Länge zu bestimmen, was zu einer verbesserten Latenz führt. Bereichsanfragen und Chunking sind kompatibel und können mit oder ohne einander verwendet werden.

## Siehe auch

- Verwandte Statuscodes {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- Verwandte Header: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
