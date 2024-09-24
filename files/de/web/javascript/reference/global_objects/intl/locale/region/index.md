---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`region`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Region der Welt (normalerweise ein Land) zurück, die mit diesem Locale verknüpft ist.

## Beschreibung

Region ist eines der Kerneigenschaften eines Locale. Es ermöglicht die Auswahl von Unterschieden zwischen derselben Sprache in verschiedenen Ländern. Beispielsweise wird Englisch im Vereinigten Königreich und den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Das Wissen um die Region des Locales hilft JavaScript-Programmierern sicherzustellen, dass die Inhalte von ihren Websites und Anwendungen korrekt angezeigt werden, wenn sie aus verschiedenen Teilen der Welt betrachtet werden. Der Wert der `region`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `region`-Subtag (dritter Teil, wenn `script` vorhanden ist, ansonsten zweiter Teil) der Locale-Kennung oder durch die `region`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der set-Zugriffsmodifikator von `region` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Region über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen einer Region über den Locale-String

Die Region, falls vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, ansonsten der zweite Teil) einer gültigen Unicode-Sprachkennzeichenkette und kann zu der anfänglichen Locale-Kennzeichenkette hinzugefügt werden, die dem {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil einer Locale-Kennzeichnung ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Gibt "US" aus
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `region`-Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Region und übergeben Sie es dann in den Konstruktor.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // Gibt "FR" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Regionen-Diagramm](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
