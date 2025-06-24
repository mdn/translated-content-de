---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Browseraktionssymbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Browseraktion ein Popup hat.

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
  - : Stoppt das Lauschen dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält diese Argumente:
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der Tab, der aktiv war, als das Symbol angeklickt wurde.
    - `OnClickData`
      - : Ein Objekt, das Informationen über den Klick enthält.
        - `modifiers`
          - : Ein `array`. Die Tastaturmodifikatoren, die zum Zeitpunkt des Klicks aktiv waren, eines oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Gibt die Schaltfläche an, die zum Anklicken des Seitenaktionssymbols verwendet wurde: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie zum Beispiel einer von der Tastatur, und `1` für einen Klick mit der mittleren Taste oder dem Rad. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick konsumiert, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf das Symbol der Browseraktion klickt, schaltet dieser Code die Aktion für den aktiven Tab ab und protokolliert die URL des Tabs:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the browser action for the tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission, or host permissions for the URL
  console.log(tab.url);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#event-onClicked) API von Chromium. Diese Dokumentation basiert auf [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Nutzung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in Binärform müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// beilegen, die mit der Verbreitung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet wurden, zu unterstützen oder zu
// bewerben ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" UND OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN BEREITGESTELLT, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG
// FÜR EINEN BESTIMMTEN ZWECK. IN KEINEM FALL SOLLEN DER
// URHEBERRECHTSINHABER ODER DIE MITWIRKENDEN HAFTBAR SEIN FÜR
// DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// JEDOCH ENTSTANDEN UND AUF WELCHER THEORIE DER HAFTUNG, OB IN
// VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG), DAS AUS DER NUTZUNG DIESER SOFTWARE
// ENTSTEHT, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
