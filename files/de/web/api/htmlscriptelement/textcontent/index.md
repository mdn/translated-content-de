---
title: "HTMLScriptElement: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, der abhängig vom Skripttyp ausführbar sein kann.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`textContent`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die [`text`](/de/docs/Web/API/HTMLScriptElement/text)- und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)-Eigenschaften.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die den Text des Skripts enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`textContent`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für ein ausführbares Skript (also ein Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es ein Modul oder klassisches Skript ist), ist dieser Text ausführbarer Code.
Für andere Typen könnte es eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass der Inhalt der `textContent`-Eigenschaft ignoriert wird, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist.

Die `textContent`-Eigenschaft ist auch auf [`Node`](/de/docs/Web/API/Node/textContent) definiert und kann daher mit anderen Knoten (und Elementen) verwendet werden.
Beim Gebrauch mit anderen Elementen wird keine Zuweisung eines [`TrustedScript`](/de/docs/Web/API/TrustedScript) erwartet oder erzwungen.

### Sicherheitsüberlegungen

Die `textContent`-Eigenschaft — und die identischen `text`- und `innerText`-Eigenschaften — sind potenzielle Vektoren für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere, vom Benutzer bereitgestellte Zeichenfolgen ausgeführt werden.
Zum Beispiel geht das folgende Beispiel davon aus, dass `scriptElement` ein ausführbares `<script>`-Element ist und `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // shows the alert
```

Sie können diese Probleme mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geführt wird, die die Möglichkeit hat, den Text zu [sanieren](/de/docs/Web/Security/Attacks/XSS#sanitization) oder abzulehnen, bevor er eingefügt wird.

Das Verhalten der Transformationsfunktion wird vom spezifischen Anwendungsfall abhängen, der ein benutzerbereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, ausgeführt zu werden.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

### Verwendung von TrustedScript

Um das XSS-Risiko zu mindern, sollten wir immer `TrustedScript`-Instanzen der `textContent`-Eigenschaft zuweisen.

Trusted Types werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), das eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen zu transformieren.
Für den Zweck dieses Beispiels erlauben wir genau das Skript, das wir benötigen.

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // Here specify what scripts are safe to allow
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // allow this exact script
    }
    throw new TypeError(`Untrusted script blocked: ${input}`);
  },
});
```

Als nächstes erstellen wir das Skriptelement, dem wir den Wert zuweisen werden, und erhalten eine Referenz auf das Element.

```html
<script id="el" type="text/javascript"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das `policy`-Objekt, um ein `trustedScript`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis dem Element zuzuweisen:

```js
// The potentially malicious string
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Create a TrustedScript instance using the policy
const trustedScript = policy.createScript(untrustedScriptOne);

// Inject the TrustedScript (which contains a trusted string)
el.textContent = trustedScript;
```

### Vergleich von `textContent`, `text` und `innerText`

Dieses Beispiel zeigt, dass die Zuweisung eines Skripts zu jeder der Teksarten-Eigenschaften, wie `textContent`, dazu führt, dass derselbe Wert aus allen Teksarten-Eigenschaften gelesen wird.

Beachten Sie, dass wir in diesem Fall nicht die Policy verwenden, um vertrauenswürdige Skripte zu erstellen (der Kürze halber gehen wir davon aus, dass die bereitgestellten Zeichenfolgen vertrauenswürdig sind).

```js
// Set the textContent property
el.textContent = "console.log(10);";

console.log(`textContent: ${el.textContent}`);
// "textContent: console.log(10);"

console.log(`text: ${el.text}`);
// "text: console.log(10);"

console.log(`innerText: ${el.innerText}`);
// "innerText: console.log(10);"

// Set the text property
el.text = "const num = 10;\nconsole.log(num)";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10; console.log(num)"

console.log(`text: ${el.text}`);
// "text: const num = 10; console.log(num)"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10; console.log(num)"

// Set the innerText property
el.innerText = "const num = 10;alert('Help')";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10;alert('Help')"

console.log(`text: ${el.text}`);
// "text: const num = 10;alert('Help')"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10;alert('Help')"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`text`](/de/docs/Web/API/HTMLScriptElement/text)
- [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
