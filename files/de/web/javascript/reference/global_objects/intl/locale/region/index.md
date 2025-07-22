---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`region`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt die Region der Welt (normalerweise ein Land) zurück, die mit diesem Gebietsschema verknüpft ist.

## Beschreibung

Die Region ist eines der Kernelemente eines Gebietsschemas. Sie ermöglicht die Auswahl von Unterschieden innerhalb derselben Sprache in verschiedenen Ländern. Zum Beispiel wird Englisch sowohl im Vereinigten Königreich als auch in den Vereinigten Staaten von Amerika gesprochen, aber es gibt Unterschiede in der Rechtschreibung und anderen Sprachkonventionen zwischen diesen beiden Ländern. Wenn JavaScript-Programmierer das Gebietsschema einer Region kennen, können sie sicherstellen, dass der Inhalt ihrer Websites und Anwendungen korrekt angezeigt wird, wenn er aus verschiedenen Teilen der Welt betrachtet wird.

Der Wert der `region`-Eigenschaft wird zur Konstruktion festgelegt, entweder durch den Teil des Gebietsschema-Identifiers nach `script` oder durch die `region`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines von beiden vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Zugriff von `region` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Unterkennungen kann die Region über den Gebietsschema-String oder ein Konfigurationsobjektargument zum Konstruktor zum {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen einer Region über den Gebietsschema-String

Die Region, wenn sie vorhanden ist, ist der dritte Teil (wenn `script` vorhanden ist, sonst der zweite Teil) einer gültigen Unicode-Sprachidentifier-Zeichenfolge und kann dem anfänglichen Gebietsschema-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Beachten Sie, dass die Region kein erforderlicher Teil eines Gebietsschema-Identifiers ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // "US"
```

### Hinzufügen einer Region über das Konfigurationsobjektargument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjektargument. Setzen Sie die `region`-Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Region und übergeben Sie sie dann in den Konstruktor.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // "FR"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode Regionsdiagramm](https://www.unicode.org/cldr/charts/47/supplemental/territory_containment_un_m_49.html)
