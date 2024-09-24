---
title: "PressureObserver: knownSources statische Eigenschaft"
short-title: knownSources
slug: Web/API/PressureObserver/knownSources_static
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die statische, schreibgeschützte Eigenschaft **`knownSources`** der Schnittstelle {{domxref("PressureObserver")}} gibt ein Array der vom Benutzeragenten unterstützten Werte von {{domxref("PressureRecord.source","source")}} in alphabetischer Reihenfolge zurück.

> [!NOTE]
> Die Liste der unterstützten Quellen variiert je nach Browser, Betriebssystem und Hardware und entwickelt sich ständig weiter. Diese Eigenschaft ist lediglich ein Hinweis auf die vom Benutzeragenten unterstützten Quelltypen. Rufen Sie {{domxref("PressureObserver.observe()", "observe()")}} auf und prüfen Sie, ob ein `NotSupportedError` auftritt, um festzustellen, ob eine Drucküberwachung möglich ist.

## Wert

Ein Array von {{domxref("PressureRecord.source")}} Werten.

## Beispiele

### Verwenden der Konsole, um bekannte Quellen anzuzeigen

Um herauszufinden, welche {{domxref("PressureRecord.source","source")}} Werte ein Browser kennt, geben Sie <kbd>PressureObserver.knownSources</kbd> in die Konsole ein. Dies gibt ein Array der bekannten Quellen zurück.

```js
PressureObserver.knownSources;
// returns ["cpu"] in Chrome 125
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
