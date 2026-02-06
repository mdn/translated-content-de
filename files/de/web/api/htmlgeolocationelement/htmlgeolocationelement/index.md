---
title: "HTMLGeolocationElement: HTMLGeolocationElement() Konstruktor"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Der **`HTMLGeolocationElement()`**-Konstruktor erstellt eine neue Instanz des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Objekts.

## Syntax

```js-nolint
new HTMLGeolocationElement()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Instanz des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Objekts, wenn intern vom Browser verwendet.

Entwickler können den `HTMLGeolocationElement()`-Konstruktor nicht direkt verwenden, um eine neue `HTMLGeolocationElement`-Instanz zu erstellen: Ein Versuch führt zu einem Fehler "illegaler Konstruktor".

### Beispiele

#### Programmatische Erstellung einer neuen `HTMLGeolocationElement`-Instanz

Um programmgesteuert eine neue `HTMLGeolocationElement`-Instanz zu erstellen, anstatt zu versuchen, den Konstruktor direkt zu verwenden, erstellen Sie eine neue {{htmlelement("geolocation")}}-Elementinstanz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement):

```js
const geo = document.createElement("geolocation");
```

Sie können es dann verwenden, indem Sie es an den DOM anhängen:

```js
document.body.append(geo);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
