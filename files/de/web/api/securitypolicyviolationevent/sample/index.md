---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`sample`** der Schnittstelle {{domxref("SecurityPolicyViolationEvent")}} ist ein String, der ein Beispiel der Ressource darstellt, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung verursacht hat.

Dies tritt nur bei [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src)-Verletzungen auf, wenn die entsprechende `Content-Security-Policy`-Direktive das Stichwort [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) enthält. Außerdem wird dies nur gefüllt, wenn die Ressource ein Inline-Skript, ein Ereignishandler oder ein Stil ist — externe Ressourcen, die eine Verletzung verursachen, werden kein Beispiel generieren.

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

- [`CSPViolationReportBody.sample`](/de/docs/Web/API/CSPViolationReportBody#cspviolationreportbody.sample)
