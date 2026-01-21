---
title: "WorkerGlobalScope: importScripts() Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 25f4f226c72b5c7c6574857e34d75693e9de7b0a
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> Die an diese Methode übergebenen Parameter repräsentieren die URLs von klassischen Skripten, die in einen Worker importiert werden sollen.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`importScripts()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle importiert synchron ein oder mehrere Skripte in den Geltungsbereich eines [klassischen Workers](/de/docs/Web/API/Worker/Worker#module_and_classic_workers) (ein Worker, der aus einem klassischen Skript konstruiert wurde).

Beachten Sie, dass die Methode nicht in [Modul-Workern](/de/docs/Web/API/Worker/Worker#module_and_classic_workers) verwendet werden kann, die stattdessen Abhängigkeiten mithilfe von [`import`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) laden.

## Syntax

```js-nolint
importScripts(url0)
importScripts(url0, url1)
importScripts(url0, url1, /* …, */ urlN)
```

### Parameter

- `urlN`
  - : Eine Instanz von [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder eine Zeichenkette, die die URL des zu importierenden Skripts darstellt.
    Die URL kann absolut oder relativ sein.
    Wenn die URL relativ ist, ist sie relativ zur URL des Einstiegsskripts des Workers.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne einen `text/javascript`-Medientyp (MIME) oder ohne einen der erlaubten [Legacy-JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("SyntaxError")}}
  - : Ausgelöst, wenn eine URL nicht aufgelöst werden kann.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der aktuelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ein Modul ist (verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)).
    Dies kann auch passieren, wenn ein Parameter kein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und die Seite [Trusted Types durchsetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Beschreibung

Die **`importScripts()`**-Methode importiert synchron ein oder mehrere Skripte in den Geltungsbereich eines klassischen Workers.

Im Gegensatz zum anfänglichen klassischen Modulskript, das mit seinem Dokument gleichen Ursprungs sein muss, kann diese Methode skripte über Ursprungsgrenzen hinweg importieren, es sei denn, dies wird durch einen {{httpheader("Cross-Origin-Resource-Policy")}}, eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) oder einen anderen Sicherheitsmechanismus blockiert.
Beachten Sie, dass klassische Skripte im `no-cors`-Modus abgerufen werden, sodass sie über Ursprungsgrenzen hinweg abgerufen werden können, selbst wenn der Server nicht die entsprechenden CORS-Header setzt.

### Sicherheitsüberlegungen

Die Parameter geben Skripte an, die in den Geltungsbereich eines klassischen Workers importiert werden sollen.
Wenn die URLs der Skripte von einem Benutzer bereitgestellt werden, ist dies ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, willkürliche URLs von unzuverlässigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrolle darüber haben, welche Skripte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) und der ???directive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) (oder einem Fallback, das in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definiert ist) ausgeführt werden dürfen.
Dies kann Skripte auf solche vom aktuellen Ursprung, einer bestimmten Menge von Ursprüngen oder sogar bestimmten Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion weitergeleitet wird, die die Möglichkeit hat, die URL vor der Injektion abzulehnen oder zu ändern.

## Beispiele

### Grundlegende Verwendung

Wenn Sie einige Funktionen in einem separaten Skript namens `foo.js` im gleichen Verzeichnis wie `worker.js` geschrieben hätten, könnten Sie es mit der folgenden Zeile in den Worker importieren:

```js
importScripts("foo.js");
```

`importScripts()` und `self.importScripts()` sind im Wesentlichen gleichwertig — beide repräsentieren `importScripts()`, das aus dem inneren Geltungsbereich des Workers aufgerufen wird.

Beachten Sie, dass wir Ihnen im nächsten Abschnitt zeigen, wie Sie anstelle einer Zeichenfolge ein `TrustedScriptURL` übergeben können.
Dies wurde in diesem Beispiel der Kürze halber weggelassen, wird jedoch in Produktivcode empfohlen.

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu mindern, sollten wir stets `TrustedScriptURL`-Instanzen an jeden der Parameter zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen Trusted Types durchsetzen und einige Skriptquellen zulassen wollen, die erlaubt sind (zum Beispiel durch `CSP: script-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst die [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels gehen wir davon aus, dass wir eine vordefinierte Menge von URLs im `scriptAllowList`-Array zulassen und andere Skripte protokollieren wollen.

```js
const scriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in scriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Dann verwenden wir das `policy`-Objekt, um ein `TrustedScript`-Objekt aus einer potenziell unsicheren Eingabezeichenfolge zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/import_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Das `TrustedScriptURL`-Objekt kann jetzt beim Importieren des Skripts in einem klassischen Worker verwendet werden:

```js
importScripts(trustedScriptURL);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
