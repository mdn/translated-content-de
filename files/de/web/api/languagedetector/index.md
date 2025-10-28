---
title: LanguageDetector
slug: Web/API/LanguageDetector
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`LanguageDetector`**-Interface der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält die gesamte Funktionalität zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `LanguageDetector`-Instanz, der Verwendung zur Spracherkennung und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabelimit, das dem Browser zur Spracherkennung zur Verfügung steht.
- [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die zu erwartenden Sprachen, die im Eingabetext erkannt werden sollen.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/LanguageDetector/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der angibt, ob das KI-Modell des Browsers eine bestimmte `LanguageDetector`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/LanguageDetector/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `LanguageDetector`-Instanz zur Spracherkennung.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/LanguageDetector/destroy) {{Experimental_Inline}}
  - : Gibt die Ressourcen frei, die der `LanguageDetector`-Instanz zugewiesen wurden, auf die er aufgerufen wird, und stoppt jegliche weitere Aktivitäten darauf.
- [`detect()`](/de/docs/Web/API/LanguageDetector/detect) {{Experimental_Inline}}
  - : Erkennt die am ehesten passende Sprache oder Sprachen, in der ein gegebener Textstring wahrscheinlich geschrieben ist.
- [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabelimit durch eine Spracherkennungsoperation für einen gegebenen Texteingang verwendet würde.

## Beispiele

Siehe [Verwendung der Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

### Erstellen einer `LanguageDetector`-Instanz

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

> [!NOTE]
> Unterschiedliche Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

### Sprachen erkennen

```js
const results = await detector.detect(myTextString);

results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
