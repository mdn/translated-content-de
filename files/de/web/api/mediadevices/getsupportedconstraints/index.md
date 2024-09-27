---
title: "MediaDevices: getSupportedConstraints()-Methode"
short-title: getSupportedConstraints()
slug: Web/API/MediaDevices/getSupportedConstraints
l10n:
  sourceCommit: ee846961725e36cf7bb407afe7a2df82d2860658
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

Die **`getSupportedConstraints()`**-Methode der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle gibt ein Objekt auf Grundlage des [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuchs zurück, dessen Mitgliedsfelder jeweils eine der einschränkbaren Eigenschaften angeben, die der [User Agent](/de/docs/Glossary/user_agent) versteht.

## Syntax

```js-nolint
getSupportedConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Objekt basierend auf dem [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)-Wörterbuch, das die vom User Agent unterstützten Einschränkungen auflistet. Da nur vom User Agent unterstützte Einschränkungen in der Liste enthalten sind, hat jede dieser booleschen Eigenschaften den Wert `true`.

## Beispiele

Dieses Beispiel gibt eine Liste der von Ihrem Browser unterstützten Einschränkungen aus.

```html hidden
<p>The following media constraints are supported by your browser:</p>

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
