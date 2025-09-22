---
title: "HTMLScriptElement: text-Eigenschaft"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 1d2dd9c951674bf559b9b6d5223704ea3d8d8269
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft stellt den Textinhalt eines Skriptelements dar, der, je nach Skripttyp, ausführbar sein kann.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`text`**-Eigenschaft der Schnittstelle [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) repräsentiert den eingebetteten Textinhalt des Skriptelements.
Sie funktioniert auf die gleiche Weise wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaft.

## Wert

Beim Abrufen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die den Text des Elements enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder eine Zeichenfolge akzeptiert.

## Beschreibung

Die **`text`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle repräsentiert den Textinhalt innerhalb des {{HTMLElement("script")}}-Elements.

Für einen ausführbaren Skripttyp [`type`](/de/docs/Web/API/HTMLScriptElement/type), wie ein Modul oder klassisches Script, ist dieser Text eingebetteter ausführbarer Code.
Für andere Typen könnte es sich um eine Importkarte, Spekulationsregeln oder eine andere Art von Datenblock handeln.

Beachten Sie, dass, wenn die [`src`](/de/docs/Web/API/HTMLScriptElement/src)-Eigenschaft gesetzt ist, der Inhalt der `text`-Eigenschaft ignoriert wird.

### `text` vs `textContent` vs `innerText`

Die `text` und [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaften des `HTMLScriptElement` sind gleichwertig: Beide können mit einer Zeichenfolge oder einem `TrustedScript`-Typ gesetzt werden und beide geben eine Zeichenfolge zurück, die den Inhalt des Skriptelements repräsentiert.
Der Hauptunterschied ist, dass [`textContent`](/de/docs/Web/API/Node/textContent) auch auf [`Node`](/de/docs/Web/API/Node) definiert ist und mit anderen Elementen verwendet werden kann, um deren Inhalt mit einer Zeichenfolge zu setzen.

[`innerText`](/de/docs/Web/API/HTMLScriptElement/innerText) wird im Allgemeinen den Text auf die gleiche Weise wie die anderen Methoden setzen und ausführen, kann jedoch einen leicht unterschiedlichen Wert zurückgeben.
Der Grund dafür ist, dass diese Eigenschaft dafür konzipiert ist, den gerenderten Text einer Zeichenkette von HTML-Markup zu erhalten.
Beim Setzen des Wertes wird der Text als Textknoten behandelt, was die Zeichenfolge normalisiert, als ob sie sichtbarer Text wäre (Kollaps von Leerzeichen und Umwandlung von `\n` in Zeilenumbrüche).
Dies ändert nicht die Ausführung des Textes, aber es verändert den Text, der gespeichert und zurückgegeben wird.

### Sicherheitsüberlegungen

Die `text`-Eigenschaft ist ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere von einem Benutzer bereitgestellte Zeichenfolgen ausgeführt werden.
Zum Beispiel geht das folgende Beispiel davon aus, dass `scriptElement` ein ausführbares `<script>`-Element ist und dass `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.text = untrustedCode; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive verwenden.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion geleitet wird, die die Gelegenheit hat, den Text zu [desinfizieren](/de/docs/Web/Security/Attacks/XSS#sanitization) oder abzulehnen, bevor er injiziert wird.

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, dass er ausgeführt wird.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

### Verwendung von TrustedScript

Um das Risiko von XSS zu mindern, sollten Sie immer `TrustedScript`-Instanzen der `text`-Eigenschaft zuweisen.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die JavaScript-API für vertrauenswürdige Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript)-Methode für die Transformation von Eingabezeichenfolgen in [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Instanzen definiert.
Für dieses Beispiel werden wir genau das Skript zulassen, das wir benötigen.

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

Dann erstellen wir das Skriptelement, dem wir den Wert zuweisen und erhalten einen Zugriff auf das Element.

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
el.text = trustedScript;
```

### Vergleich von `text` und `textContent`

In diesem Beispiel setzen wir den Wert eines Skriptelements, indem wir eine Zeichenfolge von Code der `text`-Eigenschaft und den `textContent`-Eigenschaften des Elements zuweisen und das Ergebnis zurücklesen, um zu zeigen, dass die Ergebnisse gleichwertig sind.

Beachten Sie, dass wir in diesem Fall nicht die Policy verwenden, um vertrauenswürdige Skripte zu erstellen (aus Gründen der Kürze nehmen wir an, dass die bereitgestellten Zeichenfolgen vertrauenswürdig sind).

```js
// Set the text property
el.text = "const num = 10;\nconsole.log(num)";
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
