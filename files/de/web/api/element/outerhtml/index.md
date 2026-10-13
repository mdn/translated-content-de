---
title: "Element: Eigenschaft outerHTML"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft interpretiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-(XSS-)Angriffe](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen zuweisen und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Das Attribut **`outerHTML`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) gibt das HTML- oder XML-Markup des Elements und seiner Nachfahren zurück oder legt es fest. {{Glossary("shadow_tree", "Shadow Roots")}} werden dabei in beiden Fällen ausgelassen.

Um den Inhalt eines Elements abzurufen oder festzulegen, verwenden Sie stattdessen die Eigenschaft [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die eine HTML-Serialisierung des `element` und seiner Nachfahren enthält.

Beim Festlegen der Eigenschaft wird entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge akzeptiert.
Die Eingabe wird als HTML interpretiert; das Ergebnis ersetzt das Element und alle seine Nachfahren.
Wird die Eigenschaft auf den Wert `null` gesetzt, wird `null` in eine leere Zeichenfolge (`""`) umgewandelt. Somit ist `element.outerHTML = null` gleichbedeutend mit `element.outerHTML = ""`.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` für ein Element festzulegen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, beispielsweise [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `outerHTML` mit einer nicht wohlgeformten XML-Eingabe festzulegen.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft eine Zeichenfolge zugewiesen wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`outerHTML` gibt eine Serialisierung des Elements zurück oder legt HTML oder XML fest, das interpretiert werden soll, um das Element innerhalb seines Elternelements zu ersetzen.

Hat das Element keinen Elternknoten, ändert das Festlegen seiner Eigenschaft `outerHTML` weder das Element noch seine Nachfahren.
Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Das Element wird zwar im Dokument ersetzt, die Variable, deren Eigenschaft `outerHTML` festgelegt wurde, enthält jedoch weiterhin eine Referenz auf das ursprüngliche Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

### Escapte Attributwerte

Im zurückgegebenen Wert werden einige Werte in HTML-Attributen escaped.
Hier ist zu sehen, dass das Zeichen `&` escaped wird:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Einige Browser serialisieren auch die Zeichen `<` und `>` als `&lt;` und `&gt;`, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dadurch soll eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindert werden: Ein Angreifer könnte eine Eingabe erstellen, die eine [Bereinigungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und so einen Cross-Site-Scripting-(XSS-)Angriff ermöglicht.

### Aspekte des Shadow DOM

Die Serialisierung des DOM-Baums, die aus der Eigenschaft gelesen wird, enthält keine {{Glossary("shadow_tree", "Shadow Roots")}}.
Wenn Sie eine HTML-Serialisierung eines Elements einschließlich seiner Shadow Roots erhalten möchten, müssen Sie stattdessen die Methode [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) verwenden.
Beachten Sie, dass diese den _Inhalt_ des Elements zurückgibt.

Auch beim Festlegen von Elementinhalten mit `outerHTML` wird die HTML-Eingabe in DOM-Elemente interpretiert, die keine Shadow Roots enthalten.
So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) interpretiert, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist.
Wenn Sie den _Inhalt_ eines Elements anhand einer HTML-Eingabe festlegen möchten, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsaspekte

Die Eigenschaft `outerHTML` kann ein Angriffsvektor für [Cross-Site-Scripting-(XSS-)Angriffe](/de/docs/Web/Security/Attacks/XSS) sein, da sich mit ihr potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen in das DOM einfügen lassen.
Die Eigenschaft verhindert zwar, dass eingefügte {{HTMLElement("script")}}-Elemente ausgeführt werden. Angreifer können jedoch auf viele andere Arten HTML erstellen, das bösartiges JavaScript ausführt.
Im folgenden Beispiel würde etwa der Code im `error`-Event-Handler ausgeführt, da der `src`-Wert des {{htmlelement("img")}}-Elements keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

Sie können diese Risiken verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen zuweisen und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
So wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die sie [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup entfernen kann, bevor sie eingefügt wird.

## Beispiele

### Serialisierung eines Elements abrufen

Beim Lesen von `outerHTML` serialisiert der User Agent das Element.

Gegeben sei das folgende HTML:

```html
<div id="example">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

Sie können das Markup des {{htmlelement("div")}}-Elements wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.outerHTML;
console.log(contents);
// '<div id="example">\n  <p>Content</p>\n  <p>Further Elaborated</p>\n</div>'
```

### Das Element ersetzen

In diesem Beispiel ersetzen wir ein Element im DOM, indem wir der Eigenschaft `outerHTML` des Elements HTML zuweisen.
Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenfolge mit dem HTML ein `TrustedHTML`-Objekt und weisen dieses anschließend `outerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zuerst das [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Es dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine eingegebene Zeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Implementierungen von `createHTML()` verwenden üblicherweise eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenfolge ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

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
> Sie können `outerHTML` zwar direkt eine Zeichenfolge zuweisen. Dies stellt jedoch ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn die einzufügende Zeichenfolge potenziell bösartige Inhalte enthalten könnte.
> Verwenden Sie `TrustedHTML`, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird. Setzen Sie außerdem einen CSP-Header, um die [Verwendung von Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- DOM-Bäume in XML-Zeichenfolgen serialisieren: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- XML oder HTML in DOM-Bäume interpretieren: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
