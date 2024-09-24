---
title: Objekte mit Seitenskripten teilen
slug: Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

> [!NOTE]
> Die in diesem Abschnitt beschriebenen Techniken sind nur in Firefox verfügbar, und nur ab Firefox 49.

> [!WARNING]
> Als Erweiterungsentwickler sollten Sie berücksichtigen, dass Skripte, die auf beliebigen Webseiten ausgeführt werden, feindlicher Code sind, dessen Ziel es ist, die persönlichen Informationen des Benutzers zu stehlen, deren Computer zu beschädigen oder sie auf andere Weise anzugreifen.
>
> Die Isolation zwischen Inhalts-Skripten und Skripten, die von Webseiten geladen werden, soll es für feindliche Webseiten erschweren, dies zu tun.
>
> Da die in diesem Abschnitt beschriebenen Techniken diese Isolation aufheben, sind sie von Natur aus gefährlich und sollten mit großer Vorsicht verwendet werden.

Wie im [Leitfaden für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access) erwähnt, sehen Inhalts-Skripte keine Änderungen, die von Skripten an der DOM vorgenommen werden, die von Webseiten geladen werden. Das bedeutet, dass beispielsweise, wenn eine Webseite eine Bibliothek wie jQuery lädt, Inhalts-Skripte sie nicht verwenden können und ihre eigene Kopie laden müssen. Umgekehrt können Skripte, die von Webseiten geladen werden, keine Änderungen sehen, die von Inhalts-Skripten vorgenommen werden.

Firefox bietet jedoch einige APIs, die Inhalts-Skripten ermöglichen:

- Zugriff auf JavaScript-Objekte, die von Seitenskripten erstellt wurden
- ihre eigenen JavaScript-Objekte Seitenskripten zur Verfügung zu stellen.

## Xray Vision in Firefox

In Firefox wird ein Teil der Isolation zwischen Inhalts-Skripten und Seitenskripten mithilfe einer Funktion namens "Xray Vision" implementiert. Wenn ein Skript in einem höher privilegierten Bereich auf ein Objekt zugreift, das in einem weniger privilegierten Bereich definiert ist, sieht es nur die "native Version" des Objekts. Alle [Expando](/de/docs/Glossary/Expando)-Eigenschaften sind unsichtbar, und wenn irgendwelche Eigenschaften des Objekts neu definiert wurden, sieht es die ursprüngliche Implementierung, nicht die neu definierte Version.

Der Zweck dieser Funktion besteht darin, es dem weniger privilegierten Skript zu erschweren, das höher privilegierte Skript zu verwirren, indem es die nativen Eigenschaften von Objekten neu definiert.

Wenn beispielsweise ein Inhalts-Skript auf das [window](/de/docs/Web/API/Window) der Seite zugreift, sieht es keine Eigenschaften, die das Seitenskript dem Fenster hinzugefügt hat, und wenn das Seitenskript irgendwelche bestehenden Eigenschaften des Fensters neu definiert hat, sieht das Inhalts-Skript die ursprüngliche Version.

## Zugriff auf Seitenskript-Objekte aus Inhalts-Skripten

In Firefox erhalten DOM-Objekte in Inhalts-Skripten eine zusätzliche Eigenschaft `wrappedJSObject`. Dies ist eine "unverpackte" Version des Objekts, die alle Änderungen umfasst, die an diesem Objekt durch Seitenskripte vorgenommen wurden.

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

Das Skript fügt eine Expando-Eigenschaft zum globalen `window` hinzu:

```js
// main.js

let foo = "I'm defined in a page script!";
```

Xray Vision bedeutet, dass, wenn ein Inhalts-Skript versucht, auf `foo` zuzugreifen, es undefiniert sein wird:

```js
// content-script.js

console.log(window.foo); // undefined
```

In Firefox können Inhalts-Skripte `window.wrappedJSObject` verwenden, um die Expando-Eigenschaft zu sehen:

```js
// content-script.js

console.log(window.wrappedJSObject.foo); // "I'm defined in a page script!"
```

Beachten Sie, dass Sie, sobald Sie dies tun, sich nicht mehr darauf verlassen können, dass irgendwelche Eigenschaften oder Funktionen dieses Objekts das sind oder tun, was Sie erwarten. Jede von ihnen, sogar Setzer und Getter, könnten von unzuverlässigem Code neu definiert worden sein.

Beachten Sie auch, dass das Entpacken transitiv ist: Wenn Sie `wrappedJSObject` verwenden, werden alle Eigenschaften des entpackten Objekts selbst entpackt (und sind daher unzuverlässig). Es ist daher gute Praxis, sobald Sie das Objekt haben, das Sie benötigen, es erneut zu verpacken, was Sie wie folgt tun können:

```js
XPCNativeWrapper(window.wrappedJSObject.foo);
```

Schauen Sie sich das Dokument zu [Xray Vision](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html) für weitere Details an.

## Teilen von Inhalts-Skript-Objekten mit Seitenskripten

Firefox bietet auch APIs, die Inhalts-Skripten ermöglichen, Objekte für Seitenskripte verfügbar zu machen. Es gibt mehrere Ansätze hierfür:

- [`exportFunction()`](#exportfunction): eine Funktion an Seitenskripte exportieren.
- [`cloneInto()`](#cloneinto): ein Objekt an Seitenskripte exportieren.
- Konstruktoren aus dem Seitenkontext

### exportFunction

Eine im Inhalts-Skript definierte Funktion wird durch `exportFunction()` in den Gültigkeitsbereich des Seitenskripts exportiert, sodass das Seitenskript sie aufrufen kann.

Betrachten wir zum Beispiel eine Erweiterung, die ein Hintergrundskript wie dieses besitzt:

```js
/*
Führt Inhalts-Skript im aktiven Tab aus.
*/
function loadContentScript() {
  browser.tabs.executeScript({
    file: "/content_scripts/export.js",
  });
}

/*
Fügt loadContentScript() als Listener für Klicks
auf die Browser-Aktion hinzu.
*/
browser.browserAction.onClicked.addListener(loadContentScript);

/*
Zeigt eine Benachrichtigung an, wenn wir Nachrichten vom
Inhalts-Skript erhalten.
*/
browser.runtime.onMessage.addListener((message) => {
  browser.notifications.create({
    type: "basic",
    title: "Nachricht von der Seite",
    message: message.content,
  });
});
```

Dies tut zwei Dinge:

- führt ein Inhalts-Skript im aktuellen Tab aus, wenn der Benutzer auf eine Browser-Aktion klickt
- hört auf Nachrichten vom Inhalts-Skript und zeigt eine [Benachrichtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/notifications) an, wenn die Nachricht eintrifft.

Das Inhalts-Skript sieht so aus:

```js
/*
Definiert eine Funktion im Gültigkeitsbereich des Inhalts-Skripts und exportiert sie
in den Gültigkeitsbereich des Seitenskripts.
*/
function notify(message) {
  browser.runtime.sendMessage({ content: `Funktionsaufruf: ${message}` });
}

exportFunction(notify, window, { defineAs: "notify" });
```

Dies definiert eine Funktion `notify()`, die einfach ihr Argument an das Hintergrundskript sendet. Sie exportiert dann die Funktion in den Gültigkeitsbereich des Seitenskripts. Nun kann das Seitenskript diese Funktion aufrufen:

```js
window.notify("Message from the page script!");
```

### cloneInto

Wenn ein im Inhalts-Skript definiertes Objekt in den Gültigkeitsbereich des Seitenskripts geklont wird, wird dadurch das Klonobjekt den Seitenskripten zugänglich gemacht. Standardmäßig wird dafür der [Structured Clone Algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) verwendet, was bedeutet, dass Funktionen im Objekt nicht im Klon enthalten sind. Um Funktionen einzubeziehen, geben Sie die Option `cloneFunctions` an.

Zum Beispiel definiert dieses Inhalts-Skript ein Objekt, das eine Funktion enthält, und klont es dann in den Gültigkeitsbereich des Seitenskripts:

```js
/*
Erstellt ein Objekt, das Funktionen im
Gültigkeitsbereich des Inhalts-Skripts enthält, und klont es
in den Gültigkeitsbereich des Seitenskripts.

Weil das Objekt Funktionen enthält,
muss der cloneInto-Aufruf die
Option `cloneFunctions` enthalten.
*/
let messenger = {
  notify(message) {
    browser.runtime.sendMessage({
      content: `Objektmethodenaufruf: ${message}`,
    });
  },
};

window.wrappedJSObject.messenger = cloneInto(messenger, window, {
  cloneFunctions: true,
});
```

Jetzt sieht das Seitenskript eine neue Eigenschaft im Fenster, `messenger`, die eine Funktion `notify()` hat:

```js
window.messenger.notify("Message from the page script!");
```

### Konstruktoren aus dem Seitenkontext

Auf dem xrayed Fensterobjekt sind originale Konstruktoren für einige eingebaute JavaScript-Objekte wie `Object`, `Function` oder `Proxy` sowie verschiedene DOM-Klassen verfügbar. `XMLHttpRequest` verhält sich nicht auf diese Weise, siehe den Abschnitt [XHR und fetch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#xhr_and_fetch) für Details. Sie erstellen Instanzen, die zur Objekthierarchie des Seiten-Gobals gehören, und geben dann einen Xray-Wrapper zurück.

Da auf diese Weise erstellte Objekte bereits zur Seite gehören und nicht zum Inhalts-Skript, erfordert das Zurückreichen an die Seite kein zusätzliches Klonen oder Exportieren.

```js
/* JavaScript Built-Ins */

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
objB.foo = "foo"; // Xray-Wrapper für einfache JavaScript-Objekte lassen Eigenschaftszuweisungen durch
objB.wrappedJSObject.bar = "bar"; // Entpacken vor der Zuweisung verlässt sich nicht auf dieses spezielle Verhalten

window.wrappedJSObject.objA = objA;
window.wrappedJSObject.objB = objB; // wird automatisch entpackt, wenn es an den Seitenkontext übergeben wird

window.eval(`
  console.log(objA instanceof Object);           // false
  console.log(objB instanceof Object);           // true

  try {
    console.log(objA.foo);
  } catch (error) {
    console.log(error);                       // Fehler: Erlaubnis verweigert
  }
 
  try {
    objA.baz = "baz";
  } catch (error) {
    console.log(error);                       // Fehler: Erlaubnis verweigert
  }

  console.log(objB.foo, objB.bar);               // "foo", "bar"
  objB.baz = "baz";
`);

/* weitere APIs */

const ev = new Event("click");

console.log(
  ev instanceof Event, // true
  ev instanceof window.Event, // true; Event-Konstruktor wird tatsächlich vom xrayed-Fenster geerbt
  "wrappedJSObject" in ev, // true; ist ein xrayed Objekt
);

ev.propA = "propA"; // Xray-Wrapper für native Objekte lassen keine Zuweisungen durch
ev.propB = "wrapper"; // definiert Eigenschaft auf Xray-Wrapper
ev.wrappedJSObject.propB = "unwrapped"; // definiert dieselbe Eigenschaft auf Seitenobjekt
Reflect.defineProperty(
  // privilegierte Reflexion kann auf weniger privilegierte Objekte wirken
  ev.wrappedJSObject,
  "propC",
  {
    get: exportFunction(() => {
      // Getter müssen wie reguläre Funktionen exportiert werden
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

Ein Promise kann nicht direkt mit `cloneInto` geklont werden, da Promise nicht vom [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) unterstützt wird. Das gewünschte Ergebnis kann jedoch erzielt werden, indem `window.Promise` anstelle von `Promise` verwendet wird und dann der Auflösungswert wie folgt geklont wird:

```js
const promise = new window.Promise((resolve) => {
  // wenn nur ein primitives, dann ist cloneInto nicht erforderlich:
  // resolve("string is a primitive");

  // wenn kein primitives, wie ein Objekt, dann muss der Wert geklont werden
  const result = { exampleKey: "exampleValue" };
  resolve(cloneInto(result, window));
});
// jetzt kann das Promise an die Webseite übergeben werden
```
