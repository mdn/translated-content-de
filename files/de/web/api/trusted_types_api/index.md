---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** gibt Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet werden, bevor sie an eine API übergeben werden, die diese Eingaben möglicherweise ausführt. Dies kann helfen, sich gegen clientseitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe zu schützen. Meistens [bereinigt](/de/docs/Web/Security/Attacks/XSS#sanitization) die Transformationsfunktion die Eingabe.

## Konzepte und Nutzung

Client-seitige oder DOM-basierte XSS-Angriffe passieren, wenn von einem Angreifer manipulierte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind bekannt als [_Injection Sinks_](#injection_sink-schnittstellen).

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML-Sinks**: APIs, die ihre Eingabe als HTML interpretieren, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es im HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}} Tags oder Event-Handler-Attributen.
- **JavaScript-Sinks**: APIs, die ihre Eingabe als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingabe als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe ist sicherzustellen, dass die Eingabe sicher gemacht wird, bevor sie an einen Injection Sink übergeben wird.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die die Eingabe, die an einen Injection Sink gebunden ist, transformieren, um sie sicher zu machen. Die Richtlinie kann verschiedene Methoden für die unterschiedlichen Arten von Sinks definieren:

- Für HTML-Sinks bereinigt die Transformationsfunktion typischerweise [die Eingabe](/de/docs/Web/Security/Attacks/XSS#sanitization), zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Richtlinie die Sinks komplett abschalten oder bestimmte vordefinierte Eingaben erlauben (zum Beispiel spezifische URLs).

Die Trusted Types API stellt dann sicher, dass die Eingabe durch die entsprechende Transformationsfunktion geleitet wird, bevor sie in den Sink gelangt.

Das heißt, die API ermöglicht es Ihnen, Ihre Richtlinie an einem Ort zu definieren und dann sicherzustellen, dass alle Daten, die an einen Injection Sink übergeben werden, durch die Richtlinie geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _selbst keine_ Richtlinie oder Transformationsfunktionen: der Entwickler definiert seine eigene Richtlinie, die die gewünschten Transformationen enthält.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an einen Injection Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und steuern die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die `trustedTypes` globale Eigenschaft, verfügbar in sowohl [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) Kontexten, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt wird verwendet, um Trusted-Type-Objekte zu erstellen: es wird dies tun, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted-Type-Objekte repräsentieren Daten, die durch die Richtlinie geleitet wurden, und können daher sicher an einen Injection Sink übergeben werden. Es gibt drei Arten von Trusted Types, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist zum Übergeben an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist zum Übergeben an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist zum Übergeben an einen Sink, der die Daten als URL zu einem Skript parst.

Mit dieser API, anstatt eine Zeichenkette an einen Injection Sink wie `innerHTML` zu übergeben, verwenden Sie eine `TrustedTypePolicy`, um ein `TrustedHTML` Objekt aus der Zeichenkette zu erstellen, übergeben dann das an den Sink, und können sicher sein, dass die Zeichenkette durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML` Objekte durch die Bereinigung der Eingabezeichenketten mit der [DOMPurify](https://github.com/cure53/DOMPurify) Bibliothek erstellen kann:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als nächstes können Sie dieses `policy` Objekt verwenden, um ein `TrustedHTML` Objekt zu erstellen und dieses Objekt in den Injection Sink übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung eines CSP zur Erzwingung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, aber es stellt nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink übergibt: das heißt, es hindert Sie nicht daran, eine Zeichenkette an `innerHTML` zu übergeben.

Um sicherzustellen, dass immer ein Trusted Type übergeben wird, fügen Sie die {{CSP("require-trusted-types-for")}} Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser Direktive wird das Übergeben von Zeichenketten in Injection Sinks zu einer `TypeError`-Ausnahme führen:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}} CSP Direktive verwendet werden, um zu kontrollieren, welche Richtlinien Ihr Code erstellen darf. Wenn Sie eine Richtlinie mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, übergeben Sie einen Namen für die Richtlinie. Die `trusted-types` CSP Direktive listet akzeptable Richtlinienneamen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ihm ein Name übergeben wird, der nicht in `trusted-types` aufgelistet ist. Dies verhindert, dass ein Code in Ihrer Webanwendung eine Richtlinie erstellt, die Sie nicht erwartet haben.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft Ihnen, Stellen in Ihrem Code zu finden, an denen Sie noch Zeichenketten in Injection Sinks übergeben, sodass Sie den Code umschreiben können, um stattdessen Trusted Types zu verwenden.

Wenn Sie eine Richtlinie mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jedes Zeichenketten-Argument, das in Injection Sinks übergeben wird, automatisch an diese Richtlinie übergeben. Zum Beispiel, nehmen wir an, wir erstellen eine Richtlinie wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Richtlinie, wenn Ihr Code eine Zeichenkette `innerHTML` zuweist, ruft der Browser die Methode `createHTML()` der Richtlinie auf und weist das Ergebnis dem Sink zu:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgab, wird der Browser einen `TypeError` werfen, wenn er das Ergebnis dem Sink zuweist:

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
> Es wird empfohlen, die Standardrichtlinie nur während der Transition von Legacy-Code, der Eingaben direkt an Injection Sinks übergibt, zu Code, der direkt Trusted Types verwendet, zu nutzen.

### Injection Sink-Schnittstellen

Dieser Abschnitt bietet eine Liste von "direkten" Injection Sink-Schnittstellen.

Beachten Sie, dass es Fälle gibt, in denen unzuverlässige Zeichenketten "indirekt injiziert" werden können, wie zum Beispiel, wenn eine unzuverlässige Zeichenkette als Kindknoten eines Skriptelements hinzugefügt wird und dann das Element dem Dokument hinzugefügt wird.
Diese Fälle werden ausgewertet, wenn das unzuverlässige Skript dem Dokument hinzugefügt wird.

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
- `url` Argument zum [`Worker()` Konstruktor](/de/docs/Web/API/Worker/Worker#url)
- `url` Argument zum [`SharedWorker()` Konstruktor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Cross-Browser-Unterstützung für Trusted Types

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, aber sie ist heute überall nutzbar dank [Kompatibilitätshilfen, die von der W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill).

- Der [_volle_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht, die CSP aus dem aktuellen Dokument abzuleiten, und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Der [_API-only_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und umfasst nicht die Fähigkeit, die Verwendung von Trusted Types mit einer CSP zu erzwingen.

Neben diesen zwei Polyfills bietet die W3C, was sie als _tinyfill_ bezeichnet, das wir im Folgenden näher erläutern.

Beachten Sie, dass solange Sie Ihren Code in einem unterstützenden Browser mit aktiviertem CSP-Erzwingung getestet haben, Sie den oben genannten _vollen Polyfill_ nicht in anderen Browsern verwenden müssen – Sie können die gleichen Vorteile mit dem _API-only-Polyfill_ oder dem _tinyfill_ erhalten.

Dies liegt daran, dass die Erzwingung Sie dazu zwingt, Ihren Code zu überarbeiten, um sicherzustellen, dass alle Daten durch die Trusted Types API (und daher durch eine Bereinigungsfunktion) geleitet werden, bevor sie an einen Injection Sink übergeben werden.
Wenn Sie dann den überarbeiteten Code in einem anderen Browser ohne Erzwingung ausführen, wird er immer noch die gleichen Codepfade durchlaufen und Ihnen den gleichen Schutz bieten.

#### Trusted Types Tinyfill

In diesem Abschnitt betrachten wir, wie das Tinyfill für Trusted Types eine Website schützen kann, obwohl es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types Tinyfill sieht einfach so aus:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es stellt eine Implementierung von `trustedTypes.createPolicy()` zur Verfügung, die einfach das an sie übergebene [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt. Das `policyOptions`-Objekt definiert Bereinigungsfunktionen für Daten, und diese Funktionen sollten Zeichenketten zurückgeben.

Mit diesem Tinyfill eingerichtet, nehmen wir an, wir erstellen eine Richtlinie:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection Sink übergeben werden, und wir können sicherstellen, dass der Sink einen Trusted Type erhält und keine Zeichenkette.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, die ihre Eingabe bereinigt und als Zeichenkette zurückgibt. Die bereinigte Zeichenkette kann dann an einen Injection Sink übergeben werden.

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

So oder so erhält der Injection Sink bereinigte Daten, und weil wir die Verwendung der Richtlinie in dem unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad im nicht unterstützenden Browser ebenfalls durch die Bereinigungsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der sie als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der dazu führen könnte, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert eine Zeichenkette, die in einen Injection Sink eingefügt wird, der sie als URL einer externen Skriptressource parsen wird.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zur Erstellung der oben genannten Trusted Type-Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und verifiziert, dass Trusted Type-Objektinstanzen durch eine der Richtlinien erstellt wurden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt im Hauptthread assoziiert ist.
    Dies ist der Einstiegspunkt für die Nutzung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt in einem Worker assoziiert ist.

### Erweiterungen zu HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM XSS [Injection Sinks](#konzepte_und_nutzung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Zulassungsliste von Trusted-Types-Richtlinienneamen zu spezifizieren.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Erlaubt die Verwendung von Funktionen wie [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval), aber nur dann, wenn Trusted Types unterstützt und erzwungen werden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um eine bereinigte HTML-Zeichenkette zu erstellen, die in das Dokument eingefügt wird.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Bereinigung von Eingaben im Artikel [DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
