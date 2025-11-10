---
title: "StorageManager: estimate() Methode"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`estimate()`**-Methode des [`StorageManager`](/de/docs/Web/API/StorageManager)-Interfaces fragt den Storage Manager, wie viel Speicher der aktuelle {{Glossary("Same-origin_policy", "Origin")}} beansprucht (`usage`) und wie viel Speicherplatz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron und gibt daher ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Informationen verfügbar sind. Der Erfüllungs-Handler des Promises wird mit einem Objekt aufgerufen, das die Nutzungs- und Quotendaten enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das zu einem Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `quota`
  - : Ein numerischer Wert in Bytes, der eine konservative Schätzung des gesamten Speichers angibt, der auf dem Gerät oder Computer des Nutzers für den Site-Origin oder die Web-App verfügbar ist. Es ist möglich, dass mehr Speicher verfügbar ist, jedoch sollte man sich darauf nicht verlassen.
- `usage`
  - : Ein numerischer Wert in Bytes, der die Menge des derzeit von der Site oder Web-App genutzten Speicherplatzes aus dem verfügbaren Speicher, wie durch `quota` angegeben, annähert. Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das eine Aufschlüsselung der `usage` nach Speichersystemen enthält. Alle enthaltenen Eigenschaften haben eine `usage` größer als 0 und jedes Speichersystem mit 0 `usage` wird aus dem Objekt ausgeschlossen.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Aufgrund von Komprimierung, Deduplizierung und Verschleierung aus Sicherheitsgründen sind sie ungenau.

Es kann sein, dass das `quota` je nach Origin variiert. Diese Abweichung basiert auf Faktoren wie:

- Wie häufig der Nutzer die Seite besucht
- Öffentliche Popularitätsdaten der Seite
- Nutzerengagement-Signale wie das Setzen eines Lesezeichens, das Hinzufügen zum Startbildschirm oder das Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Erlangen eines Lokalspeicherregals fehlschlug. Zum Beispiel, wenn der aktuelle Origin ein undurchsichtiger Origin ist oder wenn der Nutzer den Speicher deaktiviert hat.

## Beispiele

In diesem Beispiel rufen wir die Speicherplatzschätzungen ab und präsentieren dem Nutzer den prozentualen Anteil der derzeit genutzten Speicherkapazität.

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
- [`Storage`](/de/docs/Web/API/Storage), das Objekt, das von [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) zurückgegeben wird
- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`navigator.storage`](/de/docs/Web/API/Navigator/storage)
