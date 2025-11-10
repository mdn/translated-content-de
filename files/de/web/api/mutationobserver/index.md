---
title: MutationObserver
slug: Web/API/MutationObserver
l10n:
  sourceCommit: 2f5cd95b4402a869bb6f79d6fa01b95ffec9df41
---

{{APIRef("DOM WHATWG")}}

Das **`MutationObserver`**-Interface bietet die Möglichkeit, Änderungen im [DOM](/de/docs/Web/API/Document_Object_Model)-Baum zu beobachten. Es ist als Ersatz für das ältere [Mutation Events](/de/docs/Web/API/MutationEvent)-Feature konzipiert, das Teil der DOM3-Events-Spezifikation war.

## Konstruktor

- [`MutationObserver()`](/de/docs/Web/API/MutationObserver/MutationObserver)
  - : Erstellt und gibt einen neuen `MutationObserver` zurück, der eine angegebene Callback-Funktion aufruft, wenn Änderungen am DOM auftreten.

## Instanzmethoden

- [`disconnect()`](/de/docs/Web/API/MutationObserver/disconnect)
  - : Stoppt die `MutationObserver`-Instanz davon, weitere Benachrichtigungen zu erhalten, bis und sofern [`observe()`](/de/docs/Web/API/MutationObserver/observe) erneut aufgerufen wird.
- [`observe()`](/de/docs/Web/API/MutationObserver/observe)
  - : Konfiguriert den `MutationObserver`, um Benachrichtigungen über seine Callback-Funktion zu empfangen, wenn Änderungen im DOM auftreten, die den angegebenen Optionen entsprechen.
- [`takeRecords()`](/de/docs/Web/API/MutationObserver/takeRecords)
  - : Entfernt alle ausstehenden Benachrichtigungen aus der Benachrichtigungswarteschlange des `MutationObserver` und gibt sie in einem neuen {{jsxref("Array")}} von [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekten zurück.

## Beispiel

Das folgende Beispiel wurde aus [diesem Blogbeitrag](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/) adaptiert.

```js
// Select the node that will be observed for mutations
const targetNode = document.getElementById("some-id");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
- [Ein kurzer Überblick](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [Eine ausführlichere Diskussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [Ein Screencast von Chromium-Entwickler Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
