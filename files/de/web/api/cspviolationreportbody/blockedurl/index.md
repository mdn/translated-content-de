---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`blockedURL`** des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein String-Wert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

## Wert

Ein String, der einen Wert oder eine URL enthält, die die Richtlinienverletzung darstellt.

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
  - : Eine Ressource, die gegen die CSP-Direktive [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt, deren Name nicht in der CSP `trusted-types`-Direktive aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu bereinigen, bevor sie an einen Sink wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben aufgeführten `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die in Ihr Skript von derselben Domain importiert wird.
Das Skript, das unten gezeigt wird, erstellt eine neue [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Berichtsarrays.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, wir zur Kürze jedoch nur die blockierte URL des ersten Berichts protokollieren.

### blockedURL für eine externe Ressource

Das folgende HTML legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die nur das Laden von Ressourcen von derselben Website erlaubt, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

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

Das Ergebnis des Protokollierens der `blockedURL` würde sein:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `inline` führen würden.
Dies setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die es nicht erlaubt, Inline-Skripte auszuführen, was zu einer Verletzung führt, da die Seite ein Inline-Skript enthält.

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

Das Ergebnis des Protokollierens der `blockedURL` würde sein:

```plain
blockedURL: inline
```

### blockedURL für trusted-types-policy Ressourcen

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden.
Zuerst definiert es eine Richtlinie, die `'unsafe-inline'`-Skripte erlaubt, damit wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die eine Verletzung auslösen wird.
Die Richtlinie nutzt auch die `trusted-types`-Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self' 'report-sample' 'unsafe-inline'; trusted-types myPolicy" />
    <script src="main.js"></script>
  </head>

  <body></body>

  <script>
    const policy = trustedTypes.createPolicy("somePolicy", {
      // Some (insufficient) sanitization code
      createHTML: (string) => string.replace(/</g, "&lt;"),
    });
  </script>
</html>
```

Im Skript wird eine Richtlinie mit dem Namen `somePolicy` erstellt.

> [!NOTE]
> Die oben definierte Politik ist keine sehr gute Politik.
> Das Ziel der Verwendung von Trusted Types ist es nicht, eine _bestimmte_ Politik durchzusetzen, sondern die Durchsetzung einer beliebigen Politik zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort ist und leicht überprüft werden kann.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, handelt es sich um einen CSP-Verstoß, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Politik in `somePolicy` ändern würden, wäre die Seite nicht mehr im Verstoß.

### blockedURL für trusted-types-sink Ressourcen

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden.
Zuerst definiert es eine Richtlinie, die `'unsafe-inline'`-Skripte erlaubt, und wie im vorherigen Beispiel wird die `trusted-types`-Direktive genutzt, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich spezifiziert es die Direktive `require-trusted-types-for 'script'`, die erzwingt, dass Sinks nur Inhalte übergeben werden, die mit einem vertrauenswürdigen Typ bereinigt wurden.

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
  </body>

  <script>
    function updateContent() {
      const userInput = document.getElementById("userInput").value;

      // Passing unsanitized content - a violation of the policy
      document.getElementById("content").innerHTML = userInput;
    }

    document.querySelector("button").addEventListener("click", updateContent);
  </script>
</html>
```

Die Methode `updateContent()` übergibt unbereinigten Inhalt an die `innerHTML`-Eigenschaft des Elements, was einen CSP-Verstoß verursacht.
Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Skript aktualisieren, um eine Trusted Type Policy zu definieren, und diese verwenden, um den an das Element übergebenen Input zu bereinigen:

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
