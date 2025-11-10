---
title: "Element: innerHTML Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihren Input als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn der Input ursprünglich von einem Angreifer kam.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML` Objekte statt Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle liest oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist, wobei alle {{Glossary("shadow_tree", "Shadow Roots")}} in beiden Fällen ausgelassen werden.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Lesen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung der Nachkommen des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String. Dieser Wert wird als HTML analysiert und ersetzt alle Nachkommen des Elements mit dem Ergebnis.
Wenn auf den `null` Wert gesetzt wird, wird dieser `null` Wert in den leeren String (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend ist mit `elt.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einem String zu setzen, der kein wohlgeformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [von einer CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, das HTML in einen Knoten einzufügen, dessen Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` ruft eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements ab oder setzt HTML oder XML, das analysiert werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die `<` und `>` Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben gestalten kann, die eine [Sanitierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und einen Cross-Site-Scripting (XSS) Angriff ermöglichen.

### Überlegungen zum Shadow DOM

Die Serialisierung des vom Property gelesenen DOM-Baums enthält keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie einen HTML-String erhalten möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

In ähnlicher Weise, wenn der Elementinhalt mit `innerHTML` gesetzt wird, wird der HTML-String in DOM-Elemente analysiert, die keine Shadow Roots enthalten.
Zum Beispiel wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut angegeben ist oder nicht.
Um den Inhalt eines Elements aus einem HTML-String, der deklarative Shadow Roots enthält, zu setzen, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `innerHTML`-Eigenschaft ist wahrscheinlich der häufigste Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM eingefügt werden, ohne vorher gereinigt zu werden.
Während die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente ausgeführt werden, wenn sie injiziert werden, ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML gestalten können, um bösartigen JavaScript-Code auszuführen.
Zum Beispiel würde das folgende Beispiel den Code im `error` Event-Handler ausführen, da der {{htmlelement("img")}} `src` Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geführt wird, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der benutzerbereitgestellte Inhalt reiner Text sein sollte.
> Dies verhindert, dass es als HTML analysiert wird.

## Beispiele

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, die Nachkommen des Elements zu serialisieren.

Angenommen, das folgende HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Sie können das Markup für den Inhalt des äußeren {{htmlelement("div")}} wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Ersetzen des Inhalts eines Elements

In diesem Beispiel werden wir das DOM eines Elements ersetzen, indem wir HTML an die `innerHTML` Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu verringern, erstellen wir zuerst ein `TrustedHTML` Objekt aus dem String, der das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, deshalb definieren wir zunächst den [tinyfill von Trusted Types](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und weisen das Ergebnis dem Element zu:

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
> Während Sie einen String direkt `innerHTML` zuweisen können, ist dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn der einzufügende String potenziell schädlichen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen sanitisiert wird, und Sie sollten einen CSP-Header setzen, um [vertrauenswürdige Typen durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisieren eines DOM-Baums in einen XML-String: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
