---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt einen neuen Alarm für die aktuelle Browsersitzung. Ein Alarm kann einmal oder mehrfach ausgelöst werden. Ein Alarm wird gelöscht, nachdem er zum letzten Mal ausgelöst wurde.

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

    Dies kann verwendet werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Es wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein, das in die Listener-Funktion übergeben wird.

    Alarmnamen sind innerhalb des Geltungsbereichs einer einzelnen Erweiterung einzigartig. Wenn ein Alarm mit demselben Namen existiert, wird der vorhandene Alarm gelöscht und durch den neu erstellten Alarm ersetzt.

- `alarmInfo` {{optional_inline}}

  - : `object`. Sie können dies verwenden, um anzugeben, wann der Alarm erstmalig ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt, zu dem der Alarm gesetzt wird (`delayInMinutes`). Um den Alarm wiederkehren zu lassen, geben Sie `periodInMinutes` an.

    In Chrome dürfen Alarme, sofern die Erweiterung nicht entpackt geladen wird, nicht öfter als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht, `delayInMinutes` auf einen Wert < 1 oder `when` auf einen Wert < 1 Minute in der Zukunft zu setzen, wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht, `periodInMinutes` auf einen Wert < 1 zu setzen, wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:

    - `when` {{optional_inline}}
      - : `double`. Der Zeitpunkt, zu dem der Alarm erstmalig ausgelöst wird, angegeben in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, sollten Sie `delayInMinutes` nicht angeben.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Der Zeitpunkt, zu dem der Alarm erstmalig ausgelöst wird, angegeben in Minuten ab dem Zeitpunkt, zu dem der Alarm gesetzt wird. Wenn Sie `delayInMinutes` angeben, sollten Sie `when` nicht angeben.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben wird, wird der Alarm nach seinem erstmaligen Auslösen alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann erstmalig nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

## Beispiele

Erstellen Sie einen einmaligen, verzögerungsbasierten Alarm mit "" als Namen:

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes,
});
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

Erstellen Sie einen periodischen absoluten Alarm mit dem Namen "my-periodic-alarm":

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
