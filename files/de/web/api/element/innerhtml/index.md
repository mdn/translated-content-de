---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft verarbeitet ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen zuweisen und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Eigenschaft **`innerHTML`** der [`Element`](/de/docs/Web/API/Element)-Schnittstelle liest oder setzt das im Element enthaltene HTML- oder XML-Markup. {{Glossary("shadow_tree", "Shadow Roots")}} werden dabei in beiden Fällen ausgelassen.

Um HTML in das Dokument einzufügen, statt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge mit der HTML-Serialisierung der Nachfahren des Elements zurückgegeben.

Beim Setzen akzeptiert die Eigenschaft entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge. Sie verarbeitet diesen Wert als HTML und ersetzt alle Nachfahren des Elements durch das Ergebnis.
Wird die Eigenschaft auf den Wert `null` gesetzt, wird dieser in eine leere Zeichenfolge (`""`) umgewandelt. Daher ist `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einer Zeichenfolge zu setzen, die kein korrekt geformtes HTML enthält.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, obwohl [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, HTML in einen Knoten einzufügen, dessen übergeordneter Knoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` liest eine Serialisierung der verschachtelten DOM-Kindelemente eines Elements oder setzt HTML bzw. XML, das verarbeitet wird, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dadurch soll eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindert werden, bei der ein Angreifer eine Eingabe so gestalten kann, dass sie eine [Bereinigungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und dadurch einen Cross-Site-Scripting-Angriff (XSS) ermöglicht.

### Besonderheiten des Shadow DOM

Die Serialisierung des DOM-Baums, die aus der Eigenschaft gelesen wird, enthält keine {{Glossary("shadow_tree", "Shadow Roots")}}. Wenn Sie eine HTML-Zeichenfolge mit Shadow Roots benötigen, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ebenso wird eine mit `innerHTML` zugewiesene HTML-Zeichenfolge in DOM-Elemente ohne Shadow Roots umgewandelt.
Beispielsweise wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) verarbeitet, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist.
Um den Inhalt eines Elements anhand einer HTML-Zeichenfolge mit deklarativen Shadow Roots zu setzen, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsaspekte

Die Eigenschaft `innerHTML` ist wahrscheinlich der häufigste Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS): Dabei werden potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ohne vorherige Bereinigung in das DOM eingefügt.
Die Eigenschaft verhindert zwar, dass eingefügte {{HTMLElement("script")}}-Elemente ausgeführt werden, ist aber anfällig für viele andere Möglichkeiten, mit denen Angreifer HTML so gestalten können, dass schädlicher JavaScript-Code ausgeführt wird.
Im folgenden Beispiel würde etwa der Code im `error`-Event-Handler ausgeführt, weil der `src`-Wert des {{htmlelement("img")}}-Elements keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Risiken verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen zuweisen und mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
So wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die potenziell gefährliches Markup vor dem Einfügen durch [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization) entfernen kann.

> [!NOTE]
> Verwenden Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent), wenn Sie wissen, dass der von Benutzern bereitgestellte Inhalt reiner Text sein soll.
> Dadurch wird verhindert, dass er als HTML verarbeitet wird.

## Beispiele

### HTML-Inhalt eines Elements lesen

Beim Lesen von `innerHTML` serialisiert der User Agent die Nachfahren des Elements.

Gegeben sei das folgende HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Sie können das Markup des Inhalts des äußeren {{htmlelement("div")}} wie gezeigt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Inhalt eines Elements ersetzen

In diesem Beispiel ersetzen wir den DOM-Inhalt eines Elements, indem wir seiner Eigenschaft `innerHTML` HTML zuweisen.
Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenfolge mit dem HTML ein `TrustedHTML`-Objekt und weisen dieses Objekt anschließend `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zuerst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die JavaScript-API für Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode zum Umwandeln einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Implementierungen von `createHTML()` verwenden häufig eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

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
element.innerHTML = trustedHTML;
```

> [!WARNING]
> Sie können `innerHTML` zwar direkt eine Zeichenfolge zuweisen, doch dies stellt ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn die einzufügende Zeichenfolge potenziell schädliche Inhalte enthalten könnte.
> Verwenden Sie `TrustedHTML`, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und setzen Sie einen CSP-Header, um die [Verwendung von Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- HTML oder XML in einen DOM-Baum umwandeln: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Einen DOM-Baum als XML-Zeichenfolge serialisieren: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
