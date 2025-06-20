---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`region`** Zugriffsproperty von {{jsxref("Intl.Locale")}} Instanzen gibt die mit dieser Locale verbundene Region der Welt (gewöhnlich ein Land) zurück.

## Beschreibung

Die Region ist eines der Kernelemente einer Locale. Sie ermöglicht die Auswahl für Unterschiede zwischen der gleichen Sprache in verschiedenen Ländern. Zum Beispiel wird Englisch sowohl im Vereinigten Königreich als auch in den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Das Wissen über die Region einer Locale hilft JavaScript-Programmierern sicherzustellen, dass der Inhalt ihrer Websites und Anwendungen korrekt dargestellt wird, wenn er aus verschiedenen Teilen der Welt betrachtet wird. Der Wert der `region` Property wird zur Konstruktionszeit festgelegt, entweder durch den `region` Untertag (dritter Teil, wenn `script` vorhanden ist, ansonsten zweiter Teil) der Locale-Kennung oder durch die `region` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keiner von beiden vorhanden ist, hat die Property den Wert `undefined`.

Der set-Zugriff von `region` ist `undefined`. Sie können diese Property nicht direkt ändern.

## Beispiele

Wie andere Locale-Untertags kann die Region über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen einer Region über den Locale-String

Die Region, falls vorhanden, ist der dritte Teil (wenn `script` vorhanden ist, ansonsten der zweite Teil) eines gültigen Unicode-Sprachbezeichner-Strings und kann dem initialen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil eines Locale-Bezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Hinzufügen einer Region über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `region` Property des Konfigurationsobjekts auf Ihre gewünschte Region und übergeben Sie diese dann an den Konstruktor.

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
