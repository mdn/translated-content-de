---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`sample`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der ein Sample der Ressource darstellt, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung verursacht hat.

Dies ist nur für [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) Verletzungen relevant, wenn die entsprechende `Content-Security-Policy`-Direktive das [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)-Schlüsselwort enthält. Außerdem wird dies nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignishandler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, erzeugen kein Sample.

> [!NOTE] Verletzungsberichte sollten als vom Angreifer kontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes sollte vor dem Speichern oder Rendern bereinigt werden.

## Wert

Ein String, der ein Sample der Ressource enthält, die die Verletzung verursacht hat, in der Regel die ersten 40 Zeichen oder der leere String.

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
