---
title: "History: replaceState() Methode"
short-title: replaceState()
slug: Web/API/History/replaceState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`replaceState()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle modifiziert den aktuellen Verlaufseintrag und ersetzt ihn durch das Zustandsobjekt und die URL, die in den Methodenparametern übergeben werden. Diese Methode ist besonders nützlich, wenn Sie das Zustandsobjekt oder die URL des aktuellen Verlaufseintrags als Reaktion auf eine Benutzeraktion aktualisieren möchten.

## Syntax

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Parameter

- `state`
  - : Ein Objekt, das dem Verlaufseintrag zugeordnet ist, der an die `replaceState()`-Methode übergeben wird. Das Zustandsobjekt kann `null` sein.
- `unused`
  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; das Übergeben des leeren Strings ist traditionell und sicher gegen zukünftige Änderungen der Methode.
- `url` {{optional_inline}}
  - : Die URL des Verlaufseintrags. Die neue URL muss denselben Ursprung wie die aktuelle URL haben; andernfalls wirft die `replaceState()`-Methode eine Ausnahme.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist oder wenn der angegebene `url`-Parameter keine gültige URL ist. Browser drosseln auch Navigationsvorgänge und können diesen Fehler werfen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `state`-Parameter nicht serialisierbar ist.

## Beispiele

Angenommen, `https://www.mozilla.org/foo.html` führt folgendes JavaScript aus:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

Auf der nächsten Seite könnten Sie dann `history.state` verwenden, um auf das kürzlich hinzugefügte `stateObj` zuzugreifen.

Die Erklärung dieser beiden Zeilen oben finden Sie im Artikel [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API#using_pushstate). Angenommen, `https://www.mozilla.org/bar.html` führt das folgende JavaScript aus:

```js
history.replaceState(stateObj, "", "bar2.html");
```

Dies wird dazu führen, dass die URL-Leiste `https://www.mozilla.org/bar2.html` anzeigt, aber der Browser wird `bar2.html` nicht laden oder überprüfen, ob `bar2.html` existiert.

Angenommen, der Benutzer navigiert nun zu `https://www.microsoft.com` und klickt dann auf die Zurück-Taste. Zu diesem Zeitpunkt wird die URL-Leiste `https://www.mozilla.org/bar2.html` anzeigen. Wenn der Benutzer jetzt erneut auf Zurück klickt, wird die URL-Leiste `https://www.mozilla.org/foo.html` anzeigen und bar.html vollständig umgehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
