---
title: "History: pushState()-Methode"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`pushState()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle fügt einen Eintrag zum Sitzungsverlauf-Stack des Browsers hinzu.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameter

- `state`

  - : Das `state`-Objekt ist ein JavaScript-Objekt, das mit dem neuen Verlaufseintrag, der durch `pushState()` erstellt wird, verknüpft ist. Immer wenn der Benutzer zu dem neuen `state` navigiert, wird ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis ausgelöst, und die `state`-Eigenschaft des Ereignisses enthält eine Kopie des `state`-Objekts des Verlaufs.

    Das `state`-Objekt kann alles sein, was serialisierbar ist.

    > [!NOTE]
    > Einige Browser speichern `state`-Objekte auf der Festplatte des Benutzers, damit sie nach einem Neustart des Browsers wiederhergestellt werden können, und legen eine Größenbeschränkung für die serialisierte Darstellung eines `state`-Objekts fest. Sie werfen eine Ausnahme, wenn Sie ein `state`-Objekt übergeben, dessen serialisierte Darstellung größer als dieses Größenlimit ist. In Fällen, in denen Sie sicherstellen möchten, dass Sie mehr Speicherplatz als von einigen Browsern auferlegt erhalten, werden Sie ermutigt, [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und/oder [`localStorage`](/de/docs/Web/API/Window/localStorage) zu verwenden.

- `unused`

  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; die Übergabe eines leeren Strings ist sicher gegenüber zukünftigen Änderungen der Methode.

- `url` {{optional_inline}}
  - : Die URL des neuen Verlaufseintrags. Beachten Sie, dass der Browser nach einem Aufruf von `pushState()` nicht versuchen wird, diese URL zu laden, aber möglicherweise später, beispielsweise nach einem Neustart des Browsers. Die neue URL muss nicht absolut sein; wenn sie relativ ist, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss vom gleichen [Ursprung](/de/docs/Glossary/origin) wie die aktuelle URL sein; andernfalls wirft `pushState()` eine Ausnahme. Wenn dieser Parameter nicht angegeben ist, wird er auf die aktuelle URL des Dokuments gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das zugehörige Dokument nicht vollständig aktiv ist oder falls der bereitgestellte `url`-Parameter keine gültige URL darstellt. Browser drosseln auch die Navigation und können diesen Fehler werfen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der bereitgestellte `state`-Parameter nicht serialisierbar ist.

## Beschreibung

In gewisser Weise ist ein Aufruf von `pushState()` ähnlich dem Setzen von `window.location = "#foo"`, da beide ebenfalls einen weiteren Verlaufseintrag erzeugen und aktivieren, der mit dem aktuellen Dokument verknüpft ist. Aber `pushState()` bietet einige Vorteile:

- Die neue URL kann jede URL im gleichen Ursprung wie die aktuelle URL sein. Im Gegensatz dazu bleibt man bei [`window.location`](/de/docs/Web/API/Window/location) nur im selben Dokument, wenn man nur den Hash ändert.
- Das Ändern der URL der Seite ist optional. Im Gegensatz zum Setzen von `window.location = "#foo";`, das nur einen neuen Verlaufseintrag erzeugt, wenn der aktuelle Hash nicht `#foo` ist.
- Sie können beliebige Daten mit Ihrem neuen Verlaufseintrag verknüpfen. Beim Hash-basierten Ansatz müssen Sie alle relevanten Daten in eine kurze Zeichenkette kodieren.

Beachten Sie, dass `pushState()` niemals ein [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis auslöst, selbst wenn sich die neue URL nur im Hash von der alten URL unterscheidet.

## Beispiele

Dies erstellt einen neuen Verlaufseintrag des Browsers, wobei der _state_ und die _url_ festgelegt werden.

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
- [Window: popstate-Ereignis](/de/docs/Web/API/Window/popstate_event)
