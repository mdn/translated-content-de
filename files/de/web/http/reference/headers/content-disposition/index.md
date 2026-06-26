---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Anhang_ heruntergeladen werden sollen.

In einem Multipart-Body muss der Header für jeden Teil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teil wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ abgegrenzt. Wenn der `Content-Disposition` auf dem eigentlichen Body verwendet wird, hat er keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptteil),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines Multipart-Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptteil

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was bedeutet, dass er innerhalb der Webseite angezeigt werden kann, oder als die Webseite) oder `attachment` (was bedeutet, dass er heruntergeladen werden sollte; die meisten Browser zeigen einen 'Speichern unter'-Dialog an, der, wenn vorhanden, mit dem Wert der `filename`-Parameter vorausgefüllt ist).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie spezielle Zeichen im Dateinamen verwenden, wie Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur dadurch, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feld vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` zu `filename` konvertieren, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie z.B. `é` zu `e`). Es wird empfohlen, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da sie in verschiedenen Browsern uneinheitlich behandelt werden (Firefox und Chrome dekodieren sie, während Safari dies nicht tut).

Browser können Transformationen anwenden, um den Anforderungen des Dateisystems zu entsprechen, wie z.B. das Ersetzen von Pfadtrennzeichen (`/` und `\`) durch Unterstriche (`_`).

> [!NOTE]
> Chrome, und Firefox 82 und später, priorisieren das HTML-Attribut [`<a>`](/de/docs/Web/HTML/Reference/Elements/a) `download` über den Parameter `Content-Disposition: inline` (für [Same-Origin URLs](/de/docs/Web/Security/Defenses/Same-origin_policy)). Ältere Firefox-Versionen priorisieren den Header und zeigen die Inhalte inline an.

### Als Header für einen Multipart-Body

Ein `multipart/form-data`-Body erfordert einen `Content-Disposition`-Header, um Informationen über jede Untereinheit des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das entsprechende Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitive. Der Wert von Argumenten (nach dem `=` Zeichen) kann entweder ein Token oder eine zitierte Zeichenkette sein. Zitierte Zeichenfolgen werden empfohlen, und viele Serverimplementierungen erfordern, dass die Werte zitiert werden. Dies liegt daran, dass ein Token für MIME-Type-Header wie `Content-Disposition` US-ASCII sein muss, und US-ASCII erlaubt einige in Dateinamen und anderen Werten häufig vorkommende Zeichen nicht. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`
  - : Wird von einer Zeichenkette gefolgt, die den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieser Untereinheit bezieht. Wenn Sie mit mehreren Dateien im selben Feld arbeiten (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Untereinheiten mit dem gleichen Namen geben.

    Ein `name` mit einem Wert von `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern den Standard-Charset angibt, der für Teile ohne explizite Charset-Informationen verwendet wird.

- `filename`
  - : Wird von einer Zeichenkette gefolgt, die den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter bietet hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/info/rfc2183/#section-2.3) gelten:
    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es codieren, solange die Server-Implementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z.B. durch Ersetzen von `/` durch `_`.
    - Beim Speichern auf der Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie es, spezielle Dateien mit Sicherheitsimplikationen zu erstellen, z.B. eine Datei im Befehls-Suchpfad zu erstellen.
    - Erfüllen Sie andere Dateisystemanforderungen, wie z.B. eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header den Parameter `filename*` nicht enthält und keine RFC 5987-Kodierung zulässt.

## Beispiele

### Auslösen eines Download-Dialogs für eine Ressource

Die folgende Antwort löst den "Speichern unter"-Dialog in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden. Die meisten Browser werden den Benutzern standardmäßig vorschlagen, sie mit dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML-Formular das multipart/form-data Content-Type postet

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` unter Verwendung des `Content-Disposition`-Headers gesendet wird. In der Praxis wäre der Boundary-Wert `delimiter123` eine vom Browser generierte Zeichenkette wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des Multipart-Bodys definiert.
- Das [`FormData`](/de/docs/Web/API/FormData)-Interface, das zur Vorbereitung von Formulardaten für die Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs verwendet wird.
