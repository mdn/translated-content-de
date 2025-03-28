---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: 9cdfac539af02dfc6f86c9ef13a4bb5eed897928
---

{{AddonSidebar}}

Erstellt einen neuen Alarm für die aktuelle Browsersitzung. Ein Alarm kann einmal oder mehrmals ausgelöst werden. Ein Alarm wird gelöscht, nachdem er das letzte Mal ausgelöst wurde.

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

    Dies kann verwendet werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Es wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als die `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein, das an die Listener-Funktion übergeben wird.

    Alarmnamen sind innerhalb des Bereichs einer einzelnen Erweiterung eindeutig. Wenn ein Alarm mit demselben Namen existiert, wird der vorhandene Alarm gelöscht und der neu erstellte Alarm ersetzt diesen.

- `alarmInfo` {{optional_inline}}

  - : `object`. Damit kann festgelegt werden, wann der Alarm erstmals ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt, an dem der Alarm gesetzt wird (`delayInMinutes`). Um den Alarm wiederholt auszulösen, geben Sie `periodInMinutes` an.

    In Chrome dürfen, sofern die Erweiterung nicht entpackt geladen wird, Alarme nicht mehr als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht, `delayInMinutes` auf einen Wert < 1 oder `when` auf einen Wert < 1 Minute in der Zukunft einzustellen, wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht, `periodInMinutes` auf einen Wert < 1 einzustellen, wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:

    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie nicht `delayInMinutes` an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben in Minuten ab dem Zeitpunkt, an dem der Alarm gesetzt wird. Wenn Sie `delayInMinutes` angeben, geben Sie nicht `when` an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben ist, wird der Alarm nach seiner erstmaligen Auslösung alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann initial nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Erstellen Sie einen einmalig verzögerten Alarm mit "" als Name:

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

Erstellen Sie einen periodischen verzögerten Alarm namens "my-periodic-alarm":

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Erstellen Sie einen periodischen absoluten Alarm namens "my-periodic-alarm":

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.
