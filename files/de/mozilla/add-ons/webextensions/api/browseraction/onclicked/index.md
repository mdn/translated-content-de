---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Wird ausgelöst, wenn auf ein Browser-Aktionssymbol geklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browseraktion ein Popup hat.

Um eine Rechtsklickaktion zu definieren, verwenden Sie die [`contextMenus`](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus) API mit dem "browser_action" [Kontexttyp](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType).

## Syntax

```js-nolint
browser.browserAction.onClicked.addListener(listener)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüfen Sie, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als auf das Symbol geklickt wurde.
    - `OnClickData`
      - : Ein Objekt, das Informationen über den Klick enthält.
        - `modifiers`
          - : Ein `Array`. Die zum Zeitpunkt des Klicks aktiven Tastaturmodifikatoren, die einer oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl` sein können.
        - `button`
          - : Ein `Integer`. Gibt an, welcher Knopf verwendet wurde, um auf das Seitensymbol zu klicken: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z.B. einer von der Tastatur, und `1` für einen mittleren Button oder ein Radklicken. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick nutzt, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Beispiele

Wenn der Benutzer auf das Browser-Aktionssymbol klickt, schaltet dieser Code es für den aktiven Tab aus und protokolliert die URL des Tabs:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the browser action for the tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#event-onClicked). Diese Dokumentation leitet sich von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code ab.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Redistributions in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung einhergehen, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, zu bewerben oder zu bewerben, ohne spezifische vorherige schriftliche
// Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER
// MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND
// ABGELEHNT. IN KEINEM FALL HAFTET DER EIGENTÜMER ODER DIE MITWIRKENDEN
// FÜR JEDWEDE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN
// ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUST;
// DATEN- ODER GEWINNVERLUST; ODER UNTERBRECHUNG DER GESCHÄFSTÄTIGKEIT),
// WIE AUCH IMMER VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB
// IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE WEISE AUS DER
// NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN ÜBER DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN BEKANNT WAR.
-->
