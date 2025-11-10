---
title: Translator
slug: Web/API/Translator
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`Translator`**-Interface der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält alle zugehörigen Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Translator`-Instanz, der Nutzung zur Erstellung einer Übersetzung und mehr.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabelimit, das dem Browser für die Generierung von Übersetzungen zur Verfügung steht.
- [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die erwartete Sprache des zu übersetzenden Eingabetextes.
- [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in die der Eingabetext übersetzt wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Translator/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.
- [`create()`](/de/docs/Web/API/Translator/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Translator`-Instanz, aus der Übersetzungen generiert werden können.

## Instanz-Methoden

- [`destroy()`](/de/docs/Web/API/Translator/destroy) {{Experimental_Inline}}
  - : Gibt die Ressourcen frei, die der `Translator`-Instanz zugewiesen sind, auf der sie aufgerufen wird, und stoppt jegliche weitere Aktivität darauf.
- [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabelimit von einem Übersetzungsvorgang für einen gegebenen Texteingang verwendet werden würde.
- [`translate()`](/de/docs/Web/API/Translator/translate) {{Experimental_Inline}}
  - : Gibt einen String zurück, der eine Übersetzung des Eingabestrings enthält.
- [`translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) {{Experimental_Inline}}
  - : Generiert eine Übersetzung des Eingabestrings als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Sehen Sie [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

### Erstellen einer `Translator`-Instanz

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### Generierung einer Übersetzung

```js
const translation = await translator.translate(myTextString);
console.log(translation);
```

### Generierung eines Übersetzungsstroms

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
