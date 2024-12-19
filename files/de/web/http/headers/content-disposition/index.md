---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Disposition`** gibt an, ob der Inhalt _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder als _Attachment_ lokal heruntergeladen werden soll.

In einem multipart-Körper muss der Header für jeden Teil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teil wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ begrenzt. Wenn der Header auf dem Hauptkörper selbst verwendet wird, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwortheader")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}} (für einen Teil eines multipart-Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwortheader für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der anzeigt, dass es innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (zeigt an, dass es heruntergeladen werden sollte; die meisten Browser zeigen einen 'Speichern unter'-Dialog an, der bei Vorhandensein mit dem Wert der `filename`-Parameter vorausgefüllt ist).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Codierung verwendet.
Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität zu inkludieren, und Sie können `filename*` in `filename` konvertieren, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (zum Beispiel das Konvertieren von `é` zu `e`).
Es wird empfohlen, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da diese inkonsistent von Browsern behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen vornehmen, um den Anforderungen des Dateisystems gerecht zu werden, wie das Konvertieren von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und höher priorisieren das HTML-Attribut `download` des [`<a>`-Elements](/de/docs/Web/HTML/Element/a) über den `Content-Disposition: inline`-Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Versionen von Firefox priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen multipart-Körper

Ein `multipart/form-data`-Körper erfordert einen `Content-Disposition`-Header, um Informationen über jeden Teil des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitive und haben Argumente, die die Syntax eines Quoted-Strings nach dem `=`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Feldes im Formular angibt, auf das sich der Inhalt dieses Teils bezieht. Bei mehreren Dateien im gleichen Feld (zum Beispiel das `multiple`-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements) können mehrere Teile mit dem gleichen Namen vorhanden sein.

    Ein `name` Wert von `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern die Standardzeichencodierung zur Verwendung für Teile ohne explizite Zeichencodierungsinformation.

- `filename`

  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Ziehen Sie ASCII-Zeichen vor, wenn möglich (der Client kann es prozentuell kodieren, solange die Server-Implementierung es dekodiert).
    - Jegliche Pfadinformationen sollten entfernt werden, beispielsweise durch das Ersetzen von `/` mit `_`.
    - Beim Schreiben auf die Festplatte sollte keine bestehende Datei überschrieben werden.
    - Vermeiden Sie das Erstellen spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Befehlssuchpfad.
    - Befriedigen Sie andere Dateisystemanforderungen, wie Einschränkungen auf Zeichen und Längenbegrenzungen.

Beachten Sie, dass der Anforderungsheader den Parameter `filename*` nicht hat und keine RFC 5987-Codierung erlaubt.

## Beispiele

### Download-Aufforderung für eine Ressource auslösen

Die folgende Antwort löst das Dialogfenster „Speichern unter“ im Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden Benutzer auffordern, sie standardmäßig unter dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML-Posting mit multipart/form-data-Inhaltstyp

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` gesendet wird, unter Verwendung des `Content-Disposition`-Headers.
In der Praxis wäre der Boundary-Wert `delimiter123` eine vom Browser generierte Zeichenfolge wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des multipart-Körpers definiert.
- Das [`FormData`](/de/docs/Web/API/FormData)-Interface, das verwendet wird, um Formulardaten für die APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
