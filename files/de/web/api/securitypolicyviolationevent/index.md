---
title: SecurityPolicyViolationEvent
slug: Web/API/SecurityPolicyViolationEvent
l10n:
  sourceCommit: 515d03ad8572b96e88916888156444626dcba193
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das **`SecurityPolicyViolationEvent`** Interface erbt von [`Event`](/de/docs/Web/API/Event) und repräsentiert das Ereignisobjekt eines `securitypolicyviolation`-Ereignisses, das auf einem [`Element`](/de/docs/Web/API/Element/securitypolicyviolation_event), einem [`Document`](/de/docs/Web/API/Document/securitypolicyviolation_event) oder einem [worker](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) gesendet wird, wenn seine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`SecurityPolicyViolationEvent()`](/de/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent)
  - : Erstellt eine neue Instanz des `SecurityPolicyViolationEvent`-Objekts.

## Instanzeigenschaften

- [`SecurityPolicyViolationEvent.blockedURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/blockedURI) {{ReadOnlyInline}}
  - : Ein String, der die URI der Ressource darstellt, die blockiert wurde, weil sie eine Richtlinie verletzt.
- [`SecurityPolicyViolationEvent.columnNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/columnNumber) {{ReadOnlyInline}}
  - : Die Spaltennummer im Dokument oder im Worker, an der die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.disposition`](/de/docs/Web/API/SecurityPolicyViolationEvent/disposition) {{ReadOnlyInline}}
  - : Ein String, der anzeigt, ob der Benutzeragent so konfiguriert ist, dass er die Richtlinienverletzung durchsetzt oder nur meldet.
- [`SecurityPolicyViolationEvent.documentURI`](/de/docs/Web/API/SecurityPolicyViolationEvent/documentURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde.
- [`SecurityPolicyViolationEvent.lineNumber`](/de/docs/Web/API/SecurityPolicyViolationEvent/lineNumber) {{ReadOnlyInline}}
  - : Die Zeilennummer im Dokument oder im Worker, an der die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.originalPolicy`](/de/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie enthält, deren Durchsetzung die Verletzung verursacht hat.
- [`SecurityPolicyViolationEvent.referrer`](/de/docs/Web/API/SecurityPolicyViolationEvent/referrer) {{ReadOnlyInline}}
  - : Ein String, der die URL des Referrers der Ressourcen darstellt, deren Richtlinie verletzt wurde, oder `null`.
- [`SecurityPolicyViolationEvent.sample`](/de/docs/Web/API/SecurityPolicyViolationEvent/sample) {{ReadOnlyInline}}
  - : Ein String, der ein Beispiel der Ressource darstellt, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen. Dies wird nur ausgefüllt, wenn es sich bei der Ressource um ein eingebettetes Skript, einen Ereignishandler oder ein Stil handelt – externe Ressourcen, die eine Verletzung verursachen, generieren kein Beispiel.
- [`SecurityPolicyViolationEvent.sourceFile`](/de/docs/Web/API/SecurityPolicyViolationEvent/sourceFile) {{ReadOnlyInline}}
  - : Wenn die Verletzung als Ergebnis eines Skripts aufgetreten ist, wird dies die URL des Skripts sein; andernfalls wird es `null` sein.
    Sowohl `columnNumber` als auch `lineNumber` sollten Nicht-Null-Werte haben, wenn diese Eigenschaft nicht `null` ist.
- [`SecurityPolicyViolationEvent.statusCode`](/de/docs/Web/API/SecurityPolicyViolationEvent/statusCode) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Statuscode des Dokuments oder Workers darstellt, in dem die Verletzung aufgetreten ist.
- [`SecurityPolicyViolationEvent.violatedDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective) {{ReadOnlyInline}}
  - : Ein String, der die Richtlinie darstellt, die verletzt wurde.
    Dies ist ein historisches Alias von [`effectiveDirective`](/de/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective).

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
- Das [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event) Ereignis des [`Element`](/de/docs/Web/API/Element) Interfaces
- Das [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event) Ereignis des [`Document`](/de/docs/Web/API/Document) Interfaces
- Das [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event) Ereignis des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interfaces
