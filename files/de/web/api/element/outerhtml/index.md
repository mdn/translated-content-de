---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können ein Angriffsvektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko vermindern, indem Sie stets `TrustedHTML`-Objekte statt Strings zuweisen und [vertraute Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Das **`outerHTML`** Attribut des [`Element`](/de/docs/Web/API/Element) Interface liest oder setzt das HTML- oder XML-Markup des Elements und seiner Nachkommen, ignoriert jedoch jegliche {{Glossary("shadow_tree", "Shadow Roots")}} in beiden Fällen.

Um den Inhalt eines Elements zu lesen oder zu setzen, verwenden Sie stattdessen die [`innerHTML`](/de/docs/Web/API/Element/innerHTML) Eigenschaft.

## Wert

Das Lesen der Eigenschaft gibt einen String zurück, der eine HTML-Serialisierung des `Elements` und seiner Nachkommen enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekt oder einen String.
Die Eingabe wird als HTML analysiert und ersetzt das Element sowie alle seine Nachkommen mit dem Ergebnis.
Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `element.outerHTML = null` gleichbedeutend mit `element.outerHTML = ""` ist.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` auf einem Element zu setzen, welches ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, wie z.B. [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` mit einer XML-Eingabe zu setzen, die nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`outerHTML` erhält eine Serialisierung des Elements oder setzt HTML oder XML, das analysiert werden soll, um es innerhalb des Elternelements zu ersetzen.

Wenn das Element keinen Elterknoten hat, ändert das Setzen seiner `outerHTML`-Eigenschaft weder dieses Element noch seine Nachkommen.
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

### Escapete Attributwerte

Der zurückgegebene Wert wird einige Werte in HTML-Attributen escapen.
Hier sehen wir, dass das `&`-Zeichen escapt wird:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Einige Browser serialisieren auch die `<`- und `>`-Zeichen als `&lt;` und `&gt;`, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen, was eine Cross-Site Scripting (XSS)-Attacke ermöglicht.

### Überlegungen zum Shadow DOM

Die Serialisierung des DOM-Baums, die von der Eigenschaft gelesen wird, schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein.
Wenn Sie eine HTML-Serialisierung eines Elements benötigen, die Shadow Roots einschließt, müssen Sie stattdessen die [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) Methode verwenden.
Beachten Sie, dass dies die _Inhalte_ des Elements erhält.

Ähnlich wird beim Festlegen von Elementinhalten mit `outerHTML` die HTML-Eingabe in DOM-Elemente analysiert, die keine Shadow Roots enthalten.
Beispielsweise wird [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode)-Attribut angegeben ist oder nicht.
Wenn Sie die _Inhalte_ eines Elements aus einer HTML-Eingabe, die deklarative Shadow Roots enthält, setzen möchten, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `outerHTML`-Eigenschaft kann ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, da sie verwendet werden kann, um potenziell unsichere von einem Benutzer bereitgestellte Strings in das DOM zu injizieren.
Während die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente beim Einfügen ausgeführt werden, ist sie anfällig für viele andere Arten, mit denen Angreifer HTML so gestalten können, dass bösartiges JavaScript ausgeführt wird.
Zum Beispiel würde der folgende Code im `error`-Event-Handler ausgeführt, weil der {{htmlelement("img")}} `src` Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

Sie können diese Probleme vermindern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings zuweisen und [vertraute Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit dem [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

## Beispiele

### Die Serialisierung eines Elements erhalten

Das Lesen von `outerHTML` führt dazu, dass der User-Agent das Element serialisiert.

Angenommen, folgendes HTML ist gegeben:

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

In diesem Beispiel werden wir ein Element im DOM ersetzen, indem wir HTML der `outerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dieses Objekt dann `outerHTML` zu.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Umwandlung eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

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
> Obwohl Sie direkt einen String `outerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn der einzufügende String potenziell bösartigen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen saniert wird, und Sie sollten einen CSP-Header setzen, um [vertraute Typen durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisieren von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Parsen von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
