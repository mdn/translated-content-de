---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

Die **`region`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Region der Welt (normalerweise ein Land) zurück, die mit diesem Gebietsschema verbunden ist.

## Beschreibung

Die Region ist eines der Kernelemente eines Gebietsschemas. Sie ermöglicht die Unterscheidung zwischen derselben Sprache in verschiedenen Ländern. Zum Beispiel wird Englisch im Vereinigten Königreich und in den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Wenn Sie die Region eines Gebietsschemas kennen, können JavaScript-Programmierer sicherstellen, dass die Inhalte ihrer Websites und Anwendungen korrekt angezeigt werden, wenn sie aus verschiedenen Teilen der Welt betrachtet werden. Der Wert der `region`-Eigenschaft wird zur Konstruktionszeit festgelegt, entweder über das `region`-Subtag (dritter Teil, wenn `script` vorhanden ist, sonst zweiter Teil) des Gebietsschema-Identifiers oder über die `region`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Die letztere Option hat Vorrang, wenn beide vorhanden sind; und wenn keine vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Zugriff für `region` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann die Region über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen einer Region über den Gebietsschema-String

Die Region, wenn vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, sonst der zweite Teil) eines gültigen Unicode-Sprachidentifikator-Strings und kann zu dem anfänglichen Gebietsschema-Identifikator-String hinzugefügt werden, der dem {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil eines Gebietsschema-Identifiers ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `region`-Eigenschaft des Konfigurationsobjekts auf die gewünschte Region und übergeben Sie diese dann dem Konstruktor.

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
- [Unicode-Regionstabelle](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
