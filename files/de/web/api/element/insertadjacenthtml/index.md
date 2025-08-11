---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können eine potenzielle Angriffsstelle für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, insbesondere wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute zu entfernen.

Die **`insertAdjacentHTML()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface analysiert die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zum Element angibt. Muss einer der folgenden Strings sein:
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

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) von einem der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein Elternelement hat oder dessen Elternelement das `Document`-Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgelisteten Werte ist.
    - Die Eingabe unwohlgeformtes XML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die `insertAdjacentHTML()` Methode parst das Element, auf dem sie angewendet wird, nicht erneut, sodass bestehende Elemente innerhalb dieses Elements nicht beschädigt werden. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht sie deutlich schneller als die direkte Manipulation mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

Wenn `<p>` das Element ist, können wir die möglichen Positionen für den eingefügten Inhalt "foo" wie folgt visualisieren:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

Die Methode beinhaltet keine spezielle Behandlung für {{htmlelement("template")}} Elemente.
In den meisten Fällen sollten Entwickler `insertAdjacentHTML()` auf der [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft des Templates und nicht direkt an den Kindknoten eines Template-Elements verwenden.

### Sicherheitserwägungen

Die Methode führt keine Bereinigung durch, um XSS-gefährliche Elemente wie {{htmlelement("script")}} oder Event-Handler-Inhaltsattribute zu entfernen.

Wenn Sie HTML in eine Seite mit `insertAdjacentHTML()` einfügen, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), bevor sie injiziert wird.

Die [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) Methode oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
Dies fügt die Eingabe als Rohtext ein, anstatt sie als HTML zu parsen.

## Beispiele

### Einfügen von HTML

Dieses Beispiel demonstriert die vier Einfügepositionen.
Alle eingefügten Texte sind fett, während im Element eingefügter Text zusätzlich als roter Monotyp (Code) formatiert ist.

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

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Policy namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus der Eingabe zu erstellen (wir sollten auch die `some-content-policy` mit CSP erzwingen).
Der Code implementiert eine No-Op-Policy, um zu ermöglichen, dass dieses Beispiel ohne Abhängigkeit von Drittanbietern funktioniert.
Ihr eigener Anwendungscode sollte eine Drittanbieterbibliothek wie die "DOMPurify"-Bibliothek verwenden, um sanisierten Inhalt aus der nicht vertrauenswürdigen Eingabe zurückzugeben.

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
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisiert einen DOM-Baum in einen XML-String
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
