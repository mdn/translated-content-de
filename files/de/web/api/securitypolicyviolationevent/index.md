---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`SecurityPolicyViolationEvent`**-Schnittstelle erbt von [`Event`](/de/docs/Web/API/Event) und repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das an ein [`Element`](/de/docs/Web/API/Element/securitypolicyviolation_event), ein [`Document`](/de/docs/Web/API/Document/securitypolicyviolation_event) oder einen [worker](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) gesendet wird, wenn dessen [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SecurityPolicyViolationEvent()`](/de/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent)
  - : Erstellt eine neue Instanz des `SecurityPolicyViolationEvent`-Objekts.

## Instanz-Eigenschaften

- [`SecurityPolicyViolationEvent.blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) {{ReadOnlyInline}}
  - : Ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie gegen eine Richtlinie verstößt.
- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Dokument oder Worker, an der der Verstoß auftrat.
- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der Benutzeragent so konfiguriert ist, dass er den Richtlinienverstoß durchsetzt oder nur meldet.
- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Dokuments oder Workers darstellt, in dem der Verstoß auftrat.
- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde.
- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Dokument oder Worker, an der der Verstoß auftrat.
- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung den Verstoß verursachte.
- [`SecurityPolicyViolationEvent.referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die den Verstoß verursachte, normalerweise die ersten 40 Zeichen. Dies wird nur ausgefüllt, wenn die Ressource ein Inline-Skript, ein Ereignishandler oder ein Stil ist — externe Ressourcen, die einen Verstoß verursachen, generieren kein Beispiel.
- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) {{ReadOnlyInline}}
  - : Wenn der Verstoß durch ein Skript verursacht wurde, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem der Verstoß auftrat.
- [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde. Dies ist ein historisches Alias von [`effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective).

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

- HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [`CSPViolationReport`](/de/docs/Web/API/CSPViolationReport)
- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignis der [`Element`](/de/docs/Web/API/Element) Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) Ereignis der [`Document`](/de/docs/Web/API/Document) Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Schnittstelle
