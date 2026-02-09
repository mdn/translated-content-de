---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 065e33b4829eb3d50bc80000a65d4eacf846f02f
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine vom Benutzer definierte Transformationsfunktion geleitet wurden, bevor sie an eine API weitergegeben werden, die diese Eingaben möglicherweise ausführt. Dies kann helfen, gegen clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu schützen. Am häufigsten bereinigt die Transformationsfunktion die Eingaben.

## Konzepte und Verwendung

Client-seitige oder DOM-basierte XSS-Angriffe treten auf, wenn von Angreifern manipulierte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind bekannt als [_Injection Sinks_](#injection_sink_interfaces).

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es in das HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder Ereignis-Handler-Attributen.
- **JavaScript Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript URL Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass die Eingaben gesichert werden, bevor sie an einen Injection Sink weitergegeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben, die an einen Injection Sink geleitet werden, transformieren, um sie sicher zu machen. Die Policy kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML Sinks bereinigt die Transformationsfunktion typischerweise die Eingaben, zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL Sinks kann die Policy die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben zulassen (zum Beispiel spezifische URLs).

Die Trusted Types API stellt sicher, dass Eingaben durch die entsprechende Transformationsfunktion geleitet werden, bevor sie an den Sink weitergegeben werden.

Das bedeutet, die API ermöglicht es, die Policy an einer Stelle zu definieren und sicherzustellen, dass alle Daten, die an einen Injection Sink übergeben werden, durch die Policy geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _nicht_ selbst eine Policy oder Transformationsfunktionen: Der Entwickler definiert seine eigene Policy, die die anzuwendenden Transformationen enthält.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an einen Injection Sink weitergegeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP) Direktiven erzwingen und kontrollieren die Verwendung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, verfügbar in sowohl [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) Kontexte, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt wird verwendet, um Trusted Type Objekte zu erstellen: Es tut dies, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted Type Objekte repräsentieren Daten, die durch die Policy geleitet wurden, und können daher sicher an einen Injection Sink weitergegeben werden. Es gibt drei Arten von Trusted Type, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) dient zur Weitergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) dient zur Weitergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) dient zur Weitergabe an einen Sink, der die Daten als URL zu einem Skript parst.

Mit dieser API, anstatt eine Zeichenkette an einen Injection Sink wie `innerHTML` zu übergeben, verwenden Sie ein `TrustedTypePolicy`, um ein `TrustedHTML` Objekt aus der Zeichenkette zu erstellen, und übergeben dieses dann an den Sink, wodurch sichergestellt wird, dass die Zeichenkette durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel, dieser Code erstellt ein `TrustedTypePolicy`, das `TrustedHTML` Objekte erstellen kann, indem es die Eingabezeichenketten mit der [DOMPurify](https://github.com/cure53/DOMPurify) Bibliothek bereinigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als Nächstes können Sie dieses `policy` Objekt verwenden, um ein `TrustedHTML` Objekt zu erstellen, und dieses Objekt dann in den Injection Sink übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, stellt aber nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink übergibt: Das heißt, es verhindert nicht, dass Sie eine Zeichenkette an `innerHTML` übergeben.

Um zu erzwingen, dass immer ein Trusted Type übergeben wird, fügen Sie die {{CSP("require-trusted-types-for")}} Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser gesetzten Direktive führt das Übergeben von Zeichenketten in Injection Sinks zu einer `TypeError` Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}} CSP-Direktive verwendet werden, um zu kontrollieren, welche Policies Ihr Code erstellen darf. Wenn Sie eine Policy mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Policy an. Die `trusted-types` CSP-Direktive listet akzeptable Policy-Namen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ein nicht aufgeführter Name übergeben wird. Dies verhindert, dass einige Teile Ihres Webanwendungs-Codes eine unvorhergesehene Policy erstellen.

### Die Standard-Policy

In der Trusted Types API können Sie eine _Standard-Policy_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, wo Sie noch Zeichenketten in Injection Sinks übergeben, sodass Sie den Code umschreiben können, um explizit Trusted Types zu verwenden.

Wenn Sie eine Policy mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, dann wird jedes Zeichenketten-Argument, das in Injection Sinks übergeben wird, automatisch an diese Policy übergeben. Angenommen, wir erstellen eine Policy wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Policy wird, wenn Ihr Code eine Zeichenkette an `innerHTML` zuweist, die `createHTML()` Methode der Policy aufgerufen und ihr Ergebnis an den Sink zugewiesen:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standard-Policy `null` oder `undefined` zurückgibt, wird der Browser eine `TypeError` auslösen, wenn das Ergebnis dem Sink zugewiesen wird:

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
> Es wird empfohlen, dass Sie die Standard-Policy nur während des Übergangs von legacy Code, der Eingaben direkt an Injection Sinks übergibt, zu Code verwenden, der Trusted Types explizit verwendet.

### Injection Sink Interfaces

Dieser Abschnitt bietet eine Liste von "direkten" Injection Sink Interfaces.

Dies sind die API-Eigenschaften und Methoden, die Trusted Type-Prüfungen durchführen, wenn sie ausgeführt werden.
Sie können Trusted Types (`TrustedHTML`, `TrustedScript` oder `TrustedScriptURL`) sowie Zeichenketten übergeben werden und müssen Trusted Types übergeben, wenn Trusted Type Erzwingung aktiviert ist und keine Standard-Policy definiert ist.

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
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute#value) (`value` Argument)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS#value) (`value` Argument)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
- [`window.setTimeout()`](/de/docs/Web/API/Window/setTimeout#code) und [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout#code) (`code` Argument)
- [`window.setInterval()`](/de/docs/Web/API/Window/setInterval#code) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval#code) (`code` Argument)

#### TrustedScriptURL

- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
- [`SvgAnimatedString.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal)
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
- `url` Argument an den [`Worker()` Konstruktor](/de/docs/Web/API/Worker/Worker#url)
- `url` Argument an den [`SharedWorker()` Konstruktor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Indirekte Injection Sinks

_Indirekte Injection Sinks_ sind Sinks, bei denen unzuverlässige Zeichenketten über einen Zwischenschritt, der keine Trusted Types akzeptiert oder erzwingt, in den DOM injiziert werden.
Diese unterscheiden sich von den "direkten" [Injection Sink Interfaces](#injection_sink_interfaces), die in dem vorherigen Abschnitt aufgelistet sind und Trusted Type-Prüfungen durchführen, wenn sie aufgerufen werden.

Zum Beispiel setzt der folgende Code die Quelle eines Skriptelements indirekt. Zuerst wird ein Textknoten mit einer vom Benutzer bereitgestellten Zeichenkette erstellt, und dann wird ein {{htmlelement("script")}}-Element erstellt und der Textknoten als Kindelement hinzugefügt.
Anschließend wird das Skriptelement als Kindelement des {{htmlelement("body")}}-Elements zum Dokument hinzugefügt — an diesem Punkt können Skripte, die in der ursprünglichen Zeichenkette definiert wurden, ausgeführt werden.

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

Wenn der Textknoten erstellt wird, gibt es keinen Grund für den Browser anzunehmen, dass er als eine Quelle für Trusted Types verwendet werden soll, daher werden Trusted Types in Zeichenketten serialisiert und nicht erzwungen.

Stattdessen führen Browser Prüfungen durch, wenn das Skriptelement ausführbar wird — d.h. in diesem Beispiel, wenn `document.body.appendChild(script)` aufgerufen wird, um das Skriptelement zum Dokument hinzuzufügen.

Der Browser wird zuerst prüfen, ob die als Skriptinhalt verwendete Zeichenkette vertrauenswürdig ist.
Jede Operation, die es ermöglicht, die Textquelle eines {{htmlelement("script")}} zu ändern, ohne explizit ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) festzulegen, macht sie unzuverlässig.
Die [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) Methode, die oben verwendet wird, ist nur ein Beispiel (eine Anzahl anderer ist auf den WPT Live Tests unter <https://wpt.live/trusted-types/script-enforcement-001.htm> aufgeführt).

Wenn die Zeichenkette nicht vertrauenswürdig ist und Trusted Types erzwungen werden, wird der Browser versuchen, ein `TrustedScript` von einer [Standard-Policy](#die_standard-policy) zu erhalten, um es statt der Quelle zu verwenden.
Wenn keine Standard-Policy definiert ist oder kein `TrustedScript` zurückgegeben wird, wird die Operation eine Ausnahme auslösen.

### Cross-Browser-Unterstützung für Trusted Types

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, kann aber dank [Kompatibilitäts-Hilfen, die von der W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), bereits überall genutzt werden.

- Der [_volle_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht, die CSP aus dem aktuellen Dokument abzuleiten, und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Der [_nur-API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und enthält nicht die Fähigkeit, die Verwendung von Trusted Types mittels einer CSP zu erzwingen.

Neben diesen beiden Polyfills bietet die W3C das sogenannte _tinyfill_, das wir im Folgenden näher erklären werden.

Beachten Sie, dass solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Erzwingung getestet haben, Sie den _vollen Polyfill_ oben nicht in anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem _nur-API Polyfill_ oder dem _tinyfill_ erzielen.

Das liegt daran, dass die Erzwingung Sie dazu zwingt, Ihren Code umzustrukturieren, um sicherzustellen, dass alle Daten durch die Trusted Types API geleitet werden (und daher eine Sanisierungsfunktion durchlaufen haben), bevor sie an einen Injection Sink übergeben werden.
Wenn Sie den umstrukturierten Code dann in einem anderen Browser ohne Erzwingung ausführen, wird er dennoch durch die gleichen Codepfade verlaufen und Ihnen den gleichen Schutz bieten.

#### Trusted Types tinyfill

In diesem Abschnitt werden wir sehen, wie das Trusted Types tinyfill eine Website schützen kann, obwohl es keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types tinyfill besteht nur aus:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es stellt eine Implementierung von `trustedTypes.createPolicy()` bereit, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) Objekt, das übergeben wurde, zurückgibt. Das `policyOptions` Objekt definiert Sanisierungsfunktionen für Daten, und diese Funktionen sollen Zeichenketten zurückgeben.

Mit diesem tinyfill, nehmen wir an, wir erstellen eine Policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies ein `TrustedTypePolicy` zurückgeben, das ein `TrustedHTML` Objekt erstellen wird, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML` Objekt kann dann an einen Injection Sink übergeben werden und wir können erzwingen, dass der Sink einen Trusted Type statt einer Zeichenkette erhält.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()` Funktion zurückgeben, die seine Eingaben bereinigt und sie als Zeichenkette zurückgibt. Die bereinigte Zeichenkette kann dann an einen Injection Sink übergeben werden.

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

So oder so, der Injection Sink erhält bereinigte Daten, und da wir die Verwendung der Policy im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad im nicht unterstützenden Browser ebenfalls durch die Sanisierungsfunktion verläuft.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der sie als HTML rendre.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der sie als URL einer externen Skriptquelle parsen wird.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die verwendet werden, um die oben genannten Trusted Type Objekte zu erstellen.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Policies und überprüft, dass Trusted Type Objektinstanzen über eine der Policies erstellt wurden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Objekt zurück, das mit dem globalen Objekt im Hauptthread assoziiert ist.
    Dies ist der Einstiegspunkt für die Verwendung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Objekt zurück, das mit dem globalen Objekt in einem Worker assoziiert ist.

### Erweiterungen zu HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM XSS [Injection Sinks](#konzepte_und_verwendung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Positivliste von Trusted Types Policy-Namen zu spezifizieren.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn Trusted Types unterstützt und durchgesetzt werden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte mittels [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um eine bereinigte HTML-Zeichenkette zu erstellen, die in das Dokument eingefügt wird.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten, Eingaben in dem Artikel [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
