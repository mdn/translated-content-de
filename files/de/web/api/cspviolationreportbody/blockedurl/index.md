---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Reporting API")}}

Die **`blockedURL`** schreibgeschützte Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist ein Zeichenfolgenwert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

## Wert

Eine Zeichenkette, die einen Wert oder eine URL enthält, die die Ressource repräsentiert, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

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
  - : Eine Ressource, die gegen die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verstößt.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) unter einem Namen erstellt, der nicht in der CSP-`trusted-types`-Direktive aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verstößt.
    Zum Beispiel war die Direktive auf `script` gesetzt, aber das Dokument nutzte keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), um Daten zu bereinigen, bevor sie an einen Sink wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei mit dem Namen `main.js` haben, die in Ihrem Skript von derselben Domain importiert wird.
Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichtsmeldungen über Richtlinienverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Bericht-Arrays.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben könnte, wir jedoch der Kürze halber nur die blockierte URL des ersten Berichts protokollieren.

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

Das Ergebnis des Protokollierens der `blockedURL` wäre:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen würden.
Es setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die keine Ausführung von Inline-Skripten erlaubt, was zu einem Verstoß führt, da die Seite ein Inline-Skript enthält.

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

### blockedURL für trusted-types-policy-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden.
Zuerst wird eine Richtlinie definiert, die erlaubt, `'unsafe-inline'`-Skripte auszuführen, sodass wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die einen Verstoß auslöst.
Die Richtlinie verwendet auch die `trusted-types`-Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
> Die spezielle Richtlinie, die wir oben definiert haben, ist keine sehr gute Richtlinie.
> Der Zweck der Verwendung vertrauenswürdiger Typen besteht nicht darin, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung _irgendeiner_ Richtlinie zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort und einfach zu überprüfen ist.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, stellt es einen CSP-Verstoß dar, und wir würden folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie zu `somePolicy` ändern würden, wäre die Seite nicht mehr in Verstoß.

### blockedURL für trusted-types-sink-Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden.
Zuerst wird eine Richtlinie definiert, die erlaubt, `'unsafe-inline'`-Skripte auszuführen, und wie im vorherigen Beispiel wird die `trusted-types`-Direktive verwendet, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die `require-trusted-types-for 'script'`-Direktive festgelegt, die durchsetzt, dass Sinks nur Inhalte übergeben bekommen sollen, die mit einem vertrauenswürdigen Typ bereinigt wurden.

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

Die Methode `updateContent()` übergibt unbereinigte Inhalte an die `innerHTML`-Eigenschaft des Elements, was zu einem CSP-Verstoß führen wird.
Wir würden folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Skript aktualisieren, um eine Richtlinie für vertrauenswürdige Typen zu definieren und sie zur Bereinigung der an das Element übergebenen Eingaben zu verwenden:

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
