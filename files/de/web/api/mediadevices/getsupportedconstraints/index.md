---
title: "MediaDevices: getSupportedConstraints()-Methode"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die **`getSupportedConstraints()`**-Methode der {{domxref("MediaDevices")}}-Schnittstelle gibt ein Objekt basierend auf dem {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuch zurück, dessen Felder jeweils eine der einschränkbaren Eigenschaften spezifizieren, die der {{Glossary("Benutzeragent")}} versteht.

## Syntax

```js-nolint
getSupportedConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt basierend auf dem {{domxref("MediaTrackSupportedConstraints")}}-Wörterbuch, das die vom Benutzeragenten unterstützten Einschränkungen auflistet.
Da nur vom Benutzeragenten unterstützte Einschränkungen in die Liste aufgenommen werden, hat jede dieser Booleschen Eigenschaften den Wert `true`.

## Beispiele

Dieses Beispiel gibt eine Liste der von Ihrem Browser unterstützten Einschränkungen aus.

```html hidden
<p>Die folgenden Medieneinschränkungen werden von Ihrem Browser unterstützt:</p>

<ul id="constraintList"></ul>
```

```css hidden
body {
  font:
    15px Arial,
    sans-serif;
}
```

```js
const constraintList = document.querySelector("#constraintList");
const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();

for (const constraint of Object.keys(supportedConstraints)) {
  const elem = document.createElement("li");
  elem.appendChild(document.createElement("code")).textContent = constraint;
  constraintList.appendChild(elem);
}
```

### Ergebnis

{{ EmbedLiveSample('Examples', 600, 350) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
