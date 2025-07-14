---
title: Übersetzer
slug: Web/API/Translator
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`Translator`**-Schnittstelle der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält alle zugehörigen Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, der Nutzung für die Erstellung von Übersetzungen und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`inputQuota`](/de/docs/Web/API/Translator/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das verfügbare Eingabe-Kontingent für den Browser zur Generierung von Übersetzungen.
- [`sourceLanguage`](/de/docs/Web/API/Translator/sourceLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die erwartete Sprache des zu übersetzenden Eingabetexts.
- [`targetLanguage`](/de/docs/Web/API/Translator/targetLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in die der Eingabetext übersetzt wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Translator/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der die Verfügbarkeit des KI-Modells für die gegebene `Translator`-Konfiguration angibt.
- [`create()`](/de/docs/Web/API/Translator/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Translator`-Instanz, aus der Übersetzungen generiert werden können.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/Translator/destroy) {{Experimental_Inline}}
  - : Zerstört die `Translator`-Instanz, auf die sie angewendet wird.
- [`measureInputUsage()`](/de/docs/Web/API/Translator/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabe-Kontingent durch eine Übersetzungsoperation für einen gegebenen Textinput verwendet würde.
- [`translate()`](/de/docs/Web/API/Translator/translate) {{Experimental_Inline}}
  - : Gibt einen String zurück, der eine Übersetzung des Eingabestrings enthält.
- [`translateStreaming()`](/de/docs/Web/API/Translator/translateStreaming) {{Experimental_Inline}}
  - : Generiert eine Übersetzung des Eingabestrings als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Siehe [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

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

### Generieren eines Übersetzungsstroms

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

- [Verwendung der Translator und Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
