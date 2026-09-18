---
title: "Element: Methode setAttribute()"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 5a81c288fb7213b2ca2180cda687500981ecf9e1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode kann Attributwerte annehmen, die je nach Attribut als HTML, als Skript oder als Skript-URL geparst werden.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und stellen potenziell einen Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) dar, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie für die Attribute, die sie erfordern, immer das passende vertrauenswürdige Typobjekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) statt Zeichenketten übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`setAttribute()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) legt den Wert eines Attributs für das angegebene Element fest.
Wenn das Attribut bereits vorhanden ist, wird sein Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Wenn Sie vor dem Hinzufügen mit dem Knoten [`Attr`](/de/docs/Web/API/Attr) arbeiten müssen, beispielsweise um ihn von einem anderen Element zu klonen, können Sie stattdessen die Methode [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode) verwenden.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameter

- `qualifiedName`
  - : Eine Zeichenkette, die den qualifizierten Namen des Attributs enthält, dessen Wert festgelegt werden soll.
    Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` für ein HTML-Element in einem HTML-Dokument aufgerufen wird.

    Das Format des qualifizierten Namens lautet `prefix:localName` oder `localName`, wobei die Bestandteile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein „kurzer Alias“ für den Namespace, wie er von der Eigenschaft [`prefix`](/de/docs/Web/API/Attr/prefix) zurückgegeben wird.
    - `localName`
      - : Der lokale Name des Attributs, wie er von der Eigenschaft [`localName`](/de/docs/Web/API/Attr/localName) zurückgegeben wird.

- `value`
  - : Ein vertrauenswürdiger Typ oder eine Zeichenkette, die den dem Attribut zuzuweisenden Wert enthält.

    Bei erzwungenen Trusted Types müssen für die folgenden Attribute Instanzen vertrauenswürdiger Typen übergeben werden:
    - Inhaltsattribute für Ereignishandler wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Trusted Types werden für andere Attribute nicht erzwungen, daher kann eine Zeichenkette oder ein beliebiger vertrauenswürdiger Typ übergeben werden.

    Ein angegebener Wert, der keine Zeichenkette ist, wird automatisch in eine Zeichenkette umgewandelt.

    Boolesche Attribute werden als `true` betrachtet, wenn sie überhaupt am Element vorhanden sind.
    Sie sollten `value` auf die leere Zeichenkette (`""`) oder den Namen des Attributs setzen, ohne voran- oder nachgestellte Leerzeichen.
    Eine praktische Demonstration finden Sie im folgenden [Beispiel](#beispiele).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - `prefix` muss mindestens ein Zeichen enthalten und darf weder ASCII-Leerraum, `NULL`, `/` noch `>` enthalten (jeweils U+0000, U+002F oder U+003E).
    - `localName` muss mindestens ein Zeichen enthalten und darf weder ASCII-Leerraum, `NULL`, `/`, `=` noch `>` enthalten (jeweils U+0000, U+002F, U+003D oder U+003E).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- `TypeError`
  - : Wird ausgelöst, wenn für [`value`](#value) eine Zeichenkette anstelle eines vertrauenswürdigen Typobjekts übergeben wird (bei den Attributen, die dies erfordern), während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

**`setAttribute()`** legt den Wert eines Attributs für das angegebene Element fest.
Wenn das Attribut bereits vorhanden ist, wird sein Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines booleschen Attributs wie `disabled` festzulegen, können Sie einen beliebigen Wert angeben.
Welchen Wert Sie verwenden, spielt keine Rolle; wenn das Attribut vorhanden ist, wird sein Wert als `true` betrachtet.
Üblicherweise aktivieren wir boolesche Attribute, indem wir ihren Wert entweder auf den Namen des Attributs oder auf die leere Zeichenkette (`""`) setzen.
Das Fehlen eines booleschen Attributs bedeutet, dass sein Wert `false` ist; Sie müssen [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) aufrufen, um die Auswirkung des Aktivierens eines booleschen Attributs „rückgängig zu machen“.

Um den aktuellen Wert eines Attributs abzurufen, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Sicherheitsaspekte

[Einige Attribute](#value) können als Vektor für Angriffe durch [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) verwendet werden, bei denen potenziell unsichere, von einem Benutzer bereitgestellte Zeichenketten ohne vorherige Bereinigung in das DOM eingefügt werden oder Skripte ausgeführt werden, die möglicherweise bösartigen Code enthalten.

Das folgende Beispiel zeigt beispielsweise, wie eine potenziell nicht vertrauenswürdige, von einem Benutzer bereitgestellte Zeichenkette ausgeführt würde, wenn die Schaltfläche gedrückt wird.

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

Ebenso könnten Sie nicht vertrauenswürdiges HTML in das DOM einfügen, indem Sie das Attribut [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) setzen oder eine nicht vertrauenswürdige URL für die Attribute [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) oder [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) bereitstellen.

Sie können diese Probleme mindern, indem Sie für jede Eigenschaft immer das passende vertrauenswürdige Typobjekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Zeichenketten zuweisen und Trusted Types mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die beispielsweise potenziell gefährliches Markup aus HTML entfernen kann, bevor es eingefügt wird.

## Beispiele

### Sichere Attribute setzen

Dieses Beispiel verwendet `setAttribute()`, um die Attribute `name` und `disabled` für ein {{HTMLElement("button")}} festzulegen.
Diese Attribute sind beide XSS-sicher.
Da ihre Werte weder ausgeführt noch als HTML in das DOM geparst werden, müssen wir keine Trusted Types übergeben.

#### HTML

```html
<div>
  <button id="reset" type="button">Reset</button>
  <button id="toggle_disabled">Toggle</button>
</div>
<button id="hello_button">Some Text</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

#### JavaScript

Zuerst rufen wir das Schaltflächenelement ab und setzen sein Attribut `name` mithilfe von `setAttribute()` auf „helloButton“.
Um zu demonstrieren, dass sich der Attributname geändert hat, rufen wir anschließend den Attributtext ab und zeigen ihn auf der Schaltfläche an.

```js
const helloButton = document.querySelector("#hello_button");
helloButton.setAttribute("name", "helloButton");

// Set button text to name to show the attribute changed
helloButton.innerText = helloButton.getAttribute("name");
```

Dieser Code ist für die Schaltfläche zum Zurücksetzen.
Er lädt lediglich den Frame neu.

```js
const reloadButton = document.querySelector("#reset");
reloadButton.addEventListener("click", () => document.location.reload());
```

Als Nächstes zeigen wir, wie ein boolesches Attribut gesetzt und zurückgesetzt wird.
Wenn die Umschalt-Schaltfläche angeklickt wird, prüfen wir, ob die boolesche Eigenschaft `disabled` definiert ist. Diese Eigenschaft spiegelt das Attribut `disabled` wider und ist `true`, wenn die Schaltfläche deaktiviert ist, andernfalls `false`.
Wenn die Schaltfläche deaktiviert ist, rufen wir [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf, um das Attribut zu entfernen, wodurch die Schaltfläche wieder aktiviert wird.
Wenn die Schaltfläche aktiviert ist, deaktivieren wir sie, indem wir das Attribut `disabled` auf `"disabled"` setzen.

```js
const toggleDisabledButton = document.querySelector("#toggle_disabled");

toggleDisabledButton.addEventListener("click", () => {
  if (helloButton.disabled) {
    // Button is disabled. Enable by removing attribute
    helloButton.removeAttribute("disabled");
  } else {
    // Button enabled. Disable by setting value to anything
    // (normally "" or "disabled")
    helloButton.setAttribute("disabled", "disabled");
  }
});
```

#### Ergebnisse

Das laufende Beispiel wird unten angezeigt.
Sie sehen, dass der Text der unteren Schaltfläche „helloButton“ lautet, da wir die Eigenschaft `name` gesetzt und sie anschließend zum Setzen des Schaltflächentextes verwendet haben.
Sie können die Schaltfläche „Toggle“ drücken, um „helloButton“ zu deaktivieren und wieder zu aktivieren.

{{ EmbedLiveSample('Setting safe attributes', '300', '150') }}

### Unsichere Attribute setzen

In diesem Beispiel zeigen wir, wie Sie die Risiken beim Aufruf von `setAttribute()` zum Setzen des Attributs [`srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) für ein {{htmlelement("iframe")}} mindern können.
Dieses Attribut legt das Quell-HTML eines Frames fest und kann daher potenziell nicht vertrauenswürdigen oder unsicheren Code in das DOM einfügen.

Das Vorgehen wäre beim Setzen von [`src`](/de/docs/Web/API/HTMLScriptElement/src) für HTML-Skript-Elemente, [`href`](/de/docs/Web/API/SVGScriptElement/href) für SVG-Skript-Elemente und der Ereignishandlerattribute `onXxxx` ähnlich: Der Hauptunterschied besteht darin, dass Sie unterschiedliche vertrauenswürdige Typobjekte übergeben.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst das [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieses fungiert als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenkette in Instanzen von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) umzuwandeln.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses Objekt `policy`, um aus der potenziell unsicheren Eingabezeichenkette ein Objekt `TrustedHTML` zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const iframeElement = document.querySelector("#an_iframe");
iframeElement.setAttribute("srcdoc", trustedHTML);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
