---
title: Intl.DurationFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat
l10n:
  sourceCommit: 65bd9d66ad51dfe250494618a695046c6574421a
---

{{JSRef}}

Das **`Intl.DurationFormat`**-Objekt ermöglicht die sprachsensitivierte Formatierung von Dauerangaben.

## Konstruktor

- {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat()")}}
  - : Erstellt ein neues `Intl.DurationFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/DurationFormat/supportedLocalesOf", "Intl.DurationFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der angegebenen Gebietsschemen enthält, die unterstützt werden, ohne auf das Standardgebietsschema der Laufzeitumgebung zurückgreifen zu müssen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.DurationFormat.prototype` definiert und werden von allen `Intl.DurationFormat`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Intl.DurationFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.DurationFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/DurationFormat/DurationFormat", "Intl.DurationFormat")}}-Konstruktor.
- `Intl.DurationFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.DurationFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/DurationFormat/format", "Intl.DurationFormat.prototype.format()")}}
  - : Getter-Funktion, die eine Dauer gemäß dem Gebietsschema und den Formatierungsoptionen dieses `DurationFormat`-Objekts formatiert.
- {{jsxref("Intl/DurationFormat/formatToParts", "Intl.DurationFormat.prototype.formatToParts()")}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, das die formatierte Dauer in Teilen darstellt.
- {{jsxref("Intl/DurationFormat/resolvedOptions", "Intl.DurationFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die das während der Initialisierung des Objekts berechnete Gebietsschema und die Formatierungsoptionen widerspiegeln.

## Beispiele

### Verwendung von Intl.DurationFormat

Die folgenden Beispiele zeigen, wie man das `Intl.DurationFormat`-Objekt verwendet, um ein Dauerobjekt mit verschiedenen Gebietsschemen und Stilen zu formatieren.

```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// With style set to "long" and locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// With style set to "short" and locale "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// With style set to "narrow" and locale "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl")}}
