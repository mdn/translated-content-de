---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: feab83995051329081769a3a15a7a8d8e28cdd42
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine vom Benutzer spezifizierte Transformationsfunktion geleitet wurden, bevor sie an eine API übergeben werden, die diese Eingaben ausführen könnte. Dies kann dazu beitragen, clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe zu verhindern. Üblicherweise bereinigt die Transformationsfunktion die Eingaben.

## Konzepte und Verwendung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer erstellte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind bekannt als [_Injection Sinks_](#injection_sink_interfaces).

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es im HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder Attributen von Ereignis-Handlern.
- **JavaScript Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie zum Beispiel {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript URL Sinks**: APIs, die ihre Eingaben als die URL eines Skripts interpretieren, wie zum Beispiel [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe besteht darin sicherzustellen, dass Eingaben sicher gemacht werden, bevor sie an einen Injection Sink übergeben werden.

In der Trusted Types API definiert ein Entwickler ein _Policy Object_, das Methoden enthält, die Eingaben transformieren, die an einen Injection Sink übergeben werden, um sie sicher zu machen. Die Richtlinie kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML Sinks bereinigt die Transformationsfunktion typischerweise die Eingaben, zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Richtlinie die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben zulassen (zum Beispiel bestimmte URLs).

Die Trusted Types API stellt dann sicher, dass Eingaben durch die entsprechende Transformationsfunktion geleitet werden, bevor sie in den Sink übergeben werden.

Das heißt, die API ermöglicht es Ihnen, Ihre Richtlinie an einer Stelle zu definieren, und dann sicher zu sein, dass alle Daten, die an einen Injection Sink übergeben werden, durch die Richtlinie gegangen sind.

> [!NOTE]
>
> Die Trusted Types API stellt _selbst_ keine Richtlinie oder Transformationsfunktionen bereit: Der Entwickler definiert seine eigene Richtlinie, die die Transformationen enthält, die er anwenden möchte.

Die API hat zwei Hauptkomponenten:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an einen Injection Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und kontrollieren die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, verfügbar sowohl im [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) Kontext, wird zur Erstellung von [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekten verwendet.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt wird verwendet, um Trusted Type Objekte zu erstellen: Es tut dies, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted Type Objekte repräsentieren Daten, die durch die Richtlinie gegangen sind und können daher sicher an einen Injection Sink übergeben werden. Es gibt drei Arten von Trusted Types, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist zur Übergabe an einen Sink, der die Daten als HTML rendern wird.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist zur Übergabe an einen Sink, der die Daten als JavaScript ausführen wird.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist zur Übergabe an einen Sink, der die Daten als URL zu einem Skript analysieren wird.

Mit dieser API anstatt einen String an einen Injection Sink wie `innerHTML` zu übergeben, verwenden Sie eine `TrustedTypePolicy`, um ein `TrustedHTML` Objekt aus dem String zu erstellen, übergeben dann dieses an den Sink, und können sicher sein, dass der String durch eine Transformationsfunktion gegangen ist.

Zum Beispiel erzeugt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML` Objekte durch Bereinigung der Eingabe-Strings mit der [DOMPurify](https://github.com/cure53/DOMPurify) Bibliothek erstellen kann:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als Nächstes können Sie dieses `policy` Objekt verwenden, um ein `TrustedHTML` Objekt zu erstellen und dieses in den Injection Sink zu übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Erzwingung vertrauenswürdiger Typen

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, aber sie stellt nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink übergibt: Das heißt, sie hindert Sie nicht daran, einen String in `innerHTML` zu übergeben.

Um sicherzustellen, dass immer ein vertrauenswürdiger Typ übergeben werden muss, schließen Sie die {{CSP("require-trusted-types-for")}} Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein.
Mit dieser Direktive werden bei Übergabe von Strings in Sinks `TypeError` Ausnahmen ausgelöst:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}} CSP-Direktive verwendet werden, um zu kontrollieren, welche Richtlinien Ihr Code erstellen darf. Wenn Sie eine Richtlinie mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, geben Sie einen Namen für die Richtlinie an. Die `trusted-types` CSP-Direktive listet zulässige Richtliniennamen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn es einen Namen erhält, der nicht in `trusted-types` aufgelistet wurde. Dies verhindert, dass ein Code in Ihrer Webanwendung eine Richtlinie erstellt, die Sie nicht erwartet haben.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, an denen Sie noch Strings in Injection Sinks übergeben, sodass Sie den Code umschreiben können, um anstelle dessen vertrauenswürdige Typen zu erstellen und zu übergeben.

Wenn Sie eine Richtlinie namens `"default"` erstellen und Ihre CSP die Verwendung vertrauenswürdiger Typen erzwingt, wird jeder String-Argument, der in Injection Sinks übergeben wird, automatisch an diese Richtlinie weitergeleitet. Zum Beispiel, nehmen wir an, wir erstellen eine Richtlinie wie diese:

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Richtlinie wird, wenn Ihr Code einen String einem `innerHTML` zuweist, der Browser die `createHTML()` Methode der Richtlinie aufrufen und ihr Ergebnis dem Sink zuweisen:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgibt, wird der Browser einen `TypeError` auslösen, wenn das Ergebnis dem Sink zugewiesen wird:

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
> Es wird empfohlen, die Standardrichtlinie nur zu verwenden, während Sie den Übergang von legacy Code, der Eingaben direkt an Injection Sinks übergibt, zu Code, der vertrauenswürdige Typen explizit verwendet, durchführen.

### Injection Sink Interfaces

Dieser Abschnitt bietet eine Liste von "direkten" Injection Sink Interfaces.

Dies sind die API-Eigenschaften und -Methoden, die vertrauenswürdige Typen prüfen, wenn sie ausgewertet werden.
Sie können vertrauenswürdige Typen (`TrustedHTML`, `TrustedScript` oder `TrustedScriptURL`) sowie Strings übergeben und müssen vertrauenswürdige Typen übergeben, wenn die Durchsetzung vertrauenswürdiger Typen aktiviert ist und keine Standardrichtlinie definiert ist.

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
- `url` Argument an [`Worker()` Konstruktor](/de/docs/Web/API/Worker/Worker#url)
- `url` Argument an [`SharedWorker()` Konstruktor](/de/docs/Web/API/SharedWorker/SharedWorker#url)

### Indirekte Injection Sinks

_Indirekte Injection Sinks_ sind Sinks, bei denen unzuverlässige Strings über einen Zwischenmechanismus, der keine vertrauenswürdigen Typen akzeptiert oder erzwingt, in das DOM injiziert werden.
Diese unterscheiden sich von den "direkten" [Injection Sink Interfaces](#injection_sink_interfaces), die im vorherigen Abschnitt aufgeführt sind und bei ihrem Aufruf vertrauenswürdige Typprüfungen durchführen.

Zum Beispiel erstellt der folgende Code indirekt eine Script-Element-Quelle.
Zuerst wird ein Textknoten mit einem vom Benutzer bereitgestellten String erstellt und anschließend ein {{htmlelement("script")}} Element konstruiert und der Textknoten als Kindelement angehängt. Danach wird das Script-Element dem Dokument als Kind des {{htmlelement("body")}} Elements hinzugefügt — an diesem Punkt können die im ursprünglichen String definierten Skripte ausgeführt werden.

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

Wenn der Textknoten erstellt wird, gibt es keinen Grund für den Browser anzunehmen, er solle als vertrauenswürdige Typquelle verwendet werden, daher werden vertrauenswürdige Typen in Zeichenfolgen serialisiert und sind nicht erzwungen.

Stattdessen führen Browser die Prüfungen durch, wenn das Script-Element ausführbar wird — d.h. in diesem Beispiel, wenn `document.body.appendChild(script)` aufgerufen wird, um das Script-Element zum Dokument hinzuzufügen.

Der Browser prüft zuerst, ob der String, der als Skriptinhalt verwendet wird, vertrauenswürdig ist. Jede Operation, die es ermöglicht, die Textquelle eines {{htmlelement("script")}} zu ändern, ohne explizit ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) festzulegen, macht sie unzuverlässig.
Die oben verwendete Methode [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) ist nur ein Beispiel (weitere sind in den WPT Live Tests unter <https://wpt.live/trusted-types/script-enforcement-001.html> aufgeführt).

Wenn der String nicht vertrauenswürdig ist und vertrauenswürdige Typen erzwungen werden, wird der Browser versuchen, ein `TrustedScript` aus einer [Standardrichtlinie](#die_standardrichtlinie) zu erhalten, um es stattdessen als Quelle zu verwenden.
Wenn eine Standardrichtlinie nicht definiert ist oder kein `TrustedScript` zurückgibt wird, wird die Operation eine Ausnahme auslösen.

### Trusted Types Tinyfill

Der _Trusted Types Tinyfill_ unterstützt Sie bei der Arbeit mit Browsern, die die Trusted Types API selbst nicht unterstützen.

Das Tinyfill ist einfach folgendes:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Das heißt, es bietet eine Implementierung von `trustedTypes.createPolicy()`, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) Objekt zurückgibt, das übergeben wurde. Das `policyOptions` Objekt definiert Datenbereinigungsfunktionen, und diese Funktionen sollen Strings zurückgeben.

Mit diesem Tinyfill an Ort und Stelle, stellen wir uns vor, wir erstellen eine Richtlinie:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die vertrauenswürdige Typen unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML` Objekt erstellen wird, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML` Objekt kann dann an einen Injection Sink übergeben werden und wir können erzwingen, dass der Sink einen vertrauenswürdigen Typ und keinen String erhält.

In Browsern, die vertrauenswürdige Typen nicht unterstützen, gibt dieser Code ein Objekt mit einer `createHTML()` Funktion zurück, die ihre Eingaben bereinigt und als String zurückgibt. Der bereinigte String kann dann an einen Injection Sink übergeben werden.

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

So oder so erhält der Injection Sink bereinigte Daten, und da wir die Verwendung der Richtlinie im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad auch im nicht unterstützenden Browser durch die Bereinigungsfunktion geht.

Das bedeutet, dass solange Sie Ihren Code in einem unterstützenden Browser mit der `require-trusted-types-for` CSP-Direktive getestet haben, das Tinyfill ausreicht, um den gleichen Schutz zu bieten, selbst in Browsern, die die Trusted Types API nicht unterstützen.

Dies liegt daran, dass die Durchsetzung Sie dazu zwingt, Ihren Code so umzugestalten, dass alle Daten durch die Trusted Types API (und daher durch eine Bereinigungsfunktion) gehen, bevor sie an einen Injection Sink übergeben werden.
Wenn Sie den umgestalteten Code dann in einem anderen Browser ohne Durchsetzung ausführen, läuft er dennoch durch die gleichen Codepfade und bietet denselben Schutz.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt werden soll, der ihn als HTML rendern wird.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt werden soll, der zur Ausführung des Skripts führen könnte.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt werden soll, der ihn als URL einer externen Skriptressource analysieren wird.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zur Erstellung der oben genannten Trusted Type Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und überprüft, ob Trusted Type Objektinstanzen über eine der Richtlinien erstellt wurden.

### Erweiterungen anderer Schnittstellen

- [`Window.trustedTypes`](/de/docs/Web/API/Window/trustedTypes)
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Objekt zurück, das mit dem globalen Objekt im Hauptthread assoziiert ist.
    Dies ist der Einstiegspunkt für die Nutzung der API im Window-Thread.
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes).
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Objekt zurück, das mit dem globalen Objekt in einem Worker assoziiert ist.

### Erweiterungen zu HTTP

#### `Content-Security-Policy` Direktiven

- {{CSP("require-trusted-types-for")}}
  - : Erzwingt, dass Trusted Types an DOM-XSS [Injection Sinks](#konzepte_und_verwendung) übergeben werden.
- {{CSP("trusted-types")}}
  - : Wird verwendet, um eine Whitelist von Trusted Types Richtliniennamen anzugeben.

#### `Content-Security-Policy` Schlüsselwörter

- [`trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Ermöglicht die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und ähnlichen Funktionen, jedoch nur, wenn Trusted Types unterstützt und erzwungen werden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen wird. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Bereinigung von Eingaben in dem Artikel [Vermeiden Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
