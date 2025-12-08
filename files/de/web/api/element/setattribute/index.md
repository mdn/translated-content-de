---
title: "Element: setAttribute() Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: c03afc07890f66c6016f4f4f99aa5777fe50e877
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode kann Attributwerte annehmen, die je nach Attribut als HTML, Skript oder Skript-URL geparst werden.
> Solche APIs werden als [Injektionsstellen](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, wenn der Wert ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer das entsprechende Trusted Type Object ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Strings für diese Attribute übergeben, die es erfordern, und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces setzt den Wert eines Attributs am angegebenen Element.
Falls das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (zum Beispiel beim Klonen von einem anderen Element) bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
setAttribute(name, value)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Attributs angibt, dessen Wert gesetzt werden soll.
    Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird.
- `value`
  - : Ein vertrauenswürdiger Typ oder ein String, der den zuzuweisenden Wert für das Attribut enthält.

    Instanzen von vertrauenswürdigen Typen müssen für die folgenden Attribute übergeben werden, wenn Trusted Types erzwungen werden:
    - Inhaltsattribute von Ereignishandlern, wie `onclick` und `onload`, erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Trusted Types werden für andere Attribute nicht erzwungen, sodass ein String oder ein beliebiger Trusted Type übergeben werden kann.

    Ein angegebener Nicht-String-Wert wird automatisch in einen String umgewandelt.

    Boolesche Attribute gelten als `true`, wenn sie überhaupt am Element vorhanden sind.
    Sie sollten `value` auf den leeren String (`""`) oder den Namen des Attributs setzen, ohne führende oder nachfolgende Leerzeichen.
    Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`name`](#name)-Wert kein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.
    Zum Beispiel, wenn er mit einer Zahl, einem Bindestrich oder einem Punkt beginnt oder Zeichen außer alphanumerischen Zeichen, Unterstrichen, Bindestrichen oder Punkten enthält.
- `TypeError`
  - : Wird ausgelöst, wenn [`value`](#value) ein String anstelle eines Trusted Type Object übergeben wird (für jene Attribute, die sie erfordern), wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

**`setAttribute()`** setzt den Wert eines Attributs am angegebenen Element.
Falls das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines booleschen Attributs, wie `disabled`, zu setzen, können Sie jeden beliebigen Wert angeben.
Es spielt keine Rolle, welchen Wert Sie verwenden; wenn das Attribut vorhanden ist, gilt sein Wert als `true`.
Üblicherweise aktivieren wir boolesche Attribute, indem wir ihren Wert entweder auf den Namen des Attributs oder den leeren String (`""`) setzen.
Das Fehlen eines booleschen Attributs bedeutet, dass sein Wert `false` ist; Sie müssen [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) aufrufen, um die Wirkung der Aktivierung eines booleschen Attributs rückgängig zu machen.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Sicherheitsüberlegungen

[Einige Attribute](#value) können als Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe genutzt werden, bei denen potenziell unsichere Strings von einem Benutzer ohne vorherige Reinigung in das DOM injiziert werden oder Skripte ausgeführt werden, die möglicherweise bösartigen Code enthalten.

Zum Beispiel zeigt der folgende Code, wie ein potenziell nicht vertrauenswürdiger String, der von einem Benutzer bereitgestellt wird, ausgeführt wird, wenn der Button gedrückt wird.

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

Sie könnten in ähnlicher Weise unzuverlässiges HTML in das DOM injizieren, indem Sie das Attribut [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) setzen oder eine unzuverlässige URL an die Attribute [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) oder [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) übergeben.

Sie können diese Probleme mindern, indem Sie immer das entsprechende Trusted Type Object ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript), oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) für jede Eigenschaft anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der `require-trusted-types-for` CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die beispielsweise potenziell gefährliches Markup aus HTML entfernt, bevor es injiziert wird.

## Beispiele

### Sichere Attribute setzen

Dieses Beispiel nutzt `setAttribute()`, um die Attribute `name` und `disabled` auf einem {{HTMLElement("button")}} zu setzen.
Diese Attribute sind beide XSS-sicher.
Da ihre Werte weder ausgeführt noch als HTML in das DOM geparst werden, benötigen wir keine Trusted Types zu übergeben.

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

Zuerst holen wir das Button-Element und setzen sein `name`-Attribut mit `setAttribute()` auf "helloButton".
Um zu demonstrieren, dass sich der Attributname geändert hat, holen wir dann den Attributtext und zeigen ihn auf dem Button an.

```js
const helloButton = document.querySelector("#hello_button");
helloButton.setAttribute("name", "helloButton");

// Set button text to name to show the attribute changed
helloButton.innerText = helloButton.getAttribute("name");
```

Dieser Code ist für den Reset-Button.
Er lädt einfach den Frame neu.

```js
const reloadButton = document.querySelector("#reset");
reloadButton.addEventListener("click", () => document.location.reload());
```

Als nächstes zeigen wir, wie man ein boolesches Attribut setzt und zurücksetzt.
Wenn der Toggle-Button geklickt wird, prüfen wir, ob die boolesche `disabled`-Eigenschaft definiert ist (diese Eigenschaft spiegelt das `disabled`-Attribut wider und ist `true`, wenn der Button deaktiviert ist, und `false` sonst).
Wenn der Button deaktiviert ist, rufen wir [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf, um das Attribut zu entfernen, was wiederum den Button aktiviert.
Wenn der Button aktiviert ist, deaktivieren wir den Button, indem wir das `disabled`-Attribut auf `"disabled"` setzen.

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

Das laufende Beispiel ist unten gezeigt.
Sie können sehen, dass der untere Button-Text "helloButton" ist, da wir die Name-Eigenschaft gesetzt und sie dann genutzt haben, um den Button-Text zu setzen.
Sie können den "Toggle"-Button drücken, um den "helloButton" zu deaktivieren und zu aktivieren.

{{ EmbedLiveSample('Sichere Attribute setzen', '300', '150') }}

### Unsichere Attribute setzen

In diesem Beispiel zeigen wir, wie man die Risiken mindern könnte, die auftreten, wenn `setAttributes()` auf das [`srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) Attribut auf einem {{htmlelement("iframe")}} gesetzt wird.
Dieses Attribut setzt das Quell-HTML eines Frames und kann potenziell unzuverlässigen oder unsicheren Code in das DOM injizieren.

Der Ansatz wäre ähnlich, wenn man [`src`](/de/docs/Web/API/HTMLScriptElement/src) auf HTML-Skriptelementen, [`href`](/de/docs/Web/API/SVGScriptElement/href) auf SVG-Skriptelementen und die `onXxxx`-Ereignishandler-Attribute setzt: der Hauptunterschied besteht darin, dass man ihnen unterschiedliche Trusted Type Objects übergibt.

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Üblicherweise nutzen Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und das Ergebnis dem Element zuzuweisen:

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
