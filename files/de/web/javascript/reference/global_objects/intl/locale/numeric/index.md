---
title: Intl.Locale.prototype.numeric
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`numeric`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt zurück, ob diese Locale eine spezielle Sortierbehandlung für numerische Zeichen aufweist.

## Beschreibung

Wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} stellt `numeric` eine Modifikation der Sortierregeln dar, die von der Locale verwendet werden. `numeric` ist ein boolescher Wert, was bedeutet, dass er entweder `true` oder `false` sein kann. Wenn `numeric` auf `false` gesetzt ist, gibt es keine spezielle Behandlung von numerischen Werten in Zeichenfolgen. Ist `numeric` auf `true` gesetzt, wird die Locale numerische Zeichen bei der Sortierung von Zeichenfolgen berücksichtigen. Diese spezielle numerische Behandlung bedeutet, dass Folgen von Dezimalziffern als Zahlen verglichen werden. Zum Beispiel wird die Zeichenkette "A-21" als kleiner als "A-123" betrachtet.

## Beispiele

### Einstellen des numeric-Werts über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `numeric` darstellt, dem Schlüssel `kn`. `kn` wird als Locale-String-"Erweiterungstag" betrachtet. Diese Subtags fügen zusätzliche Daten über die Locale hinzu und werden zum Locale-Bezeichner unter Verwendung des `-u` Erweiterungsschlüssels hinzugefügt. Somit kann der `numeric`-Wert dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den `numeric`-Wert festzulegen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie als nächstes den `-kn` Erweiterungsschlüssel hinzu, um anzugeben, dass Sie einen Wert für `numeric` hinzufügen. Schließlich fügen Sie den `numeric`-Wert zum String hinzu. Wenn Sie `numeric` auf `true` setzen möchten, genügt es, den `kn` Schlüssel hinzuzufügen. Um den Wert auf `false` zu setzen, müssen Sie dies angeben, indem Sie `"false"` nach dem `kn` Schlüssel hinzufügen.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // Prints "false"
```

### Einstellen des numeric-Werts über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `numeric`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `numeric`-Wert und übergeben Sie es an den Konstruktor.

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
