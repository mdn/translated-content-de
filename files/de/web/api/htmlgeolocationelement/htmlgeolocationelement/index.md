---
title: "HTMLGeolocationElement: Konstruktor HTMLGeolocationElement()"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der Konstruktor **`HTMLGeolocationElement()`** erstellt eine neue Objektinstanz von [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement).

## Syntax

```js-nolint
new HTMLGeolocationElement()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Objektinstanz von [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement), wenn der Konstruktor intern vom Browser verwendet wird.

Entwickler können den Konstruktor `HTMLGeolocationElement()` nicht direkt verwenden, um eine neue `HTMLGeolocationElement`-Instanz zu erstellen: Ein solcher Versuch führt zu einem „illegal constructor“-Fehler.

## Beispiele

### Eine neue `HTMLGeolocationElement`-Instanz programmatisch erstellen

Um eine neue `HTMLGeolocationElement`-Instanz programmatisch zu erstellen, verwenden Sie statt des Konstruktors direkt [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um eine neue Instanz des Elements {{htmlelement("geolocation")}} zu erstellen:

```js
const geo = document.createElement("geolocation");
```

Anschließend können Sie die Instanz verwenden, indem Sie sie dem DOM hinzufügen:

```js
document.body.append(geo);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Element {{htmlelement("geolocation")}}
