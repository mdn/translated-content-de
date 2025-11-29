---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: 7b041bb77f0927b69f9e9ff98846746f7ac08c78
---

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Anhang_ heruntergeladen werden sollen.

In einem multipart-Body muss der Header für jedes Teil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Das Teil wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ abgegrenzt. Bei Verwendung auf dem eigentlichen Body hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mail definiert, aber nur eine Teilmenge der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}} (für ein Teil eines multipart-Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Response-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der angibt, dass es innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (was darauf hinweist, dass es heruntergeladen werden sollte; die meisten Browser zeigen einen 'Speichern unter'-Dialog an, vorausgefüllt mit dem Wert der `filename`-Parameter, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie beispielsweise Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, hat `filename*` Vorrang vor `filename`, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` konvertieren, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z. B. `é` zu `e`). Sie sollten Prozent-Escape-Sequenzen in `filename` vermeiden, da sie in verschiedenen Browsern unterschiedlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Anforderungen des Dateisystems zu entsprechen, z. B. das Konvertieren von Pfadtrennzeichen (`/` und `\`) zu Unterstrichen (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML-Attribut `download` des [`<a>`-Elements](/de/docs/Web/HTML/Reference/Elements/a) über den Parameter `Content-Disposition: inline` (für [gleichherkunftsbezogene URLs](/de/docs/Web/Security/Defenses/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen multipart-Body

Ein `multipart/form-data`-Body erfordert einen `Content-Disposition`-Header, um Informationen über jeden Teil des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv. Der Wert jedes Arguments (nach dem `=`-Zeichen) kann entweder ein Token oder ein umschlossener String sein. Umschlossene Strings werden empfohlen, und viele Serverimplementierungen erfordern, dass die Werte umschlossen sind. Dies liegt daran, dass ein Token für MIME-Typ-Header wie `Content-Disposition` US-ASCII sein muss, und US-ASCII erlaubt einige Zeichen nicht, die in Dateinamen und anderen Werten üblich sind. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`
  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Wenn Sie mit mehreren Dateien im selben Feld arbeiten (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Teile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern die Standardzeichencodierung, die für Teile ohne explizite Zeichenkodierungsinformation verwendet wird.

- `filename`
  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übermittelten Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Empfehlungen in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:
    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es prozentkodieren, solange die Serverimplementierung es dekodiert).
    - Jede Pfadinformation sollte entfernt werden, indem z. B. `/` durch `_` ersetzt wird.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie das Erstellen von speziellen Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Befehlssuchpfad.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Request-Header keinen `filename*`-Parameter hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

### Herunterladen-Eingabeaufforderung für eine Ressource auslösen

Die folgende Antwort löst das "Speichern unter"-Dialogfeld in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden. Die meisten Browser fordern Benutzer auf, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML-Formular, das einen Content-Type `multipart/form-data` sendet

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` unter Verwendung des `Content-Disposition`-Headers gesendet wird. In der Praxis wäre der Begrenzungswert `delimiter123` eine vom Browser generierte Zeichenfolge wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}, der die Begrenzung des multipart-Bodys definiert.
- Das [`FormData`](/de/docs/Web/API/FormData)-Interface, das zur Vorbereitung von Formulardaten für die Nutzung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) genutzt wird.
