---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet wurden, bevor sie an eine API übergeben werden, die diese Eingaben ausführen könnte. Dies kann helfen, clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verhindern. Am häufigsten sanitisiert die Transformationsfunktion die Eingaben.

## Konzepte und Verwendung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer manipulierte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind als _Injection Sinks_ bekannt.

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es in das HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder als Event-Handler-Attribute.
- **JavaScript Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript URL Sinks**: APIs, die ihre Eingaben als URL eines Scripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass Eingaben sicher gemacht werden, bevor sie an einen Injection Sink übergeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben für einen Injection Sink so transformieren, dass sie sicher sind. Die Policy kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML Sinks sanitisiert die Transformationsfunktion typischerweise die Eingaben, zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript URL Sinks kann die Policy die Sinks vollständig ausschalten oder bestimmte vordefinierte Eingaben (zum Beispiel spezifische URLs) zulassen.

Die Trusted Types API stellt dann sicher, dass Eingaben durch die entsprechende Transformationsfunktion geleitet werden, bevor sie in den Sink übergeben werden.

Das bedeutet, dass die API Ihnen ermöglicht, Ihre Policy an einer Stelle zu definieren und dann sicherzustellen, dass alle Daten, die an einen Injection Sink übergeben werden, die Policy durchlaufen haben.

> [!NOTE]
> Die Trusted Types API liefert _nicht_ selbst eine Policy oder Transformationsfunktionen: Der Entwickler definiert seine eigene Policy, die die gewünschten Transformationen enthält.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu sanitizen, bevor sie an einen Injection Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und steuern die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, verfügbar in beiden Kontexten, [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes), wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted Type-Objekte zu erstellen: Es macht dies, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted Type-Objekte repräsentieren Daten, die durch die Policy gegangen sind, und können daher sicher an einen Injection Sink übergeben werden. Es gibt drei Arten von Trusted Types, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist für die Übergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist für die Übergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist für die Übergabe an einen Sink, der die Daten als URL zu einem Skript parsiert.

Mit dieser API verwenden Sie anstatt einen String an einen Injection Sink wie `innerHTML` zu übergeben, eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen, und übergeben dieses dann an den Sink. So können Sie sicherstellen, dass der String durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erzeugen kann, indem die Eingabestrings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek gesäubert werden:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen und dieses Objekt in den Injection Sink zu übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwenden von CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu sanitizen, aber sie stellt nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink übergibt: Das heißt, es hindert Sie nicht daran, einen String in `innerHTML` zu übergeben.

Um sicherzustellen, dass immer ein Trusted Type übergeben wird, fügen Sie die {{CSP("require-trusted-types-for")}}-Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein. Mit dieser gesetzten Direktive führt das Übergeben von Strings in Injection Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}}-CSP-Direktive verwendet werden, um zu kontrollieren, welche Policies Ihr Code erstellen darf. Wenn Sie eine Policy mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Policy an. Die `trusted-types`-CSP-Direktive listet akzeptable Policienamen auf, sodass `createPolicy()` eine Ausnahme wirft, wenn ein nicht aufgeführter Name in `trusted-types` übergeben wird. Dies verhindert, dass etwas Code in Ihrer Webanwendung eine Policy erstellt, die Sie nicht erwartet haben.

### Die Standard-Policy

In der Trusted Types API können Sie eine _Standard-Policy_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, an denen Sie noch Strings in Injection Sinks übergeben, damit Sie den Code umschreiben können, um explizit Trusted Types zu verwenden.

Wenn Sie eine Policy namens `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jeder String-Parameter, der in Injection Sinks übergeben wird, automatisch an diese Policy übergeben. Angenommen, wir erstellen eine Policy wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Policy, falls Ihr Code einen String an `innerHTML` zuweist, wird der Browser die Methode `createHTML()` der Policy aufrufen und ihr Ergebnis dem Sink zuordnen:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standard-Policy `null` oder `undefined` zurückgibt, wird der Browser beim Zuordnen des Ergebnisses zum Sink eine `TypeError`-Ausnahme werfen:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return null;
  },
});

const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Throws a TypeError
```

> [!NOTE]
> Es wird empfohlen, die Standard-Policy nur zu verwenden, während Sie von altem Code, der Eingaben direkt an Injection Sinks übergibt, zu Code wechseln, der explizit Trusted Types verwendet.

### Browser-Unterstützung für Trusted Types

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, aber sie ist heute dank [Kompatibilitätshilfen, die vom W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), überall nutzbar.

- Das [_volle_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht, die CSP aus dem aktuellen Dokument zu ermitteln, und erzwingt die Verwendung von Trusted Types basierend auf der ermittelten CSP.
- Das [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und beinhaltet nicht die Fähigkeit, die Verwendung von Trusted Types mithilfe einer CSP zu erzwingen.

Neben diesen beiden Polyfills bietet das W3C auch ein _tinyfill_ an, das wir im Folgenden detaillierter erläutern werden.

Beachten Sie, dass Sie, solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Erzwingung getestet haben, das _volle Polyfill_ oben nicht in anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem _nur API Polyfill_ oder dem _tinyfill_ erzielen.

Dies liegt daran, dass die Erzwingung Sie dazu zwingt, Ihren Code zu refaktorisieren, um sicherzustellen, dass alle Daten durch die Trusted Types API (und damit durch eine Sanitisierungsfunktion) geleitet werden, bevor sie an einen Injection Sink übergeben werden.
Wenn Sie dann den refaktorisierten Code in einem anderen Browser ohne Erzwingung ausführen, wird er trotzdem durch dieselben Codepfade gehen und Ihnen denselben Schutz bieten.

#### Trusted Types tinyfill

In diesem Abschnitt betrachten wir, wie das Trusted Types tinyfill eine Website schützen kann, obwohl es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types tinyfill ist einfach dieses:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es bietet eine Implementierung von `trustedTypes.createPolicy()`, die einfach das übergebene [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt. Das `policyOptions`-Objekt definiert Sanitisierungsfunktionen für Daten, und es wird erwartet, dass diese Funktionen Strings zurückgeben.

Mit diesem tinyfill erstellt, nehmen wir an, wir erstellen eine Policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies ein `TrustedTypePolicy` zurückgeben, das ein `TrustedHTML`-Objekt erzeugen wird, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection Sink übergeben werden, und wir können erzwingen, dass der Sink einen Trusted Type und keinen String erhält.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, die ihre Eingaben sanitisiert und als String zurückgibt. Der sanitisierte String kann dann an einen Injection Sink übergeben werden.

```js
const userInput = "I might be XSS";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
// In supporting browsers, trustedHTML is a TrustedHTML object.
// In non-supporting browsers, trustedHTML is a string.

element.innerHTML = trustedHTML;
// In supporting browsers, this will throw if trustedHTML
// is not a TrustedHTML object.
```

In jedem Fall erhält der Injection Sink sanitisierte Daten, und weil wir die Verwendung der Policy im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad auch im nicht unterstützenden Browser durch die Sanitisierungsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als URL einer externen Skriptressource parsiert.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die verwendet werden, um die oben genannten Trusted Type-Objekte zu erstellen.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Policies und überprüft, dass Trusted Type-Objektinstanzen über eine der Policies erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mithilfe von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um eine sanitisierte HTML-Zeichenkette zu erstellen, die in das Dokument eingefügt werden soll.

Der sanitisierte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente injiziert werden können.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) =>
    string
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Sanitization von Eingaben im Artikel [Vermeiden Sie DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden Sie DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
