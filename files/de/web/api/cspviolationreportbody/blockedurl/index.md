---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("Reporting API")}}

Die **`blockedURL`** schreibgeschützte Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist ein String-Wert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstoßen hat.

## Wert

Ein String, der einen Wert oder eine URL enthält, die die Richtlinie verletzende Ressource darstellt.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Strings sein:

- `inline`
  - : Eine eingebettete Ressource.
    Zum Beispiel ein eingebettetes Skript, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine Wasm-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) CSP-Direktive verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP-Direktive `trusted-types` aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) CSP-Direktive verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument verwendete keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), um Daten zu bereinigen, bevor sie an eine Senke wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die von derselben Domain in Ihr Skript importiert wird.
Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten.
Jedes Mal, wenn die Rückruffunktion aufgerufen wird, protokollieren wir die `blockedURL` des ersten Eintrags im Berichtsarray.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben kann. Der Kürze halber protokollieren wir nur die blockierte URL des ersten Berichts.

### blockedURL für eine externe Ressource

Das untenstehende HTML legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die nur Ressourcen von derselben Site erlaubt, und versucht dann, ein Skript von der externen Site `https://apis.google.com` zu laden.

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

### blockedURL für unsichere eingebettete Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `inline` führen würden.
Es legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die keine Ausführung von eingebetteten Skripten erlaubt, wodurch eine Verletzung verursacht wird, da die Seite ein eingebettetes Skript enthält.

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

Das untenstehende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `trusted-types-policy` führen würden.
Zuerst wird eine Richtlinie definiert, die `'unsafe-inline'`-Skripte auszuführen erlaubt, sodass wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die eine Verletzung auslöst.
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
> Das Ziel der Verwendung von trusted types besteht nicht darin, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung einer Richtlinie zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort ist und leicht geprüft werden kann.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, ist es eine CSP-Verletzung, und wir würden die folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, würde die Seite nicht mehr gegen die Richtlinie verstoßen.

### blockedURL für trusted-types-sink Ressourcen

Das untenstehende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `trusted-types-sink` führen würden.
Zuerst wird eine Richtlinie definiert, die `'unsafe-inline'`-Skripte auszuführen erlaubt, und wie im vorherigen Beispiel wird die `trusted-types`-Direktive verwendet, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich legt es die Direktive `require-trusted-types-for 'script'` fest, die durchsetzt, dass Senken nur Inhalte erhalten sollen, die mithilfe eines trusted types bereinigt wurden.

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

Die Methode `updateContent()` gibt unbereinigte Inhalte an die `innerHTML`-Eigenschaft des Elements weiter, was eine CSP-Verletzung verursacht.
Wir würden die folgende Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um die Verletzung zu vermeiden, müssten wir das Skript aktualisieren, um eine trusted type-Richtlinie zu definieren und diese zu verwenden, um die Eingaben, die an das Element übergeben werden, zu bereinigen:

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
