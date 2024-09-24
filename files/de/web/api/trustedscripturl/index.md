---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedScriptURL`**-Schnittstelle der {{domxref("Trusted Types API", "", "", "nocode")}} repräsentiert eine Zeichenkette, die ein Entwickler in eine [Injection-Senke](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, die sie als URL eines externen Skripts interpretiert. Diese Objekte werden über {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}} erstellt und besitzen daher keinen Konstruktor.

Der Wert eines `TrustedScriptURL`-Objekts wird beim Erstellen des Objekts festgelegt und kann von JavaScript nicht geändert werden, da kein Setter bereitgestellt wird.

## Instanzmethoden

- {{domxref("TrustedScriptURL.toJSON()")}}
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- {{domxref("TrustedScriptURL.toString()")}}
  - : Eine Zeichenkette, die die bereinigte URL enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types Policy erstellt wurde.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized); /* ein TrustedScriptURL-Objekt */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
