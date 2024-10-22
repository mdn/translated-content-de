---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: efe65955dfdd07e268e97ab617ba868441c442ce
---

{{HTTPSidebar}}

In einer regulären HTTP-Antwort ist der **`Content-Disposition`** Antwort-Header ein Header, der angibt, ob der Inhalt erwartet wird, im Browser _inline_ angezeigt zu werden, das heißt als Webseite oder als Teil einer Webseite, oder als ein _Anhang_, das heißt heruntergeladen und lokal gespeichert zu werden.

In einem `multipart/form-data` Körper ist der HTTP **`Content-Disposition`** allgemeine Header ein Header, der für jeden Teil eines multipart Körpers verwendet werden muss, um Informationen über das Feld zu geben, auf das es sich bezieht. Der Teil wird durch die _boundary_ abgegrenzt, die im {{HTTPHeader("Content-Type")}} Header definiert ist. Wird er auf den Körper selbst angewendet, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition` Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter ist auf HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen anwendbar. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Hauptkörper),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines
        multipart Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, der anzeigt, dass es innerhalb der Webseite oder als die Webseite selbst angezeigt werden kann) oder `attachment` (was anzeigt, dass es heruntergeladen werden soll; die meisten Browser bieten einen 'Speichern unter' Dialog an, vorgefüllt mit dem Wert der `filename` Parameter, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die Kodierung verwendet, die in [RFC 5987, Abschnitt 3.2](https://www.rfc-editor.org/rfc/rfc5987.html#section-3.2) definiert ist. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität zu verwenden, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente (wie z.B. `é` zu `e`) ersetzen. Sie sollten Prozent-Escape-Sequenzen in `filename` vermeiden, da sie von Browsern inkonsistent behandelt werden. (Firefox und Chrome decodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Anforderungen des Dateisystems zu entsprechen, wie z.B. das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später priorisieren das HTML [`<a>` Element](/de/docs/Web/HTML/Element/a) `download` Attribut über den `Content-Disposition: inline` Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Versionen von Firefox priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen multipart Körper

Ein `multipart/form-data` Körper benötigt einen `Content-Disposition` Header, um Informationen für jeden Teil des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header _muss_ auch einen `name` Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht case-sensitiv und haben Argumente, die die syntax von Quoted-Strings nach dem `'='` Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Bei mehreren Dateien im selben Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}` Elements), kann es mehrere Teile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standardzeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den Originalnamen der übertragenen Datei enthält. Dieser Parameter liefert meist indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann diese prozentcodieren, solange die Serverimplementierung sie decodiert).
    - Jegliche Pfadinformationen sollten entfernt werden, z.B. durch Ersetzen von `/` durch `_`.
    - Beim Speichern auf der Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie das Erstellen von speziellen Dateien mit Sicherheitsimplikationen, z.B. durch Erstellen einer Datei im Befehls-Suchpfad.
    - Erfüllen Sie andere Anforderungen des Dateisystems, wie z.B. eingeschränkte Zeichen und Längenlimits.

Beachten Sie, dass der Anfrage-Header keinen `filename*` Parameter hat und keine RFC 5987 Kodierung erlaubt.

## Beispiele

Eine Antwort, die den Dialog "Speichern unter" auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser schlagen vor, sie unter dem `cool.html` Dateinamen zu speichern (standardmäßig).

Ein Beispiel für ein HTML-Formular, das das `multipart/form-data` Format verwendet und den `Content-Disposition` Header nutzt:

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
- Der {{HTTPHeader("Content-Type")}} der die Grenze des multipart Körpers definiert.
- Die [`FormData`](/de/docs/Web/API/FormData) Schnittstelle, die zur Vorbereitung von Formulardaten für die Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) APIs verwendet wird.
