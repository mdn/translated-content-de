---
title: "SpeechSynthesis: getVoices()-Methode"
short-title: getVoices()
slug: Web/API/SpeechSynthesis/getVoices
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("Web Speech API")}}

Die Methode **`getVoices()`** der Schnittstelle [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) gibt eine Liste von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle auf dem aktuellen Gerät verfügbaren Stimmen repräsentieren.

## Syntax

```js-nolint
getVoices()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste (ein Array) von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten.

## Beispiele

### HTML

```html
<select id="voiceSelect"></select>
```

### JavaScript

```js
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

{{EmbedLiveSample("Examples", 400, 25)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
