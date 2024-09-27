---
title: WebAssembly.Tag
slug: WebAssembly/JavaScript_interface/Tag
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Tag`**-Objekt definiert einen _Typ_ einer WebAssembly-Ausnahme, die zu/von WebAssembly-Code geworfen werden kann.

Beim Erstellen einer [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) definiert der Tag die Datentypen und die Reihenfolge der von der Ausnahme getragenen Werte.
Dasselbe eindeutige Tag-Exemplar muss verwendet werden, um auf die Werte der Ausnahme zuzugreifen (zum Beispiel beim Verwenden von [`Exception.prototype.getArg()`](/de/docs/WebAssembly/JavaScript_interface/Exception/getArg)).

[Das Erstellen](/de/docs/WebAssembly/JavaScript_interface/Tag/Tag) eines Exemplars von `Tag` erzeugt einen neuen eindeutigen Tag.
Dieser Tag kann als Tag-Import an ein WebAssembly-Modul übergeben werden, wo er zu einem typisierten Tag wird, der im _Tag-Bereich_ des WebAssembly-Moduls definiert ist.
Sie können auch einen in einem Modul definierten Tag exportieren und ihn verwenden, um Ausnahmen zu untersuchen, die von dem Modul geworfen werden.

> [!NOTE]
> Sie können nicht mit einem neuen Tag, das zufällig dieselben Parameter hat, auf die Werte einer Ausnahme zugreifen; es ist ein anderer Tag!
> Dies stellt sicher, dass WebAssembly-Module bei Bedarf Ausnahmeinformationen intern halten können.
> Code kann dennoch Ausnahmen abfangen und erneut werfen, die er nicht versteht.

## Konstruktor

- [`WebAssembly.Tag()`](/de/docs/WebAssembly/JavaScript_interface/Tag/Tag)
  - : Erstellt ein neues `WebAssembly.Tag`-Objekt.

## Instanzmethoden

- [`Tag.prototype.type()`](/de/docs/WebAssembly/JavaScript_interface/Tag/type)
  - : Gibt das Objekt zurück, das das Datentypen-Array für den Tag definiert (wie im Konstruktor festgelegt).

## Beispiele

Dieses Code-Snippet erstellt ein neues `Tag`-Exemplar.

```js
const tagToImport = new WebAssembly.Tag({ parameters: ["i32", "f32"] });
```

Das folgende Snippet zeigt, wie wir es einem Modul **example.wasm** während der Instanziierung unter Verwendung eines "Importobjekts" übergeben könnten.

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

Das WebAssembly-Modul könnte den Tag dann wie unten gezeigt importieren:

```wasm
(module
  (import "extmod" "exttag" (tag $tagname (param i32 f32))
)
```

Wenn der Tag verwendet wurde, um eine Ausnahme zu werfen, die nach JavaScript propagiert wurde, könnten wir den Tag verwenden, um seine Werte zu untersuchen.

> [!NOTE]
> Es gibt viele Alternativen. Wir könnten den Tag auch verwenden, um eine [`WebAssembly.Exception`](/de/docs/WebAssembly/JavaScript_interface/Exception) zu erstellen und diese von einer Funktion zu werfen, die von WebAssembly aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Überblick über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
