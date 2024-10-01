---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, die unsicheren Teile der [DOM-API](/de/docs/Web/API/Document_Object_Model) zu sperren, um clientseitige {{Glossary("Cross-site_scripting", "Cross-Site-Scripting")}} (XSS)-Angriffe zu verhindern.

## Konzepte und Nutzung

Clientseitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Benutzer kontrollierte Daten (wie z.B. Eingaben in ein Formularfeld) eine Funktion erreichen, die diese Daten ausführen kann. Diese Funktionen werden als _Injection Sinks_ bezeichnet. DOM-basierte XSS-Angriffe passieren, wenn ein Benutzer in der Lage ist, beliebigen JavaScript-Code zu schreiben und durch eine dieser Funktionen ausführen zu lassen.

Die Trusted Types API sperrt riskante Injection Sinks und erfordert, dass Sie die Daten verarbeiten, bevor Sie sie einer dieser Funktionen übergeben. Wenn Sie einen String verwenden, wird der Browser einen {{jsxref("TypeError")}} auslösen und die Nutzung der Funktion verhindern.

Trusted Types arbeitet zusammen mit der [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unter Verwendung der {{CSP("trusted-types")}}- und {{CSP("require-trusted-types-for")}}-Direktiven.

### Injection Sinks

Die Trusted Types API sperrt Injection Sinks, die als Vektor für DOM-XSS-Angriffe dienen können. Ein Injection Sink ist jede Web-API-Funktion, die nur mit vertrauenswürdigen, validierten oder bereinigten Eingaben aufgerufen werden sollte. Beispiele für Injection Sinks sind:

- Funktionen, die HTML in das Dokument einfügen, wie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) oder [`Document.write()`](/de/docs/Web/API/Document/write).
- Funktionen, die ein neues, same-origin [`Document`](/de/docs/Web/API/Document) mit benutzerkontrolliertem Markup erstellen, wie [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString).
- Funktionen, die Code ausführen, wie {{jsxref("Global_Objects/eval", "eval()")}}.
- Setzmethoden für [`Element`](/de/docs/Web/API/Element)-Attribute, die eine URL von zu ladendem oder auszuführendem Code akzeptieren.

Trusted Types wird Sie dazu zwingen, die Daten zu verarbeiten, bevor Sie sie an einen Injection Sink übergeben, anstatt einen String zu verwenden. Dies stellt sicher, dass die Daten vertrauenswürdig sind.

### Trusted Type Policies

Eine Richtlinie ist eine Fabrik für Trusted Types. Webentwickler können eine Reihe von Richtlinien spezifizieren, die zur Erstellung typisierter Objekte verwendet werden, die die vertrauenswürdige Codebasis für gültige Trusted Type-Objekte bilden.

## Schnittstellen

- [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als HTML rendert.
- [`TrustedScript`](/de/docs/Web/API/TrustedScript)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der dazu führen könnte, dass der Script ausgeführt wird.
- [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird, der ihn als URL einer externen Skriptressource analysiert.
- [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)
  - : Definiert die Funktionen zur Erstellung der obigen Trusted Type-Objekte.
- [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)
  - : Erstellt Richtlinien und überprüft, ob Trusted Type-Objektinstanzen über eine der Richtlinien erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte unter Verwendung von [`TrustedTypePolicyFactory.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellt. Wir können dann [`TrustedTypePolicy.createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) verwenden, um einen bereinigten HTML-String zu erstellen, der in das Dokument eingefügt werden soll.

Der bereinigte Wert kann dann mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente injiziert werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie andere Möglichkeiten zur Bereinigung von Eingaben im Artikel [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch verfügbar als [npm-Paket](https://www.npmjs.com/package/trusted-types))
