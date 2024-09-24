---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{JSRef}}

Die **`numeric`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt zurück, ob dieses Gebietsschema eine spezielle Sortierbehandlung für numerische Zeichen aufweist.

## Beschreibung

Ähnlich wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} stellt `numeric` eine Modifikation der Sortierregeln dar, die vom Gebietsschema verwendet werden. `numeric` ist ein boolescher Wert, was bedeutet, dass er entweder `true` oder `false` sein kann. Ist `numeric` auf `false` eingestellt, gibt es keine spezielle Behandlung von numerischen Werten in Zeichenfolgen. Ist `numeric` auf `true` eingestellt, berücksichtigt das Gebietsschema numerische Zeichen beim Vergleichen von Zeichenfolgen. Diese spezielle numerische Behandlung bedeutet, dass Sequenzen von Dezimalziffern als Zahlen verglichen werden. Zum Beispiel wird die Zeichenfolge "A-21" als kleiner als "A-123" angesehen.

## Beispiele

### Den numerischen Wert über den Gebietsschemastring einstellen

In der [Unicode locale string spec](https://www.unicode.org/reports/tr35/) entsprechen die Werte, die `numeric` darstellt, dem Schlüssel `kn`. `kn` wird als "Erweiterungsuntertag" des Gebietsschemastrings betrachtet. Diese Untertags fügen zusätzliche Informationen über das Gebietsschema hinzu und werden zu Gebietsschema-Identifiers hinzugefügt, indem der `-u` Erweiterungsschlüssel verwendet wird. So kann der `numeric`-Wert zum anfänglichen Gebietsschema-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Um den `numeric`-Wert einzustellen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie als Nächstes den `-kn` Erweiterungsschlüssel hinzu, um anzuzeigen, dass Sie einen Wert für `numeric` hinzufügen. Schließlich fügen Sie den `numeric`-Wert zum String hinzu. Wenn Sie `numeric` auf `true` setzen möchten, reicht das Hinzufügen des `kn`-Schlüssels aus. Um den Wert auf `false` zu setzen, müssen Sie dies angeben, indem Sie `"false"` nach dem `kn`-Schlüssel hinzufügen.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // Gibt "false" aus
```

### Den numerischen Wert über das Konfigurationsobjekt-Argument einstellen

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verwendet werden kann, um Erweiterungstypen zu übergeben. Setzen Sie die `numeric`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `numeric`-Wert und übergeben Sie es an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // Gibt "true" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
