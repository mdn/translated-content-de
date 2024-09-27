---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

In einer regulären HTTP-Antwort ist der **`Content-Disposition`**-Antwortheader ein Header, der angibt, ob der Inhalt im Browser _inline_ angezeigt werden soll, also als Webseite oder Teil einer Webseite, oder als _Attachment_, das heruntergeladen und lokal gespeichert wird.

In einem `multipart/form-data`-Körper ist der HTTP **`Content-Disposition`**-Allgemeinheader ein Header, der für jeden Teilbereich eines Multipart-Körpers verwendet werden muss, um Informationen über das Feld bereitzustellen, auf das er angewendet wird. Der Teilbereich wird durch die im {{HTTPHeader("Content-Type")}}-Header definierte _boundary_ abgegrenzt. Auf den Körper selbst angewendet hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter findet Anwendung auf HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        [Antwort-Header](/de/docs/Glossary/Response_header) (für den Hauptkörper),<br />[Anfrage-Header](/de/docs/Glossary/Request_header),
        [Antwort-Header](/de/docs/Glossary/Response_header) (für einen Teil eines Multipart-
        Körpers)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwortheader für den Hauptkörper

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was anzeigt, dass es innerhalb der Webseite oder als die Webseite angezeigt werden kann) oder `attachment` (was anzeigt, dass es heruntergeladen werden sollte; die meisten Browser bieten einen "Speichern als"-Dialog an, der mit dem Wert der `filename`-Parameter vorausgefüllt ist, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
Content-Disposition: attachment; filename*="filename.jpg"
```

Die Anführungszeichen um den Dateinamen sind optional, aber erforderlich, wenn spezielle Zeichen im Dateinamen verwendet werden, wie z.B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in [RFC 5987](https://datatracker.ietf.org/doc/html/rfc5987) definierte Kodierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feld-Wert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` umwandeln, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z.B. `é` durch `e`). Sie sollten vermeiden, Prozent-Escape-Sequenzen in `filename` zu verwenden, da diese browser-übergreifend unterschiedlich gehandhabt werden. (Firefox und Chrome decodieren sie, während Safari dies nicht tut.)

Browser können Umwandlungen vornehmen, um den Anforderungen des Dateisystems zu entsprechen, wie z.B. das Konvertieren von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und höher priorisieren das `download`-Attribut des HTML-[`<a>`-Elements](/de/docs/Web/HTML/Element/a) gegenüber dem `Content-Disposition: inline`-Parameter (für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy)). Ältere Firefox-Versionen priorisieren den Header und zeigen den Inhalt inline an.

### Als Header für einen Multipart-Körper

Ein `multipart/form-data`-Körper benötigt einen `Content-Disposition`-Header, um Informationen für jeden Teil des Formulars bereitzustellen (z.B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header _muss_ auch einen `name`-Parameter enthalten, um das entsprechende Feld zu identifizieren. Weitere Direktiven sind nicht empfindlich gegenüber Groß- und Kleinschreibung und haben Argumente, die die Anführungszeichen-Syntax nach dem `'='`-Zeichen verwenden. Mehrere Parameter werden durch ein Semikolon (`';'`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Direktiven

- `name`

  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Unterteils bezieht. Bei mehreren Dateien im gleichen Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements) kann es mehrere Unterteile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern der Standard-Zeichensatz, der für Teile ohne explizite Zeichensatzinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übermittelten Datei enthält. Dieser Parameter bietet im Wesentlichen indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie ASCII-Zeichen, wenn möglich (der Client kann sie prozentcodieren, solange die Server-Implementierung sie dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, zum Beispiel durch Ersetzen von `/` mit `_`.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie das Erstellen von speziellen Dateien mit Sicherheitseinschränkungen, wie z.B. das Erstellen einer Datei im Befehls-Suchpfad.
    - Erfüllen Sie andere Dateisystemanforderungen, wie eingeschränkte Zeichen und Längenbegrenzungen.

Beachten Sie, dass der Anfrage-Header den `filename*`-Parameter nicht hat und keine RFC 5987-Kodierung erlaubt.

## Beispiele

Eine Antwort, die den "Speichern unter"-Dialog auslöst:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Diese einfache HTML-Datei wird als regulärer Download gespeichert, anstatt im Browser angezeigt zu werden. Die meisten Browser schlagen vor, sie unter dem Dateinamen `cool.html` zu speichern (standardmäßig).

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
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des Multipart-Körpers definiert.
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung in den [`fetch()`](/de/docs/Web/API/Window/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs vorzubereiten.
