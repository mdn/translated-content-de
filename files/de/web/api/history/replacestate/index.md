---
title: "History: replaceState() Methode"
short-title: replaceState()
slug: Web/API/History/replaceState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`replaceState()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle modifiziert den aktuellen Verlaufseintrag, indem sie ihn mit dem Zustandsobjekt und der in den Methodenparametern übergebenen URL ersetzt. Diese Methode ist besonders nützlich, wenn Sie das Zustandsobjekt oder die URL des aktuellen Verlaufseintrags als Reaktion auf eine Benutzeraktion aktualisieren möchten.

## Syntax

```js-nolint
replaceState(state, unused)
replaceState(state, unused, url)
```

### Parameter

- `state`
  - : Ein Objekt, das mit dem Verlaufseintrag verknüpft ist, der an die `replaceState()`-Methode übergeben wird. Das Zustandsobjekt kann `null` sein.
- `unused`
  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; das Übergeben eines leeren Strings ist traditionell und sicher gegen zukünftige Änderungen der Methode.
- `url` {{optional_inline}}
  - : Die URL des Verlaufseintrags. Die neue URL muss von gleicher Herkunft wie die aktuelle URL sein; andernfalls wirft die Methode `replaceState()` eine Ausnahme.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist oder wenn der bereitgestellte `url`-Parameter keine gültige URL ist. Browser drosseln auch die Navigation und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `state`-Parameter nicht serialisierbar ist.

## Beispiele

Angenommen, `https://www.mozilla.org/foo.html` führt das folgende JavaScript aus:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

Auf der nächsten Seite könnten Sie dann `history.state` verwenden, um auf das soeben hinzugefügte `stateObj` zuzugreifen.

Die Erklärung zu diesen beiden Zeilen oben finden Sie im [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API#using_pushstate)-Artikel. Angenommen, `https://www.mozilla.org/bar.html` führt das folgende JavaScript aus:

```js
history.replaceState(stateObj, "", "bar2.html");
```

Dies bewirkt, dass die URL-Leiste `https://www.mozilla.org/bar2.html` anzeigt, aber der Browser wird `bar2.html` nicht laden oder sogar überprüfen, ob `bar2.html` existiert.

Angenommen, der Benutzer navigiert jetzt zu `https://www.microsoft.com` und klickt dann auf die Zurück-Schaltfläche. Zu diesem Zeitpunkt zeigt die URL-Leiste `https://www.mozilla.org/bar2.html` an. Wenn der Benutzer jetzt erneut auf Zurück klickt, zeigt die URL-Leiste `https://www.mozilla.org/foo.html` an und umgeht bar.html vollständig.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
