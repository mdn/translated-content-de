---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die **`blockedURL`**-Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Zeichenkette darstellt, die die Ressource repräsentiert, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstößt.

## Wert

Eine Zeichenkette, die einen Wert oder eine URL enthält, die die Ressource repräsentiert, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenketten sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein Inline-Script, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) wurde nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine WASM-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#wasm-unsafe-eval) wurde nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die [`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)-Richtlinie der CSP verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP-`trusted-types`-Richtlinie aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)-Richtlinie der CSP verstoßen hat.
    Zum Beispiel wurde die Richtlinie auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu bereinigen, bevor sie an einen Sink wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben genannten `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` von derselben Domain aus in Ihr Script importiert haben. Das unten gezeigte Script erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Inhaltsverletzungsberichte vom Typ `"csp-violation"` zu beobachten. Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` des ersten Eintrags im Berichts-Array.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben könnte, aber aus Gründen der Kürze protokollieren wir nur die blockierte URL des ersten Berichts.

### blockedURL für eine externe Ressource

Das folgende HTML setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die nur Ressourcen von derselben Seite zu laden erlaubt, und versucht dann, ein Script von der externen Seite `https://apis.google.com` zu laden.

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

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `inline` führen würden. Dies setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die das Ausführen von Inline-Scripts nicht erlaubt, was zu einem Verstoß führt, da die Seite ein Inline-Script enthält.

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

### blockedURL für trusted-types-policy-Ressourcen

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden. Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Scripts erlaubt, damit wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die einen Verstoß auslöst. Die Richtlinie verwendet auch die `trusted-types`-Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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

Im Script wird eine Richtlinie mit dem Namen `somePolicy` erstellt.

> [!NOTE]
> Die oben definierte Richtlinie ist keine sehr gute Richtlinie.
> Das Ziel, vertrauenswürdige Typen zu verwenden, ist nicht die Durchsetzung einer _bestimmten_ Richtlinie, sondern die Durchsetzung einer Richtlinie und sicherzustellen, dass der Bereinigungscode an einem Ort ist und leicht zu überprüfen ist.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, handelt es sich um einen CSP-Verstoß, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, wäre die Seite nicht mehr in Verletzung.

### blockedURL für trusted-types-sink-Ressourcen

Das folgende HTML demonstriert die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden. Zuerst wird eine Richtlinie definiert, die das Ausführen von `'unsafe-inline'`-Scripts erlaubt, und wie im vorherigen Beispiel wird die `trusted-types`-Direktive verwendet, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` spezifiziert, die durchsetzt, dass Sinks nur Inhalte übergeben werden, die mit einem vertrauenswürdigen Typ bereinigt wurden.

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

Die `updateContent()`-Methode übergibt nicht bereinigten Inhalt an die `innerHTML`-Eigenschaft des Elements, was einen CSP-Verstoß verursacht. Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Script aktualisieren, um eine vertrauenswürdige Typenrichtlinie zu definieren und sie zu verwenden, um die Eingabe zu bereinigen, die an das Element übergeben wird:

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
