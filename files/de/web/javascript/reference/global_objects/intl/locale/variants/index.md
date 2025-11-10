---
title: Intl.Locale.prototype.variants
short-title: variants
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`variants`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt die Varianten zurück, die dieser Locale zugeordnet sind, als eine durch Bindestriche (`-`) getrennte Zeichenkette von Identifikatoren in der ursprünglich angegebenen Reihenfolge.

## Beschreibung

Varianten sind Teil der Hauptsprachen-ID. Sie wählen Varianten einer Sprache aus, die das (Sprache, Region, Skript)-Triplett nicht unterscheiden kann. Normalerweise repräsentieren sie dieselbe Sprache in unterschiedlichen Epochen oder verschiedenen Orthografien. Zum Beispiel hat Deutsch die Orthografievarianten `1901` und `1996`, die als `de-1901` und `de-1996` geschrieben werden; die Variante "Frühmoderne Englisch (1500-1700)" wird als `en-emodeng` geschrieben. Das Subtag kann mehrere durch Bindestriche (`-`) getrennte Identifikatoren enthalten. Diese Identifikatoren sind technisch gesehen ungeordnet, obwohl sie in der Praxis oft eine semantische Hierarchie haben — zum Beispiel wird der Resian-Dialekt des Slowenischen als `sl-rozaj` geschrieben, und der San Giorgio/Bila-Dialekt von Resian wird als `sl-rozaj-biske` geschrieben.

Der Wert der `variants`-Eigenschaft wird bei der Konstruktion festgelegt, entweder durch den Teil des Locale-Identifikators nach der `region` oder durch die `variants`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `variants` ist `undefined`. Man kann diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags können die Varianten über den locale-String oder ein Konfigurationsobjekt-Argument in das {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen von Varianten über den locale-String

Die Varianten, wenn vorhanden, sind die letzten Teile eines gültigen Unicode-Sprachidentifikator-Strings und können dem initialen Locale-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Beachten Sie, dass die Varianten kein erforderlicher Teil eines Locale-Identifikators sind.

```js
const locale = new Intl.Locale("sl-rozaj-biske");
console.log(locale.variants); // "rozaj-biske"
```

### Hinzufügen von Varianten über das Konfigurationsobjekt

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument. Setzen Sie die `variants`-Eigenschaft des Konfigurationsobjekts auf die gewünschten Varianten und übergeben Sie sie dann an den Konstruktor.

```js
const locale = new Intl.Locale("sl", { variants: "rozaj-biske" });
console.log(locale.variants); // "rozaj-biske"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode variant subtag](https://www.unicode.org/reports/tr35/#unicode_variant_subtag_validity) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
- [IANA language subtag registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)
