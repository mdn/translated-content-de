---
title: "SpeechSynthesis: getVoices()-Methode"
short-title: getVoices()
slug: Web/API/SpeechSynthesis/getVoices
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`getVoices()`**-Methode des {{domxref("SpeechSynthesis")}}-Interfaces gibt eine Liste von {{domxref("SpeechSynthesisVoice")}}-Objekten zurück, die alle verfügbaren Stimmen auf dem aktuellen Gerät repräsentieren.

## Syntax

```js-nolint
getVoices()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste (Array) von {{domxref("SpeechSynthesisVoice")}}-Objekten.

## Beispiele

### JavaScript

```js
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
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

### HTML

```html
<select id="voiceSelect"></select>
```

{{EmbedLiveSample("Examples", 400, 25)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
