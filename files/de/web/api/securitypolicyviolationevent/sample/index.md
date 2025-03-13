---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`sample`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist ein String, der ein Beispiel der Ressource darstellt, die die Verletzung der [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verursacht hat.

Dies betrifft nur Verstöße gegen [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#style-src), wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält. Zudem wird dies nur gefüllt, wenn es sich bei der Ressource um ein Inline-Skript, einen Ereignishandler oder einen Stil handelt — externe Ressourcen, die eine Verletzung verursachen, generieren kein Beispiel.

> [!NOTE] Verletzungsberichte sollten als von Angreifern kontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes sollte vor dem Speichern oder Rendern bereinigt werden.

## Wert

Ein String, der ein Beispiel der Ressource enthält, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen, oder der leere String.

## Beispiele

```js
document.addEventListener("securitypolicyviolation", (e) => {
  console.log(e.sample);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody/sample)
