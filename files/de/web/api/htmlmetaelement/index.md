---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{ APIRef("HTML DOM") }}

Die **`HTMLMetaElement`**-Schnittstelle enthält beschreibende Metadaten über ein Dokument, die in HTML als [`<meta>`](/de/docs/Web/HTML/Element/meta)-Elemente bereitgestellt werden. Diese Schnittstelle erbt alle in der {{domxref("HTMLElement")}}-Schnittstelle beschriebenen Eigenschaften und Methoden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{HTMLElement("meta#charset")}}
  - : Die Zeichenkodierung für ein HTML-Dokument.
- {{domxref("HTMLMetaElement.content")}}
  - : Der 'Wert'-Teil der Name-Wert-Paare der Dokumenten-Metadaten.
- {{domxref("HTMLMetaElement.httpEquiv")}}
  - : Der Name der Pragma-Direktive, des HTTP-Response-Headers, für ein Dokument.
- {{domxref("HTMLMetaElement.media")}}
  - : Der Medienkontext für eine `theme-color` Metadateneigenschaft.
- {{domxref("HTMLMetaElement.name")}}
  - : Der 'Name'-Teil der Name-Wert-Paare, die die benannten Metadaten eines Dokuments definieren.
- {{domxref("HTMLMetaElement.scheme")}} {{deprecated_inline}}
  - : Definiert das Schema des Werts im {{domxref("HTMLMetaElement.content")}}-Attribut. Dies ist veraltet und sollte auf neuen Webseiten nicht verwendet werden.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Beispiele

Die folgenden zwei Beispiele zeigen einen allgemeinen Ansatz zur Verwendung der `HTMLMetaElement`-Schnittstelle. Für spezifische Beispiele sehen Sie bitte auf den Seiten der einzelnen Eigenschaften nach, wie in der [Instanz-Eigenschaften](#instanz-eigenschaften) Sektion oben beschrieben.

### Festlegen der Seitenbeschreibungs-Metadaten

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`description`](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist. Das `content`-Attribut setzt eine Beschreibung des Dokuments und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Festlegen der Viewport-Metadaten

Das folgende Beispiel zeigt, wie man ein neues `<meta>`-Element mit einem `name`-Attribut erstellt, das auf [`viewport`](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications) gesetzt ist.
Das `content`-Attribut legt die Viewport-Größe fest und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

Für weitere Informationen zur Einstellung des Viewports, siehe [Viewport-Grundlagen](/de/docs/Web/HTML/Viewport_meta_tag#viewport_basics).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meta")}}
