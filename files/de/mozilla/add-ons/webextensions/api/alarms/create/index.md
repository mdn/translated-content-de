---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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

  - : `string`. Ein Name für den Alarm. Standardmäßig ist dies der leere String.

    Dieser kann verwendet werden, um sich auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu beziehen. Er wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als die `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein, das der Listener-Funktion übergeben wird.

    Alarmnamen sind innerhalb des Bereichs einer einzigen Erweiterung eindeutig. Wenn ein Alarm mit demselben Namen existiert, wird der vorhandene Alarm gelöscht und der neu erstellte Alarm wird ihn ersetzen.

- `alarmInfo` {{optional_inline}}

  - : `object`. Dies kann verwendet werden, um anzugeben, wann der Alarm zuerst ausgelöst wird, entweder als absoluter Wert (`when`) oder als eine Verzögerung ab dem Zeitpunkt des Setzens des Alarms (`delayInMinutes`). Um den Alarm wiederkehrend zu machen, geben Sie `periodInMinutes` an.

    In Chrome dürfen, es sei denn, die Erweiterung ist nicht paketweise geladen, die von ihm erstellten Alarme nicht mehr als einmal pro Minute ausgelöst werden. Wenn eine Erweiterung versucht, `delayInMinutes` auf einen Wert < 1 zu setzen oder `when` auf einen Wert < 1 Minute in der Zukunft, dann wird der Alarm nach 1 Minute ausgelöst. Wenn eine Erweiterung versucht, `periodInMinutes` auf einen Wert < 1 zu setzen, dann wird der Alarm jede Minute ausgelöst.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:

    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm zuerst ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie nicht `delayInMinutes` an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm zuerst ausgelöst wird, angegeben in Minuten ab dem Zeitpunkt des Setzens des Alarms. Wenn Sie `delayInMinutes` angeben, geben Sie nicht `when` an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben wird, wird der Alarm nach seiner ersten Auslösung alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann zunächst nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

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
> Diese API basiert auf der [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms)-API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
