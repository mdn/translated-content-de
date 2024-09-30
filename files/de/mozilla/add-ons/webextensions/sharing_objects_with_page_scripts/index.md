---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 59810b5b4a4cdf1151c088ff5165a85f4a96f518
---

{{AddonSidebar}}

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar, und zwar erst ab Firefox 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie berücksichtigen, dass Skripte, die in beliebigen Webseiten ausgeführt werden, bösartige Programme sein könnten, deren Ziel es ist, die persönlichen Informationen des Nutzers zu stehlen, seinen Computer zu beschädigen oder ihn auf andere Weise anzugreifen.
>
> Die Trennung zwischen Inhaltsskripten und von Webseiten geladenen Skripten soll es schwieriger machen, dass bösartige Webseiten dies tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Trennung aufheben, sind sie von Natur aus gefährlich und sollten mit großer Vorsicht verwendet werden.

Wie im [Leitfaden für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) erwähnt, sehen Inhaltsskripte keine Änderungen am DOM durch von Webseiten geladene Skripte. Das bedeutet zum Beispiel, dass, wenn eine Webseite eine Bibliothek wie jQuery lädt, Inhaltsskripte sie nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können von Webseiten geladene Skripte keine Änderungen sehen, die von Inhaltsskripten gemacht werden.

Allerdings bietet Firefox einige APIs, die es Inhaltsskripten ermöglichen:

- auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden
- ihre eigenen JavaScript-Objekte für Seitenskripte verfügbar zu machen.

## Röntgenblick in Firefox

In Firefox wird ein Teil der Trennung zwischen Inhaltsskripten und Seitenskripten mithilfe einer Funktion namens "Röntgenblick" implementiert. Wenn ein Skript in einem privilegierteren Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Jegliche [expando](/de/docs/Glossary/Expando)-Eigenschaften sind unsichtbar, und wenn Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung, nicht die neu definierte Version.

Der Zweck dieser Funktion besteht darin, es dem weniger privilegierten Skript zu erschweren, das privilegiertere Skript zu verwirren, indem es die nativen Eigenschaften von Objekten neu definiert.

Wenn also zum Beispiel ein Inhaltsskript auf das [window](/de/docs/Web/API/Window) der Seite zugreift, sieht es keine Eigenschaften, die das Seitenskript zum Fenster hinzugefügt hat, und wenn das Seitenskript bestehende Eigenschaften des Fensters neu definiert hat, sieht das Inhaltsskript die ursprüngliche Version.

## Zugriff auf Seitenskript-Objekte von Inhaltsskripten

In Firefox erhalten DOM-Objekte in Inhaltsskripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "nicht umwickelte" Version des Objekts, die alle Änderungen enthält, die von Seitenskripten an diesem Objekt vorgenommen wurden.

Nehmen wir ein einfaches Beispiel. Angenommen, eine Webseite lädt ein Skript:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

Das Skript fügt dem globalen `window` eine expando-Eigenschaft hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Der Röntgenblick bedeutet, dass, wenn ein Inhaltsskript versucht `foo` zuzugreifen, es undefiniert sein wird:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhaltsskripte `window.wrappedJSObject` verwenden, um die expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie, sobald Sie dies tun, nicht mehr darauf vertrauen können, dass die Eigenschaften oder Funktionen dieses Objekts so sind oder tun, wie Sie es erwarten. Jede von ihnen, sogar Setter und Getter, könnte von nicht vertrauenswürdigem Code neu definiert worden sein.

Beachten Sie auch, dass das Entpacken transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des entpackten Objekts selbst entpackt (und sind daher unzuverlässig). Es ist daher gute Praxis, das Objekt, sobald Sie es haben, erneut zu verpacken, was Sie so tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Siehe das Dokument über [Röntgenblick](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für viel detailliertere Informationen darüber.

## Teilen von Inhaltsskript-Objekten mit Seitenskripten

Firefox bietet auch APIs, die es Inhaltsskripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt hier mehrere Ansätze:

- [`exportFunction()`](#exportfunction): eine Funktion für Seitenskripte exportieren.
- [`cloneInto()`](#cloneinto): ein Objekt für Seitenskripte exportieren.
- Konstruktoren aus dem Kontext der Seite

### exportFunction

`exportFunction()` exportiert eine im Inhaltsskript definierte Funktion in den Geltungsbereich des Seitenskriptes, sodass das Seitenskript sie aufrufen kann.

Beispielsweise betrachten wir eine Erweiterung, die ein Hintergrundskript wie dieses besitzt:

```js
/*
Execute content script in the active tab.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js",
  });
}

/*
Add loadContentScript() as a listener to clicks
on the browser action.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Show a notification when we get messages from
the content script.
*/
browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Message from the page",
    message: message.content,
  });
});
```

Dieses tut zwei Dinge:

- Führen eines Inhaltsskriptes im aktuellen Tab aus, wenn der Benutzer auf eine Browseraktion klickt
- Hören auf Nachrichten vom Inhaltsskript und Anzeigen einer [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications), wenn die Nachricht eintrifft.

Das Inhaltsskript sieht so aus:

```js
/*
Define a function in the content script's scope, then export it
into the page script's scope.
*/
function notify(message) {
  browser.runtime.sendMessage({ content: `Function call: ${message}` });
}

exportFunction(notify, window, { defineAs: "notify" });
```

Dies definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Anschließend exportiert es die Funktion in den Geltungsbereich des Seitenskriptes. Nun kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

`cloneInto()` klont ein im Inhaltsskript definiertes Objekt in den Geltungsbereich des Seitenskripts, wodurch der Klon für Seitenskripte zugänglich wird. Standardmäßig verwendet dies den [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) zum Klonen des Objekts, was bedeutet, dass Funktionen im Objekt nicht in den Klon einbezogen werden. Um Funktionen einzuschließen, geben Sie die Option `cloneFunctions` an.

Zum Beispiel definiert ein Inhaltsskript ein Objekt, das eine Funktion enthält, und klont es dann in den Geltungsbereich des Seitenskripts:

```js
/*
Create an object that contains functions in
the content script's scope, then clone it
into the page script's scope.

Because the object contains functions,
the cloneInto call must include
the `cloneFunctions` option.
*/
let messenger = {
  notify(message) {
    browser.runtime.sendMessage({
      content: `Object method call: ${message}`,
    });
  },
};

window.wrappedJSObject.messenger = cloneInto(messenger, window, {
  cloneFunctions: true,
});
```

Nun sehen Seitenskripte eine neue Eigenschaft im Fenster, `messenger`, die eine Funktion `notify()` hat:

```js
window.messenger.notify("Message from the page script!");
```

### Konstruktoren aus dem Kontext der Seite

Auf dem geröntgten window-Objekt sind ursprüngliche Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen verfügbar. `XMLHttpRequest` verhält sich nicht auf diese Weise, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie werden Instanzen erstellen, die zur Objekt-Hierarchie des globalen Objekts der Seite gehören, und dann einen Röntgen-Wrapper zurückgeben.

Da auf diese Weise erstellte Objekte bereits zur Seite und nicht zum Inhaltsskript gehören, erfordert das Zurückgeben an die Seite kein zusätzliches Klonen oder Exportieren.

```js
/* JavaScript built-ins */

const objA = new Object();
const objB = new window.Object();

console.log(
  objA instanceof Object, // true
  objB instanceof Object, // false
  objA instanceof window.Object, // false
  objB instanceof window.Object, // true
  "wrappedJSObject" in objB, // true; xrayed
);

objA.foo = "foo";
objB.foo = "foo"; // xray wrappers for plain JavaScript objects pass through property assignments
objB.wrappedJSObject.bar = "bar"; // unwrapping before assignment does not rely on this special behavior

window.wrappedJSObject.objA = objA;
window.wrappedJSObject.objB = objB; // automatically unwraps when passed to page context

window.eval(`
  console.log(objA instanceof Object);           // false
  console.log(objB instanceof Object);           // true

  try {
    console.log(objA.foo);
  } catch (error) {
    console.log(error);                       // Error: permission denied
  }
 
  try {
    objA.baz = "baz";
  } catch (error) {
    console.log(error);                       // Error: permission denied
  }

  console.log(objB.foo, objB.bar);               // "foo", "bar"
  objB.baz = "baz";
`);

/* other APIs */

const ev = new Event("click");

console.log(
  ev instanceof Event, // true
  ev instanceof window.Event, // true; Event constructor is actually inherited from the xrayed window
  "wrappedJSObject" in ev, // true; is an xrayed object
);

ev.propA = "propA"; // xray wrappers for native objects do not pass through assignments
ev.propB = "wrapper"; // define property on xray wrapper
ev.wrappedJSObject.propB = "unwrapped"; // define same property on page object
Reflect.defineProperty(
  // privileged reflection can operate on less privileged objects
  ev.wrappedJSObject,
  "propC",
  {
    get: exportFunction(() => {
      // getters must be exported like regular functions
      return "propC";
    }, window),
  },
);

window.eval(`
  document.addEventListener("click", (e) => {
    console.log(e instanceof Event, e.propA, e.propB, e.propC);
  });
`);

document.dispatchEvent(ev); // true, undefined, "unwrapped", "propC"
```

### Promise-Klonen

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise vom [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) nicht unterstützt wird. Das gewünschte Ergebnis kann jedoch erzielt werden, indem `window.Promise` anstelle von `Promise` verwendet wird und dann der Auflösungswert wie folgt geklont wird:

```js
const promise = new window.Promise((resolve) => {
  // if just a primitive, then cloneInto is not needed:
  // resolve("string is a primitive");

  // if not a primitive, such as an object, then the value must be cloned
  const result = { exampleKey: "exampleValue" };
  resolve(cloneInto(result, window));
});
// now the promise can be passed to the web page
```
