---
title: "Element: insertAdjacentHTML() Methode"
short-title: insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in das DOM.
> APIs wie diese sind als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko reduzieren, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute zu entfernen.

Die **`insertAdjacentHTML()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle analysiert die angegebene Eingabe als HTML oder XML und fügt die resultierenden Knoten an einer bestimmten Position in den DOM-Baum ein.

## Syntax

```js-nolint
insertAdjacentHTML(position, input)
```

### Parameter

- `position`
  - : Ein String, der die Position relativ zu dem Element darstellt. Muss einer der folgenden Strings sein:
    - `"beforebegin"`
      - : Vor dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.
    - `"afterbegin"`
      - : Direkt innerhalb des Elements, vor seinem ersten Kind.
    - `"beforeend"`
      - : Direkt innerhalb des Elements, nach seinem letzten Kind.
    - `"afterend"`
      - : Nach dem Element. Nur gültig, wenn das Element im DOM-Baum ist und ein übergeordnetes Element hat.
- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder Zeichenkette, die das zu analysierende HTML oder XML definiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `position` `"beforebegin"` oder `"afterend"` ist und das Element entweder kein übergeordnetes Element hat oder dessen übergeordnetes Element das `Document`-Objekt ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `position` nicht einer der vier aufgelisteten Werte ist.
    - Die Eingabe XML ist, das nicht wohlgeformt ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode `insertAdjacentHTML()` analysiert nicht erneut das Element, auf dem sie verwendet wird, und beschädigt daher nicht die bereits vorhandenen Elemente innerhalb dieses Elements. Dies vermeidet den zusätzlichen Schritt der Serialisierung und macht sie viel schneller als die direkte Manipulation von [`innerHTML`](/de/docs/Web/API/Element/innerHTML).

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

Die Methode enthält keine spezielle Behandlung für {{htmlelement("template")}}-Elemente.
In den meisten Fällen sollten Entwickler `insertAdjacentHTML()` auf der [`content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft der Vorlage verwenden, anstatt die Kindknoten eines Vorlagenelements direkt zu manipulieren.

### Sicherheitserwägungen

Die Methode führt keine Sanitierung durch, um XSS-unsichere Elemente wie {{htmlelement("script")}} oder Event-Handler-Attributinhalte zu entfernen.

Wenn Sie HTML auf eine Seite einfügen, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

Die Methode [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText) oder [`Node.textContent`](/de/docs/Web/API/Node/textContent) sollte verwendet werden, wenn Sie wissen, dass der vom Benutzer bereitgestellte Inhalt reiner Text sein sollte.
Dies fügt die Eingabe als Rohtext ein, anstatt sie als HTML zu analysieren.

## Beispiele

### HTML einfügen

Dieses Beispiel demonstriert die vier Einfügepositionen.
Alle eingefügten Texte sind fett, während Texte, die innerhalb des Elements eingefügt werden, zusätzlich als roter Monotyp (Code) formatiert sind.

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

Vertrauenswürdige Typen werden nicht auf allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Richtlinie namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte aus der Eingabe zu erstellen (wir sollten die `some-content-policy` auch mit CSP erzwingen).
Der Code implementiert eine No-Op-Richtlinie, um es diesem Beispiel zu ermöglichen, ohne eine Drittanbieter-Abhängigkeit zu funktionieren.
Ihr eigener Anwendungscode sollte eine Drittanbieter-Bibliothek wie die "DOMPurify"-Bibliothek verwenden, um bereinigte Inhalte aus der nicht vertrauenswürdigen Eingabe zurückzugeben.

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
