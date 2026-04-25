---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 4815929582d81825115987b2806087fd14662c50
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [injection sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`parseFromString()`** Methode der [`DOMParser`](/de/docs/Web/API/DOMParser) Schnittstelle analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem im [`contentType`](/de/docs/Web/API/Document/contentType) Attribut angegebenen Typ zurück.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine ergonomische Alternative zur Analyse von HTML-Markup in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein String, der das zu analysierende HTML definiert.
    Das Markup muss ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} oder {{Glossary("SVG", "SVG")}} Dokument enthalten.
- `mimeType`
  - : Ein String, der spezifiziert, ob der XML-Parser oder der HTML-Parser verwendet wird, um den String zu analysieren.

    Erlaubte Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document) mit einem [`contentType`](/de/docs/Web/API/Document/contentType), das dem angegebenen `mimeType` entspricht.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) Objekt zurückgeben.
> Diese leiten sich aus [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu: sie sind im Wesentlichen gleichwertig.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Dies wird ausgelöst, wenn:
    - `mimeType` einen Wert erhält, der nicht einer der [erlaubten Werte](#mimetype) ist.
    - `input` einen Stringwert erhält, wenn [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`parseFromString()`** Methode analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit einem [`contentType`](/de/docs/Web/API/Document/contentType), das dem `mimeType` entspricht, zurück.
Dieses `Document` enthält ein vollständiges In-Memory-DOM, das vom Hauptdokument auf der zugehörigen Seite getrennt ist.

Wenn der `mimeType` `text/html` ist, wird die Eingabe als HTML analysiert und {{htmlelement("script")}} Elemente sind als nicht ausführbar markiert, Ereignisse werden nicht ausgelöst und Ereignishandler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Obwohl das Dokument Ressourcen herunterladen kann, die in {{htmlelement("iframe")}} und {{htmlelement("img")}} Elementen spezifiziert sind, ist es im Wesentlichen inert.
Dies ist nützlich, weil Sie HTML-Eingaben analysieren können, die {{Glossary("Shadow_tree", "declarative shadow roots")}} enthalten, und Operationen am Dokument durchführen können, ohne die sichtbare Seite zu beeinflussen.
Zum Beispiel können Sie dies verwenden, um den Eingabebaum zu bereinigen und Teile der Eingabe bei Bedarf in das sichtbare DOM zu injizieren.

Für die anderen erlaubten Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) wird die Eingabe als XML analysiert.
Dies ist nützlich, wenn Sie XML-Dateien importieren, ihre Struktur validieren und Daten extrahieren möchten.
Wenn die Eingabe kein wohlgeformtes XML darstellt, enthält das zurückgegebene Dokument ein `<parsererror>` Element, das die Art des Analysefehlers beschreibt.

Nicht erlaubte `mimeType` Werte führen zu einem [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

### Sicherheitsüberlegungen

Diese Methode analysiert ihre Eingabe in ein separates In-Memory-DOM, wobei alle {{htmlelement("script")}} Elemente deaktiviert und Ereignishandler deaktiviert werden.
Obwohl das zurückgegebene Dokument im Wesentlichen inert ist, können Ereignishandler und Skripte in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode ist daher ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Eingaben zuerst ohne Bereinigung in ein `Document` analysiert und dann in das sichtbare/aktive DOM injiziert werden, wo der Code ausgeführt werden kann.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive durchsetzen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geht, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Ereignishandler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, zu prüfen und zu überprüfen, dass der Bereinigungscode in nur wenigen Stellen wirksam ist, anstatt überall in Ihren Injektionen verstreut zu sein.
Sie sollten keinen Bereiniger an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Beachten Sie, dass selbst wenn Sie die Eingabe von Elementen und Attributen bereinigen, die Code ausführen können, Sie dennoch vorsichtig sein müssen, wenn Sie Benutzereingaben verwenden.
Zum Beispiel könnte Ihre Seite Daten in einem XML-Dokument verwenden, um Dateien abzurufen, die dann ausgeführt werden.

## Beispiele

### Parsen einer Eingabe mit vertrauenswürdigen Typen

In diesem Beispiel analysieren wir sicher eine potenziell schädliche HTML-Eingabe und injizieren sie dann in das DOM der sichtbaren Seite.

Um das Risiko von XSS zu verringern, erstellen wir ein `TrustedHTML` Objekt aus dem String, der das HTML enthält.
Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die trusted types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in `TrustedHTML` Instanzen zu verwandeln.
Häufig verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und es in ein `Document` zu analysieren.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit einem Root-`<html>`, `<head>` und `<body>` darstellt, obwohl die Eingabe diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

Das `safeDocument` enthält nun ein DOM, das gemäß unserer Richtlinie von schädlichen Elementen bereinigt ist.
Unten verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOMs mit dem body unseres Dokuments zu ersetzen: Skripte im neuen body werden ausgeführt, ebenso wie der Code, wenn Ereignishandler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### XML, SVG und HTML parsen

Der untenstehende Code zeigt, wie Sie die Methode verwenden, um die jeweiligen Inhaltstypen zu parsen.
Während Sie in echtem Code vertrauenswürdige Typen verwenden sollten, werden sie hier der Kürze halber ausgelassen.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
console.log(doc1.contentType); // "application/xml"

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
console.log(doc2.contentType); // "image/svg+xml"

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
console.log(doc3.contentType); // "text/html"

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"
```

Beachten Sie, dass die MIME-Typen `application/xml` und `image/svg+xml` oben funktional identisch sind — der letztere beinhaltet keine SVG-spezifischen Parsingregeln.

### Fehlerbehandlung

Wenn der XML-Parser mit einem String verwendet wird, der kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) ein `<parsererror>` Element, das die Art des Parsing-Fehlers beschreibt.

```js
const parser = new DOMParser();

const xmlString = "<warning>Beware of the missing closing tag";
const doc = parser.parseFromString(xmlString, "application/xml");
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  // parsing failed
} else {
  // parsing succeeded
}
```

Zusätzlich könnte der Parsing-Fehler in der JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}} Dokumente.
