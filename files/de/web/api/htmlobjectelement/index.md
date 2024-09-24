---
title: HTMLObjektElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLObjectElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die sie durch Vererbung von der {{domxref("HTMLElement")}}-Schnittstelle ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("object")}}-Elementen, die externe Ressourcen darstellen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLObjectElement.align")}} {{deprecated_inline}}
  - : Ein Zeichenfolgenwert, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung des Inhalts des Elements im Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`.
- {{domxref("HTMLObjectElement.archive")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`archive`](/de/docs/Web/HTML/Element/object#archive) widerspiegelt und eine Liste von Archiven für Ressourcen dieses Objekts enthält.
- {{domxref("HTMLObjectElement.border")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`border`](/de/docs/Web/HTML/Element/object#border) widerspiegelt und die Breite eines Rahmens um das Objekt angibt.
- {{domxref("HTMLObjectElement.code")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die den Namen einer Applet-Klassendatei darstellt, die entweder die Unterklasse des Applets oder den Pfad zur Klasse einschließlich der Klassendatei selbst enthält.
- {{domxref("HTMLObjectElement.codeBase")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`codebase`](/de/docs/Web/HTML/Element/object#codebase) widerspiegelt und den Basispfad zum Auflösen relativer URIs angibt.
- {{domxref("HTMLObjectElement.codeType")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`codetype`](/de/docs/Web/HTML/Element/object#codetype) widerspiegelt und den Inhaltstyp der Daten angibt.
- {{domxref("HTMLObjectElement.contentDocument")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("Document")}} zurück, das das aktive Dokument des verschachtelten Browsing-Kontextes des Objekts darstellt, falls vorhanden; andernfalls `null`.
- {{domxref("HTMLObjectElement.contentWindow")}} {{ReadOnlyInline}}
  - : Gibt einen {{glossary("WindowProxy")}} zurück, der das Fenster-Proxy des verschachtelten Browsing-Kontextes des Objekts darstellt, falls vorhanden; andernfalls `null`.
- {{domxref("HTMLObjectElement.data")}}
  - : Gibt eine Zeichenfolge zurück, die das HTML-Attribut [`data`](/de/docs/Web/HTML/Element/object#data) widerspiegelt und die Adresse der Ressourcendaten angibt.
- {{domxref("HTMLObjectElement.declare")}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das HTML-Attribut [`declare`](/de/docs/Web/HTML/Element/object#declare) widerspiegelt und angibt, dass es sich um eine Deklaration und nicht um eine Instanziierung des Objekts handelt.
- {{domxref("HTMLObjectElement.form")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("HTMLFormElement")}} zurück, das den Formulareigner des Objekt-Elements darstellt, oder `null`, wenn es keinen gibt.
- {{domxref("HTMLObjectElement.height")}}
  - : Gibt eine Zeichenfolge zurück, die das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/object#height) widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixel angibt.
- {{domxref("HTMLObjectElement.hspace")}} {{deprecated_inline}}
  - : Ein `long`, der den horizontalen Raum in Pixeln um das Steuerelement darstellt.
- {{domxref("HTMLObjectElement.name")}}
  - : Gibt eine Zeichenfolge zurück, die das HTML-Attribut [`name`](/de/docs/Web/HTML/Element/object#name) widerspiegelt und den Namen des Browsing-Kontextes angibt.
- {{domxref("HTMLObjectElement.standby")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`standby`](/de/docs/Web/HTML/Element/object#standby) widerspiegelt und eine Nachricht angibt, die während des Ladens des Objekts angezeigt wird.
- {{domxref("HTMLObjectElement.type")}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`type`](/de/docs/Web/HTML/Element/object#type) widerspiegelt und den MIME-Typ der Ressource angibt.
- {{domxref("HTMLObjectElement.useMap")}} {{deprecated_inline}}
  - : Eine Zeichenfolge, die das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Element/object#usemap) widerspiegelt und ein {{HTMLElement("map")}}-Element angibt, das verwendet werden soll.
- {{domxref("HTMLObjectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Diese ist leer, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist (`willValidate` ist `false`) oder wenn es seine Einschränkungen erfüllt.
- {{domxref("HTMLObjectElement.validity")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("ValidityState")}} mit den Gültigkeitszuständen zurück, in denen sich dieses Element befindet.
- {{domxref("HTMLObjectElement.vspace")}} {{deprecated_inline}}
  - : Ein `long`, der den horizontalen Raum in Pixeln um das Steuerelement darstellt.
- {{domxref("HTMLObjectElement.width")}}
  - : Gibt eine Zeichenfolge zurück, die das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/object#width) widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixel angibt.
- {{domxref("HTMLObjectElement.willValidate")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Immer `false` für `HTMLObjectElement`-Objekte.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLObjectElement.checkValidity()")}}
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die Einschränkungsvalidierung sind.
- {{domxref("HTMLObjectElement.reportValidity()")}}
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die Einschränkungsvalidierung sind.
- {{domxref("HTMLObjectElement.setCustomValidity()")}}
  - : Setzt eine benutzerdefinierte Gültigkeitsnachricht für das Element. Wenn diese Nachricht nicht leer ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und ist nicht gültig.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("object")}}
