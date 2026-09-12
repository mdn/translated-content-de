---
title: "Element: Methode insertAdjacentHTML()"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: b0e1a82bcd76c608c183cfe858a1f49f0a1e67ad
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings zuweisen und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Eingabe [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, um potenziell gefährliches Markup zu entfernen, beispielsweise {{htmlelement("script")}}-Elemente und Event-Handler-Attribute.

Die Methode **`insertAdjacentHTML()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) analysiert die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer angegebenen Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zum Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn sich das Element im DOM-Baum befindet und ein Elternelement hat.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder ein String, der das zu analysierende HTML oder XML definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein Elternelement hat oder sein Elternelement das Objekt `Document` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgeführten Werte ist.
    - Die Eingabe XML ist, das nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode `insertAdjacentHTML()` analysiert das Element, auf dem sie verwendet wird, nicht erneut und beschädigt daher die vorhandenen Elemente innerhalb dieses Elements nicht. Dadurch wird der zusätzliche Schritt der Serialisierung vermieden, was sie deutlich schneller macht als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

Wenn `<p>` das Element ist, können wir die möglichen Positionen für den eingefügten Inhalt „foo“ wie folgt veranschaulichen:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

Die Methode umfasst keine spezielle Behandlung für {{htmlelement("template")}}-Elemente.
In den meisten Fällen sollten Entwickler `insertAdjacentHTML()` auf der Eigenschaft [`content`](/de/docs/Web/API/HTMLTemplateElement/content) des Templates verwenden, anstatt die Kindknoten eines Template-Elements direkt zu manipulieren.

### Sicherheitsaspekte

Die Methode führt keine Bereinigung durch, um für XSS unsichere Elemente wie {{htmlelement("script")}} oder Inhaltsattribute von Event-Handlern zu entfernen.

Wenn Sie mit `insertAdjacentHTML()` HTML in eine Seite einfügen, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Strings übergeben und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Eingabe [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

Die Methode [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt Klartext sein soll.
Dadurch wird die Eingabe als Rohtext eingefügt, anstatt sie als HTML zu analysieren.

## Beispiele

### HTML einfügen

Dieses Beispiel demonstriert die vier Einfügepositionen.
Der gesamte eingefügte Text ist fett formatiert, während Text, der innerhalb des Elements eingefügt wird, zusätzlich als rote Monospace-Schrift (Code) formatiert ist.

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

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser fungiert als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes definieren wir eine Richtlinie mit dem Namen `some-content-policy`, um aus der Eingabe [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen (wir sollten `some-content-policy` ebenfalls mithilfe von CSP erzwingen).
Der Code implementiert eine No-Op-Richtlinie, damit dieses Beispiel ohne Abhängigkeit von Drittanbietern funktioniert.
Ihr eigener Anwendungscode sollte eine Bibliothek eines Drittanbieters wie die Bibliothek „DOMPurify“ verwenden, um aus der nicht vertrauenswürdigen Eingabe bereinigte Inhalte zurückzugeben.

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

Der verbleibende Code fügt das vertrauenswürdige HTML an der ausgewählten Position relativ zum Element mit der ID `subject` ein.

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
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer): Einen DOM-Baum in einen XML-String serialisieren
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
