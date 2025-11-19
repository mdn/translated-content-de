---
title: "NavigationPrecommitController: redirect() Methode"
short-title: redirect()
slug: Web/API/NavigationPrecommitController/redirect
l10n:
  sourceCommit: 280e77d96ea10ee5169e5b9e5e329f10fe84869d
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`redirect()`**-Methode des
[`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController)-Interfaces leitet den Browser zu einer angegebenen URL um und spezifiziert das Verhalten der Verlaufshistorie sowie gewünschte Zustandsinformationen.

## Syntax

```js-nolint
redirect(url, options)
```

### Parameter

- `url`
  - : Die URL, zu der umgeleitet werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, dessen Eigenschaften Folgendes umfassen können:
    - `state` {{optional_inline}}
      - : Enthält beliebige Zustandsinformationen, die Sie zusammen mit der Navigation übergeben möchten, z. B. für Protokollierungs- oder Nachverfolgungszwecke. Dies kann durch einen beliebigen Werttyp dargestellt werden. Der Zustand für die Navigation kann anschließend über die [`NavigationHistoryEntry.getState()`](/de/docs/Web/API/NavigationHistoryEntry/getState)-Methode des resultierenden Verlaufs-Eintrags abgerufen werden.
    - `history` {{optional_inline}}
      - : Ein enumerierter Wert, der angibt, wie diese Weiterleitung zur Navigationshistorie hinzugefügt werden soll. Er kann einen der folgenden Werte annehmen:
        - `auto`
          - : Der Standardwert, der dem Browser überlässt, wie er damit umgeht:
            - Wenn die ursprüngliche Navigation durch einen Aufruf von [`Navigation.navigate()`](/de/docs/Web/API/Navigation/navigate) erfolgte, wird der Wert verwendet, der in der `navigate()`-Aufrufoption [`history`](/de/docs/Web/API/Navigation/navigate#history) spezifiziert wurde.
            - Andernfalls wird normalerweise `push` verwendet, es wird jedoch `replace`, wenn die Umleitung auf dieselbe URL wie die Vor-Navigations-URL zeigt.
        - `push`
          - : Fügt der Navigationshistorie einen neuen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) hinzu und löscht alle verfügbaren Vorwärtsnavigationen (das heißt, wenn der Benutzer zuvor zu anderen Orten navigiert hat, dann die Zurück-Taste verwendet hat, um durch die Historie zurückzukehren, bevor die Navigation, die die Umleitung verursacht hat, initiiert wurde).
        - `replace`
          - : Ersetzt den [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) durch den resultierenden neuen `NavigationHistoryEntry`.

> [!NOTE]
> Die `redirect()`-Methode kann das Verlaufshandeln zwischen `auto`, `push` und `replace` konvertieren, jedoch kann sie keine `traverse`-Navigation in eine `push`/`replace`-Navigation umwandeln und umgekehrt.

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
  - : Wird ausgelöst, wenn es dem aktuellen Dokument nicht möglich ist, seine URL auf die bereitgestellte Weiterleitungs-`url` umzuschreiben.

## Beispiele

Siehe die Hauptseite von [`NavigationPrecommitController`](/de/docs/Web/API/NavigationPrecommitController) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
