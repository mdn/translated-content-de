---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLObjectElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die sie durch Vererbung von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung des {{HTMLElement("object")}}-Elements, das externe Ressourcen repräsentiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.align`](/de/docs/Web/API/HTMLObjectElement/align) {{deprecated_inline}}
  - : Ein String, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`.
- [`HTMLObjectElement.archive`](/de/docs/Web/API/HTMLObjectElement/archive) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`archive`](/de/docs/Web/HTML/Element/object#archive) widerspiegelt, das eine Liste von Archiven für Ressourcen für dieses Objekt enthält.
- [`HTMLObjectElement.border`](/de/docs/Web/API/HTMLObjectElement/border) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`border`](/de/docs/Web/HTML/Element/object#border) widerspiegelt und die Breite eines Rahmens um das Objekt angibt.
- [`HTMLObjectElement.code`](/de/docs/Web/API/HTMLObjectElement/code) {{deprecated_inline}}
  - : Ein String, der den Namen einer Applet-Klassendatei darstellt und entweder die Unterklasse des Applets oder den Pfad zur Klasse, einschließlich der Klassendatei selbst, enthält.
- [`HTMLObjectElement.codeBase`](/de/docs/Web/API/HTMLObjectElement/codeBase) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`codebase`](/de/docs/Web/HTML/Element/object#codebase) widerspiegelt und den Basispfad angibt, der zur Auflösung relativer URIs verwendet wird.
- [`HTMLObjectElement.codeType`](/de/docs/Web/API/HTMLObjectElement/codeType) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`codetype`](/de/docs/Web/HTML/Element/object#codetype) widerspiegelt und den Inhaltstyp der Daten angibt.
- [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das das aktive Dokument des verschachtelten Browsing-Kontexts des Objekts darstellt, falls vorhanden; andernfalls `null`.
- [`HTMLObjectElement.contentWindow`](/de/docs/Web/API/HTMLObjectElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt einen [WindowProxy](/de/docs/Glossary/WindowProxy) zurück, der den Fensterproxy des verschachtelten Browsing-Kontexts des Objekts darstellt, falls vorhanden; andernfalls `null`.
- [`HTMLObjectElement.data`](/de/docs/Web/API/HTMLObjectElement/data)
  - : Gibt einen String zurück, der das HTML-Attribut [`data`](/de/docs/Web/HTML/Element/object#data) widerspiegelt und die Adresse der Daten einer Ressource angibt.
- [`HTMLObjectElement.declare`](/de/docs/Web/API/HTMLObjectElement/declare) {{deprecated_inline}}
  - : Ein boolescher Wert, der das HTML-Attribut [`declare`](/de/docs/Web/HTML/Element/object#declare) widerspiegelt und angibt, dass dies eine Deklaration und keine Instanziierung des Objekts ist.
- [`HTMLObjectElement.form`](/de/docs/Web/API/HTMLObjectElement/form) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das den Formulareigentümer des Objektelements darstellt, oder null, wenn es keinen gibt.
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
  - : Gibt einen String zurück, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/object#height) widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.hspace`](/de/docs/Web/API/HTMLObjectElement/hspace) {{deprecated_inline}}
  - : Ein `long`, das den horizontalen Raum in Pixeln um die Steuerung herum darstellt.
- [`HTMLObjectElement.name`](/de/docs/Web/API/HTMLObjectElement/name)
  - : Gibt einen String zurück, der das HTML-Attribut [`name`](/de/docs/Web/HTML/Element/object#name) widerspiegelt und den Namen des Browsing-Kontexts angibt.
- [`HTMLObjectElement.standby`](/de/docs/Web/API/HTMLObjectElement/standby) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`standby`](/de/docs/Web/HTML/Element/object#standby) widerspiegelt und eine Nachricht angibt, die während des Ladens des Objekts angezeigt wird.
- [`HTMLObjectElement.type`](/de/docs/Web/API/HTMLObjectElement/type)
  - : Ein String, der das HTML-Attribut [`type`](/de/docs/Web/HTML/Element/object#type) widerspiegelt und den MIME-Typ der Ressource angibt.
- [`HTMLObjectElement.useMap`](/de/docs/Web/API/HTMLObjectElement/useMap) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Element/object#usemap) widerspiegelt und ein {{HTMLElement("map")}}-Element angibt, das verwendet werden soll.
- [`HTMLObjectElement.validationMessage`](/de/docs/Web/API/HTMLObjectElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Beschränkungsüberprüfung ist (`willValidate` ist `false`) oder ihre Beschränkungen erfüllt.
- [`HTMLObjectElement.validity`](/de/docs/Web/API/HTMLObjectElement/validity) {{ReadOnlyInline}}
  - : Gibt einen [`ValidityState`](/de/docs/Web/API/ValidityState) mit den Gültigkeitszuständen zurück, in denen sich dieses Element befindet.
- [`HTMLObjectElement.vspace`](/de/docs/Web/API/HTMLObjectElement/vspace) {{deprecated_inline}}
  - : Ein `long`, das den horizontalen Raum in Pixeln um die Steuerung herum darstellt.
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
  - : Ein String, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/object#width) widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein Kandidat für die Beschränkungsüberprüfung ist. Immer `false` für `HTMLObjectElement`-Objekte.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die Beschränkungsüberprüfung sind.
- [`HTMLObjectElement.reportValidity()`](/de/docs/Web/API/HTMLObjectElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente niemals Kandidaten für die Beschränkungsüberprüfung sind.
- [`HTMLObjectElement.setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Gültigkeitsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("object")}}
