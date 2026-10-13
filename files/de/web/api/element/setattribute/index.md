---
title: "Element: Methode setAttribute()"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode kann je nach Attribut Attributwerte entgegennehmen, die als HTML, als Skript oder als Skript-URL interpretiert werden.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie für Attribute, die dies erfordern, stets ein passendes Trusted-Type-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle eines Strings übergeben und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`setAttribute()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) setzt den Wert eines Attributs des angegebenen Elements.
Wenn das Attribut bereits vorhanden ist, wird sein Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Wenn Sie vor dem Hinzufügen mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen, etwa um ihn von einem anderen Element zu klonen, können Sie stattdessen die Methode [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode) verwenden.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameter

- `qualifiedName`
  - : Ein String mit dem qualifizierten Namen des Attributs, dessen Wert gesetzt werden soll.
    Wird `setAttribute()` für ein HTML-Element in einem HTML-Dokument aufgerufen, wird der Attributname automatisch vollständig in Kleinbuchstaben umgewandelt.

    Der qualifizierte Name hat das Format `prefix:localName` oder `localName`. Die Bestandteile sind wie folgt definiert:
    - `prefix` {{optional_inline}}
      - : Ein „Kurzal­ias“ für den Namensraum, wie er von der Eigenschaft [`prefix`](/de/docs/Web/API/Attr/prefix) zurückgegeben wird.
    - `localName`
      - : Der lokale Name des Attributs, wie er von der Eigenschaft [`localName`](/de/docs/Web/API/Attr/localName) zurückgegeben wird.

- `value`
  - : Ein Trusted Type oder ein String mit dem Wert, der dem Attribut zugewiesen werden soll.

    Wenn die Verwendung von Trusted Types erzwungen wird, müssen für die folgenden Attribute Trusted-Type-Instanzen übergeben werden:
    - Event-Handler-Content-Attribute wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Für andere Attribute wird die Verwendung von Trusted Types nicht erzwungen. Daher kann ein String oder ein beliebiger Trusted Type übergeben werden.

    Ein angegebener Wert, der kein String ist, wird automatisch in einen String umgewandelt.

    Boolean-Attribute gelten als `true`, sobald sie auf dem Element vorhanden sind.
    Sie sollten `value` auf den leeren String (`""`) oder auf den Namen des Attributs setzen, ohne vorangestellte oder nachfolgende Leerzeichen.
    Eine praktische Veranschaulichung finden Sie im [Beispiel](#beispiele) weiter unten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - `prefix` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` enthalten (U+0000, U+002F bzw. U+003E).
    - `localName` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` enthalten (U+0000, U+002F, U+003D bzw. U+003E).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und verlangten, dass `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn für [`value`](#value) ein String statt eines Trusted-Type-Objekts übergeben wird (bei Attributen, die ein solches Objekt erfordern), während die Verwendung von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen wird](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standard-Policy definiert ist.

## Beschreibung

**`setAttribute()`** setzt den Wert eines Attributs des angegebenen Elements.
Wenn das Attribut bereits vorhanden ist, wird sein Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines Boolean-Attributs wie `disabled` zu setzen, können Sie einen beliebigen Wert angeben.
Welchen Wert Sie verwenden, spielt keine Rolle: Ist das Attribut vorhanden, gilt sein Wert als `true`.
Üblicherweise aktivieren wir Boolean-Attribute, indem wir ihren Wert auf den Namen des Attributs oder auf den leeren String (`""`) setzen.
Fehlt ein Boolean-Attribut, gilt sein Wert als `false`. Um die Aktivierung eines Boolean-Attributs rückgängig zu machen, müssen Sie [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) aufrufen.

Um den aktuellen Wert eines Attributs abzurufen, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute). Um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Sicherheitsaspekte

[Einige Attribute](#value) können als Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) dienen. Dabei werden potenziell unsichere, von einem Benutzer bereitgestellte Strings ohne vorherige Bereinigung in das DOM eingefügt oder Skripte ausgeführt, die schädlichen Code enthalten könnten.

Der folgende Code zeigt beispielsweise, wie ein potenziell nicht vertrauenswürdiger, von einem Benutzer bereitgestellter String beim Klicken auf die Schaltfläche ausgeführt würde.

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

Ebenso könnten Sie nicht vertrauenswürdiges HTML in das DOM einfügen, indem Sie das Attribut [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) setzen, oder eine nicht vertrauenswürdige URL an die Attribute [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) oder [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) übergeben.

Sie können diese Risiken verringern, indem Sie jeder Eigenschaft stets das passende Trusted-Type-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) statt eines Strings zuweisen und die [Verwendung von Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die beispielsweise potenziell gefährliches Markup aus HTML entfernen kann, bevor es eingefügt wird.

## Beispiele

### Sichere Attribute setzen

Dieses Beispiel verwendet `setAttribute()`, um die Attribute `name` und `disabled` auf einem {{HTMLElement("button")}} zu setzen.
Beide Attribute sind im Hinblick auf XSS sicher.
Da ihre Werte weder ausgeführt noch als HTML in das DOM eingelesen werden, müssen wir keine Trusted Types übergeben.

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

Zuerst rufen wir das Schaltflächenelement ab und setzen sein Attribut `name` mit `setAttribute()` auf „helloButton“.
Um zu zeigen, dass sich der Attributname geändert hat, rufen wir anschließend den Attributtext ab und zeigen ihn auf der Schaltfläche an.

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

Als Nächstes zeigen wir, wie Sie ein Boolean-Attribut setzen und zurücksetzen.
Wenn auf die Umschaltschaltfläche geklickt wird, prüfen wir den Wert der Boolean-Eigenschaft `disabled` (diese Eigenschaft spiegelt das Attribut `disabled` wider und ist `true`, wenn die Schaltfläche deaktiviert ist, andernfalls `false`).
Ist die Schaltfläche deaktiviert, rufen wir [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf, um das Attribut zu entfernen und die Schaltfläche dadurch zu aktivieren.
Ist die Schaltfläche aktiviert, deaktivieren wir sie, indem wir das Attribut `disabled` auf `"disabled"` setzen.

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

Das ausführbare Beispiel ist unten zu sehen.
Der Text der unteren Schaltfläche lautet „helloButton“, da wir die Eigenschaft `name` gesetzt und anschließend zum Festlegen des Schaltflächentexts verwendet haben.
Sie können die Schaltfläche „Toggle“ drücken, um „helloButton“ zu deaktivieren und wieder zu aktivieren.

{{ EmbedLiveSample('Setting safe attributes', '300', '150') }}

### Unsichere Attribute setzen

In diesem Beispiel zeigen wir, wie Sie die Risiken verringern können, wenn Sie mit `setAttribute()` das Attribut [`srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) auf einem {{htmlelement("iframe")}} setzen.
Dieses Attribut legt den HTML-Quelltext eines Frames fest und kann daher potenziell nicht vertrauenswürdigen oder unsicheren Code in das DOM einfügen.

Beim Setzen von [`src`](/de/docs/Web/API/HTMLScriptElement/src) auf HTML-Skriptelementen, [`href`](/de/docs/Web/API/SVGScriptElement/href) auf SVG-Skriptelementen und der Event-Handler-Attribute `onXxxx` wäre die Vorgehensweise ähnlich. Der wesentliche Unterschied besteht darin, dass Sie jeweils andere Trusted-Type-Objekte übergeben.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Funktion definiert, um einen Eingabe-String in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Implementierungen von `createHTML()` verwenden üblicherweise eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

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
