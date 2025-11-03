---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 4db798b6db5773ba5dd76511d60e151db65c320e
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** gibt Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine benutzerspezifizierte Transformationsfunktion geleitet wurden, bevor sie an eine API weitergegeben werden, die diese Eingaben ausführen könnte. Dies kann helfen, clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe zu verhindern. Am häufigsten bereinigt die Transformationsfunktion die Eingabe.

## Konzepte und Verwendung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer erstellte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind als [_Injection-Sinks_](#injection-sink-schnittstellen) bekannt.

Die Trusted Types API unterscheidet drei Arten von Injection-Sinks:

- **HTML-Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es in das HTML eingebettet ist, beispielsweise in {{htmlelement("script")}}-Tags oder Event-Handler-Attributen.
- **JavaScript-Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass Eingaben vor der Weitergabe an einen Injection-Sink sicher sind.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben, die an einen Injection-Sink gebunden sind, transformieren, um sie sicher zu machen. Die Richtlinie kann für die verschiedenen Arten von Sinks unterschiedliche Methoden definieren:

- Für HTML-Sinks bereinigt die Transformationsfunktion typischerweise die Eingabe, beispielsweise durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Policy die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben zulassen (zum Beispiel spezifische URLs).

Die Trusted Types API stellt dann sicher, dass Eingaben durch die geeignete Transformationsfunktion geleitet werden, bevor sie in den Sink gelangen.

Das heißt, mit der API können Sie Ihre Richtlinie an einer Stelle definieren und dann sicher sein, dass alle Daten, die an einen Injection-Sink weitergegeben werden, durch die Richtlinie geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _keine_ eigene Richtlinie oder Transformationsfunktionen: Der Entwickler definiert seine eigene Richtlinie, die die gewünschten Transformationen enthält.

Die API besteht aus zwei Hauptkomponenten:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an einen Injection-Sink weitergegeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und steuern die Verwendung der JavaScript-API.

### Die Trusted Types JavaScript-API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, verfügbar in sowohl [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) Kontexten, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted-Type-Objekte zu erstellen: Dies geschieht, indem die Daten durch eine Transformationsfunktion geleitet werden.
- Trusted-Type-Objekte repräsentieren Daten, die durch die Richtlinie gegangen sind und daher sicher an einen Injection-Sink weitergegeben werden können. Es gibt drei Arten von Trusted-Type, die den verschiedenen Arten von Injection-Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist für die Übergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist für die Übergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist für die Übergabe an einen Sink, der die Daten als URL zu einem Skript analysiert.

Mit dieser API verwenden Sie anstatt einer Zeichenkette, die Sie an einen Injection-Sink wie `innerHTML` übergeben, ein `TrustedTypePolicy`, um aus der Zeichenkette ein `TrustedHTML`-Objekt zu erstellen und dieses dann in den Sink zu übergeben, um sicherzustellen, dass die Zeichenkette durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erzeugen kann, indem sie die Eingabezeichenfolgen mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek bereinigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen und dieses in den Injection-Sink zu übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, aber sie stellt nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection-Sink weitergibt: Sie verhindert nicht, dass Sie eine Zeichenkette in `innerHTML` übergeben.

Um durchzusetzen, dass immer ein Trusted Type übergeben werden muss, fügen Sie die {{CSP("require-trusted-types-for")}}-Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser gesetzten Direktive führt die Übergabe von Zeichenketten an Injection-Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}}-CSP-Direktive verwendet werden, um zu steuern, welche Richtlinien Ihr Code erstellen darf. Wenn Sie eine Richtlinie mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Richtlinie an. Die `trusted-types`-CSP-Direktive listet akzeptable Richtliniennamen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ein nicht aufgelisteter Name übergeben wird. Dies verhindert, dass ein Teil Ihres Webanwendungscodes eine Richtlinie erstellt, die Sie nicht erwartet haben.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, an denen Sie noch Zeichenketten in Injection-Sinks übergeben, damit Sie den Code neu schreiben können, um stattdessen Trusted Types zu erstellen und zu übergeben.

Wenn Sie eine Richtlinie mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jedes Zeichenkettenargument, das an Injection-Sinks übergeben wird, automatisch an diese Richtlinie übergeben. Angenommen, wir erstellen eine Richtlinie so:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Richtlinie ruft der Browser die `createHTML()`-Methode der Richtlinie auf und weist das Ergebnis dem Sink zu, wenn Ihr Code eine Zeichenkette `innerHTML` zuweist:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgibt, wirft der Browser eine `TypeError`, wenn er das Ergebnis dem Sink zuweist:

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
> Es wird empfohlen, die Standardrichtlinie nur während der Übergangszeit von Legacy-Code, der Eingaben direkt an Injection-Sinks weiterleitet, zu Code, der Trusted Types explizit verwendet, zu verwenden.

### Injection-Sink-Schnittstellen

In diesem Abschnitt finden Sie eine Liste von "direkten" Injection-Sink-Schnittstellen.

Beachten Sie, dass es Fälle gibt, in denen unzuverlässige Zeichenketten "indirekt injiziert" werden können, wie wenn eine unzuverlässige Zeichenkette als Knoten eines Skriptelements hinzugefügt und dann das Element dem Dokument hinzugefügt wird.
Diese Fälle werden ausgewertet, wenn das unzuverlässige Skript ins Dokument eingefügt wird.

#### TrustedHTML

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) mit einem `commandName` von [`"insertHTML"`](/de/docs/Web/API/Document/execCommand#inserthtml)
- [`Document.parseHTMLUnsafe_static()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
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
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute#value) (`value` Argument)
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS#value) (`value` Argument)
- [`Function()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
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
- `url` Argument für den [`Worker()` Konstruktor](/de/docs/Web/API/Worker/Worker#url)
- `url` Argument für den [`SharedWorker()` Konstruktor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Unterstützung von Trusted Types in verschiedenen Browsern

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, kann jedoch dank [Kompatibilitätshilfen, die von der W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), überall genutzt werden.

- Der [_vollständige_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht die CSP vom aktuellen Dokument abzuleiten und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Der [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und enthält nicht die Fähigkeit, mithilfe einer CSP die Verwendung von Trusted Types zu erzwingen.

Zusätzlich zu diesen zwei Polyfills stellt die W3C ein sogenanntes _tinyfill_ bereit, das wir im Folgenden ausführlicher erklären werden.

Beachten Sie, dass solange Sie Ihren Code in einem unterstützenden Browser mit aktivierter CSP-Durchsetzung getestet haben, Sie den _vollständigen Polyfill_ nicht in anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem _nur API Polyfill_ oder dem _tinyfill_ erzielen.

Dies liegt daran, dass die Durchsetzung Sie dazu zwingt, Ihren Code so zu refaktorisieren, dass alle Daten durch die Trusted Types API geleitet werden (und daher durch eine Bereinigungsfunktion gegangen sind), bevor sie an einen Injection-Sink weitergegeben werden.
Wenn Sie den refaktorisierten Code dann in einem anderen Browser ohne Durchsetzung ausführen, wird er immer noch die gleichen Codepfade durchlaufen und Ihnen denselben Schutz bieten.

#### Trusted Types tinyfill

In diesem Abschnitt betrachten wir, wie das Trusted Types tinyfill eine Website schützen kann, obwohl es Trusted Types überhaupt nicht unterstützt.

Das Trusted Types tinyfill ist einfach dies:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es stellt eine Implementierung von `trustedTypes.createPolicy()` bereit, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) Objekt zurückgibt, das übergeben wurde. Das `policyOptions`-Objekt definiert Bereinigungsfunktionen für Daten, und diese Funktionen sollen Zeichenketten zurückgeben.

Mit diesem Tinyfill, angenommen, wir erstellen eine Richtlinie:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection-Sink übergeben werden, und wir können erzwingen, dass der Sink einen Trusted Type anstelle einer Zeichenkette empfangen hat.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, das seine Eingaben bereinigt und sie als Zeichenkette zurückgibt. Die bereinigte Zeichenkette kann dann an einen Injection-Sink übergeben werden.

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

In jedem Fall erhält der Injection-Sink bereinigte Daten, und da wir die Verwendung der Richtlinie im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad die Bereinigungsfunktion auch im nicht unterstützenden Browser durchläuft.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert eine Zeichenkette, die in einen Injection-Sink eingefügt werden soll, der sie als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert eine Zeichenkette, die in einen Injection-Sink eingefügt werden soll, die dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert eine Zeichenkette, die in einen Injection-Sink eingefügt werden soll, der sie als URL einer externen Skriptressource interpretiert.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zum Erstellen der oben genannten Trusted-Type-Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und prüft, ob Trusted Type-Objektinstanzen über eine der Richtlinien erstellt wurden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt im Hauptthread verbunden ist.
    Dies ist der Einstiegspunkt zur Verwendung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt in einem Worker verbunden ist.

### Erweiterungen zu HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass [Trusted Types](/de/docs/Web/API/Trusted_Types_API) an DOM XSS [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Whitelist von [Trusted Types](/de/docs/Web/API/Trusted_Types_API) Richtliniennamen anzugeben.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) unterstützt und erzwungen werden.

## Beispiele

Im untenstehenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um eine bereinigte HTML-Zeichenfolge zu erstellen, die in das Dokument eingefügt wird.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Bereinigung von Eingaben im Artikel [DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm Paket](https://www.npmjs.com/package/trusted-types))
