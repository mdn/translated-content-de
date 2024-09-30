---
title: Badging API
slug: Web/API/Badging_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("Badging API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Badging API** bietet Webentwicklern eine Methode, um ein Abzeichen auf einem Dokument oder einer Anwendung zu setzen, das als Benachrichtigung dient, dass sich der Status geändert hat, ohne eine störendere Benachrichtigung anzuzeigen. Ein häufiges Anwendungsbeispiel wäre eine Anwendung mit einem Messaging-Feature, die ein Abzeichen auf dem App-Symbol anzeigt, um zu zeigen, dass neue Nachrichten eingetroffen sind.

## Konzepte und Verwendung

Webentwickler aktualisieren häufig Dokument-Favicons oder Titel, um den Status anzuzeigen. Die Badging API bietet eine elegantere Möglichkeit, den Status anzuzeigen, indem sie eine Methode bereitstellt, die dem Benutzeragenten eine Bedeutung hat und daher auf eine Weise angezeigt werden kann, die zum Rest der Benutzeroberfläche passt.

### Arten von Abzeichen

Es gibt zwei Arten von Abzeichen:

- Dokumenten-Abzeichen, die typischerweise im Browser-Tab in der Nähe oder auf dem Seitensymbol angezeigt werden.
- App-Abzeichen, die mit dem Symbol einer installierten Web-App verknüpft sind. Diese können je nach verwendetem Gerät auf dem App-Symbol im Dock, Regal oder Startbildschirm angezeigt werden.

### Abzeichen-Zustände

Ein Abzeichen kann einen von drei möglichen Werten haben, die intern festgelegt werden:

- `nothing`
  - : Zeigt an, dass derzeit kein Abzeichen gesetzt ist. Ein Abzeichen kann sich in diesem Zustand befinden, weil es von der Anwendung gelöscht oder vom Benutzeragenten zurückgesetzt wurde.
- `flag`
  - : Zeigt an, dass das Abzeichen gesetzt ist, jedoch keine spezifischen Daten zum Anzeigen hat. Ein Abzeichen wird sich in diesem Zustand befinden, wenn die Anwendung ein Abzeichen gesetzt hat, aber keinen Wert an die Methode übergeben hat.
- eine ganze Zahl
  - : Ein Wert, der beim Setzen des Abzeichens übergeben wurde. Dieser Wert wird niemals `0` sein; das Übergeben eines Wertes von `0` beim Setzen eines Abzeichens führt dazu, dass der Benutzeragent das Abzeichen löscht, indem er es auf `nothing` setzt.

### Abzeichen setzen

Ein Abzeichen wird mit den Methoden `setAppBadge()` (für installierte Apps) gesetzt. Wenn keine Parameter an diese Methoden übergeben werden, hat das Abzeichen den Wert flag. Der Benutzeragent zeigt seine Benachrichtigungs-Plakette an, zum Beispiel einen farbigen Kreis auf dem Symbol.

Diese Methoden können auch ein Parameter `contents` erhalten, der eine Zahl sein sollte. Diese wird dann als Teil des Abzeichens angezeigt. Benutzeragenten können diesen Wert in gewisser Weise verändern. Zum Beispiel, wenn Sie eine sehr große Zahl wie 4000 übergeben, könnte der Benutzeragent dies als 99+ auf dem Abzeichen anzeigen. Benutzeragenten können diese Daten auch ignorieren und stattdessen einen Marker anzeigen.

### Abzeichen löschen

Abzeichen werden mit den `clearAppBadge()`-Methoden gelöscht. Diese nehmen keine Parameter an und setzen das Abzeichen auf den Wert `nothing`. Zusätzlich wird durch das Übergeben eines Wertes von `0` an `setAppBadge()` das Abzeichen auf `nothing` gesetzt und das Abzeichen gelöscht.

## Schnittstellen

Keine.

### Erweiterungen der Navigator-Schnittstelle

- [`Navigator.setAppBadge()`](/de/docs/Web/API/Navigator/setAppBadge)
  - : Setzt ein Abzeichen auf dem mit dieser App verbundenen Symbol.
- [`Navigator.clearAppBadge()`](/de/docs/Web/API/Navigator/clearAppBadge)
  - : Löscht das Abzeichen auf dem mit dieser App verbundenen Symbol.

### Erweiterungen der WorkerNavigator-Schnittstelle

- [`WorkerNavigator.setAppBadge()`](/de/docs/Web/API/WorkerNavigator/setAppBadge)
  - : Setzt ein Abzeichen auf dem mit dieser App verbundenen Symbol.
- [`WorkerNavigator.clearAppBadge()`](/de/docs/Web/API/WorkerNavigator/clearAppBadge)
  - : Löscht das Abzeichen auf dem mit dieser App verbundenen Symbol.

## Beispiele

Um ein Benachrichtigungs-Abzeichen auf der aktuellen App mit einem Wert von 12 zu setzen:

```js
navigator.setAppBadge(12);
```

Um ein Benachrichtigungs-Abzeichen auf der aktuellen App zu löschen:

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Abzeichen für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Badging API Erläuterung](https://github.com/w3c/badging/blob/main/explainer.md)
