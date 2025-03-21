---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("CSSOM")}}

Das **`CSS`**-Interface enthält nützliche CSS-bezogene Methoden. Es gibt keine Objekte mit diesem Interface: Es enthält nur statische Methoden und ist daher ein utilitäres Interface.

## Statische Eigenschaften

- [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)
  - : Bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.
- [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf das Worklet, das für alle Klassen verantwortlich ist, die mit dem Malen zu tun haben.

## Instanzeigenschaften

_Das CSS-Interface ist ein Dienstleistungsinterface und es kann kein Objekt dieses Typs erstellt werden: Es sind nur statische Eigenschaften darauf definiert._

## Statische Methoden

_Keine geerbten statischen Methoden_.

- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und ermöglicht das Prüfen von Eigenschaftstypen, Standardwerten und Eigenschaften, die ihren Wert erben oder nicht.
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Paar _Eigenschaft-Wert_ oder die Bedingung, die im Parameter gegeben ist, unterstützt wird.
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
  - : Kann verwendet werden, um einen String zu escapen, hauptsächlich für die Verwendung als Teil eines CSS-Selektors.
- [CSS-Factory-Funktionen](/de/docs/Web/API/CSS/factory_functions_static)

  - : Kann verwendet werden, um einen neuen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit einem Wert der angegebenen Anzahl von Einheiten des Namens der verwendeten Factory-Funktionsmethode zurückzugeben.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanzmethoden

_Das CSS-Interface ist ein Dienstleistungsinterface und es kann kein Objekt dieses Typs erstellt werden: Es sind nur statische Methoden darauf definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
