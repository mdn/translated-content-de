---
title: "Element: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein potenzieller Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`innerHTML`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ruft das innerhalb des Elements enthaltene HTML- oder XML-Markup ab oder setzt es und lässt dabei in beiden Fällen sämtliche {{Glossary("shadow_tree", "Shadow Roots")}} weg.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung der Nachfahren des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String. Dieser Wert wird als HTML geparst und alle Nachfahren des Elements werden durch das Ergebnis ersetzt.
Beim Setzen auf den Wert `null` wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einem String zu setzen, der kein wohlgeformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standard-Policy definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen übergeordnetes Element ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` ruft eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Elements ab oder setzt HTML bzw. XML, das geparst werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitization-Funktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und dadurch einen Cross-Site-Scripting-(XSS)-Angriff ermöglichen.

### Überlegungen zum Shadow DOM

Die aus der Eigenschaft gelesene Serialisierung des DOM-Baums enthält keine {{Glossary("shadow_tree", "Shadow Roots")}} — wenn Sie einen HTML-String abrufen möchten, der Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ebenso wird der HTML-String beim Setzen des Elementinhalts mit `innerHTML` in DOM-Elemente geparst, die keine Shadow Roots enthalten.
So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist.
Um den Inhalt eines Elements aus einem HTML-String zu setzen, der deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsaspekte

Die `innerHTML`-Eigenschaft ist wahrscheinlich der häufigste Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS), bei denen potenziell unsichere, von einem Benutzer bereitgestellte Strings ohne vorherige Sanitization in das DOM eingefügt werden.
Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente ausgeführt werden, wenn sie eingefügt werden, ist sie anfällig für viele andere Arten, auf die Angreifer HTML erstellen können, um bösartiges JavaScript auszuführen.
Das folgende Beispiel würde beispielsweise den Code im `error`-Event-Handler ausführen, weil der `src`-Wert des {{htmlelement("img")}} kein gültiger Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und Trusted Types mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt Klartext sein soll.
> Dadurch wird verhindert, dass er als HTML geparst wird.

## Beispiele

### Den HTML-Inhalt eines Elements lesen

Das Lesen von `innerHTML` veranlasst den User Agent, die Nachfahren des Elements zu serialisieren.

Bei folgendem HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Können Sie das Markup für den Inhalt des äußeren {{htmlelement("div")}} wie gezeigt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Den Inhalt eines Elements ersetzen

In diesem Beispiel ersetzen wir das DOM eines Elements, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das XSS-Risiko zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst das [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieses fungiert als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Umwandeln eines Eingabe-Strings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus dem potenziell unsicheren Eingabe-String ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

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
> Obwohl Sie einen String direkt `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn der einzufügende String potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen sanitisiert wird, und einen CSP-Header setzen, um [Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- HTML oder XML in einen DOM-Baum parsen: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Einen DOM-Baum in einen XML-String serialisieren: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
