---
title: windows.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/windows/onCreated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Fenster erstellt wird.

## Syntax

```js-nolint
browser.windows.onCreated.addListener(listener)
browser.windows.onCreated.removeListener(listener)
browser.windows.onCreated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `window`
      - : Ein {{WebExtAPIRef('windows.Window')}} Objekt, das Details des erstellten Fensters enthält.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokollieren Sie die IDs neuer Fenster, während sie erstellt werden:

```js
browser.windows.onCreated.addListener((window) => {
  console.log(`New window: ${window.id}`);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows#event-onCreated) API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium Autoren. Alle Rechte vorbehalten.
//
// Die Vervielfältigung und Verwendung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Die Weiterverteilung des Quellcodes muss den obigen Urheberrechtshinweis,
// die Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Die Weiterverbreitung in binärer Form muss den obigen
// Urheberrechtshinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der Verteilung zur Verfügung gestellt werden,
// enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet sind, zu unterstützen oder zu fördern,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRÄGERN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER IMPLIZIERTEN GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT.
// IN KEINEM FALL HAFTEN DIE RECHTSINHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN, NEBEN-, SONDERSCHÄDEN, BEISPIELHAFTEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATENVERLUST, ODER ENTGANGENEN GEWINN ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DER VERWENDUNG DIESER SOFTWARE HERVORGEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WIRD.
-->
