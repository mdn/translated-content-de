---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, sicherzustellen, dass Eingaben über eine benutzerdefinierte Transformationsfunktion geleitet werden, bevor sie an eine API weitergeleitet werden, die diese Eingaben ausführen könnte. Dies kann dazu beitragen, clientseitige [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe zu verhindern. Am häufigsten [desinfiziert](/de/docs/Web/Security/Attacks/XSS#sanitization) die Transformationsfunktion die Eingabe.

## Konzepte und Nutzung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Angreifer manipulierte Daten an eine Browser-API übergeben werden, die diese Daten als Code ausführt. Diese APIs werden als _Injection Sinks_ bezeichnet.

Die Trusted Types API unterscheidet drei Arten von Injection Sinks:

- **HTML Sinks**: APIs, die ihre Eingabe als HTML interpretieren, wie z.B. [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`document.write()`](/de/docs/Web/API/Document/write). Diese APIs könnten JavaScript ausführen, wenn es in das HTML eingebettet ist, z.B. in {{htmlelement("script")}}-Tags oder Event-Handler-Attributen.
- **JavaScript Sinks**: APIs, die ihre Eingaben als JavaScript interpretieren, wie z.B. {{jsxref("Global_Objects/eval", "eval()")}} oder [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text).
- **JavaScript URL Sinks**: APIs, die ihre Eingaben als URL eines Skripts interpretieren, wie [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src).

Eine der Hauptverteidigungsstrategien gegen DOM-basierte XSS-Angriffe besteht darin, sicherzustellen, dass die Eingaben sicher gemacht werden, bevor sie an einen Injection Sink weitergeleitet werden.

In der Trusted Types API definiert ein Entwickler ein _Policy-Objekt_, das Methoden enthält, die Eingaben, die an einen Injection Sink gebunden sind, transformieren, um sie sicher zu machen. Die Richtlinie kann unterschiedliche Methoden für die verschiedenen Arten von Sinks definieren:

- Für HTML Sinks desinfiziert die Transformationsfunktion typischerweise die Eingabe, beispielsweise durch die Verwendung einer Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify).
- Für JavaScript- und JavaScript-URL-Sinks kann die Richtlinie die Sinks vollständig deaktivieren oder bestimmte vordefinierte Eingaben erlauben (z.B. bestimmte URLs).

Die Trusted Types API stellt dann sicher, dass die Eingabe durch die entsprechende Transformationsfunktion geleitet wird, bevor sie in den Sink gelangt.

Das heißt, die API ermöglicht es Ihnen, Ihre Richtlinie an einer Stelle zu definieren und dann sicherzustellen, dass alle Daten, die an einen Injection Sink übergeben werden, ebenfalls durch die Richtlinie geleitet wurden.

> [!NOTE]
>
> Die Trusted Types API liefert _nicht_ selbst eine Richtlinie oder irgendwelche Transformationsfunktionen: Der Entwickler definiert seine eigene Richtlinie, die die Transformationen enthält, die er anwenden möchte.

Die API besteht aus zwei Hauptteilen:

- Eine JavaScript-API ermöglicht es einem Entwickler, Daten zu desinfizieren, bevor er sie an einen Injection Sink weitergibt.
- Zwei [CSP](/de/docs/Web/HTTP/CSP)-Richtlinien erzwingen und steuern die Nutzung der JavaScript-API.

### Die Trusted Types JavaScript API

In der Trusted Types API gilt:

- Die globale Eigenschaft `trustedTypes`, verfügbar in sowohl [`Window`](/de/docs/Web/API/Window/trustedTypes) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) Kontexten, wird verwendet, um [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekte zu erstellen.
- Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt wird verwendet, um Trusted Type-Objekte zu erstellen: Es wird dies tun, indem es die Daten durch eine Transformationsfunktion leitet.
- Trusted Type-Objekte repräsentieren Daten, die durch die Richtlinie gegangen sind und können daher sicher an einen Injection Sink weitergegeben werden. Es gibt drei Arten von Trusted Type, die den verschiedenen Arten von Injection Sinks entsprechen:
  - [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) ist für die Übergabe an einen Sink, der die Daten als HTML rendert.
  - [`TrustedScript`](/de/docs/Web/API/TrustedScript) ist für die Übergabe an einen Sink, der die Daten als JavaScript ausführt.
  - [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist für die Übergabe an einen Sink, der die Daten als URL zu einem Skript parst.

Mit dieser API verwenden Sie anstelle der Übergabe eines Strings an einen Injection Sink wie `innerHTML` eine `TrustedTypePolicy`, um ein `TrustedHTML`-Objekt aus dem String zu erstellen, geben dieses dann an den Sink weiter und können sicher sein, dass der String durch eine Transformationsfunktion geleitet wurde.

Zum Beispiel erstellt dieser Code eine `TrustedTypePolicy`, die `TrustedHTML`-Objekte durch Desinfektion der Eingabestrings mit der [DOMPurify](https://github.com/cure53/DOMPurify)-Bibliothek erstellen kann:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Als nächstes können Sie dieses `policy`-Objekt verwenden, um ein `TrustedHTML`-Objekt zu erstellen, und dieses Objekt in den Injection Sink übergeben:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### Eine CSP zur Durchsetzung von Trusted Types verwenden

Die oben beschriebene API ermöglicht es Ihnen, Daten zu desinfizieren, sie stellt jedoch nicht sicher, dass Ihr Code niemals Eingaben direkt an einen Injection Sink weitergibt: Das heißt, sie verhindert nicht, dass Sie einen String in `innerHTML` übergeben.

Um zu erzwingen, dass immer ein Trusted Type übergeben werden muss, fügen Sie die {{CSP("require-trusted-types-for")}}-Richtlinie in Ihre [CSP](/de/docs/Web/HTTP/CSP) ein.
Mit dieser Richtlinie führt die Übergabe von Strings an Injection Sinks zu einer `TypeError`-Ausnahme:

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // Throws a TypeError
```

Zusätzlich kann die {{CSP("trusted-types")}} CSP-Richtlinie verwendet werden, um zu kontrollieren, welche Richtlinien Ihr Code erstellen darf. Wenn Sie eine Richtlinie mit [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen, übergeben Sie einen Namen für die Richtlinie. Die `trusted-types`-CSP-Richtlinie listet zulässige Richtliniennamen auf, sodass `createPolicy()` eine Ausnahme auslöst, wenn ihr ein Name übergeben wird, der nicht in `trusted-types` aufgeführt ist. Dies verhindert, dass ein Code in Ihrer Webanwendung eine Richtlinie erstellt, mit der Sie nicht gerechnet haben.

### Die Standardrichtlinie

In der Trusted Types API können Sie eine _Standardrichtlinie_ definieren. Dies hilft Ihnen, alle Stellen in Ihrem Code zu finden, an denen Sie noch Strings an Injection Sinks übergeben, damit Sie den Code umschreiben können, um stattdessen Trusted Types zu erstellen und zu übergeben.

Wenn Sie eine Richtlinie namens `"default"` erstellen und Ihre CSP die Verwendung von Trusted Types erzwingt, wird jedes String-Argument, das an Injection Sinks übergeben wird, automatisch an diese Richtlinie weitergegeben. Wenn wir beispielsweise eine Richtlinie wie diese erstellen:

```js
trustedTypes.createPolicy("default", {
  createHTML: (value) => {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

Mit dieser Richtlinie wird, wenn Ihr Code einen String an `innerHTML` zuweist, der Browser die Methode `createHTML()` der Richtlinie aufrufen und deren Ergebnis dem Sink zuweisen:

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// Logs "Please refactor this code"
// Assigns the result of sanitize(userInput)
```

Wenn die Standardrichtlinie `null` oder `undefined` zurückgibt, wirft der Browser beim Zuweisen des Ergebnisses an den Sink eine `TypeError`-Ausnahme:

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
> Es wird empfohlen, die Standardrichtlinie nur zu verwenden, während Sie von Legacy-Code, der Eingaben direkt an Injection Sinks übergibt, zu Code wechseln, der Trusted Types explizit verwendet.

### Unterstützung für Trusted Types in verschiedenen Browsern

Die Trusted Types API ist in modernen Browsern noch nicht überall verfügbar, aber sie ist dank [von der W3C erstellten Kompatibilitätshilfen](https://github.com/w3c/trusted-types/tree/main?tab=readme-ov-file#polyfill) heute überall nutzbar.

- Das [_vollständige_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/full.js) definiert die JavaScript-API, versucht die CSP aus dem aktuellen Dokument abzuleiten, und erzwingt die Verwendung von Trusted Types basierend auf der abgeleiteten CSP.
- Das [_nur API_ Polyfill](https://github.com/w3c/trusted-types/blob/main/src/polyfill/api_only.js) definiert nur die JavaScript-API und bietet nicht die Möglichkeit, die Verwendung von Trusted Types mit einer CSP zu erzwingen.

Neben diesen beiden Polyfills bietet die W3C das sogenannte _tinyfill_, das wir weiter unten genauer erläutern werden.

Beachten Sie, dass solange Sie Ihren Code in einem unterstützenden Browser mit aktiviertem CSP getestet haben, Sie das _vollständige Polyfill_ nicht in anderen Browsern verwenden müssen — Sie können die gleichen Vorteile mit dem _nur API Polyfill_ oder dem _tinyfill_ erzielen.

Dies liegt daran, dass die Durchsetzung Sie zwingt, Ihren Code so zu refaktorisieren, dass alle Daten durch die Trusted Types API (und daher durch eine Desinfektionsfunktion) geleitet werden, bevor sie an einen Injection Sink übergeben werden.
Wenn Sie dann den refaktorierten Code in einem anderen Browser ohne Durchsetzung ausführen, wird er immer noch denselben Codepfaden folgen und Ihnen denselben Schutz geben.

#### Trusted Types tinyfill

In diesem Abschnitt schauen wir uns an, wie das Trusted Types tinyfill eine Website schützen kann, obwohl es überhaupt keine Unterstützung für Trusted Types hinzufügt.

Das Trusted Types tinyfill besteht einfach daraus:

```js
if (typeof trustedTypes == "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Es stellt eine Implementierung von `trustedTypes.createPolicy()` bereit, die einfach das [`policyOptions`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions)-Objekt zurückgibt, das übergeben wurde. Das `policyOptions`-Objekt definiert Desinfektionsfunktionen für Daten, und diese Funktionen sollen Strings zurückgeben.

Mit diesem tinyfill können wir eine Richtlinie erstellen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In Browsern, die Trusted Types unterstützen, wird dies eine `TrustedTypePolicy` zurückgeben, die ein `TrustedHTML`-Objekt erstellt, wenn wir `policy.createHTML()` aufrufen. Das `TrustedHTML`-Objekt kann dann an einen Injection Sink übergeben werden, und wir können erzwingen, dass der Sink einen Trusted Type und nicht einen String erhält.

In Browsern, die Trusted Types nicht unterstützen, wird dieser Code ein Objekt mit einer `createHTML()`-Funktion zurückgeben, die ihre Eingabe desinfiziert und als String zurückgibt. Der desinfizierte String kann dann an einen Injection Sink übergeben werden.

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

In jedem Fall erhält der Injection Sink desinfizierte Daten, und weil wir die Verwendung der Richtlinie im unterstützenden Browser durchsetzen konnten, wissen wir, dass dieser Codepfad im nicht unterstützenden Browser ebenfalls durch die Desinfektionsfunktion geht.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der dazu führen kann, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als URL einer externen Skriptressource parst.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zum Erstellen der oben genannten Trusted Type-Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und überprüft, dass Trusted Type-Objektinstanzen über eine der Richtlinien erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen desinfizierten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der desinfizierte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingebettet werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie weitere Möglichkeiten zur Desinfektion von Eingaben im Artikel [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (ebenfalls verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
