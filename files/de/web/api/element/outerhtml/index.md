---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> APIs wie diese sind bekannt als [Injection-Quellen](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko vermindern, indem Sie immer `TrustedHTML`-Objekte statt Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)-Schnittstelle erhält oder setzt das HTML- oder XML-Markup des Elements und seiner Nachfahren, wobei in beiden Fällen jegliche {{Glossary("shadow_tree", "Shadow Roots")}} ausgelassen werden.

Um die Inhalte eines Elements zu erhalten oder zu setzen, verwenden Sie die [`innerHTML`](/de/docs/Web/API/Element/innerHTML)-Eigenschaft.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der eine HTML-Serialisierung des `element` und seiner Nachfahren enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String. Die Eingabe wird als HTML analysiert und ersetzt das Element und all seine Nachfahren mit dem Ergebnis. Wenn es auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `element.outerHTML = null` gleichbedeutend mit `element.outerHTML = ""` ist.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` an einem Element zu setzen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie z.B. [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` mit einer XML-Eingabe zu setzen, die nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`outerHTML` holt eine Serialisierung des Elements oder setzt HTML oder XML, das analysiert werden soll, um es innerhalb des übergeordneten Elements zu ersetzen.

Wenn das Element keinen Elternelement-Knoten hat, wird das Setzen seiner `outerHTML`-Eigenschaft es oder seine Nachfahren nicht ändern. Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Außerdem, während das Element im Dokument ersetzt wird, wird die Variable, deren `outerHTML`-Eigenschaft gesetzt wurde, weiterhin eine Referenz auf das ursprüngliche Element halten:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

### Entkommene Attributwerte

Der zurückgegebene Wert entkommt einigen Werten in HTML-Attributen. Hier sehen wir, dass das `&`-Zeichen entkommen wird:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Einige Browser serialisieren auch die `<`- und `>`-Zeichen als `&lt;` und `&gt;`, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)). Dies dient dazu, eine potenzielle Sicherheitsanfälligkeit ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, in der ein Angreifer Eingaben erstellen kann, die eine [Sanierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, wodurch ein Cross-Site-Scripting (XSS)-Angriff ermöglicht wird.

### Überlegungen zum Shadow DOM

Die Serialisierung des aus der Eigenschaft gelesenen DOM-Baums umfasst keine {{Glossary("shadow_tree", "Shadow Roots")}}. Wenn Sie eine HTML-Serialisierung eines Elements erhalten möchten, das Shadow Roots umfasst, müssen Sie stattdessen die Methode [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) verwenden. Beachten Sie, dass dies die _Inhalte_ des Elements holt.

Ähnlich verhält es sich beim Setzen von Elementinhalten mit `outerHTML`, die HTML-Eingabe wird in DOM-Elemente analysiert, die keine Shadow Roots enthalten. So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) zu einem [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist oder nicht. Wenn Sie die _Inhalte_ eines Elements aus einer HTML-Eingabe setzen möchten, die deklarative Shadow Roots umfasst, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `outerHTML`-Eigenschaft ist ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, da sie verwendet werden kann, um potenziell unsichere von einem Benutzer bereitgestellte Strings in den DOM einzuschleusen. Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente beim Einfügen ausgeführt werden, ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML erstellen können, um bösartiges JavaScript auszuführen. Zum Beispiel würde der folgende Code in diesem Beispiel den Code im `error`-Event-Handler ausführen, da der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Richtlinie. Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups zu entfernen, bevor es eingefügt wird.

## Beispiele

### Holen der Serialisierung eines Elements

Das Lesen von `outerHTML` verursacht, dass der User-Agent das Element serialisiert.

Bei folgendem HTML:

```html
<div id="example">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

Können Sie das Markup für das {{htmlelement("div")}} wie folgt abrufen und ausgeben:

```js
const myElement = document.querySelector("#example");
const contents = myElement.outerHTML;
console.log(contents);
// '<div id="example">\n  <p>Content</p>\n  <p>Further Elaborated</p>\n</div>'
```

### Ersetzen des Elements

In diesem Beispiel werden wir ein Element im DOM ersetzen, indem wir HTML der `outerHTML`-Eigenschaft des Elements zuweisen. Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dann dieses Objekt `outerHTML` zu.

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill). Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert. In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu sanieren, wie unten gezeigt:

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
element.outerHTML = trustedHTML; // Replaces the element with id "container"

// Note that the  #container div is no longer part of the document tree,
```

> [!WARNING]
> Während Sie direkt einen String `outerHTML` zuweisen können, ist dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn der einzufügende String möglicherweise bösartige Inhalte enthält. Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor der Einfügung saniert wird, und Sie sollten einen CSP-Header setzen, um [Trusted Types durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisierung von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsing von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
