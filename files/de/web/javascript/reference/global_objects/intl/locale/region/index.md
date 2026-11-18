---
title: Intl.Locale.prototype.region
short-title: region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die **`region`**-Accessor-Property von {{jsxref("Intl.Locale")}}-Instanzen gibt die Weltregion (in der Regel ein Land) zurück, die dieser Locale zugeordnet ist.

## Beschreibung

Die Region ist eines der Kernattribute einer Locale. Sie ermöglicht es, Unterschiede zwischen Varianten derselben Sprache zu berücksichtigen, die beispielsweise in verschiedenen Ländern verwendet werden. Englisch wird etwa im Vereinigten Königreich und in den Vereinigten Staaten von Amerika gesprochen, doch Rechtschreibung und andere sprachliche Konventionen unterscheiden sich zwischen diesen beiden Ländern. Die Kenntnis der Region einer Locale hilft JavaScript-Entwicklern sicherzustellen, dass Inhalte ihrer Websites und Anwendungen korrekt dargestellt werden, wenn sie aus verschiedenen Teilen der Welt aufgerufen werden.

Der Wert der `region`-Property wird bei der Erstellung festgelegt: entweder durch den Teil des Locale-Bezeichners nach `script` oder durch die Option `region` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beide angegeben sind, hat die Option Vorrang. Ist keiner von beiden angegeben, hat die Property den Wert `undefined`.

Der Set-Accessor von `region` ist `undefined`. Sie können diese Property nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Region dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder über ein Konfigurationsobjekt als Argument für den Konstruktor hinzugefügt werden.

### Eine Region über den Locale-String hinzufügen

Falls vorhanden, ist die Region der dritte Teil eines gültigen Unicode-Sprachbezeichners (oder der zweite Teil, wenn `script` nicht vorhanden ist). Sie kann dem ursprünglichen Locale-Bezeichner hinzugefügt werden, der an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird. Beachten Sie, dass die Region kein erforderlicher Bestandteil eines Locale-Bezeichners ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // "US"
```

### Eine Region über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Setzen Sie dessen `region`-Property auf die gewünschte Region und übergeben Sie das Objekt anschließend an den Konstruktor.

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
- [Unicode-Regionstabelle](https://www.unicode.org/cldr/charts/47/supplemental/territory_containment_un_m_49.html)
