---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine vom Benutzer spezifizierte Transformationsfunktion geleitet wurden, bevor sie an eine API übergeben werden, die diese Eingabe möglicherweise ausführt. Dies kann helfen, Client-seitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe zu verhindern. Meistens bereinigt die Transformationsfunktion die Eingabe.

## Konzepte und Verwendung

Client-seitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer entworfene Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs werden als [_Injection Sinks_](#injection_sink-schnittstellen) bezeichnet.

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML-Sinks**: APIs, die ihre Eingabe als HTML interpretieren, wie zum Beispiel [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es im HTML eingebettet ist, beispielsweise in {{htmlelement("script")}}-Tags oder Ereignis-Handler-Attributen.
- **JavaScript-Sinks**: APIs, die ihre Eingabe als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingabe als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass Eingaben sicher gemacht werden, bevor sie an ein Injection Sink übergeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben für ein Injection Sink so transformieren, dass sie sicher werden. Die Policy kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML-Sinks bereinigt die Transformationsfunktion typischerweise die Eingabe, zum Beispiel durch den Einsatz einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Policy die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben (zum Beispiel spezifische URLs) zulassen.

Die Trusted Types API stellt dann sicher, dass Eingaben vor ihrer Übergabe an das Sink durch die entsprechende Transformationsfunktion geleitet werden.

Das bedeutet, die API ermöglicht es Ihnen, Ihre Policy an einem Ort zu definieren und dann sicherzustellen, dass alle Daten, die an ein Injection Sink übergeben werden, durch die Policy geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _keine_ eigene Policy oder Transformationsfunktionen: Der Entwickler definiert seine eigene Policy, die die Transformationen enthält, die er anwenden möchte.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an ein Injection Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Directive erzwingen und kontrollieren die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript-API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, verfügbar sowohl im [`Window`](/de/docs/Web/API/Window/trustedTypes)- als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes)-Kontext, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted Type-Objekte zu erstellen: Dies geschieht, indem die Daten durch eine Transformationsfunktion geleitet werden.
- Trusted Type-Objekte repräsentieren Daten, die durch die Policy geführt wurden und daher sicher an ein Injection Sink übergeben werden können. Es gibt drei Arten von Trusted Types, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) dient zur Übergabe an ein Sink, das die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) dient zur Übergabe an ein Sink, das die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) dient zur Übergabe an ein Sink, das die Daten als URL eines Skripts analysiert.

Mit dieser API verwenden Sie anstelle eines Strings für ein Injection Sink wie `innerHTML` eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen, dann dieses in das Sink zu übergeben, und können sicher sein, dass der String durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erzeugen kann, indem sie die Eingabestrings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek bereinigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen und dieses Objekt in das Injection Sink zu übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, gewährleistet jedoch nicht, dass Ihr Code niemals Eingaben direkt an ein Injection Sink übergibt: Das heißt, es verhindert nicht, dass Sie einen String in `innerHTML` übergeben.

Um sicherzustellen, dass immer ein Trusted Type übergeben wird, fügen Sie die {{CSP("require-trusted-types-for")}}-Directive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser Directive führt das Übergeben von Strings in Injection Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}}-CSP-Directive verwendet werden, um zu kontrollieren, welche Policies Ihr Code erstellen darf. Wenn Sie eine Policy mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, übergeben Sie einen Namen für die Policy. Die `trusted-types`-CSP-Directive listet akzeptable Policy-Namen auf, sodass `createPolicy()` eine Ausnahme wirft, wenn ihm ein Name übergeben wird, der nicht in `trusted-types` aufgelistet war. Dies verhindert, dass ein Code in Ihrer Webanwendung eine Policy erstellt, die Sie nicht erwartet haben.

### Die Standardpolicy

In der Trusted Types API können Sie eine _Standardpolicy_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, in denen Sie noch Strings in Injection Sinks übergeben, damit Sie den Code umschreiben können, um explizit Trusted Types zu verwenden.

Wenn Sie eine Policy mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jeder String, der an Injection Sinks übergeben wird, automatisch an diese Policy weitergeleitet. Nehmen wir zum Beispiel an, wir erstellen eine Policy wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Policy, wenn Ihr Code einen String an `innerHTML` zuweist, ruft der Browser die `createHTML()`-Methode der Policy auf und weist deren Ergebnis dem Sink zu:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardpolicy `null` oder `undefined` zurückgibt, dann wird der Browser einen `TypeError` werfen, wenn er das Ergebnis dem Sink zuweist:

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
> Es wird empfohlen, die Standardpolicy nur zu verwenden, während Sie von Legacy-Code, der Eingaben direkt an Injection Sinks übergibt, zu Code übergehen, der Trusted Types explizit verwendet.

### Injection Sink-Schnittstellen

Dieser Abschnitt stellt eine Liste von "direkten" Injection Sink-Schnittstellen bereit.

Beachten Sie, dass es Fälle gibt, in denen unzuverlässige Strings "indirekt injiziert" werden können, wie zum Beispiel, wenn ein unzuverlässiger String als Kindknoten eines Skriptelements hinzugefügt wird und dann das Element dem Dokument hinzugefügt wird.
Diese Fälle werden bewertet, wenn das unzuverlässige Skript dem Dokument hinzugefügt wird.

#### TrustedHTML

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) mit einem `commandName` von [`"insertHTML"`](/de/docs/Web/API/Document/execCommand#inserthtml)
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [`Document.write()`](/de/docs/Web/API/Document/write)
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln)
- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Element.insertAdjacentHTML`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`HTMLIFrameElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)
- [`Range.createContextualFragment()`](/de/docs/Web/API/Range/createContextualFragment)
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)

#### TrustedScript

- [`AsyncFunction()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction)
- [`AsyncGeneratorFunction()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)
- {{jsxref("Global_Objects/eval", "eval()")}}
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute#value) (`value`-Argument)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS#value) (`value`-Argument)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
- [`window.setTimeout()`](/de/docs/Web/API/Window/setTimeout#code) und [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout#code) (`code`-Argument)
- [`window.setInterval()`](/de/docs/Web/API/Window/setInterval#code) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval#code) (`code`-Argument)

#### TrustedScriptURL

- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
- [`SvgAnimatedString.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
- `url`-Argument zum [`Worker()` Konstruktor](/de/docs/Web/API/Worker/Worker#url)
- `url`-Argument zum [`SharedWorker()` Konstruktor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Cross-Browser-Unterstützung für Trusted Types

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, jedoch heute überall einsetzbar dank der [Kompatibilitätshilfen der W3C](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill).

- Die [_volle_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht die CSP aus dem aktuellen Dokument abzuleiten, und erzwingt die Nutzung von Trusted Types basierend auf der abgeleiteten CSP.
- Die [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API, und enthält nicht die Fähigkeit, die Nutzung von Trusted Types durch eine CSP zu erzwingen.

Neben diesen beiden Polyfills bietet die W3C eine sogenannte _Tinyfill_, die wir im Folgenden näher erläutern werden.

Beachten Sie, dass solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Durchsetzung getestet haben, Sie auf anderen Browsern nicht das _volle Polyfill_ verwenden müssen — Sie können die gleichen Vorteile durch die _API only Polyfill_ oder die _Tinyfill_ erreichen.

Das liegt daran, dass die Durchsetzung Sie dazu zwingt, Ihren Code so zu refaktorisieren, dass alle Daten vor ihrer Übergabe an ein Injection Sink durch die Trusted Types API (und daher durch eine Bereinigungsfunktion) geleitet werden.
Wenn Sie dann den refaktorierten Code in einem anderen Browser ohne Durchsetzung ausführen, wird er dennoch die gleichen Codepfade durchlaufen und Ihnen den gleichen Schutz bieten.

#### Trusted Types Tinyfill

In diesem Abschnitt betrachten wir, wie die Trusted Types Tinyfill eine Website schützen kann, obwohl sie überhaupt keine Unterstützung für Trusted Types hinzufügt.

Die Trusted Types Tinyfill ist nur dies:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Sie bietet eine Implementierung von `trustedTypes.createPolicy()`, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt, das ihr übergeben wurde. Das `policyOptions`-Objekt definiert Bereinigungsfunktionen für Daten, und diese Funktionen sollen Strings zurückgeben.

Mit dieser Tinyfill an Ort und Stelle, nehmen wir an, wir erstellen eine Policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an ein Injection Sink übergeben werden, und wir können durchsetzen, dass das Sink einen Trusted Type statt eines Strings erhalten hat.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, die ihre Eingabe bereinigt und diese als String zurückgibt. Der bereinigte String kann dann an ein Injection Sink übergeben werden.

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

So oder so erhält das Injection Sink bereinigte Daten, und da wir die Verwendung der Policy im unterstützenden Browser durchsetzen konnten, wissen wir, dass dieser Codepfad auch im nicht unterstützenden Browser durch die Bereinigungsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in ein Injection Sink eingefügt wird, das ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in ein Injection Sink eingefügt wird, das dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in ein Injection Sink eingefügt wird, das ihn als URL einer externen Skriptressource analysiert.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die verwendet werden, um die oben genannten Trusted Type-Objekte zu erstellen.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Policy-Objekte und überprüft, ob Trusted Type-Objektinstanzen über eine der Policies erstellt wurden.

### Erweiterungen für andere Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt im Haupt-Thread assoziiert ist.
    Dies ist der Einstiegspunkt für die Nutzung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt in einem Worker assoziiert ist.

### Erweiterungen für HTTP

#### `Content-Security-Policy`-Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM XSS [Injection Sinks](#konzepte_und_verwendung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Whitelist von Trusted Types Policy-Namen anzugeben.

#### `Content-Security-Policy`-Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt das Verwenden von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn Trusted Types unterstützt und durchgesetzt werden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente injiziert werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Wege, Eingaben zu bereinigen im Artikel [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
