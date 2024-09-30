---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Erstellt einen neuen Alarm für die aktuelle Browser-Sitzung. Ein Alarm kann einmal oder mehrmals ausgelöst werden. Ein Alarm wird gelöscht, nachdem er zum letzten Mal ausgelöst wurde.

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

    Dies kann verwendet werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Er wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als `name`-Eigenschaft des im Listener übergebenen {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein.

    Alarmnamen sind innerhalb des Bereichs einer einzelnen Erweiterung eindeutig. Wenn ein Alarm mit einem identischen Namen existiert, wird der bestehende Alarm gelöscht und der zu erstellende Alarm wird ihn ersetzen.

- `alarmInfo` {{optional_inline}}

  - : `object`. Dies können Sie verwenden, um festzulegen, wann der Alarm zunächst ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt der Alarmeinstellung (`delayInMinutes`). Um den Alarm zu wiederholen, geben Sie `periodInMinutes` an.

    In Chrome dürfen, sofern die Erweiterung nicht ungepackt geladen ist, Alarme, die sie erstellt, nicht häufiger als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht, `delayInMinutes` auf einen Wert < 1 oder `when` auf einen Wert < 1 Minute in der Zukunft zu setzen, wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht, `periodInMinutes` auf einen Wert < 1 zu setzen, wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:

    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm zuerst ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie nicht `delayInMinutes` an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm zuerst ausgelöst wird, angegeben in Minuten ab dem Zeitpunkt der Alarmeinstellung. Wenn Sie `delayInMinutes` angeben, geben Sie `when` nicht an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben ist, wird der Alarm nach seiner ersten Auslösung alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann zunächst nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

## Beispiele

Erstellen Sie einen einmaligen Verzögerungsalarm mit "" als Namen:

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes,
});
```

Erstellen Sie einen periodischen Verzögerungsalarm namens "my-periodic-alarm":

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
> Diese API basiert auf Chromiums [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms) API.
