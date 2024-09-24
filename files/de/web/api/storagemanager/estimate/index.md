---
title: "StorageManager: estimate()-Methode"
short-title: estimate()
slug: Web/API/StorageManager/estimate
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`estimate()`**-Methode der {{domxref("StorageManager")}}-Schnittstelle fragt den Storage-Manager, wie viel Speicher der aktuelle [Origin](/de/docs/Glossary/Same-origin_policy) einnimmt (`usage`) und wie viel Speicherplatz verfügbar ist (`quota`).

Diese Methode arbeitet asynchron, daher gibt sie ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Informationen verfügbar sind. Der Erfüllungs-Handler des Promises wird mit einem Objekt aufgerufen, das die Nutzungs- und Quoten-Daten enthält.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem Objekt mit den folgenden Eigenschaften auflöst:

- `quota`
  - : Ein numerischer Wert in Bytes, der eine vorsichtige Näherung des gesamten Speichers liefert, der auf dem Gerät oder Computer des Benutzers für den Site-Origin oder die Web-Anwendung verfügbar ist. Es ist möglich, dass mehr Speicherplatz verfügbar ist, obwohl Sie sich darauf nicht verlassen können.
- `usage`
  - : Ein numerischer Wert in Bytes, der die Menge an Speicherplatz approximiert, die derzeit von der Website oder Web-App von dem verfügbaren Speicherplatz, wie von `quota` angegeben, genutzt wird. Einheit ist Byte.
- `usageDetails` {{Non-standard_Inline}}
  - : Ein Objekt, das eine Aufschlüsselung der `usage` nach Speichersystem enthält. Alle einbezogenen Eigenschaften werden eine `usage` größer als 0 haben und jedes Speichersystem mit 0 `usage` wird vom Objekt ausgeschlossen.

> [!NOTE]
> Die zurückgegebenen Werte sind nicht exakt: Aufgrund von Kompression, Deduplizierung und Verschleierung aus Sicherheitsgründen werden sie ungenau sein.

Es kann sein, dass das `quota` zwischen den Origins variiert. Diese Varianz basiert auf Faktoren wie:

- Wie häufig der Benutzer die Seite besucht
- Öffentliche Daten zur Beliebtheit der Seite
- Benutzerengagement-Signale wie das Speichern von Lesezeichen, Hinzufügen zum Startbildschirm oder Akzeptieren von Push-Benachrichtigungen

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speicherregals fehlschlägt. Zum Beispiel, wenn der aktuelle Origin ein nicht-transparenter Origin ist oder wenn der Benutzer den Speicher deaktiviert hat.

## Beispiele

In diesem Beispiel erhalten wir die Nutzungsschätzungen und zeigen dem Benutzer den prozentualen Anteil der derzeit genutzten Speicherkapazität an.

### HTML

```html
<label>
  Sie nutzen derzeit etwa <output id="percent"> </output>% Ihres
  geschätzten Speicherlimits (<output id="quota"></output>).
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
- {{domxref("Storage")}}, das Objekt, das von {{domxref("Window.localStorage")}} zurückgegeben wird
- {{domxref("StorageManager")}}
- {{domxref("navigator.storage")}}
