---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: 46713c7a67d1f06b739d1b541a64c97adf613b7c
---

Die **`region`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Region der Welt (in der Regel ein Land) zurück, die mit dieser Lokalisierung verknüpft ist.

## Beschreibung

Die Region ist eines der Kerneigenschaften einer Lokalisierung. Sie ermöglicht die Auswahl von Unterschieden zwischen derselben Sprache in verschiedenen Ländern. Zum Beispiel wird Englisch sowohl im Vereinigten Königreich als auch in den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Das Wissen um die Region der Lokalisierung hilft JavaScript-Programmierern sicherzustellen, dass die Inhalte ihrer Websites und Anwendungen korrekt angezeigt werden, wenn sie aus verschiedenen Teilen der Welt betrachtet werden. Der Wert der `region`-Eigenschaft wird zur Zeit der Erstellung festgelegt, entweder durch den `region`-Subtag (dritter Teil, wenn `script` vorhanden ist, sonst zweiter Teil) des Lokalisierungsbezeichners oder durch die `region`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Falls beide vorhanden sind, hat letztere Vorrang; und wenn keine der beiden vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `region` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Lokalisierungs-Subtags kann die Region zum {{jsxref("Intl.Locale")}} Objekt über den Lokalisierungs-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen einer Region über den Lokalisierungs-String

Die Region, falls vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, sonst zweiter Teil) eines gültigen Unicode-Sprachbezeichner-Strings und kann dem anfänglichen Lokalisierungsbezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Bestandteil eines Lokalisierungsbezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `region` Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Region und übergeben Sie sie dann in den Konstruktor.

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
- [Unicode Regionstabelle](https://www.unicode.org/cldr/charts/47/supplemental/territory_containment_un_m_49.html)
