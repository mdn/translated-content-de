---
title: Intl.Locale.prototype.getTextInfo()
short-title: getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getTextInfo()`**-Methode von Instanzen von {{jsxref("Intl.Locale")}} gibt die Anordnung der Zeichen zurück, die durch entweder `ltr` (left-to-right) oder `rtl` (right-to-left) für diese Locale angegeben ist.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffsmerkmal namens `textInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.textInfo === locale.textInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTextInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Informationen zur Textgestaltung enthält und mit den Locale-Daten entsprechend [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) verbunden ist. Es hat die folgenden Eigenschaften:

- `direction`
  - : Ein String, der die Textrichtung für die Locale angibt. Kann entweder `"ltr"` (left-to-right) oder `"rtl"` (right-to-left) sein.

## Beispiele

### Abrufen von Textinformationen

Gibt die unterstützten Textausrichtungen für eine gegebene `Locale` zurück.

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```js
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
