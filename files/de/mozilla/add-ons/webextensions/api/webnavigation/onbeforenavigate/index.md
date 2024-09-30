---
title: webNavigation.onBeforeNavigate
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onBeforeNavigate
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Browser dabei ist, ein Navigationsereignis zu starten.

## Syntax

```js-nolint
browser.webNavigation.onBeforeNavigate.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onBeforeNavigate.removeListener(listener)
browser.webNavigation.onBeforeNavigate.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationsereignis. Siehe den [details](#details_2) Abschnitt für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation gleich stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Rahmen navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, stellte er die ID des Prozesses dar, der das Renderer für diesen Tab ausführte.
- `frameId`
  - : `integer`. Der Rahmen, in dem die Navigation gleich stattfinden wird. `0` bedeutet, dass die Navigation im Hauptbrowsing-Kontext des Tabs und nicht in einem verschachtelten {{HTMLElement("iframe")}} stattfindet. Ein positiver Wert bedeutet, dass die Navigation in einem verschachtelten iframe stattfindet. Rahmen-IDs sind eindeutig für einen bestimmten Tab und Prozess.
- `parentFrameId`
  - : `integer`. ID des übergeordneten Rahmens dieses Rahmens. Wird auf `-1` gesetzt, wenn dies ein oberster Rahmen ist.
- `timeStamp`
  - : `number`. Die Zeit, zu der der Browser die Navigation gleich starten wird, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onBeforeNavigate`, wenn der Hostname des Ziels "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnBefore(details) {
  console.log(`onBeforeNavigate to: ${details.url}`);
}

browser.webNavigation.onBeforeNavigate.addListener(logOnBefore, filter);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation wurde abgeleitet von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Verbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien, die
// mit der Verteilung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet sind, zu unterstützen oder zu bewerben, ohne vorherige schriftliche
// Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// „WIE BESEHEN“ BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF STILLSCHWEIGENDE
// GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT.
// IN KEINEM FALL HAFTEN DIE INHABER DER URHEBERRECHTE ODER MITWIRKENDEN
// FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN
// ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG),
// GLEICH OB IN EINEM VERTRAGSVERHÄLTNIS, EINER STRENGEN HAFTUNG
// ODER EINER UNERLAUBTEN HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG),
// DIE AUS EINER VERWENDUNG DER SOFTWARE RESULTIEREN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
