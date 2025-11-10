---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) über die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [säubern](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, wie z.B. {{htmlelement("script")}} Elemente und Event-Handler-Attribute.

Die **`insertAdjacentHTML()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface analysiert die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor dessen erstem Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach dessen letztem Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein String, der das HTML oder XML definiert, das geparst werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) auslösen, eine der folgenden Typen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein übergeordnetes Element hat oder dessen übergeordnetes Element das `Document` Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgeführten Werte ist.
    - Die Eingabe XML ist, das nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [von einer CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die `insertAdjacentHTML()` Methode parst das Element, auf dem sie verwendet wird, nicht neu und beschädigt daher die vorhandenen Elemente innerhalb dieses Elements nicht. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht sie viel schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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
In den meisten Fällen sollten Entwickler `insertAdjacentHTML()` auf der [`content`](/de/docs/Web/API/HTMLTemplateElement/content) Eigenschaft des Templates verwenden, anstatt die untergeordneten Knoten eines Template-Elements direkt zu manipulieren.

### Sicherheitsüberlegungen

Die Methode führt keine Reinigung durch, um XSS-unsichere Elemente wie {{htmlelement("script")}} oder Event-Handler-Inhaltsattribute zu entfernen.

Wenn HTML auf einer Seite mit `insertAdjacentHTML()` eingefügt wird, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) über die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [säubern](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

Die Methode [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt als reiner Text vorliegen sollte.
Dies fügt die Eingabe als Rohtext und nicht als HTML ein.

## Beispiele

### Einfügen von HTML

Dieses Beispiel demonstriert die vier Einfügepositionen.
Der gesamte eingefügte Text ist fett, während der innerhalb des Elements eingefügte Text zusätzlich als roter Monotyp (Code) formatiert ist.

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

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Richtlinie namens `some-content-policy` zur Erstellung von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekten aus der Eingabe (wir sollten die `some-content-policy` auch über CSP durchsetzen).
Der Code implementiert eine No-Op-Richtlinie, um dieses Beispiel ohne Drittanbieterabhängigkeit zum Laufen zu bringen.
Ihr eigener Anwendungscode sollte eine Drittanbieter-Bibliothek wie die "DOMPurify" Bibliothek verwenden, um bereinigten Inhalt aus der untrusted Eingabe zurückzugeben.

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
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisieren eines DOM-Baums in einen XML-String
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
