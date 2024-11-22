---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Reporting API")}}

Die **`blockedURL`** schreibgeschützte Eigenschaft der [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)-Schnittstelle ist ein Zeichenfolgenwert, der die Ressource repräsentiert, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstoßen hat.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält und die Ressource repräsentiert, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein Inline-Skript, das verwendet wurde, wenn [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben wurde.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine Wasm-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die CSP-Direktive [`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit [`window.trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt, deren Name nicht in der CSP-Direktive `trusted-types` aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) verstoßen hat.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument verwendete keine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), um Daten zu bereinigen, bevor sie an ein Element wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben beschriebenen `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` von derselben Domain in Ihr Skript importieren.
Das Skript, das unten gezeigt wird, erstellt einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Berichte über Verstöße gegen Inhalte der Art `"csp-violation"` zu beobachten.
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

Beachten Sie, dass, während es möglicherweise mehrere Berichte im zurückgegebenen Array gibt, wir zur Kürze nur die blockierte URL des ersten Berichts protokollieren.

### blockedURL für eine externe Ressource

Das HTML unten setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die nur erlaubt, Ressourcen von derselben Seite zu laden, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

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

Das HTML unten zeigt die Bedingungen, die zu einer `blockedURL` von `inline` führen würden.
Es legt eine Richtlinie von `Content-Security-Policy: default-src 'self'` fest, die keine Inline-Skripte zur Ausführung erlaubt und dadurch einen Verstoß verursacht, da die Seite ein Inline-Skript enthält.

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

Das HTML unten zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-policy` führen würden.
Zuerst definiert es eine Richtlinie, die erlaubt, `'unsafe-inline'` Skripte auszuführen, damit wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) erstellen können, die einen Verstoß verursachen wird.
Die Richtlinie verwendet auch die Direktive `trusted-types`, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

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
> Das Ziel der Verwendung vertrauenswürdiger Typen ist es nicht, eine _bestimmte_ Richtlinie durchzusetzen, sondern die Durchsetzung einer Richtlinie zu verlangen und sicherzustellen, dass der Bereinigungscode an einem Ort ist und einfach überprüft werden kann.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, handelt es sich um einen CSP-Verstoß, und wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie in `somePolicy` ändern würden, wäre die Seite nicht mehr in Verletzung.

### blockedURL für trusted-types-sink Ressourcen

Das HTML unten zeigt die Bedingungen, die zu einer `blockedURL` von `trusted-types-sink` führen würden.
Zuerst definiert es eine Richtlinie, die `'unsafe-inline'` Skripte zur Ausführung erlaubt, und wie im vorherigen Beispiel verwendet es die Direktive `trusted-types`, um anzugeben, dass eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich spezifiziert es die Direktive `require-trusted-types-for 'script'`, die erzwingt, dass Senken nur Inhalte übergeben werden, die unter Verwendung eines vertrauenswürdigen Typs bereinigt wurden.

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

Die Methode `updateContent()` übergibt unbereinigten Inhalt an die Eigenschaft `innerHTML` des Elements, was einen CSP-Verstoß verursachen wird.
Wir würden die Protokollausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um den Verstoß zu vermeiden, müssten wir das Skript aktualisieren, um eine vertrauenswürdige Typ-Richtlinie zu definieren und diese zu verwenden, um das an das Element übergebene Eingabematerial zu bereinigen:

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
