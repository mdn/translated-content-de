---
title: "StorageManager: estimate()-Methode"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`estimate()`**-Methode der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle fragt den Storage-Manager, wie viel Speicher der aktuelle [Origin](/de/docs/Glossary/Same-origin_policy) verwendet (`usage`) und wie viel Speicherplatz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron, daher gibt sie ein {{jsxref("Promise")}} zurück, das sich auflöst, sobald die Informationen verfügbar sind. Der Erfolgs-Handler des Versprechens wird mit einem Objekt aufgerufen, das die Daten zur Nutzung und Quota enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem Objekt mit den folgenden Eigenschaften auflöst:

- `quota`
  - : Ein numerischer Wert in Bytes, der eine konservative Annäherung des gesamten Speichers bietet, den das Gerät des Benutzers für den Origin der Seite oder Web-App verfügbar hat. Es ist möglich, dass mehr Speicherplatz verfügbar ist, obwohl man sich nicht darauf verlassen kann.
- `usage`
  - : Ein numerischer Wert in Bytes, der den derzeit von der Seite oder Web-App genutzten Speicherplatz angibt, im Verhältnis zum verfügbaren Speicherplatz, wie durch `quota` angegeben. Die Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das eine Aufschlüsselung der `usage` nach Speichersystem bietet. Alle enthaltenen Eigenschaften haben eine `usage` größer als 0, und jedes Speichersystem mit 0 `usage` wird aus dem Objekt ausgeschlossen.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht genau: Zwischen Kompression, Deduplizierung und Verschleierung aus Sicherheitsgründen werden sie ungenau sein.

Es kann vorkommen, dass die `quota` von Origin zu Origin variiert. Diese Abweichung basiert auf Faktoren wie:

- Wie oft der Benutzer die Seite besucht
- Daten zur Popularität der öffentlichen Website
- Benutzerinteraktionssignale wie das Setzen von Lesezeichen, Hinzufügen zur Startseite oder das Annehmen von Push-Benachrichtigungen

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speicherfachs fehlgeschlagen ist. Zum Beispiel, wenn der aktuelle Origin ein undurchsichtiger Origin ist oder wenn der Benutzer den Speicher deaktiviert hat.

## Beispiele

In diesem Beispiel erhalten wir die Nutzungsschätzungen und präsentieren dem Benutzer den Prozentsatz der aktuell genutzten Speicherkapazität.

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
- [`Storage`](/de/docs/Web/API/Storage), das Objekt, das von [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) zurückgegeben wird
- [`StorageManager`](/de/docs/Web/API/StorageManager)
- [`navigator.storage`](/de/docs/Web/API/Navigator/storage)
