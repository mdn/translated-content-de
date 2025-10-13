---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement`**-Schnittstelle repräsentiert ein HTML-{{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden, die zur Manipulation von Bildelementen verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML-{{HTMLElement("img")}}-Element repräsentiert, das nicht an einen DOM-Baum angefügt ist. Er akzeptiert optionale Parameter für Breite und Höhe. Wenn er ohne Parameter aufgerufen wird, entspricht `new Image()` dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-HTML-Attribut widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, falls das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Attribut eines {{htmlelement("img")}}-Elements programmgesteuert ab oder setzt es, was den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass der Browser ein {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild vollständig geladen hat, ob erfolgreich oder nicht. Das bedeutet auch, dass dieser Wert `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src)-Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement angibt. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Details. Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund sich ändernder Bedingungen angepasst werden muss, wie es durch vorhandene [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) festgelegt wird.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der einen Hinweis darauf gibt, wie der Browser das Bild decodieren soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen zulässigen Werte sein: `sync`, um das Bild synchron zu decodieren, `async`, um es asynchron zu decodieren, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die Seite [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der einen Hinweis darauf gibt, wie der Browser das Abrufen des Bildes im Verhältnis zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen zulässigen Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein ganzzahliger Wert, der das [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-HTML-Attribut widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap)-HTML-Attribut widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Bildkarte ist. Dies unterscheidet sich von einer clientseitigen Bildkarte, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}} spezifiziert wird, das {{HTMLElement("area")}}-Elemente enthält, die die klickbaren Bereiche im Bild angeben. Das Bild _muss_ in einem {{HTMLElement("a")}}-Element enthalten sein; siehe die `ismap`-Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der einen Hinweis auf die Optimierung des Ladens des Dokuments durch die Bestimmung gibt, ob das Bild sofort (`eager`) oder nach Bedarf (`lazy`) geladen werden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls zeigt es `0`. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls wird `0` angezeigt. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy)-HTML-Attribut widerspiegelt, welches dem {{Glossary("user_agent", "Benutzeragenten")}} mitteilt, wie er entscheiden soll, welchen Referrer er verwenden soll, um das Bild abzurufen. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-HTML-Attribut widerspiegelt. Dieser String gibt eine Liste von durch Kommas getrennten bedingten Größen für das Bild an; das heißt, für eine gegebene Viewport-Größe soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Seite für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-HTML-Attribut widerspiegelt, welches die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-HTML-Attribut widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas (`',', U+002C COMMA`) getrennt sind. Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen und einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder die Breite oder ein Größenverhältnis sein. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Seite für Details zum Format des Größenteils.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-HTML-Attribut widerspiegelt, das die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Bildkarte beschreibt. Die seitenlokale URL ist ein Pfund-Zeichen (Hash) (`#`) gefolgt von der ID des `<map>`-Elements, z.B. `#my-map-element`. Das `<map>`-Element enthält wiederum {{HTMLElement("area")}}-Elemente, die die klickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein ganzzahliger Wert, der das [`width`](/de/docs/Web/HTML/Reference/Elements/img#width)-HTML-Attribut widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Integer, der den horizontalen Versatz der linken Begrenzungskante des CSS-Layoutkastens des Bildes relativ zum Ursprung des enthaltenen Blocks des {{HTMLElement("html")}}-Elements angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der vertikale Versatz der oberen Begrenzungskante des CSS-Layoutkastens des Bildes relativ zum Ursprung des enthaltenen Blocks des {{HTMLElement("html")}}-Elements.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Mögliche Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS verwenden (wie {{cssxref("text-align")}}, das mit Bildern funktioniert, trotz des Namens), um die Ausrichtung anzugeben.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens um das Bild herum definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge an Leerraum (in Pixeln) angibt, die links und rechts vom Bild frei bleiben soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine lange Beschreibung des Bildinhalts gefunden werden kann. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Moderne HTML sollte stattdessen ein `<img>` innerhalb eines {{HTMLElement("a")}}-Elements platzieren, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements repräsentiert.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge an Leerraum in Pixeln angibt, die oberhalb und unterhalb des Bildes frei bleiben soll.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild decodiert ist und sicher im DOM hinzugefügt werden kann. Dies verhindert, dass das Rendering des nächsten Frames pausiert werden muss, um das Bild zu decodieren, wie es der Fall wäre, wenn ein nicht decodiertes Bild dem DOM hinzugefügt würde.

## Fehler

Wenn ein Fehler beim Laden oder Rendern des Bildes auftritt und ein `onerror`-Ereignishandler konfiguriert wurde, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu behandeln, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen geschehen, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Seite, die der Benutzer derzeit betrachtet.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, was das Laden verhindert.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das angegebene Bild ist in einem vom {{Glossary("user_agent", "Benutzeragenten")}} nicht unterstützten Format.

## Beispiele

### Erstellen und Einfügen eines Bildelements

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

### Abrufen von Breite und Höhe

Das folgende Beispiel zeigt die Verwendung der Eigenschaften `height` und `width` zusammen mit Bildern unterschiedlicher Dimensionen:

```html
<p>
  Image 1: no height, width, or style
  <img id="image1" src="https://www.mozilla.org/images/mozilla-banner.gif" />
</p>

<p>
  Image 2: height="50", width="500", but no style
  <img
    id="image2"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    height="50"
    width="500" />
</p>

<p>
  Image 3: no height, width, but style="height: 50px; width: 500px;"
  <img
    id="image3"
    src="https://www.mozilla.org/images/mozilla-banner.gif"
    style="height: 50px; width: 500px;" />
</p>

<div id="output"></div>
```

```js
const arrImages = [
  document.getElementById("image1"),
  document.getElementById("image2"),
  document.getElementById("image3"),
];

const objOutput = document.getElementById("output");
let strHtml = "<ul>";

for (let i = 0; i < arrImages.length; i++) {
  const img = arrImages[i];
  strHtml += `<li>image${i + 1}: height=${img.height}, width=${img.width}, style.height=${img.style.height}, style.width=${img.style.width}</li>`;
}

strHtml += "</ul>";

objOutput.innerHTML = strHtml;
```

{{EmbedLiveSample("getting width and height", "", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("img")}}
