---
title: "IdleDetector: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/IdleDetector/requestPermission_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`requestPermission()`** statische Methode der [`IdleDetector`](/de/docs/Web/API/IdleDetector) Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem String aufgelöst wird, wenn der Benutzer entschieden hat, ob er dem Origin den Zugriff auf ihren Ruhezustand gewähren möchte. Es wird mit `"granted"` bei Zustimmung und `"denied"` bei Ablehnung aufgelöst.

## Syntax

```js-nolint
IdleDetector.requestPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein `Promise`, das mit `"granted"` oder `"denied"` aufgelöst wird.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel verwendet ein `click`-Ereignis auf einem Button, um den Benutzer um Erlaubnis zu bitten, wenn er in den Ruhezustand wechselt.

```js
startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle detection permission denied.");
    return;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
