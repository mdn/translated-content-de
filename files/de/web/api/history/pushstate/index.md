---
title: "History: pushState() Methode"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("History API")}}

Die **`pushState()`** Methode des [`History`](/de/docs/Web/API/History) Interfaces fügt einen Eintrag zum Sitzungsverlauf-Stack des Browsers hinzu.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameter

- `state`

  - : Das `state` Objekt ist ein JavaScript-Objekt, das mit dem neuen Verlaufseintrag verbunden ist, der durch `pushState()` erstellt wird. Jedes Mal, wenn der Benutzer zu dem neuen `state` navigiert, wird ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis ausgelöst und die `state` Eigenschaft des Ereignisses enthält eine Kopie des `state` Objekts des Verlaufseintrags.

    Das `state` Objekt kann alles sein, das serialisiert werden kann.

    > [!NOTE]
    > Einige Browser speichern `state` Objekte auf der Festplatte des Benutzers, damit sie nach einem Neustart des Browsers wiederhergestellt werden können, und legen eine Größenbeschränkung für die serialisierte Darstellung eines `state` Objekts fest. Sie werfen eine Ausnahme, wenn ein `state` Objekt übergeben wird, dessen serialisierte Darstellung größer als diese Größenbeschränkung ist. In Fällen, in denen Sie sicherstellen möchten, dass Ihnen mehr Speicherplatz zur Verfügung steht, als einige Browser möglicherweise festlegen, wird empfohlen, [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und/oder [`localStorage`](/de/docs/Web/API/Window/localStorage) zu verwenden.

- `unused`

  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; die Übergabe eines leeren Strings ist sicher gegen künftige Änderungen der Methode.

- `url` {{optional_inline}}
  - : Die URL des neuen Verlaufseintrags. Beachten Sie, dass der Browser nicht versuchen wird, diese URL nach einem Aufruf von `pushState()` zu laden, sondern möglicherweise später versuchen könnte, die URL zu laden, beispielsweise nachdem der Benutzer den Browser neu gestartet hat. Die neue URL muss nicht absolut sein; wenn sie relativ ist, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss vom gleichen {{Glossary("origin", "Origin")}} wie die aktuelle URL stammen; andernfalls wird `pushState()` eine Ausnahme auslösen. Wenn dieser Parameter nicht angegeben ist, wird er auf die aktuelle URL des Dokuments gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist, wenn der bereitgestellte `url` Parameter keine gültige URL ist oder wenn die Methode zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `state` Parameter nicht serialisierbar ist.

## Beschreibung

In gewisser Weise ist der Aufruf von `pushState()` ähnlich wie das Setzen von `window.location = "#foo"`, da beide auch einen weiteren Verlaufseintrag erstellen und aktivieren, der mit dem aktuellen Dokument verbunden ist. `pushState()` hat jedoch einige Vorteile:

- Die neue URL kann jede beliebige URL im gleichen Ursprung wie die aktuelle URL sein. Im Kontrast dazu bleibt man beim Setzen von [`window.location`](/de/docs/Web/API/Window/location) nur dann beim selben Dokument, wenn man nur den Hash ändert.
- Das Ändern der Seiten-URL ist optional. Im Gegensatz dazu erstellt `window.location = "#foo";` nur dann einen neuen Verlaufseintrag, wenn der aktuelle Hash nicht `#foo` ist.
- Sie können beliebige Daten mit Ihrem neuen Verlaufseintrag verknüpfen. Bei dem Hash-basierten Ansatz müssen Sie alle relevanten Daten in einen kurzen String codieren.

Beachten Sie, dass `pushState()` niemals ein [`hashchange`](/de/docs/Web/API/Window/hashchange_event) Ereignis auslöst, selbst wenn sich die neue URL nur im Hash von der alten URL unterscheidet.

## Beispiele

Dies erstellt einen neuen Verlaufseintrag im Browser, indem _state_ und _url_ gesetzt werden.

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
