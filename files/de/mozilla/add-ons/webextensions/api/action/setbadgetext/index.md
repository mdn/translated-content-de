---
title: action.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeText
l10n:
  sourceCommit: 7348312b78f8f58f22c9565da69f4c136270ad91
---

Legt den Badgetext für die Browseraktion fest. Das Badge wird über dem Symbol angezeigt.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

Tabs ohne spezifischen Badgetext übernehmen den globalen Badgetext, der standardmäßig `""` lautet.

## Syntax

```js-nolint
browser.action.setBadgeText(
  details // object
)
```

Diese API ist auch als `chrome.action.setBadgeText()` verfügbar.

### Parameter

- `details`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `text`
      - : `string` oder `null`. Es kann eine beliebige Anzahl von Zeichen übergeben werden, aber nur etwa vier passen in den verfügbaren Platz.

        Verwenden Sie eine leere Zeichenfolge – `""` –, wenn Sie kein Badge möchten.

        Wenn eine `tabId` angegeben ist, entfernt `null` den tabspezifischen Badgetext, sodass der Tab den globalen Badgetext übernimmt. Andernfalls wird der globale Badgetext auf `""` zurückgesetzt.

        Wenn eine `windowId` angegeben ist, entfernt `null` den fensterspezifischen Badgetext, sodass der Tab den globalen Badgetext übernimmt. Andernfalls wird der globale Badgetext auf `""` zurückgesetzt.

        Ab Chrome 152 wird Badgetext mit mehr als 100 Bytes abgelehnt. Andere Browser können diese Begrenzung implementieren. Weitere Informationen finden Sie unter [Vorschlag: Byte-Länge des Badgetexts für Erweiterungsaktionen begrenzen](https://github.com/w3c/webextensions/issues/960).

    - `tabId` {{optional_inline}}
      - : `integer`. Legt den Badgetext nur für den angegebenen Tab fest. Der Text wird zurückgesetzt, wenn der Benutzer in diesem Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Legt den Badgetext für das angegebene Fenster fest.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben werden, schlägt die Funktion fehl.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird das globale Badge festgelegt.

## Beispiele

Fügen Sie ein Badge hinzu, das angibt, wie oft der Benutzer auf die Schaltfläche geklickt hat:

```js
let clicks = 0;

function increment() {
  browser.action.setBadgeText({ text: (++clicks).toString() });
}

browser.action.onClicked.addListener(increment);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeText). Diese Dokumentation wurde aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weiterverbreitung und Verwendung in Quell- und Binärform, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diesen Bedingungskatalog und den folgenden Haftungsausschluss enthalten.
//
//    * Weiterverbreitungen in Binärform müssen den obigen Copyright-Hinweis,
// diesen Bedingungskatalog und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen mit der Distribution bereitgestellten
// Materialien wiedergeben.
//
//    * Weder der Name von Google Inc. noch die Namen seiner Mitwirkenden dürfen
// verwendet werden, um aus dieser Software abgeleitete Produkte ohne vorherige
// ausdrückliche schriftliche Genehmigung zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN OHNE
// MÄNGELGEWÄHR BEREITGESTELLT. JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE
// COPYRIGHT-INHABER ODER MITWIRKENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN HAFTBAR, EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATEN- ODER GEWINNVERLUSTE ODER GESCHÄFTSUNTERBRECHUNGEN,
// UNABHÄNGIG DAVON, WIE DIESE VERURSACHT WURDEN UND UNTER WELCHER
// HAFTUNGSTHEORIE, OB VERTRAGLICH, VERSCHULDENSUNABHÄNGIG ODER DELIKTISCH
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE
// AUS DER VERWENDUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
