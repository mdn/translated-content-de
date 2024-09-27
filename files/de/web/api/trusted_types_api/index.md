---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, unsichere Teile der [DOM API](/de/docs/Web/API/Document_Object_Model) abzuriegeln, um clientseitige [Cross-site Scripting](/de/docs/Glossary/Cross-site_scripting) (XSS) Angriffe zu verhindern.

## Konzepte und Nutzung

Clientseitige oder DOM-basierte XSS-Angriffe geschehen, wenn von einem Benutzer kontrollierte Daten (wie jene in ein Formularfeld eingegebene Daten) eine Funktion erreichen, die diese Daten ausführen kann. Diese Funktionen werden als _Injection Sinks_ bezeichnet. DOM-basierte XSS-Angriffe geschehen, wenn ein Benutzer in der Lage ist, beliebigen JavaScript-Code zu schreiben und von einer dieser Funktionen ausführen zu lassen.

Die Trusted Types API schränkt riskante Injection Sinks ein, indem sie verlangt, dass die Daten verarbeitet werden, bevor sie an eine dieser Funktionen übergeben werden. Wenn Sie einen String verwenden, wird der Browser eine {{jsxref("TypeError")}} auslösen und die Nutzung der Funktion verhindern.

Trusted Types arbeitet in Verbindung mit [Content-Security Policy](/de/docs/Web/HTTP/CSP) mit den Direktiven {{CSP("trusted-types")}} und {{CSP("require-trusted-types-for")}}.

### Injection Sinks

Die Trusted Types API beschränkt Injection Sinks, die als Einfallstor für DOM-XSS-Angriffe fungieren können. Ein Injection Sink ist jede Web-API-Funktion, die nur mit vertrauenswürdigen, validierten oder bereinigten Eingaben aufgerufen werden sollte. Beispiele für Injection Sinks sind:

- Funktionen, die HTML in das Dokument einfügen, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`Document.write()`](/de/docs/Web/API/Document/write).
- Funktionen, die ein neues, gleichherkunftliches [`Document`](/de/docs/Web/API/Document) mit vom Aufrufer kontrolliertem Markup erstellen, wie [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString).
- Funktionen, die Code ausführen, wie {{jsxref("Global_Objects/eval", "eval()")}}.
- Setter für [`Element`](/de/docs/Web/API/Element)-Attribute, die eine URL zum Laden oder Ausführen von Code akzeptieren.

Trusted Types zwingt Sie dazu, die Daten zu verarbeiten, bevor Sie sie an einen Injection Sink übergeben, anstatt einen String zu verwenden. Dies gewährleistet, dass die Daten vertrauenswürdig sind.

### Trusted Type Policies

Eine Policy ist eine Fabrik für Trusted Types. Webentwickler können einen Satz von Policies festlegen, die für die Erstellung typisierter Objekte verwendet werden, die den vertrauenswürdigen Codebase für gültige Trusted Type Objekte bilden.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Stellt einen String dar, der in einen Injection Sink eingefügt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Stellt einen String dar, der in einen Injection Sink eingefügt wird, der dazu führen kann, dass das Skript ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Stellt einen String dar, der in einen Injection Sink eingefügt wird, der ihn als URL einer externen Skriptressource parsen wird.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen, die zur Erstellung der oben genannten Trusted Type Objekte verwendet werden.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Policies und überprüft, dass Trusted Type Objektinstanzen über eine der Policies erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Policy, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte mit [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) =>
    string
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

Lesen Sie mehr über dieses Beispiel und entdecken Sie weitere Möglichkeiten zur Bereinigung von Eingaben im Artikel [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types polyfill](https://github.com/w3c/trusted-types#polyfill) (ebenfalls verfügbar als [npm package](https://www.npmjs.com/package/trusted-types))
