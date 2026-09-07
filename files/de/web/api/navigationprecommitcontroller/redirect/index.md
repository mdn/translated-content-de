---
title: "NavigationPrecommitController: Methode redirect()"
short-title: redirect()
slug: Web/API/NavigationPrecommitController/redirect
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{APIRef("Navigation API")}}

Die Methode **`redirect()`** des Interfaces [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) leitet den Browser zu einer angegebenen URL weiter und legt das Verlaufverhalten sowie gewünschte Statusinformationen fest.

## Syntax

```js-nolint
redirect(url, options)
```

### Parameter

- `url`
  - : Die URL, zu der weitergeleitet werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, dessen Eigenschaften Folgendes umfassen können:
    - `state` {{optional_inline}}
      - : Enthält Statusinformationen, die Sie zusammen mit der Navigation übergeben möchten, beispielsweise zu Protokollierungs- oder Tracking-Zwecken. Dies kann durch einen Wert eines beliebigen Typs dargestellt werden. Der Status der Navigation kann anschließend über die Methode [`NavigationHistoryEntry.getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) des resultierenden Verlaufseintrags abgerufen werden.
    - `history` {{optional_inline}}
      - : Ein aufgezählter Wert, der angibt, wie diese Weiterleitung zum Navigationsverlauf hinzugefügt werden soll. Er kann einen der folgenden Werte annehmen:
        - `auto`
          - : Der Standardwert, der den Browser entscheiden lässt, wie damit umgegangen wird:
            - Wenn die ursprüngliche Navigation infolge eines Aufrufs von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) erfolgte, entspricht der Wert dem, der in der Option [`history`](/de/docs/Web/API/Navigation/navigate#history) des `navigate()`-Aufrufs angegeben wurde.
            - Andernfalls wird normalerweise der Wert `push` verwendet, aber er wird zu `replace`, wenn die Weiterleitung auf dieselbe URL wie die URL vor der Navigation verweist.
        - `push`
          - : Fügt dem Navigationsverlauf einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) hinzu und löscht alle verfügbaren Vorwärtsnavigationen (das heißt, wenn die Benutzerin oder der Benutzer zuvor zu anderen Orten navigiert und dann die Zurück-Schaltfläche verwendet hat, um im Verlauf zurückzukehren, bevor die Navigation ausgelöst wurde, die die Weiterleitung verursachte).
        - `replace`
          - : Ersetzt den [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) durch den resultierenden neuen `NavigationHistoryEntry`.

> [!NOTE]
> Die Methode `redirect()` kann das Verlaufverhalten zwischen `auto`, `push` und `replace` umwandeln, aber sie kann eine `traverse`-Navigation nicht in eine `push`/`replace`-Navigation umwandeln und umgekehrt.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das ursprüngliche [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) nicht abgefangen wurde.
    - Der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) nicht `push` oder `replace` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die URL des aktuellen Dokuments nicht in die bereitgestellte Weiterleitungs-`url` umgeschrieben werden kann.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
