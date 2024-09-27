---
title: "PressureObserver: knownSources statische Eigenschaft"
short-title: knownSources
slug: Web/API/PressureObserver/knownSources_static
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische, schreibgeschützte Eigenschaft **`knownSources`** der Schnittstelle [`PressureObserver`](/de/docs/Web/API/PressureObserver) gibt ein Array der vom Nutzeragenten unterstützten [`source`](/de/docs/Web/API/PressureRecord/source)-Werte in alphabetischer Reihenfolge zurück.

> [!NOTE]
> Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich weiter. Diese Eigenschaft ist lediglich ein Hinweis auf die Quelltypen, die der Nutzeragent unterstützt. Rufen Sie [`observe()`](/de/docs/Web/API/PressureObserver/observe) auf und prüfen Sie auf einen `NotSupportedError`, um festzustellen, ob eine Druckbeobachtung möglich ist.

## Wert

Ein Array von [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source)-Werten.

## Beispiele

### Bekannte Quellen mit der Konsole anzeigen

Um herauszufinden, welche [`source`](/de/docs/Web/API/PressureRecord/source)-Werte ein Browser kennt, geben Sie <kbd>PressureObserver.knownSources</kbd> in die Konsole ein. Dies wird ein Array der bekannten Quellen zurückgeben.

```js
PressureObserver.knownSources;
// returns ["cpu"] in Chrome 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
