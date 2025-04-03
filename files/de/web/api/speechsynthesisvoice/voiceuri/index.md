---
title: "SpeechSynthesisVoice: voiceURI-Eigenschaft"
short-title: voiceURI
slug: Web/API/SpeechSynthesisVoice/voiceURI
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`voiceURI`**-Eigenschaft der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Schnittstelle gibt den Typ des URI und den Standort des Sprachsynthese-Dienstes für diese Stimme zurück.

## Wert

Ein String, der den URI der Stimme repräsentiert. Dies ist ein generischer URI und kann auf lokale oder entfernte Dienste verweisen, z.B. könnte es ein proprietäres System-URN oder eine URL zu einem entfernten Dienst sein.

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
