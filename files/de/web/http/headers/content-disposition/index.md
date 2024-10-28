---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: e263fc7f179bad4696bb509816801cd670fae6af
---

{{HTTPSidebar}}

In einer üblichen HTTP-Antwort ist der **`Content-Disposition`** Antwort-Header ein Header, der angibt, ob der Inhalt _inline_ im Browser angezeigt werden soll, das heißt als Webseite oder als Teil einer Webseite, oder als _Anhang_, das heißt, heruntergeladen und lokal gespeichert werden soll.

In einem `multipart/form-data` Körper ist der HTTP **`Content-Disposition`** allgemeine Header ein Header, der für jede Teilmenge eines Multipart-Körpers verwendet werden muss, um Informationen über das Feld zu geben, auf das er sich bezieht. Die Teilmenge wird durch die _Boundary_ begrenzt, die im {{HTTPHeader("Content-Type")}} Header definiert ist. Wird er auf den Körper selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptteil),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines Multipart-
        Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptteil

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der anzeigt, dass er innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (zeigt an, dass er heruntergeladen werden soll; die meisten Browser zeigen einen 'Speichern unter'-Dialog an, der mit dem Wert der `filename` Parameter vorausgefüllt ist, sofern vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z. B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Codierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie z. B. `é` durch `e` umwandeln). Prozentfluchtnzeichen in `filename` sollten vermieden werden, da sie von Browsern uneinheitlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Umwandlungen vornehmen, um den Anforderungen des Dateisystems zu entsprechen, wie z. B. das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML [`<a>` Element](/de/docs/Web/HTML/Element/a) `download` Attribut gegenüber dem `Content-Disposition: inline` Parameter (für [Same-Origin-URLs](/de/docs/Web/Security/Same-origin_policy)). Frühe Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data` Körper erfordert einen `Content-Disposition` Header, um Informationen für jedes Teilstück des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header _muss_ auch einen `name` Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitive und haben Argumente, die die Anführungszeichen-Syntax nach dem `'='` Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird von einer Zeichenkette gefolgt, die den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Bei mehreren Dateien im selben Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements) kann es mehrere Teile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` gibt an, dass der Teil kein HTML-Feld ist, sondern der Standard-Zeichensatz, der für Teile ohne explizite Zeichenkodierungsinformationen verwendet werden soll.

- `filename`

  - : Wird von einer Zeichenkette gefolgt, die den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter bietet hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es percent-codieren, solange die Server-Implementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z. B. durch Ersetzen von `/` durch `_`.
    - Beim Schreiben auf die Festplatte sollte keine bestehende Datei überschrieben werden.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie das Erstellen einer Datei im Befehlssuchpfad.
    - Erfüllen Sie andere Dateisystemanforderungen, wie eingeschränkte Zeichen und Längenbegrenzungen.

Beachten Sie, dass der Anforderungs-Header keinen `filename*` Parameter hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

Eine Antwort, die den "Speichern unter"-Dialog auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser werden vorschlagen, sie unter dem Dateinamen `cool.html` (standardmäßig) zu speichern.

Ein Beispiel für ein HTML-Formular, das im `multipart/form-data` Format gepostet wird und den `Content-Disposition` Header verwendet:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Formulare](/de/docs/Learn/Forms)
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des Multipart-Körpers definiert.
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle zum Vorbereiten von Formulardaten zur Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs.
