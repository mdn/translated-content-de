---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Disposition`** gibt an, ob der Inhalt _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Attachment_ heruntergeladen werden soll.

In einem Multipart-Körper muss der Header bei jedem Unterteil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Das Unterteil wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ begrenzt. Wenn es auf den Körper selbst angewendet wird, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für ein Unterteil eines Multipart-Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der angibt, dass er innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (zeigt an, dass er heruntergeladen werden soll; die meisten Browser zeigen einen Dialog 'Speichern unter', der mit dem Wert der `filename`-Parameter vorausgefüllt ist, sofern vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die im {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzigen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, sofern beide verstanden werden. Es wird empfohlen, beide einzuschließen, um maximale Kompatibilität zu gewährleisten, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z. B. `é` durch `e`). Es könnte sinnvoll sein, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da diese in den Browsern uneinheitlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen vornehmen, um den Anforderungen des Dateisystems zu entsprechen, z. B. das Ersetzen von Pfadtrennzeichen (`/` und `\`) durch Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und höher priorisieren das HTML-`<a>`-Element's `download`-Attribut über den `Content-Disposition: inline`-Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und werden den Inhalt inline anzeigen.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data`-Körper erfordert einen `Content-Disposition`-Header, um Informationen über jedes Unterteil des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitive und haben Argumente, die die Quoted-String-Syntax nach dem `=`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Unterteils bezieht. Wenn es sich um mehrere Dateien im selben Feld handelt (z. B. das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Unterteile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` gibt an, dass der Teil kein HTML-Feld ist, sondern der Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich hinweisende Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie wenn möglich ASCII-Zeichen (der Client kann es prozentkodieren, solange die Serverimplementierung es dekodiert).
    - Jegliche Pfadinformationen sollten entfernt werden, z. B. indem Sie `/` mit `_` ersetzen.
    - Beim Schreiben auf Datenträger sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie die Erstellung von speziellen Dateien mit Sicherheitsimplikationen, z. B. eine Datei im Suchpfad der Befehlszeile.
    - Andere Dateisystemanforderungen erfüllen, wie z. B. eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header den Parameter `filename*` nicht hat und keine RFC 5987 Kodierung zulässt.

## Beispiele

### Herunterladen-Dialog für eine Ressource auslösen

Die folgende Antwort löst den "Speichern unter"-Dialog in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden. Die meisten Browser fordern Benutzer auf, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML mit multipart/form-data-Inhaltstyp senden

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` unter Verwendung des `Content-Disposition`-Headers gesendet wird. In der Praxis wäre der Grenzwert `delimiter123` eine vom Browser generierte Zeichenkette wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}} definiert die Grenze des Multipart-Körpers.
- Das [`FormData`](/de/docs/Web/API/FormData)-Interface wird verwendet, um Formulardaten für die Verwendung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
