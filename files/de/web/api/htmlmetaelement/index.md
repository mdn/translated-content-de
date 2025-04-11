---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLMetaElement`** Schnittstelle enthält beschreibende Metadaten über ein Dokument, die in HTML als [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta) Elemente bereitgestellt werden. Diese Schnittstelle erbt alle Eigenschaften und Methoden, die in der [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle beschrieben sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- {{HTMLElement("meta#charset")}}
  - : Die Zeichenkodierung für ein HTML-Dokument.
- [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)
  - : Der 'Wert'-Teil der Name-Wert-Paare der Dokument-Metadaten.
- [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv)
  - : Der Name der Pragma-Direktive, des HTTP-Antwort-Headers, für ein Dokument.
- [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)
  - : Der Medienkontext für eine `theme-color` Metadateneigenschaft.
- [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)
  - : Der 'Name'-Teil der Name-Wert-Paare, die die benannten Metadaten eines Dokuments definieren.
- [`HTMLMetaElement.scheme`](/de/docs/Web/API/HTMLMetaElement/scheme) {{deprecated_inline}}
  - : Definiert das Schema des Werts im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content) Attribut. Dies ist veraltet und sollte auf neuen Webseiten nicht verwendet werden.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

Die folgenden zwei Beispiele zeigen einen allgemeinen Ansatz zur Verwendung der `HTMLMetaElement` Schnittstelle. Für spezifische Beispiele siehe die Seiten für die einzelnen Eigenschaften wie in der [Instanzeigenschaften](#instanzeigenschaften) Sektion oben beschrieben.

### Festlegung der Seitenspiegelungs-Metadaten

Das folgende Beispiel erstellt ein neues `<meta>` Element mit einem `name` Attribut, das auf [`description`](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist. Das `content` Attribut setzt eine Beschreibung des Dokuments und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Festlegung der Viewport-Metadaten

Das folgende Beispiel zeigt, wie ein neues `<meta>` Element mit einem `name` Attribut erstellt wird, das auf [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name#standard_metadata_names_defined_in_other_specifications) gesetzt ist. Das `content` Attribut legt die Viewport-Größe fest und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

Für weitere Informationen zur Festlegung des Viewports siehe [Grundlagen des Viewports](/de/docs/Web/HTML/Guides/Viewport_meta_element#viewport_basics).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meta")}}
