---
title: "SpeechSynthesisVoice: name Eigenschaft"
short-title: name
slug: Web/API/SpeechSynthesisVoice/name
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`name`** Nur-Lese-Eigenschaft der
{{domxref("SpeechSynthesisVoice")}} Schnittstelle gibt einen menschenlesbaren Namen zurück,
der die Stimme darstellt.

## Wert

Ein String, der den Namen der Stimme darstellt.

## Beispiele

```js
for (const voice of voices) {
  const option = document.createElement("option");
  option.textContent = `${voice.name} (${voice.lang})`;

  if (voice.default) {
    option.textContent += " — DEFAULT";
  }

  option.setAttribute("data-lang", voice.lang);
  option.setAttribute("data-name", voice.name);
  voiceSelect.appendChild(option);
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
