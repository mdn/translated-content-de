---
title: "DOMParser: Methode parseFromString()"
short-title: parseFromString()
slug: Web/API/DOMParser/parseFromString
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("DOMParser")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) ausgenutzt werden, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie statt Strings stets `TrustedHTML`-Objekte übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`parseFromString()`** des Interfaces [`DOMParser`](/de/docs/Web/API/DOMParser) parst eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) zurück, dessen Typ in der Eigenschaft [`contentType`](/de/docs/Web/API/Document/contentType) angegeben ist.

> [!NOTE]
> Die statische Methode [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static) bietet eine komfortable Alternative, um HTML-Markup in ein [`Document`](/de/docs/Web/API/Document) zu parsen.

## Syntax

```js-nolint
parseFromString(input, mimeType)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder ein String, der das zu parsende HTML definiert.
    Das Markup muss ein {{Glossary("HTML", "HTML")}}-, {{Glossary("XML", "XML")}}-, {{Glossary("XHTML", "XHTML")}}- oder {{Glossary("SVG", "SVG")}}-Dokument enthalten.
- `mimeType`
  - : Ein String, der angibt, ob der XML-Parser oder der HTML-Parser zum Parsen des Strings verwendet wird.

    Zulässige Werte sind:
    - `text/html`
    - `text/xml`
    - `application/xml`
    - `application/xhtml+xml`
    - `image/svg+xml`

### Rückgabewert

Ein [`Document`](/de/docs/Web/API/Document), dessen [`contentType`](/de/docs/Web/API/Document/contentType) dem angegebenen `mimeType` entspricht.

> [!NOTE]
> Der Browser kann tatsächlich ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)- oder [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Objekt zurückgeben.
> Diese leiten sich von [`Document`](/de/docs/Web/API/Document) ab und fügen keine Attribute hinzu; sie sind im Wesentlichen gleichwertig.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in folgenden Fällen ausgelöst:
    - Für `mimeType` wird ein Wert übergeben, der nicht zu den [zulässigen Werten](#mimetype) gehört.
    - Für `input` wird ein String übergeben, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode **`parseFromString()`** parst eine Eingabe, die entweder HTML oder XML enthält, und gibt ein [`Document`](/de/docs/Web/API/Document) zurück, dessen [`contentType`](/de/docs/Web/API/Document/contentType) dem `mimeType` entspricht.
Dieses `Document` enthält ein vollständiges DOM im Arbeitsspeicher, das vom Hauptdokument der zugehörigen Seite getrennt ist.

Wenn `mimeType` den Wert `text/html` hat, wird die Eingabe als HTML geparst. {{htmlelement("script")}}-Elemente werden als nicht ausführbar markiert, Events werden nicht ausgelöst und Event-Handler werden nicht aufgerufen, um Inline-Skripte auszuführen.
Das Dokument kann zwar Ressourcen herunterladen, die in {{htmlelement("iframe")}}- und {{htmlelement("img")}}-Elementen angegeben sind, ist aber im Wesentlichen inaktiv.
Das ist nützlich, weil Sie HTML-Eingaben mit {{Glossary("Shadow_tree", "deklarativen Shadow Roots")}} parsen und Operationen am Dokument ausführen können, ohne die sichtbare Seite zu beeinflussen.
Sie können beispielsweise den Eingabebaum bereinigen und bei Bedarf Teile der Eingabe in das sichtbare DOM einfügen.

Bei den anderen zulässigen Werten (`text/xml`, `application/xml`, `application/xhtml+xml` und `image/svg+xml`) wird die Eingabe als XML geparst.
Das ist nützlich, wenn Sie XML-Dateien importieren, ihre Struktur validieren und Daten daraus extrahieren möchten.
Wenn die Eingabe kein wohlgeformtes XML darstellt, enthält das zurückgegebene Dokument einen `<parsererror>`-Knoten, der den Parse-Fehler beschreibt.

Unzulässige `mimeType`-Werte führen dazu, dass ein [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) ausgelöst wird.

### Sicherheitsaspekte

Diese Methode parst ihre Eingabe in ein separates DOM im Arbeitsspeicher. Dabei deaktiviert sie alle {{htmlelement("script")}}-Elemente und verhindert die Ausführung von Event-Handlern.
Obwohl das zurückgegebene Dokument praktisch inaktiv ist, können Event-Handler und Skripte in seinem DOM ausgeführt werden, wenn sie in das sichtbare DOM eingefügt werden.
Die Methode kann daher für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) ausgenutzt werden: Potenziell unsichere Eingaben werden zunächst ohne Bereinigung in ein `Document` geparst und anschließend in das sichtbare, aktive DOM eingefügt, wo Code ausgeführt werden kann.

Sie sollten dieses Risiko verringern, indem Sie statt Strings stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte übergeben und Trusted Types mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die sie vor dem Einfügen [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute entfernen kann.

Durch die Verwendung von `TrustedHTML` können Sie den Bereinigungscode an wenigen Stellen prüfen und seine Wirksamkeit kontrollieren, statt ihn über alle Ihre Injection Sinks verteilt vorzufinden.
Wenn Sie `TrustedHTML` verwenden, sollten Sie der Methode keinen Sanitizer übergeben müssen.

Beachten Sie, dass Sie beim Umgang mit Benutzereingaben weiterhin vorsichtig sein müssen, selbst wenn Sie Elemente und Attribute entfernen, die Code ausführen können.
Beispielsweise könnte Ihre Seite Daten aus einem XML-Dokument verwenden, um Dateien abzurufen, die sie anschließend ausführt.

## Beispiele

### Eine Eingabe mit Trusted Types parsen

In diesem Beispiel parsen wir eine potenziell schädliche HTML-Eingabe auf sichere Weise und fügen sie anschließend in das DOM der sichtbaren Seite ein.

Um das XSS-Risiko zu verringern, erstellen wir aus dem String mit dem HTML ein `TrustedHTML`-Objekt.
Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zunächst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Funktion zur Umwandlung eines Eingabe-Strings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Implementierungen von `createHTML()` verwenden üblicherweise eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus dem potenziell unsicheren Eingabe-String ein `TrustedHTML`-Objekt zu erstellen und es in ein `Document` zu parsen.
Beachten Sie, dass das resultierende `Document` ein vollständiges HTML-Dokument mit den Elementen `<html>`, `<head>` und `<body>` darstellt, obwohl die Eingabe diese Elemente nicht enthält:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Parse the TrustedHTML (which contains a trusted string)
const safeDocument = parser.parseFromString(trustedHTML, "text/html");
```

`safeDocument` enthält nun ein DOM, aus dem schädliche Elemente gemäß unserer Richtlinie entfernt wurden.
Im Folgenden verwenden wir [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith), um den `body` des sichtbaren DOM durch den `body` unseres Dokuments zu ersetzen. Skripte im neuen `body` werden ebenso ausgeführt wie Code, wenn Event-Handler ausgelöst werden.

```js
document.body.replaceWith(safeDocument.body);
```

### XML, SVG und HTML parsen

Der folgende Code zeigt, wie Sie mit der Methode die einzelnen Inhaltstypen parsen.
In produktivem Code sollten Sie Trusted Types verwenden; hier werden sie der Kürze halber weggelassen.

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

Beachten Sie, dass die MIME-Typen `application/xml` und `image/svg+xml` oben funktional identisch sind – letzterer enthält keine SVG-spezifischen Parsing-Regeln.

### Fehlerbehandlung

Wenn der XML-Parser mit einem String verwendet wird, der kein wohlgeformtes XML darstellt, enthält das von `parseFromString` zurückgegebene [`XMLDocument`](/de/docs/Web/API/XMLDocument) einen `<parsererror>`-Knoten, der den Parse-Fehler beschreibt.

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

Zusätzlich kann der Parse-Fehler in der JavaScript-Konsole des Browsers gemeldet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} – das Gegenstück für {{jsxref("JSON")}}-Dokumente.
