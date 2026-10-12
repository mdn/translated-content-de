---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: d8a98813a991199d24cf40bc74298850d8b41e37
---

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder als Teil einer Webseite angezeigt oder lokal als _Anhang_ heruntergeladen werden sollen.

In einem mehrteiligen Body muss der Header für jeden Teil verwendet werden, um Informationen über das zugehörige Feld bereitzustellen. Die Teile werden durch die im Header {{HTTPHeader("Content-Type")}} definierte _Boundary_ voneinander abgegrenzt. Wird `Content-Disposition` für den Body selbst verwendet, hat der Header keine Wirkung.

Der Header `Content-Disposition` ist im allgemeineren Kontext von MIME-Nachrichten für E-Mails definiert. Für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen gilt jedoch nur eine Teilmenge der möglichen Parameter. Im HTTP-Kontext können nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Haupt-Body),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines mehrteiligen Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Haupt-Body

Der erste Parameter im HTTP-Kontext ist entweder `inline` (der Standardwert; gibt an, dass der Inhalt innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (gibt an, dass der Inhalt heruntergeladen werden soll; die meisten Browser zeigen dazu einen „Speichern unter“-Dialog an, in dem der Wert des Parameters `filename` vorausgefüllt ist, sofern er vorhanden ist).

```http
Content-Disposition: inline
Content-Disposition: inline; filename="file name.jpg"
Content-Disposition: inline; filename*=UTF-8''file%20name.jpg
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber erforderlich, wenn der Dateiname Sonderzeichen wie Leerzeichen enthält.

Ein `filename` kann auch bei `Content-Disposition: inline` angegeben werden. Browser können ihn als Standardnamen verwenden, wenn Benutzer die Ressource beispielsweise mit dem Befehl „Speichern unter“ speichern.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet.
Wenn sowohl `filename` als auch `filename*` in einem Header-Feldwert vorhanden sind und beide verstanden werden, wird `filename*` gegenüber `filename` bevorzugt. Für maximale Kompatibilität wird empfohlen, beide anzugeben. Sie können `filename*` in `filename` umwandeln, indem Sie Nicht-ASCII-Zeichen durch ASCII-Entsprechungen ersetzen (beispielsweise `é` durch `e`).
Vermeiden Sie nach Möglichkeit Prozentkodierungssequenzen in `filename`, da Browser sie unterschiedlich behandeln. (Firefox und Chrome dekodieren sie, Safari hingegen nicht.)

Browser können Umwandlungen vornehmen, um die Anforderungen des Dateisystems zu erfüllen, beispielsweise Pfadtrennzeichen (`/` und `\`) durch Unterstriche (`_`) ersetzen.

> [!NOTE]
> Das Attribut [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) des HTML-Elements `<a>` setzt, sofern es berücksichtigt wird, das Verhalten von `Content-Disposition: inline` außer Kraft. Der Parameter `filename` von `Content-Disposition` hat jedoch Vorrang vor dem Namen im Attribut `download`.

### Als Header für einen mehrteiligen Body

Ein `multipart/form-data`-Body benötigt einen `Content-Disposition`-Header, der Informationen über jeden Teil des Formulars bereitstellt (z. B. über jedes Formularfeld und alle Dateien, die Teil der Felddaten sind).
Die erste Direktive ist immer `form-data`. Der Header muss außerdem einen Parameter `name` enthalten, der das betreffende Feld identifiziert. Bei weiteren Direktiven wird nicht zwischen Groß- und Kleinschreibung unterschieden.
Der Wert jedes Arguments (nach dem Zeichen `=`) kann entweder ein Token oder eine Zeichenfolge in Anführungszeichen sein.
Zeichenfolgen in Anführungszeichen werden empfohlen; viele Serverimplementierungen verlangen, dass die Werte in Anführungszeichen stehen.
Der Grund dafür ist, dass ein Token in MIME-Headern wie `Content-Disposition` aus US-ASCII-Zeichen bestehen muss und US-ASCII einige Zeichen nicht zulässt, die in Dateinamen und anderen Werten häufig vorkommen.
Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`
  - : Darauf folgt eine Zeichenfolge mit dem Namen des HTML-Formularfelds, auf das sich der Inhalt dieses Teils bezieht. Wenn ein Feld mehrere Dateien enthält (beispielsweise durch das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), können mehrere Teile denselben Namen haben.

    Ein `name` mit dem Wert `'_charset_'` gibt an, dass dieser Teil kein HTML-Feld ist, sondern den Standardzeichensatz für Teile ohne explizite Zeichensatzangabe festlegt.

- `filename`
  - : Darauf folgt eine Zeichenfolge mit dem ursprünglichen Namen der übertragenen Datei. Dieser Parameter dient hauptsächlich als Hinweis. Es gelten die Empfehlungen in [RFC2183](https://www.rfc-editor.org/info/rfc2183/#section-2.3):
    - Verwenden Sie nach Möglichkeit ASCII-Zeichen (der Client kann den Namen prozentkodieren, sofern die Serverimplementierung ihn dekodiert).
    - Entfernen Sie alle Pfadangaben, beispielsweise indem Sie `/` durch `_` ersetzen.
    - Beim Schreiben auf den Datenträger darf keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie das Erstellen spezieller Dateien mit Sicherheitsfolgen, beispielsweise einer Datei im Suchpfad für Befehle.
    - Erfüllen Sie weitere Anforderungen des Dateisystems, etwa Einschränkungen für Zeichen und Dateinamenlängen.

Beachten Sie, dass der Anfrage-Header den Parameter `filename*` nicht unterstützt und keine Kodierung nach RFC 5987 zulässt.

## Beispiele

### Download-Dialog für eine Ressource auslösen

Die folgende Antwort öffnet in einem Browser den Dialog „Speichern unter“:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, statt im Browser angezeigt zu werden.
Die meisten Browser schlagen Benutzern standardmäßig vor, sie unter dem Dateinamen `cool.html` zu speichern (wie in der Direktive `filename` angegeben).

### HTML-Formular mit dem Inhaltstyp multipart/form-data senden

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` und dem Header `Content-Disposition` gesendet wird.
In der Praxis wäre der Boundary-Wert `delimiter123` eine vom Browser erzeugte Zeichenfolge wie `----8721656041911415653955004498`:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="delimiter123"

--delimiter123
Content-Disposition: form-data; name="field1"

value1
--delimiter123
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--delimiter123--
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms)
- Der Header {{HTTPHeader("Content-Type")}}, der die Boundary des mehrteiligen Bodys definiert.
- Die Schnittstelle [`FormData`](/de/docs/Web/API/FormData), mit der Formulardaten für die Verwendung mit den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorbereitet werden.
