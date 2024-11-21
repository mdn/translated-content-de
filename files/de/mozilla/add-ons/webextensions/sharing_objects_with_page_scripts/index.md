---
title: Objekte mit Seitenskripts teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{AddonSidebar}}

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar und erst ab Firefox 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie bedenken, dass Skripte, die in beliebigen Webseiten ausgeführt werden, feindlicher Code sind, dessen Ziel es ist, die persönlichen Informationen des Benutzers zu stehlen, ihren Computer zu beschädigen oder sie auf andere Weise anzugreifen.
>
> Die Isolation zwischen Inhaltsskripten und von Webseiten geladenen Skripten soll es feindlichen Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation aufbrechen, sind sie von Natur aus gefährlich und sollten mit großer Vorsicht verwendet werden.

Wie im [Leitfaden für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) erwähnt, sehen Inhaltsskripte keine Änderungen, die von Skripten vorgenommen werden, die von Webseiten geladen werden. Das bedeutet zum Beispiel, dass, wenn eine Webseite eine Bibliothek wie jQuery lädt, Inhaltsskripte diese nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können Skripte, die von Webseiten geladen werden, keine Änderungen sehen, die von Inhaltsskripten vorgenommen werden.

Firefox stellt jedoch einige APIs bereit, die es Inhaltsskripten ermöglichen:

- auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden
- ihre eigenen JavaScript-Objekte Seitenskripten zugänglich zu machen.

## Xray Vision in Firefox

In Firefox wird ein Teil der Isolation zwischen Inhaltsskripten und Seitenskripten durch eine Funktion namens "Xray Vision" implementiert. Wenn ein Skript in einem höher privilegierten Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle {{Glossary("Expando", "Expando")}}-Eigenschaften sind unsichtbar, und wenn irgendwelche Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung, nicht die neu definierte Version.

Der Zweck dieser Funktion besteht darin, es dem weniger privilegierten Skript zu erschweren, das höher privilegierte Skript zu verwirren, indem es die nativen Eigenschaften von Objekten neu definiert.

Wenn beispielsweise ein Inhaltsskript auf das [window](/de/docs/Web/API/Window) der Seite zugreift, sieht es keine Eigenschaften, die das Seitenskript dem Fenster hinzugefügt hat, und wenn das Seitenskript bereits vorhandene Eigenschaften des Fensters neu definiert hat, sieht das Inhaltsskript die ursprüngliche Version.

## Zugriff auf Seitenskript-Objekte von Inhaltsskripten

In Firefox erhalten DOM-Objekte in Inhaltsskripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "unverpackte" Version des Objekts, die alle Änderungen enthält, die an diesem Objekt von Seitenskripten vorgenommen wurden.

Nehmen wir ein Beispiel an. Angenommen, eine Webseite lädt ein Skript:

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

Das Skript fügt eine Expando-Eigenschaft zum globalen `window` hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Xray Vision bedeutet, dass, wenn ein Inhaltsskript versucht, auf `foo` zuzugreifen, es undefiniert sein wird:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhaltsskripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie, sobald Sie dies tun, nicht mehr darauf vertrauen können, dass eine der Eigenschaften oder Funktionen dieses Objekts das ist oder tut, was Sie erwarten. Jede von ihnen, sogar Setter und Getter, könnte von nicht vertrauenswürdigem Code neu definiert worden sein.

Beachten Sie auch, dass das Unwrapping transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des unverpackten Objekts selbst unverpackt (und somit unzuverlässig). Es ist daher empfehlenswert, das Objekt, das Sie benötigen, erneut zu verpacken, was Sie so tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Weitere Details finden Sie im Dokument zu [Xray Vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html).

## Teilen von Inhaltsskript-Objekten mit Seitenskripten

Firefox bietet auch APIs, die es Inhaltsskripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt hier mehrere Ansätze:

- [`exportFunction()`](#exportfunction): Exportiert eine Funktion zu Seitenskripten.
- [`cloneInto()`](#cloneinto): Exportiert ein Objekt zu Seitenskripten.
- Konstruktoren aus dem Seitenkontext

### exportFunction

Mit [`exportFunction()`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) kann eine im Inhaltsskript definierte Funktion in den Gültigkeitsbereich des Seitenskripts exportiert werden, sodass das Seitenskript sie aufrufen kann.

Beispielsweise betrachten wir eine Erweiterung mit einem Hintergrundskript wie diesem:

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

- ein Inhaltsskript im aktuellen Tab ausführen, wenn der Benutzer auf ein Browser-Action-Element klickt
- auf Nachrichten vom Inhaltsskript hören und eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) anzeigen, wenn die Nachricht eintrifft.

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

Es definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Dann wird die Funktion in den Gültigkeitsbereich des Seitenskripts exportiert. Jetzt kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Mit [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) wird ein im Inhaltsskript definiertes Objekt in den Gültigkeitsbereich eines Seitenskripts geklont und dadurch das Klon-Objekt für Seitenskripte zugänglich gemacht. Standardmäßig wird dafür der [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet, um das Objekt zu klonen, was bedeutet, dass Funktionen im Objekt nicht in das Klon-Objekt einbezogen werden. Um Funktionen einzuschließen, übergeben Sie die Option `cloneFunctions`.

Zum Beispiel definiert ein Inhaltsskript ein Objekt, das eine Funktion enthält, und klont es dann in den Gültigkeitsbereich des Seitenskripts:

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

Jetzt erkennen Seitenskripte eine neue Eigenschaft am Fenster, `messenger`, das eine Funktion `notify()` hat:

```js
window.messenger.notify("Message from the page script!");
```

### Konstruktoren aus dem Seitenkontext

Am xrayed-Window-Objekt sind unberührte Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen verfügbar. `XMLHttpRequest` verhält sich nicht auf diese Weise, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie werden Instanzen erzeugen, die zur Objekthierarchie der Seite gehören, und dann einen Xray-Wrapper zurückgeben.

Da Objekte, die auf diese Weise erstellt werden, bereits zur Seite und nicht zum Inhaltsskript gehören, erfordert das Zurückgeben an die Seite kein zusätzliches Klonen oder Exportieren.

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

### Promise-Cloning

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise nicht vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt wird. Das gewünschte Ergebnis kann jedoch erzielt werden, indem `window.Promise` anstelle von `Promise` verwendet wird und dann der Auflösungswert so geklont wird:

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
