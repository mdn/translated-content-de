---
title: Intl.Locale.prototype.numeric
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die **`numeric`**-Accessor-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt an, ob für diese Locale eine besondere Sortierbehandlung numerischer Zeichen gilt.

## Beschreibung

Wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} stellt `numeric` eine Änderung der Sortierregeln dar, die von der Locale verwendet werden. `numeric` ist ein boolescher Wert und kann daher entweder `true` oder `false` sein. Wenn `numeric` auf `false` gesetzt ist, werden numerische Werte in Zeichenfolgen nicht besonders behandelt. Wenn `numeric` auf `true` gesetzt ist, berücksichtigt die Locale numerische Zeichen beim Sortieren von Zeichenfolgen. Diese besondere Behandlung bedeutet, dass Folgen von Dezimalziffern als Zahlen verglichen werden. Beispielsweise wird die Zeichenfolge „A-21“ als kleiner als „A-123“ betrachtet.

Der Wert der Eigenschaft `numeric` wird beim Erstellen festgelegt, entweder über den `kn`-Schlüssel des Locale-Identifikators oder über die Option `numeric` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Die Option hat Vorrang, wenn beides angegeben ist. Ist keines von beiden angegeben, hat die Eigenschaft den Wert `false`.

Der Set-Accessor von `numeric` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Wert von `numeric` dem {{jsxref("Intl.Locale")}}-Objekt über die Locale-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Einen `numeric`-Wert über die Locale-Zeichenfolge hinzufügen

Gemäß der [Spezifikation für Unicode-Locale-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `numeric` ein „Erweiterungs-Subtag“. Solche Subtags ergänzen Locale-Identifikatoren mithilfe des Erweiterungsschlüssels `-u` um zusätzliche Angaben zur Locale. Um der anfänglichen Locale-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen `numeric`-Wert hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-kn` hinzu, um anzugeben, dass Sie einen Wert für `numeric` hinzufügen. Fügen Sie abschließend den Wert für `numeric` hinzu. Wenn Sie `numeric` auf `true` setzen möchten, genügt es, den Schlüssel `kn` hinzuzufügen. Um den Wert auf `false` zu setzen, müssen Sie nach dem Schlüssel `kn` ausdrücklich `"false"` angeben.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // false
```

### Einen `numeric`-Wert über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter `numeric`. Setzen Sie die Eigenschaft `numeric` des Konfigurationsobjekts auf den gewünschten `numeric`-Wert und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
