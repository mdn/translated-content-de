---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet wurden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt. Dies kann helfen, clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verhindern. Am häufigsten wird die Transformationsfunktion verwendet, um die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization).

## Konzepte und Nutzung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer erstellte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs werden als [_Injection-Sinks_](#injection-sink-interfaces) bezeichnet.

Die Trusted Types API unterscheidet drei Arten von Injection-Sinks:

- **HTML-Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie etwa [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es im HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder Attribute von Ereignis-Handlern.
- **JavaScript-Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie etwa {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie etwa [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass Eingaben sicher gemacht werden, bevor sie in einen Injection-Sink übergeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben transformieren, die einem Injection-Sink zugeführt werden, um sie sicher zu machen. Die Policy kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML-Sinks sanitisiert die Transformationsfunktion typischerweise die Eingabe, zum Beispiel unter Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Policy die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben (zum Beispiel spezifische URLs) zulassen.

Die Trusted Types API stellt dann sicher, dass die Eingaben vor dem Weiterleiten an den Sink durch die entsprechende Transformationsfunktion geleitet werden.

Das heißt, die API ermöglicht Ihnen, Ihre Policy an einer Stelle zu definieren und sicherzustellen, dass alle Daten, die an einen Injection-Sink übergeben werden, durch die Policy gegangen sind.

> [!NOTE]
>
> Die Trusted Types API stellt selbst _keine_ Policy oder Transformationsfunktionen zur Verfügung: Der Entwickler definiert seine eigene Policy, die die gewünschten Transformationen enthält.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu sanitisieren, bevor sie an einen Injection-Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und steuern die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, die sowohl im [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes)-Kontext verfügbar ist, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted-Type-Objekte zu erstellen: Es tut dies, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted-Type-Objekte repräsentieren Daten, die durch die Policy gegangen sind, und können daher sicher an einen Injection-Sink weitergegeben werden. Es gibt drei Arten von Trusted-Types, die den verschiedenen Arten von Injection-Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist für die Übergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist für die Übergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist für die Übergabe an einen Sink, der die Daten als URL zu einem Skript parst.

Mit dieser API verwenden Sie anstelle des Übergebens eines Strings an einen Injection-Sink wie `innerHTML` eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen und dieses dann an den Sink zu übergeben. So können Sie sicher sein, dass der String durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erstellen kann, indem sie die Eingabe-Strings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek sanitisiert:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als nächstes können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen und dieses Objekt in den Injection-Sink einzugeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es, Daten zu sanitieren, stellt jedoch nicht sicher, dass Ihr Code nie Eingaben direkt in einen Injection-Sink übergibt: Das heißt, es verhindert nicht, dass Sie einen String an `innerHTML` übergeben.

Um durchzusetzen, dass immer ein Trusted Type übergeben werden muss, fügen Sie die Direktive {{CSP("require-trusted-types-for")}} in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser gesetzten Direktive führt das Übergeben von Strings an Injection-Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die CSP-Direktive {{CSP("trusted-types")}} verwendet werden, um zu steuern, welche Policies Ihr Code erstellen darf. Wenn Sie eine Policy mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Policy an. Die `trusted-types`-CSP-Direktive listet zulässige Policy-Namen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ein nicht aufgelisteter Name übergeben wird. Dies verhindert, dass Code in Ihrer Webanwendung eine unerwartete Policy erstellt.

### Die Standard-Policy

In der Trusted Types API können Sie eine _Standard-Policy_ definieren. Diese hilft Ihnen, Stellen in Ihrem Code zu finden, an denen Sie noch Strings in Injection-Sinks übergeben, damit Sie den Code umschreiben können, um stattdessen Trusted Types zu erstellen und zu übergeben.

Wenn Sie eine Policy mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jeder String-Parameter, der an Injection-Sinks übergeben wird, automatisch an diese Policy übergeben. Angenommen, wir erstellen eine Policy wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Policy, wenn Ihr Code einen String an `innerHTML` übergibt, ruft der Browser die Methode `createHTML()` der Policy auf und weist ihr Ergebnis dem Sink zu:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standard-Policy `null` oder `undefined` zurückgibt, wird der Browser einen `TypeError` auslösen, wenn das Ergebnis dem Sink zugewiesen wird:

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
> Es wird empfohlen, die Standard-Policy nur zu verwenden, während Sie von Legacy-Code, der Eingaben direkt an Injection-Sinks übergibt, zu Code wechseln, der explizit Trusted Types verwendet.

### Injection-Sink-Interfaces

Dieser Abschnitt bietet eine Liste von "direkten" Injection-Sink-Interfaces.

Dies sind die API-Eigenschaften und -Methoden, die Trusted-Type-Überprüfungen durchführen, wenn sie ausgewertet werden.
Sie können Trusted Types (`TrustedHTML`, `TrustedScript` oder `TrustedScriptURL`) sowie Strings übergeben werden und müssen Trusted Types übergeben werden, wenn die Trusted-Type-Durchsetzung aktiviert ist und keine Standard-Policy definiert ist.

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

- [`AsyncFunction()` Constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction)
- [`AsyncGeneratorFunction()` Constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)
- {{jsxref("Global_Objects/eval", "eval()")}}
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute#value) (`value`-Argument)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS#value) (`value`-Argument)
- [`Function()` Constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` Constructor](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
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
- `url`-Argument des [`Worker()` Constructor](/de/docs/Web/API/Worker/Worker#url)
- `url`-Argument des [`SharedWorker()` Constructor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Indirekte Injection-Sinks

_Indirekte Injection-Sinks_ sind Sinks, bei denen untrustierte Strings über einen zwischengeschalteten Mechanismus, der keine Trusted Types akzeptiert oder erzwingt, in den DOM injiziert werden.
Diese unterscheiden sich von den "direkten" [Injection-Sink-Interfaces](#injection-sink-interfaces), die im vorherigen Abschnitt aufgeführt sind und die Trusted-Type-Überprüfungen bei aufgerufenen Strings durchführen.

Zum Beispiel: Der folgende Code setzt die Quelle eines Skriptelements indirekt.
Zuerst wird ein Textknoten unter Verwendung eines vom Benutzer bereitgestellten Strings erstellt, dann wird ein {{htmlelement("script")}}-Element erstellt und der Textknoten wird als Kindelement hinzugefügt.
Als Nächstes wird das Skriptelement als Kindelement des {{htmlelement("body")}}-Elements zum Dokument hinzugefügt – in diesem Moment können Skripte aus dem ursprünglichen String ausgeführt werden.

```js
// Create a text node
const untrustedString =
  "console.log('A potentially malicious script from an untrusted source!');";
const textNode = document.createTextNode(untrustedString);

// Create a script element and append the text node
const script = document.createElement("script");
script.appendChild(textNode);

// Add the script into the document, where it can run
document.body.appendChild(script);
```

Wenn der Textknoten erstellt wird, gibt es keinen Grund für den Browser anzunehmen, dass er beabsichtigt ist, als Trusted-Type-Quelle verwendet zu werden, daher werden Trusted Types in Strings serialisiert und nicht erzwungen.

Stattdessen führt der Browser die Überprüfungen durch, wenn das Skriptelement ausführbar wird – in diesem Beispiel, wenn `document.body.appendChild(script)` aufgerufen wird, um das Skriptelement dem Dokument hinzuzufügen.

Der Browser überprüft zuerst, ob der als Skriptinhalt verwendete String vertrauenswürdig ist.
Jede Operation, die es erlaubt, die Textquelle eines {{htmlelement("script")}} zu ändern, ohne explizit ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) zu setzen, macht es nicht vertrauenswürdig.
Die im obigen Beispiel verwendete [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) Methode ist nur ein Beispiel (eine Reihe weiterer sind in den WPT Live-Tests unter <https://wpt.live/trusted-types/script-enforcement-001.html> aufgeführt).

Wenn der String nicht vertrauenswürdig ist und Trusted Types erzwungen werden, wird der Browser versuchen, ein `TrustedScript` aus einer [Standard-Policy](#die_standard-policy) für die Verwendung als Quelle zu erhalten.
Wenn keine Standard-Policy definiert ist oder nicht ein `TrustedScript` zurückgibt, wird die Operation eine Ausnahme auslösen.

### Browser-übergreifende Unterstützung für Trusted Types

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, aber sie ist heute überall dank [Kompatibilitätshilfen, die von der W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), nutzbar.

- Das [_vollständige_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht, die CSP aus dem aktuellen Dokument abzuleiten und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Das [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und enthält nicht die Fähigkeit, die Verwendung von Trusted Types mithilfe einer CSP zu erzwingen.

Neben diesen beiden Polyfills bietet die W3C auch ein _Tinyfill_, das wir weiter unten im Detail erklären werden.

Beachten Sie, dass Sie das _vollständige Polyfill_ in anderen Browsern nicht benötigen, solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Durchsetzung getestet haben — Sie können dieselben Vorteile mit dem _nur API-Polyfill_ oder dem _Tinyfill_ erzielen.

Das liegt daran, dass die Durchsetzung Sie zwingt, Ihren Code zu refaktorisieren, um sicherzustellen, dass alle Daten durch die Trusted Types API (und somit durch eine Sanitisierungsfunktion) geleitet werden, bevor sie an einen Injection-Sink übergeben werden.
Wenn Sie dann den refaktorierten Code in einem anderen Browser ohne Durchsetzung ausführen, wird derselbe Codepfad durchlaufen und Sie erhalten denselben Schutz.

#### Trusted Types Tinyfill

In diesem Abschnitt werden wir sehen, wie das Trusted Types Tinyfill eine Website schützen kann, obwohl es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types Tinyfill sieht so aus:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es bietet eine Implementierung von `trustedTypes.createPolicy()`, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt, das übergeben wurde. Das `policyOptions`-Objekt definiert Sanitisierungsfunktionen für Daten, und diese Funktionen sollen Strings zurückgeben.

Mit diesem Tinyfill an Ort und Stelle, nehmen wir an, wir erstellen eine Policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, gibt dies eine `TrustedTypePolicy` zurück, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection-Sink übergeben werden, und wir können sicherstellen, dass der Sink einen Trusted Type statt eines Strings erhalten hat.

In Browsern, die Trusted Types nicht unterstützen, gibt dieser Code ein Objekt mit einer `createHTML()`-Funktion zurück, die ihre Eingaben sanitisiert und als String zurückgibt. Der sanitisierte String kann dann an einen Injection-Sink übergeben werden.

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

In beiden Fällen erhält der Injection-Sink sanitisierte Daten, und da wir die Verwendung der Policy im unterstützenden Browser durchsetzen konnten, wissen wir, dass dieser Codepfad im nicht unterstützenden Browser auch durch die Sanitisierungsfunktion führt.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection-Sink eingefügt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection-Sink eingefügt wird, der dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection-Sink eingefügt wird, der ihn als URL einer externen Skript-Ressource parst.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zur Erstellung der oben genannten Trusted Type-Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Policies und überprüft, ob Trusted Type-Objekte über eine der Policies erstellt wurden.

### Erweiterungen für andere Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt im Hauptthread verbunden ist.
    Dies ist der Einstiegspunkt für die Verwendung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt in einem Worker verbunden ist.

### Erweiterungen für HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM XSS [Injection-Sinks](#konzepte_und_nutzung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Dient dazu, eine Whitelist von Trusted Types Policy-Namen anzugeben.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn Trusted Types unterstützt und erzwungen werden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mithilfe von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen sanierten HTML-String zu erstellen, der in das Dokument eingefügt wird.

Der sanitisierte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Sanitisierung von Eingaben im Artikel [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
