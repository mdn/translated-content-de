---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Die Techniken, die in diesem Abschnitt beschrieben werden, sind nur in Firefox verfügbar, und zwar erst ab Firefox 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie bedenken, dass Skripte, die auf beliebigen Webseiten ausgeführt werden, feindlicher Code sind, dessen Ziel es ist, die persönlichen Informationen des Benutzers zu stehlen, seinen Computer zu beschädigen oder ihn auf andere Weise anzugreifen.
>
> Die Isolation zwischen Inhaltsskripten und Skripten von Webseiten soll es feindlichen Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation aufheben, sind sie von Natur aus gefährlich und sollten mit großer Vorsicht verwendet werden.

Wie im [Leitfaden für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) erwähnt, sehen Inhaltsskripte keine Änderungen, die von Skripten auf Webseiten am DOM vorgenommen wurden. Das bedeutet zum Beispiel, dass, wenn eine Webseite eine Bibliothek wie jQuery lädt, Inhaltsskripte sie nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können Skripte von Webseiten keine Änderungen sehen, die von Inhaltsskripten vorgenommen wurden.

Firefox bietet jedoch einige APIs, die es Inhaltsskripten ermöglichen:

- auf JavaScript-Objekte zuzugreifen, die von Seitenskripten erstellt wurden
- ihre eigenen JavaScript-Objekte für Seitenskripte bereitzustellen.

## Röntgensicht in Firefox

In Firefox wird ein Teil der Isolation zwischen Inhaltsskripten und Seitenskripten durch eine Funktion namens "Xray vision" implementiert. Wenn ein Skript in einem privilegierteren Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle {{Glossary("Expando", "Expando")}}-Eigenschaften sind unsichtbar und wenn Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung, nicht die neu definierte Version.

Der Zweck dieser Funktion ist es, es dem weniger privilegierten Skript zu erschweren, das privilegiertere Skript zu verwirren, indem native Eigenschaften von Objekten neu definiert werden.

Wenn ein Inhaltsskript also beispielsweise auf das [window](/de/docs/Web/API/Window) einer Seite zugreift, sieht es keine Eigenschaften, die das Seitenskript zum Fenster hinzugefügt hat, und wenn das Seitenskript bereits vorhandene Eigenschaften des Fensters neu definiert hat, sieht das Inhaltsskript die ursprüngliche Version.

## Zugriff auf Seitenskriptobjekte aus Inhaltsskripten

In Firefox erhalten DOM-Objekte in Inhaltsskripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "entpackte" Version des Objekts, die alle Änderungen einschließt, die an diesem Objekt durch beliebige Seitenskripte vorgenommen wurden.

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

Das Skript fügt eine Expando-Eigenschaft zum globalen `window` hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Aufgrund der Röntgensicht bedeutet das, dass, wenn ein Inhaltsskript versucht, auf `foo` zuzugreifen, es undefiniert sein wird:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhaltsskripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie sich, sobald Sie dies tun, nicht mehr darauf verlassen können, dass die Eigenschaften oder Funktionen dieses Objekts wie erwartet sind oder funktionieren. Jede von ihnen, sogar Setter und Getter, könnte von nicht vertrauenswürdigem Code neu definiert worden sein.

Beachten Sie auch, dass das Entpacken transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des entpackten Objekts selbst entpackt (und daher unzuverlässig). Es ist daher eine gute Praxis, das Objekt, sobald Sie es haben, wieder zu verpacken, was Sie folgendermaßen tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Siehe das Dokument über [Xray vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für ausführlichere Informationen.

## Teilen von Inhaltsskriptobjekten mit Seitenskripten

Firefox bietet auch APIs, mit denen Inhaltsskripte Objekte für Seitenskripte bereitstellen können. Es gibt hier mehrere Ansätze:

- [`exportFunction()`](#exportfunction): eine Funktion für Seitenskripte exportieren.
- [`cloneInto()`](#cloneinto): ein Objekt für Seitenskripte exportieren.
- Konstruktoren aus dem Seitenkontext

### exportFunction

Mit [`exportFunction()`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) kann eine im Inhaltsskript definierte Funktion in den Gültigkeitsbereich des Seitenskripts exportiert werden, sodass das Seitenskript sie aufrufen kann.

Zum Beispiel betrachtet man eine Erweiterung, die ein Hintergrundskript wie dieses hat:

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

- ein Inhaltsskript im aktuellen Tab ausführen, wenn der Benutzer auf eine Browser-Aktion klickt
- auf Nachrichten vom Inhaltsskript hören und eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) anzeigen, wenn die Nachricht eintrifft.

Das Inhaltsskript sieht folgendermaßen aus:

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

Es definiert eine Funktion `notify()`, die nur ihr Argument an das Hintergrundskript sendet. Diese Funktion wird dann in den Gültigkeitsbereich des Seitenskripts exportiert. Jetzt kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Mit [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) wird ein im Inhaltsskript definiertes Objekt in den Gültigkeitsbereich des Seitenskripts geklont, sodass der Klon für Seitenskripte zugänglich wird. Standardmäßig wird der [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet, um das Objekt zu klonen, was bedeutet, dass Funktionen im Objekt nicht im Klon enthalten sind. Um Funktionen einzuschließen, geben Sie die Option `cloneFunctions` an.

Zum Beispiel wird hier ein Inhaltsskript dargestellt, das ein Objekt mit einer Funktion definiert und es dann in den Gültigkeitsbereich des Seitenskripts klont:

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

Jetzt sehen die Seitenskripte eine neue Eigenschaft im Fenster, `messenger`, die über eine Funktion `notify()` verfügt:

```js
window.messenger.notify("Message from the page script!");
```

### Konstruktoren aus dem Seitenkontext

Auf dem geröntgten Fensterobjekt sind unberührte Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen verfügbar. `XMLHttpRequest` verhält sich nicht auf diese Weise, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie erstellen Instanzen, die zur Objekt-Hierarchie des Seiten-Gobals gehören und dann einen Röntgen-Wrapper zurückgeben.

Da auf diese Weise erstellte Objekte bereits zur Seite gehören und nicht zum Inhaltsskript, erfordert das Zurückgeben an die Seite kein zusätzliches Klonen oder Exportieren.

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

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise nicht durch den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt wird. Das gewünschte Ergebnis kann jedoch erreicht werden, indem `window.Promise` anstelle von `Promise` verwendet wird und dann der Auflösungswert wie folgt geklont wird:

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
