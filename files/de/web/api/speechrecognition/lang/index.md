---
title: "SpeechRecognition: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechRecognition/lang
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt die Sprache des aktuellen `SpeechRecognition` zurück und setzt sie. Ist diese nicht angegeben, wird standardmäßig der Wert des HTML-Attributs [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) verwendet, oder die Spracheinstellung des Benutzeragents, falls auch diese nicht gesetzt ist.

## Wert

Ein String, der die Sprache für die aktuelle `SpeechRecognition` darstellt. Der Wert sollte ein gültiges {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} sein.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
