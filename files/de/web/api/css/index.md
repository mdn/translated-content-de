---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("CSSOM")}}

Das **`CSS`**-Interface enthält nützliche CSS-bezogene Methoden. Es gibt keine Objekte, die dieses Interface implementieren: Es enthält ausschließlich statische Methoden und ist damit ein Hilfsinterface.

## Statische Eigenschaften

- [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static) {{ReadOnlyInline}}
  - : Ermöglicht den Zugriff auf die `HighlightRegistry`, mit der sich beliebige Textbereiche mithilfe der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestalten lassen.
- [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) {{ReadOnlyInline}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Ermöglicht den Zugriff auf das Worklet, das für alle Klassen im Zusammenhang mit dem Zeichnen zuständig ist.

## Instanzeigenschaften

_Das CSS-Interface ist ein Hilfsinterface; es kann kein Objekt dieses Typs erstellt werden. Für das Interface sind nur statische Eigenschaften definiert._

## Statische Methoden

_Keine geerbten statischen Methoden._

- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und ermöglicht damit die Typprüfung von Eigenschaften, Standardwerte sowie die Festlegung, ob Eigenschaften ihren Wert erben.
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das als Parameter übergebene _Eigenschaft-Wert_-Paar beziehungsweise die übergebene Bedingung unterstützt wird.
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
  - : Kann verwendet werden, um einen String zu escapen, insbesondere für die Verwendung als Teil eines CSS-Selektors.
- [CSS-Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static)
  - : Können verwendet werden, um einen neuen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurückzugeben. Sein Wert entspricht dem übergebenen Zahlenwert in der Einheit, die durch den Namen der verwendeten Factory-Funktion angegeben wird.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanzmethoden

_Das CSS-Interface ist ein Hilfsinterface; es kann kein Objekt dieses Typs erstellt werden. Für das Interface sind nur statische Methoden definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
