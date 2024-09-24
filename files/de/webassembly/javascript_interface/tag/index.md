---
title: WebAssembly.Tag
slug: WebAssembly/JavaScript_interface/Tag
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Tag`**-Objekt definiert einen _Typ_ einer WebAssembly-Ausnahme, die vom/zum WebAssembly-Code geworfen werden kann.

Beim Erstellen einer [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) definiert das Tag die Datentypen und die Reihenfolge der von der Ausnahme getragenen Werte. Derselbe eindeutige Tag-Instanz muss verwendet werden, um die Werte der Ausnahme zuzugreifen (zum Beispiel bei der Verwendung von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg)).

Das [Konstruktieren](/de/docs/WebAssembly/JavaScript_interface/Tag/Tag) einer Instanz von `Tag` erstellt ein neues eindeutiges Tag. Dieses Tag kann als Tag-Import in ein WebAssembly-Modul übergeben werden, wo es zu einem typisierten Tag wird, das im _Tag-Abschnitt_ des WebAssembly-Moduls definiert ist. Sie können auch ein in einem Modul definiertes Tag exportieren und es verwenden, um Ausnahmen zu inspizieren, die aus dem Modul geworfen werden.

> [!NOTE]
> Sie können nicht auf die Werte einer Ausnahme mit einem neuen Tag zugreifen, das zufällig dieselben Parameter hat; es handelt sich um ein anderes Tag! Dies stellt sicher, dass WebAssembly-Module die Ausnahmeinformationen intern halten können, wenn erforderlich. Code kann weiterhin Ausnahmen abfangen und neu werfen, die er nicht versteht.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/JavaScript_interface/Tag/Tag)
  - : Erstellt ein neues `WebAssembly.Tag`-Objekt.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datenarten-Array für das Tag definiert (wie in seinem Konstruktor festgelegt).

## Beispiele

Dieser Codeausschnitt erstellt eine neue `Tag`-Instanz.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das folgende Beispiel zeigt, wie wir es bei der Instanziierung eines Moduls **example.wasm** unter Verwendung eines "Import-Objekts" übergeben könnten.

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

Wenn das Tag verwendet wurde, um eine Ausnahme zu werfen, die in JavaScript propagiert wurde, könnten wir das Tag verwenden, um seine Werte zu inspizieren.

> [!NOTE]
> Es gibt viele Alternativen. Wir könnten das Tag auch verwenden, um eine [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) zu erstellen und diese von einer Funktion werfen, die von WebAssembly aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
