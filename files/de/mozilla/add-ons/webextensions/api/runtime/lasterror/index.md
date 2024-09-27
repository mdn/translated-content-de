---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieser Wert wird verwendet, um eine Fehlermeldung einer asynchronen API zu melden, wenn der asynchronen API ein Rückruf übergeben wird. Dies ist nützlich für Erweiterungen, die die rückrufbasierte Version der WebExtension-APIs verwenden.

Es ist nicht erforderlich, diese Eigenschaft zu überprüfen, wenn Sie die auf Promises basierende Version der APIs verwenden: Übergeben Sie stattdessen einen Fehlerbehandlungsmechanismus an das Promise:

```js
const gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

Die Eigenschaft `runtime.lastError` wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand aufweist, den sie an ihren Aufrufer melden muss.

Wenn Sie eine asynchrone Funktion aufrufen, die möglicherweise `lastError` setzt, sollten Sie den Fehler überprüfen, wenn Sie das Ergebnis der Funktion verarbeiten. Wenn `lastError` gesetzt wurde und Sie ihn innerhalb der Rückruffunktion nicht überprüfen, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
let myError = browser.runtime.lastError;  // null or Error object
```

### Wert

Ein {{jsxref("Error")}}-Objekt, das den Fehler darstellt. Die {{jsxref("Error.message", "message")}}-Eigenschaft ist ein `string` mit einer menschenlesbaren Beschreibung des Fehlers. Wenn `lastError` nicht gesetzt wurde, ist der Wert `null`.

## Beispiele

Setzen Sie ein Cookie und verwenden Sie einen Rückruf, um das neue Cookie zu protokollieren oder einen Fehler zu melden:

```js
function logCookie(c) {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log(c);
  }
}

browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

Dasselbe, aber unter Verwendung eines Promises zur Handhabung des Ergebnisses von `setCookie()`:

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

const setCookie = browser.cookies.set({
  url: "https://developer.mozilla.org/",
});

setCookie.then(logCookie, logError);
```

> **Note:** `runtime.lastError` ist ein Alias für {{WebExtAPIRef("extension.lastError")}}. Sie werden zusammen gesetzt, und die Überprüfung von einem der beiden funktioniert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#property-lastError)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifizierung, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu bewerben oder zu bewerben,
// ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITARBEITERN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT. JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN DER
// MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT.
// IN KEINEM FALL HAFTET DER RECHTSINHABER ODER DIE MITARBEITER FÜR DIREKTE,
// INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN
// ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL, DATEN ODER GEWINNE ODER
// GESCHÄFTSUNTERBRECHUNG) AUS WELCHER URSACHE AUCH IMMER, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT
// ODER ANDERWEITIG), DIE AUS DER NUTZUNG DER SOFTWARE ENTSTEHEN, SELBST WENN
// AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
