---
title: set()
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/set
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verwenden Sie `BrowserSetting.set()`, um die Browsereinstellung auf einen neuen Wert zu ändern.

Es gibt einige Regeln, die einschränken können, wann Erweiterungen in der Lage sind, Einstellungen zu ändern:

- Einige Einstellungen sind gesperrt und können daher überhaupt nicht von Erweiterungen geändert werden
- Wenn mehrere Erweiterungen versuchen, dieselbe Einstellung zu ändern, wird ihnen eine Vorrangordnung zugewiesen, basierend darauf, wann sie installiert wurden. Neu installierte Erweiterungen haben Vorrang vor weniger neu installierten Erweiterungen.

Das bedeutet, wenn Erweiterung X versucht, eine Einstellung zu ändern:

1. Wenn die Einstellung gesperrt ist, wird die Einstellung nicht geändert. X's Änderung wird jedoch gespeichert und in einer Warteschlange geordnet nach X's Vorrang gegenüber anderen Erweiterungen, die versucht haben, die Einstellung zu ändern. Wenn die Einstellung später entsperrt wird, darf die erste Erweiterung in der Warteschlange die Einstellung ändern.
2. Andernfalls, wenn keine andere Erweiterung die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und es wird gesagt, dass X die Einstellung "kontrolliert".
3. Andernfalls, wenn eine weniger vorrangige Erweiterung Y die Einstellung bereits geändert hat, gelingt es X, die Einstellung zu ändern, und kontrolliert jetzt die Einstellung. Y's Änderung wird jedoch gespeichert und in einer Warteschlange in Vorrangordnung abgelegt. Wenn X anschließend seinen Wert löscht oder X deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung durchführen.
4. Andernfalls, wenn eine höher priorisierte Erweiterung Z die Einstellung bereits geändert hat, gelingt es X nicht, die Einstellung zu ändern, aber seine Änderung wird in die Warteschlange gestellt. Wenn Z anschließend seinen Wert löscht oder Z deaktiviert oder deinstalliert wird, darf die erste Erweiterung in der Warteschlange ihre Änderung an der Einstellung durchführen.

Eine Erweiterung kann herausfinden, welches dieser Szenarien zutrifft, indem sie die `levelOfControl` Eigenschaft untersucht, die von einem Aufruf von [`BrowserSetting.get()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/get) zurückgegeben wird.

Die Methode `BrowserSetting.set()` gibt ein Promise zurück, das auf ein Boolean aufgelöst wird: Wenn ein Versuch, eine Einstellung zu ändern, tatsächlich zur Änderung der Einstellung führt (Szenarien 2 und 3 oben), ist das Boolean `true`: andernfalls ist es `false`.

## Syntax

```js-nolint
let setting = setting.set(
  details     // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das die folgende Eigenschaft enthalten muss:
    - `value`
      - : `any`. Der Wert, in den Sie die Einstellung ändern möchten. Sein Typ hängt von der jeweiligen Einstellung ab.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `boolean` erfüllt wird: `true`, wenn die Einstellung geändert wurde, andernfalls `false` (zum Beispiel, weil die Erweiterung die Einstellung nicht kontrollierte).

## Browser-Kompatibilität

Siehe {{WebExtAPIRef("types.BrowserSetting")}}.

## Beispiel

Ändern Sie die Einstellung `hyperlinkAuditingEnabled` (dies erfordert die Berechtigung "privacy"):

```js
function onSet(result) {
  if (result) {
    console.log("Value was updated");
  } else {
    console.log("Value was not updated");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
    value: false,
  });
  setting.then(onSet);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.types`](https://developer.chrome.com/docs/extensions/reference/api/types) API.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen von Quellcode müssen obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Weiterverbreitungen in binärer Form müssen obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien beifügen, die mit der
// Verteilung verbreitet werden.
//    * Weder der Name von Google Inc. noch die Namen der
// Beitragenden dürfen verwendet werden, um Produkte zu unterstützen oder zu bewerben, die von dieser
// Software abgeleitet wurden, ohne vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND ALLE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GARANTIEN DER MARKTFÄHIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN
// ZWECK WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE URHEBERRECHTSINHABER ODER
// BEITRAGENDEN FÜR JEGLICHE DIREKTE, INDIREKTE, BEILÄUFIGE,
// BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, ERSATZBESCHAFFUNGEN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG)
// WIE AUCH WEG AUS DER HAFTUNGSTHEORIE, VERTRAG, UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT) ODER ANDERWEITIG AUS DER NUTZUNG DIESER
// SOFTWARE ENTSTEHEN, SEI ES AUCH NUR AUF DIE MÖGLICHKEIT EINES
// SOLCHEN SCHADENS HINGEWIESEN WURDE.
-->
