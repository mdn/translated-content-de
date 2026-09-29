---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die Schnittstelle **`TrustedScript`** der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String mit einem nicht kompilierten Skriptkörper, den Entwickler in einen [Injection Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen können, der das Skript möglicherweise ausführt. Diese Objekte werden über [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) erstellt und haben daher keinen Konstruktor.

Der Wert eines **TrustedScript**-Objekts wird bei seiner Erstellung festgelegt und kann von JavaScript nicht geändert werden, da kein Setter bereitgestellt wird.

## Instanzmethoden

- [`TrustedScript.toJSON()`](/de/docs/Web/API/TrustedScript/toJSON)
  - : Gibt einen String zurück, der das `TrustedScript`-Objekt repräsentiert und denselben Wert wie [`TrustedScript.toString()`](/de/docs/Web/API/TrustedScript/toString) hat. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.
- [`TrustedScript.toString()`](/de/docs/Web/API/TrustedScript/toString)
  - : Gibt einen String zurück, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted-Types-Policy erstellt wurde.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* a TrustedScript object */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-basierte Cross-Site-Scripting-Sicherheitslücken mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
