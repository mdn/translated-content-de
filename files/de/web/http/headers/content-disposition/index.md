---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Content-Disposition`** gibt an, ob Inhalte _inline_ im Browser als Webseite oder Teil einer Webseite angezeigt oder lokal als _Anhang_ heruntergeladen werden sollen.

In einem Multipart-Körper muss der Header für jeden Teil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teil wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _Größe_ begrenzt. Wenn er auf den Körper selbst angewendet wird, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Untersetzer der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Im HTTP-Kontext können nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines Multipart-Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert; zeigt an, dass er innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (zeigt an, dass er heruntergeladen werden sollte; die meisten Browser präsentieren einen "Speichern unter"-Dialog, vorausgefüllt mit dem Wert des `filename`-Parameters, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Kodierung verwendet.
Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` über `filename` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z.B. Umwandlung von `é` in `e`).
Sie sollten möglicherweise Prozent-Escape-Sequenzen in `filename` vermeiden, da sie inkonsistent über Browser hinweg verarbeitet werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformierungen anwenden, um den Anforderungen des Dateisystems zu entsprechen, wie z.B. das Konvertieren von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und spätere Versionen priorisieren das HTML-[`<a>`-Element](/de/docs/Web/HTML/Element/a) mit dem `download`-Attribut über den Parameter `Content-Disposition: inline` (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data`-Körper erfordert einen `Content-Disposition`-Header, um Informationen über jeden Teil des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv und haben Argumente, die die Syntax des Anführungszeichen-Strings nach dem `=`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Beim Umgang mit mehreren Dateien im gleichen Feld (z.B. das [`multiple`]-Attribut(/de/docs/Web/HTML/Element/input#multiple) eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements), kann es mehrere Teile mit dem gleichen Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass es sich bei dem Teil nicht um ein HTML-Feld handelt, sondern um die standardmäßige Zeichensatzkodierung, die für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter bietet hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann ihn prozentkodieren, solange die Serverimplementierung ihn dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z.B. indem `/` zu `_` ersetzt wird.
    - Beim Schreiben auf Festplatte sollte sie keine vorhandene Datei überschreiben.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Suchpfad des Befehls.
    - Erfülle andere Anforderungen des Dateisystems, wie Zeichenbeschränkungen und Längenlimits.

Beachten Sie, dass der Anfrage-Header nicht den Parameter `filename*` hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

### Download-Dialog für eine Ressource auslösen

Die folgende Antwort löst den Dialog "Speichern unter" in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden die Benutzer dazu auffordern, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie im `filename`-Parameter angegeben).

### HTML-Posting von multipart/form-data-Inhaltstyp

Das folgende Beispiel zeigt ein HTML-Formular, das mit `multipart/form-data` gesendet wird und den `Content-Disposition`-Header verwendet.
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
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle, die zur Vorbereitung von Formulardaten für die Verwendung mit den [`fetch()`](/de/docs/Web/API/Window/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs verwendet wird.
