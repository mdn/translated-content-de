---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

In einer regulären HTTP-Antwort ist der **`Content-Disposition`** Antwort-Header ein Header, der angibt, ob der Inhalt _inline_ im Browser angezeigt werden soll, also als Webseite oder als Teil einer Webseite, oder als _Anhang_, der heruntergeladen und lokal gespeichert wird.

In einem `multipart/form-data`-Körper ist der HTTP **`Content-Disposition`** allgemeine Header ein Header, der in jedem Teil eines Multipart-Körpers verwendet werden muss, um Informationen über das Feld zu geben, auf das er zutrifft. Der Teil wird durch die _Grenze_ begrenzt, die im {{HTTPHeader("Content-Type")}}-Header definiert ist. Wird er auf den Körper selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur eine Teilmenge der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response header")}} (für den Hauptkörper),<br />{{Glossary("Request header")}},
        {{Glossary("Response header")}} (für einen Teil eines Multipart-Körpers)
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

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was bedeutet, dass er innerhalb der Webseite angezeigt werden kann oder als die Webseite selbst) oder `attachment` (was bedeutet, dass er heruntergeladen werden soll; die meisten Browser zeigen ein 'Speichern unter'-Dialogfeld an, das mit dem Wert der `filename`-Parameter vorausgefüllt ist, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
Content-Disposition: attachment; filename*="filename.jpg"
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987) definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` gegenüber `filename` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (wie z.B. `é` zu `e`). Vermeiden Sie eventuell Prozent-Escape-Sequenzen in `filename`, da diese von den Browsern uneinheitlich behandelt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Dateisystemanforderungen zu entsprechen, wie z.B. das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome sowie Firefox 82 und höher priorisieren das HTML [`<a>` element](/de/docs/Web/HTML/Element/a) `download`-Attribut gegenüber dem `Content-Disposition: inline`-Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Ältere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data`-Körper erfordert einen `Content-Disposition`-Header, um für jeden Teil des Formulars Informationen bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header _muss_ auch einen `name`-Parameter enthalten, um das betreffende Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv und haben Argumente, die nach dem `'='`-Zeichen die Quoted-String-Syntax verwenden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Direktiven

- `name`

  - : Wird von einem String gefolgt, der den Namen des HTML-Felds im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Wenn es sich um mehrere Dateien im selben Feld handelt (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements), kann es mehrere Teile mit demselben Namen geben.

    Ein `name` mit einem Wert von `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern den Standardzeichensatz angibt, der für Teile ohne explizite Zeichensatinformationen verwendet werden soll.

- `filename`

  - : Wird von einem String gefolgt, der den ursprünglichen Namen der übermittelten Datei enthält. Dieser Parameter liefert hauptsächlich Hinweisinformationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann sie prozentcodieren, solange die Server-Implementierung sie dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, zum Beispiel durch Ersetzen von `/` durch `_`.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie es, spezielle Dateien mit Sicherheitsimplikationen zu erstellen, wie zum Beispiel eine Datei im Suchpfad für Befehle zu erstellen.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anforderungs-Header nicht den `filename*`-Parameter hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

Eine Antwort, die das "Speichern unter"-Dialogfeld auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser schlagen vor, sie standardmäßig unter dem Namen `cool.html` zu speichern.

Ein Beispiel für ein HTML-Formular, das im `multipart/form-data`-Format gepostet wird und den `Content-Disposition`-Header verwendet:

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
- Der {{HTTPHeader("Content-Type")}} definiert die Grenze des Multipart-Körpers.
- Die {{domxref("FormData")}}-Schnittstelle wird verwendet, um Formulardaten für die Verwendung in den {{domxref("Window/fetch", "fetch()")}}- oder {{domxref("XMLHttpRequest")}}-APIs vorzubereiten.
