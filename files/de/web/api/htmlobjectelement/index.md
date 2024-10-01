---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ APIRef("HTML DOM") }}

Das **`HTMLObjectElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces, das es ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation des {{HTMLElement("object")}}-Elements, das externe Ressourcen darstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.align`](/de/docs/Web/API/HTMLObjectElement/align) {{deprecated_inline}}
  - : Ein String, der eine enumerierte Eigenschaft darstellt, die die Ausrichtung der Inhalte des Elements im Verhältnis zum umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`.
- [`HTMLObjectElement.archive`](/de/docs/Web/API/HTMLObjectElement/archive) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`archive`](/de/docs/Web/HTML/Element/object#archive) widerspiegelt und eine Liste von Archiven für Ressourcen dieses Objekts enthält.
- [`HTMLObjectElement.border`](/de/docs/Web/API/HTMLObjectElement/border) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`border`](/de/docs/Web/HTML/Element/object#border) widerspiegelt und die Breite eines Rahmens um das Objekt angibt.
- [`HTMLObjectElement.code`](/de/docs/Web/API/HTMLObjectElement/code) {{deprecated_inline}}
  - : Ein String, der den Namen einer Applet-Class-Datei darstellt und entweder die Subclass des Applets oder den Pfad zur Class einschließlich der Class-Datei selbst enthält.
- [`HTMLObjectElement.codeBase`](/de/docs/Web/API/HTMLObjectElement/codeBase) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`codebase`](/de/docs/Web/HTML/Element/object#codebase) widerspiegelt und den Basis-Pfad zur Auflösung relativer URIs angibt.
- [`HTMLObjectElement.codeType`](/de/docs/Web/API/HTMLObjectElement/codeType) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`codetype`](/de/docs/Web/HTML/Element/object#codetype) widerspiegelt und den Inhaltstyp der Daten angibt.
- [`HTMLObjectElement.contentDocument`](/de/docs/Web/API/HTMLObjectElement/contentDocument) {{ReadOnlyInline}}
  - : Gibt ein [`Document`](/de/docs/Web/API/Document) zurück, das das aktive Dokument des eingebetteten Browsing-Kontextes des Objekts darstellt, falls vorhanden; ansonsten `null`.
- [`HTMLObjectElement.contentWindow`](/de/docs/Web/API/HTMLObjectElement/contentWindow) {{ReadOnlyInline}}
  - : Gibt ein {{Glossary("WindowProxy", "WindowProxy")}} zurück, das die Fenster-Proxies des eingebetteten Browsing-Kontextes des Objekts darstellt, falls vorhanden; ansonsten `null`.
- [`HTMLObjectElement.data`](/de/docs/Web/API/HTMLObjectElement/data)
  - : Gibt einen String zurück, der das HTML-Attribut [`data`](/de/docs/Web/HTML/Element/object#data) widerspiegelt und die Adresse der Datenressource angibt.
- [`HTMLObjectElement.declare`](/de/docs/Web/API/HTMLObjectElement/declare) {{deprecated_inline}}
  - : Ein boolescher Wert, der das HTML-Attribut [`declare`](/de/docs/Web/HTML/Element/object#declare) widerspiegelt und angibt, dass dies eine Deklaration, nicht eine Instanziierung des Objekts ist.
- [`HTMLObjectElement.form`](/de/docs/Web/API/HTMLObjectElement/form) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) zurück, das den Formular-Eigentümer des Objekts darstellt, oder `null`, wenn keiner vorhanden ist.
- [`HTMLObjectElement.height`](/de/docs/Web/API/HTMLObjectElement/height)
  - : Gibt einen String zurück, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/object#height) widerspiegelt und die dargestellte Höhe der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.hspace`](/de/docs/Web/API/HTMLObjectElement/hspace) {{deprecated_inline}}
  - : Ein `long`, der den horizontalen Abstand in Pixeln um die Steuerung herum darstellt.
- [`HTMLObjectElement.name`](/de/docs/Web/API/HTMLObjectElement/name)
  - : Gibt einen String zurück, der das HTML-Attribut [`name`](/de/docs/Web/HTML/Element/object#name) widerspiegelt und den Namen des Browsing-Kontextes angibt.
- [`HTMLObjectElement.standby`](/de/docs/Web/API/HTMLObjectElement/standby) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`standby`](/de/docs/Web/HTML/Element/object#standby) widerspiegelt und eine Nachricht angibt, die angezeigt wird, während das Objekt geladen wird.
- [`HTMLObjectElement.type`](/de/docs/Web/API/HTMLObjectElement/type)
  - : Ein String, der das HTML-Attribut [`type`](/de/docs/Web/HTML/Element/object#type) widerspiegelt und den MIME-Typ der Ressource angibt.
- [`HTMLObjectElement.useMap`](/de/docs/Web/API/HTMLObjectElement/useMap) {{deprecated_inline}}
  - : Ein String, der das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Element/object#usemap) widerspiegelt und ein {{HTMLElement("map")}}-Element zur Verwendung angibt.
- [`HTMLObjectElement.validationMessage`](/de/docs/Web/API/HTMLObjectElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine lokalisierte Nachricht darstellt, die die Gültigkeitsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Beschränkungsvalidierung ist (`willValidate` ist `false`), oder sie ihre Beschränkungen erfüllt.
- [`HTMLObjectElement.validity`](/de/docs/Web/API/HTMLObjectElement/validity) {{ReadOnlyInline}}
  - : Gibt ein [`ValidityState`](/de/docs/Web/API/ValidityState) mit den Gültigkeitszuständen zurück, in denen sich dieses Element befindet.
- [`HTMLObjectElement.vspace`](/de/docs/Web/API/HTMLObjectElement/vspace) {{deprecated_inline}}
  - : Ein `long`, der den horizontalen Abstand in Pixeln um die Steuerung herum darstellt.
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
  - : Ein String, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/object#width) widerspiegelt und die dargestellte Breite der Ressource in CSS-Pixeln angibt.
- [`HTMLObjectElement.willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. Immer `false` für `HTMLObjectElement` Objekte.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLObjectElement.checkValidity()`](/de/docs/Web/API/HTMLObjectElement/checkValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}} Elemente nie Kandidaten für die Beschränkungsvalidierung sind.
- [`HTMLObjectElement.reportValidity()`](/de/docs/Web/API/HTMLObjectElement/reportValidity)
  - : Gibt immer `true` zurück, da {{HTMLElement("object")}} Elemente nie Kandidaten für die Beschränkungsvalidierung sind.
- [`HTMLObjectElement.setCustomValidity()`](/de/docs/Web/API/HTMLObjectElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Gültigkeitsmeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und validiert nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("object")}}
