---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement`**-Schnittstelle repräsentiert ein HTML {{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden zur Manipulation von Bildelementen.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, welches ein HTML {{HTMLElement("img")}}-Element darstellt, das nicht an einen beliebigen DOM-Baum angehängt ist. Er akzeptiert optionale Breiten- und Höhenparameter. Wird er ohne Parameter aufgerufen, ist `new Image()` gleichbedeutend mit dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, wenn das Bild nicht geladen werden konnte.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das Attribut [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc) eines {{htmlelement("img")}}-Elements ab oder setzt es programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` legt fest, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung senden soll. Serverseitig wird dies genutzt, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine auf Bildern basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild erfolgreich oder nicht erfolgreich geladen hat. Dies bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src)-Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement angibt. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Details. Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund wechselnder Bedingungen, wie durch vorhandene [Media Queries](/de/docs/Web/CSS/CSS_media_queries), angepasst wird.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie das Bild dekodiert werden sollte. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `sync`, um das Bild synchron zu dekodieren, `async`, um es asynchron zu dekodieren, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die Seite [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie er das Laden des Bildes im Verhältnis zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `high` für hohe Priorität beim Laden, `low` für niedrige Priorität oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein ganzzahliger Wert, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) widerspiegelt, was die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das HTML-Attribut [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap) widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Bildkarte ist. Dies unterscheidet sich von einer clientseitigen Bildkarte, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}} definiert wird, das {{HTMLElement("area")}}-Elemente enthält, die die klickbaren Bereiche im Bild anzeigen. Das Bild _muss_ in einem {{HTMLElement("a")}}-Element enthalten sein; siehe die `ismap`-Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, der verwendet wird, um das Laden des Dokuments zu optimieren, indem bestimmt wird, ob das Bild sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls wird `0` angezeigt. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert wird.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls wird `0` angezeigt. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert wird.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) widerspiegelt und dem {{Glossary("user_agent", "User Agent")}} mitteilt, wie entschieden werden soll, welchen Referrer zur Anforderung des Bildes verwendet werden soll. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) widerspiegelt. Dieser String gibt eine Liste von kommaseparierten bedingten Größen für das Bild an; das heißt, für eine gegebene Viewport-Größe soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der Seite [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) widerspiegelt, das die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das HTML-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas (`',', U+002C COMMA`) getrennt sind. Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder einen Größenfaktor angegeben werden. Lesen Sie die Seite [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) für spezifische Informationen zum Format des Größen-Substrings.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap) widerspiegelt und die seiteninterne URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Bildkarte beschreibt. Die seiteninterne URL ist ein Rautezeichen (`#`) gefolgt von der ID des `<map>`-Elements, wie z.B. `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}}-Elemente, die die klickbaren Bereiche im Bild anzeigen.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein ganzzahliger Wert, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) widerspiegelt, das die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der den horizontalen Versatz der linken Randkante des CSS-Layoutkastens des Bildes relativ zum Ursprung des enthaltenen Blocks des {{HTMLElement("html")}}-Elements angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der ganzzahlige vertikale Versatz der oberen Randkante des CSS-Layoutkastens des Bildes relativ zum Ursprung des enthaltenen Blocks des {{HTMLElement("html")}}-Elements.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes im Verhältnis zum umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS (wie {{cssxref("text-align")}}, das trotz seines Namens mit Bildern funktioniert) verwenden, um die Ausrichtung zu spezifizieren.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens um das Bild herum definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge an leerem Raum (in Pixeln) bestimmt, die links und rechts vom Bild frei bleiben soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine ausführliche Beschreibung der Bildinhalte zu finden ist. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Moderne HTML-Techniken sollten stattdessen ein `<img>` innerhalb eines {{HTMLElement("a")}}-Elements platzieren, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements darstellt.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge an leerem Raum, in Pixeln, angibt, die über und unter dem Bild frei gelassen werden soll.

## Instanz-Methoden

_Erbt Methoden von seiner Elternklasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn das Bild dekodiert ist und es sicher ist, das Bild dem DOM hinzuzufügen. Dies verhindert, dass das Rendern des nächsten Frames pausieren muss, um das Bild zu dekodieren, wie es passieren würde, wenn ein unkodiertes Bild dem DOM hinzugefügt wird.

## Fehler

Wenn ein Fehler beim Versuch auftritt, das Bild zu laden oder zu rendern, und ein `onerror`-Ereignishandler konfiguriert ist, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu behandeln, wird dieser Ereignishandler aufgerufen. Dies kann in einer Reihe von Situationen passieren, einschließlich:

- Das `[`src`](/de/docs/Web/HTML/Reference/Elements/img#src)`-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Seite, die der Benutzer gerade besucht.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die angegebene Bildmetadaten sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das angegebene Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Beispiel

```js
const img1 = new Image(); // Image constructor
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

const img2 = document.createElement("img"); // Use DOM HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// using first image in the document
alert(document.images[0].src);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("img")}}
