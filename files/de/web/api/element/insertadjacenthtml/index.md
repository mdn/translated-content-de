---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: ffe043e6d4c6b80d4975f9172adf02ca0407c530
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihren Eingabetext als HTML oder XML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich vom Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}} Elemente und Ereignis-Handler-Attribute zu entfernen.

Die **`insertAdjacentHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle analysiert die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein Elternelement hat.
    - `"afterbegin"`
      - : Direkt im Element, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt im Element, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein Elternelement hat.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein String, der das zu analysierende HTML oder XML definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein Elternteil hat oder sein Elternteil das `Document` Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgelisteten Werte ist.
    - Die Eingabe ist XML, das nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch ein CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

Die `insertAdjacentHTML()` Methode analysiert nicht das Element neu, auf dem sie angewendet wird, und beschädigt somit nicht die vorhandenen Elemente innerhalb dieses Elements. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht sie viel schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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
In den meisten Fällen sollten Entwickler `insertAdjacentHTML()` auf der [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft des Templates verwenden, anstatt die Kindknoten eines Template-Elements direkt zu manipulieren.

### Sicherheitsüberlegungen

Die Methode führt keine Bereinigung durch, um XSS-gefährliche Elemente wie {{htmlelement("script")}} oder Ereignis-Handler-Inhaltsattribute zu entfernen.

Wenn HTML in eine Seite eingefügt wird, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

Die [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) Methode oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
Dies fügt die Eingabe als Rohtext ein, anstatt sie als HTML zu analysieren.

## Beispiele

### HTML einfügen

Dieses Beispiel demonstriert die vier Einfügepositionen.
Alle eingefügten Texte sind fett gedruckt, während Text, der innerhalb des Elements eingefügt wird, zusätzlich als roter Monotyp (Code) gestylt wird.

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

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zunächst die [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Richtlinie namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus der Eingabe zu erstellen (wir sollten die `some-content-policy` auch mithilfe von CSP durchsetzen).
Der Code implementiert eine No-Op-Richtlinie, um dieses Beispiel ohne Drittanbieterabhängigkeit funktional zu machen.
Ihr eigener Anwendungscode sollte eine Bibliothek wie die "DOMPurify" Bibliothek verwenden, um bereinigte Inhalte aus nicht vertrauenswürdiger Eingabe zurückzugeben.

```js
const policy = trustedTypes.createPolicy("some-content-policy", {
  createHTML: (input) => {
    return input; // Do not do this in your own code!
    // Instead do something like:
    // return DOMPurify.sanitize(input);
  },
});

const unsafeText = "<strong>inserted text</strong>";
const trustedHTML = policy.createHTML(unsafeText);
```

Der restliche Code fügt das vertrauenswürdige HTML an der gewählten Position relativ zu dem Element mit der ID `subject` ein.

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
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisierung eines DOM-Baums in einen XML-String
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
