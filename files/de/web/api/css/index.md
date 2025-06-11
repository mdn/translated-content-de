---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{APIRef("CSSOM")}}

Die **`CSS`**-Schnittstelle enthält nützliche, CSS-bezogene Methoden. Es werden keine Objekte mit dieser Schnittstelle implementiert: Sie enthält nur statische Methoden und ist daher eine utilitaristische Schnittstelle.

## Statische Eigenschaften

- [`CSS.highlights`](/de/docs/Web/API/CSS/highlights_static)
  - : Bietet Zugriff auf das `HighlightRegistry`, das verwendet wird, um beliebige Textbereiche mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) zu stylen.
- [`CSS.paintWorklet`](/de/docs/Web/API/CSS/paintWorklet_static) {{Experimental_Inline}} {{SecureContext_Inline}}
  - : Bietet Zugriff auf den Worklet, der für alle Klassen verantwortlich ist, die mit dem Zeichnen zu tun haben.

## Instanz-Eigenschaften

_Die CSS-Schnittstelle ist eine Dienstschnittstelle und es kann kein Objekt dieses Typs erstellt werden: Nur statische Eigenschaften sind darauf definiert._

## Statische Methoden

_Keine geerbten statischen Methoden._

- [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Registriert [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*), die Typprüfung, Standardwerte und Eigenschaften ermöglichen, die ihren Wert entweder erben oder nicht.
- [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Paar _Eigenschaft-Wert_ oder die Bedingung, die im Parameter angegeben ist, unterstützt wird.
- [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static)
  - : Kann verwendet werden, um einen String zu escapen, hauptsächlich zur Verwendung als Teil eines CSS-Selektors.
- [CSS-Fabrikfunktionen](/de/docs/Web/API/CSS/factory_functions_static)

  - : Kann verwendet werden, um eine neue [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit einem Wert der Parameterzahl der Einheiten des Namens der verwendeten Fabrikfunktionsmethode zurückzugeben.

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## Instanz-Methoden

_Die CSS-Schnittstelle ist eine Dienstschnittstelle und es kann kein Objekt dieses Typs erstellt werden: Nur statische Methoden sind darauf definiert._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
