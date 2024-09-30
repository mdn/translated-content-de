---
title: "SecurityPolicyViolationEvent: sample-Eigenschaft"
short-title: sample
slug: Web/API/SecurityPolicyViolationEvent/sample
l10n:
  sourceCommit: 701ac4440432ac215713b6b7f274291ca643c49a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`sample`**-Eigenschaft der [`SecurityPolicyViolationEvent`](/de/docs/Web/API/SecurityPolicyViolationEvent)-Schnittstelle ist ein String, der eine Probe der Ressource darstellt, die die [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)-Verletzung verursacht hat.

Dies betrifft nur Verstöße gegen [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src), wenn die entsprechende `Content-Security-Policy`-Direktive das Stichwort [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) enthält. Darüber hinaus wird dies nur ausgefüllt, wenn es sich bei der Ressource um ein Inline-Skript, einen Ereignis-Handler oder einen Stil handelt — externe Ressourcen, die eine Verletzung verursachen, generieren keine Probe.

> [!NOTE] Verletzungsberichte sollten als angreifergesteuerte Daten betrachtet werden.
> Der Inhalt dieses Feldes sollte bereinigt werden, bevor er gespeichert oder gerendert wird.

## Wert

Ein String, der eine Probe der Ressource enthält, die den Verstoß verursacht hat, normalerweise die ersten 40 Zeichen oder der leere String.

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
