---
title: "CSSStyleSheet: ownerRule-Eigenschaft"
short-title: ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
l10n:
  sourceCommit: bc464c855fc2a3d967f1684b72e78b39c6d1ab50
---

{{APIRef("CSSOM")}}

Die schreibgeschützte {{domxref("CSSStyleSheet")}}-Eigenschaft **`ownerRule`** gibt die {{domxref("CSSImportRule")}} zurück, die der {{cssxref("@import")}}-Regel entspricht, die das Stylesheet ins Dokument importiert hat. Wenn das Stylesheet nicht mittels `@import` ins Dokument importiert wurde, ist der zurückgegebene Wert `null`.

## Wert

Eine {{domxref("CSSImportRule")}}, die der {{cssxref("@import")}}-Regel entspricht, die das Stylesheet ins Dokument importiert hat. Wenn das Stylesheet nicht mittels `@import` ins Dokument importiert wurde, ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Code-Snippet sucht nach Regeln, die nicht mittels einer `@import`-Regel ins Dokument importiert wurden.

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (!rule.ownerRule) {
    /* Regel ist nicht importiert */
  }
}
```

Dieses Snippet erhält einen Verweis auf das Stylesheet, das mit `@import` verknüpft ist, und verarbeitet es auf irgendeine Weise:

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (rule.ownerRule) {
    checkStylesheet(rule.ownerRule.styleSheet);
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Objektmodell](/de/docs/Web/API/CSS_Object_Model)
- [Verwendung dynamischer Stilinformationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
