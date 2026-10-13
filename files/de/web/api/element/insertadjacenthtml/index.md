---
title: "Element: Methode insertAdjacentHTML()"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) missbraucht werden, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie statt Zeichenfolgen [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
> Dadurch wird die Eingabe durch eine Transformationsfunktion geleitet, die sie [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute entfernen kann.

Die Methode **`insertAdjacentHTML()`** des [`Element`](/de/docs/Web/API/Element)-Interfaces parst die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Eine Zeichenfolge, die die Position relativ zum Element angibt. Sie muss eine der folgenden Zeichenfolgen sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.
    - `"afterbegin"`
      - : Innerhalb des Elements, vor seinem ersten Kindknoten.
    - `"beforeend"`
      - : Innerhalb des Elements, nach seinem letzten Kindknoten.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder eine Zeichenfolge, die das zu parsende HTML oder XML definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` den Wert `"beforebegin"` oder `"afterend"` hat und das Element entweder kein Elternelement hat oder sein Elternelement das `Document`-Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` keiner der vier aufgeführten Werte ist.
    - die Eingabe XML ist, das nicht wohlgeformt ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft eine Zeichenfolge zugewiesen wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode `insertAdjacentHTML()` parst das Element, auf das sie angewendet wird, nicht erneut und verändert daher die bereits darin enthaltenen Elemente nicht. Dadurch entfällt der zusätzliche Schritt der Serialisierung, was die Methode deutlich schneller macht als eine direkte Bearbeitung von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

Wenn `<p>` das Element ist, lassen sich die möglichen Positionen für den einzufügenden Inhalt „foo“ wie folgt veranschaulichen:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

Die Methode behandelt {{htmlelement("template")}}-Elemente nicht gesondert.
In den meisten Fällen sollten Sie `insertAdjacentHTML()` auf die [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft des Templates anwenden, anstatt die Kindknoten eines Template-Elements direkt zu bearbeiten.

### Sicherheitshinweise

Die Methode bereinigt die Eingabe nicht, um für XSS unsichere Elemente wie {{htmlelement("script")}} oder Event-Handler-Inhaltsattribute zu entfernen.

Wenn Sie mit `insertAdjacentHTML()` HTML in eine Seite einfügen, sollten Sie statt Zeichenfolgen [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
Dadurch wird die Eingabe durch eine Transformationsfunktion geleitet, die sie [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup entfernen kann, bevor sie eingefügt wird.

Wenn Sie wissen, dass von Benutzern bereitgestellte Inhalte reiner Text sein sollen, sollten Sie die Methode [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) verwenden.
Dadurch wird die Eingabe als reiner Text eingefügt, statt als HTML geparst zu werden.

## Beispiele

### HTML einfügen

Dieses Beispiel zeigt die vier Einfügepositionen.
Der gesamte eingefügte Text wird fett dargestellt; Text, der innerhalb des Elements eingefügt wird, erscheint zusätzlich rot und in einer nichtproportionalen Schriftart (wie Code).

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

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes definieren wir eine Richtlinie namens `some-content-policy`, um aus der Eingabe [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen (die Richtlinie `some-content-policy` sollten wir außerdem mittels CSP erzwingen).
Der Code implementiert eine No-op-Richtlinie, damit dieses Beispiel ohne Abhängigkeit von Drittanbietern funktioniert.
In Ihrem Anwendungscode sollten Sie eine Drittanbieterbibliothek wie „DOMPurify“ verwenden, um aus nicht vertrauenswürdigen Eingaben bereinigte Inhalte zu erzeugen.

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

Der verbleibende Code fügt das vertrauenswürdige HTML an der ausgewählten Position relativ zum Element mit der id `subject` ein.

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
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Serialisiert einen DOM-Baum in eine XML-Zeichenfolge
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
