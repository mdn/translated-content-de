---
title: "History: replaceState()-Methode"
short-title: replaceState()
slug: Web/API/History/replaceState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`replaceState()`**-Methode des {{domxref("History")}}-Interfaces modifiziert den aktuellen Verlaufseintrag, indem sie ihn durch das state-Objekt und die URL ersetzt, die in den Methodenparametern angegeben sind. Diese Methode ist besonders nützlich, wenn Sie das state-Objekt oder die URL des aktuellen Verlaufseintrags als Reaktion auf eine Benutzeraktion aktualisieren möchten.

## Syntax

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Parameter

- `state`
  - : Ein Objekt, das mit dem Verlaufseintrag assoziiert ist, das an die `replaceState()`-Methode übergeben wird. Das state-Objekt kann `null` sein.
- `unused`
  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; die Übermittlung des leeren Strings ist traditionell und sicher gegen zukünftige Änderungen der Methode.
- `url` {{optional_inline}}
  - : Die URL des Verlaufseintrags. Die neue URL muss denselben Ursprung wie die aktuelle URL haben; andernfalls löst die `replaceState()`-Methode eine Ausnahme aus.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist oder der bereitgestellte `url`-Parameter keine gültige URL ist. Browser drosseln auch Navigationsaufrufe und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte `state`-Parameter nicht serialisierbar ist.

## Beispiele

Angenommen, `https://www.mozilla.org/foo.html` führt das folgende JavaScript aus:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

Auf der nächsten Seite könnten Sie dann `history.state` verwenden, um auf das soeben hinzugefügte `stateObj` zuzugreifen.

Eine Erklärung dieser beiden obigen Zeilen finden Sie im Artikel [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API#using_pushstate). Angenommen, `https://www.mozilla.org/bar.html` führt das folgende JavaScript aus:

```js
history.replaceState(stateObj, "", "bar2.html");
```

Dies wird dazu führen, dass in der Adressleiste die URL `https://www.mozilla.org/bar2.html` angezeigt wird, aber der Browser wird `bar2.html` nicht laden oder überprüfen, ob `bar2.html` existiert.

Angenommen, der Benutzer navigiert nun zu `https://www.microsoft.com` und klickt dann auf die Zurück-Schaltfläche. Zu diesem Zeitpunkt wird in der Adressleiste `https://www.mozilla.org/bar2.html` angezeigt. Wenn der Benutzer nun erneut auf Zurück klickt, wird `https://www.mozilla.org/foo.html` angezeigt, und `bar.html` wird vollständig umgangen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
