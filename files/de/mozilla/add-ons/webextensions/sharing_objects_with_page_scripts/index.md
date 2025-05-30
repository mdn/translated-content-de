---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{AddonSidebar}}

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar und nur ab Version 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie beachten, dass Skripte, die in beliebigen Webseiten ausgeführt werden, feindliche Codes sind, deren Ziel es ist, die persönlichen Daten des Benutzers zu stehlen, seinen Computer zu beschädigen oder ihn auf andere Weise anzugreifen.
>
> Die Isolation zwischen Inhaltsskripten und von Webseiten geladenen Skripten soll es feindlichen Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation aufheben, sind sie inhärent gefährlich und sollten mit großer Vorsicht verwendet werden.

Wie der [Leitfaden zu Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) anmerkt, sehen Inhaltsskripte nicht die Änderungen, die durch von Webseiten geladene Skripte am DOM vorgenommen werden. Das bedeutet beispielsweise, dass, wenn eine Webseite eine Bibliothek wie jQuery lädt, die Inhaltsskripte diese nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können von Webseiten geladene Skripte die von Inhaltsskripten vorgenommenen Änderungen nicht sehen.

Firefox bietet jedoch einige APIs, die es Inhaltsskripten ermöglichen:

- Zugriff auf von Seitenskripten erstellte JavaScript-Objekte
- Exposition ihrer eigenen JavaScript-Objekte gegenüber Seitenskripten.

## Xray Vision in Firefox

In Firefox wird ein Teil der Isolation zwischen Inhaltsskripten und Seitenskripten durch eine Funktion namens "Xray Vision" implementiert. Wenn ein Skript in einem privilegierteren Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle {{Glossary("Expando", "Expando")}}-Eigenschaften sind unsichtbar, und wenn irgendwelche Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung und nicht die neu definierte Version.

Der Zweck dieser Funktion besteht darin, es dem weniger privilegierten Skript zu erschweren, das privilegiertere Skript zu verwirren, indem es die nativen Eigenschaften von Objekten neu definiert.

Wenn beispielsweise ein Inhaltsskript auf das [window](/de/docs/Web/API/Window) der Seite zugreift, sieht es keine Eigenschaften, die das Seitenskript zum Fenster hinzugefügt hat, und wenn das Seitenskript vorhandene Eigenschaften des Fensters neu definiert hat, sieht das Inhaltsskript die ursprüngliche Version.

## Zugriff auf Seitenskriptobjekte von Inhaltsskripten

In Firefox erhalten DOM-Objekte in Inhaltsskripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "unwrapped"-Version des Objekts, das alle Änderungen umfasst, die an diesem Objekt durch Seitenskripte vorgenommen wurden.

Nehmen wir ein Beispiel. Angenommen, eine Webseite lädt ein Skript:

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

Das Skript fügt der globalen `window`-Objekt eine Expando-Eigenschaft hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Xray Vision bedeutet, dass, wenn ein Inhaltsskript versucht, `foo` zuzugreifen, es undefiniert sein wird:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhaltsskripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie sich, sobald Sie dies tun, nicht mehr darauf verlassen können, dass alle Eigenschaften oder Funktionen dieses Objekts das sind, was Sie erwarten. Jede von ihnen, sogar Setter und Getter, könnte durch nicht vertrauenswürdigem Code neu definiert worden sein.

Beachten Sie auch, dass das Unwrapping transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des unwrapped Objekts ebenfalls unwrapped (und daher unzuverlässig). Es ist daher eine gute Praxis, das Objekt, das Sie benötigen, erneut zu wrappen, was Sie so tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Sehen Sie das Dokument über [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für wesentlich mehr Details darüber.

## Inhaltsskriptobjekte mit Seitenskripten teilen

Firefox bietet auch APIs, die es Inhaltsskripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt mehrere Ansätze dafür:

- [`exportFunction()`](#exportfunction): Eine Funktion zu Seitenskripten exportieren.
- [`cloneInto()`](#cloneinto): Ein Objekt zu Seitenskripten exportieren.
- Konstruktoren aus dem Seiten-Kontext

### exportFunction

Unter Verwendung einer Funktion, die im Inhaltsskript definiert ist, exportiert [`exportFunction()`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) diese in den Kontext des Seitenskripts, sodass das Seitenskript sie aufrufen kann.

Betrachten wir zum Beispiel eine Erweiterung, die ein Hintergrundskript wie dieses hat:

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

Dies macht zwei Dinge:

- Führt ein Inhaltsskript im aktuellen Tab aus, wenn der Benutzer auf eine Browser-Aktion klickt.
- Horcht auf Nachrichten vom Inhaltsskript und zeigt eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications), wenn die Nachricht ankommt.

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

Dies definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Dann exportiert es die Funktion in den Kontext des Seitenskripts. Jetzt kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Unter Verwendung eines Objekts, das im Inhaltsskript definiert ist, erstellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) einen Klon des Objekts im Kontext des Seitenskripts und macht den Klon dadurch für Seitenskripte zugänglich. Standardmäßig wird hierfür der [strukturierte Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet, bei dem Funktionen im Objekt nicht im Klon enthalten sind. Um Funktionen einzuschließen, übergeben Sie die Option `cloneFunctions`.

Zum Beispiel hier ein Inhaltsskript, das ein Objekt definiert, das eine Funktion enthält, und es dann in den Kontext des Seitenskripts klont:

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

Jetzt sehen Seitenskripte eine neue Eigenschaft im Fenster, `messenger`, die eine Funktion `notify()` hat:

```js
window.messenger.notify("Message from the page script!");
```

### Konstruktoren aus dem Seiten-Kontext

Auf dem xrayed Fensterobjekt sind makellose Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen verfügbar. `XMLHttpRequest` verhält sich nicht so, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie erstellen Instanzen, die zur Objekt-Hierarchie des Seitenglobals gehören und geben dann einen Xray-Wrapper zurück.

Da auf diese Weise erzeugte Objekte bereits zur Seite gehören und nicht zum Inhaltsskript, erfordert das Zurückgeben an die Seite kein zusätzliches Klonen oder Exportieren.

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
    // getters must be exported like regular functions
    get: exportFunction(() => "propC", window),
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

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise vom [strukturierten Klonalgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) nicht unterstützt wird. Das gewünschte Ergebnis kann jedoch erreicht werden, indem `window.Promise` anstelle von `Promise` verwendet und dann der aufgelöste Wert wie folgt geklont wird:

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
