---
title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Anhang_ heruntergeladen werden sollen.

In einem Multipart-Body muss der Header auf jedem Teilstück verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Das Teilstück wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _Abgrenzung_ abgegrenzt. Wird es auf den Body selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}} (für den Haupt-Body),<br />{{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}} (für ein Teilstück eines Multipart-Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Response-Header für den Haupt-Body

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der angibt, dass es innerhalb der Webseite oder als die Webseite selbst angezeigt werden kann) oder `attachment` (der angibt, dass es heruntergeladen werden soll; die meisten Browser präsentieren ein "Speichern unter"-Dialogfenster, vorausgefüllt mit dem Wert der `filename`-Parameter, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur dadurch, dass `filename*` die Kodierung gemäß {{rfc("5987", "", "3.2")}} verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, sofern beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` konvertieren, indem nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzt werden (z. B. durch Umwandeln von `é` in `e`). Es wird empfohlen, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da sie in verschiedenen Browsern inkonsistent gehandhabt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Anpassungen vornehmen, um den Anforderungen des Dateisystems zu entsprechen, wie das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und höher priorisieren das HTML-Attribut [`<a>` element's](/de/docs/Web/HTML/Element/a) `download` über den `Content-Disposition: inline`-Parameter (für [gleich-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Ältere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Body

Ein `multipart/form-data`-Body erfordert einen `Content-Disposition`-Header, um Informationen über jedes Teilstück des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv und haben Argumente, die nach dem `=`-Zeichen die Syntax eines Quoted-Strings verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teilstücks bezieht. Wenn es sich um mehrere Dateien im selben Feld handelt (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Teilstücke mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standard-Zeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie, soweit möglich, ASCII-Zeichen (der Client kann sie percent-kodieren, solange die Serverimplementierung sie dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, etwa durch Ersetzen von `/` mit `_`.
    - Beim Schreiben auf die Festplatte sollte keine bestehende Datei überschrieben werden.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Suchpfad des Befehls.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Request-Header nicht den Parameter `filename*` hat und keine RFC 5987 Kodierung erlaubt.

## Beispiele

### Auslösen eines Download-Dialogs für eine Ressource

Die folgende Antwort löst das "Speichern unter"-Dialogfenster in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden. Die meisten Browser werden den Benutzer dazu auffordern, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML-Formular, das multipart/form-data Content-Type postet

Das folgende Beispiel zeigt ein mit `multipart/form-data` gesendetes HTML-Formular, das den `Content-Disposition`-Header verwendet. In der Praxis wäre der Abgrenzungswert `delimiter123` ein vom Browser generierter String wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}-Header, der die Abgrenzung des Multipart-Bodys definiert.
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
