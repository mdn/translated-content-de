---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Content-Disposition`**-Header gibt an, ob der Inhalt _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder als _Attachment_ lokal heruntergeladen werden soll.

In einem Multipart-Body muss der Header in jedem Teilbereich verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teilbereich wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ abgegrenzt. Wird er auf den Hauptteil angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptteil),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teilbereich eines Multipart-Bodys)
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

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der angibt, dass es innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (was anzeigt, dass es heruntergeladen werden sollte; die meisten Browser präsentieren einen 'Speichern unter'-Dialog, der mit dem Wert der `filename`-Parameter vorab ausgefüllt ist, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet. Wenn beide, `filename` und `filename*`, in einem einzigen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide zu verwenden, um maximale Kompatibilität zu gewährleisten, und Sie können `filename*` in `filename` konvertieren, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z.B. `é` durch `e` konvertieren). Sie sollten es vermeiden, Prozent-Escape-Sequenzen in `filename` zu verwenden, da sie von den Browsern unterschiedlich gehandhabt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Anforderungen des Dateisystems gerecht zu werden, wie z.B. das Konvertieren von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML-Attribute `download` des [`<a>`-Elements](/de/docs/Web/HTML/Reference/Elements/a) über den Parameter `Content-Disposition: inline` (für [gleichherige URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Body

Ein `multipart/form-data`-Body erfordert einen `Content-Disposition`-Header, um Informationen über jeden Teilbereich des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das entsprechende Feld zu identifizieren. Zusätzliche Direktiven sind nicht groß-/kleinschreibungssensitiv und haben Argumente, die eine Anführungszeichen-Syntax nach dem `=`-Zeichen verwenden. Mehrere Parameter sind durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`
  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teilbereichs bezieht. Beim Umgang mit mehreren Dateien im gleichen Feld (zum Beispiel das [`multiple`]-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements) kann es mehrere Teilbereiche mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` gibt an, dass der Teil kein HTML-Feld ist, sondern die Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`
  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:
    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es prozentkodieren, solange die Serverimplementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z.B. durch Ersetzen von `/` durch `_`.
    - Beim Schreiben auf die Festplatte sollte es keine bestehende Datei überschreiben.
    - Vermeiden Sie das Erstellen spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Suchpfad für Befehle.
    - Erfüllen Sie andere Dateisystemanforderungen, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header keinen `filename*`-Parameter hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

### Download-Dialog für eine Ressource auslösen

Die folgende Antwort löst den "Speichern unter"-Dialog in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden Benutzer auffordern, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie im `filename`-Parameter angegeben).

### HTML, das `multipart/form-data`-Inhaltstyp postet

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` gesendet wird und den `Content-Disposition`-Header verwendet.
In der Praxis wäre der Bezeichnerwert `delimiter123` eine vom Browser generierte Zeichenfolge wie `----8721656041911415653955004498`:

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
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
