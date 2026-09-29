---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{ APIRef("HTML DOM") }}

Die Schnittstelle **`HTMLMetaElement`** enthält beschreibende Metadaten über ein Dokument, die in HTML durch [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Elemente bereitgestellt werden.
Diese Schnittstelle erbt alle Eigenschaften und Methoden der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)
  - : Der Wertteil der Name-Wert-Paare der Dokumentmetadaten.
- [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv)
  - : Der Name der Pragma-Direktive, eines HTTP-Antwort-Headers, für ein Dokument.
- [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)
  - : Der Medienkontext für eine `theme-color`-Metadateneigenschaft.
- [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)
  - : Der Namensteil der Name-Wert-Paare, die die benannten Metadaten eines Dokuments definieren.
- [`HTMLMetaElement.scheme`](/de/docs/Web/API/HTMLMetaElement/scheme) {{deprecated_inline}}
  - : Definiert das Schema des Werts im Attribut [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content).
    Diese Eigenschaft ist veraltet und sollte auf neuen Webseiten nicht verwendet werden.

## Instanzmethoden

_Keine eigenen Methoden; erbt Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

Die folgenden beiden Beispiele zeigen allgemein, wie die Schnittstelle `HTMLMetaElement` verwendet wird.
Konkrete Beispiele finden Sie auf den Seiten der einzelnen Eigenschaften, die im Abschnitt [Instanzeigenschaften](#instanzeigenschaften) oben aufgeführt sind.

### Festlegen der Metadaten für die Seitenbeschreibung

Das folgende Beispiel erstellt ein neues `<meta>`-Element, dessen `name`-Attribut auf [`description`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist.
Das `content`-Attribut enthält eine Beschreibung des Dokuments. Das Element wird an das `<head>`-Element des Dokuments angehängt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Festlegen der Viewport-Metadaten

Das folgende Beispiel zeigt, wie Sie ein neues `<meta>`-Element erstellen, dessen `name`-Attribut auf [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) gesetzt ist.
Das `content`-Attribut legt die Größe des Viewports fest. Das Element wird an das `<head>`-Element des Dokuments angehängt:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width";
document.head.appendChild(meta);
```

Weitere Informationen zum Festlegen des Viewports finden Sie unter [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meta")}}
