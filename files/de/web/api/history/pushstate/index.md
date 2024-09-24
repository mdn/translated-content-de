---
title: "History: pushState()-Methode"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`pushState()`**-Methode der {{domxref("History")}}-Schnittstelle fügt einen Eintrag zur Sitzungsverlaufsliste des Browsers hinzu.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameter

- `state`

  - : Das `state`-Objekt ist ein JavaScript-Objekt, das mit dem neuen Verlaufseintrag verknüpft ist, der durch `pushState()` erstellt wurde. Immer wenn der Benutzer zu dem neuen `state` navigiert, wird ein {{domxref("Window/popstate_event", "popstate")}}-Ereignis ausgelöst, und die `state`-Eigenschaft des Ereignisses enthält eine Kopie des `state`-Objekts des Verlaufseintrags.

    Das `state`-Objekt kann alles sein, was serialisiert werden kann.

    > [!NOTE]
    > Einige Browser speichern `state`-Objekte auf der Festplatte des Benutzers, damit sie nach einem Neustart des Browsers wiederhergestellt werden können, und legen ein Größenlimit für die serialisierte Darstellung eines `state`-Objekts fest. Wenn Sie ein `state`-Objekt übergeben, dessen serialisierte Darstellung größer als dieses Größenlimit ist, wird eine Ausnahme ausgelöst. In Fällen, in denen Sie sicherstellen möchten, dass Sie mehr Platz haben als einige Browser möglicherweise festlegen, wird empfohlen, {{domxref("Window.sessionStorage", "sessionStorage")}} und/oder {{domxref("Window.localStorage", "localStorage")}} zu verwenden.

- `unused`

  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; die Übergabe eines leeren Strings ist sicher gegen zukünftige Änderungen der Methode.

- `url` {{optional_inline}}
  - : Die neue URL des Verlaufseintrags. Beachten Sie, dass der Browser nach einem Aufruf von `pushState()` nicht versucht, diese URL zu laden, aber später, z. B. nach einem Neustart des Browsers, versuchen kann, die URL zu laden. Die neue URL muss nicht absolut sein; wenn sie relativ ist, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss die gleiche {{glossary("origin")}} wie die aktuelle URL haben; andernfalls wird `pushState()` eine Ausnahme auslösen. Wenn dieser Parameter nicht angegeben wird, wird er auf die aktuelle URL des Dokuments gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist oder wenn der angegebene `url`-Parameter keine gültige URL ist. Browser drosseln auch Navigationsaufrufe und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `state`-Parameter nicht serialisierbar ist.

## Beschreibung

In gewisser Weise ist der Aufruf von `pushState()` ähnlich wie das Setzen von `window.location = "#foo"`, da auch hierdurch ein weiterer Verlaufseintrag für das aktuelle Dokument erstellt und aktiviert wird. Aber `pushState()` bietet einige Vorteile:

- Die neue URL kann jede URL im selben Ursprung wie die aktuelle URL sein. Im Gegensatz dazu bleiben Sie beim Setzen von {{domxref("window.location")}} nur dann beim gleichen Dokument, wenn Sie nur den Hash ändern.
- Das Ändern der URL der Seite ist optional. Im Gegensatz dazu wird durch das Setzen von `window.location = "#foo";` nur dann ein neuer Verlaufseintrag erstellt, wenn der aktuelle Hash nicht `#foo` ist.
- Sie können beliebige Daten mit Ihrem neuen Verlaufseintrag verknüpfen. Bei der auf Hash basierenden Methode müssen Sie alle relevanten Daten in einen kurzen String kodieren.

Beachten Sie, dass `pushState()` niemals ein {{domxref("Window/hashchange_event", "hashchange")}}-Ereignis auslöst, selbst wenn sich die neue URL nur im Hash von der alten URL unterscheidet.

## Beispiele

Dies erstellt einen neuen Browser-Verlaufseintrag und setzt den _state_ und die _url_.

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
