---
title: "StorageManager: estimate() Methode"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`estimate()`** Methode des [`StorageManager`](/de/docs/Web/API/StorageManager)-Interfaces fragt den Storage Manager, wie viel Speicher der aktuelle [Origin](/de/docs/Glossary/Same-origin_policy) beansprucht (`usage`) und wie viel Platz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron, daher gibt sie ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Informationen verfügbar sind. Der Erfüllungs-Handler des Promises wird mit einem Objekt aufgerufen, das die Daten zu `usage` und `quota` enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}} das in ein Objekt aufgelöst wird mit den folgenden Eigenschaften:

- `quota`
  - : Ein Zahlenwert in Bytes, der eine konservative Schätzung des gesamten Speichers bietet, den das Gerät oder der Computer des Benutzers für den Site-Origin oder die Webanwendung verfügbar hat. Es ist möglich, dass mehr Speicherplatz verfügbar ist, aber darauf sollten Sie sich nicht verlassen.
- `usage`
  - : Ein Zahlenwert in Bytes, der die Menge an Speicherplatz angibt, die derzeit von der Site oder Webanwendung genutzt wird, basierend auf dem durch `quota` angegebenen verfügbaren Speicherplatz. Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das eine Aufschlüsselung von `usage` nach Speichersystem bietet. Alle enthaltenen Eigenschaften haben einen `usage` größer als 0 und jedes Speichersystem mit 0 `usage` wird aus dem Objekt ausgeschlossen.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Aufgrund von Kompression, Deduplizierung und Verschleierung aus Sicherheitsgründen sind sie ungenau.

Es kann vorkommen, dass `quota` von Origin zu Origin variiert. Diese Varianz basiert auf Faktoren wie:

- Wie oft der Benutzer die Seite besucht
- Beliebtheitsdaten der öffentlichen Seite
- Benutzersignale wie das Setzen von Lesezeichen, Hinzufügen zum Startbildschirm oder das Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speicherregals fehlgeschlagen ist. Zum Beispiel, wenn der aktuelle Origin ein undurchsichtiger Origin ist oder der Benutzer den Speicher deaktiviert hat.

## Beispiele

In diesem Beispiel erhalten wir die Nutzungsabschätzungen und präsentieren dem Benutzer den Prozentsatz der aktuell genutzten Speicherkapazität.

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
    (estimate.quota / 1024 / 1024).toFixed(2) + "MB";
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
- [`Storage`](/de/docs/Web/API/Storage), das Objekt, das durch [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) zurückgegeben wird
- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`navigator.storage`](/de/docs/Web/API/Navigator/storage)
