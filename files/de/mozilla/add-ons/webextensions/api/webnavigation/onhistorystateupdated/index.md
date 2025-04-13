---
title: webNavigation.onHistoryStateUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onHistoryStateUpdated
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{AddonSidebar}}

Wird ausgelöst, wenn die Seite die [>history API](/de/docs/Web/API/History_API/Working_with_the_History_API) verwendet hat, um die in der Adressleiste des Browsers angezeigte URL zu aktualisieren. Alle zukünftigen Ereignisse für diesen Frame verwenden die aktualisierte URL.

## Syntax

```js-nolint
browser.webNavigation.onHistoryStateUpdated.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onHistoryStateUpdated.removeListener(listener)
browser.webNavigation.onHistoryStateUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationserreignis. Siehe den Abschnitt [details](#details) für mehr Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzelne Eigenschaft `url` enthält, die ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mit mindestens einem `UrlFilter` im Array übereinstimmen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattfinden wird.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigieren wird.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführt.
- `frameId`
  - : `integer`. Frame, in dem die Navigation erfolgen wird. `0` gibt an, dass die Navigation im obersten Browsing-Kontext des Tabs stattfindet, nicht in einem verschachtelten {{HTMLElement("iframe")}}. Ein positiver Wert gibt an, dass die Navigation in einem verschachtelten iframe stattfindet. Frame-IDs sind innerhalb eines gegebenen Tabs und Prozesses einzigartig.
- `timeStamp`
  - : `number`. Die Zeit, zu der die URL von der history API geändert wurde, in [Millisekunden seit der Epoche](https://en.wikipedia.org/wiki/Unix_time).
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}. Der Grund für die Navigation: zum Beispiel `"link"`, wenn der Benutzer auf einen Link geklickt hat.
- `transitionQualifiers`
  - : `Array` von {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}}. Zusätzliche Informationen über die Navigation: Zum Beispiel, ob es eine Server- oder Client-Umleitung gab.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs und zusätzliche Übergangsinformationen für `onHistoryStateUpdated`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnHistoryStateUpdated(details) {
  console.log(`onHistoryStateUpdated: ${details.url}`);
  console.log(`Transition type: ${details.transitionType}`);
  console.log(`Transition qualifiers: ${details.transitionQualifiers}`);
}

browser.webNavigation.onHistoryStateUpdated.addListener(
  logOnHistoryStateUpdated,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter der Voraussetzung gestattet, dass die folgenden
// Bedingungen erfüllt sind:
//
//    * Weiterverbreitung des Quellcodes muss den obigen Urheberrechtshinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Die Weiterverbreitung in binärer Form muss den obigen
// Urheberrechtshinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der
// Verbreitung geliefert werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software abgeleitet sind,
// zu bewerben oder zu fördern ohne ausdrückliche vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" ZUR VERFÜGUNG GESTELLT, UND JEGLICHE AUSDRÜCKLICHEN ODER IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN.
// IN KEINEM FALL SIND DIE URHEBER RECHTSINHABER ODER MITWIRKENDEN
// HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATENVERLUST, PROFITSVERLUST ODER UNTERBRECHUNG DES GESCHÄFTSBETRIEBS)
// WIE AUCH IMMER VERURSACHT UND UNTER WELCHER THEORIE DER HAFTUNG AUCH IMMER, OB IN
// VERTRAG, STRIKTER HAFTUNG ODER DELIKTISCH (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) ENTSTANDEN,
// AUCH WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
