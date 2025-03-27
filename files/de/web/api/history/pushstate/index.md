---
title: "Verlauf: pushState()-Methode"
short-title: pushState()
slug: Web/API/History/pushState
l10n:
  sourceCommit: 89c21cd5087eedee51ec415a6507e5fbfcf986e7
---

{{APIRef("History API")}}

Die **`pushState()`**-Methode des [`History`](/de/docs/Web/API/History)-Interfaces fügt einen Eintrag zum Sitzungshistorien-Stack des Browsers hinzu.

## Syntax

```js-nolint
pushState(state, unused)
pushState(state, unused, url)
```

### Parameter

- `state`

  - : Das `state`-Objekt ist ein JavaScript-Objekt, das mit dem neuen im Verlaufseintrag erstellten `pushState()` verknüpft ist. Immer wenn der Benutzer zum neuen `state` navigiert, wird ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis ausgelöst, und die `state`-Eigenschaft des Ereignisses enthält eine Kopie des `state`-Objekts des Verlaufseintrags.

    Das `state`-Objekt kann alles sein, was serialisierbar ist.

    > [!NOTE]
    > Einige Browser speichern `state`-Objekte auf der Festplatte des Benutzers, damit sie nach einem Neustart des Browsers wiederhergestellt werden können, und begrenzen die Größe der serialisierten Darstellung eines `state`-Objekts. Sie werfen eine Ausnahme, wenn Sie ein `state`-Objekt übergeben, dessen serialisierte Darstellung größer ist als dieses Größenlimit. In Fällen, in denen Sie sicherstellen möchten, dass Sie mehr Platz haben als von manchen Browsern vorgegeben, wird empfohlen, [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und/oder [`localStorage`](/de/docs/Web/API/Window/localStorage) zu verwenden.

- `unused`

  - : Dieser Parameter existiert aus historischen Gründen und kann nicht weggelassen werden; es ist sicher, einen leeren String für zukünftige Änderungen an der Methode zu übergeben.

- `url` {{optional_inline}}
  - : Die URL des neuen Verlaufseintrags. Beachten Sie, dass der Browser nicht versuchen wird, diese URL nach einem Aufruf von `pushState()` zu laden, aber er könnte versuchen, die URL später zu laden, beispielsweise nachdem der Benutzer den Browser neu gestartet hat. Die neue URL muss nicht absolut sein; wenn sie relativ ist, wird sie relativ zur aktuellen URL aufgelöst. Die neue URL muss denselben {{Glossary("origin", "Ursprung")}} haben wie die aktuelle URL; andernfalls wird `pushState()` eine Ausnahme werfen. Wenn dieser Parameter nicht angegeben wird, wird er auf die aktuelle URL des Dokuments gesetzt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist, wenn der bereitgestellte `url`-Parameter keine gültige URL ist oder wenn die Methode zu häufig aufgerufen wird.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `state`-Parameter nicht serialisierbar ist.

## Beschreibung

In gewisser Weise ist ein Aufruf von `pushState()` vergleichbar mit dem Setzen von `window.location = "#foo"`, da beide ebenfalls einen weiteren Verlaufseintrag für dasselbe Dokument erstellen und aktivieren. Aber `pushState()` bietet einige Vorteile:

- Die neue URL kann jede beliebige URL im selben Ursprung wie die aktuelle URL sein. Im Gegensatz dazu bleibt man beim Setzen von [`window.location`](/de/docs/Web/API/Window/location) beim selben Dokument nur, wenn man ausschließlich den Hash ändert.
- Das Ändern der URL der Seite ist optional. Im Gegensatz dazu wird ein neuer Verlaufseintrag nur erstellt, wenn der aktuelle Hash nicht `#foo` ist, wenn Sie `window.location = "#foo";` setzen.
- Sie können beliebige Daten mit Ihrem neuen Verlaufseintrag verknüpfen. Mit dem Hash-basierten Ansatz müssen Sie alle relevanten Daten in einen kurzen String kodieren.

Beachten Sie, dass `pushState()` niemals ein [`hashchange`](/de/docs/Web/API/Window/hashchange_event)-Ereignis auslöst, selbst wenn sich die neue URL von der alten URL nur im Hash unterscheidet.

## Beispiele

Dies erstellt einen neuen Verlaufseintrag im Browser und setzt den _state_ und die _url_.

### JavaScript

```js
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);
```

### Ändern eines Query-Parameters

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
