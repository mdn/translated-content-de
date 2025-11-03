---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement`**-Schnittstelle repräsentiert ein HTML-{{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden zur Manipulation von Bildelementen.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML-{{HTMLElement("img")}}-Element darstellt, welches keinem DOM-Baum angehängt ist. Es akzeptiert optionale Parameter für Breite und Höhe. Wenn es ohne Parameter aufgerufen wird, ist `new Image()` gleichbedeutend mit dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) HTML-Attribut widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Setzt und erhält das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc) Attribut auf einem {{htmlelement("img")}}-Element programmatisch und widerspiegelt den Wert dieses Attributs. `attributionsrc` legt fest, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Anforderung des Bildes sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bilderbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild erfolgreich oder nicht erfolgreich geladen hat. Das bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src)-Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement angibt. Siehe [CORS-Attribut-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Details. Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL darstellt, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund sich ändernder Bedingungen, die durch etwaige [Media Queries](/de/docs/Web/CSS/CSS_media_queries) festgelegt werden, angepasst wird.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie es das Bild decodieren soll. Wenn dieser Wert bereitgestellt wird, muss er einer der möglichen zulässigen Werte sein: `sync`, um das Bild synchron zu decodieren, `async`, um es asynchron zu decodieren, oder `auto`, um keine Präferenz anzugeben (was der Standardwert ist). Lesen Sie die [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding)-Seite für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie das Laden des Bildes im Vergleich zu anderen Bildern priorisiert werden soll. Wenn dieser Wert angegeben ist, muss er einen der möglichen zulässigen Werte haben: `high` für eine hohe Priorität beim Laden, `low` für eine niedrige Priorität oder `auto`, um keine Präferenz anzugeben (was der Standardwert ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein Ganzzahlwert, der das [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) HTML-Attribut widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixel angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap) HTML-Attribut widerspiegelt und anzeigt, dass das Bild Teil einer serverseitigen Bildkarte ist. Dies unterscheidet sich von einer clientseitigen Bildkarte, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}} implementiert wird, das {{HTMLElement("area")}}-Elemente enthält, die die anklickbaren Bereiche im Bild angeben. Das Bild _muss_ innerhalb eines {{HTMLElement("a")}}-Elements enthalten sein; siehe die `ismap`-Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der einen Hinweis darauf gibt, ob das Bild sofort (`eager`) oder nach Bedarf (`lazy`) geladen werden soll, um die Dokumentenladung zu optimieren.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen Ganzzahlwert zurück, der die intrinsische Höhe des Bildes in CSS-Pixel angibt, wenn verfügbar; andernfalls zeigt er `0`. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein Ganzzahlwert, der die intrinsische Breite des Bildes in CSS-Pixel darstellt, wenn verfügbar; andernfalls zeigt er `0`. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) HTML-Attribut widerspiegelt, welches dem {{Glossary("user_agent", "User Agent")}} mitteilt, wie zu entscheiden ist, welcher Referrer zum Laden des Bildes verwendet werden soll. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) HTML-Attribut widerspiegelt. Dieser String spezifiziert eine durch Kommas getrennte Liste bedingter Größen für das Bild, d.h. für eine gegebene Viewport-Größe soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Seite für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) HTML-Attribut widerspiegelt, welches die vollständige URL des Bildes einschließlich Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) HTML-Attribut widerspiegelt. Dieser spezifiziert eine Liste von Bildkandidaten, getrennt durch Kommas (`',', U+002C COMMA`). Jeder Bildkandidat ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder einen Größenmultiplikator festgelegt werden. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Seite für Spezifikationen zum Format des Größenstrings.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap) HTML-Attribut widerspiegelt und die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Bildkarte beschreibt. Die seitenlokale URL ist ein Rautezeichen (`#`) gefolgt vom `name` des `<map>`-Elements, wie z. B. `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}}-Elemente, die die anklickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein Ganzzahlwert, der das [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) HTML-Attribut widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixel angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die den horizontalen Versatz der linken Ränder des CSS-Layout-Box des Bildes relativ zum Ursprung des Blockcontainers des {{HTMLElement("html")}}-Elements angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der vertikale Ganzzahlversatz der oberen Ränder der CSS-Layout-Box des Bildes relativ zum Ursprung des Blockcontainers des {{HTMLElement("html")}}-Elements.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes im Verhältnis zum umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS verwenden (wie {{cssxref("text-align")}}, das trotz seines Namens mit Bildern funktioniert), um die Ausrichtung festzulegen.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens um das Bild definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-{{cssxref("border")}}-Eigenschaft.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein Ganzzahlwert, der die Menge an Platz (in Pixeln) angibt, die links und rechts neben dem Bild leer gelassen werden soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine ausführliche Beschreibung des Bildinhalts gefunden werden kann. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Modernes HTML sollte stattdessen ein `<img>` innerhalb eines {{HTMLElement("a")}}-Elements platzieren, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements darstellt.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein Ganzzahlwert, der die Menge an leerem Raum in Pixeln angibt, die über und unter dem Bild gelassen werden soll.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das gelöst wird, wenn das Bild decodiert ist und es sicher ist, das Bild dem DOM hinzuzufügen. Dies verhindert, dass das Rendern des nächsten Frames pausiert werden muss, um das Bild zu decodieren, wie es der Fall wäre, wenn ein unentschlüsseltes Bild dem DOM hinzugefügt würde.

## Fehler

Wenn ein Fehler beim Laden oder Rendern des Bildes auftritt und ein `onerror`-Ereignishandler konfiguriert wurde, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu behandeln, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, was es unmöglich macht, es zu laden.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln und keine Abmessungen in den Attributen des `<img>`-Elements angegeben wurden.
- Das angegebene Bild befindet sich in einem vom {{Glossary("user_agent", "User Agent")}} nicht unterstützten Format.

## Beispiele

### Erstellung und Einfügen eines Bildelements

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

Das folgende Beispiel zeigt die Verwendung der Eigenschaften `height` und `width` zusammen mit Bildern unterschiedlicher Abmessungen:

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
