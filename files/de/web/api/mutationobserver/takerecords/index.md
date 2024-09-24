---
title: "MutationObserver: Methode takeRecords()"
short-title: takeRecords()
slug: Web/API/MutationObserver/takeRecords
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("DOM WHATWG")}}

Die Methode **`takeRecords()`** des {{domxref("MutationObserver")}} gibt eine Liste aller übereinstimmenden DOM-Änderungen zurück, die erkannt, aber noch nicht von der Callback-Funktion des Observers verarbeitet wurden. Dadurch wird die Mutationswarteschlange geleert.

Der häufigste Anwendungsfall ist, alle ausstehenden Mutationsdatensätze unmittelbar vor dem Trennen des Observers abzurufen, sodass alle ausstehenden Mutationen verarbeitet werden können, wenn der Observer heruntergefahren wird.

## Syntax

```js-nolint
takeRecords()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von {{domxref("MutationRecord")}}-Objekten, von denen jedes eine Änderung beschreibt, die auf den beobachteten Teil des DOM-Baums des Dokuments angewendet wurde.

> [!NOTE]
> Die Warteschlange von Mutationen, die aufgetreten sind, aber nicht an die Callback-Funktion des Observers geliefert wurden, wird nach dem Aufruf von `takeRecords()` geleert.

## Beispiele

In diesem Beispiel zeigen wir, wie Sie nicht gelieferte {{domxref("MutationRecord")}}s behandeln, indem Sie `takeRecords()` direkt vor dem Trennen des Observers aufrufen.

```js
const targetNode = document.querySelector("#someElement");
const observerOptions = {
  childList: true,
  attributes: true,
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);

/* später, wenn es Zeit ist, die Beobachtung zu beenden… */

/* alle noch ausstehenden Mutationen behandeln */

let mutations = observer.takeRecords();

observer.disconnect();

if (mutations.length > 0) {
  callback(mutations);
}
```

Der Code ruft unverarbeitete Mutationsdatensätze ab und ruft dann den Callback mit den Datensätzen auf, damit sie verarbeitet werden können. Dies geschieht unmittelbar vor dem Aufruf von {{domxref("MutationObserver.disconnect", "disconnect()")}}, um die Beobachtung des DOM zu stoppen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
