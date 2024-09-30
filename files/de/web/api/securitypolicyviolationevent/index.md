---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`SecurityPolicyViolationEvent`**-Schnittstelle erbt von [`Event`](/de/docs/Web/API/Event) und repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem [`Element`](/de/docs/Web/API/Element/securitypolicyviolation_event), [`Document`](/de/docs/Web/API/Document/securitypolicyviolation_event) oder [Worker](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) gesendet wird, wenn seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SecurityPolicyViolationEvent()`](/de/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent)
  - : Erstellt eine neue Instanz eines `SecurityPolicyViolationEvent`-Objekts.

## Instanz-Eigenschaften

- [`SecurityPolicyViolationEvent.blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) {{ReadOnlyInline}}
  - : Ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine Richtlinie verstößt.
- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Dokument oder Worker, an der der Verstoß aufgetreten ist.
- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der User-Agent so konfiguriert ist, die Richtlinienverletzung durchzusetzen oder nur zu melden.
- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Dokuments oder Workers darstellt, in dem der Verstoß aufgetreten ist.
- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde.
- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Dokument oder Worker, an der der Verstoß aufgetreten ist.
- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung den Verstoß verursacht hat.
- [`SecurityPolicyViolationEvent.referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die den Verstoß verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur befüllt, wenn die Ressource ein Inline-Skript, Event-Handler oder Stil ist — externe Ressourcen, die einen Verstoß verursachen, erzeugen kein Beispiel.
- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) {{ReadOnlyInline}}
  - : Wenn der Verstoß durch ein Skript verursacht wurde, wird dies die URL des Skripts sein; andernfalls ist es `null`. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem der Verstoß aufgetreten ist.
- [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde. Dies ist ein historisches Alias von [`effectiveDirective`](#effectivedirective).

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.blockedURI);
  console.log(e.violatedDirective);
  console.log(e.originalPolicy);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP [Content Security Policy (CSP)](https://developer.mozilla.org/de/docs/Web/HTTP/CSP)
- [`CSPViolationReportBody`](https://developer.mozilla.org/de/docs/Web/API/CSPViolationReportBody)
- Das [`securitypolicyviolation`](https://developer.mozilla.org/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignis der [`Element`](https://developer.mozilla.org/de/docs/Web/API/Element)-Schnittstelle
- Das [`securitypolicyviolation`](https://developer.mozilla.org/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis der [`Document`](https://developer.mozilla.org/de/docs/Web/API/Document)-Schnittstelle
- Das [`securitypolicyviolation`](https://developer.mozilla.org/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)-Ereignis der [`WorkerGlobalScope`](https://developer.mozilla.org/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle
