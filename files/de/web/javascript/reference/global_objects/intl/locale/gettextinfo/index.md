---
title: Intl.Locale.prototype.getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`getTextInfo()`** der {{jsxref("Intl.Locale")}}-Instanzen gibt die Anordnung von Zeichen zurück, die entweder durch `ltr` (von links nach rechts) oder durch `rtl` (von rechts nach links) für diese Locale angezeigt wird.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft namens `textInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.textInfo === locale.textInfo` `false` zurückgibt. Überprüfen Sie die [Tabelle zur Browserkompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTextInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Informationen zur Textsatzgestaltung enthält, die mit den Locale-Daten gemäß [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) verbunden sind. Es hat die folgenden Eigenschaften:

- `direction`
  - : Ein String, der die Textrichtung für die Locale angibt. Kann entweder `"ltr"` (von links nach rechts) oder `"rtl"` (von rechts nach links) sein.

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
