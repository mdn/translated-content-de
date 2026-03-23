---
title: "Element: setAttribute()-Methode"
short-title: setAttribute()
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode kann Attributwerte akzeptieren, die je nach Attribut als HTML, Skript oder Skript-URL interpretiert werden.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn der Wert ursprünglich von einem Angreifer kommt.
>
> Sie können dieses Risiko mindern, indem Sie stets das entsprechende Trusted Type-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) anstelle von Zeichenketten für die Attribute verwenden, die sie erfordern, und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setAttribute()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces setzt den Wert eines Attributs auf dem angegebenen Element.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Wenn Sie mit dem [`Attr`](/de/docs/Web/API/Attr)-Knoten arbeiten müssen (z. B. beim Klonen von einem anderen Element), bevor Sie ihn hinzufügen, können Sie stattdessen die [`setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)-Methode verwenden.

## Syntax

```js-nolint
setAttribute(qualifiedName, value)
```

### Parameter

- `qualifiedName`
  - : Eine Zeichenkette, die den qualifizierten Namen des Attributs enthält, dessen Wert gesetzt werden soll.
    Der Attributname wird automatisch in Kleinbuchstaben umgewandelt, wenn `setAttribute()` auf ein HTML-Element in einem HTML-Dokument aufgerufen wird.

    Das Format des qualifizierten Namens ist `prefix:localName` oder `localName`, wobei die Teile wie folgt definiert sind:
    - `prefix` {{optional_inline}}
      - : Ein "kurzes Alias" für den Namespace, wie von der [`prefix`](/de/docs/Web/API/Attr/prefix)-Eigenschaft zurückgegeben.
    - `localName`
      - : Der lokale Name des Attributs, wie von der [`localName`](/de/docs/Web/API/Attr/localName)-Eigenschaft zurückgegeben.

- `value`
  - : Ein Trusted Type oder eine Zeichenkette, die den zuzuweisenden Wert für das Attribut enthält.

    Trusted Type-Instanzen müssen für die folgenden Attribute übergeben werden, wenn Trusted Types durchgesetzt werden:
    - Event-Handler-Inhaltsattribute wie `onclick` und `onload` erfordern ein [`TrustedScript`](/de/docs/Web/API/TrustedScript).
    - [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc) erfordert eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz.
    - [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.
    - [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) erfordert eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz.

    Trusted Types werden für andere Attribute nicht durchgesetzt, daher können eine Zeichenkette oder ein beliebiger Trusted Type übergeben werden.

    Ein angegebener Wert, der keine Zeichenkette ist, wird automatisch in eine Zeichenkette umgewandelt.

    Boolesche Attribute werden als `true` betrachtet, wenn sie überhaupt auf dem Element vorhanden sind.
    Sie sollten `value` auf die leere Zeichenkette (`""`) oder den Namen des Attributs ohne führende oder nachgestellte Leerzeichen setzen.
    Siehe das [Beispiel](#beispiele) unten für eine praktische Demonstration.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidCharacterError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder das [`prefix`](#prefix) oder [`localName`](#localname) ungültig ist:
    - Das `prefix` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/` oder `>` enthalten (U+0000, U+002F oder U+003E, jeweils).
    - Das `localName` muss mindestens ein Zeichen enthalten und darf keine ASCII-Leerzeichen, `NULL`, `/`, `=` oder `>` enthalten (U+0000, U+002F, U+003D oder U+003E, jeweils).

    > [!NOTE]
    > Frühere Versionen der Spezifikation waren restriktiver und erforderten, dass das `qualifiedName` ein gültiger [XML-Name](https://www.w3.org/TR/xml/#dt-name) ist.

- `TypeError`
  - : Wird ausgelöst, wenn [`value`](#value) eine Zeichenkette anstelle eines Trusted Type-Objekts (für die Attribute, die sie erfordern) zugewiesen und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

**`setAttribute()`** setzt den Wert eines Attributs auf dem angegebenen Element.
Wenn das Attribut bereits existiert, wird der Wert aktualisiert; andernfalls wird ein neues Attribut mit dem angegebenen Namen und Wert hinzugefügt.

Um den Wert eines Booleschen Attributs, wie `disabled`, zu setzen, können Sie jeden beliebigen Wert angeben.
Es ist egal, welchen Wert Sie verwenden; wenn das Attribut vorhanden ist, wird sein Wert als `true` betrachtet.
Nach Konvention aktivieren wir Boolesche Attribute, indem wir ihren Wert entweder auf den Namen des Attributs oder die leere Zeichenkette (`""`) setzen.
Die Abwesenheit eines Booleschen Attributs bedeutet, dass sein Wert `false` ist; Sie müssen [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) aufrufen, um die Wirkung der Aktivierung eines Booleschen Attributs "rückgängig" zu machen.

Um den aktuellen Wert eines Attributs zu erhalten, verwenden Sie [`getAttribute()`](/de/docs/Web/API/Element/getAttribute); um ein Attribut zu entfernen, rufen Sie [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf.

### Sicherheitsüberlegungen

[Einige Attribute](#value) können als Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe verwendet werden, bei denen potenziell unsichere Zeichenketten von einem Benutzer bereitgestellt und in das DOM eingefügt werden, ohne vorher desinfiziert zu werden, oder Skripte ausgeführt werden, die möglicherweise schädlichen Code enthalten.

Zum Beispiel zeigt der folgende Code, wie eine potenziell nicht vertrauenswürdige Zeichenkette, die von einem Benutzer bereitgestellt wurde, ausgeführt würde, wenn die Schaltfläche gedrückt wird.

```js
const button = document.querySelector("button");
const potentiallyUnsafeString = "alert(1)";
button.setAttribute("onclick", potentiallyUnsafeString);
```

Sie könnten auf ähnliche Weise nicht vertrauenswürdiges HTML in das DOM einfügen, indem Sie das [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)-Attribut setzen oder eine nicht vertrauenswürdige URL an die Attribute [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src) oder [`SVGScriptElement.href`](/de/docs/Web/API/SVGScriptElement/href) übergeben.

Sie können diese Probleme mindern, indem Sie stets das entsprechende Trusted Type-Objekt ([`TrustedHTML`](/de/docs/Web/API/TrustedHTML), [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)) für jede Eigenschaft anstelle von Zeichenketten zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die beispielsweise potenziell gefährliche Markup aus HTML entfernt, bevor es eingefügt wird.

## Beispiele

### Sichere Attribute setzen

Dieses Beispiel verwendet `setAttribute()`, um die `name`- und `disabled`-Attribute auf einem {{HTMLElement("button")}} zu setzen.
Diese Attribute sind beide XSS-sicher.
Da ihre Werte nicht ausgeführt oder als HTML ins DOM geparst werden, müssen wir keine Trusted Types verwenden.

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

Zuerst erhalten wir das Button-Element und setzen sein `name`-Attribut auf "helloButton" mit `setAttribute()`.
Um zu demonstrieren, dass sich der Attributname geändert hat, holen wir dann den Attributtext und zeigen ihn auf dem Button an.

```js
const helloButton = document.querySelector("#hello_button");
helloButton.setAttribute("name", "helloButton");

// Set button text to name to show the attribute changed
helloButton.innerText = helloButton.getAttribute("name");
```

Dieser Code ist für den Zurücksetzen-Button.
Er lädt einfach das Frame neu.

```js
const reloadButton = document.querySelector("#reset");
reloadButton.addEventListener("click", () => document.location.reload());
```

Nun zeigen wir, wie ein Boolesches Attribut gesetzt und zurückgesetzt wird.
Wenn der Umschaltknopf geklickt wird, prüfen wir, ob die boolesche `disabled`-Eigenschaft definiert ist (diese Eigenschaft spiegelt das `disabled`-Attribut wider und ist `true`, wenn die Schaltfläche deaktiviert ist, und `false` ansonsten).
Wenn die Schaltfläche deaktiviert ist, rufen wir [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) auf, um das Attribut zu entfernen, was wiederum die Schaltfläche aktiviert.
Wenn die Schaltfläche aktiviert ist, deaktivieren wir die Schaltfläche, indem wir das `disabled`-Attribut auf `"disabled"` setzen.

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

Das laufende Beispiel wird unten gezeigt.
Sie können sehen, dass der untere Schaltflächentext "helloButton" ist, da wir die Name-Eigenschaft gesetzt und sie dann verwendet haben, um den Schaltflächentext zu setzen.
Sie können die "Toggle"-Schaltfläche drücken, um die "helloButton"-Taste zu deaktivieren und zu aktivieren.

{{ EmbedLiveSample('Setting safe attributes', '300', '150') }}

### Unsichere Attribute setzen

In diesem Beispiel zeigen wir, wie Sie die Risiken bei der Verwendung von `setAttributes()` zum Setzen des [`srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)-Attributs auf einem {{htmlelement("iframe")}} mindern könnten.
Dieses Attribut setzt den Quellcode für ein Frame und kann daher potenziell nicht vertrauenswürdigen oder unsicheren Code in das DOM einfügen.

Der Ansatz wäre ähnlich für das Setzen von [`src`](/de/docs/Web/API/HTMLScriptElement/src) auf HTML-Skriptelementen, [`href`](/de/docs/Web/API/SVGScriptElement/href) auf SVG-Skriptelementen und den `onXxxx`-Event-Handler-Attributen: der Hauptunterschied besteht darin, dass Sie ihnen verschiedene Trusted Type-Objekte übergeben.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser funktioniert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie hier gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenkette zu erstellen und das Ergebnis dem Element zuzuweisen:

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
