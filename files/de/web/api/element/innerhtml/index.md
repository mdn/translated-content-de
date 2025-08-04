---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: ffe043e6d4c6b80d4975f9172adf02ca0407c530
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute zu entfernen.

Die **`innerHTML`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces liest oder setzt das HTML- oder XML-Markup, das im Element enthalten ist, und ignoriert dabei jegliche {{Glossary("shadow_tree", "Shadow Roots")}} in beiden Fällen.

Um HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung der Nachfahren des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String. Es analysiert diesen Wert als HTML und ersetzt alle Nachfahren des Elements mit dem Ergebnis.
Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einem String zu setzen, der nicht korrekt geformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` erhält eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das analysiert werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` in Attributwerten als `&lt;` und `&gt;` serialisieren (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitsanfälligkeit ([mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, wodurch ein Cross-Site-Scripting (XSS)-Angriff ermöglicht wird.

### Überlegungen zum Shadow DOM

Die Serialisierung des DOM-Baums, die von der Eigenschaft gelesen wird, schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein — wenn Sie einen HTML-String erhalten möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ebenso wird beim Setzen von Element-Inhalten mit `innerHTML` der HTML-String in DOM-Elemente geparst, die keine Shadow Roots enthalten.
So wird beispielsweise ein [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist oder nicht.
Um die Inhalte eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitshinweise

Die `innerHTML`-Eigenschaft ist wahrscheinlich der häufigste Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere von einem Benutzer bereitgestellte Strings in das DOM eingefügt werden, ohne dass sie vorher sanitisiert werden.
Während die Eigenschaft {{HTMLElement("script")}}-Elemente daran hindert, ausgeführt zu werden, wenn sie injiziert werden, ist sie anfällig für viele andere Wege, auf denen Angreifer HTML erstellen können, um böswilliges JavaScript auszuführen.
Zum Beispiel würde das folgende Beispiel den Code im `error`-Event-Handler ausführen, da der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme mildern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und einen CSP-Header festlegen, um [trusted type durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
> Dies verhindert, dass er als HTML geparst wird.

## Beispiele

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` führt dazu, dass der Benutzeragent die Nachfahren des Elements serialisiert.

Angenommen, das folgende HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Sie können das Markup für die Inhalte des äußeren {{htmlelement("div")}} wie gezeigt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Ersetzen der Inhalte eines Elements

In diesem Beispiel ersetzen wir das DOM eines Elements, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Dann erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Implementierungen von `createHTML()` verwenden häufig eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und das Ergebnis dem Element zuzuweisen:

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
> Obwohl Sie einen String direkt `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitshinweise) dar, wenn der einzufügende String potenziell schädlichen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen sanitisiert wird, und Sie sollten einen CSP-Header festlegen, um [trusted types durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisierung eines DOM-Baums in einen XML-String: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
