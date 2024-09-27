---
title: "MutationObserver: takeRecords() Methode"
short-title: takeRecords()
slug: Web/API/MutationObserver/takeRecords
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Methode **`takeRecords()`** gibt eine Liste aller passenden DOM-Änderungen zurück, die erkannt, aber noch nicht von der Callback-Funktion des Beobachters verarbeitet wurden, wodurch die Mutationswarteschlange geleert wird.

Der häufigste Anwendungsfall hierfür besteht darin, alle ausstehenden Mutationsprotokolle sofort vor der Trennung des Beobachters abzurufen, sodass alle ausstehenden Mutationen bei der Beendigung des Beobachters verarbeitet werden können.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekten, die jeweils eine Änderung beschreiben, die auf den beobachteten Teil des DOM-Baums des Dokuments angewendet wurde.

> [!NOTE]
> Die Warteschlange der Mutationen, die aufgetreten, aber nicht an den Callback des Beobachters übergeben wurden, ist nach dem Aufruf von `takeRecords()` leer.

## Beispiele

In diesem Beispiel zeigen wir, wie nicht zugestellte [`MutationRecord`](/de/docs/Web/API/MutationRecord)s behandelt werden, indem `takeRecords()` kurz vor dem Trennen des Beobachters aufgerufen wird.

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

Der Code ruft alle nicht verarbeiteten Mutationsprotokolle ab und ruft dann den Callback mit den Protokollen auf, damit sie verarbeitet werden können. Dies geschieht unmittelbar vor dem Aufruf von [`disconnect()`](/de/docs/Web/API/MutationObserver/disconnect), um die Beobachtung des DOM zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
