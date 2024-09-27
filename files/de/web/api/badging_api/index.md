---
title: Badging API
slug: Web/API/Badging_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("Badging API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Badging API** bietet Webentwicklern eine Methode zum Setzen eines Abzeichens auf einem Dokument oder einer Anwendung. Dies dient als Benachrichtigung für einen geänderten Status, ohne eine ablenkende Benachrichtigung anzuzeigen. Ein häufiges Anwendungsbeispiel wäre eine Anwendung mit einer Nachrichtenfunktion, die ein Abzeichen auf dem App-Symbol anzeigt, um zu signalisieren, dass neue Nachrichten eingegangen sind.

## Konzepte und Verwendung

Webentwickler aktualisieren häufig Dokumentfavicons oder Titel, um einen Status anzugeben. Die Badging API bietet einen eleganteren Weg, den Status anzuzeigen, indem sie eine Methode bereitstellt, die für den Benutzeragenten von Bedeutung ist und daher auf eine Weise angezeigt werden kann, die zum Rest der Benutzeroberfläche passt.

### Typen von Abzeichen

Es gibt zwei Arten von Abzeichen:

- Dokumentabzeichen, die typischerweise im Browser-Tab in der Nähe oder auf dem Seiten-Symbol angezeigt werden.
- App-Abzeichen, die dem Symbol einer installierten Web-App zugeordnet sind. Diese können je nach verwendetem Gerät auf dem App-Symbol im Dock, Regal oder Startbildschirm angezeigt werden.

### Abzeichen-Zustände

Ein Abzeichen kann einen von drei möglichen Werten haben, die intern gesetzt werden:

- `nothing`
  - : Zeigt an, dass derzeit kein Abzeichen gesetzt ist. Ein Abzeichen kann in diesem Zustand sein, weil es von der Anwendung gelöscht oder vom Benutzeragenten zurückgesetzt wurde.
- `flag`
  - : Zeigt an, dass das Abzeichen gesetzt ist, aber keine spezifischen Daten anzuzeigen sind. Ein Abzeichen wird in diesem Zustand sein, wenn die Anwendung ein Abzeichen gesetzt hat, aber keinen Wert an die Methode übergeben hat.
- eine ganze Zahl
  - : Ein Wert, der beim Setzen des Abzeichens übergeben wird. Dieser Wert wird niemals `0` sein; einen Wert von `0` zu übergeben, wenn ein Abzeichen gesetzt wird, veranlasst den Benutzeragenten, das Abzeichen zu löschen, indem es auf `nothing` gesetzt wird.

### Abzeichen setzen

Ein Abzeichen wird mit den Methoden `setAppBadge()` (für installierte Apps) gesetzt. Wenn diesen Methoden keine Parameter übergeben werden, hat das Abzeichen den Wert flag. Der Benutzeragent zeigt sein Benachrichtigungsabzeichen an, zum Beispiel einen farbigen Kreis auf dem Symbol.

Diesen Methoden kann auch ein Parameter `contents` übergeben werden, bei dem es sich um eine Zahl handeln sollte. Diese wird dann als Teil des Abzeichens angezeigt. Benutzeragenten können diesen Wert auf irgendeine Weise ändern. Zum Beispiel, wenn Sie eine sehr große Zahl wie 4000 übergeben, kann der Benutzeragent dies als 99+ im Abzeichen anzeigen. Benutzeragenten können diese Daten auch ignorieren und stattdessen einen Marker anzeigen.

### Abzeichen löschen

Abzeichen werden mit den Methoden `clearAppBadge()` gelöscht. Diese nehmen keine Parameter entgegen und setzen das Abzeichen auf den Wert `nothing`. Zusätzlich wird das Übergeben eines Wertes von `0` an `setAppBadge()` das Abzeichen auf `nothing` setzen und löschen.

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

Um ein Benachrichtigungsabzeichen auf der aktuellen App mit einem Wert von 12 zu setzen:

```js
navigator.setAppBadge(12);
```

Um ein Benachrichtigungsabzeichen auf der aktuellen App zu löschen:

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Badging API Explainer](https://github.com/w3c/badging/blob/main/explainer.md)
