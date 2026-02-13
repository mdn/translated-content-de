---
title: "HTMLGeolocationElement: HTMLGeolocationElement() Konstruktor"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`HTMLGeolocationElement()`** Konstruktor erstellt eine neue [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Objektinstanz.

## Syntax

```js-nolint
new HTMLGeolocationElement()
```

### Parameter

Keine.

### Rückgabewert

Eine neue [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Objektinstanz, wenn sie intern vom Browser verwendet wird.

Entwickler können den `HTMLGeolocationElement()`-Konstruktor nicht direkt verwenden, um eine neue `HTMLGeolocationElement`-Instanz zu erstellen: Ein solcher Versuch führt zu einem "illegalen Konstruktor"-Fehler.

### Beispiele

#### Programmatische Erstellung einer neuen `HTMLGeolocationElement`-Instanz

Um programmatisch eine neue `HTMLGeolocationElement`-Instanz zu erstellen, statt direkt den Konstruktor zu verwenden, sollten Sie eine neue {{htmlelement("geolocation")}}-Elementinstanz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen:

```js
const geo = document.createElement("geolocation");
```

Sie können diese dann verwenden, indem Sie sie dem DOM anhängen:

```js
document.body.append(geo);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
