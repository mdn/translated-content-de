---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM")}}

Das **`CSS`**-Interface enthält nützliche Methoden im Zusammenhang mit CSS. Es gibt keine Objekte mit diesem Interface: Es enthält nur statische Methoden und ist daher ein Utilitätsinterface.

## Statische Eigenschaften

- [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)
  - : Bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mithilfe der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.
- [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das Worklet, das für alle Klassen im Zusammenhang mit dem Malen verantwortlich ist.

## Instanz-Eigenschaften

_Das CSS-Interface ist ein Utilitätsinterface und es kann kein Objekt dieses Typs erstellt werden: Nur statische Eigenschaften sind darauf definiert._

## Statische Methoden

_Keine geerbten statischen Methoden._

- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und ermöglicht die Überprüfung von Eigenschaftstypen, Standardwerten und Eigenschaften, die ihren Wert erben oder nicht.
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Paar _Eigenschaft-Wert_ oder die Bedingung, die im Parameter übergeben wird, unterstützt wird.
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
  - : Kann verwendet werden, um einen String zu maskieren, hauptsächlich zur Verwendung als Teil eines CSS-Selektors.
- [CSS Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static)

  - : Kann verwendet werden, um einen neuen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit einem Wert in der angegebenen Anzahl der Einheiten des Methodennamens der Factory-Funktion zurückzugeben.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanz-Methoden

_Das CSS-Interface ist ein Utilitätsinterface und es kann kein Objekt dieses Typs erstellt werden: Nur statische Methoden sind darauf definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
