---
title: "History: replaceState() Methode"
short-title: replaceState()
slug: Web/API/History/replaceState
l10n:
  sourceCommit: 89c21cd5087eedee51ec415a6507e5fbfcf986e7
---

{{APIRef("History API")}}

Die **`replaceState()`** Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle modifiziert den aktuellen
Eintrag in der Browser-Historie, indem sie ihn mit dem Zustandsobjekt und der
URL ersetzt, die in den Methodenparametern übergeben werden. Diese Methode ist besonders nützlich,
wenn Sie das Zustandsobjekt oder die URL des aktuellen Eintrags in der Historie als Reaktion auf eine Benutzereingabe aktualisieren möchten.

## Syntax

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Parameter

- `state`
  - : Ein Objekt, das mit dem Eintrag in die Historie verknüpft ist,
    der an die `replaceState()` Methode übergeben wird. Das Zustandsobjekt kann
    `null` sein.
- `unused`
  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; es ist traditionell und sicher gegen zukünftige Änderungen der Methode, einen leeren String zu übergeben.
- `url` {{optional_inline}}
  - : Die URL des Eintrags in der Historie. Die neue URL muss von demselben Ursprung sein wie die aktuelle
    URL; andernfalls wirft die `replaceState()` Methode eine Ausnahme.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist, der bereitgestellte `url`-Parameter keine gültige URL ist oder die Methode zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `state`-Parameter nicht serialisierbar ist.

## Beispiele

Angenommen, `https://www.mozilla.org/foo.html` führt das folgende JavaScript aus:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

Auf der nächsten Seite könnten Sie dann `history.state` verwenden, um auf das gerade hinzugefügte `stateObj` zuzugreifen.

Die Erklärung dieser beiden oben stehenden Zeilen finden Sie im Artikel [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API#using_pushstate). Angenommen, nun führt `https://www.mozilla.org/bar.html` das folgende JavaScript aus:

```js
history.replaceState(stateObj, "", "bar2.html");
```

Dies wird dazu führen, dass in der URL-Leiste
`https://www.mozilla.org/bar2.html` angezeigt wird, aber der Browser
lädt `bar2.html` nicht und prüft auch nicht, ob `bar2.html` existiert.

Angenommen, der Benutzer navigiert jetzt zu
`https://www.microsoft.com` und klickt dann auf die Zurück-Schaltfläche. An diesem
Punkt wird in der URL-Leiste `https://www.mozilla.org/bar2.html` angezeigt.
Wenn der Benutzer jetzt erneut auf Zurück klickt, wird in der URL-Leiste
`https://www.mozilla.org/foo.html` angezeigt, und `bar.html` wird völlig umgangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
