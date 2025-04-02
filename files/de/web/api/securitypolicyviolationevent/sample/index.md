---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`sample`** schreibgeschützte Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist ein String, der ein Beispiel der Ressource darstellt, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung verursacht hat.

Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Verstöße, wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.
Zusätzlich wird diese Eigenschaft nur gefüllt, wenn es sich bei der Ressource um ein Inline-Skript, einen Ereignis-Handler oder einen Stil handelt - externe Ressourcen, die eine Verletzung verursachen, erzeugen kein Beispiel.

> [!NOTE] Verletzungsberichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt dieses Feldes sollte vor der Speicherung oder Darstellung bereinigt werden.

## Wert

Ein String, der ein Beispiel der Ressource enthält, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen oder der leere String.

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
