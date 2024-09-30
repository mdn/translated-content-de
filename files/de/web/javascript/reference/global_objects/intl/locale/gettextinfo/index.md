---
title: Intl.Locale.prototype.getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getTextInfo()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt die Anordnung der Zeichen für diese Locale zurück, die entweder durch `ltr` (left-to-right) oder durch `rtl` (right-to-left) angezeigt wird.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffsattribut namens `textInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.textInfo === locale.textInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTextInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Informationen zum Schriftsatz darstellt, die mit den Locale-Daten in [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) angegeben sind. Es hat die folgenden Eigenschaften:

- `direction`
  - : Ein String, der die Schreibrichtung des Textes für die Locale angibt. Kann entweder `"ltr"` (left-to-right) oder `"rtl"` (right-to-left) sein.

## Beispiele

### Abrufen von Textinformationen

Gibt die unterstützten Textausrichtungen für ein gegebenes `Locale` zurück.

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
