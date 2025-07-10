---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`region`** Accessor-Eigenschaft von Instanzen von {{jsxref("Intl.Locale")}} gibt die Region der Welt (normalerweise ein Land) zurück, die mit diesem Gebietsschema assoziiert ist.

## Beschreibung

Die Region ist eines der Kerneigenschaften eines Gebietsschemas. Sie ermöglicht die Auswahl von Unterschieden zwischen derselben Sprache in beispielsweise verschiedenen Ländern. Zum Beispiel wird Englisch im Vereinigten Königreich und in den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Die Kenntnis der Region des Gebietsschemas hilft JavaScript-Programmierern sicherzustellen, dass der Inhalt ihrer Websites und Anwendungen korrekt angezeigt wird, wenn sie aus verschiedenen Teilen der Welt betrachtet werden. Der Wert der `region`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `region`-Subtag (dritter Teil, wenn `script` vorhanden ist, sonst zweiter Teil) des Gebietsschema-Identifiers oder durch die `region`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Priorität, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `region` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Region dem {{jsxref("Intl.Locale")}} Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen einer Region über den Gebietsschema-String

Die Region, falls vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, sonst zweiter Teil) eines gültigen Unicode-Sprachidentifikator-Strings und kann dem ursprünglichen Gebietsschema-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil eines Gebietsschema-Identifiers ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `region`-Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Region und übergeben Sie es dann in den Konstruktor.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // Prints "FR"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode Regionstabelle](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
