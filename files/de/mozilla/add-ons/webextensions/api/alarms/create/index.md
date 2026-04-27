---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: b84147564967f3b6875ff8cf439f263aa1ea5b08
---

Erstellt einen neuen Alarm für die aktuelle Browsersitzung. Ein Alarm kann einmal oder mehrmals ausgelöst werden. Ein Alarm wird gelöscht, nachdem er das letzte Mal ausgelöst wurde.

> [!NOTE]
> Ab Chrome 117 ist die Anzahl der aktiven Alarme auf 500 begrenzt. Wenn dieses Limit erreicht ist, schlägt die Alarmerstellung fehl.

## Syntax

```js-nolint
browser.alarms.create(
  name,              // optional string
  alarmInfo          // optional object
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Ein Name für den Alarm. Standardmäßig der leere String.

    Dies kann genutzt werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Es wird auch als `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}}-Objekts, das in die Listener-Funktion übergeben wird, in {{WebExtAPIRef('alarms.onAlarm')}} verfügbar sein.

    Alarmnamen sind im Geltungsbereich einer einzelnen Erweiterung eindeutig. Wenn ein Alarm mit identischem Namen existiert, wird der bestehende Alarm gelöscht und der neu erstellte Alarm ersetzt diesen.

    Ab Chrome 150 werden Alarme mit Namen, die länger als 1024 Bytes sind, abgelehnt. Dieses Limit kann auch in anderen Browsern implementiert werden. Siehe [Vorschlag: Beschränkungen für die Längen von Strings, die an WebExtension-APIs übergeben werden](https://github.com/w3c/webextensions/issues/935) für weitere Informationen.

- `alarmInfo` {{optional_inline}}
  - : `object`. Sie können dies verwenden, um zu spezifizieren, wann der Alarm erstmals ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt, an dem der Alarm gesetzt wird (`delayInMinutes`). Um den Alarm wiederholen zu lassen, geben Sie `periodInMinutes` an.

    In Chrome, es sei denn, die Erweiterung wird unverpackt geladen, werden Alarme nicht mehr als alle 30 Sekunden ausgelöst. Wenn eine Erweiterung `delayInMinutes` auf einen Wert < 0.5 oder `when` auf einen Wert < 0.5 setzt, wird der Alarm 30 Sekunden nach der Einrichtung ausgelöst. Wenn eine Erweiterung `periodInMinutes` auf einen Wert < 0.5 setzt, wird der Alarm alle 30 Sekunden ausgelöst. Das Setzen von `delayInMinutes` oder `periodInMinutes` auf < 0.5 verursacht eine Warnung. Die Alarm-Auslösungen können willkürlich verzögert werden. Vor Chrome 120 war dieses Limit eine Minute.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:
    - `when` {{optional_inline}}
      - : `double`. Der Zeitpunkt, zu dem der Alarm das erste Mal ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie nicht `delayInMinutes` an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Der Zeitpunkt, zu dem der Alarm das erste Mal ausgelöst wird, angegeben als Minuten ab dem Zeitpunkt, an dem der Alarm gesetzt wird. Wenn Sie `delayInMinutes` angeben, geben Sie nicht `when` an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben ist, wird der Alarm erneut alle `periodInMinutes` nach seiner ersten Auslösung ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann nach `periodInMinutes` zum ersten Mal ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Erstellen eines einmalig basierten Alarms mit "" als Namen:

```js
function onAdded() {
  console.log("Alarm Added!");
}

let delayInMinutes = 5;

let addingAlarm = browser.alarms.create({
  delayInMinutes,
});
addingAlarm.then(onAdded);
```

Erstellen eines periodisch basierten Alarms mit dem Namen "my-periodic-alarm":

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Erstellen eines periodisch absoluten Alarms mit dem Namen "my-periodic-alarm":

```js
const when = 1545696000;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes,
});
```

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.
