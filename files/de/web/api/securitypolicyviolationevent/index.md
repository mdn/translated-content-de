---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`SecurityPolicyViolationEvent`**-Schnittstelle erbt von [`Event`](/de/docs/Web/API/Event) und repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem [`Element`](/de/docs/Web/API/Element/securitypolicyviolation_event), [`Document`](/de/docs/Web/API/Document/securitypolicyviolation_event) oder [Worker](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) gesendet wird, wenn seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SecurityPolicyViolationEvent()`](/de/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent)
  - : Erstellt eine neue Instanz des `SecurityPolicyViolationEvent`-Objekts.

## Instanz-Eigenschaften

- [`SecurityPolicyViolationEvent.blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) {{ReadOnlyInline}}
  - : Ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie eine Richtlinie verletzt.
- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Dokument oder Worker, bei der die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob der User-Agent so konfiguriert ist, dass er die Richtlinienverletzung erzwingt oder nur meldet.
- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die verletzte Richtlinie darstellt.
- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Dokument oder Worker, bei der die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung verursacht hat.
- [`SecurityPolicyViolationEvent.referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur befüllt, wenn die Ressource ein Inline-Skript, Ereignishandler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, generieren kein Beispiel.
- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) {{ReadOnlyInline}}
  - : Wenn die Verletzung als Folge eines Skripts erfolgte, wird dies die URL des Skripts sein; andernfalls wird es `null` sein. Sowohl `columnNumber` als auch `lineNumber` sollten nicht-null sein, wenn diese Eigenschaft nicht `null` ist.
- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) {{ReadOnlyInline}}
  - : Ein String, der die verletzte Richtlinie darstellt. Dies ist ein historischer Alias für [`effectiveDirective`](#effectivedirective).

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
- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)-Ereignis der [`Element`](/de/docs/Web/API/Element)-Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)-Ereignis der [`Document`](/de/docs/Web/API/Document)-Schnittstelle
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)-Ereignis der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle
