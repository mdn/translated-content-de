---
title: Translator
slug: Web/API/Translator
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Das **`Translator`**-Interface der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält alle zugehörigen Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, deren Verwendung zur Erstellung einer Übersetzung und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabe-Kontingent, das dem Browser zur Generierung von Übersetzungen zur Verfügung steht.
- [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die erwartete Sprache des zu übersetzenden Eingangstextes.
- [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in die der Eingangstext übersetzt wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Translator/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration anzeigt.
- [`create()`](/de/docs/Web/API/Translator/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Translator`-Instanz, mit der Übersetzungen generiert werden.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/Translator/destroy) {{Experimental_Inline}}
  - : Zerstört die `Translator`-Instanz, auf der es aufgerufen wird.
- [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) {{Experimental_Inline}}
  - : Gibt an, wie viel Eingabe-Kontingent bei einem Übersetzungsvorgang für einen bestimmten Texteingang verwendet würde.
- [`translate()`](/de/docs/Web/API/Translator/translate) {{Experimental_Inline}}
  - : Gibt einen String zurück, der eine Übersetzung des Eingabestrings enthält.
- [`translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) {{Experimental_Inline}}
  - : Erzeugt eine Übersetzung des Eingabestrings als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Siehe [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

### Erstellen einer `Translator`-Instanz

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### Generieren einer Übersetzung

```js
const translation = await translator.translate(myTextString);
console.log(translation);
```

### Generieren eines Übersetzungsstreams

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
