---
title: "Navigator: deprecatedReplaceInURN()-Methode"
short-title: deprecatedReplaceInURN()
slug: Web/API/Navigator/deprecatedReplaceInURN
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Fenced Frame API")}}{{seecompattable}}

Die **`deprecatedReplaceInURN()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle ersetzt angegebene Zeichenfolgen in der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.

Ein `FencedFrameConfig` oder undurchsichtiger URN wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) `runAdAuction()`-Methode zurückgegeben und dann als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt. Die mit dem `FencedFrameConfig` oder undurchsichtigen URN verknüpfte Inhalts-URL wird intern vom Browser zugeordnet und kann nicht über JavaScript zugegriffen werden.

Es kann jedoch gewünscht sein, Teile dieser internen URL zu ersetzen. Dies ist ein gängiger Ansatz, um Laufzeitdaten in Werbekreative einzubringen, die bei der Darstellung verwendet werden. `deprecatedReplaceInURN()` wurde als temporäre Maßnahme bereitgestellt, um diesen Ersatz für fenced frame URLs zu ermöglichen, damit Werbetechnik-Anbieter bestehende Implementierungen auf [privacy sandbox](https://privacysandbox.google.com/)-APIs migrieren können.

## Syntax

```js-nolint
deprecatedReplaceInURN(UrnOrConfig, replacements)
```

### Parameter

- `UrnOrConfig`
  - : Ein `FencedFrameConfig`-Objekt oder ein undurchsichtiger URN, für den Sie Teile der entsprechenden internen URL ersetzen möchten.
- `replacements`
  - : Ein Objekt, das eine oder mehrere Eigenschaften enthält, die die Ersetzungen darstellen, die Sie in der internen URL vornehmen möchten. Jeder Eigenschaftsschlüssel ist ein URL-Abschnitt, den Sie ersetzen möchten, und jeder Eigenschaftswert ist die Zeichenfolge, durch die er ersetzt werden soll. Beachten Sie:
    - Die zu ersetzenden URL-Abschnitte müssen in einem der folgenden Formate vorliegen:
      - `${string}`
      - `%%string%%`
    - Wenn ein URL-Abschnitt im korrekten Format vorliegt, aber der Abschnitt nicht in der URL gefunden wird, wird das zurückgegebene Versprechen dennoch erfüllt, aber es wird keine Ersetzung vorgenommen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - `UrnOrConfig` kein gültiges `FencedFrameConfig`-Objekt oder undurchsichtiger URN ist.
    - Einer der angegebenen Ersatzschlüssel nicht mit den erlaubten Formaten übereinstimmt.

## Beispiele

Der folgende Aufruf könnte verwendet werden, um einen undurchsichtigen URN zurückzugeben:

```js
const exampleURN = await navigator.runAdAuction({
  ...auctionConfig,
  resolveToConfig: false,
});
```

Sie können dann URL-Abschnitte mit einem `deprecatedReplaceInURN()`-Aufruf wie dem folgenden ersetzen:

```js
await navigator.deprecatedReplaceInURN(exampleURN, {
  "${foo}": "1",
  "${bar}": "2",
  "%%baz%%": "3",
});
```

Wenn die interne URL, die mit dem URN verknüpft ist, ursprünglich ist:

```http
https://example.com/a=${foo}&b=${bar}&c=%%baz%%
```

Wird sie nach dem Ersetzen zu:

```http
https://example.com/a=1&b=2&c=3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frame API](/de/docs/Web/API/Fenced_frame_API)
