---
title: Content-Disposition header
short-title: Content-Disposition
slug: Web/HTTP/Reference/Headers/Content-Disposition
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP **`Content-Disposition`** Header zeigt an, ob Inhalte im Browser _inline_ als Webseite oder Teil einer Webseite angezeigt oder als _Anhang_ lokal heruntergeladen werden sollen.

In einem Multipart-Body muss der Header für jeden Teilbereich verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teilbereich wird durch die im {{HTTPHeader("Content-Type")}} Header definierte _Boundary_ abgegrenzt. Wird es auf den Body selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}} Anfragen. Im HTTP-Kontext können nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptteil),<br />{{Glossary("Request_header", "Anfragener-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teilbereich eines Multipart-Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfragen-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptteil

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der anzeigt, dass es innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (was anzeigt, dass es heruntergeladen werden sollte; die meisten Browser präsentieren einen 'Speichern unter'-Dialog, vorab ausgefüllt mit dem Wert der `filename`-Parameter, wenn vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet.
Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide zur maximalen Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie das Ersetzen von `é` durch `e`).
Sie sollten vermeiden, Prozent-Escape-Sequenzen in `filename` zu verwenden, da diese in verschiedenen Browsern unterschiedlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Dateisystemanforderungen zu entsprechen, wie zum Beispiel das Konvertieren von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und höher priorisieren das `download`-Attribut des HTML [`<a>` Elements](/de/docs/Web/HTML/Reference/Elements/a) gegenüber dem `Content-Disposition: inline` Parameter (für [same-origin URLs](/de/docs/Web/Security/Defenses/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und werden den Inhalt inline anzeigen.

### Als Header für einen Multipart-Body

Ein `multipart/form-data` Body erfordert einen `Content-Disposition` Header, um Informationen über jeden Teilbereich des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind).
Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht groß-/kleinschreibungsempfindlich.
Der Wert aller Argumente (nach dem `=`-Zeichen) kann entweder ein Zeichen oder ein in Anführungszeichen gesetzter String sein.
In Anführungszeichen gesetzte Strings werden empfohlen, und viele Serverimplementierungen erfordern, dass die Werte in Anführungszeichen gesetzt werden.
Dies liegt daran, dass ein Zeichen US-ASCII sein muss für MIME-Typ-Header wie `Content-Disposition`, und US-ASCII erlaubt keine Zeichen, die in Dateinamen und anderen Werten häufig vorkommen.
Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`
  - : Wird von einem String gefolgt, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teilbereichs bezieht. Beim Umgang mit mehreren Dateien im selben Feld (zum Beispiel dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements), kann es mehrere Teilbereiche mit demselben Namen geben.

    Ein `name` mit einem Wert von `'_charset_'` zeigt an, dass der Teil nicht ein HTML-Feld ist, sondern der Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`
  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter bietet hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:
    - Bevorzugen Sie wenn möglich ASCII-Zeichen (der Client kann sie prozentual kodieren, solange die Server-Implementierung sie dekodiert).
    - Jegliche Pfadinformationen sollten entfernt werden, indem zum Beispiel `/` durch `_` ersetzt wird.
    - Beim Speichern auf der Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Suchpfad der Befehle.
    - Erfüllen Sie andere Dateisystemanforderungen, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfragen-Header nicht den `filename*` Parameter hat und keine RFC 5987 Kodierung erlaubt.

## Beispiele

### Herunterladen-Dialog für eine Ressource auslösen

Die folgende Antwort löst das "Speichern unter"-Dialogfeld im Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden die Benutzer auffordern, sie standardmäßig unter dem Dateinamen `cool.html` zu speichern (wie im `filename`-Parameter angegeben).

### HTML-Formular mit multipart/form-data Inhaltstyp

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des Multipart-Bodys definiert.
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs vorzubereiten.
