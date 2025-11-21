---
title: "HTMLScriptElement: textContent-Eigenschaft"
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert den Textinhalt eines Skriptelements, der je nach Skripttyp ausführbar sein kann.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell einen Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`textContent`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Inline-Textinhalt des {{HTMLElement("script")}}-Elements.
Sie verhält sich genauso wie die [`text`](/de/docs/Web/API/HTMLScriptElement/text)- und [`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)-Eigenschaften.

## Wert

Beim Abrufen der Eigenschaft wird eine Zeichenkette zurückgegeben, die den Text des Skripts enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenkette akzeptiert.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, während [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`textContent`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für ein ausführbares Skript (das heißt, ein Skript, dessen [`type`](/de/docs/Web/API/HTMLScriptElement/type) angibt, dass es sich um ein Modul oder klassisches Skript handelt) ist dieser Text ein Inline-Ausführungscode.
Für andere Typen könnte es eine Importmap, Spekulationsregeln oder eine andere Art von Datenblock darstellen.

Beachten Sie, dass, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist, der Inhalt der `textContent`-Eigenschaft ignoriert wird.

Die `textContent`-Eigenschaft ist auch auf [`Node`](/de/docs/Web/API/Node/textContent) definiert und kann daher mit anderen Knoten (und Elementen) verwendet werden.
Wenn sie mit anderen Elementen verwendet wird, erwartet oder erzwingt sie nicht die Zuweisung eines [`TrustedScript`](/de/docs/Web/API/TrustedScript).

### Sicherheitsüberlegungen

Die `textContent`-Eigenschaft — sowie die identischen `text`- und `innerText`-Eigenschaften — sind ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, ausgeführt werden.
Zum Beispiel nimmt das folgende Beispiel an, dass das `scriptElement` ein ausführbares `<script>`-Element ist und dass `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingaben durch eine Transformationsfunktion geleitet werden, die die Möglichkeit hat, den Text [zu bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) oder abzulehnen, bevor er injiziert wird.

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript benötigt.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, den Sie ausführen möchten.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenkette erlauben oder blockieren.

## Beispiele

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten wir stets `TrustedScript`-Instanzen der `textContent`-Eigenschaft zuweisen.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen zu transformieren.
Für dieses Beispiel lassen wir genau das Skript zu, das wir benötigen.

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

Als nächstes erstellen wir das Skriptelement, dem wir den Wert zuweisen werden, und erhalten einen Zugriff auf das Element.

```html
<script id="el"></script>
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

Dieses Beispiel zeigt, dass das Zuweisen eines Skripts zu jeder der Texteigenschaften, wie `textContent`, dazu führt, dass der gleiche Wert von allen Texe Eigenschaften gelesen wird.

Beachten Sie, dass wir in diesem Fall die Richtlinie nicht verwenden, um vertrauenswürdige Skripte zu erstellen (der Einfachheit halber nehmen wir an, dass die bereitgestellten Zeichenfolgen vertrauenswürdig sind).

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
