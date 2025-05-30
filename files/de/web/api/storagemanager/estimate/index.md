---
title: "StorageManager: estimate() Methode"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`estimate()`** Methode des [`StorageManager`](/de/docs/Web/API/StorageManager) Interfaces fragt den Storage Manager, wie viel Speicher der aktuelle {{Glossary("Same-origin_policy", "Origin")}} belegt (`usage`) und wie viel Platz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron, daher gibt sie ein {{jsxref("Promise")}} zurück, das gelöst wird, sobald die Informationen verfügbar sind. Der Erfüllungs-Handler des Promises wird mit einem Objekt aufgerufen, das die Nutzungs- und Quoteninformationen enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, der zu einem Objekt mit den folgenden Eigenschaften aufgelöst wird:

- `quota`
  - : Ein numerischer Wert in Bytes, der eine konservative Annäherung des gesamten Speichers bietet, der für den Site-Origin oder die Web-App auf dem Gerät des Benutzers verfügbar ist. Es ist möglich, dass mehr Speicherplatz verfügbar ist, obwohl Sie sich nicht darauf verlassen können.
- `usage`
  - : Ein numerischer Wert in Bytes, der den Speicherplatz annähert, der derzeit von der Site oder der Web-App von dem durch `quota` angegebenen verfügbaren Speicherplatz genutzt wird. Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das eine Aufschlüsselung der `usage` nach Speichersystem enthält. Alle enthaltenen Eigenschaften werden eine `usage` größer als 0 haben und jedes Speichersystem mit 0 `usage` wird aus dem Objekt ausgeschlossen.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Zwischen Kompression, Deduplizierung und Verschleierung aus Sicherheitsgründen werden sie ungenau sein.

Es kann sein, dass die `quota` von Origin zu Origin variiert. Diese Varianz basiert auf Faktoren wie:

- Wie oft der Benutzer die Seite besucht
- Öffentliche Daten zur Beliebtheit der Seite
- Benutzerbindungssignale wie das Setzen von Lesezeichen, Hinzufügen zum Startbildschirm oder Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speichers fehlgeschlagen ist. Zum Beispiel, wenn der aktuelle Origin ein undurchsichtiger Origin ist oder wenn der Benutzer den Speicher deaktiviert hat.

## Beispiele

In diesem Beispiel erhalten wir die Nutzungsschätzungen und zeigen dem Benutzer den Prozentsatz der aktuell genutzten Speicherkapazität an.

### HTML

```html
<label>
  You're currently using about <output id="percent"> </output>% of your
  estimated storage quota (<output id="quota"></output>).
</label>
```

### JavaScript

```js
navigator.storage.estimate().then((estimate) => {
  document.getElementById("percent").value = (
    (estimate.usage / estimate.quota) *
    100
  ).toFixed(2);
  document.getElementById("quota").value =
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
