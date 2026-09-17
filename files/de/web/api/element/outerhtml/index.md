---
title: "Element: outerHTML-Eigenschaft"
short-title: outerHTML
slug: Web/API/Element/outerHTML
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Vektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie stets `TrustedHTML`-Objekte statt Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Das **`outerHTML`**-Attribut der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ruft das HTML- oder XML-Markup des Elements und seiner Nachfolger ab oder legt es fest, wobei {{Glossary("shadow_tree", "Shadow Roots")}} in beiden Fällen ausgelassen werden.

Verwenden Sie stattdessen die Eigenschaft [`innerHTML`](/de/docs/Web/API/Element/innerHTML), um den Inhalt eines Elements abzurufen oder festzulegen.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der eine HTML-Serialisierung von `element` und seinen Nachfolgern enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String.
Die Eingabe wird als HTML analysiert und ersetzt das Element sowie alle seine Nachfolger durch das Ergebnis.
Wird sie auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `element.outerHTML = null` gleichbedeutend mit `element.outerHTML = ""` ist.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` für ein Element festzulegen, das ein direktes Kind eines [`Document`](/de/docs/Web/API/Document) ist, beispielsweise [`Document.documentElement`](/de/docs/Web/API/Document/documentElement).
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, `outerHTML` mithilfe einer nicht wohlgeformten XML-Eingabe festzulegen.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

`outerHTML` ruft eine Serialisierung des Elements ab oder legt HTML bzw. XML fest, das analysiert werden soll, um es innerhalb des Elternelements des Elements zu ersetzen.

Wenn das Element keinen Elternknoten hat, verändert das Setzen seiner `outerHTML`-Eigenschaft weder das Element noch seine Nachfolger.
Zum Beispiel:

```js
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML); // output: "<div></div>"
```

Außerdem wird das Element zwar im Dokument ersetzt, aber die Variable, deren `outerHTML`-Eigenschaft gesetzt wurde, enthält weiterhin eine Referenz auf das ursprüngliche Element:

```js
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
```

### Escapte Attributwerte

Der zurückgegebene Wert maskiert einige Werte in HTML-Attributen.
Hier sehen wir, dass das Zeichen `&` maskiert wird:

```js
const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org?a=b&c=d";
console.log(anchor.outerHTML); // output: "<a href='https://developer.mozilla.org?a=b&amp;c=d'></a>"
```

Einige Browser serialisieren außerdem die Zeichen `<` und `>` als `&lt;` und `&gt;`, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dadurch wird eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindert, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitization-Funktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und so einen Cross-Site-Scripting-Angriff (XSS) ermöglichen.

### Überlegungen zum Shadow DOM

Die aus der Eigenschaft gelesene Serialisierung des DOM-Baums umfasst keine {{Glossary("shadow_tree", "Shadow Roots")}}.
Wenn Sie eine HTML-Serialisierung eines Elements einschließlich Shadow Roots erhalten möchten, müssen Sie stattdessen die Methode [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) verwenden.
Beachten Sie, dass dadurch der _Inhalt_ des Elements abgerufen wird.

Ebenso wird bei der Festlegung von Elementinhalten mit `outerHTML` die HTML-Eingabe in DOM-Elemente analysiert, die keine Shadow Roots enthalten.
So wird beispielsweise [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) analysiert, unabhängig davon, ob das Attribut [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) angegeben ist.
Wenn Sie den _Inhalt_ eines Elements anhand einer HTML-Eingabe festlegen möchten, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsaspekte

Die Eigenschaft `outerHTML` ist ein möglicher Vektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS), da sie verwendet werden kann, um potenziell unsichere, von einem Benutzer bereitgestellte Strings in das DOM einzufügen.
Die Eigenschaft verhindert zwar, dass {{HTMLElement("script")}}-Elemente bei ihrer Injektion ausgeführt werden, sie ist jedoch anfällig für viele andere Methoden, mit denen Angreifer HTML erstellen können, das schädliches JavaScript ausführt.
Das folgende Beispiel würde beispielsweise den Code im `error`-Event-Handler ausführen, da der `src`-Wert des {{htmlelement("img")}} keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
element.outerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings zuweisen und Trusted Types mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die die Eingabe [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Die Serialisierung eines Elements abrufen

Das Lesen von `outerHTML` veranlasst den User Agent, das Element zu serialisieren.

Bei folgendem HTML:

```html
<div id="example">
  <p>Content</p>
  <p>Further Elaborated</p>
</div>
```

Können Sie das Markup für das {{htmlelement("div")}} wie gezeigt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.outerHTML;
console.log(contents);
// '<div id="example">\n  <p>Content</p>\n  <p>Further Elaborated</p>\n</div>'
```

### Das Element ersetzen

In diesem Beispiel ersetzen wir ein Element im DOM, indem wir der `outerHTML`-Eigenschaft des Elements HTML zuweisen.
Um das XSS-Risiko zu mindern, erstellen wir zunächst aus dem String, der das HTML enthält, ein `TrustedHTML`-Objekt und weisen dieses Objekt dann `outerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser fungiert als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Umwandeln eines Eingabe-Strings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

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
element.outerHTML = trustedHTML; // Replaces the element with id "container"

// Note that the  #container div is no longer part of the document tree,
```

> [!WARNING]
> Sie können zwar direkt einen String `outerHTML` zuweisen, dies stellt jedoch ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn der einzufügende String potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und einen CSP-Header festlegen, um [Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Serialisieren von DOM-Bäumen in XML-Strings: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- Analysieren von XML oder HTML in DOM-Bäume: [`DOMParser`](/de/docs/Web/API/DOMParser)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
