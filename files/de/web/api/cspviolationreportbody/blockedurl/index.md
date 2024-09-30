---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`blockedURL`**-Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist eine schreibgeschützte Zeichenfolge, die die Ressource darstellt, die blockiert wurde, weil sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält, die die Richtlinie verletzende Ressource darstellt.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein Inline-Skript, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine WASM-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die die [`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verletzt hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP `trusted-types`-Direktive aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die die [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verletzt hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu sanitisieren, bevor sie an eine Senke wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das einige der oben skizzierten `blockedURL`-Werte zur Folge hätte.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die von Ihrer Domain importiert wurde.
Das Script, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, loggen wir die `blockedURL` im ersten Eintrag des Berichte-Arrays.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann; aus Gründen der Kürze loggen wir jedoch nur die blockierte URL des ersten Berichts.

### blockedURL für eine externe Ressource

Das folgende HTML legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die nur Ressourcen vom gleichen Standort erlaubt zu laden, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

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

Das Ergebnis der Protokollierung der `blockedURL` wäre:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen.
Es setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die das Ausführen von Inline-Skripten nicht erlaubt, was zu einer Verletzung führt, weil die Seite ein Inline-Skript enthält.

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

Das Ergebnis der Protokollierung der `blockedURL` wäre:

```plain
blockedURL: inline
```

### blockedURL für trusted-types-policy Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen.
Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt, sodass wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die eine Verletzung auslöst.
Die Richtlinie verwendet auch die `trusted-types`-Direktive, um zu spezifizieren, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
      createHTML: (string) => {
        // Some (insufficient) sanitization code
        return string.replace(/</g, "&lt;");
      },
    });
  </script>
</html>
```

Im Skript wird eine Richtlinie mit dem Namen `somePolicy` erstellt.

> [!NOTE]
> Die oben definierte Richtlinie ist keine sehr gute Richtlinie.
> Der Zweck der Verwendung vertrauenswürdiger Typen besteht nicht darin, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung einer Richtlinie zu verlangen und sicherzustellen, dass der Sanitisierungscode an einem Ort und einfach zu überprüfen ist.

Da diese nicht in der `trusted-types`-Direktive aufgeführt ist, kommt es zu einer CSP-Verletzung, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, wäre die Seite nicht mehr in Verletzung.

### blockedURL für trusted-types-sink Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen.
Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt, und wie im vorherigen Beispiel wird die `trusted-types`-Direktive verwendet, um zu spezifizieren, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden kann.

Zudem wird die Direktive `require-trusted-types-for 'script'` festgelegt, die erzwingt, dass Senken nur mit Inhalten gefüllt werden sollen, die mit einem vertrauenswürdigen Typ saniert wurden.

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
    <button onclick="updateContent()">Update Content</button>
    <div id="content"></div>
  </body>

  <script>
    function updateContent() {
      const userInput = document.getElementById("userInput").value;

      // Passing unsanitized content - a violation of the policy
      document.getElementById("content").innerHTML = userInput;
    }
  </script>
</html>
```

Die Methode `updateContent()` übergibt ungesicherten Inhalt an die Eigenschaft `innerHTML` des Elements, die eine CSP-Verletzung auslöst.
Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um die Verletzung zu vermeiden, müssten wir das Skript aktualisieren, um eine vertraute Typenpolitik zu definieren und sie verwenden, um die eingehende Eingabe zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("myPolicy", {
  createHTML: (string) => {
    // Some (insufficient) sanitization code
    return string.replace(/</g, "&lt;");
  },
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
