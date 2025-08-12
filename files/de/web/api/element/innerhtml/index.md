---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: bb5c5ebe8e7650441f93037b21812a874e78f073
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte statt Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`innerHTML`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces erhält oder setzt das HTML- oder XML-Markup innerhalb des Elements, wobei in beiden Fällen jegliche {{Glossary("shadow_tree", "Shadow Roots")}} ausgelassen werden.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung der Nachfahren des Elements enthält.

Die Einstellung der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String. Dieser Wert wird als HTML geparst und ersetzt alle Nachfahren des Elements mit dem Ergebnis.
Wenn der `null`-Wert gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den Wert von `innerHTML` mit einem String zu setzen, der kein korrekt formatiertes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, das HTML in einen Knoten einzufügen, dessen Elternteil ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` erhält eine Serialisierung der verschachtelten DOM-Kindelemente innerhalb des Elements oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitsanfälligkeit ([Mutation XSS](https://research.securitum.com/dompurify-bypass-using-mxss/)) verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, wodurch ein Cross-Site-Scripting (XSS)-Angriff ermöglicht wird.

### Überlegungen zum Shadow DOM

Die Serialisierung des vom Property gelesenen DOM-Baums schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein — wenn Sie einen HTML-String erhalten möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ebenso, wenn der Elementinhalt unter Verwendung von `innerHTML` gesetzt wird, wird der HTML-String in DOM-Elemente geparst, die keine Shadow Roots enthalten.
So wird zum Beispiel [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut angegeben ist.
Um den Inhalt eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `innerHTML`-Eigenschaft ist wahrscheinlich der häufigste Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in den DOM injiziert werden, ohne vorher bereinigt zu werden.
Während die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente ausgeführt werden, wenn sie injiziert werden, ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML erstellen können, um bösartigen JavaScript auszuführen.
Ein Beispiel: Der folgende Code würde den Code im `error`-Ereignishandler ausführen, weil der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings zuweisen und [Verify Trusted Type](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) durchsetzen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
> Dies verhindert, dass es als HTML geparst wird.

## Beispiele

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, die Nachfahren des Elements zu serialisieren.

Angesichts des folgenden HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Sie können das Markup der Inhalte des äußeren {{htmlelement("div")}} wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Ersetzen des Inhalts eines Elements

In diesem Beispiel werden wir ein DOM-Element ersetzen, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dann dieses Objekt `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieses funktioniert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Umwandeln eines Eingabe-Strings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitieren:

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
> Obwohl Sie direkt einen String `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn der einzufügende String potenziell bösartigen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und Sie sollten einen CSP-Header setzen, um [Trusted Types durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

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
