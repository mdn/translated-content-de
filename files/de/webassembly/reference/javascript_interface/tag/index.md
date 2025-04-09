---
title: WebAssembly.Tag
slug: WebAssembly/Reference/JavaScript_interface/Tag
l10n:
  sourceCommit: c0fc8c988385a0ce8ff63887f9a3263caf55a1f9
---

Das **`WebAssembly.Tag`**-Objekt definiert einen _Typ_ einer WebAssembly-Ausnahme, die an/von WebAssembly-Code geworfen werden kann.

Beim Erstellen einer [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) bestimmt das Tag die Datentypen und die Reihenfolge der Werte, die von der Ausnahme getragen werden.
Dasselbe einzigartige Tag-Exemplar muss verwendet werden, um auf die Werte der Ausnahme zuzugreifen (zum Beispiel, wenn [`Exception.prototype.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) verwendet wird).

Das [Erstellen](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) einer Instanz von `Tag` erstellt ein neues, einzigartiges Tag.
Dieses Tag kann als Tag-Import an ein WebAssembly-Modul übergeben werden, wo es zu einem typisierten Tag wird, das im _Tag-Abschnitt_ des WebAssembly-Moduls definiert ist.
Sie können auch ein in einem Modul definiertes Tag exportieren und es verwenden, um Ausnahmen zu untersuchen, die aus dem Modul geworfen werden.

> [!NOTE]
> Sie können nicht auf die Werte einer Ausnahme mit einem neuen Tag zugreifen, das zufällig dieselben Parameter hat; es ist ein anderes Tag!
> Dies stellt sicher, dass WebAssembly-Module Auskunftsinformationen intern halten können, wenn erforderlich.
> Der Code kann dennoch Ausnahmen abfangen und erneut werfen, die er nicht versteht.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag)
  - : Erstellt ein neues `WebAssembly.Tag`-Objekt.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentyp-Array für das Tag (wie in seinem Konstruktor festgelegt) definiert.

## Beispiele

Dieser Codeabschnitt erstellt eine neue `Tag`-Instanz.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das folgende Beispiel zeigt, wie wir es während der Instanziierung einem Modul **example.wasm** übergeben könnten, indem wir ein "import object" verwenden.

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

```wat
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32))
)
```

Wenn das Tag verwendet wurde, um eine Ausnahme zu werfen, die nach JavaScript propagiert wurde, könnten wir das Tag verwenden, um seine Werte zu untersuchen.

> [!NOTE]
> Es gibt viele Alternativen. Wir könnten das Tag auch verwenden, um eine [`WebAssembly.Exception`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception) zu erstellen und diese aus einer Funktion zu werfen, die von WebAssembly aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
