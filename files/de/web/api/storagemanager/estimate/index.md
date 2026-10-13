---
title: "StorageManager: Methode estimate()"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die Methode **`estimate()`** des Interfaces [`StorageManager`](/de/docs/Web/API/StorageManager) fragt den Storage Manager, wie viel Speicherplatz der aktuelle {{Glossary("Same-origin_policy", "Origin")}} belegt (`usage`) und wie viel Speicherplatz verfügbar ist (`quota`).

Die Methode arbeitet asynchron und gibt daher ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Informationen verfügbar sind. Der Erfüllungshandler des Promise erhält ein Objekt mit den Daten zu Speicherbelegung und verfügbarem Speicherplatz.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Eigenschaften enthält:

- `quota`
  - : Ein numerischer Wert in Byte, der den gesamten Speicherplatz, der auf dem Gerät oder Computer des Benutzers für den Origin der Website oder Web-App verfügbar ist, vorsichtig schätzt. Möglicherweise ist mehr Speicherplatz verfügbar; darauf können Sie sich jedoch nicht verlassen.
- `usage`
  - : Ein numerischer Wert in Byte, der schätzt, wie viel des durch `quota` angegebenen verfügbaren Speicherplatzes die Website oder Web-App derzeit belegt. Die Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das `usage` nach Speichersystem aufschlüsselt. Alle enthaltenen Eigenschaften haben einen `usage`-Wert größer als 0. Speichersysteme mit einem `usage`-Wert von 0 sind nicht im Objekt enthalten.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Aufgrund von Komprimierung, Deduplizierung und Verschleierung aus Sicherheitsgründen sind sie ungenau.

Der Wert von `quota` kann sich von Origin zu Origin unterscheiden. Diese Unterschiede beruhen unter anderem auf folgenden Faktoren:

- Wie häufig der Benutzer die Website besucht
- Öffentliche Daten zur Beliebtheit der Website
- Hinweise auf die Interaktion des Benutzers mit der Website, etwa das Setzen eines Lesezeichens, das Hinzufügen zum Startbildschirm oder das Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Zugriff auf den lokalen Speicherbereich fehlschlägt. Das kann beispielsweise der Fall sein, wenn der aktuelle Origin undurchsichtig ist oder der Benutzer die Speicherung deaktiviert hat.

## Beispiele

In diesem Beispiel ermitteln wir die geschätzte Speicherbelegung und zeigen dem Benutzer an, wie viel Prozent des verfügbaren Speicherplatzes derzeit belegt sind.

### HTML

```html
You're currently using about <span id="percent"></span>% of your estimated
storage quota (<span id="quota"></span>).
```

### JavaScript

```js
navigator.storage.estimate().then((estimate) => {
  document.getElementById("percent").textContent = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
  document.getElementById("quota").textContent =
    `${(estimate.quota / 1024 / 1024).toFixed(2)}MB`;
});
```

### Ergebnis

{{ EmbedLiveSample('Examples', 600, 40) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage API](/de/docs/Web/API/Storage_API)
- [`Storage`](/de/docs/Web/API/Storage), das von [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) zurückgegebene Objekt
- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`navigator.storage`](/de/docs/Web/API/Navigator/storage)
