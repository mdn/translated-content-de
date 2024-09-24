---
title: Badging-API
slug: Web/API/Badging_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("Badging API")}}{{securecontext_header}}{{AvailableInWorkers}}

Die **Badging-API** bietet Webentwicklern eine Methode, ein Badge auf einem Dokument oder einer Anwendung zu setzen, um als Benachrichtigung zu fungieren, dass sich der Status geändert hat, ohne eine ablenkendere Benachrichtigung anzuzeigen. Ein häufiges Anwendungsbeispiel hierfür wäre eine Anwendung mit einer Messaging-Funktion, die ein Badge auf dem App-Symbol anzeigt, um zu zeigen, dass neue Nachrichten eingegangen sind.

## Konzepte und Nutzung

Webentwickler aktualisieren häufig Dokument-Favicons oder Titel, um auf den Status hinzuweisen. Die Badging-API bietet eine elegantere Möglichkeit, den Status anzuzeigen, indem sie eine Methode bereitstellt, die für den Benutzeragenten Bedeutung hat und daher auf eine Weise angezeigt werden kann, die dem Rest der Benutzeroberfläche entspricht.

### Arten von Badges

Es gibt zwei Arten von Badges:

- Dokument-Badges, die typischerweise im Browser-Tab in der Nähe des Seiten-Symbols angezeigt werden.
- App-Badges, die mit dem Symbol einer installierten Web-App verbunden sind. Diese können je nach verwendetem Gerät auf dem App-Symbol im Dock, Shelf oder Startbildschirm angezeigt werden.

### Badge-Zustände

Ein Badge kann einen von drei möglichen Werten haben, die intern gesetzt werden:

- `nothing`
  - : Zeigt an, dass derzeit kein Badge gesetzt ist. Ein Badge kann in diesem Zustand sein, da er von der Anwendung gelöscht oder vom Benutzeragenten zurückgesetzt wurde.
- `flag`
  - : Zeigt an, dass das Badge gesetzt ist, aber keine spezifischen Daten anzuzeigen sind. Ein Badge wird in diesem Zustand sein, wenn die Anwendung ein Badge gesetzt hat, aber keinen Wert an die Methode übergeben hat.
- eine Ganzzahl
  - : Ein Wert, der beim Setzen des Badges übergeben wird. Dieser Wert wird niemals `0` sein, wenn ein Wert von `0` beim Setzen eines Badges übergeben wird, wird der Benutzeragent das Badge löschen, indem er es auf `nothing` setzt.

### Setzen von Badges

Ein Badge wird mit den Methoden `setAppBadge()` (für installierte Apps) gesetzt. Wenn diesen Methoden keine Parameter übergeben werden, ist der Badge-Wert flag. Der Benutzeragent wird sein Benachrichtigungs-Badge anzeigen, zum Beispiel einen farbigen Kreis auf dem Symbol.

Diesen Methoden kann auch ein Parameter `contents` übergeben werden, der eine Zahl sein sollte. Diese wird dann als Teil des Badges angezeigt. Benutzeragenten dürfen diesen Wert auf irgendeine Weise ändern. Zum Beispiel, wenn Sie eine sehr große Zahl wie 4000 übergeben, könnte der Benutzeragent dies als 99+ im Badge anzeigen. Benutzeragenten könnten diese Daten auch ignorieren und stattdessen einen Marker anzeigen.

### Löschen von Badges

Badges werden mit den Methoden `clearAppBadge()` gelöscht. Diese nehmen keine Parameter an und setzen das Badge auf den Wert `nothing`. Zusätzlich wird durch die Übergabe eines Wertes von `0` an `setAppBadge()` das Badge auf `nothing` gesetzt und das Badge gelöscht.

## Schnittstellen

Keine.

### Erweiterungen der Navigator-Schnittstelle

- {{domxref("Navigator.setAppBadge()")}}
  - : Setzt ein Badge auf dem mit dieser App verbundenen Symbol.
- {{domxref("Navigator.clearAppBadge()")}}
  - : Löscht das Badge auf dem mit dieser App verbundenen Symbol.

### Erweiterungen der WorkerNavigator-Schnittstelle

- {{domxref("WorkerNavigator.setAppBadge()")}}
  - : Setzt ein Badge auf dem mit dieser App verbundenen Symbol.
- {{domxref("WorkerNavigator.clearAppBadge()")}}
  - : Löscht das Badge auf dem mit dieser App verbundenen Symbol.

## Beispiele

Um ein Benachrichtigungs-Badge mit einem Wert von 12 auf der aktuellen App zu setzen:

```js
navigator.setAppBadge(12);
```

Um ein Benachrichtigungs-Badge auf der aktuellen App zu löschen:

```js
navigator.clearAppBadge();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Badging für App-Symbole](https://developer.chrome.com/docs/capabilities/web-apis/badging-api)
- [Badging-API-Erklärung](https://github.com/w3c/badging/blob/main/explainer.md)
