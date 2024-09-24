---
title: MutationObserver
slug: Web/API/MutationObserver
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("DOM WHATWG")}}

Das **`MutationObserver`**-Interface bietet die Möglichkeit, Änderungen am [DOM](/de/docs/Web/API/Document_Object_Model)-Baum zu beobachten. Es ist als Ersatz für das ältere [Mutation Events](/de/docs/Web/API/MutationEvent)-Feature geplant, das Teil der DOM3-Events-Spezifikation war.

## Konstruktor

- {{domxref("MutationObserver.MutationObserver", "MutationObserver()")}}
  - : Erstellt und gibt einen neuen `MutationObserver` zurück, der eine angegebene Callback-Funktion aufruft, wenn DOM-Änderungen erfolgen.

## Instanzmethoden

- {{domxref("MutationObserver.disconnect()", "disconnect()")}}
  - : Stoppt die `MutationObserver`-Instanz von der weiteren Benachrichtigung, bis und sofern {{domxref("MutationObserver.observe", "observe()")}} erneut aufgerufen wird.
- {{domxref("MutationObserver.observe()", "observe()")}}
  - : Konfiguriert den `MutationObserver`, um Benachrichtigungen über seine Callback-Funktion zu erhalten, wenn DOM-Änderungen auftreten, die den angegebenen Optionen entsprechen.
- {{domxref("MutationObserver.takeRecords()", "takeRecords()")}}
  - : Entfernt alle ausstehenden Benachrichtigungen aus der Benachrichtigungswarteschlange des `MutationObserver` und gibt sie in einem neuen {{jsxref("Array")}} von {{domxref("MutationRecord")}}-Objekten zurück.

## Mutation Observer & Resize-Event-Listener anpassen & Demo

<https://codepen.io/milofultz/pen/LYjPXPw>

## Beispiel

Das folgende Beispiel wurde von [diesem Blogbeitrag](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/) adaptiert.

```js
// Wählen Sie den Knoten aus, der auf Mutationen beobachtet wird
const targetNode = document.getElementById("some-id");

// Optionen für den Beobachter (welche Mutationen beobachtet werden sollen)
const config = { attributes: true, childList: true, subtree: true };

// Callback-Funktion, die ausgeführt wird, wenn Mutationen beobachtet werden
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      console.log("Ein Kindknoten wurde hinzugefügt oder entfernt.");
    } else if (mutation.type === "attributes") {
      console.log(`Das ${mutation.attributeName} Attribut wurde geändert.`);
    }
  }
};

// Erstellen Sie eine Beobachterinstanz, die mit der Callback-Funktion verbunden ist
const observer = new MutationObserver(callback);

// Beginnen Sie damit, den Zielknoten auf konfigurierte Mutationen zu beobachten
observer.observe(targetNode, config);

// Später können Sie die Beobachtung beenden
observer.disconnect();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('PerformanceObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
- [Ein kurzer Überblick](https://developer.chrome.com/blog/detect-dom-changes-with-mutation-observers/)
- [Eine eingehendere Diskussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [Ein Screencast von Chromium-Entwickler Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
