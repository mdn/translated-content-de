---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP-**`Content-Disposition`**-Header gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder als _Anhang_ lokal heruntergeladen werden sollen.

In einem mehrteiligen Inhalt muss der Header für jeden Unterteil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Unterteil wird durch die _Grenze_ abgegrenzt, die im {{HTTPHeader("Content-Type")}}-Header definiert ist. Wenn `Content-Disposition` auf den Inhalt selbst angewendet wird, hat es keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter ist für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen anwendbar. Nur der Wert `form-data` sowie die optionalen Anweisungen `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response_header", "Response-Header")}} (für den Hauptteil),<br />{{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}} (für einen Unterteil eines mehrteiligen Inhalts)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Response-Header für den Hauptteil

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was bedeutet, dass es innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (was bedeutet, dass es heruntergeladen werden soll; die meisten Browser präsentieren ein "Speichern unter"-Dialog, das mit dem Wert der `filename`-Parameter vorausgefüllt ist, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzigen Headerfeldwert vorhanden sind, wird `filename*` über `filename` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beides für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie das Umwandeln von `é` in `e`). Sie sollten Prozent-Escape-Sequenzen in `filename` vermeiden, da sie in Browsern uneinheitlich behandelt werden (Firefox und Chrome dekodieren sie, während Safari dies nicht tut).

Browser können Transformationen anwenden, um den Dateisystemanforderungen zu entsprechen, wie das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML-`<a>`-Element `download`-Attribut über den `Content-Disposition: inline`-Parameter (für [Same-Origin-URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen mehrteiligen Inhalt

Ein `multipart/form-data`-Inhalt erfordert einen `Content-Disposition`-Header, um Informationen über jeden Unterteil des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Anweisung ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Anweisungen sind nicht Groß-/Kleinschreibung-sensitiv und haben Argumente, die die Syntax der Anführungszeichen nach dem `=`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Anweisungen

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Unterteils bezieht. Bei der Arbeit mit mehreren Dateien im selben Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Unterteile mit demselben Namen geben.

    Ein `name` mit einem Wert von `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern die Standard-Zeichenkodierung, die für Teile ohne explizite Zeichenkodierungsinformationen verwendet wird.

- `filename`
  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:
    - Nach Möglichkeit ASCII-Zeichen bevorzugen (der Client kann diese Prozent-kodieren, solange die Server-Implementierung sie dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z.B. durch Ersetzen von `/` mit `_`.
    - Beim Schreiben auf die Festplatte sollte es keine bestehende Datei überschreiben.
    - Vermeiden Sie das Erstellen von speziellen Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Befehls-Suchpfad.
    - Andere Dateisystemanforderungen erfüllen, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header keinen `filename*`-Parameter hat und keine RFC 5987-Kodierung zulässt.

## Beispiele

### Herunterladen eines Ressourcen-Prompts auslösen

Die folgende Antwort löst im Browser das "Speichern unter"-Dialog aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden Benutzer auffordern, sie standardmäßig unter dem Dateinamen `cool.html` zu speichern (wie im `filename`-Attribut angegeben).

### HTML-Posten des multipart/form-data-Inhaltstyps

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data`-Inhaltstyp gesendet wird, unter Verwendung des `Content-Disposition`-Headers.
In der Praxis wäre der Grenzwert `delimiter123` eine vom Browser generierte Zeichenfolge wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des mehrteiligen Inhalts definiert.
- Das [`FormData`](/de/docs/Web/API/FormData)-Interface, das für die Vorbereitung von Formulardaten für die Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs verwendet wird.
