---
title: "NavigationPrecommitController: addHandler() Methode"
short-title: addHandler()
slug: Web/API/NavigationPrecommitController/addHandler
l10n:
  sourceCommit: d1755079dbc4d1fb68c4bda0cf999fdf618e234a
---

{{APIRef("Navigation API")}}

Die **`addHandler()`** Methode der [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Schnittstelle ermöglicht es Ihnen, eine Handler-Callback-Funktion im Precommit-Code dynamisch hinzuzufügen. Diese wird dann ausgeführt, nachdem die Navigation verpflichtet wurde.

Dies ist nützlich, wenn der Navigationsworkflow von Informationen abhängt, die erst bekannt sind, wenn der Precommit-Code zu laufen beginnt. Wenn der Precommit- und der (Post-Commit) Handler unabhängig sind, kann der Handler im [`options.handler`](/de/docs/Web/API/NavigateEvent/intercept#handler)-Argument, das an [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept) übergeben wird, angegeben werden.

## Syntax

```js-nolint
addHandler(handler);
```

### Parameter

- `handler`
  - : Eine Callback-Funktion, die das Verhalten der Post-Commit-Navigation beschreibt; sie gibt ein Promise zurück.

    Die Handler-Callback wird aufgerufen, als wäre sie der `NavigateEvent.intercept()`-Methode übergeben worden, und wird ausgeführt, nachdem die [`currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Eigenschaft aktualisiert wurde.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das ursprüngliche [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) nicht abgefangen oder abgebrochen wurde.
    - Das [`Document`](/de/docs/Web/API/Document) nicht vollständig aktiv ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`isTrusted`](/de/docs/Web/API/Event/isTrusted)-Attribut des Ereignisses `false` ist.

## Beispiele

Für weitere Beispiele siehe [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController).

### Grundlegende Verwendung

Dieses Beispiel zeigt eine `precommitHandler`-Implementierung, die Daten für eine Seite abruft und `addHandler()` verwendet, um je nach Seitentyp unterschiedliche Handler hinzuzufügen (die Implementierungen von `fetchConfig`, `setupVideoPlayer()` und `setupArticleView()` sind nicht gegeben).

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async precommitHandler(controller) {
      const pageData = await fetchConfig();
      if (pageData.type === "video") {
        controller.addHandler(() => setupVideoPlayer());
      } else {
        controller.addHandler(() => setupArticleView());
      }
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne Client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
