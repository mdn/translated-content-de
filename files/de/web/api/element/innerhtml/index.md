---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: b0e1a82bcd76c608c183cfe858a1f49f0a1e67ad
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenketten zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ruft das HTML- oder XML-Markup ab, das im Element enthalten ist, oder legt es fest, wobei in beiden Fällen sämtliche {{Glossary("shadow_tree", "Shadow Roots")}} ausgelassen werden.

Um HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Beim Abrufen der Eigenschaft wird eine Zeichenkette zurückgegeben, die die HTML-Serialisierung der Nachfahren des Elements enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenkette akzeptiert. Dieser Wert wird als HTML geparst und ersetzt alle Nachfahren des Elements durch das Ergebnis.
Beim Setzen auf den Wert `null` wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette festzulegen, die kein wohlgeformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` ruft eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements ab oder legt HTML bzw. XML fest, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitslücke verhindern ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)), bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitization-Funktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und dadurch einen Cross-Site-Scripting-Angriff (XSS) ermöglichen.

### Überlegungen zu Shadow DOM

Die Serialisierung des DOM-Baums, die aus der Eigenschaft gelesen wird, enthält keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie eine HTML-Zeichenkette einschließlich Shadow Roots abrufen möchten, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ebenso wird die HTML-Zeichenkette beim Festlegen des Elementinhalts mit `innerHTML` in DOM-Elemente geparst, die keine Shadow Roots enthalten.
Beispielsweise wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist.
Um den Inhalt eines Elements aus einer HTML-Zeichenkette festzulegen, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsaspekte

Die `innerHTML`-Eigenschaft ist wahrscheinlich der häufigste Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS), bei denen potenziell unsichere, von einem Benutzer bereitgestellte Zeichenketten in das DOM eingefügt werden, ohne zuvor bereinigt zu werden.
Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente bei ihrer Einfügung ausgeführt werden, ist sie für viele andere Möglichkeiten anfällig, mit denen Angreifer HTML erstellen können, das bösartiges JavaScript ausführt.
Beispielsweise würde das folgende Beispiel den Code im `error`-Event-Handler ausführen, weil der `src`-Wert des {{htmlelement("img")}} kein gültiger Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenketten zuweisen und Trusted Types mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt Klartext sein soll.
> Dadurch wird verhindert, dass er als HTML geparst wird.

## Beispiele

### Den HTML-Inhalt eines Elements lesen

Das Lesen von `innerHTML` veranlasst den User-Agent, die Nachfahren des Elements zu serialisieren.

Bei folgendem HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

können Sie das Markup für den Inhalt des äußeren {{htmlelement("div")}} wie gezeigt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Den Inhalt eines Elements ersetzen

In diesem Beispiel ersetzen wir das DOM eines Elements, indem wir der `innerHTML`-Eigenschaft des Elements HTML zuweisen.
Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenkette mit dem HTML ein `TrustedHTML`-Objekt und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser dient als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Umwandeln einer Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenkette ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

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
> Obwohl Sie eine Zeichenkette direkt `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn die einzufügende Zeichenkette potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und einen CSP-Header setzen, um [Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- HTML oder XML in einen DOM-Baum parsen: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Einen DOM-Baum in eine XML-Zeichenkette serialisieren: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
