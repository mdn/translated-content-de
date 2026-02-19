---
title: "HTMLGeolocationElement: HTMLGeolocationElement() Konstruktor"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`HTMLGeolocationElement()`** Konstruktor erstellt eine neue [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) Objektinstanz.

## Syntax

```js-nolint
new HTMLGeolocationElement()
```

### Parameter

Keine.

### Rückgabewert

Eine neue [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) Objektinstanz, wenn diese intern vom Browser verwendet wird.

Entwickler können den `HTMLGeolocationElement()` Konstruktor nicht direkt verwenden, um eine neue `HTMLGeolocationElement` Instanz zu erstellen: Ein Versuch führt zu einem "illegaler Konstruktor"-Fehler.

### Beispiele

#### Programmatische Erstellung einer neuen `HTMLGeolocationElement` Instanz

Um programmgesteuert eine neue `HTMLGeolocationElement` Instanz zu erstellen, verwenden Sie statt des direkten Konstruktors das Erstellen einer neuen {{htmlelement("geolocation")}} Elementinstanz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement):

```js
const geo = document.createElement("geolocation");
```

Sie können es dann verwenden, indem Sie es dem DOM anfügen:

```js
document.body.append(geo);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
