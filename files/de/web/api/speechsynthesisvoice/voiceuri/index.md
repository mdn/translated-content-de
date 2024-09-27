---
title: "SpeechSynthesisVoice: voiceURI-Eigenschaft"
short-title: voiceURI
slug: Web/API/SpeechSynthesisVoice/voiceURI
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`voiceURI`**-Eigenschaft des nur-lesbaren [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt den URI-Typ und die Position des Sprachsynthesedienstes für diese Stimme zurück.

## Wert

Ein String, der den URI der Stimme darstellt. Dies ist ein generischer URI und kann auf lokale oder entfernte Dienste verweisen, z.B. könnte es ein spezifisches System-URN oder eine URL zu einem entfernten Dienst sein.

## Beispiele

```js
for (let i = 0; i < voices.length; i++) {
  const option = document.createElement("option");
  option.textContent = `${voices[i].name} (${voices[i].lang})`;

  if (voices[i].default) {
    option.textContent += " — DEFAULT";
  }

  console.log(voices[i].voiceURI);
  // On Mac, this returns URNs, for example 'urn:moz-tts:osx:com.apple.speech.synthesis.voice.daniel'

  option.setAttribute("data-lang", voices[i].lang);
  option.setAttribute("data-name", voices[i].name);
  voiceSelect.appendChild(option);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
