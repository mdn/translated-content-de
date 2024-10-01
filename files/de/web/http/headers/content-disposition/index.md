---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

In einer regulären HTTP-Antwort gibt der **`Content-Disposition`** Response-Header an, ob der Inhalt _inline_ im Browser angezeigt werden soll, das heißt, als Webseite oder als Teil einer Webseite, oder als _Anhang_, was bedeutet, dass es heruntergeladen und lokal gespeichert wird.

In einem `multipart/form-data` Körper ist der HTTP **`Content-Disposition`** allgemeine Header ein Header, der auf jedem Unterteil eines Multipart-Körpers verwendet werden muss, um Informationen über das Feld zu geben, auf das er angewendet wird. Der Unterteil wird durch die _Boundary_ begrenzt, die im {{HTTPHeader("Content-Type")}} Header definiert ist. Wird er auf den Körper selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}} Anfragen. Im HTTP-Kontext können nur der Wert `form-data`, sowie die optionalen Direktiven `name` und `filename` verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Unterteil eines Multipart-Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was anzeigt, dass er innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (was anzeigt, dass es heruntergeladen werden sollte; die meisten Browser präsentieren einen 'Speichern unter'-Dialog, vorausgefüllt mit dem Wert der `filename`-Parameter, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
Content-Disposition: attachment; filename*="filename.jpg"
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z. B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987) definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzigen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide zur maximalen Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie Nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z. B. `é` durch `e`). Sie sollten vermeiden, Prozent-Escape-Sequenzen in `filename` zu verwenden, da sie browserübergreifend inkonsistent gehandhabt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um die Anforderungen des Dateisystems zu erfüllen, wie das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und spätere Versionen priorisieren das HTML-Attribut `download` des [`<a>` Elements](/de/docs/Web/HTML/Element/a) über den `Content-Disposition: inline` Parameter (für [gleich-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data` Körper erfordert einen `Content-Disposition` Header, um Informationen für jeden Unterteil des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name` Parameter enthalten, um das betreffende Feld zu identifizieren. Zusätzliche Direktiven sind nicht-empfindlich gegenüber Groß- und Kleinschreibung und haben Argumente, die mit der Quoted-String-Syntax nach dem `'='`-Zeichen verwendet werden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Direktiven

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Felds im Formular enthält, auf das sich der Inhalt dieses Unterteils bezieht. Beim Umgang mit mehreren Dateien im selben Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements) kann es mehrere Unterteile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter liefert hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es Prozentsatz-enkodieren, solange die Serverimplementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z. B. durch Ersetzen von `/` mit `_`.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie zum Beispiel das Erstellen einer Datei im Suchpfad für Befehle.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie z. B. eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header nicht den `filename*` Parameter hat und RFC 5987 Kodierung nicht erlaubt.

## Beispiele

Eine Antwort, die den "Speichern unter"-Dialog auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser werden vorschlagen, sie unter dem `cool.html` Dateinamen zu speichern (standardmäßig).

Ein Beispiel für ein HTML-Formular, das mit dem `multipart/form-data` Format gesendet wird und den `Content-Disposition` Header verwendet:

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
- Der {{HTTPHeader("Content-Type")}}, der die Boundary des Multipart-Körpers definiert.
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung mit den [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs vorzubereiten.
