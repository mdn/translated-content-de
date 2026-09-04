---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute zu entfernen.

Die **`insertAdjacentHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle parst die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer bestimmten Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element besitzt.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element besitzt.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein String, der das zu parsende HTML oder XML definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein übergeordnetes Element hat oder dessen übergeordnetes Element das `Document` Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgelisteten Werte ist.
    - Die Eingabe XML ist, das nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode `insertAdjacentHTML()` parst das Element, auf dem sie verwendet wird, nicht erneut, und beeinflusst somit nicht die bestehenden Elemente innerhalb dieses Elements. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht es wesentlich schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

Wo `<p>` das Element ist, können wir die möglichen Positionen für den eingefügten Inhalt "foo" wie folgt visualisieren:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

Die Methode enthält keine spezielle Behandlung für {{htmlelement("template")}} Elemente.
Entwickler sollten in den meisten Fällen `insertAdjacentHTML()` auf der [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft des Templates verwenden, anstatt die Kindknoten eines Template-Elements direkt zu manipulieren.

### Sicherheitsüberlegungen

Die Methode führt keine Sanitierung durch, um XSS-unsichere Elemente wie {{htmlelement("script")}} oder Inhalte von Event-Handlern zu entfernen.

Beim Einfügen von HTML in eine Seite mit `insertAdjacentHTML()` sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings verwenden und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups zu entfernen, bevor sie eingefügt wird.

Die Methode [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
Dies fügt die Eingabe als Rohtext ein, anstatt sie als HTML zu parsen.

## Beispiele

### Einfügen von HTML

Dieses Beispiel demonstriert die vier Einfügepositionen.
Alle eingefügten Texte sind fett, während Texte, die innerhalb des Elements eingefügt werden, zusätzlich als roter Monotyp (Code) gestylt sind.

#### HTML

```html
<select id="position">
  <option>beforebegin</option>
  <option>afterbegin</option>
  <option>beforeend</option>
  <option>afterend</option>
</select>

<button id="insert">Insert HTML</button>
<button id="reset">Reset</button>

<p>
  Some text, with a <code id="subject">code-formatted element</code> inside it.
</p>
```

#### CSS

```css
code {
  color: red;
}
```

#### JavaScript

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes definieren wir eine Richtlinie namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus der Eingabe zu erstellen (wir sollten auch die `some-content-policy` mithilfe von CSP erzwingen).
Der Code implementiert eine No-Op-Richtlinie, um zu ermöglichen, dass dieses Beispiel ohne eine Drittanbieter-Abhängigkeit funktioniert.
Ihr eigener Anwendungscode sollte eine Drittanbieter-Bibliothek wie die "DOMPurify" Bibliothek verwenden, um bereinigte Inhalte aus unzuverlässiger Eingabe zurückzugeben.

```js
const policy = trustedTypes.createPolicy("some-content-policy", {
  createHTML(input) {
    return input; // Do not do this in your own code!
    // Instead do something like:
    // return DOMPurify.sanitize(input);
  },
});

const unsafeText = "<strong>inserted text</strong>";
const trustedHTML = policy.createHTML(unsafeText);
```

Der verbleibende Code fügt das vertrauenswürdige HTML an der ausgewählten Position relativ zu dem Element mit der ID `subject` ein.

```js
const insert = document.querySelector("#insert");
insert.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  const positionSelect = document.querySelector("#position");
  subject.insertAdjacentHTML(positionSelect.value, trustedHTML);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  document.location.reload();
});
```

#### Ergebnis

{{EmbedLiveSample("Inserting HTML", 100, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Ein DOM-Baum in eine XML-Zeichenfolge serialisieren
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
