---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Seitenaktion-Symbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Seitenaktion ein Popup hat.

Um eine Rechtsklick-Aktion zu definieren, verwenden Sie die {{WebExtAPIRef('contextMenus')}} API mit dem "page_action" {{WebExtAPIRef('contextMenus/ContextType', 'context type', '', 'nocode')}}.

## Syntax

```js-nolint
browser.pageAction.onClicked.addListener(listener)
browser.pageAction.onClicked.removeListener(listener)
browser.pageAction.onClicked.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tab`
      - : Ein {{WebExtAPIRef('tabs.Tab')}}-Objekt, das den Tab darstellt, dessen Seitenaktion angeklickt wurde.
    - `OnClickData`

      - : Ein Objekt, das Informationen über den Klick enthält.

        - `modifiers`
          - : Ein `array`. Die Tastaturmodifikatoren, die zum Zeitpunkt des Klicks aktiv sind, sind ein oder mehrere von `Shift`, `Alt`, `Command`, `Ctrl` oder `MacCtrl`.
        - `button`
          - : Ein `integer`. Gibt die Taste an, die verwendet wurde, um auf das Seitenaktion-Symbol zu klicken: `0` für einen Linksklick oder einen Klick, der nicht mit einer Maus verbunden ist, wie z. B. einer von der Tastatur, und `1` für einen Mitteltasten- oder Scrollradklick. Beachten Sie, dass der Rechtsklick nicht unterstützt wird, da Firefox diesen Klick konsumiert, um das Kontextmenü anzuzeigen, bevor dieses Ereignis ausgelöst wird.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Wenn der Benutzer auf die Seitenaktion klickt, verstecken Sie sie und navigieren Sie den aktiven Tab zu "<https://giphy.com/explore/cat>":

```js
let CATGIFS = "https://giphy.com/explore/cat";

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: CATGIFS });
});

browser.pageAction.onClicked.addListener(() => {});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction#event-onClicked) API von Chromium. Diese Dokumentation ist von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärform, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss 
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser Software abgeleitet sind, 
// zu bewerben oder zu fördern, ohne vorherige schriftliche Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND MITWIRKENDEN 
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE 
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN 
// GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN 
// ABGELEHNT. IN KEINEM FALL SOLLEN DIE COPYRIGHTINHABER ODER MITWIRKENDEN
// FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BEGRENZT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER
// -DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER 
// BETRIEBSUNTERBRECHUNG) HAFTBAR GEMACHT WERDEN, GLEICHGÜLTIG, OB IN EINEM
// VERTRAGSVERHÄLTNIS, UNERLAUBTER HANDLUNG ODER VERSCHULDENSUNABHÄNGIGER
// HAFTUNG, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
