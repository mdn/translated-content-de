---
title: ScreenDetailed
slug: Web/API/ScreenDetailed
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`ScreenDetailed`**-Schnittstelle der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert detaillierte Informationen über einen bestimmten Bildschirm, der dem Gerät des Benutzers zur Verfügung steht.

`ScreenDetailed`-Objekte können über die Eigenschaften {{domxref("ScreenDetails.screens")}} und {{domxref("ScreenDetails.currentScreen")}} abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{DOMxRef("Screen")}}._

- {{domxref("ScreenDetailed.availLeft", "availLeft")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des verfügbaren Bildschirmbereichs darstellt.
- {{domxref("ScreenDetailed.availTop", "availTop")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs darstellt.
- {{domxref("ScreenDetailed.devicePixelRatio", "devicePixelRatio")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die das Device-Pixel-Verhältnis des Bildschirms repräsentiert.
- {{domxref("ScreenDetailed.isInternal", "isInternal")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der angibt, ob der Bildschirm intern zum Gerät ist oder extern.
- {{domxref("ScreenDetailed.isPrimary", "isPrimary")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der angibt, ob der Bildschirm als primärer Bildschirm des Betriebssystems eingestellt ist oder nicht.
- {{domxref("ScreenDetailed.label", "label")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der eine beschreibende Bezeichnung für den Bildschirm bietet, zum Beispiel "Built-in Retina Display".
- {{domxref("ScreenDetailed.left", "left")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des gesamten Bildschirmbereichs darstellt.
- {{domxref("ScreenDetailed.top", "top")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs darstellt.

## Ereignisse

_Erbt Ereignisse von ihrem Elternteil, {{DOMxRef("Screen")}}._

- `change` {{experimental_inline}}
  - : Wird auf einem bestimmten Bildschirm ausgelöst, wenn sich eine Eigenschaft des Bildschirms ändert — Breite oder Höhe, verfügbare Breite oder verfügbare Höhe, Farbtiefe oder Orientierung, Position des Bildschirms und verfügbare Position des Bildschirms, Device-Pixel-Verhältnis, Bezeichnung oder Zuweisung des Bildschirms.

## Beispiele

Wenn {{domxref("Window.getScreenDetails()")}} aufgerufen wird, wird der Benutzer um Erlaubnis gefragt, Fenster auf allen seinen Bildschirmen zu verwalten (der Status dieser Erlaubnis kann mithilfe von {{domxref("Permissions.query()")}} abgefragt werden, um `window-management` zu überprüfen). Wenn die Erlaubnis erteilt wird, enthält das resultierende {{domxref("ScreenDetails")}}-Objekt `ScreenDetailed`-Objekte, die alle Bildschirme repräsentieren, die dem System des Benutzers zur Verfügung stehen.

Das folgende Beispiel öffnet ein Fenster in der oberen linken Ecke des primären Betriebssystembildschirms:

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
