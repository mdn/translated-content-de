---
title: "CSPViolationReportBody: blockedURL-Eigenschaft"
short-title: blockedURL
slug: Web/API/CSPViolationReportBody/blockedURL
l10n:
  sourceCommit: 51b1250b1d51c2e0837c4d59798457a1261eb2af
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`blockedURL`** der Schnittstelle {{domxref("CSPViolationReportBody")}} ist ein Zeichenfolgenwert, der die Ressource darstellt, die blockiert wurde, weil sie gegen eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verstößt.

## Wert

Eine Zeichenfolge, die einen Wert oder eine URL enthält, die die Ressource darstellt, die gegen die Richtlinie verstoßen hat.

Wenn der Wert nicht die URL einer Ressource ist, muss er einer der folgenden Zeichenfolgen sein:

- `inline`
  - : Eine Inline-Ressource.
    Zum Beispiel ein eingebettetes Skript, das verwendet wurde, als [`'unsafe-inline'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline) nicht in der CSP angegeben war.
- `eval`
  - : Ein `eval()`.
    Zum Beispiel wurde `eval()` verwendet, aber [`'unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) war nicht in der CSP angegeben.
- `wasm-eval`
  - : Eine WASM-Auswertung.
    Zum Beispiel wurde `eval()` verwendet, aber [`'wasm-unsafe-eval'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#wasm-unsafe-eval) war nicht in der CSP angegeben.
- `trusted-types-policy`
  - : Eine Ressource, die gegen die CSP-Direktive [`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) verstößt.
    Zum Beispiel wurde eine {{domxref("TrustedTypePolicy")}} mit {{domxref("TrustedTypePolicyFactory/createPolicy", "window.trustedTypes.createPolicy()")}} erstellt, deren Name nicht in der `trusted-types`-Direktive der CSP aufgeführt war.
- `trusted-types-sink`
  - : Eine Ressource, die gegen die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) verstößt.
    Zum Beispiel wurde die Direktive auf `script` gesetzt, aber das Dokument hat keine {{domxref("TrustedTypePolicy")}} verwendet, um Daten zu bereinigen, bevor sie an ein Ziel wie {{domxref("Element.innerHTML")}} übergeben wurden.

## Beispiele

Die folgenden Beispiele zeigen HTML, das zu einigen der oben aufgeführten `blockedURL`-Werte führen würde.

Die Beispiele gehen davon aus, dass Sie eine JavaScript-Datei namens `main.js` haben, die von Ihrer Domain in Ihr Skript importiert wird. Das unten gezeigte Skript erstellt einen neuen {{domxref("ReportingObserver")}}, um Berichte über Inhaltsverletzungen des Typs `"csp-violation"` zu beobachten. Jedes Mal, wenn die Callback-Funktion aufgerufen wird, loggen wir die `blockedURL` im ersten Eintrag der Berichtsarray.

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

Beachten Sie, dass es zwar mehrere Berichte im zurückgegebenen Array geben kann, wir jedoch der Kürze halber nur die blockierte URL des ersten Berichts loggen.

### blockedURL für eine externe Ressource

Das unten stehende HTML setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die nur Ressourcen von derselben Seite lädt, und versucht dann, ein Skript von der externen Seite `https://apis.google.com` zu laden.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />
    <script src="main.js"></script>
  </head>
  <body>
    <!-- Dies sollte eine CSP-Verletzung erzeugen -->
    <script src="https://apis.google.com/js/platform.js"></script>
  </body>
</html>
```

Das Ergebnis des Loggens der `blockedURL` wäre:

```plain
blockedURL: https://apis.google.com/js/platform.js
```

### blockedURL für unsichere Inline-Ressourcen

Das unten stehende HTML demonstriert die Bedingungen, die zu einem `blockedURL` von `inline` führen würden. Es setzt eine Richtlinie von `Content-Security-Policy: default-src 'self'`, die keine Ausführung von eingebetteten Skripten erlaubt, was zu einer Verletzung führt, da die Seite ein eingebettetes Skript enthält.

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

Das unten stehende HTML demonstriert die Bedingungen, die zu einem `blockedURL` von `trusted-types-policy` führen würden. Zuerst wird eine Richtlinie definiert, die die Ausführung von `'unsafe-inline'` Scripts erlaubt, damit wir eine {{domxref("TrustedTypePolicy")}} erstellen können, die eine Verletzung auslöst. Die Richtlinie verwendet auch die `trusted-types` Direktive, um anzugeben, dass eine {{domxref("TrustedTypePolicy")}} mit dem Namen `myPolicy` erstellt werden darf.

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
        // Einige (unzureichende) Bereinigungscode
        return string.replace(/</g, "&lt;");
      },
    });
  </script>
</html>
```

Im Skript wird eine Richtlinie mit dem Namen `somePolicy` erstellt.

> [!NOTE]
> Die oben definierte Richtlinie ist keine sehr gute Richtlinie.
> Der Zweck der Verwendung von Trusted Types ist nicht die Durchsetzung einer _bestimmten_ Richtlinie, sondern die Durchsetzung einer Richtlinie im Allgemeinen und die Sicherstellung, dass der Bereinigungscode an einem Ort ist und leicht überprüft werden kann.

Da dies nicht in der `trusted-types`-Direktive aufgeführt ist, liegt eine CSP-Verletzung vor, und wir würden die Log-Ausgabe sehen:

```plain
blockedURL: trusted-types-policy
```

Wenn wir den Namen der erlaubten Richtlinie auf `somePolicy` ändern würden, wäre die Seite nicht mehr in Verletzung.

### blockedURL für trusted-types-sink-Ressourcen

Das unten stehende HTML demonstriert die Bedingungen, die zu einem `blockedURL` von `trusted-types-sink` führen würden. Zuerst wird eine Richtlinie definiert, die die Ausführung von `'unsafe-inline'` Skripten erlaubt, und wie im vorherigen Beispiel wird die `trusted-types` Direktive verwendet, um anzugeben, dass eine {{domxref("TrustedTypePolicy")}} mit dem Namen `myPolicy` erstellt werden darf.

Zusätzlich wird die Direktive `require-trusted-types-for 'script'` spezifiziert, die durchsetzt, dass Senken nur Inhalte übergeben werden sollten, die mit einem Trusted Type bereinigt wurden.

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
    <button onclick="updateContent()">Inhalt aktualisieren</button>
    <div id="content"></div>
  </body>

  <script>
    function updateContent() {
      const userInput = document.getElementById("userInput").value;

      // Übergabe von unbereinigtem Inhalt - ein Verstoß gegen die Richtlinie
      document.getElementById("content").innerHTML = userInput;
    }
  </script>
</html>
```

Die Methode `updateContent()` übergibt unbereinigten Inhalt an die Eigenschaft `innerHTML` des Elements, was zu einer CSP-Verletzung führt. Wir würden die Log-Ausgabe sehen:

```plain
blockedURL: trusted-types-sink
```

Um die Verletzung zu vermeiden, müssten wir das Skript aktualisieren, um eine Trusted Type Policy zu definieren und diese zu verwenden, um den an das Element übergebenen Input zu bereinigen:

```js
const policy = trustedTypes.createPolicy("myPolicy", {
  createHTML: (string) => {
    // Einige (unzureichende) Bereinigungscode
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

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}}
