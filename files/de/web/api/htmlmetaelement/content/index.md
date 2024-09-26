---
title: "HTMLMetaElement: content-Eigenschaft"
short-title: content
slug: Web/API/HTMLMetaElement/content
l10n:
  sourceCommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.content`**-Eigenschaft ruft das `content`-Attribut von Pragma-Direktiven und benannten {{htmlelement("meta")}}-Daten in Verbindung mit {{domxref("HTMLMetaElement.name")}} oder {{domxref("HTMLMetaElement.httpEquiv")}} ab oder setzt es.
Für weitere Informationen siehe das [content](/de/docs/Web/HTML/Element/meta#content)-Attribut.

## Wert

Ein String.

## Beispiele

### Lesen des Inhalts eines Meta-Elements

Das folgende Beispiel fragt ein `<meta>`-Element ab, das ein `name`-Attribut mit dem Wert `keywords` enthält.
Der `content`-Wert wird in die Konsole protokolliert, um die [Stichwörter](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) des Dokuments anzuzeigen:

```js
// gegeben <meta name="keywords" content="documentation, HTML, web">
const meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### Erstellen eines Meta-Elements mit Inhalt

Das folgende Beispiel erstellt ein neues `<meta>`-Element mit einem `name`-Attribut, das auf [`description`](/de/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) gesetzt ist.
Das `content`-Attribut setzt eine Beschreibung des Dokuments und wird dem Dokument `<head>` hinzugefügt:

```js
const meta = document.createElement("meta");
meta.name = "description";
meta.content =
  "The <meta> element can be used to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.";
document.head.appendChild(meta);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("meta")}}
- {{domxref("HTMLMetaElement.name")}}
- {{domxref("HTMLMetaElement.httpEquiv")}}
- [Lernen: Metadaten in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#metadata_the_meta_element)