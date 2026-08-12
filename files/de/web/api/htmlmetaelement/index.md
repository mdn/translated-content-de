---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{ APIRef("HTML DOM") }}

Das **`HTMLMetaElement`**-Interface enthält beschreibende Metadaten über ein Dokument, die in HTML als [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta) Elemente bereitgestellt werden. Dieses Interface erbt alle Eigenschaften und Methoden, die im [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface beschrieben sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- {{HTMLElement("meta#charset")}}
  - : Die Zeichenkodierung für ein HTML-Dokument.
- [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)
  - : Der 'Wert'-Teil der Name-Wert-Paare der Dokumentenmetadaten.
- [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv)
  - : Der Name der Pragma-Direktive, des HTTP-Antwort-Headers, für ein Dokument.
- [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)
  - : Der Medienkontext für eine `theme-color` Metadaten-Eigenschaft.
- [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)
  - : Der 'Name'-Teil der Name-Wert-Paare, die die benannten Metadaten eines Dokuments definieren.
- [`HTMLMetaElement.scheme`](/de/docs/Web/API/HTMLMetaElement/scheme) {{deprecated_inline}}
  - : Definiert das Schema des Wertes im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content) Attribut.
    Dies ist veraltet und sollte auf neuen Webseiten nicht verwendet werden.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

Die folgenden zwei Beispiele zeigen einen allgemeinen Ansatz zur Verwendung des `HTMLMetaElement`-Interfaces. Für spezifische Beispiele siehe die Seiten für die einzelnen Eigenschaften, wie in der [Instanz-Eigenschaften](#instanz-eigenschaften) Sektion oben beschrieben.

### Einstellen der Metadaten zur Seitenbeschreibung

Das folgende Beispiel erstellt ein neues `<meta>` Element mit einem `name` Attribut, das auf [`description`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist. Das `content` Attribut setzt eine Beschreibung des Dokuments und wird in den `<head>` des Dokuments eingefügt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Einstellen der Viewport-Metadaten

Das folgende Beispiel zeigt, wie man ein neues `<meta>` Element mit einem `name` Attribut erstellt, das auf [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) gesetzt ist. Das `content` Attribut setzt die Größe des Viewports und wird in den `<head>` des Dokuments eingefügt:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

Für weitere Informationen über das Einstellen des Viewports, siehe [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("meta")}}
