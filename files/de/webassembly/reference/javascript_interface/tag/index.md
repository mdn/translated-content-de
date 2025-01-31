---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Das **`WebAssembly.Tag`** Objekt definiert einen _Typ_ einer WebAssembly-Ausnahme, die in/aus WebAssembly-Code ausgelöst werden kann.

Beim Erstellen einer [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) definiert das Tag die Datentypen und die Reihenfolge der von der Ausnahme übertragenen Werte. Die gleiche eindeutige Tag-Instanz muss verwendet werden, um auf die Werte der Ausnahme zuzugreifen (zum Beispiel bei der Verwendung von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg)).

Das [Erstellen](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) einer Instanz von `Tag` erzeugt ein neues einzigartiges Tag. Dieses Tag kann als Tag-Import an ein WebAssembly-Modul übergeben werden, wo es zu einem typisierten Tag wird, das im _Tag-Abschnitt_ des WebAssembly-Moduls definiert ist. Sie können auch ein in einem Modul definiertes Tag exportieren und es verwenden, um Ausnahmen zu inspizieren, die aus dem Modul geworfen werden.

> [!NOTE]
> Sie können die Werte einer Ausnahme nicht mit einem neuen Tag abrufen, das zufällig die gleichen Parameter hat; es ist ein anderes Tag!
> Dies stellt sicher, dass WebAssembly-Module ggf. die Ausnahmendaten intern halten können.
> Der Code kann Ausnahmen, die er nicht versteht, trotzdem abfangen und erneut werfen.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt ein neues `WebAssembly.Tag` Objekt.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentypen-Array für das Tag definiert (wie im Konstruktor festgelegt).

## Beispiele

Dieses Codebeispiel erstellt eine neue `Tag`-Instanz.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das folgende Beispiel zeigt, wie wir es während der Instanziierung an ein Modul **example.wasm** mit einem "Import-Objekt" übergeben könnten.

```js
const importObject = {
  extmod: {
    exttag: tagToImport,
  },
};

WebAssembly.instantiateStreaming(fetch("example.wasm"), importObject).then(
  (obj) => {
    // …
  },
);
```

Das WebAssembly-Modul könnte das Tag dann wie unten gezeigt importieren:

```wasm
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32))
)
```

Wenn das Tag verwendet wurde, um eine Ausnahme auszulösen, die bis zu JavaScript propagiert wurde, könnten wir das Tag verwenden, um seine Werte zu inspizieren.

> [!NOTE]
> Es gibt viele Alternativen. Wir könnten das Tag auch verwenden, um eine [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zu erstellen und diese aus einer von WebAssembly aufgerufenen Funktion auszulösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
