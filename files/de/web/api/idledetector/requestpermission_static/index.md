---
title: "IdleDetector: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/IdleDetector/requestPermission_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{securecontext_header}}{{APIRef("Idle Detection API")}}{{SeeCompatTable}}

Die **`requestPermission()`** statische Methode der [`IdleDetector`](/de/docs/Web/API/IdleDetector)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem String aufgelöst wird, sobald der Benutzer entschieden hat, ob er dem Ursprung Zugriff auf seinen Leerlaufzustand gewähren möchte. Bei Zustimmung wird es mit `"granted"` und bei Ablehnung mit `"denied"` aufgelöst.

## Syntax

```js-nolint
IdleDetector.requestPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein `Promise`, das mit `"granted"` oder `"denied"` aufgelöst wird.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

Das folgende Beispiel verwendet ein `click`-Ereignis auf einem Button, um die Erlaubnis des Benutzers zu beantragen, den Leerlaufzustand des Benutzers zu erkennen.

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
