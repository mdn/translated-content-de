---
title: Intl.Locale.prototype.getTextInfo()
short-title: getTextInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getTextInfo()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt die Anordnung der Zeichen entweder durch `ltr` (von links nach rechts) oder durch `rtl` (von rechts nach links) für diese Lokalisierung zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft namens `textInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, ist sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.textInfo === locale.textInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTextInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das informationen zur Textsatzgestaltung enthält, die mit den Lokalisierungsdaten verbunden sind, wie in [UTS 35's Layouts Elements](https://www.unicode.org/reports/tr35/tr35-general.html#Layout_Elements) angegeben. Es hat die folgenden Eigenschaften:

- `direction`
  - : Ein String, der die Textrichtung für die Lokalisierung angibt. Kann entweder `"ltr"` (von links nach rechts) oder `"rtl"` (von rechts nach links) sein.

## Beispiele

### Textinformation abrufen

Holen Sie die unterstützten Textausrichtungen für eine gegebene `Locale`.

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
