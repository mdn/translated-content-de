---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen übergeben und [sichere Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsaspekte](#sicherheitsaspekte) für weitere Informationen.

Die **`parseFromString()`**-Methode der [`DOMParser`](/de/docs/Web/API/DOMParser)-Schnittstelle analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem Typ zurück, der in der [`contentType`](/de/docs/Web/API/Document/contentType)-Eigenschaft angegeben ist.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine ergonomische Alternative zum Analysieren von HTML-Markup in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder Zeichenfolgeninstanz, die das zu analysierende HTML definiert.
    Das Markup muss entweder ein {{Glossary("HTML", "HTML")}}-, {{Glossary("XML", "XML")}}-, {{Glossary("XHTML", "XHTML")}}- oder {{Glossary("SVG", "SVG")}}-Dokument enthalten.
- `mimeType`
  - : Eine Zeichenfolge, die angibt, ob der XML-Parser oder der HTML-Parser zum Analysieren der Zeichenfolge verwendet wird.

    Zulässige Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document) mit [`contentType`](/de/docs/Web/API/Document/contentType), das dem angegebenen `mimeType` entspricht.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Objekt zurückgeben.
> Diese leiten sich von [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu: sie sind im Wesentlichen gleichwertig.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Diese wird ausgelöst, wenn:
    - `mimeType` einen Wert erhält, der nicht zu den [zulässigen Werten](#mimetype) gehört.
    - `input` einen Zeichenfolgenwert erhält, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`parseFromString()`**-Methode analysiert eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem [`contentType`](/de/docs/Web/API/Document/contentType) zurück, das dem `mimeType` entspricht.
Dieses `Document` enthält ein vollständiges, im Speicher befindliches DOM, das vom Hauptdokument auf der zugehörigen Seite getrennt ist.

Wenn der `mimeType` `text/html` ist, wird die Eingabe als HTML analysiert, und {{htmlelement("script")}}-Elemente werden als nicht ausführbar markiert, Ereignisse werden nicht ausgelöst und Ereignis-Handler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Während das Dokument Ressourcen herunterladen kann, die in {{htmlelement("iframe")}}- und {{htmlelement("img")}}-Elementen angegeben sind, ist es im Wesentlichen inert.
Dies ist nützlich, da Sie HTML-Eingaben analysieren können, die {{Glossary("Shadow_tree", "deklarative Schattenwurzeln")}} enthalten, und Operationen am Dokument durchführen können, ohne die sichtbare Seite zu beeinflussen.
Zum Beispiel können Sie dies verwenden, um den Eingabebaum zu bereinigen und Teile der Eingabe in das sichtbare DOM bei Bedarf zu injizieren.

Für die anderen zulässigen Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) wird die Eingabe als XML analysiert.
Dies ist nützlich, wenn Sie XML-Dateien importieren, ihre Struktur validieren und Daten extrahieren möchten.
Wenn die Eingabe kein wohlgeformtes XML darstellt, enthält das zurückgegebene Dokument einen `<parsererror>`-Knoten, der die Art des Parsing-Fehlers beschreibt.

Nicht zulässige `mimeType`-Werte führen zu einem [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

### Sicherheitsaspekte

Diese Methode analysiert die Eingabe in ein separates, im Speicher befindliches DOM, deaktiviert alle {{htmlelement("script")}}-Elemente und verhindert das Ausführen von Ereignis-Handlern.
Während das zurückgegebene Dokument im Wesentlichen inert ist, können Ereignis-Handler und Skripte in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode ist daher ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Eingaben zuerst in ein `Document` analysiert werden, ohne bereinigt zu werden, und dann in das sichtbare/aktive DOM injiziert werden, wo Code ausgeführt werden kann.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen übergeben und [sichere Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geht, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie {{htmlelement("script")}}-Elemente und Ereignis-Handler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Effektivität des Bereinigungscodes in wenigen Stellen zu prüfen und zu überprüfen, anstatt über alle Ihre Injection-Sinks verstreut.
Sie sollten keinen Bereiniger an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Beachten Sie, dass selbst wenn Sie die Eingabe von Elementen und Attributen, die Code ausführen können, bereinigen, Sie immer noch vorsichtig sein müssen, wenn Sie Benutzereingaben verwenden.
Zum Beispiel könnte Ihre Seite Daten in einem XML-Dokument nutzen, um Dateien abzurufen, die dann ausgeführt werden.

## Beispiele

### Analysieren einer Eingabe mit Trusted Types

In diesem Beispiel werden wir eine potenziell schädliche HTML-Eingabe sicher analysieren und dann in das DOM der sichtbaren Seite injizieren.

Um das Risiko von XSS zu minimieren, erstellen wir ein `TrustedHTML`-Objekt aus der Zeichenfolge, die das HTML enthält.
Sichere Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst die [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Transformieren einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Typischerweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und es in ein `Document` zu analysieren.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit einem Wurzel-`<html>`, `<head>` und `<body>` darstellen wird, auch wenn die Eingabe diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

Das `safeDocument` enthält nun ein DOM, das gemäß unserer Richtlinie von schädlichen Elementen bereinigt ist.
Unten verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOM durch den `body` unseres Dokuments zu ersetzen: Skripte im neuen Body werden ausgeführt, ebenso wie Code, wenn Ereignis-Handler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### Analysieren von XML, SVG und HTML

Der untenstehende Code zeigt, wie Sie die Methode verwenden, um jede der Inhaltsarten zu analysieren.
Während Sie in echtem Code sichere Typen verwenden sollten, sind sie hier der Kürze halber weggelassen.

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

Beachten Sie, dass die `application/xml`- und `image/svg+xml`-MIME-Typen oben funktional identisch sind – letzterer enthält keine SVG-spezifischen Parsing-Regeln.

### Fehlerbehandlung

Bei Verwendung des XML-Parsers mit einer Zeichenfolge, die kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) einen `<parsererror>`-Knoten, der die Art des Parsing-Fehlers beschreibt.

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
- {{jsxref("JSON.parse()")}} - Gegenpart für {{jsxref("JSON")}}-Dokumente.
