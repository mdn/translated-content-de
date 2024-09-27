---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 59810b5b4a4cdf1151c088ff5165a85f4a96f518
---

{{AddonSidebar}}

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar, und das erst ab Firefox 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie berücksichtigen, dass Skripte, die in beliebigen Webseiten ausgeführt werden, feindlichen Code darstellen, dessen Ziel es ist, die persönlichen Informationen des Benutzers zu stehlen, seinen Computer zu beschädigen oder ihn auf andere Weise anzugreifen.
>
> Die Isolation zwischen Inhalts-Skripten und von Webseiten geladenen Skripten soll es feindlichen Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation aufbrechen, sind sie von Natur aus gefährlich und sollten mit großer Sorgfalt verwendet werden.

Wie der [Leitfaden für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) feststellt, erkennen Inhalts-Skripte keine Änderungen des DOM, die von Skripten vorgenommen wurden, die von Webseiten geladen werden. Das bedeutet beispielsweise, dass Inhalts-Skripte, wenn eine Webseite eine Bibliothek wie jQuery lädt, diese nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können Skripte, die von Webseiten geladen werden, keine Änderungen erkennen, die von Inhalts-Skripten vorgenommen werden.

Firefox bietet jedoch einige APIs, die es Inhalts-Skripten ermöglichen,:

- auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden
- ihre eigenen JavaScript-Objekte den Seitenskripten zugänglich zu machen.

## Xray Vision in Firefox

In Firefox wird ein Teil der Isolation zwischen Inhalts-Skripten und Seitenskripten durch eine Funktion namens "Xray Vision" implementiert. Wenn ein Skript in einem höher privilegierten Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle [expando](/de/docs/Glossary/Expando)-Eigenschaften sind unsichtbar, und wenn irgendwelche Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung, nicht die neu definierte Version.

Der Zweck dieser Funktion besteht darin, es dem weniger privilegierten Skript zu erschweren, das höher privilegierte Skript zu verwirren, indem es die nativen Eigenschaften von Objekten neu definiert.

Wenn beispielsweise ein Inhalts-Skript auf das [window](/de/docs/Web/API/Window) der Seite zugreift, werden keine Eigenschaften angezeigt, die das Seitenskript dem Fenster hinzugefügt hat, und falls das Seitenskript bestehende Eigenschaften des Fensters neu definiert hat, sieht das Inhalts-Skript die ursprüngliche Version.

## Zugriff auf Seitenskriptobjekte von Inhalts-Skripten

In Firefox erhalten DOM-Objekte in Inhalts-Skripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "ausgewickelte" Version des Objekts, die alle Änderungen umfasst, die an diesem Objekt von Seitenskripten vorgenommen wurden.

Nehmen wir ein einfaches Beispiel an. Angenommen, eine Webseite lädt ein Skript:

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

Das Skript fügt dem globalen `window` eine Expando-Eigenschaft hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Durch Xray Vision wird `foo` undefined sein, wenn ein Inhalts-Skript versucht, darauf zuzugreifen:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhalts-Skripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie, sobald Sie dies tun, sich nicht mehr auf die Eigenschaften oder Funktionen dieses Objekts verlassen können, dass sie das sind oder tun, was Sie erwarten. Jede von ihnen, selbst Setter und Getter, könnte von unzuverlässigem Code neu definiert worden sein.

Beachten Sie auch, dass das Auswickeln transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des ausgewickelten Objekts selbst ausgewickelt (und daher unzuverlässig). Daher ist es eine gute Praxis, nachdem Sie das benötigte Objekt erhalten haben, es wieder einzuwickeln, was Sie so tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Siehe das Dokument über [Xray Vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für wesentlich mehr Details dazu.

## Objekte von Inhalts-Skripten mit Seitenskripten teilen

Firefox bietet auch APIs, die es Inhalts-Skripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt hier mehrere Ansätze:

- [`exportFunction()`](#exportfunction): eine Funktion für Seitenskripte exportieren.
- [`cloneInto()`](#cloneinto): ein Objekt für Seitenskripte exportieren.
- Konstruktoren aus dem Seitenkontext

### exportFunction

Angenommen, eine im Inhalts-Skript definierte Funktion wird mittels [`exportFunction()`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) in den Bereich des Seitenskripts exportiert, damit das Seitenskript sie aufrufen kann.

Zum Beispiel betrachten wir eine Erweiterung mit einem Hintergrundskript wie diesem:

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

Dies tut zwei Dinge:

- ein Inhalts-Skript im aktuellen Tab ausführen, wenn der Benutzer auf eine Browser-Aktion klickt
- auf Nachrichten vom Inhalts-Skript lauschen und eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) anzeigen, wenn die Nachricht eintrifft.

Das Inhalts-Skript sieht folgendermaßen aus:

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

Dies definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Es exportiert dann die Funktion in den Bereich des Seitenskripts. Nun kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Angenommen, ein im Inhalts-Skript definiertes Objekt wird von [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) in den Bereich des Seitenskripts geklont, wodurch das Klon den Seitenskripten zugänglich gemacht wird. Standardmäßig verwendet dies den [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um das Objekt zu klonen, was bedeutet, dass Funktionen im Objekt nicht im Klon enthalten sind. Um Funktionen einzubeziehen, verwenden Sie die Option `cloneFunctions`.

Hier ist zum Beispiel ein Inhalts-Skript, das ein Objekt definiert, das eine Funktion enthält, und es dann in den Bereich des Seitenskripts klont:

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

### Konstruktoren aus dem Seitenkontext

Im xrayed `window`-Objekt stehen reine Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen zur Verfügung. `XMLHttpRequest` verhält sich nicht so, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie erstellen Instanzen, die zur Objekt-Hierarchie des globalen Seite gehören und geben dann einen Xray-Wrapper zurück.

Da auf diese Weise erstellte Objekte bereits zur Seite und nicht zum Inhalts-Skript gehören, erfordert das Zurückgeben an die Seite kein zusätzliches Klonen oder Exportieren.

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

Ein `Promise` kann nicht direkt mit `cloneInto` geklont werden, da `Promise` nicht vom [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt wird. Das gewünschte Ergebnis kann jedoch erzielt werden, indem `window.Promise` anstelle von `Promise` verwendet wird und dann der Wert der Auflösung so geklont wird:

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
