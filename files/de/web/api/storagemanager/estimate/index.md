---
title: "StorageManager: Methode estimate()"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: d6469df1479efda0ce4bb908094c4d14e5dc526a
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die Methode **`estimate()`** des Interfaces [`StorageManager`](/de/docs/Web/API/StorageManager) fragt beim Storage Manager ab, wie viel Speicherplatz der aktuelle {{Glossary("Same-origin_policy", "Origin")}} belegt (`usage`) und wie viel Speicherplatz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron und gibt daher ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Informationen verfügbar sind. Der Fulfillment-Handler des Promise wird mit einem Objekt aufgerufen, das die Angaben zu Speicherbelegung und verfügbarem Speicherplatz enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt mit den folgenden Eigenschaften erfüllt wird:

- `quota`
  - : Ein numerischer Wert in Byte, der eine vorsichtige Schätzung des gesamten Speicherplatzes angibt, der auf dem Gerät oder Computer des Benutzers für den Origin der Website oder Web-App verfügbar ist. Möglicherweise steht mehr Speicherplatz zur Verfügung; darauf können Sie sich jedoch nicht verlassen.
- `usage`
  - : Ein numerischer Wert in Byte, der schätzt, wie viel des durch `quota` angegebenen verfügbaren Speicherplatzes die Website oder Web-App derzeit belegt. Die Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das `usage` nach Speichersystem aufschlüsselt. Alle enthaltenen Eigenschaften haben einen `usage`-Wert größer als 0. Speichersysteme mit einem `usage`-Wert von 0 sind nicht im Objekt enthalten.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Durch Komprimierung, Deduplizierung und Verschleierung aus Sicherheitsgründen sind sie ungenau.

> [!NOTE]
> In Firefox ist `quota` das von allen Origins derselben {{Glossary("site", "Website")}} gemeinsam genutzte Limit, das sogenannte _Gruppenlimit_, und kein Limit für einen einzelnen Origin. Origins, denen persistenter Speicher über [`StorageManager.persist()`](/de/docs/Web/API/StorageManager/persist) gewährt wurde, unterliegen nicht dem Gruppenlimit. Für sie ist `quota` stattdessen das globale Speicherlimit. Wie diese Limits berechnet werden, erfahren Sie unter [Speicherkontingente und Kriterien für die Verdrängung](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#firefox).

Der Wert von `quota` kann von Origin zu Origin variieren. Diese Unterschiede beruhen auf Faktoren wie:

- Wie häufig der Benutzer die Website besucht
- Öffentlich verfügbaren Daten zur Beliebtheit der Website
- Signalen für die Interaktion des Benutzers, etwa dem Setzen eines Lesezeichens, dem Hinzufügen zum Startbildschirm oder dem Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Zugriff auf einen lokalen Speicherbereich fehlschlägt. Dies kann beispielsweise der Fall sein, wenn der aktuelle Origin ein opaker Origin ist oder der Benutzer die Speicherung deaktiviert hat.

## Beispiele

In diesem Beispiel rufen wir Schätzwerte zur Speicherbelegung ab und zeigen dem Benutzer an, wie viel Prozent der Speicherkapazität derzeit genutzt werden.

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
