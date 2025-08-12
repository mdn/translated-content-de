---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: d977ef780f770ddb5359b8fecf733e786f5faadf
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs werden als [Injektionsempfänger](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und sind potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)-Schnittstelle erhält oder setzt das HTML- oder XML-Markup des Elements und seiner Nachkommen, wobei eventuell vorhandene {{Glossary("shadow_tree", "Shadow-Roots")}} in beiden Fällen weggelassen werden.

Um den Inhalt eines Elements zu erhalten oder zu setzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die eine HTML-Serialisierung des `element` und seiner Nachkommen enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge.
Die Eingabe wird als HTML analysiert und ersetzt das Element und alle seine Nachkommen mit dem Ergebnis.
Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) umgewandelt, sodass `element.outerHTML = null` gleichbedeutend mit `element.outerHTML = ""` ist.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Auslösen, wenn versucht wird, `outerHTML` bei einem Element zu setzen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie z. B. [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Auslösen, wenn `outerHTML` mit einer XML-Eingabe gesetzt wird, die nicht wohlgeformt ist.
- `TypeError`
  - : Auslösen, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [trusted types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`outerHTML` erhält eine Serialisierung des Elements oder setzt HTML oder XML, das analysiert werden soll, um es innerhalb des Elternelements zu ersetzen.

Wenn das Element keinen Elterknoten hat, wird das Setzen seiner `outerHTML`-Eigenschaft es oder seine Nachkommen nicht verändern.
Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Auch wenn das Element im Dokument ersetzt wird, hält die Variable, deren `outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

### Entwichene Attributwerte

Der zurückgegebene Wert wird einige Werte in HTML-Attributen escapen.
Hier sehen wir, dass das `&`-Zeichen escapt wird:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Einige Browser serialisieren auch die `<` und `>` Zeichen als `&lt;` und `&gt;`, wenn sie in Attributwerten auftreten (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben gestalten kann, um eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) zu umgehen, was einen Cross-Site-Scripting (XSS)-Angriff ermöglicht.

### Überlegungen zum Shadow DOM

Die Serialisierung des DOM-Baums, die aus der Eigenschaft gelesen wird, schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein.
Wenn Sie eine HTML-Serialisierung eines Elements erhalten möchten, die Shadow Roots einschließt, müssen Sie stattdessen die [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)-Methode verwenden.
Beachten Sie, dass dies den _Inhalt_ des Elements erhält.

In ähnlicher Weise werden beim Setzen des Inhalts eines Elements mit `outerHTML` die HTML-Eingaben in DOM-Elemente geparst, die keine Shadow Roots enthalten.
So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut angegeben ist oder nicht.
Wenn Sie den _Inhalt_ eines Elements aus einer HTML-Eingabe setzen möchten, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `outerHTML`-Eigenschaft ist eine potenzielle Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, da sie verwendet werden kann, um potenziell unsichere, vom Benutzer bereitgestellte Zeichenfolgen in das DOM einzufügen.
Obwohl die Eigenschaft das Ausführen von {{HTMLElement("script")}}-Elementen verhindert, wenn sie eingefügt werden, ist sie für viele andere Möglichkeiten anfällig, bei denen Angreifer HTML gestalten können, um bösartigen JavaScript-Code auszuführen.
Zum Beispiel würde das folgende Beispiel den Code im `error`-Ereignishandler ausführen, weil der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Die Serialisierung eines Elements erhalten

Das Lesen von `outerHTML` veranlasst den Benutzeragenten, das Element zu serialisieren.

Angesichts des folgenden HTMLs:

```html
<div id="example">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

Sie können das Markup für das {{htmlelement("div")}} wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.outerHTML;
console.log(contents);
// '<div id="example">\n  <p>Content</p>\n  <p>Further Elaborated</p>\n</div>'
```

### Das Element ersetzen

In diesem Beispiel ersetzen wir ein Element im DOM, indem wir HTML der `outerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenfolge, die das HTML enthält, und weisen dann dieses Objekt der `outerHTML` zu.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Normalerweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu sanitisieren, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis dem Element zuzuweisen:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const element = document.querySelector("#container");
element.outerHTML = trustedHTML; // Replaces the element with id "container"

// Note that the  #container div is no longer part of the document tree,
```

> [!WARNING]
> Obwohl Sie direkt eine Zeichenfolge `outerHTML` zuweisen können, ist dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn die einzufügende Zeichenfolge potenziell bösartigen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen gesäubert wird, und Sie sollten einen CSP-Header setzen, um [vertrauenswürdige Typen durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisieren von DOM-Bäumen in XML-Zeichenfolgen: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsen von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
