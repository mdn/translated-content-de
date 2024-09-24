---
title: Trusted Types API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

Die **Trusted Types API** bietet Webentwicklern eine Möglichkeit, unsichere Teile der {{domxref("Document Object Model","DOM API", "", "nocode")}} abzusichern, um clientseitige {{Glossary("Cross-site scripting")}} (XSS) Angriffe zu verhindern.

## Konzepte und Nutzung

Client-seitige oder DOM-basierte XSS-Angriffe treten auf, wenn von einem Benutzer kontrollierte Daten (wie etwa die Eingabe in ein Formularfeld) eine Funktion erreichen, die diese Daten ausführen kann. Diese Funktionen werden als _Injection Sinks_ bezeichnet. DOM-basierte XSS-Angriffe passieren, wenn ein Benutzer in der Lage ist, beliebigen JavaScript-Code zu schreiben und ihn von einer dieser Funktionen ausführen zu lassen.

Die Trusted Types API sperrt risikoreiche Injection Sinks und erfordert, dass Sie die Daten verarbeiten, bevor Sie sie an eine dieser Funktionen übergeben. Wenn Sie einen String verwenden, wird der Browser einen {{jsxref("TypeError")}} auslösen und die Verwendung der Funktion verhindern.

Trusted Types arbeitet zusammen mit [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unter Verwendung der {{CSP("trusted-types")}}- und {{CSP("require-trusted-types-for")}}-Direktiven.

### Injection Sinks

Die Trusted Types API sperrt Injection Sinks, die als Vektor für DOM-XSS-Angriffe dienen können. Ein Injection Sink ist jede Web API-Funktion, die nur mit vertrauenswürdigen, validierten oder gesäuberten Eingaben aufgerufen werden sollte. Beispiele für Injection Sinks umfassen:

- Funktionen, die HTML in das Dokument einfügen, wie {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}} oder {{domxref("Document.write()")}}.
- Funktionen, die ein neues gleichherkunftsberechtigtes {{domxref("Document")}} mit vom Aufrufer kontrolliertem Markup erstellen, wie {{domxref("DOMParser.parseFromString()")}}.
- Funktionen, die Code ausführen, wie {{jsxref("Global_Objects/eval", "eval()")}}.
- Setzmethoden für {{domxref("Element")}}-Attribute, die eine URL von Code akzeptieren, der geladen oder ausgeführt werden soll.

Trusted Types wird Sie zwingen, die Daten zu verarbeiten, bevor sie an einen Injection Sink übergeben werden, anstatt einen String zu verwenden. Dies stellt sicher, dass die Daten vertrauenswürdig sind.

### Trusted Type Policies

Eine Richtlinie ist eine Fabrik für Trusted Types. Webentwickler können ein Set von Richtlinien festlegen, die zur Erstellung von typisierten Objekten verwendet werden, die die vertrauenswürdige Codebasis für gültige Trusted Type-Objekte bilden.

## Schnittstellen

- {{domxref("TrustedHTML")}}
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird und als HTML gerendert wird.
- {{domxref("TrustedScript")}}
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird und zur Ausführung des Skripts führen könnte.
- {{domxref("TrustedScriptURL")}}
  - : Repräsentiert einen String, der in einen Injection Sink eingefügt wird und als URL einer externen Skript-Ressource geparst wird.
- {{domxref("TrustedTypePolicy")}}
  - : Definiert die Funktionen, die zur Erstellung der oben genannten Trusted Type-Objekte verwendet werden.
- {{domxref("TrustedTypePolicyFactory")}}
  - : Erstellt Richtlinien und überprüft, dass Trusted Type-Objektinstanzen über eine der Richtlinien erstellt wurden.

## Beispiele

Im folgenden Beispiel erstellen wir eine Richtlinie, die {{domxref("TrustedHTML")}}-Objekte mit {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erstellt. Wir können dann {{domxref("TrustedTypePolicy.createHTML()")}} verwenden, um einen gesäuberten HTML-String zu erstellen, der in das Dokument eingefügt wird.

Der gesäuberte Wert kann dann mit {{domxref("Element.innerHTML")}} verwendet werden, um sicherzustellen, dass keine neuen HTML-Elemente eingefügt werden können.

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

Lesen Sie mehr über dieses Beispiel und entdecken Sie weitere Möglichkeiten, Eingaben zu säubern, im Artikel [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill) (auch als [npm-Paket](https://www.npmjs.com/package/trusted-types) verfügbar)
