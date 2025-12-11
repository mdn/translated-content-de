---
title: "NavigationPrecommitController: redirect() Methode"
short-title: redirect()
slug: Web/API/NavigationPrecommitController/redirect
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

Die **`redirect()`** Methode der [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) Schnittstelle leitet den Browser zu einer angegebenen URL um und spezifiziert das Verhalten der Historie sowie gewünschte Zustandsinformationen.

## Syntax

```js-nolint
redirect(url, options)
```

### Parameter

- `url`
  - : Die URL, zu der umgeleitet werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, dessen Eigenschaften Folgendes beinhalten können:
    - `state` {{optional_inline}}
      - : Enthält beliebige Zustandsinformationen, die Sie zusammen mit der Navigation übergeben möchten; zum Beispiel für Protokollierungs- oder Verfolgungszwecke. Dies kann durch jeden Werttyp dargestellt werden. Der Zustand der Navigation kann anschließend über die [`NavigationHistoryEntry.getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState) Methode des resultierenden Historieneintrags abgerufen werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, wie dieser Redirect zur Navigation-Historie hinzugefügt werden soll. Er kann einen der folgenden Werte annehmen:
        - `auto`
          - : Der Standardwert, der es dem Browser überlässt, wie damit umgegangen wird:
            - Wenn die ursprüngliche Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) erfolgt ist, wird der Wert verwendet, der in der `navigate()` Aufrufoption [`history`](/de/docs/Web/API/Navigation/navigate#history) angegeben wurde.
            - Andernfalls wird normalerweise `push` verwendet, aber es wird `replace`, wenn der Redirect auf dieselbe URL verweist wie die vor der Navigation.
        - `push`
          - : Fügt einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zur Navigation-Historie hinzu und löscht jegliche verfügbare Vorwärtsnavigation (d.h. wenn der Benutzer zuvor zu anderen Orten navigiert und dann die Zurück-Taste verwendet hat, um durch die Historie zur Navigation zurückzukehren, die die Umleitung verursacht hat).
        - `replace`
          - : Ersetzt den [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) durch den resultierenden neuen `NavigationHistoryEntry`.

> [!NOTE]
> Die `redirect()` Methode kann das Historieverhalten zwischen `auto`, `push` und `replace` umwandeln, aber sie kann keine `traverse`-Navigation in eine `push`/`replace`-Navigation und umgekehrt umwandeln.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das auslösende [`NavigateEvent`](/de/docs/Web/API/NavigateEvent) nicht abgefangen wurde.
    - Der [`NavigateEvent.navigationType`](/de/docs/Web/API/NavigateEvent/navigationType) nicht `push` oder `replace` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `url` ungültig ist.
- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das aktuelle Dokument nicht in der Lage ist, seine URL auf die angegebene Umleitungs-`url` umzuschreiben.

## Beispiele

Siehe die Hauptseite [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
