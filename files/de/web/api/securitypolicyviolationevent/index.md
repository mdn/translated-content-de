---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
l10n:
  sourceCommit: a5c1400a03d86162ea5c4342a93c2d96df470630
---

{{APIRef("Reporting API")}}

Die **`SecurityPolicyViolationEvent`** Schnittstelle erbt von {{domxref("Event")}} und repräsentiert das Ereignisobjekt eines `securitypolicyviolation` Ereignisses, das auf einem {{domxref("Element/securitypolicyviolation_event", "Element")}}, {{domxref("Document/securitypolicyviolation_event", "Document")}} oder {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "worker","","nocode")}} gesendet wird, wenn seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verletzt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SecurityPolicyViolationEvent.SecurityPolicyViolationEvent","SecurityPolicyViolationEvent()")}}
  - : Erstellt eine neue `SecurityPolicyViolationEvent`-Objektinstanz.

## Instanz-Eigenschaften

- {{domxref("SecurityPolicyViolationEvent.blockedURI")}} {{ReadOnlyInline}}
  - : Ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie eine Richtlinie verletzt.
- {{domxref("SecurityPolicyViolationEvent.columnNumber")}} {{ReadOnlyInline}}
  - : Die Spaltennummer im Dokument oder Worker, an der die Verletzung aufgetreten ist.
- {{domxref("SecurityPolicyViolationEvent.disposition")}} {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der User-Agent so konfiguriert ist, die Richtlinienverletzung durchzusetzen oder nur zu melden.
- {{domxref("SecurityPolicyViolationEvent.documentURI")}} {{ReadOnlyInline}}
  - : Ein String, der die URI des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- {{domxref("SecurityPolicyViolationEvent.effectiveDirective")}} {{ReadOnlyInline}}
  - : Ein String, der die verletzte Direktive darstellt.
- {{domxref("SecurityPolicyViolationEvent.lineNumber")}} {{ReadOnlyInline}}
  - : Die Zeilennummer im Dokument oder Worker, an der die Verletzung aufgetreten ist.
- {{domxref("SecurityPolicyViolationEvent.originalPolicy")}} {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung verursacht hat.
- {{domxref("SecurityPolicyViolationEvent.referrer")}} {{ReadOnlyInline}}
  - : Ein String, der die URL für den Referrer der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- {{domxref("SecurityPolicyViolationEvent.sample")}} {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignishandler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, erzeugen kein Beispiel.
- {{domxref("SecurityPolicyViolationEvent.sourceFile")}} {{ReadOnlyInline}}
  - : Wenn die Verletzung durch ein Skript verursacht wurde, wird dies die URL des Skripts sein; andernfalls wird es `null` sein.
    Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
- {{domxref("SecurityPolicyViolationEvent.statusCode")}} {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- {{domxref("SecurityPolicyViolationEvent.violatedDirective")}} {{ReadOnlyInline}}
  - : Ein String, der die verletzte Direktive darstellt.
    Dies ist ein historisches Alias von [`effectiveDirective`](#effectivedirective).

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

- HTTP [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- {{domxref("CSPViolationReportBody")}}
- Das {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} Ereignis der {{domxref("Element")}} Schnittstelle
- Das {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} Ereignis der {{domxref("Document")}} Schnittstelle
- Das {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} Ereignis der {{domxref("WorkerGlobalScope")}} Schnittstelle
