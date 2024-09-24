---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

In einer regulären HTTP-Antwort ist der **`Content-Disposition`** Antwort-Header ein Header, der angibt, ob der Inhalt _inline_ im Browser angezeigt werden soll, also als Webseite oder als Teil einer Webseite, oder als _Anlage_, also heruntergeladen und lokal gespeichert werden soll.

In einem `multipart/form-data` Körper ist der allgemeine HTTP **`Content-Disposition`** Header ein Header, der für jeden Unterabschnitt eines Multipart-Körpers verwendet werden muss, um Informationen über das Feld zu geben, auf das er sich bezieht. Der Unterabschnitt wird durch die _Boundary_ begrenzt, die im {{HTTPHeader("Content-Type")}} Header definiert ist. Wird er auf den Körper selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}} Anfragen. Nur der Wert `form-data`, sowie die optionalen Direktiven `name` und `filename`, können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Response header")}} (für den Hauptkörper),<br />{{Glossary("Request header")}},
        {{Glossary("Response header")}} (für einen Unterabschnitt eines Multipart-Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der angibt, dass es innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (das anzeigt, dass es heruntergeladen werden soll; die meisten Browser präsentieren einen "Speichern unter"-Dialog, der mit dem Wert der `filename`-Parameter vorab ausgefüllt wird, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
Content-Disposition: attachment; filename*="filename.jpg"
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie etwa Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987) definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Headerfeldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie `é` durch `e`). Sie sollten Prozent-Escape-Sequenzen in `filename` vermeiden, da diese in Browsern inkonsistent behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen vornehmen, um den Anforderungen des Dateisystems gerecht zu werden, wie das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und neuer priorisieren das HTML [`<a>`-Element](/de/docs/Web/HTML/Element/a) `download` Attribut über dem `Content-Disposition: inline` Parameter (für [gleiche Herkunft URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und werden den Inhalt inline anzeigen.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data` Körper erfordert einen `Content-Disposition` Header, um Informationen für jeden Unterabschnitt des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header _muss_ auch einen `name` Parameter enthalten, um das betreffende Feld zu identifizieren. Zusätzliche Direktiven sind nicht groß-/klein-schreibungssensitiv und haben Argumente, die die Syntax für Anführungszeichen nach dem `'='`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Direktiven

- `name`

  - : Wird von einer Zeichenkette gefolgt, die den Namen des HTML-Felds im Formular enthält, auf das sich der Inhalt dieses Unterabschnitts bezieht. Wenn mehrere Dateien im gleichen Feld verarbeitet werden (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements), kann es mehrere Unterabschnitte mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird von einer Zeichenkette gefolgt, die den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - ASCII-Zeichen sind nach Möglichkeit zu bevorzugen (der Client kann es prozentkodieren, solange die Serverimplementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, beispielsweise indem `/` durch `_` ersetzt wird.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie die Erstellung einer Datei im Befehls-Suchpfad, sollte vermieden werden.
    - Andere Anforderungen des Dateisystems, wie eingeschränkte Zeichen und Längenbeschränkungen, sind zu erfüllen.

Beachten Sie, dass der Anforderungs-Header den `filename*` Parameter nicht enthält und keine RFC 5987-Kodierung zulässt.

## Beispiele

Eine Antwort, die das "Speichern unter"-Dialogfeld auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser werden vorschlagen, sie unter dem Dateinamen `cool.html` (standardmäßig) zu speichern.

Ein Beispiel für ein HTML-Formular, das unter Verwendung des `multipart/form-data` Formats gesendet wird und den `Content-Disposition` Header verwendet:

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
- Der {{HTTPHeader("Content-Type")}} der die Grenze des Multipart-Körpers definiert.
- Die {{domxref("FormData")}} Schnittstelle, die zur Vorbereitung von Formulardaten für die Verwendung in den {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest")}} APIs verwendet wird.
