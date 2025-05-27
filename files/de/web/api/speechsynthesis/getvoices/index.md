---
title: "SpeechSynthesis: Methode getVoices()"
short-title: getVoices()
slug: Web/API/SpeechSynthesis/getVoices
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`getVoices()`**-Methode des
[`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interfaces gibt eine Liste von
[`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle verfügbaren Stimmen auf dem aktuellen Gerät repräsentieren.

## Syntax

```js-nolint
getVoices()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste (Array) von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten.

## Beispiele

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
