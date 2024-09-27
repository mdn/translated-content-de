---
title: "History: pushState()-Methode"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`pushState()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle fügt einen Eintrag zum Sitzungsverlauf des Browsers hinzu.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameter

- `state`

  - : Das `state`-Objekt ist ein JavaScript-Objekt, das mit dem neuen Verlaufseintrag verknüpft ist, der durch `pushState()` erstellt wurde. Wann immer der Benutzer zur neuen `state` navigiert, wird ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis ausgelöst, und die `state`-Eigenschaft des Ereignisses enthält eine Kopie des `state`-Objekts des Verlaufseintrags.

    Das `state`-Objekt kann alles sein, was serialisierbar ist.

    > [!NOTE]
    > Einige Browser speichern `state`-Objekte auf der Festplatte des Benutzers, damit diese nach einem Neustart des Browsers wiederhergestellt werden können, und legen eine Größengrenze für die serialisierte Darstellung eines `state`-Objekts fest. Eine Ausnahme wird ausgelöst, wenn ein `state`-Objekt übergeben wird, dessen serialisierte Darstellung diese Größengrenze überschreitet. In Fällen, in denen mehr Speicherplatz gewünscht ist, als einige Browser möglicherweise auferlegen, wird empfohlen, [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und/oder [`localStorage`](/de/docs/Web/API/Window/localStorage) zu verwenden.

- `unused`

  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; die Übergabe eines leeren Strings ist in Bezug auf zukünftige Änderungen der Methode sicher.

- `url` {{optional_inline}}
  - : Die URL des neuen Verlaufseintrags. Beachten Sie, dass der Browser nicht versucht, diese URL nach einem Aufruf von `pushState()` zu laden, aber er kann versuchen, die URL später zu laden, beispielsweise nachdem der Benutzer den Browser neu gestartet hat. Die neue URL muss nicht absolut sein; ist sie relativ, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss vom gleichen [Ursprung](/de/docs/Glossary/origin) wie die aktuelle URL sein; andernfalls löst `pushState()` eine Ausnahme aus. Wenn dieser Parameter nicht angegeben ist, wird er auf die aktuelle URL des Dokuments gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist oder wenn der angegebene `url`-Parameter keine gültige URL ist. Browser drosseln auch Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene `state`-Parameter nicht serialisierbar ist.

## Beschreibung

In gewisser Weise ist der Aufruf von `pushState()` ähnlich wie das Setzen von `window.location = "#foo"`, da beide ebenfalls einen weiteren Verlaufseintrag erstellen und aktivieren, der mit dem aktuellen Dokument verknüpft ist. Aber `pushState()` bietet einige Vorteile:

- Die neue URL kann jede URL im gleichen Ursprung wie die aktuelle URL sein. Im Gegensatz dazu bleibt man beim Setzen von [`window.location`](/de/docs/Web/API/Window/location) nur dann im selben Dokument, wenn man nur den Hash ändert.
- Das Ändern der URL der Seite ist optional. Im Gegensatz dazu erstellt `window.location = "#foo";` nur dann einen neuen Verlaufseintrag, wenn der aktuelle Hash nicht `#foo` ist.
- Sie können beliebige Daten mit Ihrem neuen Verlaufseintrag verknüpfen. Beim Hash-basierten Ansatz müssen Sie alle relevanten Daten in eine kurze Zeichenkette kodieren.

Beachten Sie, dass `pushState()` niemals ein [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis auslöst, selbst wenn sich die neue URL von der alten URL nur im Hash unterscheidet.

## Beispiele

Dies erstellt einen neuen Browserverlaufseintrag, indem der _state_ und die _url_ festgelegt werden.

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### Ändern eines Abfrageparameters

```js
const url = new URL(location);
url.searchParams.set("foo", "bar");
history.pushState({}, "", url);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
- [Window: popstate Ereignis](/de/docs/Web/API/Window/popstate_event)
