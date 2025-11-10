---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Das **`HTMLImageElement`**-Interface repräsentiert ein HTML-{{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden, die zur Manipulation von Bildelementen verwendet werden.

{{InheritanceDiagram}}

## Constructor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML-{{HTMLElement("img")}}-Element repräsentiert, das nicht an einen DOM-Baum angehängt ist. Er nimmt optionale Breiten- und Höhenparameter entgegen. Wenn er ohne Parameter aufgerufen wird, entspricht `new Image()` dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanz-Eigenschaften

\_{\*}Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement).\_\*

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-HTML-Attribut widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Erhält und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc)-Attribut an einem {{htmlelement("img")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) bzw. einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild erfolgreich oder nicht erfolgreich geladen hat. Das bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src)-Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement angibt. Weitere Informationen finden Sie unter [CORS-Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin). Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL angibt, von der das derzeit angezeigte Bild geladen wurde. Dies kann sich ändern, da das Bild aufgrund sich ändernder Bedingungen angepasst wird, wie sie von gegebenen [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) vorgegeben werden.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Bild dekodieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `sync`, um das Bild synchron zu dekodieren, `async`, um es asynchron zu dekodieren, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding)-Seite für Details zu den Implikationen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er die Priorität beim Laden des Bildes im Vergleich zu anderen Bildern setzen soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high`, um mit hoher Priorität zu laden, `low`, um mit niedriger Priorität zu laden, oder `auto` für keine spezifische Präferenz (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein Ganzzahlwert, der das [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-HTML-Attribut widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap)-HTML-Attribut widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Bildkarte ist. Dies unterscheidet sich von einer clientseitigen Bildkarte, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}}-Element, das {{HTMLElement("area")}}-Elemente enthält, die die klickbaren Bereiche im Bild angeben, spezifiziert wird. Das Bild _muss_ innerhalb eines {{HTMLElement("a")}}-Elements enthalten sein; sehen Sie sich die `ismap`-Seite für nähere Informationen an.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, wie das Dokument optimiert geladen werden kann, indem bestimmt wird, ob das Bild sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln darstellt, falls diese verfügbar ist; andernfalls zeigt er `0`. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln darstellt, falls diese verfügbar ist; andernfalls zeigt er `0`. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy)-HTML-Attribut widerspiegelt und den {{Glossary("user_agent", "User-Agent")}} darüber informiert, wie er entscheiden soll, welchen Referrer verwenden werden soll, um das Bild abzurufen. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-HTML-Attribut widerspiegelt. Dieser String gibt eine Liste von durch Kommas getrennten bedingten Größen für das Bild an; das heißt, für eine gegebene Ansichtsfenstergröße sollte eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Seite für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-HTML-Attribut widerspiegelt und die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-HTML-Attribut widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas (`',', U+002C KOMMA`) getrennt sind. Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder in der Breite oder als Größenmultiplikator angegeben sein. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Seite für genaue Informationen zum Format des Größen-Teils.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-HTML-Attribut widerspiegelt und die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Bildkarte beschreibt. Die seitenlokale URL ist ein Raute-Zeichen (`#`) gefolgt vom `name` des `<map>`-Elements, z. B. `#my-map-element`. Das `<map>` wiederum enthält {{HTMLElement("area")}}-Elemente, die die klickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein Ganzzahlwert, der das [`width`](/de/docs/Web/HTML/Reference/Elements/img#width)-HTML-Attribut widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Ganzzahlwert, der den horizontalen Versatz des linken Randes der CSS-Layoutbox des Bildes relativ zum Ursprung des {{HTMLElement("html")}}-Elements enthaltenden Blocks angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der ganzzahlige vertikale Versatz des oberen Randes der CSS-Layoutbox des Bildes relativ zum Ursprung des {{HTMLElement("html")}}-Elements enthaltenden Blocks.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS (wie z.B. {{cssxref("text-align")}}, das trotz seines Namens auch mit Bildern funktioniert) verwenden, um die Ausrichtung festzulegen.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens um das Bild definiert. Dies ist veraltet; verwenden Sie die CSS-{{cssxref("border")}}-Eigenschaft stattdessen.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge des Raums (in Pixeln) angibt, der auf der linken und rechten Seite des Bildes leer bleiben soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine lange Beschreibung der Bildinhalte zu finden ist. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Moderne HTML sollte stattdessen ein `<img>` in einem {{HTMLElement("a")}}-Element, das den Hyperlink definiert, platzieren.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements repräsentiert.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der die Menge des leeren Raums in Pixeln, die über und unter dem Bild gelassen werden soll, angibt.

## Instanz-Methoden

\_{\*}Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement).\_\*

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild dekodiert wurde und es sicher ist, das Bild in den DOM einzufügen. Dies verhindert, dass das Rendering des nächsten Frames pausieren muss, um das Bild zu dekodieren, was passieren würde, wenn ein nicht dekodiertes Bild in den DOM hinzugefügt würde.

## Fehler

Wenn ein Fehler auftritt, während versucht wird, das Bild zu laden oder darzustellen, und ein `onerror`-Ereignis-Handler konfiguriert wurde, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu behandeln, wird dieser Ereignis-Handler aufgerufen. Dies kann in einer Reihe von Situationen geschehen, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Seite, auf der sich der Benutzer aktuell befindet.
- Das angegebene Bild ist auf eine Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen zu ermitteln, und keine Dimensionen wurden in den `<img>`-Element-Attributen angegeben.
- Das angegebene Bild ist in einem vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützten Format.

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

### Breite und Höhe abrufen

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

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("img")}}
