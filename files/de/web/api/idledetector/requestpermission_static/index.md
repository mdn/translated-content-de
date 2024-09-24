---
title: "IdleDetector: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/IdleDetector/requestPermission_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`requestPermission()`** statische Methode der {{domxref("IdleDetector")}}
Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem String aufgelöst wird, wenn der Benutzer entschieden hat, ob der Ursprung Zugriff auf seinen Idle-Status erhalten soll. Wird bei Zustimmung mit
`"granted"` und bei Ablehnung mit `"denied"` aufgelöst.

## Syntax

```js-nolint
IdleDetector.requestPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein `Promise`, das mit `"granted"` oder `"denied"` aufgelöst wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel verwendet ein `click`-Ereignis auf einem Button, um das Anfordern der Erlaubnis des Benutzers zur Erkennung seines Idle-Zustands auszulösen.

```js
startButton.addEventListener("click", async () => {
  if ((await IdleDetector.requestPermission()) !== "granted") {
    console.error("Idle-Erkennungserlaubnis abgelehnt.");
    return;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
