---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erstellt einen neuen Alarm für die aktuelle Browsersitzung. Ein Alarm kann einmal oder mehrfach ausgelöst werden. Ein Alarm wird gelöscht, nachdem er das letzte Mal ausgelöst wurde.

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

    Dies kann verwendet werden, um sich auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu beziehen. Es wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als die Eigenschaft `name` des {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein, das in die Listener-Funktion übergeben wird.

    Alarame haben eindeutige Namen im Rahmen einer einzelnen Erweiterung. Wenn ein Alarm mit demselben Namen existiert, wird der bestehende Alarm gelöscht und der gerade erstellte Alarm ersetzt ihn.

- `alarmInfo` {{optional_inline}}
  - : `object`. Sie können dies verwenden, um anzugeben, wann der Alarm das erste Mal ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt der Alarmeinstellung (`delayInMinutes`). Um den Alarm regelmäßig auszulösen, geben Sie `periodInMinutes` an.

    In Chrome dürfen Alarme, es sei denn, die Erweiterung ist ohne Verpackung geladen, nicht mehr als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht `delayInMinutes` auf einen Wert < 1 oder `when` auf einen Wert < 1 Minute in der Zukunft einzustellen, wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht `periodInMinutes` auf einen Wert < 1 einzustellen, wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:
    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie `delayInMinutes` nicht an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben als Minuten ab der Alarmeinstellung. Wenn Sie `delayInMinutes` angeben, geben Sie `when` nicht an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben ist, wird der Alarm wiederholt alle `periodInMinutes` nach seiner ersten Auslösung erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann zunächst nach `periodInMinutes` ausgelöst. Wird `periodInMinutes` nicht angegeben, wird der Alarm nur einmal ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Erstellen Sie einen einmaligen, auf Verzögerung basierenden Alarm mit "" als Name:

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

Erstellen Sie einen periodischen, auf Verzögerung basierenden Alarm mit dem Namen "my-periodic-alarm":

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Erstellen Sie einen periodischen, absoluten Alarm mit dem Namen "my-periodic-alarm":

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
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.
