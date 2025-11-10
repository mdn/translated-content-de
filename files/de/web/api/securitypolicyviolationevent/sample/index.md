---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 1b8805ce680f1fbb9dfbade6a64d4671cd04da80
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`sample`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine schreibgeschützte Zeichenfolge, die ein Beispiel der Ressource darstellt, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung verursacht hat.

Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)- und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Verletzungen, wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält. Darüber hinaus wird dies nur gefüllt, wenn die Ressource ein Inline-Skript, ein Event-Handler oder ein Stil ist – externe Ressourcen, die eine Verletzung verursachen, generieren kein Beispiel.

> [!NOTE]
> Verletzungsberichte sollten als angreifergesteuerte Daten betrachtet werden.
> Der Inhalt dieses Feldes sollte bereinigt werden, bevor er gespeichert oder gerendert wird.

## Wert

Eine Zeichenfolge, die ein Beispiel der Ressource enthält, die die Verletzung verursacht hat, in der Regel die ersten 40 Zeichen oder den leeren String.

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
