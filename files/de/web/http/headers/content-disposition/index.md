---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Content-Disposition`**-Header zeigt an, ob der Inhalt im Browser _inline_ als Webseite oder Teil einer Webseite angezeigt oder als _Anhang_ lokal heruntergeladen werden soll.

In einem mehrteiligen Body muss der Header für jeden Teil verwendet werden, um Informationen über das entsprechende Feld bereitzustellen. Der Teil wird durch die _Grenze_ abgegrenzt, die im {{HTTPHeader("Content-Type")}}-Header definiert ist. Wenn er auf den Body selbst angewendet wird, hat `Content-Disposition` keine Wirkung.

Der `Content-Disposition`-Header ist im größeren Kontext von MIME-Nachrichten für E-Mails definiert, aber nur ein Teil der möglichen Parameter gilt für HTTP-Formulare und {{HTTPMethod("POST")}}-Anfragen. Nur der Wert `form-data` sowie die optionalen Direktiven `name` und `filename` können im HTTP-Kontext verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Response_header", "Antwort-Header")}} (für den Haupt-Body),<br />{{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}} (für einen Teil eines mehrteiligen Bodys)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

### Als Antwort-Header für den Haupt-Body

Der erste Parameter im HTTP-Kontext ist entweder `inline` (Standardwert, was bedeutet, dass er innerhalb der Webseite oder als Webseite angezeigt werden kann) oder `attachment` (was bedeutet, dass er heruntergeladen werden sollte; die meisten Browser präsentieren einen 'Speichern unter'-Dialog, der mit dem Wert der `filename`-Parameter vorausgefüllt ist, falls vorhanden).

```http
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="file name.jpg"
Content-Disposition: attachment; filename*=UTF-8''file%20name.jpg
```

Die Anführungszeichen um den Dateinamen sind optional, aber notwendig, wenn Sie Sonderzeichen im Dateinamen verwenden, wie z. B. Leerzeichen.

Die Parameter `filename` und `filename*` unterscheiden sich nur darin, dass `filename*` die in {{rfc("5987", "", "3.2")}} definierte Codierung verwendet. Wenn sowohl `filename` als auch `filename*` in einem einzelnen Header-Feldwert vorhanden sind, wird `filename*` bevorzugt, wenn beide verstanden werden. Es wird empfohlen, beide für maximale Kompatibilität einzuschließen, und Sie können `filename*` in `filename` konvertieren, indem Sie nicht-ASCII-Zeichen durch ASCII-Äquivalente ersetzen (z. B. `é` durch `e`).
Es wird empfohlen, Prozent-Escape-Sequenzen in `filename` zu vermeiden, da sie in verschiedenen Browsern unterschiedlich gehandhabt werden. (Firefox und Chrome dekodieren sie, während Safari dies nicht tut.)

Browser können Transformationen anwenden, um den Anforderungen des Dateisystems gerecht zu werden, wie das Umwandeln von Pfadtrennzeichen (`/` und `\`) in Unterstriche (`_`).

> [!NOTE]
> Chrome und Firefox 82 und später bevorzugen das HTML-`<a>`-Element's `download`-Attribut gegenüber dem `Content-Disposition: inline`-Parameter (für [gleiche Herkunfts-URLs](/de/docs/Web/Security/Same-origin_policy)). Frühere Versionen von Firefox bevorzugen den Header und zeigen den Inhalt inline an.

### Als Header für einen mehrteiligen Body

Ein `multipart/form-data`-Body erfordert einen `Content-Disposition`-Header, um Informationen über jeden Teil des Formulars bereitzustellen (z. B. für jedes Formularfeld und alle Dateien, die Teil der Felddaten sind). Die erste Direktive ist immer `form-data`, und der Header muss auch einen `name`-Parameter enthalten, um das relevante Feld zu identifizieren. Zusätzliche Direktiven sind nicht groß- und kleinschreibungsempfindlich und haben Argumente, die nach dem `=`-Zeichen die Anführungszeichen-Syntax verwenden. Mehrere Parameter werden durch ein Semikolon (`;`) getrennt.

```http
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

#### Direktiven

- `name`

  - : Wird gefolgt von einem String, der den Namen des HTML-Feldes im Formular enthält, auf das sich der Inhalt dieses Teils bezieht. Bei der Verarbeitung mehrerer Dateien im selben Feld (zum Beispiel das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut eines `{{HTMLElement("input","&lt;input type=\"file\"&gt;")}}`-Elements) kann es mehrere Teile mit demselben Namen geben.

    Ein `name` mit dem Wert `'_charset_'` zeigt an, dass der Teil kein HTML-Feld ist, sondern die Standardzeichencodierung, die für Teile ohne explizite Zeichencodierungsinformationen verwendet werden soll.

- `filename`

  - : Wird gefolgt von einem String, der den ursprünglichen Namen der übertragenen Datei enthält. Dieser Parameter bietet hauptsächlich indikative Informationen. Die Vorschläge in [RFC2183](https://www.rfc-editor.org/rfc/rfc2183#section-2.3) gelten:

    - Bevorzugen Sie nach Möglichkeit ASCII-Zeichen (der Client kann es prozentcodieren, sofern die Serverimplementierung es dekodiert).
    - Alle Pfadinformationen sollten entfernt werden, z. B. durch Ersetzen von `/` durch `_`.
    - Beim Schreiben auf die Festplatte sollte keine vorhandene Datei überschrieben werden.
    - Vermeiden Sie die Erstellung spezieller Dateien mit Sicherheitsimplikationen, wie z. B. das Erstellen einer Datei im Suchpfad für Befehle.
    - Erfüllen Sie andere Dateisystemanforderungen, wie eingeschränkte Zeichen und Längenbeschränkungen.

Beachten Sie, dass der Anfrage-Header den `filename*`-Parameter nicht enthält und keine RFC 5987-Codierung zulässt.

## Beispiele

### Auslösen eines Download-Dialogs für eine Ressource

Die folgende Antwort löst den "Speichern unter"-Dialog in einem Browser aus:

```http
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Save me!</HTML>
```

Die HTML-Datei wird heruntergeladen, anstatt im Browser angezeigt zu werden.
Die meisten Browser werden die Benutzer auffordern, sie standardmäßig mit dem Dateinamen `cool.html` zu speichern (wie in der `filename`-Direktive angegeben).

### HTML-Formular, das mehrteiligen/form-data-Inhaltstyp sendet

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

- [HTML-Formulare](/de/docs/Learn/Forms)
- Der {{HTTPHeader("Content-Type")}}, der die Grenze des mehrteiligen Bodys definiert.
- Die [`FormData`](/de/docs/Web/API/FormData)-Schnittstelle, die verwendet wird, um Formulardaten für die Verwendung in den APIs [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) vorzubereiten.
