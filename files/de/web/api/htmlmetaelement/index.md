---
title: HTMLMetaElement
slug: Web/API/HTMLMetaElement
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{ APIRef("HTML DOM") }}

Die **`HTMLMetaElement`**-Schnittstelle enthält beschreibende Metadaten über ein Dokument, die in HTML als [`<meta>`](/de/docs/Web/HTML/Reference/Elements/meta)-Elemente bereitgestellt werden. Diese Schnittstelle erbt alle Eigenschaften und Methoden, die in der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle beschrieben sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- {{HTMLElement("meta#charset")}}
  - : Die Zeichenkodierung für ein HTML-Dokument.
- [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)
  - : Der 'Wert'-Teil der Name-Wert-Paare der Dokument-Metadaten.
- [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv)
  - : Der Name der Pragma-Direktive, des HTTP-Antwort-Headers, für ein Dokument.
- [`HTMLMetaElement.media`](/de/docs/Web/API/HTMLMetaElement/media)
  - : Der Medienkontext für eine `theme-color` Metadaten-Eigenschaft.
- [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)
  - : Der 'Name'-Teil der Name-Wert-Paare, die die benannten Metadaten eines Dokuments definieren.
- [`HTMLMetaElement.scheme`](/de/docs/Web/API/HTMLMetaElement/scheme) {{deprecated_inline}}
  - : Definiert das Schema des Wertes im [`HTMLMetaElement.content`](/de/docs/Web/API/HTMLMetaElement/content)-Attribut. Dies ist veraltet und sollte nicht auf neuen Webseiten verwendet werden.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

Die folgenden zwei Beispiele zeigen einen allgemeinen Ansatz zur Verwendung der `HTMLMetaElement`-Schnittstelle. Für spezifische Beispiele siehe die Seiten zu den einzelnen Eigenschaften, wie im Abschnitt [Instanz-Eigenschaften](#instanz-eigenschaften) oben beschrieben.

### Festlegen der Seitenbeschreibung-Metadaten

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`description`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist. Das `content`-Attribut setzt eine Beschreibung des Dokuments und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

### Festlegen der Viewport-Metadaten

Das folgende Beispiel zeigt, wie man ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`viewport`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) gesetzt ist, erstellt. Das `content`-Attribut setzt die Viewport-Größe und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);
```

Für weitere Informationen zum Einstellen des Viewports siehe [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("meta")}}
