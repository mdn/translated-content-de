---
title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Attachment_ heruntergeladen werden sollen.

In einem Multipart-Körper muss der Header für jeden Teilbereich verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teilbereich wird durch die im {{HTTPHeader("Content-Type")}} Header definierte _boundary_ abgegrenzt. Wenn er auf den Körper selbst angewendet wird, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur eine Teilmenge der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}} Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teilbereich eines Multipart-Körpers)
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

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was bedeutet, dass er innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (was bedeutet, dass er heruntergeladen werden sollte; die meisten Browser präsentieren einen "Speichern unter"-Dialog, der mit dem Wert der `filename` Parameter vorab ausgefüllt ist, wenn vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z. B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet.
Wenn sowohl `filename` als auch `filename*` in einem einzigen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide zu verwenden, um maximale Kompatibilität zu gewährleisten, und Sie können `filename*` in `filename` konvertieren, indem Sie nicht-ASCII-Zeichen mit ASCII-Äquivalenten ersetzen (z. B. `é` zu `e`).
Es wird empfohlen, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da sie in verschiedenen Browsern uneinheitlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Umwandlungen vornehmen, um den Anforderungen des Dateisystems gerecht zu werden, wie z. B. Umwandlung von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML [`<a>` Element](/de/docs/Web/HTML/Reference/Elements/a) `download` Attribut über dem `Content-Disposition: inline` Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data` Körper erfordert einen `Content-Disposition` Header, um Informationen über jeden Teilbereich des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name` Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv und haben Argumente, die die Quoted-String-Syntax nach dem `=`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teilbereichs bezieht. Bei mehreren Dateien im selben Feld (z. B. das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements), kann es mehrere Teilbereiche mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standard-Zeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann sie in Prozent kodieren, solange die Serverimplementierung sie dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z. B. durch Ersetzen von `/` durch `_`.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie das Erstellen von Spezialdateien mit Sicherheitsimplikationen, z. B. das Erstellen einer Datei im Suchpfad des Befehls.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie eingeschränkte Zeichen und Längenbeschränkungen.

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

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden die Benutzer standardmäßig auffordern, sie mit dem Dateinamen `cool.html` zu speichern (wie in der `filename` Direktive angegeben).

### HTML-Veröffentlichung des `multipart/form-data` Content-Typ

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` unter Verwendung des `Content-Disposition` Headers gesendet wird.
In der Praxis wäre der Grenzwert `delimiter123` ein vom Browser generierter String wie `----8721656041911415653955004498`:

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des Multipart-Körpers definiert.
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle wird verwendet, um Formulardaten für die Verwendung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
