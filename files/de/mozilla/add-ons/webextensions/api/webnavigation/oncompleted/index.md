---
title: webNavigation.onCompleted
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onCompleted
l10n:
  sourceCommit: 20af66905a0eeb430f2d53452e467248099df59c
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Dokument, einschließlich der von ihm referenzierten Ressourcen, vollständig geladen und initialisiert ist. Dies entspricht dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters.

## Syntax

```js-nolint
browser.webNavigation.onCompleted.addListener(
  listener,                   // function
  filter                      // optional object
)
browser.webNavigation.onCompleted.removeListener(listener)
browser.webNavigation.onCompleted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, `false` andernfalls.

## `addListener`-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `details`
      - : `object`. Details über das Navigationsereignis. Siehe den Abschnitt [details](#details_2) für weitere Informationen.

- `filter` {{optional_inline}}
  - : `object`. Ein Objekt, das eine einzige Eigenschaft `url` enthält, welche ein `Array` von {{WebExtAPIRef("events.UrlFilter")}} Objekten ist. Wenn Sie diesen Parameter einschließen, wird das Ereignis nur für Übergänge zu URLs ausgelöst, die mindestens einem `UrlFilter` im Array entsprechen. Wenn Sie diesen Parameter weglassen, wird das Ereignis für alle Übergänge ausgelöst.

## Zusätzliche Objekte

### details

- `tabId`
  - : `integer`. Die ID des Tabs, in dem die Navigation stattgefunden hat.
- `url`
  - : `string`. Die URL, zu der der gegebene Frame navigiert hat.
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`. Dieser Wert wird in modernen Browsern nicht gesetzt. Wenn er gesetzt war, repräsentierte er die ID des Prozesses, der den Renderer für diesen Tab ausführt.
- `frameId`
  - : `integer`. Frame, in dem die Navigation stattgefunden hat. `0` zeigt an, dass die Navigation im obersten Browsing-Kontext des Tabs passiert ist, nicht in einem verschachtelten `<iframe>`. Ein positiver Wert zeigt an, dass die Navigation in einem verschachtelten iframe passiert ist. Frame-IDs sind für einen gegebenen Tab und Prozess eindeutig.
- `timeStamp`
  - : `number`. Die Zeit, zu der die Seite fertig geladen wurde, in [Millisekunden seit dem Epoch](https://de.wikipedia.org/wiki/Unixzeit).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Protokolliert die Ziel-URLs für `onCompleted`, wenn der Hostname der Ziel-URL "example.com" enthält oder mit "developer" beginnt.

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnCompleted(details) {
  console.log(`onCompleted: ${details.url}`);
}

browser.webNavigation.onCompleted.addListener(logOnCompleted, filter);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API von Chromium. Diese Dokumentation ist abgeleitet aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.

<!--
Copyright 2015 Die Chromium Autoren. Alle Rechte vorbehalten.

Redistribution und Verwendung in Quell- und Binärformen, mit oder ohne
Modifikation, sind unter den folgenden Bedingungen erlaubt:

   * Redistributierungen des Quellcodes müssen den obigen Copyright-Hinweis,
diese Liste der Bedingungen und den folgenden Disclaimer enthalten.
   * Redistributions in binärer Form müssen den obigen
Copyright-Hinweis, diese Liste der Bedingungen und den folgenden Disclaimer
in der Dokumentation und/oder anderen Materialien, die mit der
Verteilung bereitgestellt werden, enthalten.
   * Weder der Name von Google Inc. noch die Namen seiner
Beitragenden dürfen verwendet werden, um Produkte, die von dieser Software
abgeleitet wurden, zu unterstützen oder zu bewerben ohne spezifische
vorherige schriftliche Genehmigung.

DIESE SOFTWARE WIRD VON DEN COPYRIGHT-EIGENTÜMERN UND BEITRAGENDEN
"BEREITGESTELLT", UND ALLE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SOLLEN DIE COPYRIGHT-
INHABER ODER BEITRAGENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE,
BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) HAFTBAR
GEMACHT WERDEN, WIE AUCH IMMER VERURSACHT UND AUF JEDER THEORIE DER
HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
(EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUF IRGENDEINE
WEISE AUS DER VERWENDUNG DIESER SOFTWARE ENTSTANDEN SIND, SELBST WENN AUF
DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
