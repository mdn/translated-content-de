---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`region`** Zugriffsproperty von {{jsxref("Intl.Locale")}} Instanzen gibt die Region der Welt (meistens ein Land) zurück, die mit diesem Locale verbunden ist.

## Beschreibung

Region ist eines der Kernelemente eines Locales. Es ermöglicht die Auswahl von Unterschieden zwischen derselben Sprache in verschiedenen Ländern. Zum Beispiel wird Englisch sowohl im Vereinigten Königreich als auch in den Vereinigten Staaten von Amerika gesprochen, es gibt jedoch Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Das Wissen über die Region des Locales hilft JavaScript-Programmierern sicherzustellen, dass die Inhalte ihrer Websites und Anwendungen korrekt angezeigt werden, wenn sie aus verschiedenen Teilen der Welt betrachtet werden. Der Wert der `region` Eigenschaft wird zur Erstellungszeit gesetzt, entweder über den `region` Subtag (dritter Teil, wenn `script` vorhanden ist, sonst zweiter Teil) des Locale-Identifiers oder über die `region` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keine vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `region` ist `undefined`. Sie können diese Property nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Region über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor zum {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen einer Region über den Locale-String

Die Region, wenn vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, sonst der zweite Teil) eines gültigen Unicode-Sprachidentifier-Strings und kann zu dem anfänglichen Locale-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil eines Locale-Identifiers ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Stellen Sie die `region` Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Region ein und übergeben Sie es dann dem Konstruktor.

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
- [Unicode Region Chart](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
