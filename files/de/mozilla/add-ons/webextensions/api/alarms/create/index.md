---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

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

  - : `string`. Ein Name für den Alarm. Standardmäßig ist dies der leere String.

    Dies kann verwendet werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Er wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}} Objekts verfügbar sein, das an die Listener-Funktion übergeben wird.

    Alarmnamen sind eindeutig im Bereich einer einzelnen Erweiterung. Wenn ein Alarm mit demselben Namen bereits existiert, wird der bestehende Alarm gelöscht und durch den neu erstellten Alarm ersetzt.

- `alarmInfo` {{optional_inline}}

  - : `object`. Dies kann verwendet werden, um anzugeben, wann der Alarm erstmals ausgelöst wird, entweder als absoluter Wert (`when`), oder als Verzögerung ab der Zeit, zu der der Alarm gesetzt wird (`delayInMinutes`). Um den Alarm wiederkehrend zu machen, geben Sie `periodInMinutes` an.

    In Chrome dürfen Alarme, die von einer unverpackt geladenen Erweiterung erstellt werden, nicht öfter als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht, `delayInMinutes` auf einen Wert < 1 zu setzen, oder `when` auf einen Wert < 1 Minute in der Zukunft, dann wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht, `periodInMinutes` auf einen Wert < 1 zu setzen, dann wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:

    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie `delayInMinutes` nicht an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm das erste Mal ausgelöst wird, angegeben als Minuten ab der Zeit, zu der der Alarm gesetzt wird. Wenn Sie `delayInMinutes` angeben, geben Sie `when` nicht an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben wird, wird der Alarm nach seinem ersten Auslösen alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` auslassen, und der Alarm wird dann initial nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Erstellen Sie einen einmaligen, verzögerungsbasierten Alarm mit "" als Namen:

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

Erstellen Sie einen periodischen, verzögerungsbasierten Alarm mit dem Namen "my-periodic-alarm":

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API von Chromium.
