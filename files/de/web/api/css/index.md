---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSSOM")}}

Die **`CSS`**-Schnittstelle umfasst nützliche, CSS-bezogene Methoden. Es werden keine Objekte mit dieser Schnittstelle implementiert: Sie enthält nur statische Methoden und ist daher eine utilitaristische Schnittstelle.

## Statische Eigenschaften

- {{DOMxRef("CSS/highlights_static", "CSS.highlights")}}
  - : Bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mithilfe der {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} zu stylen.
- {{DOMxRef("CSS/paintWorklet_static", "CSS.paintWorklet")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das Worklet, das für alle Klassen im Zusammenhang mit dem Malen verantwortlich ist.

## Instanz-Eigenschaften

_Die CSS-Schnittstelle ist eine Dienstschnittstelle und es können keine Objekte dieses Typs erstellt werden: Es sind nur statische Eigenschaften darauf definiert._

## Statische Methoden

_Keine geerbten statischen Methoden._

- {{DOMxRef("CSS/registerProperty_static", "CSS.registerProperty()")}}
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*), die eine Überprüfung des Eigenschaftstyps, Standardwerte und Eigenschaften ermöglichen, die ihren Wert erben oder nicht.
- {{DOMxRef("CSS/supports_static", "CSS.supports()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Paar _Eigenschaft-Wert_ oder die im Parameter angegebene Bedingung unterstützt wird.
- {{DOMxRef("CSS/escape_static", "CSS.escape()")}}
  - : Kann verwendet werden, um einen String zu maskieren, hauptsächlich für die Verwendung als Teil eines CSS-Selectors.
- [CSS Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)

  - : Kann verwendet werden, um ein neues [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit einem Wert des Parameterzahl in den Einheiten des Namens der verwendeten Fabrikfunktionen-Methode zurückzugeben.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanz-Methoden

_Die CSS-Schnittstelle ist eine Dienstschnittstelle und es können keine Objekte dieses Typs erstellt werden: Es sind nur statische Methoden darauf definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
