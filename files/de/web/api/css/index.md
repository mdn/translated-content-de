---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{APIRef("CSSOM")}}

Die **`CSS`**-Schnittstelle enthält nützliche Methoden im Zusammenhang mit CSS. Es werden keine Objekte mit dieser Schnittstelle implementiert: Sie enthält nur statische Methoden und ist daher eine utilitaristische Schnittstelle.

## Statische Eigenschaften

- [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)
  - : Bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.
- [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das Worklet, das für alle Klassen im Zusammenhang mit der Malerei verantwortlich ist.

## Instanz-Eigenschaften

_Die CSS-Schnittstelle ist eine Dienstschnittstelle, und es kann kein Objekt dieses Typs erstellt werden: Nur statische Eigenschaften sind darauf definiert._

## Statische Methoden

_Keine geerbten statischen Methoden_.

- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*), die eine Typüberprüfung der Eigenschaften, Standardwerte und Eigenschaften ermöglichen, deren Wert vererbt oder nicht vererbt wird.
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Paar _Eigenschaft-Wert_ oder die Bedingung, die im Parameter angegeben ist, unterstützt wird.
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
  - : Kann verwendet werden, um einen String zu maskieren, hauptsächlich für die Verwendung als Teil eines CSS-Selektors.
- [CSS-Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)
  - : Können verwendet werden, um einen neuen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit einem Wert der Parameternummer der Einheiten des Namens der verwendeten Fabrikfunktion zurückzugeben.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanz-Methoden

_Die CSS-Schnittstelle ist eine Dienstschnittstelle, und es kann kein Objekt dieses Typs erstellt werden: Nur statische Methoden sind darauf definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
