---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`numeric`** Zugriffs-Property von {{jsxref("Intl.Locale")}} Instanzen gibt zurück, ob diese Locale eine spezielle Sortierbehandlung für numerische Zeichen hat.

## Beschreibung

Ähnlich wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} stellt `numeric` eine Modifikation der von der Locale verwendeten Sortierregeln dar. `numeric` ist ein boolescher Wert, was bedeutet, dass er entweder `true` oder `false` sein kann. Wenn `numeric` auf `false` gesetzt ist, gibt es keine spezielle Behandlung von Zahlenwerten in Zeichenfolgen. Wenn `numeric` auf `true` gesetzt ist, wird die Locale numerische Zeichen beim Sortieren von Zeichenfolgen berücksichtigen. Diese spezielle numerische Behandlung bedeutet, dass Sequenzen von Dezimalziffern als Zahlen verglichen werden. Zum Beispiel wird der String "A-21" als kleiner angesehen als "A-123".

## Beispiele

### Setzen des numeric-Wertes über den Locale-String

Im [Unicode Locale String-Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `numeric` darstellt, dem Schlüssel `kn`. `kn` wird als "Erweiterungs-Unterschild" des Locale-Strings betrachtet. Diese Unterschilder fügen zusätzliche Daten über die Locale hinzu und werden durch den `-u` Erweiterungsschlüssel zu Locale-Bezeichnern hinzugefügt. Daher kann der `numeric` Wert zum anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den `numeric` Wert zu setzen, fügen Sie zunächst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie anschließend den `-kn` Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `numeric` hinzufügen. Schließlich fügen Sie den `numeric` Wert dem String hinzu. Wenn Sie `numeric` auf `true` setzen möchten, reicht es aus, den `kn` Schlüssel hinzuzufügen. Um den Wert auf `false` zu setzen, müssen Sie nach dem `kn` Schlüssel `"false"` hinzufügen.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // Prints "false"
```

### Setzen des numeric-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `numeric` Eigenschaft des Konfigurationsobjekts auf den gewünschten `numeric` Wert und übergeben Sie ihn an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // Prints "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
