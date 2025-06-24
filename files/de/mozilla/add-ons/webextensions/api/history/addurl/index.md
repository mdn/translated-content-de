---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt dem Browserverlauf einen Eintrag eines Besuchs der angegebenen URL hinzu. Die Zeit des Besuchs wird als die Zeit des Aufrufs aufgezeichnet, und der {{WebExtAPIRef("history.TransitionType", "TransitionType")}} wird als "link" aufgezeichnet.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let addingUrl = browser.history.addUrl(
  details         // object
)
```

### Parameter

- `details`
  - : `object`. Objekt, das die hinzuzufügende URL enthält.
    - `url`
      - : `string`. Die hinzuzufügende URL.
    - `title` {{optional_inline}}
      - : string: Der Titel der Seite. Wenn dies nicht angegeben wird, wird der Titel als `null` aufgezeichnet.
    - `transition` {{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Beschreibt, wie der Browser bei diesem Anlass zur Seite navigiert ist. Wenn dies nicht angegeben wird, wird ein Transitionstyp von "link" aufgezeichnet.
    - `visitTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumszeichenfolge](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch. Legt die Besuchszeit auf diesen Wert fest. Wenn dies nicht angegeben wird, wird die aktuelle Zeit aufgezeichnet.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird ohne Parameter erfüllt, wenn das Element hinzugefügt wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Fügen Sie einen Eintrag eines Besuchs bei "https\://example.org/" hinzu, und prüfen Sie dann, ob der neue Besuch aufgezeichnet wurde, indem Sie den Verlauf nach dem neuesten Element durchsuchen und es protokollieren:

```js
function onGot(results) {
  if (results.length) {
    console.log(results[0].url);
    console.log(new Date(results[0].lastVisitTime));
  }
}

browser.history
  .addUrl({ url: "https://example.org/" })
  .then(() =>
    browser.history.search({
      text: "https://example.org/",
      startTime: 0,
      maxResults: 1,
    }),
  )
  .then(onGot);
```

Fügen Sie einen Eintrag eines Besuchs bei "https\://example.org" hinzu, geben Sie ihm jedoch eine `visitTime`, die 24 Stunden in der Vergangenheit liegt, und einen `transition` von "typed":

```js
const DAY = 24 * 60 * 60 * 1000;

function oneDayAgo() {
  return Date.now() - DAY;
}

function onGot(visits) {
  for (const visit of visits) {
    console.log(new Date(visit.visitTime));
    console.log(visit.transition);
  }
}

browser.history
  .addUrl({
    url: "https://example.org/",
    visitTime: oneDayAgo(),
    transition: "typed",
  })
  .then(() =>
    browser.history.getVisits({
      url: "https://example.org/",
    }),
  )
  .then(onGot);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-addUrl)-API von Chromium. Diese Dokumentation stammt von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterveröffentlichung und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterveröffentlichungen des Quellcodes müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterveröffentlichungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung geliefert werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet sind,
// zu unterstützen oder zu bewerben, ohne spezifische vorherige schriftliche Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN DER MARKTTAUGLICHKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK
// SIND ABGELEHNT. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER ODER
// MITWIRKENDEN HAFTBAR FÜR JEDWEDE DIREKTEN, INDIREKTEN, BEILÄUFIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZGÜTERN ODER
// DIENSTLEISTUNGEN; NUTZUNGSAUSFALLS; DATENVERLUST ODER GEWINNVERLUST;
// GESCHÄFTSUNTERBRECHUNGEN) WIE AUCH IMMER VERURSACHT UND UNTER JEGLICHER
// HAFTUNGSTHEORIE, OB IN VERTRAG, HAFTUNG ODER UNTER
// UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG)
// AUS ODER IN VERBINDUNG MIT DER NUTZUNG ODER VERARBEITUNG DIESER
// SOFTWARE, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN
// WURDE.
-->
