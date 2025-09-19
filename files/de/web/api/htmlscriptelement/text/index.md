---
title: "HTMLScriptElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: b4a6569c6e539edcf44d485547e877bff8e0c97f
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, der je nach Skripttyp ausführbar sein kann.
> Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Inline-Textinhalt des Skriptelements.
Sie verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaft.

Sie reflektiert das `text`-Attribut des {{HTMLElement("script")}}-Elements.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die den Text des Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge.

## Beschreibung

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für einen ausführbaren Skripttyp [`type`](/de/docs/Web/API/HTMLScriptElement/type), wie ein Modul oder ein klassisches Skript, ist dieser Text ein Inline-ausführbarer Code.
Für andere Typen könnte es eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt wird, der Inhalt der `text`-Eigenschaft ignoriert wird.

### `text` vs `textContent` vs `innerText`

Die `text`- und [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaften von `HTMLScriptElement` sind äquivalent: Beide können mit einer Zeichenfolge oder einem `TrustedScript`-Typ gesetzt werden und beide geben eine Zeichenfolge zurück, die den Inhalt des Skriptelements darstellt.
Der Hauptunterschied besteht darin, dass [`textContent`](/de/docs/Web/API/Node/textContent) auch auf [`Node`](/de/docs/Web/API/Node) definiert ist und zur Verwendung mit anderen Elementen geeignet ist, um deren Inhalt mit einer Zeichenfolge zu setzen.

[`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText) wird im Allgemeinen den Text ähnlich wie die anderen Methoden setzen und ausführen, kann jedoch einen leicht unterschiedlichen Wert zurückgeben.
Der Grund dafür ist, dass diese Eigenschaft zum Abrufen des gerenderten Textes aus einer HTML-Markup-Zeichenfolge konzipiert ist.
Beim Setzen wird der Text als Textknoten behandelt, wodurch die Zeichenfolge wie sichtbarer Text normalisiert wird (Leerzeichen werden zusammengefasst und `\n` in Zeilenumbrüche umgewandelt).
Dies ändert nicht die Ausführung des Textes, ändert jedoch den Text, der gespeichert und zurückgegeben wird.

### Sicherheitsüberlegungen

Die `text`-Eigenschaft ist ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere, von einem Benutzer bereitgestellte Zeichenfolgen ausgeführt werden.
Zum Beispiel geht das folgende Beispiel davon aus, dass das `scriptElement` ein ausführbares `<script>`-Element ist und dass `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.text = untrustedCode; // shows the alert
```

Sie können diese Probleme mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mittels der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, den Text zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization) oder abzulehnen, bevor er injiziert wird.

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein benutzerbereitgestelltes Skript erfordert. Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, dem Sie vertrauen, dass er ausgeführt wird. Wenn dies nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten wir stets `TrustedScript`-Instanzen der `text`-Eigenschaft zuweisen.

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, daher definieren wir zunächst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies funktioniert als transparenter Ersatz für die JavaScript-API für vertrauenswürdige Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen zu transformieren.
Für dieses Beispiel erlauben wir genau das Skript, das wir benötigen.

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript: (input) => {
    // Here specify what scripts are safe to allow
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // allow this exact script
    }
    throw new TypeError("Untrusted script blocked: " + input);
  },
});
```

Nun erstellen wir das Skriptelement, dem wir den Wert zuweisen, und erhalten einen Verweis auf das Element.

```html
<script id="el" type="text/javascript"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das `policy`-Objekt, um ein `trustedScript`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Create a TrustedScript instance using the policy
const trustedScript = policy.createScript(untrustedScriptOne);

// Inject the TrustedScript (which contains a trusted string)
el.text = trustedScript;
```

### Vergleich von `text` und `textContent`

In diesem Beispiel setzen wir den Wert eines Skriptelements, indem wir eine Codezeichenfolge den `text`- und `textContent`-Eigenschaften des Elements zuweisen, und lesen das Ergebnis zurück, um zu zeigen, dass die Ergebnisse äquivalent sind.

Beachten Sie, dass wir in diesem Fall nicht die Policy verwenden, um vertrauenswürdige Skripte zu erstellen (der Einfachheit halber nehmen wir an, dass die bereitgestellten Zeichenfolgen vertrauenswürdig sind).

```js
// Set the text property
let el.text = "const num = 10;\nconsole.log(num)";
console.log(el.text); // Output: "const num = 10;\nconsole.log(num);"
console.log(el.textContent); // Output: "const num = 10;\nconsole.log(num);"

// Set the textContent property
el.textContent = "console.log(10);";
console.log(el.text); // Output: "console.log(10);"
console.log(el.textContent); // Output: "console.log(10);"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
