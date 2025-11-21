---
title: "Element: innerHTML Eigenschaft"
short-title: innerHTML
slug: Web/API/Element/innerHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell ein Einfallstor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstatt von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsüberlegungen).

Die **`innerHTML`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element) Interface erhält oder setzt das HTML- oder XML-Markup, das innerhalb des Elements enthalten ist, und lässt dabei die {{Glossary("shadow_tree", "Shadow Roots")}} in beiden Fällen aus.

Um das HTML in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen, verwenden Sie die Methode [`insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML).

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenkette zurück, die die HTML-Serialisierung der Nachkommen des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekt oder eine Zeichenkette. Dieser Wert wird als HTML analysiert und alle Nachkommen des Elements werden durch das Ergebnis ersetzt.
Wenn `null` festgelegt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette festzulegen, die kein korrekt geformtes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, das HTML in einen Knoten einzufügen, dessen Elternknoten ein [`Document`](/de/docs/Web/API/Document) ist.

## Beschreibung

`innerHTML` erhält eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Elements oder setzt HTML oder XML, das analysiert werden soll, um den DOM-Baum innerhalb des Elements zu ersetzen.

Beachten Sie, dass einige Browser die `<` und `>` Zeichen ähnlich wie `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dem Schutz vor einer potenziellen Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)), bei der ein Angreifer Eingaben erstellen kann, die eine [Bereinigungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und einen Cross-Site Scripting (XSS) Angriff ermöglichen.

### Überlegungen zum Shadow DOM

Die Serialisierung des DOM-Baums, die aus der Eigenschaft gelesen wird, schließt keine {{Glossary("shadow_tree", "Shadow Roots")}} ein – wenn Sie eine HTML-Zeichenkette erhalten möchten, die Shadow Roots enthält, müssen Sie stattdessen die Methoden [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML) oder [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML) verwenden.

Ähnlich verhält es sich, wenn Sie den Inhalt eines Elements mit `innerHTML` setzen, wird die HTML-Zeichenkette in DOM-Elemente geparst, die keine Shadow Roots enthalten.
So wird zum Beispiel [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) als [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement) geparst, unabhängig davon, ob das [`shadowrootmode`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootmode) Attribut angegeben ist oder nicht.
Um den Inhalt eines Elements aus einer HTML-Zeichenkette zu setzen, die deklarative Shadow Roots enthält, müssen Sie stattdessen [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) oder [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwenden.

### Sicherheitsüberlegungen

Die `innerHTML`-Eigenschaft ist wahrscheinlich das häufigste Einfallstor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Zeichenfolgen von einem Benutzer bereitgestellt und in den DOM eingefügt werden, ohne vorher gereinigt zu werden.
Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}} Elemente ausgeführt werden, wenn sie eingefügt werden, ist sie dennoch anfällig für viele andere Methoden, mit denen Angreifer HTML erstellen können, um bösartigen JavaScript-Code auszuführen.
Zum Beispiel würde das folgende Beispiel den Code im `error`-Ereignishandler ausführen, weil der {{htmlelement("img")}} `src` Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
```

Diese Probleme können gemindert werden, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte statt Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingaben zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

> [!NOTE]
> [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
> Dies verhindert, dass er als HTML analysiert wird.

## Beispiele

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten, die Nachkommen des Elements zu serialisieren.

Angesichts des folgenden HTML:

```html
<div id="example">
  <p>My name is Joe</p>
</div>
```

Können Sie den Markup-Inhalt des äußeren {{htmlelement("div")}} wie folgt abrufen und protokollieren:

```js
const myElement = document.querySelector("#example");
const contents = myElement.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Ersetzen des Inhalts eines Elements

In diesem Beispiel werden wir den DOM eines Elements ersetzen, indem wir HTML in die `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu minimieren, erstellen wir zunächst ein `TrustedHTML` Objekt aus der Zeichenkette, die das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Umwandlung einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis dem Element zuzuweisen:

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
> Während Sie direkt eine Zeichenkette `innerHTML` zuweisen können, ist dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen), wenn die einzufügende Zeichenkette potenziell bösartigen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und Sie sollten einen CSP-Header setzen, um [vertrauenswürdige Typen zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.textContent`](/de/docs/Web/API/Node/textContent) und [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- Parsen von HTML oder XML in einen DOM-Baum: [`DOMParser`](/de/docs/Web/API/DOMParser)
- Serialisieren eines DOM-Baums in eine XML-Zeichenkette: [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
- [`ShadowRoot.getHTML()`](/de/docs/Web/API/ShadowRoot/getHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
