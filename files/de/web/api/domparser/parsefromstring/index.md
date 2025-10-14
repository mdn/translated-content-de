---
title: "DOMParser: parseFromString() Methode"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`parseFromString()`** Methode des [`DOMParser`](/de/docs/Web/API/DOMParser) Interface parst eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) mit dem in der [`contentType`](/de/docs/Web/API/Document/contentType) Eigenschaft angegebenen Typ zurück.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine ergonomische Alternative zum Parsen von HTML-Markup in ein [`Document`](/de/docs/Web/API/Document).

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der das zu parsende HTML definiert.
    Das Markup muss entweder ein {{Glossary("HTML", "HTML")}}, {{Glossary("XML", "XML")}}, {{Glossary("XHTML", "XHTML")}} oder {{Glossary("SVG", "SVG")}} Dokument enthalten.
- `mimeType`
  - : Ein String, der angibt, ob der XML-Parser oder der HTML-Parser verwendet wird, um den String zu parsen.

    Erlaubte Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document) mit [`contentType`](/de/docs/Web/API/Document/contentType), das dem angegebenen `mimeType` entspricht.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument) Objekt zurückgeben.
> Diese leiten sich von [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu: Sie sind im Wesentlichen gleichwertig.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Dies wird ausgelöst, wenn:
    - `mimeType` einen Wert zugewiesen bekommt, der nicht einer der [erlaubten Werte](#mimetype) ist.
    - `input` einen Stringwert zugewiesen bekommt, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`parseFromString()`** Methode parst eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) zurück, dessen [`contentType`](/de/docs/Web/API/Document/contentType) dem `mimeType` entspricht.
Dieses `Document` enthält ein vollständiges In-Memory-DOM, das vom Hauptdokument auf der zugehörigen Seite getrennt ist.

Wenn der `mimeType` `text/html` ist, wird die Eingabe als HTML geparst und {{htmlelement("script")}} Elemente werden als nicht ausführbar markiert, Ereignisse werden nicht ausgelöst und Event-Handler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Während das Dokument Ressourcen herunterladen kann, die in {{htmlelement("iframe")}} und {{htmlelement("img")}} Elementen spezifiziert sind, ist es im Wesentlichen inert.
Dies ist nützlich, da Sie HTML-Eingaben parsen können, die {{Glossary("Shadow_tree", "deklarative Shadow-Roots")}} enthalten, und Operationen auf dem Dokument durchführen können, ohne die sichtbare Seite zu beeinflussen.
Zum Beispiel können Sie dies verwenden, um den Eingabebaum zu säubern und Teile der Eingabe bei Bedarf in das sichtbare DOM einzufügen.

Für die anderen erlaubten Werte (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) wird die Eingabe als XML geparst.
Dies ist nützlich, wenn Sie XML-Dateien importieren, deren Struktur validieren und Daten extrahieren möchten.
Wenn die Eingabe kein gut geformtes XML darstellt, enthält das zurückgegebene Dokument einen `<parsererror>` Knoten, der die Art des Parsing-Fehlers beschreibt.

Nicht erlaubte `mimeType` Werte führen zu einem [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

### Sicherheitsüberlegungen

Diese Methode parst ihre Eingabe in ein separates In-Memory-DOM, deaktiviert alle {{htmlelement("script")}} Elemente und verhindert, dass Event-Handler ausgeführt werden.
Während das zurückgegebene Dokument im Wesentlichen inert ist, können Event-Handler und Skripte in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode ist daher ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Eingaben zuerst in ein `Document` gepaart werden, ohne dass sie bereinigt werden, und dann in das sichtbare/aktive DOM injiziert werden, wo Code ausführbar ist.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, zu prüfen und sicherzustellen, dass die Bereinigung des Codes an nur wenigen Stellen effektiv ist, anstatt verstreut über alle Ihre Injection Sinks.
Sie sollten nicht ein Bereinigungswerkzeug an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Beachten Sie, dass, selbst wenn Sie die Eingabe von Elementen und Attributen bereinigen, die Code ausführen können, Sie dennoch vorsichtig sein müssen, wenn Sie Benutzereingaben entgegennehmen.
Zum Beispiel könnte Ihre Seite Daten in einem XML-Dokument verwenden, um Dateien abzurufen, die sie dann ausführt.

## Beispiele

### Parsen einer Eingabe mit Trusted Types

In diesem Beispiel parsen wir sicher eine potenziell schädliche HTML-Eingabe und fügen sie dann in das DOM der sichtbaren Seite ein.

Um das Risiko von XSS zu mindern, erstellen wir ein `TrustedHTML` Objekt aus dem String, der das HTML enthält.
Da Trusted Types noch nicht in allen Browsern unterstützt werden, definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) Methode definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen zu transformieren.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und es in ein `Document` zu parsen.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit einem Wurzel-`<html>`, `<head>` und `<body>` darstellt, auch wenn die Eingabe diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

Das `safeDocument` enthält nun ein DOM, das von schädlichen Elementen gemäß unserer Richtlinie bereinigt worden ist.
Unten verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOMs durch den `body` unseres Dokuments zu ersetzen: Skripte im neuen Body werden ausgeführt, ebenso wie Code, wenn Event-Handler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### Parsen von XML, SVG und HTML

Der folgende Code zeigt, wie Sie die Methode verwenden, um jeden der Inhaltstypen zu parsen.
Während Sie in realem Code Trusted Types verwenden sollten, werden sie hier der Kürze halber weggelassen.

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

Beachten Sie, dass die `application/xml` und `image/svg+xml` MIME-Typen oben funktional identisch sind — der letztere schließt keine SVG-spezifischen Parseregeln ein.

### Fehlerbehandlung

Wenn Sie den XML-Parser mit einem String verwenden, der kein gut geformtes XML darstellt, enthält das durch `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) einen `<parsererror>` Knoten, der die Art des Parsing-Fehlers beschreibt.

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

Zusätzlich kann der Parsing-Fehler an die JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}} Dokumente.
