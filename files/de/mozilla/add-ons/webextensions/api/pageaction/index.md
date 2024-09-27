---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Lesen und Ändern von Attributen sowie das Hören auf Klicks auf die Adressleisten-Schaltfläche, die mit dem [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) Manifest-Schlüssel definiert ist.

Eine [Adressleisten-Schaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) ist eine Schaltfläche, die zur Adressleiste des Browsers hinzugefügt wird.

![Pfotenabdruck-Symbol, das eine Page Action darstellt](page-action.png)

Sie können im Hintergrundskript auf Klicks auf das Symbol hören oder ein [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) angeben, das geöffnet wird, wenn das Symbol angeklickt wird.

Wenn Sie ein Popup angeben, definieren Sie dessen Inhalt und Verhalten mithilfe von HTML, CSS und JavaScript. JavaScript, das im Popup läuft, hat Zugriff auf alle WebExtension-APIs, wie Ihre Hintergrundskripte. Obwohl es `pageAction` genannt wird, hat der Aktionscode keinen Zugriff auf den Webseiteninhalt. Um Zugriff auf das DOM der Webseite zu erhalten, müssen Sie ein [Inhaltsskript](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) hinzufügen und damit interagieren.

Die Schaltfläche hat auch ein Kontextmenü, und Sie können mit der {{WebExtAPIRef("menus")}} API Elemente zu diesem Menü hinzufügen, indem Sie den `page_action` {{WebExtAPIRef("menus.ContextType")}} verwenden.

Page Actions sind für Aktionen gedacht, die nur für bestimmte Seiten relevant sind (wie "aktuelle Registerkarte bookmarken"). Wenn sie für den Browser als Ganzes relevant sind (wie "alle Lesezeichen anzeigen"), verwenden Sie stattdessen eine [Browser Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button).

## Arten

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Pixeldaten für ein Bild.

## Funktionen

- {{WebExtAPIRef("pageAction.show()")}}
  - : Zeigt die Page Action für einen bestimmten Tab an.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Verbirgt die Page Action für einen bestimmten Tab.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Prüft, ob die Page Action angezeigt wird oder nicht.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Setzt den Titel der Page Action. Dieser wird im Tooltip über der Page Action angezeigt.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Ruft den Titel der Page Action ab.
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Setzt das Symbol der Page Action.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Setzt die URL für das Popup der Page Action.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Ruft die URL für das Popup der Page Action ab.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Öffnet das Popup der Page Action.

## Ereignisse

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Wird ausgelöst, wenn ein Page Action-Symbol angeklickt wird. Dieses Ereignis wird nicht ausgelöst, wenn die Page Action ein Popup hat.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.pageAction`](https://developer.chrome.com/docs/extensions/mv2/reference/pageAction) API. Diese Dokumentation wird abgeleitet von [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) im Chromium Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Änderung, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitung von Quellcode muss das obige Urheberrecht,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitung in Binärform muss das obige
// Urheberrecht, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung befinden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragsleistenden dürfen verwendet werden, um Produkte, die sich
// aus dieser Software ableiten, zu unterstützen oder zu bewerben,
// ohne spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN
// VERWORFEN. IN KEINEM FALL HAFTEN DIE EIGENTÜMER ODER BEITRAGENDEN
// FÜR JEDWEDE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER GEWINNAUSFALL; ODER
// GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNTER JEDER THEORY VON
// HAFTUNG, SEI ES AUS VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) SICH AUS DER NUTZUNG
// DIESER SOFTWARE ERGEBEN, SELBST WENN DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// BEKANNT WAR.
-->
