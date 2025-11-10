---
title: "HTMLMetaElement: content-Eigenschaft"
short-title: content
slug: Web/API/HTMLMetaElement/content
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{APIRef("HTML DOM")}}

Die **`HTMLMetaElement.content`**-Eigenschaft ruft das Attribut `content` von Pragma-Direktiven und benannten {{htmlelement("meta")}}-Daten in Verbindung mit [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name) oder [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv) ab oder setzt es.
Weitere Informationen finden Sie im [content](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut.

## Wert

Ein String.

## Beispiele

### Lesen des Inhalts eines Meta-Elements

Im folgenden Beispiel wird ein `<meta>`-Element abgefragt, das ein `name`-Attribut mit dem Wert `keywords` enthält.
Der `content`-Wert wird in die Konsole ausgegeben, um die [Schlüsselwörter](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) des Dokuments anzuzeigen:

```js
// given <meta name="keywords" content="documentation, HTML, web">
const meta = document.querySelector("meta[name='keywords']");
console.log(meta.content);
// "documentation, HTML, web"
```

### Erstellen eines Meta-Elements mit Inhalten

Im folgenden Beispiel wird ein neues `<meta>`-Element erstellt, dessen `name`-Attribut auf [`description`](/de/docs/Web/HTML/Reference/Elements/meta/name#meta_names_defined_in_the_html_specification) gesetzt ist.
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
- [`HTMLMetaElement.name`](/de/docs/Web/API/HTMLMetaElement/name)
- [`HTMLMetaElement.httpEquiv`](/de/docs/Web/API/HTMLMetaElement/httpEquiv)
- [Lernen: Metadaten in HTML](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#metadata_the_meta_element)
