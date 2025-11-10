---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: bf8a1832111ba757f86cb82edfe791da55c9803c
---

Erstellt einen neuen Alarm für die aktuelle Browsersitzung. Ein Alarm kann einmal oder mehrmals ausgelöst werden. Ein Alarm wird gelöscht, nachdem er das letzte Mal ausgelöst wurde.

> [!NOTE]
> Ab Chrome 117 ist die Anzahl der aktiven Alarme auf 500 begrenzt. Wenn diese Grenze erreicht ist, schlägt die Erstellung eines Alarms fehl.

## Syntax

```js-nolint
browser.alarms.create(
  name,              // optional string
  alarmInfo          // optional object
)
```

### Parameter

- `name` {{optional_inline}}
  - : `string`. Ein Name für den Alarm. Standardmäßig ist der Name ein leerer String.

    Dies kann verwendet werden, um auf einen bestimmten Alarm in {{WebExtAPIRef('alarms.get()')}} und {{WebExtAPIRef('alarms.clear()')}} zu verweisen. Er wird auch in {{WebExtAPIRef('alarms.onAlarm')}} als `name`-Eigenschaft des {{WebExtAPIRef('alarms.Alarm')}}-Objekts verfügbar sein, das der Listener-Funktion übergeben wird.

    Alarmnamen sind innerhalb des Gültigkeitsbereichs einer einzelnen Erweiterung eindeutig. Wenn ein Alarm mit einem identischen Namen existiert, wird der bestehende Alarm gelöscht und der neu erstellte Alarm ersetzt ihn.

- `alarmInfo` {{optional_inline}}
  - : `object`. Sie können dieses Objekt verwenden, um anzugeben, wann der Alarm zunächst ausgelöst wird, entweder als absoluter Wert (`when`) oder als Verzögerung ab dem Zeitpunkt der Alarmeinstellung (`delayInMinutes`). Um den Alarm wiederkehren zu lassen, geben Sie `periodInMinutes` an.

    In Chrome, es sei denn, die Erweiterung wird unverpackt geladen, werden Alarme nicht öfter als alle 30 Sekunden ausgelöst. Wenn eine Erweiterung `delayInMinutes` auf einen Wert < 0,5 festlegt oder `when` auf einen Wert < 0,5 setzt, wird der Alarm 30 Sekunden nach dem Einstellen ausgelöst. Wenn eine Erweiterung `periodInMinutes` auf einen Wert < 0,5 setzt, wird der Alarm alle 30 Sekunden ausgelöst. Das Festlegen von `delayInMinutes` oder `periodInMinutes` auf < 0,5 führt zu einer Warnung. Alarm-Auslösungen können willkürlich verzögert werden. Vor Chrome 120 war diese Grenze eine Minute.

    Das `alarmInfo`-Objekt kann die folgenden Eigenschaften enthalten:
    - `when` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm erstmals ausgelöst wird, angegeben als [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time). Um die Anzahl der Millisekunden zwischen der Epoche und der aktuellen Zeit zu erhalten, verwenden Sie [`Date.now()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/now). Wenn Sie `when` angeben, geben Sie `delayInMinutes` nicht an.
    - `delayInMinutes` {{optional_inline}}
      - : `double`. Die Zeit, zu der der Alarm erstmals ausgelöst wird, angegeben als Minuten ab dem Zeitpunkt der Alarmeinstellung. Wenn Sie `delayInMinutes` angeben, geben Sie `when` nicht an.
    - `periodInMinutes` {{optional_inline}}
      - : `double`. Wenn dies angegeben ist, wird der Alarm nach der ersten Auslösung alle `periodInMinutes` erneut ausgelöst. Wenn Sie diesen Wert angeben, können Sie sowohl `when` als auch `delayInMinutes` weglassen, und der Alarm wird dann zunächst nach `periodInMinutes` ausgelöst. Wenn `periodInMinutes` nicht angegeben ist, wird der Alarm nur einmal ausgelöst.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird.

## Beispiele

Einen einmaligen, delay-basierten Alarm mit "" als Name erstellen:

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

Einen periodischen, delay-basierten Alarm mit dem Namen "my-periodic-alarm" erstellen:

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Einen periodischen, absoluten Alarm mit dem Namen "my-periodic-alarm" erstellen:

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
> Diese API basiert auf der Chromium-API [`chrome.alarms`](https://developer.chrome.com/docs/extensions/reference/api/alarms).

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
