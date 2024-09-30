---
title: XRInputSourceArray
slug: Web/API/XRInputSourceArray
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}}{{SecureContext_header}}{{SeeCompatTable}}

Die Schnittstelle **`XRInputSourceArray`** repräsentiert eine _lebendige_ Liste von WebXR-Eingabequellen und wird als Rückgabewert der [`XRSession`](/de/docs/Web/API/XRSession)-Eigenschaft [`inputSources`](/de/docs/Web/API/XRSession/inputSources) verwendet. Jeder Eintrag ist eine [`XRInputSource`](/de/docs/Web/API/XRInputSource), die ein mit dem WebXR-System verbundenes Eingabegerät repräsentiert.

Zusätzlich zur Möglichkeit, auf die Eingabequellen in der Liste mit der Standard-Array-Notation (d.h. mit Indexnummern in eckigen Klammern) zuzugreifen, sind Methoden verfügbar, die die Verwendung von Iteratoren zulassen, und auch die Methode [`forEach()`](/de/docs/Web/API/XRInputSourceArray/forEach) ist verfügbar.

## Instanzeigenschaften

_Die folgenden Eigenschaften sind auf `XRInputSourceArray`-Objekten verfügbar._

- [`length`](/de/docs/Web/API/XRInputSourceArray/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Anzahl der [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekte in der Liste.

## Instanzmethoden

_Die folgenden Methoden sind auf `XRInputSourceArray`-Objekten verfügbar. Sie können auch die Funktionen des Typs [`Symbol`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) verwenden._

- [`entries()`](/de/docs/Web/API/XRInputSourceArray/entries) {{Experimental_Inline}}
  - : Gibt einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) zurück, den Sie verwenden können, um die Liste der Schlüssel/Werte-Paare in der Liste zu durchlaufen. Jedes zurückgegebene Element ist ein Array, dessen erster Wert der Index und dessen zweiter Wert die [`XRInputSource`](/de/docs/Web/API/XRInputSource) an diesem Index ist.
- [`forEach()`](/de/docs/Web/API/XRInputSourceArray/forEach) {{Experimental_Inline}}
  - : Iteriert über jedes Element in der Liste, in der Reihenfolge von erstem bis letztem.
- [`keys()`](/de/docs/Web/API/XRInputSourceArray/keys) {{Experimental_Inline}}
  - : Eine Liste der Schlüssel, die den Einträgen in der Eingabebereichsliste entsprechen.
- [`values()`](/de/docs/Web/API/XRInputSourceArray/values) {{Experimental_Inline}}
  - : Gibt einen `iterator` zurück, mit dem Sie alle Werte in der Liste durchgehen können. Jedes Element ist ein einzelnes [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Objekt.

Zusätzlich zu diesen Methoden können Sie Array-Notation verwenden, um Elemente in der Liste nach Index zuzugreifen. Zum Beispiel ruft der untenstehende Codeausschnitt eine Funktion `handleInput()` auf und übergibt ihr das erste Element in der Eingabeliste, sofern die Liste nicht leer ist.

```js
let sources = xrSession.inputSources;
if (sources.length > 0) {
  handleInput(sources[0]);
}
```

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
