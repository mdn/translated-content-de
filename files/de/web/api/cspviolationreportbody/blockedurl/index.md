---
title: "CSPViolationReportBody: blockedURL Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Reporting API")}}

Die **`blockedURL`** schreibgeschützte Eigenschaft des [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Interfaces ist ein Zeichenfolgewert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verstößt.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält, der die Ressource darstellt, die gegen die Richtlinie verstoßen hat.

Wenn es sich bei dem Wert nicht um die URL einer Ressource handelt, muss er einer der folgenden Zeichenfolgen sein:

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
  - : Eine Ressource, die gegen die [`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellt, indem [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) mit einem Namen verwendet wurde, der nicht in der CSP-`trusted-types`-Direktive aufgeführt ist.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)-CSP-Direktive verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) verwendet, um Daten zu bereinigen, bevor sie an eine Senke wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das einige der oben beschriebenen `blockedURL`-Werte zur Folge hätte.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die aus demselben Domain in Ihr Skript importiert wird.
Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Verstöße gegen den Inhaltsrichtlinienbericht vom Typ `"csp-violation"` zu überwachen.
Jedes Mal, wenn die Callback-Funktion aufgerufen wird, protokollieren wir die `blockedURL` im ersten Eintrag des Berichtsarrays.

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

Beachten Sie, dass es mehrere Berichte im zurückgegebenen Array geben könnte, der Einfachheit halber jedoch nur die blockierte URL des ersten Berichts protokolliert wird.

### blockedURL für eine externe Ressource

Das unten gezeigte HTML setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die nur das Laden von Ressourcen von derselben Seite erlaubt, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

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

Das folgende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `inline` führen würden.
Es setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die es nicht erlaubt, Inline-Skripte auszuführen, was zu einem Verstoß führt, da die Seite ein Inline-Skript enthält.

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

Das folgende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `trusted-types-policy` führen würden.
Zuerst wird eine Richtlinie definiert, die `'unsafe-inline'` Skripte erlaubt, um zu gewährleisten, dass wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die einen Verstoß auslösen wird.
Die Richtlinie verwendet auch die `trusted-types` Direktive, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
> Die oben definierte Richtlinie ist keine sehr gute Richtlinie.
> Das Ziel beim Einsatz vertrauenswürdiger Typen besteht nicht darin, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung irgendeiner Richtlinie zu fordern und sicherzustellen, dass der Bereinigungscode an einem Ort ist und leicht überprüft werden kann.

Da dies nicht in der `trusted-types` Direktive aufgeführt ist, liegt ein CSP-Verstoß vor, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, wäre die Seite nicht mehr in Verstoß.

### blockedURL für trusted-types-sink Ressourcen

Das folgende HTML zeigt die Bedingungen, die zu einem `blockedURL` von `trusted-types-sink` führen würden.
Zuerst wird eine Richtlinie definiert, die `'unsafe-inline'` Skripte erlaubt, und wie im vorherigen Beispiel wird die `trusted-types` Direktive verwendet, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` festgelegt, die erzwingt, dass Senken nur mit Inhalten gespeist werden sollen, die mit einem vertrauenswürdigen Typ bereinigt wurden.

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

Die Methode `updateContent()` überträgt unbereinigte Inhalte an die `innerHTML`-Eigenschaft des Elements, was zu einem CSP-Verstoß führen wird.
Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Skript aktualisieren, um eine vertrauenswürdige Typenrichtlinie zu definieren und verwenden, um die Eingabe zu bereinigen, die dem Element übergeben wird:

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
