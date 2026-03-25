---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: d1d2fb19fa649240ce6e25c4d79e21d9a5f6de37
---

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar und erst ab Firefox 49. [`structuredClone`](/de/docs/Web/API/Window/structuredClone) bietet eine plattformübergreifende API, die strukturierte Klone erstellt.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie berücksichtigen, dass Skripte, die in beliebigen Webseiten ausgeführt werden, feindlicher Code sein könnten, dessen Ziel es ist, persönliche Informationen der Nutzer zu stehlen, deren Computer zu beschädigen oder sie auf andere Weise anzugreifen.
>
> Die Isolierung zwischen Inhaltsskripten und Skripten, die von Webseiten geladen werden, soll es feindlichen Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation durchbrechen, sind sie von Natur aus gefährlich und sollten mit großer Sorgfalt eingesetzt werden.

Wie der [Leitfaden für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) anmerkt, sehen Inhaltsskripte keine Änderungen am DOM durch Skripte, die von Webseiten geladen werden. Das bedeutet zum Beispiel, dass Inhaltsskripte nicht in der Lage sind, eine von einer Webseite geladene Bibliothek wie jQuery zu nutzen, und ihre eigene Kopie laden müssen. Umgekehrt können Skripte, die von Webseiten geladen werden, die durch Inhaltsskripte vorgenommenen Änderungen nicht sehen.

Firefox bietet jedoch einige APIs, die es Inhaltsskripten ermöglichen:

- Zugriff auf JavaScript-Objekte, die von Seitenskripten erstellt wurden.
- Ihre JavaScript-Objekte für Seitenskripte freizugeben.

## Röntgenblick in Firefox

In Firefox wird ein Teil der Isolierung zwischen Inhaltsskripten und Seitenskripten mithilfe einer Funktion namens "Röntgenblick" umgesetzt. Wenn ein Skript in einem anspruchsvolleren Bereich auf ein Objekt zugreift, das in einem weniger anspruchsvollen Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle {{Glossary("Expando", "Expando")}}-Eigenschaften sind unsichtbar, und wenn Eigenschaften des Objekts neu definiert wurden, sieht es die Originalimplementierung, nicht die neu definierte Version.

Ziel dieser Funktion ist es, es einem weniger anspruchsvollen Skript zu erschweren, das anspruchsvollere Skript durch Neudefinition der nativen Eigenschaften von Objekten zu verwirren.

Wenn also beispielsweise ein Inhaltsskript auf das [window](/de/docs/Web/API/Window) der Seite aus einer [Inhaltsskript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) zugreift, sieht es keine Eigenschaften, die das Seitenskript dem Fenster hinzugefügt hat, und wenn das Seitenskript vorhandene Eigenschaften des Fensters neu definiert hat, sieht das Inhaltsskript die Originalversion.

## Zugriff auf Seitenskript-Objekte von Inhaltsskripten aus

In Firefox erhalten DOM-Objekte in Inhaltsskripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "nicht umschlossene" Version des Objekts, die alle Änderungen umfasst, die von Seitenskripten an diesem Objekt vorgenommen wurden.

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

Das Skript fügt dem globalen `window` eine Expando-Eigenschaft hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Röntgenblick bedeutet, dass `foo` undefiniert sein wird, wenn ein Inhaltsskript versucht, darauf zuzugreifen:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhaltsskripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie, sobald Sie dies tun, nicht mehr darauf vertrauen können, dass Eigenschaften oder Funktionen dieses Objekts das sind, was Sie erwarten. Jede davon, sogar Setter und Getter, könnte von unsicherem Code neu definiert worden sein.

Beachten Sie auch, dass das Entpacken übertragbar ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des nicht umschlossenen Objekts selbst nicht umschlossen (und sind daher unzuverlässig). Es ist also eine gute Praxis, sobald Sie das benötigte Objekt haben, es erneut zu umschließen, was Sie folgendermaßen tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Sehen Sie sich das Dokument über [Röntgenblick](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für viel mehr Details dazu an.

## Teilen von Inhaltsskript-Objekten mit Seitenskripten

Firefox bietet auch APIs, die es Inhaltsskripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt verschiedene Ansätze hierfür:

- [`exportFunction()`](#exportfunction): eine Funktion für Seitenskripte exportieren.
- [`cloneInto()`](#cloneinto): ein Objekt für Seitenskripte exportieren.
- `window.structuredClone()`: eine Alternative zu `cloneInto` in einigen Fällen, siehe [`structuredClone` in Inhaltsskripten](#structuredclone).
- [Konstruktoren aus dem Seitenkontext](#konstruktoren_aus_dem_seitenkontext).

### exportFunction

Wenn eine im Inhaltsskript definierte Funktion gegeben ist, exportiert [`exportFunction()`](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/exportFunction) diese in den Bereich des Seitenskripts, sodass das Seitenskript sie aufrufen kann.

Beispielsweise betrachten wir eine Erweiterung, die ein Hintergrundskript wie dieses hat:

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

- Ein Inhaltsskript im aktuellen Tab ausführen, wenn der Benutzer auf eine Browser-Aktion klickt
- Auf Nachrichten vom Inhaltsskript hören und eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) anzeigen, wenn die Nachricht eintrifft.

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

Dies definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Es exportiert dann die Funktion in den Bereich des Seitenskripts. Jetzt kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Wenn ein im Inhaltsskript definiertes Objekt gegeben ist, erstellt [cloneInto()](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts/cloneInto) einen Klon des Objekts im Bereich des Seitenskripts, wodurch der Klon für Seitenskripte zugänglich wird. Standardmäßig verwendet dies den [Strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um das Objekt zu klonen, was bedeutet, dass Funktionen im Objekt nicht im Klon enthalten sind. Um Funktionen einzuschließen, übergeben Sie die Option `cloneFunctions`.

Hier ist ein Beispiel für ein Inhaltsskript, das ein Objekt definiert, das eine Funktion enthält, und es dann in den Bereich des Seitenskripts klont:

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

### structuredClone

Inhaltsskripte können auch [`structuredClone`](/de/docs/Web/API/Window/structuredClone) verwenden, um strukturierte Klone zu erstellen. Verwenden Sie `window.structuredClone(value)`, um Werte im Bereich der Seite zu klonen. Ein direkter Aufruf von `structuredClone(value)` oder `globalThis.structuredClone(value)` klont in den Bereich des Inhaltsskriptes.

Die Wahl der Methode beeinflusst, wie der Rückgabewert verwendet werden kann. Ein in das Inhaltsskript geklonter Wert kann im Inhaltsskript wie jeder andere reguläre Wert verwendet werden, aber wenn er mit der Webseite geteilt wird, wird der Webseite der Zugriff auf seine Eigenschaften verweigert. Umgekehrt kann ein in die Webseite geklonter Wert von der Webseite wie jeder andere Wert verwendet werden, aber Inhaltsskripte können über [Röntgenblick](#röntgenblick_in_firefox) verfügen. Eine Konsequenz von Röntgenblick ist die Unfähigkeit, Funktionen aus dem Inhaltsskript an Objekte im Bereich der Seite zuzuweisen.

Firefox ist der einzige Browser, der diese Verhaltensunterschiede aufgrund von Unterschieden in [der Inhaltsskript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment) aufweist.

> [!NOTE]
> In Firefox 148 und früher erstellt `window.structuredClone(value)` Werte im Bereich des Aufrufers statt im Bereich des Fensters. Verwenden Sie [`cloneInto()`](#cloneinto), wenn Sie Firefox 148 und früher unterstützen möchten.

Hier ist ein Inhaltsskript, das versucht, einen Wert durch den globalen Bereich der Seite zu teilen:

```js
let value = { test: "hello" };

// Wrong usage: page access to sharedBad's properties will be denied
window.wrappedJSObject.sharedBad = structuredClone(value);

// Good usage, works in Firefox 149+:
window.wrappedJSObject.sharedGood = window.structuredClone(value);

// Alternative with same effect:
window.wrappedJSObject.sharedGood2 = cloneInto(value, window);
```

### Konstruktoren aus dem Seitenkontext

Auf dem xrayed Fensterobjekt stehen frische Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` und verschiedene DOM-Klassen zur Verfügung. `XMLHttpRequest` verhält sich nicht auf diese Weise, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie werden Instanzen erstellen, die zur Objekt-Hierarchie des Seitenglobals gehören, und dann einen xray-Wrapper zurückgeben.

Da auf diese Weise erstellte Objekte bereits zur Seite gehören und nicht zum Inhaltsskript, erfordert das Zurückpassen an die Seite kein zusätzliches Klonen oder Exportieren.

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

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise nicht vom [Strukturierten Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt wird. Das gewünschte Ergebnis kann jedoch erzielt werden, indem `window.Promise` anstelle von `Promise` verwendet wird und der Auflösungswert dann wie folgt geklont wird:

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
