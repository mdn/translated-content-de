---
title: ScreenDetailed
slug: Web/API/ScreenDetailed
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`ScreenDetailed`**-Interface der [Window Management API](/de/docs/Web/API/Window_Management_API) repräsentiert detaillierte Informationen über einen spezifischen Bildschirm, der dem Gerät des Nutzers zur Verfügung steht.

`ScreenDetailed`-Objekte können über die Eigenschaften [`ScreenDetails.screens`](/de/docs/Web/API/ScreenDetails/screens) und [`ScreenDetails.currentScreen`](/de/docs/Web/API/ScreenDetails/currentScreen) abgerufen werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Screen`](/de/docs/Web/API/Screen)._

- [`availLeft`](/de/docs/Web/API/ScreenDetailed/availLeft) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des verfügbaren Bildschirmbereichs darstellt.
- [`availTop`](/de/docs/Web/API/ScreenDetailed/availTop) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des verfügbaren Bildschirmbereichs darstellt.
- [`devicePixelRatio`](/de/docs/Web/API/ScreenDetailed/devicePixelRatio) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die das Geräte-Pixelverhältnis des Bildschirms repräsentiert.
- [`isInternal`](/de/docs/Web/API/ScreenDetailed/isInternal) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der anzeigt, ob der Bildschirm intern für das Gerät oder extern ist.
- [`isPrimary`](/de/docs/Web/API/ScreenDetailed/isPrimary) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der anzeigt, ob der Bildschirm als primärer Bildschirm des Betriebssystems (OS) festgelegt ist oder nicht.
- [`label`](/de/docs/Web/API/ScreenDetailed/label) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der eine beschreibende Bezeichnung für den Bildschirm bereitstellt, zum Beispiel "Eingebautes Retina Display".
- [`left`](/de/docs/Web/API/ScreenDetailed/left) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die x-Koordinate (linke Kante) des gesamten Bildschirmbereichs darstellt.
- [`top`](/de/docs/Web/API/ScreenDetailed/top) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zahl, die die y-Koordinate (obere Kante) des gesamten Bildschirmbereichs darstellt.

## Ereignisse

_Erbt Ereignisse von seinem Elternteil, [`Screen`](/de/docs/Web/API/Screen)._

- `change` {{experimental_inline}}
  - : Wird auf einem spezifischen Bildschirm ausgelöst, wenn sich eine Eigenschaft des Bildschirms ändert – Breite oder Höhe, verfügbare Breite oder verfügbare Höhe, Farbtiefe oder Ausrichtung, Bildschirmposition und verfügbare Bildschirmposition, Geräte-Pixelverhältnis, Bezeichnung oder Bildschirmzuweisung.

## Beispiele

Wenn [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) aufgerufen wird, wird der Nutzer um Erlaubnis gebeten, Fenster auf all seinen Bildschirmen zu verwalten (der Status dieser Berechtigung kann mit [`Permissions.query()`](/de/docs/Web/API/Permissions/query) abgefragt werden, um `window-management` zu überprüfen). Erteilt der Nutzer die Erlaubnis, enthält das resultierende [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt `ScreenDetailed`-Objekte, die alle dem System des Nutzers zur Verfügung stehenden Bildschirme repräsentieren.

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
> Sehen Sie sich das [Mehrfenster-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) für ein vollständiges Beispiel an (sehen Sie sich auch den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api) an).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
