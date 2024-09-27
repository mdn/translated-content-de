---
title: ScreenDetailed
slug: Web/API/ScreenDetailed
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`ScreenDetailed`**-Interface der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert detaillierte Informationen über einen spezifischen Bildschirm, der dem Gerät des Benutzers zur Verfügung steht.

`ScreenDetailed`-Objekte können über die Eigenschaften [`ScreenDetails.screens`](/de/docs/Web/API/ScreenDetails/screens) und [`ScreenDetails.currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) zugegriffen werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Screen`](/de/docs/Web/API/Screen)._

- [`availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des verfügbaren Bildschirmbereichs darstellt.
- [`availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des verfügbaren Bildschirmbereichs darstellt.
- [`devicePixelRatio`](/de/docs/Web/API/ScreenDetailed/devicePixelRatio) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die das Gerät-Pixel-Verhältnis des Bildschirms darstellt.
- [`isInternal`](/de/docs/Web/API/ScreenDetailed/isInternal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob der Bildschirm intern zum Gerät gehört oder extern ist.
- [`isPrimary`](/de/docs/Web/API/ScreenDetailed/isPrimary) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der anzeigt, ob der Bildschirm als primärer Bildschirm des Betriebssystems (OS) festgelegt ist oder nicht.
- [`label`](/de/docs/Web/API/ScreenDetailed/label) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der eine beschreibende Bezeichnung für den Bildschirm liefert, z.B. "Eingebautes Retina-Display".
- [`left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linker Rand) des gesamten Bildschirmbereichs darstellt.
- [`top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (oberer Rand) des gesamten Bildschirmbereichs darstellt.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`Screen`](/de/docs/Web/API/Screen)._

- `change` {{experimental_inline}}
  - : Wird auf einem bestimmten Bildschirm ausgelöst, wenn sich eine Eigenschaft des Bildschirms ändert — Breite oder Höhe, verfügbare Breite oder verfügbare Höhe, Farbtiefe oder Ausrichtung, Bildschirmposition und verfügbare Bildschirmposition, Gerät-Pixel-Verhältnis, Bezeichnung oder Zuweisung des Bildschirms.

## Beispiele

Wenn [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) aufgerufen wird, wird der Benutzer um Erlaubnis gefragt, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Erlaubnis kann überprüft werden, indem [`Permissions.query()`](/de/docs/Web/API/Permissions/query) verwendet wird, um `window-management` abzufragen). Wenn die Erlaubnis erteilt wird, enthält das resultierende [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt `ScreenDetailed`-Objekte, die alle dem System des Benutzers zur Verfügung stehenden Bildschirme repräsentieren.

Das folgende Beispiel öffnet ein Fenster in der oberen linken Ecke des primären OS-Bildschirms:

```js
// Return ScreenDetails
const allScreens = await window.getScreenDetails();

// Return the primary screen ScreenDetailed object
const primaryScreenDetailed = allScreens.screens.find(
  (screenDetailed) => screenDetailed.isPrimary,
);

// Open a window in the top-left corner of the OS primary screen
window.open(
  "https://example.com",
  "_blank",
  `left=${primaryScreenDetailed.availLeft},
   top=${primaryScreenDetailed.availTop},
   width=200,
   height=200`,
);
```

> [!NOTE]
> Siehe [Multi-window learning environment](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel (siehe auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
