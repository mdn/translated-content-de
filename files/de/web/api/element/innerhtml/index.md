---
title: "Element: innerHTML Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: d977ef780f770ddb5359b8fecf733e786f5faadf
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ruft das HTML- oder XML-Markup ab oder setzt es, das innerhalb des Elements enthalten ist, wobei in beiden Fällen etwaige {{Glossary("shadow_tree", "Shadow Roots")}} weggelassen werden.

Um das HTML ins Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenkette zurück, die die HTML-Serialisierung der Nachkommen des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenkette. Dieser Wert wird als HTML analysiert und ersetzt alle Nachkommen des Elements durch das Ergebnis.
Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die kein korrekt geformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, während [trusted types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Eltern ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` ruft eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements ab oder setzt HTML oder XML, das analysiert werden sollte, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitsanfälligkeit ([Mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) zu verhindern, bei der ein Angreifer eine Eingabe erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und einen Cross-Site-Scripting (XSS) Angriff ermöglicht.

### Überlegungen zum Shadow DOM

Die Serialisierung des DOM-Baums, der von der Eigenschaft gelesen wird, enthält keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ähnlich gilt beim Setzen von Elementinhalt mithilfe von `innerHTML`, dass die HTML-Zeichenkette in DOM-Elemente analysiert wird, die keine Shadow Roots enthalten.
Zum Beispiel wird ein [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) in ein [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut angegeben ist oder nicht.
Um den Inhalt eines Elements aus einer HTML-Zeichenkette zu setzen, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `innerHTML` Eigenschaft ist wahrscheinlich der häufigste Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen möglicherweise unsichere Zeichenketten, die von einem Benutzer bereitgestellt werden, in das DOM eingefügt werden, ohne vorher gereinigt zu werden.
Während die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente beim Einfügen ausgeführt werden, ist sie anfällig für viele andere Möglichkeiten, mit denen Angreifer HTML erstellen können, um bösartigen JavaScript auszuführen.
Beispielsweise würde das folgende Beispiel den Code im `error`-Ereignishandler ausführen, da der {{htmlelement("img")}} `src` Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten zuweisen und vertrauenswürdige Typen [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übertragen wird, die die Chance hat, die Eingaben [zu überprüfen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups zu entfernen, bevor sie eingefügt werden.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
> Dies verhindert, dass es als HTML analysiert wird.

## Beispiele

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, die Nachkommen des Elements zu serialisieren.

Ausgehend von dem folgenden HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Sie können die Markierung für den Inhalt des äußeren {{htmlelement("div")}} wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Ersetzen des Inhalts eines Elements

In diesem Beispiel werden wir den DOM eines Elements ersetzen, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenkette, die das HTML enthält, und weisen dann dieses Objekt `innerHTML` zu.

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen zu transformieren.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu reinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenkette zu erstellen und das Ergebnis dem Element zuzuweisen:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const element = document.querySelector("#container");
element.innerHTML = trustedHTML;
```

> [!WARNING]
> Obwohl Sie eine Zeichenkette direkt `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenkette potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt gereinigt wird, bevor er eingefügt wird, und Sie sollten einen CSP-Header setzen, um [vertrauenswürdige Typen zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsing von HTML oder XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisierung eines DOM-Baums in eine XML-Zeichenkette: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
