---
title: "SpeechSynthesisVoice: voiceURI-Eigenschaft"
short-title: voiceURI
slug: Web/API/SpeechSynthesisVoice/voiceURI
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`voiceURI`**-Schreibgeschützte Eigenschaft des
[`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt den Typ des URI und den Ort des Sprachsynthesedienstes für diese Stimme zurück.

## Wert

Ein String, der den URI der Stimme darstellt. Dies ist ein generischer URI und kann auf lokale oder entfernte Dienste verweisen, z. B. könnte es sich um einen proprietären System-URN oder eine URL zu einem entfernten Dienst handeln.

## Beispiele

```js
for (const voice of voices) {
  const option = document.createElement("option");
  option.textContent = `${voice.name} (${voice.lang})`;

  if (voice.default) {
    option.textContent += " — DEFAULT";
  }

  console.log(voice.voiceURI);
  // On Mac, this returns URNs, for example 'urn:moz-tts:osx:com.apple.speech.synthesis.voice.daniel'

  option.setAttribute("data-lang", voice.lang);
  option.setAttribute("data-name", voice.name);
  voiceSelect.appendChild(option);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
