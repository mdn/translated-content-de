---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`numeric`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt an, ob diese Locale eine spezielle Kollationsbehandlung für numerische Zeichen hat.

## Beschreibung

Ähnlich wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} repräsentiert `numeric` eine Modifikation der Kollationsregeln, die von der Locale verwendet werden. `numeric` ist ein boolescher Wert, was bedeutet, dass er entweder `true` oder `false` sein kann. Wenn `numeric` auf `false` gesetzt ist, wird es keine spezielle Behandlung von numerischen Werten in Zeichenfolgen geben. Wenn `numeric` auf `true` gesetzt ist, wird die Locale numerische Zeichen berücksichtigen, wenn Zeichenfolgen kollationiert werden. Diese spezielle numerische Behandlung bedeutet, dass Folgen von Dezimalstellen als Zahlen verglichen werden. Zum Beispiel wird die Zeichenfolge "A-21" als kleiner als "A-123" angesehen.

## Beispiele

### Einstellung des Numeric-Werts über die Locale-Zeichenfolge

Im [Unicode-Locale-Zeichenfolgenspezifikation](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `numeric` repräsentiert, dem Schlüssel `kn`. `kn` wird als "Erweiterungs-Untertaste" für Locale-Zeichenfolgen betrachtet. Diese Untertags fügen zusätzliche Daten über die Locale hinzu und werden durch Verwendung des `-u` Erweiterungsschlüssels zu Locale-Kennungen hinzugefügt. Somit kann der `numeric` Wert der anfänglichen Locale-Kennungszeichenfolge hinzugefügt werden, die an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den `numeric` Wert zu setzen, fügen Sie zunächst den `-u` Erweiterungsschlüssel zur Zeichenfolge hinzu. Fügen Sie dann den `-kn` Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `numeric` hinzufügen. Schließlich fügen Sie den `numeric` Wert zur Zeichenfolge hinzu. Wenn Sie `numeric` auf `true` setzen möchten, genügt das Hinzufügen des `kn` Schlüssels. Um den Wert auf `false` zu setzen, müssen Sie dies angeben, indem Sie `"false"` nach dem `kn` Schlüssel hinzufügen.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // Prints "false"
```

### Einstellung des Numeric-Werts über das Konfigurationsobjekt-Argument

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
