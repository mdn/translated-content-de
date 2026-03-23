---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 6720d579bd658f02c56363805e97e69f93dc79f1
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`sample`**-Eigenschaft des [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Interfaces ist eine Zeichenkette, die ein Beispiel der Ressource darstellt, die die [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)-Verletzung verursacht hat.

Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)- und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Verletzungen, wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält. Darüber hinaus wird dies nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignis-Handler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, werden kein Beispiel generieren.

> [!NOTE]
> Verletzungsberichte sollten als datenangreifer-kontrolliert betrachtet werden.
> Der Inhalt dieses Feldes sollte vor der Speicherung oder Darstellung bereinigt werden.

## Wert

Eine Zeichenkette, die ein Beispiel der Ressource enthält, die die Verletzung verursacht hat, normalerweise die ersten 40 Zeichen oder die leere Zeichenkette.

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

- [`CSPViolationReport.sample`](/de/docs/Web/API/CSPViolationReport/sample)
