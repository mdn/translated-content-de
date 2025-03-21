---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** gibt Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben durch eine benutzerdefinierte Transformationsfunktion geleitet wurden, bevor sie an eine API übergeben werden, die diese Eingabe möglicherweise ausführt. Dies kann helfen, clientseitige [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe zu verhindern. Meistens bereinigt die Transformationsfunktion die Eingabe.

## Konzepte und Verwendung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer erstellte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs sind als _Injection-Sinks_ bekannt.

Die Trusted Types API unterscheidet drei Arten von Injection-Sinks:

- **HTML-Sinks**: APIs, die ihre Eingaben als HTML interpretieren, wie zum Beispiel [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es in das HTML eingebettet ist, zum Beispiel in {{htmlelement("script")}}-Tags oder Ereignishandler-Attributen.
- **JavaScript-Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript-URL-Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungen gegen DOM-basierte XSS-Angriffe ist sicherzustellen, dass die Eingabe sicher gemacht wird, bevor sie an einen Injection-Sink übergeben wird.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben für einen Injection-Sink transformieren, um sie sicher zu machen. Das Policy-Objekt kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML-Sinks bereinigt die Transformationsfunktion typischerweise die Eingabe, zum Beispiel durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Richtlinie die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben (zum Beispiel spezifische URLs) zulassen.

Die Trusted Types API stellt dann sicher, dass Eingaben durch die entsprechende Transformationsfunktion geführt werden, bevor sie in den Sink übergeben werden.

Das heißt, die API ermöglicht Ihnen, Ihre Richtlinie an einem Ort zu definieren, und dann sicherzustellen, dass alle Daten, die an einen Injection-Sink übergeben werden, durch die Richtlinie geführt wurden.

> [!NOTE]
>
> Die Trusted Types API stellt _selbst keine Richtlinie oder Transformationsfunktionen_ bereit: Der Entwickler definiert seine eigene Richtlinie, die die Transformationen enthält, die er anwenden möchte.

Die API hat zwei Hauptteile:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu bereinigen, bevor sie an einen Injection-Sink übergeben werden.
- Zwei [CSP](/de/docs/Web/HTTP/Guides/CSP)-Direktiven erzwingen und kontrollieren die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API:

- Die globale Eigenschaft `trustedTypes`, die sowohl im [`Window`](/de/docs/Web/API/Window/trustedTypes)- als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes)-Kontext verfügbar ist, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted-Type-Objekte zu erstellen: Dabei werden die Daten durch eine Transformationsfunktion geführt.
- Trusted-Type-Objekte repräsentieren Daten, die durch die Richtlinie geführt wurden und daher sicher an einen Injection-Sink übergeben werden können. Es gibt drei Arten von Trusted-Types, die den verschiedenen Arten von Injection-Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist für die Übergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist für die Übergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist für die Übergabe an einen Sink, der die Daten als URL zu einem Skript parst.

Mit dieser API verwenden Sie anstelle der Übergabe eines Strings an einen Injection-Sink wie `innerHTML` eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen, übergeben es dann an den Sink und können sicher sein, dass der String durch eine Transformationsfunktion geführt wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte erstellen kann, indem die Eingabestrings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek bereinigt werden:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als Nächstes können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen, und dieses Objekt in den Injection-Sink übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Verwendung einer CSP zur Durchsetzung von Trusted Types

Die oben beschriebene API ermöglicht es Ihnen, Daten zu bereinigen, gewährleistet jedoch nicht, dass Ihr Code niemals direkt eine Eingabe an einen Injection-Sink übergibt: Das bedeutet, es hindert Sie nicht daran, einen String in `innerHTML` zu übergeben.

Um durchzusetzen, dass immer ein Trusted-Type übergeben werden muss, fügen Sie die {{CSP("require-trusted-types-for")}}-Direktive in Ihre [CSP](/de/docs/Web/HTTP/Guides/CSP) ein. Bei gesetzter Direktive führt das Übergeben von Strings an Injection-Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}}-CSP-Direktive verwendet werden, um zu kontrollieren, welche Richtlinien Ihr Code erstellen darf. Wenn Sie eine Richtlinie mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, übergeben Sie einen Namen für die Richtlinie. Die `trusted-types`-CSP-Direktive listet akzeptable Richtliniennamen auf, sodass `createPolicy()` eine Ausnahme wirft, wenn ihm ein Name übergeben wird, der nicht in `trusted-types` aufgeführt war. Dies verhindert, dass einige Codes in Ihrer Webanwendung eine nicht erwartete Richtlinie erstellen.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft, alle Stellen in Ihrem Code zu finden, an denen Sie noch Strings an Injection-Sinks übergeben, sodass Sie den Code umschreiben können, um stattdessen Trusted-Types zu erstellen und zu übergeben.

Wenn Sie eine Richtlinie mit dem Namen `"default"` erstellen und Ihre CSP die Verwendung von Trusted-Types erzwingt, wird jedes String-Argument, das an Injection-Sinks übergeben wird, automatisch an diese Richtlinie weitergeleitet. Erstellen wir beispielsweise eine solche Richtlinie:

```js
trustedTypes.createPolicy("default", {
  createHTML: (value) => {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Richtlinie, wenn Ihr Code einen String an `innerHTML` zuweist, ruft der Browser die `createHTML()`-Methode der Richtlinie auf und weist das Ergebnis dem Sink zu:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgegeben hat, wirft der Browser beim Zuordnen des Ergebnisses zum Sink eine `TypeError`-Ausnahme:

```js
trustedTypes.createPolicy("default", {
  createHTML: (value) => {
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
> Es wird empfohlen, die Standardrichtlinie nur zu verwenden, während Sie von Legacy-Code, der Eingaben direkt an Injection-Sinks übergibt, zu Code wechseln, der Trusted-Types explizit verwendet.

### Unterstützung von Trusted Types über verschiedene Browser hinweg

Die Trusted Types API ist noch nicht in allen modernen Browsern verfügbar, kann jedoch heute überall dank der [Kompatibilitätshilfen, die von der W3C erstellt wurden](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill), genutzt werden.

- Das [_vollständige_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht die CSP aus dem aktuellen Dokument zu inferieren, und erzwingt die Nutzung von Trusted-Types basierend auf der inferierten CSP.
- Das [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und beinhaltet nicht die Fähigkeit, die Nutzung von Trusted-Types mithilfe einer CSP zu erzwingen.

Neben diesen beiden Polyfills bietet die W3C ein sogenanntes _tinyfill_, das wir im Folgenden näher erläutern werden.

Beachten Sie, dass Sie, solange Sie Ihren Code auf einem unterstützenden Browser mit aktivierter CSP-Durchsetzung getestet haben, nicht das oben erwähnte _volle Polyfill_ auf anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem API-only Polyfill oder dem tinyfill erzielen.

Das liegt daran, dass die Durchsetzung Sie dazu zwingt, Ihren Code so umzugestalten, dass alle Daten durch die Trusted Types API geführt werden (und daher durch eine Bereinigungsfunktion geführt wurden), bevor sie an einen Injection-Sink übergeben werden.
Wenn Sie den umgestalteten Code dann in einem anderen Browser ohne Durchsetzung ausführen, wird er immer noch durch die gleichen Codepfade gehen und Ihnen den gleichen Schutz bieten.

#### Trusted Types tinyfill

In diesem Abschnitt werden wir untersuchen, wie das Trusted Types tinyfill eine Website schützen kann, auch wenn es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types tinyfill ist einfach folgendes:

```js
if (typeof trustedTypes == "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es bietet eine Implementierung von `trustedTypes.createPolicy()`, die einfach das übergebene [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt. Das `policyOptions`-Objekt definiert Bereinigungsfunktionen für Daten, und diese Funktionen sollen Strings zurückgeben.

Mit diesem tinyfill, falls wir eine Richtlinie erstellen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection-Sink übergeben werden, und wir können durchsetzen, dass der Sink einen Trusted-Type und keinen String erhalten hat.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, die ihre Eingaben bereinigt und sie als String zurückgibt. Der bereinigte String kann dann an einen Injection-Sink übergeben werden.

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

So oder so, der Injection-Sink erhält bereinigte Daten, und weil wir die Verwendung der Richtlinie im unterstützenden Browser erzwingen konnten, wissen wir, dass dieser Codepfad auch im nicht unterstützenden Browser durch die Bereinigungsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection-Sink eingesetzt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection-Sink eingesetzt wird, der zur Ausführung des Skripts führen könnte.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection-Sink eingesetzt wird, der ihn als URL einer externen Skriptressource parst.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die verwendet werden, um die oben genannten Trusted-Type-Objekte zu erstellen.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und überprüft, ob Trusted-Type-Objektinstanzen über eine der Richtlinien erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Wege zur Bereinigung von Eingaben im Artikel [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch als [npm-Paket](https://www.npmjs.com/package/trusted-types) verfügbar)
