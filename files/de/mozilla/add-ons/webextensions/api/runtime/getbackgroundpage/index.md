---
title: runtime.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getBackgroundPage
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{AddonSidebar}}

Ruft das [`Window`](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die innerhalb der aktuellen Erweiterung läuft. Wenn die Hintergrundseite nicht persistent ist (eine Ereignisseite) und nicht läuft, wird die Hintergrundseite gestartet.

Dies bietet eine bequeme Möglichkeit für andere privilegierte Erweiterungsskripte, direkten Zugang zum Gültigkeitsbereich des Hintergrundskripts zu erhalten. Dies ermöglicht ihnen den Zugriff auf Variablen oder das Aufrufen von Funktionen, die in diesem Bereich definiert sind. "Privilegiertes Skript" umfasst hierbei Skripte, die in [Optionsseiten](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) laufen, oder Skripte, die in [Browser-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)- oder [Page-Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)-Popups laufen, jedoch _nicht_ [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts).

Beachten Sie, dass Variablen, die mit [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) deklariert wurden, nicht im `Window`-Objekt erscheinen, das von dieser Funktion zurückgegeben wird.

**Beachten Sie auch, dass diese Methode nicht in einem privaten Fenster in Firefox verwendet werden kann**—sie gibt immer `null` zurück. Weitere Informationen finden Sie im [verwandten Bug bei Bugzilla](https://bugzil.la/1329304).

Wenn die Hintergrundseite eine Ereignisseite ist, stellt das System sicher, dass sie geladen ist, bevor das Versprechen aufgelöst wird.

Dies ist eine asynchrone Funktion, die ein {{JSxRef("Promise")}} zurückgibt.

> [!NOTE]
> In Firefox kann diese Methode im privaten Modus nicht verwendet werden — sie gibt immer `null` zurück. Weitere Informationen finden Sie im [Firefox-Bug 1329304](https://bugzil.la/1329304).
>
> In Chrome ist diese Methode nur mit persistenten Hintergrundseiten verfügbar, die in Manifest V3 nicht verfügbar sind, daher sollten Sie in Betracht ziehen, Manifest V2 zu verwenden. Details finden Sie unter [Migration zu einem Service-Worker](https://developer.chrome.com/docs/extensions/develop/migrate/to-service-workers).
>
> Erwägen Sie die Verwendung von {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}, die in beiden oben genannten Szenarien korrekt funktionieren.

## Syntax

```js-nolint
let gettingPage = browser.runtime.getBackgroundPage()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit dem [`Window`](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite erfüllt wird, wenn es eine gibt. Wenn die Erweiterung keine Hintergrundseite enthält, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, ein [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) definiert eine Funktion `foo()`:

```js
// background.js

function foo() {
  console.log("I'm defined in background.js");
}
```

Ein Skript, das in einem [Popup](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) läuft, kann diese Funktion direkt so aufrufen:

```js
// popup.js

function onGot(page) {
  page.foo();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getBackgroundPage) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
