---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 7ff752fba26e0bb950998bb5476157ff96c7d314
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode analysiert ihren Input als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind bekannt als [Injection-Einstiege](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn der Input ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`parseFromString()`** Methode des [`DOMParser`](/de/docs/Web/API/DOMParser)-Interfaces analysiert einen Input, der entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem Typ zurück, der in der [`contentType`](/de/docs/Web/API/Document/contentType)-Eigenschaft angegeben ist.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine ergonomische Alternative zur Analyse von HTML-Markup in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)- oder String-Instanz, die das zu analysierende HTML definiert.
    Das Markup muss entweder ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} oder {{Glossary("SVG", "SVG")}} Dokument enthalten.
- `mimeType`
  - : Ein String, der angibt, ob der XML-Parser oder der HTML-Parser verwendet wird, um den String zu analysieren.

    Zulässige Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document) mit [`contentType`](/de/docs/Web/API/Document/contentType), das mit dem angegebenen `mimeType` übereinstimmt.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument) Objekt zurückgeben.
> Diese leiten sich von [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu: sie sind im Wesentlichen gleichwertig.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Dies wird ausgelöst, wenn:
    - `mimeType` ein Wert übergeben wird, der nicht einer der [zulässigen Werte](#mimetype) ist.
    - `input` ein String-Wert übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`parseFromString()`** Methode analysiert einen Input, der entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem [`contentType`](/de/docs/Web/API/Document/contentType) zurück, das mit dem `mimeType` übereinstimmt.
Dieses `Document` enthält ein vollständiges in-memory DOM, das vom Hauptdokument auf der zugehörigen Seite getrennt ist.

Wenn das `mimeType` `text/html` ist, wird der Input als HTML analysiert und {{htmlelement("script")}}-Elemente werden als nicht ausführbar markiert, Ereignisse werden nicht ausgelöst und Ereignishandler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Obwohl das Dokument Ressourcen herunterladen kann, die in {{htmlelement("iframe")}} und {{htmlelement("img")}} Elementen angegeben sind, ist es im Wesentlichen inert.
Dies ist nützlich, da Sie HTML-Eingaben analysieren können, die {{Glossary("Shadow_tree", "deklarative Shadow Roots")}} enthalten und Operationen am Dokument durchführen können, ohne die sichtbare Seite zu beeinflussen.
Beispielsweise können Sie dies verwenden, um den Eingabe-Baum zu bereinigen und Teile des Inputs bei Bedarf in das sichtbare DOM einzufügen.

Für die anderen zulässigen Werte (`text/xml`, `application/xml`, `application/xhtml+xml`, und `image/svg+xml`) wird der Input als XML analysiert.
Dies ist nützlich, wenn Sie XML-Dateien importieren, ihre Struktur validieren und Daten extrahieren möchten.
Wenn der Input kein gut geformtes XML darstellt, enthält das zurückgegebene Dokument einen `<parsererror>` Knoten, der die Art des Parsing-Fehlers beschreibt.

Unzulässige `mimeType`-Werte verursachen, dass ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst wird.

### Sicherheitsüberlegungen

Diese Methode analysiert ihren Input in ein separates in-memory DOM, deaktiviert alle {{htmlelement("script")}}-Elemente und verhindert, dass Ereignishandler ausgeführt werden.
Obwohl das zurückgegebene Dokument im Wesentlichen inert ist, können Ereignishandler und Skripte in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode ist daher ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsicherer Input ohne Bereinigung zuerst in ein `Document` analysiert und dann in das sichtbare/aktive DOM eingefügt wird, wo Code ausgeführt werden kann.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, den Input zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Ereignishandlerattribute) zu entfernen, bevor es eingefügt wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Wirksamkeit der Bereinigung an nur wenigen Stellen zu überprüfen, anstatt über alle Ihre Injection-Einstiege verstreut.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Beachten Sie, dass Sie auch dann, wenn Sie den Input von Elementen und Attributen bereinigen, die Code ausführen können, vorsichtig sein müssen, wenn Sie Benutzer-Input verarbeiten.
Beispielsweise könnte Ihre Seite Daten in einem XML-Dokument verwenden, um Dateien abzurufen, die sie dann ausführt.

## Beispiele

### Analyse eines Inputs unter Verwendung von Trusted Types

In diesem Beispiel werden wir einen potenziell schädlichen HTML-Input sicher analysieren und dann in den DOM der sichtbaren Seite einfügen.

Um das Risiko von XSS zu verringern, erstellen wir ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält.
Trusted Types werden noch nicht von allen Browsern unterstützt, also definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabe-String in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Normalerweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um den Input zu bereinigen, wie unten gezeigt wird:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und es in ein `Document` zu analysieren.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit einem `<html>`, `<head>` und `<body>` Wurzelknoten darstellen wird, auch wenn der Input diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

Das `safeDocument` enthält jetzt einen DOM, der von schädlichen Elementen gemäß unserer Policy bereinigt ist.
Unten verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOM mit dem body unseres Dokuments zu ersetzen: Skripte im neuen body werden ausgeführt, ebenso wie Code, wenn Ereignishandler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### Parsing von XML, SVG und HTML

Der folgende Code zeigt, wie Sie die Methode verwenden, um jede der Inhaltsarten zu analysieren.
Während Sie in echtem Code Trusted Types verwenden sollten, werden sie hier der Kürze halber weggelassen.

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

Beachten Sie, dass die `application/xml` und `image/svg+xml` MIME-Typen oben funktional identisch sind — der letztere enthält keine spezifischen Parsing-Regeln für SVG.

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

Zusätzlich kann der Parsing-Fehler in der JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}} Dokumente.
