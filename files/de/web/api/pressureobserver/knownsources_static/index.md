---
title: "PressureObserver: knownSources statische Eigenschaft"
short-title: knownSources
slug: Web/API/PressureObserver/knownSources_static
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die statische, schreibgeschützte Eigenschaft **`knownSources`** der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle gibt ein Array der vom Benutzeragenten unterstützten [`source`](/de/docs/Web/API/PressureRecord/source)-Werte in alphabetischer Reihenfolge zurück.

> [!NOTE]
> Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Diese Eigenschaft ist lediglich ein Hinweis auf die Quelltypen, die der Benutzeragent unterstützt. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um festzustellen, ob die Druckbeobachtung möglich ist.

## Wert

Ein Array von [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source)-Werten.

## Beispiele

### Verwendung der Konsole, um bekannte Quellen anzuzeigen

Um herauszufinden, welche [`source`](/de/docs/Web/API/PressureRecord/source)-Werte ein Browser kennt, geben Sie <kbd>PressureObserver.knownSources</kbd> in die Konsole ein. Dies wird ein Array der bekannten Quellen zurückgeben.

```js
PressureObserver.knownSources;
// returns ["cpu"] in Chrome 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
