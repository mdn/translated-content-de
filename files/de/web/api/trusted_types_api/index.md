---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet wurden, bevor sie an eine API weitergegeben werden, die diese Eingaben ausführen könnte. Dies kann dazu beitragen, Angriffe auf Client-Seite [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) zu verhindern. Am häufigsten wird die Transformationsfunktion die Eingaben [säubern](/de/docs/Web/Security/Attacks/XSS#sanitization).

## Konzepte und Nutzung

Client-seitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer manipulierte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind als [_injection sinks_](#injection_sink-schnittstellen) bekannt.

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML-Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie z.B. [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es im HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder Eventhandler-Attributen.
- **JavaScript-Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie z.B. {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie z.B. [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass Eingaben sicher gemacht werden, bevor sie an einen Injection Sink übergeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, um die Eingaben für einen Injection Sink sicher zu transformieren. Die Policy kann verschiedene Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML-Sinks bereinigt die Transformationsfunktion typischerweise die Eingaben, zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Policy die Sinks komplett deaktivieren oder bestimmte vordefinierte Eingaben zulassen (zum Beispiel bestimmte URLs).

Die Trusted Types API wird dann sicherstellen, dass Eingaben durch die entsprechende Transformationsfunktion geleitet werden, bevor sie in den Sink gelangen.

Das heißt, die API ermöglicht es Ihnen, Ihre Policy an einer zentralen Stelle zu definieren und dann sicherzustellen, dass alle Daten, die an einen Injection Sink weitergegeben werden, durch die Policy geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _keine_ Policy oder Transformationsfunktionen: Der Entwickler definiert seine eigene Policy, die die Transformationen enthält, die er anwenden möchte.

Die API hat zwei Hauptbestandteile:

- Eine JavaScript-API, die Entwicklern ermöglicht, Daten zu säubern, bevor sie an einen Injection Sink weitergegeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven, die die Nutzung der JavaScript-API durchsetzen und steuern.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, die in den Kontexten [`Window`](/de/docs/Web/API/Window/trustedTypes) und [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) verfügbar ist, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted Type-Objekte zu erstellen: Es wird dies tun, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted Type-Objekte repräsentieren Daten, die durch die Policy geleitet wurden, und können daher sicher an einen Injection Sink weitergegeben werden. Es gibt drei Arten von Trusted Type, die den verschiedenen Arten von Injection Sink entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) wird verwendet, um an einen Sink weiterzugeben, der die Daten als HTML darstellt.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) wird verwendet, um an einen Sink weiterzugeben, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) wird verwendet, um an einen Sink weiterzugeben, der die Daten als URL zu einem Skript analysiert.

Mit dieser API, anstatt einen String an einen Injection Sink wie `innerHTML` weiterzugeben, verwenden Sie eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen und dieses dann an den Sink weiterzugeben. Sie können sicher sein, dass der String durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erstellen kann, indem sie die Eingabe-Strings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek bereinigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als nächstes können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen und dieses Objekt in den Injection Sink zu übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu säubern, aber sie stellt nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink weitergibt: D.h. sie verhindert nicht, dass Sie einen String in `innerHTML` übergeben.

Um sicherzustellen, dass immer ein Trusted Type übergeben werden muss, fügen Sie die {{CSP("require-trusted-types-for")}}-Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein. Mit dieser gesetzten Direktive führt das Übergeben von Strings an Injection Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Darüber hinaus kann die {{CSP("trusted-types")}}-CSP-Direktive verwendet werden, um zu steuern, welche Policies Ihr Code erstellen darf. Wenn Sie eine Policy mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Policy an. Die `trusted-types`-CSP-Direktive listet akzeptable Policy-Namen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ein Name übergeben wird, der nicht in `trusted-types` aufgeführt ist. Dies verhindert, dass einige Codes in Ihrer Webanwendung eine nicht erwartete Policy erstellen.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft Ihnen dabei, alle Stellen in Ihrem Code zu finden, an denen Sie noch Strings an Injection Sinks übergeben, sodass Sie den Code umschreiben können, um stattdessen Trusted Types zu erstellen und zu übergeben.

Wenn Sie eine Policy mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jedes String-Argument, das an Injection Sinks übergeben wird, automatisch an diese Policy weitergeleitet. Wenn Sie beispielsweise eine Policy wie folgt erstellen:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Policy, wenn Ihr Code einen String an `innerHTML` zuweist, wird der Browser die Policy-Methode `createHTML()` aufrufen und ihr Ergebnis an den Sink zuweisen:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgibt, wirft der Browser eine `TypeError`, wenn das Ergebnis dem Sink zugewiesen wird:

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
> Es wird empfohlen, die Standardrichtlinie nur zu verwenden, während Sie von Legacy-Code, der Eingaben direkt an Injection Sinks übergibt, zu Code wechseln, der explizit Trusted Types verwendet.

### Injection Sink-Schnittstellen

Dieser Abschnitt bietet eine Liste der "direkten" Injection Sink-Schnittstellen.

Beachten Sie, dass es Fälle gibt, in denen nicht vertrauenswürdige Strings "indirekt injiziert" werden können, z.B. wenn ein nicht vertrauenswürdiger String als untergeordnetes Element eines Skriptelements hinzugefügt und dann das Element dem Dokument hinzugefügt wird.
Diese Fälle werden bewertet, wenn das nicht vertrauenswürdige Skript dem Dokument hinzugefügt wird.

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

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute#value) (`value`-Argument)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS#value) (`value`-Argument)
- [`Function()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
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
- `url`-Argument des [`Worker()`-Konstruktors](/de/docs/Web/API/Worker/Worker#url)
- `url`-Argument des [`SharedWorker()`-Konstruktors](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Unterstützung für Trusted Types in verschiedenen Browsern

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, aber durch [Kompatibilitätsunterstützung, die von der W3C erstellt wurde](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), heute überall nutzbar.

- Der [_volle_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht die CSP aus dem aktuellen Dokument abzuleiten und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Der [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und beinhaltet nicht die Fähigkeit, die Verwendung von Trusted Types mit einer CSP durchzusetzen.

Zusätzlich zu diesen beiden Polyfills bietet die W3C ein, was sie als _tinyfill_ bezeichnet, das wir im Folgenden genauer erklären werden.

Beachten Sie, dass Sie, solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Durchsetzung getestet haben, den _vollen Polyfill_ nicht in anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem _nur API Polyfill_ oder dem _tinyfill_ nutzen.

Das liegt daran, dass die Durchsetzung Sie zwingt, Ihren Code zu refaktorisieren, um sicherzustellen, dass alle Daten durch die Trusted Types API (und damit durch eine Sanitierungsfunktion) geleitet werden, bevor sie an einen Injection Sink übergeben werden.
Wenn Sie dann den refaktorierten Code in einem anderen Browser ohne Durchsetzung ausführen, wird er dennoch die gleichen Codepfade durchlaufen und Ihnen denselben Schutz bieten.

#### Trusted Types Tinyfill

In diesem Abschnitt sehen wir uns an, wie das Tinyfill für Trusted Types eine Website schützen kann, obwohl es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Tinyfill für Trusted Types ist einfach:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es bietet eine Implementierung von `trustedTypes.createPolicy()`, die lediglich das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt, das ihr übergeben wurde. Das `policyOptions`-Objekt definiert Sanitierungsfunktionen für Daten, und diese Funktionen sollen Strings zurückgeben.

Mit diesem Tinyfill an Ort und Stelle, nehmen wir an, wir erstellen eine Policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, gibt dies eine `TrustedTypePolicy` zurück, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection Sink übergeben werden, und wir können durchsetzen, dass der Sink einen Trusted Type erhält, anstatt eines Strings.

In Browsern, die Trusted Types nicht unterstützen, gibt dieser Code ein Objekt mit einer `createHTML()`-Funktion zurück, die ihre Eingaben bereinigt und als String zurückgibt. Der bereinigte String kann dann an einen Injection Sink übergeben werden.

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

So oder so, der Injection Sink erhält bereinigte Daten, und weil wir die Verwendung der Policy im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad im nicht unterstützenden Browser ebenfalls durch die Sanitierungsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einem Injection Sink eingefügt wird, der ihn als HTML darstellen wird.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einem Injection Sink eingefügt werden soll, der dazu führen kann, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als URL zu einer externen Skriptressource analysiert.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen zur Erstellung der oben genannten Trusted Type-Objekte.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und überprüft, dass Trusted Type-Objekte über eine der Richtlinien erstellt wurden.

### Erweiterungen für andere Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt im Hauptthread assoziiert ist.
    Dies ist der Einstiegspunkt zur Verwendung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt in einem Worker assoziiert ist.

### Erweiterungen für HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM XSS [Injection Sinks](#konzepte_und_nutzung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Zulassungsliste von Trusted Type-Policy-Namen anzugeben.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn Trusted Types unterstützt und durchgesetzt werden.

## Beispiele

Im unten stehenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten, Eingaben in dem Artikel [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types) zu bereinigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch als [npm-Paket](https://www.npmjs.com/package/trusted-types) verfügbar)
