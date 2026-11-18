---
title: Intl.Locale.prototype.getTextInfo()
short-title: getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Methode **`getTextInfo()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt die für diese Locale geltende Schreibrichtung zurück: `ltr` (von links nach rechts) oder `rtl` (von rechts nach links).

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Accessor-Eigenschaft namens `textInfo` implementiert. Da sie bei jedem Zugriff ein neues Objekt zurückgibt, ist sie jetzt als Methode implementiert. So wird verhindert, dass `locale.textInfo === locale.textInfo` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getTextInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Informationen zum Textsatz für die Locale-Daten, die in [UTS 35, Layout Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) beschrieben sind. Es hat die folgende Eigenschaft:

- `direction`
  - : Ein String, der die Schreibrichtung für die Locale angibt. Sie wird anhand ihres Schriftsystems bestimmt (unter Verwendung des [wahrscheinlichen Subtags](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize), falls das Schriftsystem nicht ausdrücklich angegeben ist). Der Wert kann `"ltr"` (von links nach rechts), `"rtl"` (von rechts nach links) oder `undefined` sein, wenn sich die Schreibrichtung nicht bestimmen lässt.

## Beispiele

### Informationen zur Schreibrichtung abrufen

Geben Sie die unterstützten Schreibrichtungen für eine bestimmte `Locale` zurück.

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
