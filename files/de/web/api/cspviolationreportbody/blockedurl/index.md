---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`blockedURL`** der Schnittstelle [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) ist ein Zeichenfolgenwert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält, die die Ressource darstellt, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein Inline-Skript, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben wurde.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine Wasm-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die CSP-Direktive [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP-Direktive `trusted-types` aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu bereinigen, bevor diese an eine Senke wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werte führen würde.

Es wird davon ausgegangen, dass Sie eine JavaScript-Datei namens `main.js` haben, die von derselben Domäne in Ihr Skript importiert wird. Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Berichts-Arrays.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben könnte, der Einfachheit halber protokollieren wir jedoch nur die blockierte URL des ersten Berichts.

### blockedURL für eine externe Ressource

Das nachfolgende HTML legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die nur Ressourcen von der gleichen Site zulässt, und versucht dann, ein Skript von der externen Site `https://apis.google.com` zu laden.

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

### blockedURL für unsafe-inline Ressourcen

Das nachfolgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen würden. Es legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die keine Inline-Skripte ausführen lässt und dadurch eine Verletzung verursacht, da die Seite ein Inline-Skript enthält.

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

### blockedURL für trusted-types-policy Ressourcen

Das nachfolgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden. Zuerst definiert es eine Richtlinie, die `'unsafe-inline'`-Skripte zulässt, damit wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die eine Verletzung auslöst. Die Richtlinie verwendet auch die `trusted-types`-Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
> Die oben definierte Richtlinie ist keine besonders gute Richtlinie.
> Ziel der Verwendung von Trusted Types ist es nicht, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung irgendeiner Richtlinie zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort ist und einfach überprüft werden kann.

Da dies nicht in der `trusted-types`-Direktive aufgelistet ist, ist es eine CSP-Verletzung, und wir würden die folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern, würde die Seite nicht mehr gegen die Richtlinie verstoßen.

### blockedURL für trusted-types-sink Ressourcen

Das nachfolgende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden. Zuerst definiert es eine Richtlinie, die `'unsafe-inline'`-Skripte zulässt, und wie im vorherigen Beispiel verwendet es die `trusted-types`-Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` angegeben, die erzwingt, dass Senken nur Inhalte erhalten, die mit einem vertrauenswürdigen Typ bereinigt wurden.

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

Die Methode `updateContent()` übergibt unsichere Inhalte an die `innerHTML`-Eigenschaft des Elements, was eine CSP-Verletzung verursacht. Wir würden die folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um die Verletzung zu vermeiden, müssten wir das Skript aktualisieren, um eine Trusted Type Policy zu definieren und diese zu verwenden, um die Eingaben zu bereinigen, die an das Element übergeben werden:

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
