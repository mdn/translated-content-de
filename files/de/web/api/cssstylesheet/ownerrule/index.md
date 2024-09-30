---
title: "CSSStyleSheet: ownerRule-Eigenschaft"
short-title: ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
l10n:
  sourceCommit: bc464c855fc2a3d967f1684b72e78b39c6d1ab50
---

{{APIRef("CSSOM")}}

Die schreibgeschützte [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Eigenschaft
**`ownerRule`** gibt die [`CSSImportRule`](/de/docs/Web/API/CSSImportRule)
zurück, die der {{cssxref("@import")}}-Regel entspricht, welche das Stylesheet in das
Dokument importiert hat. Wenn das Stylesheet nicht mit `@import` in das Dokument importiert wurde, ist der zurückgegebene Wert `null`.

## Wert

Eine [`CSSImportRule`](/de/docs/Web/API/CSSImportRule), die der {{cssxref("@import")}}-Regel entspricht, die
das Stylesheet in das Dokument importiert hat. Wenn das Stylesheet nicht mit `@import` in das
Dokument importiert wurde, ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Codebeispiel sucht nach Regeln, die nicht mit einer `@import`-Regel in das Dokument importiert wurden.

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (!rule.ownerRule) {
    /* rule is not imported */
  }
}
```

Dieses Codebeispiel erhält eine Referenz zum Stylesheet, das mit
`@import` verbunden ist, und verarbeitet es auf irgendeine Weise:

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
- [Verwendung dynamischer Styling-Informationen](/de/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
