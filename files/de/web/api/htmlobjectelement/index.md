---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: f5af74a36ba658c85548b28c460079fa0e510668
---

{{ APIRef("HTML DOM") }}

Die **`HTMLObjectElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die sie durch Vererbung von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("object")}}-Elementen, die externe Ressourcen darstellen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.align`](/de/docs/Web/API/HTMLObjectElement/align) {{deprecated_inline}}
  - : Ein String, der eine aufgezählte Eigenschaft darstellt, die die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`.
- [`HTMLObjectElement.archive`](/de/docs/Web/API/HTMLObjectElement/archive) {{deprecated_inline}}
  - : Ein String, der das [`archive`](/de/docs/Web/HTML/Element/object#archive)-HTML-Attribut widerspiegelt und eine Liste von Archiven für Ressourcen dieses Objekts enthält.
- [`HTMLObjectElement.border`](/de/docs/Web/API/HTMLObjectElement/border) {{deprecated_inline}}
  - : Ein String, der das [`border`](/de/docs/Web/HTML/Element/object#border)-HTML-Attribut widerspiegelt und die Breite eines Rahmens um das Objekt herum angibt.
- [`HTMLObjectElement.code`](/de/docs/Web/API/HTMLObjectElement/code) {{deprecated_inline}}
  - : Ein String, der den Namen einer Applet-Klassendatei darstellt, die entweder die Unterklasse des Applets oder den Pfad zur Klasse einschließlich der Klassendatei selbst enthält.
- [`HTMLObjectElement.codeBase`](/de/docs/Web/API/HTMLObjectElement/codeBase) {{deprecated_inline}}
  - : Ein String, der das [`codebase`](/de/docs/Web/HTML/Element/object#codebase)-HTML-Attribut widerspiegelt und den Basis-Pfad angibt, um relative URIs aufzulösen.
- [`HTMLObjectElement.codeType`](/de/docs/Web/API/HTMLObjectElement/codeType) {{deprecated_inline}}
  - : Ein String, der das [`codetype`](/de/docs/Web/HTML/Element/object#codetype)-HTML-Attribut widerspiegelt und den Inhaltstyp der Daten angibt.
- [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das das aktive Dokument des verschachtelten Browsing-Kontexts des Objekt-Elements darstellt, falls vorhanden; andernfalls `null`.
- [`HTMLObjectElement.contentWindow`](/de/docs/Web/API/HTMLObjectElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das das Fenster-Proxy des verschachtelten Browsing-Kontexts des Objekt-Elements darstellt, falls vorhanden; andernfalls `null`.
- [`HTMLObjectElement.data`](/de/docs/Web/API/HTMLObjectElement/data)
  - : Gibt einen String zurück, der das [`data`](/de/docs/Web/HTML/Element/object#data)-HTML-Attribut widerspiegelt und die Adresse der Datenressource angibt.
- [`HTMLObjectElement.declare`](/de/docs/Web/API/HTMLObjectElement/declare) {{deprecated_inline}}
  - : Ein boolescher Wert, der das [`declare`](/de/docs/Web/HTML/Element/object#declare)-HTML-Attribut widerspiegelt und angibt, dass es sich hierbei um eine Deklaration, nicht um eine Instanziierung des Objekts handelt.
- [`HTMLObjectElement.form`](/de/docs/Web/API/HTMLObjectElement/form) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das den Formularbesitzer des Objekt-Elements darstellt, oder `null`, wenn es keinen gibt.
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
  - : Gibt einen String zurück, der das [`height`](/de/docs/Web/HTML/Element/object#height)-HTML-Attribut widerspiegelt und die angezeigte Höhe der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.hspace`](/de/docs/Web/API/HTMLObjectElement/hspace) {{deprecated_inline}}
  - : Ein `long`, das den horizontalen Raum in Pixeln um das Steuerelement herum darstellt.
- [`HTMLObjectElement.name`](/de/docs/Web/API/HTMLObjectElement/name)
  - : Gibt einen String zurück, der das [`name`](/de/docs/Web/HTML/Element/object#name)-HTML-Attribut widerspiegelt und den Namen des Browsing-Kontexts angibt.
- [`HTMLObjectElement.standby`](/de/docs/Web/API/HTMLObjectElement/standby) {{deprecated_inline}}
  - : Ein String, der das [`standby`](/de/docs/Web/HTML/Element/object#standby)-HTML-Attribut widerspiegelt und eine Nachricht angibt, die während des Ladens des Objekts angezeigt wird.
- [`HTMLObjectElement.type`](/de/docs/Web/API/HTMLObjectElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/object#type)-HTML-Attribut widerspiegelt und den MIME-Typ der Ressource angibt.
- [`HTMLObjectElement.useMap`](/de/docs/Web/API/HTMLObjectElement/useMap) {{deprecated_inline}}
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Element/object#usemap)-HTML-Attribut widerspiegelt und ein {{HTMLElement("map")}}-Element angibt, das verwendet werden soll.
- [`HTMLObjectElement.validationMessage`](/de/docs/Web/API/HTMLObjectElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`) oder es seine Beschränkungen erfüllt.
- [`HTMLObjectElement.validity`](/de/docs/Web/API/HTMLObjectElement/validity) {{ReadOnlyInline}}
  - : Gibt einen [`ValidityState`](/de/docs/Web/API/ValidityState) zurück, der die Validitätszustände enthält, in denen sich dieses Element befindet.
- [`HTMLObjectElement.vspace`](/de/docs/Web/API/HTMLObjectElement/vspace) {{deprecated_inline}}
  - : Ein `long`, der den vertikalen Raum in Pixeln um das Steuerelement herum darstellt.
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/object#width)-HTML-Attribut widerspiegelt und die angezeigte Breite der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. Immer `false` für `HTMLObjectElement`-Objekte.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente nie Kandidaten für die Beschränkungsvalidierung sind.
- [`HTMLObjectElement.getSVGDocument()`](/de/docs/Web/API/HTMLObjectElement/getSVGDocument)
  - : Gibt das eingebettete SVG als [`Document`](/de/docs/Web/API/Document) zurück.
- [`HTMLObjectElement.reportValidity()`](/de/docs/Web/API/HTMLObjectElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}}-Elemente nie Kandidaten für die Beschränkungsvalidierung sind.
- [`HTMLObjectElement.setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Validitätsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Validitätsfehler und validiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("object")}}
