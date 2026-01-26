---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement`** Schnittstelle repräsentiert ein HTML {{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden zur Manipulation von Bildelementen.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()` Konstruktor erstellt und gibt ein neues `HTMLImageElement` Objekt zurück, das ein HTML {{HTMLElement("img")}}-Element darstellt, das nicht mit einem DOM-Baum verbunden ist. Es akzeptiert optionale Breiten- und Höhenparameter. Wenn es ohne Parameter aufgerufen wird, entspricht `new Image()` dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) widerspiegelt, und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{deprecated_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc) Attribut auf einem {{htmlelement("img")}}-Element ab und setzt es programmatisch, was den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden von {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header im Antwortschreiben auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) bzw. einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild abgeschlossen hat, ob erfolgreich oder nicht. Das bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src) Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement spezifiziert. Weitere Einzelheiten finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin). Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund sich ändernder Bedingungen angepasst wird, wie es durch vorhandene [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) festgelegt ist.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie das Bild dekodiert werden soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `sync`, um das Bild synchron zu dekodieren, `async`, um es asynchron zu dekodieren, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die Seite [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Abrufen des Bildes im Vergleich zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein ganzzahliger Wert, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das HTML-Attribut [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap) widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Image-Map ist. Dies unterscheidet sich von einer clientseitigen Image-Map, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}} erstellt wird, das {{HTMLElement("area")}}-Elemente enthält, die die anklickbaren Bereiche im Bild angeben. Das Bild _muss_ in einem {{HTMLElement("a")}} Element enthalten sein; sehen Sie die `ismap`-Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der dem Browser einen Hinweis darauf gibt, das Laden des Dokuments zu optimieren, indem festgelegt wird, ob das Bild sofort (`eager`) oder erst bei Bedarf (`lazy`) geladen werden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln darstellt, wenn es verfügbar ist; andernfalls zeigt es `0` an. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln darstellt, wenn es verfügbar ist; andernfalls zeigt es `0` an. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) widerspiegelt, das dem {{Glossary("user_agent", "User-Agent")}} mitteilt, wie er entscheiden soll, welchen Verweis verwendet werden soll, um das Bild abzurufen. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) widerspiegelt. Dieser String gibt eine Liste von kommagetrennten bedingten Größen für das Bild an; das heißt, für eine gegebene Ansichtsfenstergröße soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) Seite für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) widerspiegelt und die vollständige URL des Bildes einschließlich Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das HTML-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas getrennt sind (`',', U+002C COMMA`). Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder einen Größenmultiplikator angegeben werden. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) Seite für Details zum Format des Größen-Substrings.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap) widerspiegelt und die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Image-Map beschreibt. Die seitenlokale URL ist ein Hashtag-Symbol (`#`), gefolgt von dem `name` des `<map>`-Elements, wie z. B. `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}}-Elemente, die die anklickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein ganzzahliger Wert, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Ganzzahlwert, der den horizontalen Versatz der linken Rahmenkante des CSS-Layout-Box des Bildes relativ zum Ursprung des {{HTMLElement("html")}} Elements in seinem enthaltenden Block angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der ganzzahlig vertikale Versatz der oberen Rahmenkante des CSS-Layout-Box des Bildes relativ zum Ursprung des {{HTMLElement("html")}} Elements in seinem enthaltenden Block.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS verwenden (wie {{cssxref("text-align")}}, das trotz seines Namens mit Bildern funktioniert), um die Ausrichtung anzugeben.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens um das Bild herum definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der angibt, wie viel Platz (in Pixeln) auf der linken und rechten Seite des Bildes leer bleiben soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine lange Beschreibung der Bildinhalte zu finden ist. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Moderne HTML sollte stattdessen ein `<img>` innerhalb eines {{HTMLElement("a")}} Elements platzieren, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements repräsentiert.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der angibt, wie viel Platz (in Pixeln) über und unter dem Bild leer bleiben soll.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild dekodiert ist und es sicher ist, das Bild dem DOM hinzuzufügen. Dies verhindert, dass das Rendern des nächsten Frames pausieren muss, um das Bild zu dekodieren, wie es geschehen würde, wenn ein nicht dekodiertes Bild dem DOM hinzugefügt würde.

## Fehler

Wenn beim Laden oder Rendern des Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler konfiguriert wurde, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu behandeln, wird dieser Ereignishandler aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) Attribut ist leer oder `null`.
- Die angegebene `src` URL ist die gleiche wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, was verhindert, dass es geladen wird.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und keine Dimensionen wurden in den Attributen des `<img>` Elements angegeben.
- Das angegebene Bild ist in einem Format, das nicht von dem {{Glossary("user_agent", "User-Agent")}} unterstützt wird.

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

### Ermitteln von Breite und Höhe

Das folgende Beispiel zeigt die Verwendung der `height`- und `width`-Eigenschaften mit Bildern unterschiedlicher Dimensionen:

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
