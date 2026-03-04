---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: e1d5e4480e823e863842fdb27b19f6b499ca00a0
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können eine Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`parseFromString()`** Methode des [`DOMParser`](/de/docs/Web/API/DOMParser) Interface analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem Typ zurück, der in der [`contentType`](/de/docs/Web/API/Document/contentType)-Eigenschaft angegeben ist.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine ergonomische Alternative zum Parsen von HTML-Markup in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der HTML definiert, das analysiert werden soll.
    Das Markup muss ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} oder {{Glossary("SVG", "SVG")}} Dokument enthalten.
- `mimeType`
  - : Ein String, der angibt, ob der XML-Parser oder der HTML-Parser zum Parsen der Zeichenfolge verwendet wird.

    Erlaubte Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document) mit einem [`contentType`](/de/docs/Web/API/Document/contentType), das dem angegebenen `mimeType` entspricht.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument) Objekt zurückgeben.
> Diese leiten sich von [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu: sie sind im Wesentlichen äquivalent.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Dies wird ausgelöst, wenn:
    - `mimeType` einen Wert erhält, der nicht zu den [erlaubten Werten](#mimetype) gehört.
    - `input` einen String-Wert erhält, wenn [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`parseFromString()`** Methode analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem [`contentType`](/de/docs/Web/API/Document/contentType) zurück, das dem `mimeType` entspricht.
Dieses `Document` enthält ein vollständiges In-Memory-DOM, das vom Hauptdokument auf der zugehörigen Seite getrennt ist.

Wenn der `mimeType` `text/html` ist, wird die Eingabe als HTML analysiert und {{htmlelement("script")}} Elemente werden als nicht ausführbar markiert, Ereignisse werden nicht ausgelöst und Ereignishandler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Obwohl das Dokument Ressourcen herunterladen kann, die in {{htmlelement("iframe")}} und {{htmlelement("img")}} Elementen spezifiziert sind, ist es im Grunde inert.
Dies ist nützlich, da Sie HTML-Eingaben parsen können, die {{Glossary("Shadow_tree", "declarative shadow roots")}} enthalten, und Operationen am Dokument durchführen können, ohne die sichtbare Seite zu beeinflussen.
Zum Beispiel können Sie dies verwenden, um den Eingabebaum zu bereinigen und Teile der Eingabe in das sichtbare DOM zu injizieren, wenn dies benötigt wird.

Für die anderen erlaubten Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) wird die Eingabe als XML analysiert.
Dies ist nützlich, wenn Sie XML-Dateien importieren, deren Struktur validieren und Daten extrahieren möchten.
Wenn die Eingabe kein wohlgeformtes XML darstellt, enthält das zurückgegebene Dokument einen `<parsererror>` Knoten, der die Art des Parsing-Fehlers beschreibt.

Nicht erlaubte `mimeType` Werte führen dazu, dass ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst wird.

### Sicherheitsüberlegungen

Diese Methode analysiert ihre Eingabe in ein separates In-Memory-DOM, deaktiviert alle {{htmlelement("script")}} Elemente und verhindert die Ausführung von Ereignishandlern.
Obwohl das zurückgegebene Dokument im Wesentlichen inert ist, können Skripte und Ereignishandler in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode stellt daher eine potenzielle Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, bei denen potenziell unsichere Eingaben zuerst in ein `Document` parsiert werden, ohne dass sie bereinigt werden, und dann in das sichtbare/aktive DOM injiziert werden, wo der Code ausgeführt werden kann.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

Durch die Verwendung von `TrustedHTML` können Sie sicherstellen, dass der Bereinigungscode nur an wenigen Stellen effektiv überprüft wird, anstatt über alle Ihre Injection Sinks verstreut zu sein.
Sie sollten keinen Bereinigungscode an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Beachten Sie, dass selbst wenn Sie die Eingabe von Elementen und Attributen, die Code ausführen können, bereinigen, müssen Sie weiterhin vorsichtig sein, wenn Sie Benutzereingaben entgegennehmen.
Zum Beispiel kann Ihre Seite Daten in einem XML-Dokument verwenden, um Dateien abzurufen, die sie dann ausführt.

## Beispiele

### Parsing einer Eingabe mit Trusted Types

In diesem Beispiel werden wir eine potenziell schädliche HTML-Eingabe sicher analysieren und dann in das DOM der sichtbaren Seite einfügen.

Um das Risiko von XSS zu mindern, erstellen wir ein `TrustedHTML` Objekt aus dem String, der das HTML enthält.
Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die JavaScript-API für vertrauenswürdige Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabe-Zeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen zu transformieren.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten dargestellt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus dem potenziell unsicheren Eingabe-String zu erstellen und es in ein `Document` zu parsen.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit einer Wurzel `<html>`, `<head>` und `<body>` darstellt, auch wenn die Eingabe diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

Das `safeDocument` enthält nun ein DOM, das entsprechend unserer Policy von schädlichen Elementen bereinigt wurde.
Im Folgenden verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOM mit dem Körper unseres Dokuments zu ersetzen: Skripte im neuen Körper werden ausgeführt, ebenso wie der Code, wenn Ereignishandler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### Parsing von XML, SVG und HTML

Der untenstehende Code zeigt, wie Sie die Methode verwenden, um jede der Inhaltstypen zu parsen.
Während Sie in echtem Code vertrauenswürdige Typen verwenden sollten, werden sie hier der Kürze halber weggelassen.

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

Beachten Sie, dass die `application/xml` und `image/svg+xml` MIME-Typen oben funktionell identisch sind — der letztere enthält keine SVG-spezifischen Parsing-Regeln.

### Fehlerbehandlung

Wenn Sie den XML-Parser mit einem String verwenden, der kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) einen `<parsererror>` Knoten, der die Art des Parsing-Fehlers beschreibt.

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

Darüber hinaus kann der Parsing-Fehler in der JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}} Dokumente.
