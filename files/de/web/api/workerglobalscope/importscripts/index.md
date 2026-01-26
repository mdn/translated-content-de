---
title: "WorkerGlobalScope: importScripts() Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: d359e01c8cbe5ace455a9d3d149a280dffcf0cf9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> Die an diese Methode übergebenen Parameter stellen die URLs von klassischen Skripten dar, die in einen Worker importiert werden sollen.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`importScripts()`** Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces importiert synchron ein oder mehrere Skripte in den Geltungsbereich eines [klassischen Workers](/de/docs/Web/API/Worker/Worker#module_and_classic_workers) (einen Worker, der aus einem klassischen Skript erstellt wurde).

Beachten Sie, dass die Methode nicht in [Modul-Workern](/de/docs/Web/API/Worker/Worker#module_and_classic_workers) verwendet werden kann, die stattdessen Abhängigkeiten mittels [`import` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/import) laden.

## Syntax

```js-nolint
importScripts(url0)
importScripts(url0, url1)
importScripts(url0, url1, /* …, */ urlN)
```

### Parameter

- `urlN`
  - : Eine Instanz von [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder ein String, der die URL des zu importierenden Skripts darstellt.
    Die URL kann absolut oder relativ sein.
    Ist sie relativ, bezieht sie sich auf die URL des Startskripts des Workers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne `text/javascript` Medien (MIME)-Typ oder ohne einen der erlaubten [veralteten JavaScript MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn eine URL nicht aufgelöst werden kann.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der aktuelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ein Modul ist (verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)).
    Es kann auch passieren, wenn ein Parameter kein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und die Seite [vertrauenswürdige Typen durchsetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Beschreibung

Die **`importScripts()`** Methode importiert synchron ein oder mehrere Skripte in den Geltungsbereich eines klassischen Workers.

Im Gegensatz zu dem initialen klassischen Modulskript, das mit seinem Dokument gleichen Ursprungs sein muss, kann diese Methode plattformübergreifende Skripte importieren, es sei denn, es wird durch eine {{httpheader("Cross-Origin-Resource-Policy")}}, [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) oder einen anderen Sicherheitsmechanismus blockiert.
Beachten Sie, dass klassische Skripte im `no-cors`-Modus abgerufen werden, sie können daher plattformübergreifend abgerufen werden, selbst wenn der Server nicht die passenden CORS-Header setzt.

### Sicherheitsüberlegungen

Die Parameter geben die Skripte an, die in den Geltungsbereich eines klassischen Workers importiert werden sollen.
Wenn die URLs der Skripte von einem Benutzer bereitgestellt werden, ist dies ein potenzieller Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, willkürliche URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrollieren, welche Skripte ausgeführt werden dürfen, indem sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Direktive verwendet (oder einen Fallback definiert in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
Dies kann Skripte auf die aktuelle Herkunft, eine spezifische Menge an Ursprüngen oder sogar bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Strings zuweisen.
Dies stellt sicher, dass der Eingabewert durch eine Transformationsfunktion übergeben wird, die die Möglichkeit hat, die URL abzulehnen oder zu verändern, bevor sie injiziert wird.

## Beispiele

### Grundlegende Nutzung

Wenn Sie eine Funktionalität haben, die in einem separaten Skript namens `foo.js` im selben Verzeichnis wie `worker.js` geschrieben ist, könnten Sie es mit der folgenden Zeile in den Worker importieren:

```js
importScripts("foo.js");
```

`importScripts()` und `self.importScripts()` sind effektiv gleichwertig — beide repräsentieren `importScripts()`, aufgerufen aus dem inneren Geltungsbereich des Workers.

Beachten Sie, dass wir Ihnen im nächsten Abschnitt zeigen, wie man einen `TrustedScriptURL` anstelle eines Strings übergibt.
Dies wurde in diesem Beispiel der Kürze halber weggelassen, wird jedoch im Produktionscode empfohlen.

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu mildern, sollten wir immer `TrustedScriptURL` Instanzen für jeden der Parameter zuweisen.
Wir müssen dies auch tun, wenn wir vertrauenswürdige Typen aus anderen Gründen durchsetzen und wir einige zugelassene Skriptquellen zulassen wollen (zum Beispiel durch `CSP: script-src`).

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, daher definieren wir zunächst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die vertrauenswürdigen Typen der JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) Methode definiert, um Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Instanzen zu transformieren.

Für das Beispiel nehmen wir an, dass wir eine vordefinierte Menge von URLs im `scriptAllowList` Array erlauben und alle anderen Skripte protokollieren wollen.

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

Dann verwenden wir das `policy` Objekt, um ein `TrustedScript` Objekt von einem potenziell unsicheren Eingabestring zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/import_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Das `TrustedScriptURL` Objekt kann nun beim Importieren des Skripts in einem klassischen Worker verwendet werden:

```js
importScripts(trustedScriptURL);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
