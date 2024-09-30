---
title: "MutationObserver: takeRecords()-Methode"
short-title: takeRecords()
slug: Web/API/MutationObserver/takeRecords
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die Methode **`takeRecords()`** des [`MutationObserver`](/de/docs/Web/API/MutationObserver) gibt eine Liste aller passenden DOM-Änderungen zurück, die erkannt, aber noch nicht von der Callback-Funktion des Observers verarbeitet wurden, und leert die Mutationswarteschlange.

Der häufigste Anwendungsfall hierfür ist das sofortige Abrufen aller ausstehenden Mutationsaufzeichnungen unmittelbar vor dem Trennen des Observers, sodass ausstehende Mutationen beim Herunterfahren des Observers verarbeitet werden können.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekten, von denen jedes eine Änderung beschreibt, die auf den beobachteten Teil des DOM-Baums des Dokuments angewendet wurde.

> [!NOTE]
> Die Warteschlange der Mutationen, die aufgetreten sind, aber nicht an die Callback-Funktion des Observers geliefert wurden, wird nach dem Aufruf von `takeRecords()` geleert.

## Beispiele

In diesem Beispiel demonstrieren wir, wie nicht gelieferte [`MutationRecord`](/de/docs/Web/API/MutationRecord)s behandelt werden, indem `takeRecords()` unmittelbar vor dem Trennen des Observers aufgerufen wird.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* later, when it's time to stop observing… */

/* handle any still-pending mutations */

let mutations = observer.takeRecords();

observer.disconnect();

if (mutations.length > 0) {
  callback(mutations);
}
```

Der Code ruft alle nicht verarbeiteten Mutationsaufzeichnungen ab und ruft dann die Callback-Funktion mit den Aufzeichnungen auf, damit sie verarbeitet werden können. Dies geschieht unmittelbar vor dem Aufruf von [`disconnect()`](/de/docs/Web/API/MutationObserver/disconnect), um die Beobachtung des DOM zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
