---
title: "SpeechSynthesisVoice: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisVoice/lang
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Schreibgeschützte Eigenschaft der {{domxref("SpeechSynthesisVoice")}}-Schnittstelle gibt ein BCP 47-Sprach-Tag zurück, das die Sprache der Stimme angibt.

## Wert

Ein String, der die Sprache des Geräts repräsentiert.

## Beispiele

```js
for (let i = 0; i < voices.length; i++) {
  const option = document.createElement("option");
  option.textContent = `${voices[i].name} (${voices[i].lang})`;

  if (voices[i].default) {
    option.textContent += " — DEFAULT";
  }

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
