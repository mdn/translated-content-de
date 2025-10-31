---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("Reporting API")}}

Die **`blockedURL`** schreibgeschützte Eigenschaft der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein Zeichenfolgenwert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält, die die Ressource repräsentiert, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Beispielsweise ein Inline-Skript, das genutzt wurde, obwohl [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Beispielsweise wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine Wasm-Auswertung.
    Beispielsweise wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) CSP-Direktive verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP-Direktive `trusted-types` aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu bereinigen, bevor sie an einen Sink wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werten führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die in Ihr Skript von derselben Domain importiert wird. Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Verstöße gegen Inhaltsrichtlinien vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Berichtarrays.

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

Beachten Sie, dass, obwohl möglicherweise mehrere Berichte im zurückgegebenen Array vorhanden sind, wir der Kürze halber nur die blockierte URL des ersten Berichts protokollieren.

### blockedURL für eine externe Ressource

Das untenstehende HTML setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die nur Ressourcen von derselben Seite erlaubt, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

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

Das Ergebnis des Loggens der `blockedURL` wäre:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen würden. Es setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die das Ausführen von Inline-Skripten nicht erlaubt, was zu einem Verstoß führt, weil die Seite ein Inline-Skript enthält.

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

Das Ergebnis des Loggens der `blockedURL` wäre:

```plain
blockedURL: inline
```

### blockedURL für trusted-types-policy-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden. Zuerst definiert es eine Richtlinie, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt, sodass wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die einen Verstoß auslöst. Die Richtlinie verwendet auch die Direktive `trusted-types`, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
> Die spezifische Richtlinie, die wir oben definiert haben, ist keine sehr gute Richtlinie.
> Das Ziel der Verwendung von Trusted Types ist nicht, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung einer Richtlinie zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort und leicht überprüfbar ist.

Da dies nicht in der `trusted-types` Direktive aufgeführt ist, ist es ein CSP-Verstoß, und wir würden die Log-Ausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der zugelassenen Richtlinie in `somePolicy` ändern würden, würde die Seite nicht mehr gegen die Richtlinie verstoßen.

### blockedURL für trusted-types-sink-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden. Zuerst definiert es eine Richtlinie, die das Ausführen von `'unsafe-inline'`-Skripten erlaubt, und wie im vorherigen Beispiel verwendet es die Direktive `trusted-types`, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` festgelegt, die durchsetzt, dass Sinks nur Inhalt übergeben werden sollte, der mit einem Trusted Type bereinigt wurde.

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

Die Methode `updateContent()` übergibt unbereinigten Inhalt an die `innerHTML`-Eigenschaft des Elements, was zu einem CSP-Verstoß führt. Wir würden die Log-Ausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Skript aktualisieren, um eine Trusted Type-Policy zu definieren und sie zu verwenden, um den an das Element übergebenen Eingabewert zu bereinigen:

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
