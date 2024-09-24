---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`set()`** Methode der {{WebExtAPIRef("cookies")}} API setzt ein Cookie mit den angegebenen Cookie-Daten. Diese Methode entspricht dem Ausgeben eines HTTP `Set-Cookie` Headers während einer Anfrage an eine gegebene URL.

Der Aufruf ist nur erfolgreich, wenn Sie die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei sowie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die im Manifest angegebene URL einfügen. Die angegebene URL benötigt ebenfalls die notwendigen Berechtigungen, um ein Cookie mit den angegebenen Parametern zu erstellen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.cookies.set(
  details               // object
)
```

### Parameter

- `details`

  - : Ein `object`, das die Details des Cookies enthält, das Sie setzen möchten. Es kann die folgenden Eigenschaften haben:

    - `domain` {{optional_inline}}
      - : Ein `string`, das die Domain des Cookies darstellt. Wenn es weggelassen wird, wird das Cookie zu einem Host-only Cookie.
    - `expirationDate` {{optional_inline}}
      - : Eine `number`, die das Ablaufdatum des Cookies als Anzahl der Sekunden seit dem UNIX-Epoche darstellt. Wenn es weggelassen wird, wird das Cookie zu einem Sitzungscookie.
    - `firstPartyDomain` {{optional_inline}}
      - : Ein `string`, das die First-Party-Domain darstellt, mit der das Cookie verknüpft wird. Diese Eigenschaft muss angegeben werden, wenn der Browser die First-Party-Isolierung aktiviert hat. Siehe [First-party isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation).
    - `httpOnly` {{optional_inline}}
      - : Ein `boolean`, der angibt, ob das Cookie als HttpOnly (`true`) markiert werden soll oder nicht (`false`). Wenn es weggelassen wird, ist der Standardwert false.
    - `name` {{optional_inline}}
      - : Ein `string`, das den Namen des Cookies darstellt. Wenn es weggelassen wird, ist dies standardmäßig leer.
    - `partitionKey` {{optional_inline}}

      - : Ein `object`, das die [Speicherpartition](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#storage_partitioning) darstellt, in der das Cookie gesetzt wird. Dieses Objekt einfügen, um ein Cookie im partitionierten Speicher zu setzen. Dieses Objekt enthält:

        - `topLevelSite` {{optional_inline}}
          - : Ein `string`, das die First-Party-URL der Top-Level-Site-Speicherpartition repräsentiert, die das Cookie enthält.

    - `path` {{optional_inline}}
      - : Ein `string`, das den Pfad des Cookies darstellt. Wenn es weggelassen wird, ist der Standardwert der Pfadteil des URL-Parameters.
    - `sameSite` {{optional_inline}}
      - : Ein {{WebExtAPIRef("cookies.SameSiteStatus")}} Wert, der den SameSite-Zustand des Cookies angibt. Wenn es weggelassen wird, beträgt der Standardwert 0, 'no_restriction'.
    - `secure` {{optional_inline}}
      - : Ein `boolean`, das angibt, ob das Cookie als sicher (`true`) markiert werden soll oder nicht (`false`). Wenn es weggelassen wird, ist der Standardwert false.
    - `storeId` {{optional_inline}}
      - : Ein `string`, das die ID des Cookie-Stores darstellt, in dem das Cookie gesetzt wird. Wenn es weggelassen wird, wird das Cookie standardmäßig im Cookie-Store des derzeitigen Ausführungskontextes gesetzt.
    - `url`
      - : Ein `string`, das den Anfrage-URI darstellt, der mit dem Cookie verknüpft wird. Dieser Wert kann die Standard-Domain und -Pfad-Werte des erstellten Cookies beeinflussen. Wenn im Manifest für diese URL keine Host-Berechtigungen angegeben sind, schlägt der Methodenaufruf fehl.
    - `value` {{optional_inline}}
      - : Ein `string`, das den Wert des Cookies darstellt. Wenn es weggelassen wird, ist dies standardmäßig leer.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('cookies.Cookie')}} Objekt erfüllt wird, das Details über das gesetzte Cookie enthält. Wenn der Aufruf aus irgendeinem Grund fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieses Beispiel setzt ein Cookie für das Dokument des derzeit aktiven Tabs:

```js
let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favorite-color",
    value: "red",
  });
}
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#method-set) API. Diese Dokumentation ist von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code abgeleitet.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verbreitung und Verwendung in nicht übersetzten und übersetzten
// Formaten, mit oder ohne Modifikation, sind unter den folgenden Bedingungen
// gestattet:
//
//    * Verbreitungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Verbreitungen in binärer Form müssen den obigen
// Urheberrechtshinweis und diesen Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verbreitung verteilt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragszahler dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGSLEISTERN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER IMPLIZIERTEN
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BEGRENZT AUF DIE
// IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN AUSDRÜCKLICH ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// EIGENTÜMER ODER BEITRAGSLEISTERN FÜR DIREKTE, INDIREKTE,
// BEILÄUFIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BEGRENZT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNE; ODER
// BETRIEBSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER
// JEGLICHER HAFTUNGSTHEORIE, OB IN VERTRAG, GEFÄHRDUNGSHAFTUNG
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER
// SOFTWARE ENTSTEHEN, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
