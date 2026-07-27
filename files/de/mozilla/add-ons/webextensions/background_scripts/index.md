---
title: Hintergrundskripte
slug: Mozilla/Add-ons/WebExtensions/Background_scripts
l10n:
  sourceCommit: 4ecb85924cb9982ab3dc6b849ccfac0edbfda171
---

Hintergrundskripte oder eine Hintergrundseite ermöglichen es Ihnen, Ereignisse im Browser zu überwachen und darauf zu reagieren, wie zum Beispiel das Navigieren zu einer neuen Seite, das Entfernen eines Lesezeichens oder das Schließen eines Tabs.

Hintergrundskripte oder -seiten sind:

- Persistente – werden geladen, wenn die Erweiterung startet und entladen, wenn die Erweiterung deaktiviert oder deinstalliert wird.
- Nicht-persistente (auch als Ereignisseiten bekannt) – werden nur geladen, wenn sie benötigt werden, um auf ein Ereignis zu reagieren, und entladen, wenn sie inaktiv werden. Eine Hintergrundseite wird jedoch erst entladen, wenn alle sichtbaren Ansichten und Nachrichtenschnittstellen geschlossen sind. Das Öffnen einer Ansicht führt nicht dazu, dass die Hintergrundseite geladen wird, verhindert aber, dass sie geschlossen wird.

> [!NOTE]
> In Firefox, wenn der Erweiterungsprozess abstürzt:
>
> - werden persistente Hintergrundskripte, die zum Zeitpunkt des Absturzes ausgeführt werden, automatisch neu geladen.
> - werden nicht-persistente Hintergrundskripte (auch als "Ereignisseiten" bekannt), die zum Zeitpunkt des Absturzes ausgeführt werden, nicht neu geladen. Sie werden jedoch automatisch neu gestartet, wenn Firefox einen ihrer WebExtensions API-Ereignislistener aufruft.
> - Erweiterungsseiten, die zum Zeitpunkt des Absturzes in Tabs geladen sind, werden nicht automatisch wiederhergestellt. Eine Warnmeldung in jedem Tab informiert den Benutzer, dass die Seite abgestürzt ist und ermöglicht es dem Benutzer, den Tab zu schließen oder wiederherzustellen.
>   ![Browserfenster zeigt die Benutzermeldung an, die angibt, dass eine Seite abgestürzt ist, mit den Optionen, den Tab zu schließen oder neu zu starten](your-tab-crashed-screenshot.png)
>   Sie können diesen Zustand testen, indem Sie einen neuen Tab öffnen und zu `about:crashextensions` navigieren, was einen stillen Absturz des Erweiterungsprozesses auslöst.

In Manifest V2 können Hintergrundskripte oder -seiten persistent oder nicht-persistent sein. Nicht-persistente Hintergrundskripte werden empfohlen, da sie die Ressourcenkosten Ihrer Erweiterung reduzieren. In Manifest V3 werden nur nicht-persistente Hintergrundskripte oder -seiten unterstützt.

Wenn Sie persistente Hintergrundskripte oder -seiten in Manifest V2 haben und Ihre Erweiterung auf Manifest V3 vorbereiten möchten, bietet [Umwandlung in nicht-persistente](#umwandlung_in_nicht-persistent) Ratschläge zum Übergang von Skripten oder Seiten zum nicht-persistenten Modell.

## Umgebung von Hintergrundskripten

### DOM-APIs

Hintergrundskripte laufen im Kontext einer speziellen Seite, die als Hintergrundseite bezeichnet wird. Dadurch erhalten sie ein [`window`](/de/docs/Web/API/Window) globales Objekt, zusammen mit allen standardmäßigen DOM-APIs, die durch dieses Objekt bereitgestellt werden.

> [!WARNING]
> In Firefox unterstützen Hintergrundseiten die Nutzung von [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm) oder [`prompt()`](/de/docs/Web/API/Window/prompt) nicht.

### WebExtension-APIs

Hintergrundskripte können alle [WebExtension-APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) verwenden, solange ihre Erweiterung die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

### Zugriff über Ursprungsgrenzen hinweg

Hintergrundskripte können XHR-Anfragen an Hosts stellen, für die sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

### Web-Inhalt

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit diesen Inhalts-Skripten über eine Nachrichtenübermittlungs-API kommunizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

### Content-Security-Policy

Hintergrundskripte sind durch eine Content-Security-Policy von bestimmten potenziell gefährlichen Operationen wie der Nutzung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) ausgeschlossen.

Siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) für weitere Details.

## Implementierung von Hintergrundskripten

Dieser Abschnitt beschreibt, wie ein nicht-persistentes Hintergrundskript implementiert wird.

### Hintergrundskripte spezifizieren

In Ihrer Erweiterung schließen Sie ein Hintergrundskript oder mehrere ein, wenn Sie diese benötigen, indem Sie den [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Schlüssel in `manifest.json` verwenden. Für Manifest V2-Erweiterungen muss die Eigenschaft `persistent` auf `false` gesetzt sein, um ein nicht-persistentes Skript zu erstellen. Es kann für Manifest V3-Erweiterungen weggelassen werden oder es muss auf `false` gesetzt werden, da Skripte immer nicht-persistent in Manifest V3 sind. Wenn Sie `"type": "module"` einschließen, werden die Hintergrundskripte als ES-Module geladen.

```json
"background": {
  "scripts": ["background-script.js"],
  "persistent": false,
  "type": "module"
}
```

Diese Skripte werden auf der Hintergrundseite der Erweiterung ausgeführt, sodass sie im selben Kontext laufen, wie Skripte, die in eine Webseite geladen werden.

Wenn Sie jedoch bestimmten Inhalt auf der Hintergrundseite benötigen, können Sie eine angeben. Dann geben Sie Ihr Skript von der Seite anstelle der Verwendung der `"scripts"`-Eigenschaft an. Vor der Einführung der `"type"`-Eigenschaft für den `"background"`-Schlüssel war dies die einzige Möglichkeit, ES-Module einzuschließen. So geben Sie eine Hintergrundseite an:

- manifest.json

  ```json
  "background": {
    "page": "background-page.html",
    "persistent": false
  }
  ```

- background-page.html

  ```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <script type="module" src="background-script.js"></script>
    </head>
  </html>
  ```

Sie können keine Hintergrundskripte und eine Hintergrundseite angeben.

### Die Erweiterung initialisieren

Hören Sie {{WebExtAPIRef("runtime.onInstalled")}}, um eine Erweiterung bei der Installation zu initialisieren. Verwenden Sie dieses Ereignis, um einen Status festzulegen oder für eine einmalige Initialisierung.

Für Erweiterungen mit Ereignisseiten ist dies der Ort, an dem zustandsbehaftete APIs, wie ein Kontextmenü, das mit {{WebExtAPIRef("menus.create")}} erstellt wird, verwendet werden sollten. Dies liegt daran, dass zustandsbehaftete APIs nicht jedes Mal ausgeführt werden müssen, wenn die Ereignisseite neu geladen wird; sie müssen nur ausgeführt werden, wenn die Erweiterung installiert wird.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});
```

### Listener hinzufügen

Strukturieren Sie Hintergrundskripte um Ereignisse, von denen die Erweiterung abhängt. Das Definieren relevanter Ereignisse ermöglicht es den Hintergrundskripten, im Leerlauf zu bleiben, bis diese Ereignisse ausgelöst werden, und verhindert, dass die Erweiterung wesentliche Auslöser verpasst.

Listener müssen synchron von Beginn der Seite an registriert werden.

```js
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "sampleContextMenu",
    title: "Sample Context Menu",
    contexts: ["selection"],
  });
});

// This will run when a bookmark is created.
browser.bookmarks.onCreated.addListener(() => {
  // do something
});
```

Registrieren Sie Listener nicht asynchron, da sie nicht ordnungsgemäß ausgelöst werden. Daher, anstatt:

```js example-bad
window.onload = () => {
  // WARNING! This event is not persisted, and will not restart the event page.
  browser.bookmarks.onCreated.addListener(() => {
    // do something
  });
};
```

Machen Sie dies:

```js
browser.tabs.onUpdated.addListener(() => {
  // This event is run in the top level scope of the event page, and will persist, allowing
  // it to restart the event page if necessary.
});
```

Erweiterungen können Listener aus ihren Hintergrundskripten entfernen, indem sie `removeListener` aufrufen, wie zum Beispiel mit {{WebExtAPIRef("runtime.onMessage")}} `removeListener`. Wenn alle Listener für ein Ereignis entfernt werden, lädt der Browser das Hintergrundskript der Erweiterung für dieses Ereignis nicht mehr.

```js
browser.runtime.onMessage.addListener(
  function messageListener(message, sender, sendResponse) {
    browser.runtime.onMessage.removeListener(messageListener);
  },
);
```

### Ereignisse filtern

Wenn Ihre Erweiterung nur auf eine Untermenge von Ereignissen reagieren muss, zum Beispiel, wenn eine Webseite von einer bestimmten Domain geöffnet wird, verwenden Sie Ereignisfilter, wo sie verfügbar sind.

Zum Beispiel können Sie einen Filter zum {{WebExtAPIRef("webNavigation.onCompleted")}}-Ereignis hinzufügen, um Ihr Hintergrundskript zu starten, wenn bestimmte URLs geladen werden, wie folgt:

```js
browser.webNavigation.onCompleted.addListener(
  () => {
    console.log("This is my favorite website!");
  },
  { url: [{ urlMatches: "https://www.mozilla.org/" }] },
);
```

Wenn Sie nur auf Desktop-Firefox abzielen, können Sie auch Filter zu {{WebExtAPIRef("tabs.onUpdated")}} hinzufügen, um ein ähnliches Ergebnis zu erzielen.

### Auf Listener reagieren

Listener existieren, um Funktionalität auszulösen, sobald ein Ereignis ausgelöst wurde. Um auf ein Ereignis zu reagieren, strukturieren Sie die gewünschte Reaktion innerhalb des Listener-Ereignisses.

Wenn Sie auf Ereignisse im Kontext eines bestimmten Tabs oder Frames reagieren, verwenden Sie `tabId` und `frameId` aus den Ereignisdetails, anstatt sich auf den „aktuellen Tab“ zu verlassen. Das Angeben des Ziels stellt sicher, dass Ihre Erweiterung keine Erweiterungs-API auf das falsche Ziel aufruft, wenn sich der „aktuelle Tab“ während des Aufweckens der Ereignisseite ändert.

Zum Beispiel kann {{WebExtAPIRef("runtime.onMessage")}} auf Aufrufe von {{WebExtAPIRef("runtime.sendMessage")}} wie folgt reagieren:

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.data === "setAlarm") {
    browser.alarms.create({ delayInMinutes: 5 });
  } else if (message.data === "runLogic") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      files: ["logic.js"],
    });
  } else if (message.data === "changeColor") {
    browser.scripting.executeScript({
      target: {
        tabId: sender.tab.id,
        frameIds: [sender.frameId],
      },
      func: () => {
        document.body.style.backgroundColor = "orange";
      },
    });
  }
});
```

### Hintergrundskripte entladen

Daten sollten regelmäßig gespeichert werden, um nicht wichtige Informationen zu verlieren, wenn eine Erweiterung abstürzt, ohne {{WebExtAPIRef("runtime.onSuspend")}} zu empfangen. Verwenden Sie die Speicher-API, um dies zu unterstützen.

```js
// Or storage.session if the variable does not need to persist pass browser shutdown.
browser.storage.local.set({ variable: variableInformation });
```

Message-Ports können eine Ereignisseite nicht am Herunterfahren hindern. Wenn eine Erweiterung Nachrichtenübermittlung verwendet, werden die Ports geschlossen, wenn die Ereignisseite inaktiv wird. Durch das Hören auf {{WebExtAPIRef("runtime.Port")}} `onDisconnect` können Sie erkennen, wann offene Ports geschlossen werden, der Listener steht jedoch unter den gleichen Zeitbeschränkungen wie {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message === "hello") {
      let response = { greeting: "welcome!" };
      port.postMessage(response);
    } else if (message === "goodbye") {
      console.log("Disconnecting port from this end");
      port.disconnect();
    }
  });
  port.onDisconnect.addListener(() => {
    console.log("Port was disconnected from the other end");
  });
});
```

Hintergrundskripte werden nach wenigen Sekunden Inaktivität entladen. Wenn jedoch während des Anhaltens eines Hintergrundskripts ein weiteres Ereignis das Hintergrundskript weckt, wird {{WebExtAPIRef("runtime.onSuspendCanceled")}} aufgerufen und das Hintergrundskript läuft weiter. Wenn eine Bereinigung erforderlich ist, hören Sie auf {{WebExtAPIRef("runtime.onSuspend")}}.

```js
browser.runtime.onSuspend.addListener(() => {
  console.log("Unloading.");
  browser.browserAction.setBadgeText({ text: "" });
});
```

Das regelmäßige Speichern von Daten sollte jedoch bevorzugt werden, anstatt sich auf {{WebExtAPIRef("runtime.onSuspend")}} zu verlassen. Es erlaubt nicht so viel Bereinigung, wie möglicherweise notwendig wäre, und hilft nicht im Falle eines Absturzes.

## Umwandlung in nicht-persistent

Wenn Sie ein persistentes Hintergrundskript haben, bietet dieser Abschnitt Anweisungen zur Umwandlung in das nicht-persistente Modell.

### Aktualisieren Sie Ihre manifest.json-Datei

Ändern Sie in der `manifest.json`-Datei Ihrer Erweiterung die `persistent`-Eigenschaft des [`"background"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)-Schlüssels auf `false` für Ihr Skript oder Ihre Seite.

```json
"background": {
  …,
  "persistent": false
}
```

### Ereignis-Listener verschieben

Listener müssen auf der obersten Ebene sein, um das Hintergrundskript zu aktivieren, wenn ein Ereignis ausgelöst wird. Registrierte Listener müssen möglicherweise in das synchrone Muster umstrukturiert und an die oberste Ebene verschoben werden.

```js
browser.runtime.onStartup.addListener(() => {
  // run startup function
});
```

### Statusänderungen aufzeichnen

Skripte werden jetzt bei Bedarf geöffnet und geschlossen. Verlassen Sie sich daher nicht auf globale Variablen.

```js example-bad
var count = 101;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    ++count;
    sendResponse(count);
  }
});
```

Verwenden Sie stattdessen die Speicher-API, um Zustände und Werte zu setzen und zurückzugeben:

- Verwenden Sie {{WebExtAPIRef("storage.session")}} für den Speicher im Arbeitsspeicher, der gelöscht wird, wenn die Erweiterung oder der Browser heruntergefahren wird. Standardmäßig ist `storage.session` nur für Erweiterungskontexte verfügbar und nicht für Inhaltsskripte.
- Verwenden Sie {{WebExtAPIRef("storage.local")}} für einen größeren Speicherbereich, der über Neustarts des Browsers und der Erweiterung hinweg bestehen bleibt.

```js
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message === "count") {
    let items = await browser.storage.session.get({ myStoredCount: 101 });
    let count = items.myStoredCount;
    ++count;
    await browser.storage.session.set({ myStoredCount: count });
    return count;
  }
});
```

Das obige Beispiel [sendet eine asynchrone Antwort unter Verwendung eines Versprechens](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_a_promise), was in Chrome nicht unterstützt wird, bis [Chrome Bug 1185241](https://crbug.com/1185241) gelöst ist. Eine Cross-Browser-Alternative ist, [true zurückzugeben und `sendResponse` zu verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#sending_an_asynchronous_response_using_sendresponse).

```js
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "count") {
    browser.storage.session.get({ myStoredCount: 101 }).then(async (items) => {
      let count = items.myStoredCount;
      ++count;
      await browser.storage.session.set({ myStoredCount: count });
      sendResponse(count);
    });
    return true;
  }
});
```

### Timer in Alarme umwandeln

DOM-basierte Timer, wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), bleiben nach dem Leerlauf einer Ereignisseite nicht aktiv. Verwenden Sie stattdessen die {{WebExtAPIRef("alarms")}}-API, wenn Sie einen Timer benötigen, der eine Ereignisseite weckt.

```js
browser.alarms.create({ delayInMinutes: 3.0 });
```

Fügen Sie dann einen Listener hinzu.

```js
browser.alarms.onAlarm.addListener(() => {
  alert("Hello, world!");
});
```

### Überarbeitungen von Aufrufen von Hintergrundskript-Funktionen

Erweiterungen hosten ihre Hauptfunktionalität häufig im Hintergrundskript. Einige Erweiterungen greifen auf Funktionen und Variablen zu, die auf der Hintergrundseite durch das `window`, das von {{WebExtAPIRef("runtime.getBackgroundPage")}} zurückgegeben wird, definiert sind.
Die Methode gibt `null` zurück, wenn:

- Erweiterungsseiten isoliert sind, wie zum Beispiel Erweiterungsseiten im privaten Modus oder in Container-Tabs.
- die Hintergrundseite nicht läuft. Dies ist mit persistenten Hintergrundseiten ungewöhnlich, aber sehr wahrscheinlich, wenn eine Ereignisseite verwendet wird, da eine Ereignisseite angehalten werden kann.

> [!NOTE]
> Der empfohlene Weg, Funktionalität im Hintergrundskript aufzurufen, ist die Kommunikation damit durch {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} oder {{WebExtAPIRef("runtime.connect","runtime.connect()")}}.
> Die in diesem Abschnitt diskutierten `getBackgroundPage()`-Methoden können in einer browserübergreifenden Erweiterung nicht verwendet werden, da Manifest-Version-3-Erweiterungen in Chrome keine Hintergrund- oder Ereignisseiten verwenden können.

Wenn Ihre Erweiterung eine Referenz auf das `window` der Hintergrundseite benötigt, verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}, um sicherzustellen, dass die Ereignisseite läuft.
Wenn der Aufruf optional ist (das heißt, nur benötigt wird, wenn die Ereignisseite aktiv ist), verwenden Sie {{WebExtAPIRef("runtime.getBackgroundPage")}}.

```js example-bad
document.getElementById("target").addEventListener("click", async () => {
  let backgroundPage = browser.runtime.getBackgroundPage();
  // Warning: backgroundPage is likely null.
  backgroundPage.backgroundFunction();
});
```

```js
document.getElementById("target").addEventListener("click", async () => {
  // runtime.getBackgroundPage() wakes up the event page if it was not running.
  let backgroundPage = await browser.runtime.getBackgroundPage();
  backgroundPage.backgroundFunction();
});
```
