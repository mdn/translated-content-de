---
title: 'CSPViolationReport: Eigenschaft "blockedURL"'
short-title: blockedURL
slug: Web/API/CSPViolationReport/blockedURL
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}

Die **`blockedURL`**-Eigenschaft des [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)-Wörterbuchs ist ein String-Wert, der die Ressource darstellt, die blockiert wurde, weil sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt.

## Wert

Ein String, der einen Wert oder eine URL enthält, die die Ressource darstellt, die die Richtlinie verletzt hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er eine der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein Inline-Skript, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine Wasm-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) CSP-Direktive verletzte.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen aufgerufen wurde, der in der CSP-`trusted-types`-Direktive nicht aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) CSP-Direktive verletzte.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument verwendete keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), um Daten zu bereinigen, bevor sie an eine Senke wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei mit dem Namen `main.js` haben, die in Ihr Skript von derselben Domain importiert wird. Das unten gezeigte Skript erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Bericht-Arrays.

```js
const observer = new ReportingObserver(
  (reports, observer) => {
    console.log(`blockedURL: ${reports[0].body.blockedURL}`);
  },
  {
    types: ["csp-violation"],
    buffered: true,
  },
);

observer.observe();
```

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir aber aus Gründen der Kürze nur die blockierte URL des ersten Berichts protokollieren.

### blockedURL für eine externe Ressource

Das folgende HTML setzt eine Richtlinie `Content-Security-Policy: default-src 'self'`, die nur Ressourcen von derselben Site erlaubt und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    <script src="main.js"></script>
  </head>
  <body>
    <!-- This should generate a CSP violation -->
    <script src="https://apis.google.com/js/platform.js"></script>
  </body>
</html>
```

Das Ergebnis des Protokollierens der `blockedURL` wäre:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen würden. Es setzt eine Richtlinie `Content-Security-Policy: default-src 'self'`, die das Ausführen von Inline-Skripten nicht erlaubt, wodurch eine Verletzung entsteht, da die Seite ein Inline-Skript enthält.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    <script src="main.js"></script>
  </head>
  <body>
    <script>
      const int = 4;
    </script>
  </body>
</html>
```

Das Ergebnis des Protokollierens der `blockedURL` wäre:

```plain
blockedURL: inline
```

### blockedURL für "trusted-types-policy"-Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden. Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt, damit wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die eine Verletzung auslöst. Die Richtlinie verwendet außerdem die `trusted-types`-Direktive, um zu spezifizieren, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' 'report-sample' 'unsafe-inline'; trusted-types myPolicy" />
    <script src="main.js"></script>
  </head>

  <body>
    <script>
      const policy = trustedTypes.createPolicy("somePolicy", {
        // Some (insufficient) sanitization code
        createHTML: (string) => string.replace(/</g, "&lt;"),
      });
    </script>
  </body>
</html>
```

Im Skript wird eine Richtlinie mit dem Namen `somePolicy` erstellt.

> [!NOTE]
> Die oben definierte Richtlinie ist keine besonders gute Richtlinie.
> Das Ziel der Verwendung von vertrauenswürdigen Typen ist nicht die Durchsetzung einer _bestimmten_ Richtlinie, sondern die Anforderung der Durchsetzung irgendeiner Richtlinie und die Gewährleistung, dass der Bereinigungscode an einer Stelle und leicht überprüfbar ist.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, liegt eine CSP-Verletzung vor, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, wäre die Seite nicht mehr in Verletzung.

### blockedURL für "trusted-types-sink"-Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden. Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt und wie im vorherigen Beispiel die `trusted-types`-Direktive verwendet, um zu spezifizieren, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` spezifiziert, die durchsetzt, dass Senken nur Inhalte übergeben werden, die mit einem vertrauenswürdigen Typ bereinigt wurden.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' 'report-sample' 'unsafe-inline'; trusted-types 'myPolicy'; require-trusted-types-for 'script'" />
    <script src="main.js"></script>
  </head>
  <body>
    <input type="text" id="userInput" />
    <button>Update Content</button>
    <div id="content"></div>

    <script>
      function updateContent() {
        const userInput = document.getElementById("userInput").value;

        // Passing unsanitized content - a violation of the policy
        document.getElementById("content").innerHTML = userInput;
      }

      document.querySelector("button").addEventListener("click", updateContent);
    </script>
  </body>
</html>
```

Die Methode `updateContent()` übergibt unbereinigten Inhalt an die `innerHTML`-Eigenschaft des Elements, was zu einer CSP-Verletzung führen wird. Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um die Verletzung zu vermeiden, müssten wir das Skript aktualisieren, um eine Richtlinie für vertrauenswürdige Typen zu definieren und diese verwenden, um die an das Element übergebenen Eingaben zu bereinigen:

```js
const policy = trustedTypes.createPolicy("myPolicy", {
  // Some (insufficient) sanitization code
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

function updateContent() {
  const userInput = document.getElementById("userInput").value;
  const sanitizedInput = policy.createHTML(userInput);
  document.getElementById("content").innerHTML = sanitizedInput;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SecurityPolicyViolationEvent.blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI)
