---
title: "HTMLScriptElement: Eigenschaft textContent"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines script-Elements, der je nach Skripttyp ausführbar sein kann.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Eigenschaft **`textContent`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die Eigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text) und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText).

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die den Text des Skripts enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge akzeptiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft eine Zeichenfolge zugewiesen wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Eigenschaft **`textContent`** der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Bei einem ausführbaren Skript (also einem Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul oder ein klassisches Skript handelt) ist dieser Text ausführbarer Inline-Code.
Bei anderen Typen kann er eine Import Map, Speculation Rules oder einen anderen Datenblock repräsentieren.

Beachten Sie, dass der Inhalt der Eigenschaft `textContent` ignoriert wird, wenn die Eigenschaft [`src`](/de/docs/Web/API/HTMLScriptElement/src) gesetzt ist.

Die Eigenschaft `textContent` ist auch für [`Node`](/de/docs/Web/API/Node/textContent) definiert und kann daher mit anderen Knoten (und Elementen) verwendet werden.
Bei anderen Elementen wird für die Zuweisung kein [`TrustedScript`](/de/docs/Web/API/TrustedScript) erwartet oder erzwungen.

### Sicherheitsaspekte

Die Eigenschaft `textContent` – ebenso wie die gleichwertigen Eigenschaften `text` und `innerText` – kann einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, bei denen potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ausgeführt werden.
Das folgende Beispiel setzt etwa voraus, dass `scriptElement` ein ausführbares `<script>`-Element ist und `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // shows the alert
```

Sie können diese Risiken verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types mithilfe der CSP-Direktive](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die den Text [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) oder zurückweisen kann, bevor er eingefügt wird.

Das Verhalten der Transformationsfunktion hängt vom konkreten Anwendungsfall ab, für den ein vom Benutzer bereitgestelltes Skript erforderlich ist.
Wenn möglich, sollten Sie die zulässigen Skripte auf genau den Code beschränken, dessen Ausführung Sie vertrauen.
Falls das nicht möglich ist, können Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

### TrustedScript verwenden

Um das XSS-Risiko zu verringern, sollten wir der Eigenschaft `textContent` stets `TrustedScript`-Instanzen zuweisen.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) definiert, um eingegebene Zeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen umzuwandeln.
Für dieses Beispiel lassen wir ausschließlich genau das Skript zu, das wir benötigen.

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

Als Nächstes erstellen wir das script-Element, dem wir den Wert zuweisen werden, und speichern eine Referenz auf das Element.

```html
<script id="el"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das Objekt `policy`, um aus der potenziell unsicheren Eingabezeichenfolge ein `trustedScript`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// Create a TrustedScript instance using the policy
const trustedScript = policy.createScript(untrustedScriptOne);

// Inject the TrustedScript (which contains a trusted string)
el.textContent = trustedScript;
```

### `textContent`, `text` und `innerText` vergleichen

Dieses Beispiel zeigt, dass nach der Zuweisung eines Skripts an eine der Texteigenschaften, etwa `textContent`, aus allen Texteigenschaften derselbe Wert gelesen wird.

Beachten Sie, dass wir in diesem Fall keine Richtlinie zum Erstellen vertrauenswürdiger Skripte verwenden (der Kürze halber gehen wir davon aus, dass die bereitgestellten Zeichenfolgen vertrauenswürdig sind).

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
