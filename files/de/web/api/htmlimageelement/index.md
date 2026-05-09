---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("HTML DOM")}}

Das **`HTMLImageElement`** Interface repräsentiert ein HTML {{HTMLElement("img")}} Element und bietet die Eigenschaften und Methoden zur Manipulation von Bildelementen.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()` Konstruktor erstellt und gibt ein neues `HTMLImageElement` Objekt zurück, das ein HTML {{HTMLElement("img")}} Element darstellt, welches nicht mit einem DOM-Baum verbunden ist. Es akzeptiert optionale Breiten- und Höhenparameter. Wird es ohne Parameter aufgerufen, ist `new Image()` gleichbedeutend mit dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein Zeichenfolgenwert, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt) widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt wird, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/img#attributionsrc) Attribut eines {{htmlelement("img")}} Elements programmatisch ab und setzt es, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild fertig geladen hat, unabhängig davon, ob es erfolgreich war oder nicht. Das bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src) Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Eine Zeichenfolge, die die CORS-Einstellung für dieses Bildelement spezifiziert. Siehe [CORS Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Details. Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die URL darstellt, von der das derzeit angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund sich ändernder Bedingungen, die durch [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) beeinflusst werden, angepasst wird.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Eine optionale Zeichenfolge, die dem Browser einen Hinweis darauf gibt, wie er das Bild decodieren soll. Wenn dieser Wert angegeben wird, muss er eine der erlaubten Werte sein: `sync` für synchrones Decodieren, `async` für asynchrones Decodieren oder `auto` für keine Präferenz (was der Standard ist). Lesen Sie die [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding) Seite für Details zu den Implikationen dieser Werte.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Eine optionale Zeichenfolge, die dem Browser einen Hinweis darauf gibt, wie er das Abrufen des Bildes im Vergleich zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der erlaubten Werte sein: `high` für hohe Priorität, `low` für niedrige Priorität oder `auto` für keine Präferenz (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein Integerwert, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/img#height) widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das HTML-Attribut [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap) widerspiegelt und angibt, dass das Bild Teil einer server-seitigen Imagemap ist. Dies unterscheidet sich von einer client-seitigen Imagemap, die mit einem `<img>` Element und einem entsprechenden {{HTMLElement("map")}} erzeugt wird, welches {{HTMLElement("area")}} Elemente enthält, die die klickbaren Bereiche im Bild angeben. Das Bild _muss_ innerhalb eines {{HTMLElement("a")}} Elements enthalten sein; lesen Sie die `ismap` Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Eine Zeichenfolge, die angibt, ob der Browser das Bild sofort (`eager`) oder erst bei Bedarf (`lazy`) laden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen Integerwert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln darstellt, wenn verfügbar; andernfalls zeigt er `0` an. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein Integerwert, der die intrinsische Breite des Bildes in CSS-Pixeln darstellt, wenn verfügbar; andernfalls zeigt es `0` an. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Eine Zeichenfolge, die das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/img#referrerpolicy) widerspiegelt und dem {{Glossary("user_agent", "Benutzeragenten")}} mitteilt, wie entschieden werden soll, welcher Referrer zum Abrufen des Bildes verwendet werden soll. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieser Zeichenfolge.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Eine Zeichenfolge, die das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) widerspiegelt. Diese Zeichenfolge gibt eine Liste aus kommagetrennten Bedingungsgrößen für das Bild an; das heißt, für eine gegebene Viewport-Größe soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) Seite für Details zum Format dieser Zeichenfolge.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Eine Zeichenfolge, die das HTML-Attribut [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) widerspiegelt, welches die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src` Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Eine Zeichenfolge, die das HTML-Attribut [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) widerspiegelt. Dies spezifiziert eine Liste von Kandidatenbildern, getrennt durch Kommata (`',', U+002C KOMMA`). Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einer speziell formatierten Zeichenfolge, die die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder einen Größenfaktor angegeben werden. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) Seite für Einzelheiten zum Format der Größenzeichensequenz.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Eine Zeichenfolge, die das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap) widerspiegelt, das die seitenlokale URL des {{HTMLElement("map")}} Elements enthält, das die zu verwendende Imagemap beschreibt. Die seitenlokale URL ist ein Pfund (Hash) Symbol (`#`), gefolgt vom `name` des `<map>` Elements, wie `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}} Elemente, die die klickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein Integerwert, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Integerwert, der den horizontalen Versatz der linken Randkante des CSS-Layout-Box des Bildes relativ zum Ursprung des {{HTMLElement("html")}} Elements enthaltenden Blocks angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der vertikale Versatz der oberen Randkante des CSS-Layout-Box des Bildes relativ zum Ursprung des {{HTMLElement("html")}} Elements enthaltenden Blocks.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Eine Zeichenfolge, die die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS (wie {{cssxref("text-align")}}, das trotz seines Namens mit Bildern funktioniert) verwenden, um die Ausrichtung festzulegen.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Eine Zeichenfolge, die die Breite des Rahmens um das Bild definiert. Dies ist veraltet; verwenden Sie die CSS-Eigenschaft {{cssxref("border")}} stattdessen.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein Integerwert, der die Menge an Platz (in Pixeln) angibt, die links und rechts des Bildes frei gelassen werden soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Eine Zeichenfolge, die die URL angibt, unter der eine lange Beschreibung der Bildinhalte zu finden ist. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Modernes HTML sollte stattdessen ein `<img>` innerhalb eines {{HTMLElement("a")}} Elements platzieren, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Eine Zeichenfolge, die den Namen des Elements darstellt.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein Integerwert, der die Menge an leerem Raum, in Pixeln, angibt, die oberhalb und unterhalb des Bildes freigelassen werden soll.

## Instanzmethoden

_Erbt Methoden von seinem übergeordneten Element, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild decodiert ist und es sicher ist, das Bild dem DOM hinzuzufügen. Dies verhindert, dass das Rendern des nächsten Frames pausieren muss, um das Bild zu decodieren, wie es der Fall wäre, wenn ein undecodiertes Bild dem DOM hinzugefügt wird.

## Fehler

Wenn ein Fehler beim Laden oder Rendern des Bildes auftritt und ein `onerror` Ereignis-Handler eingerichtet ist, um das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis zu behandeln, wird dieser Ereignis-Handler aufgerufen. Dies kann in einer Reihe von Situationen geschehen, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) Attribut ist leer oder `null`.
- Die angegebene `src` URL ist dieselbe wie die URL der Seite, auf der sich der Benutzer derzeit befindet.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, die es verhindert, dass es geladen wird.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass seine Dimensionen nicht abgerufen werden können, und es wurden keine Dimensionen in den Attributen des `<img>` Elements angegeben.
- Das angegebene Bild ist in einem vom {{Glossary("user_agent", "Benutzeragenten")}} nicht unterstützten Format.

## Beispiele

### Ein Bildelement erstellen und einfügen

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

### Breite und Höhe ermitteln

Das folgende Beispiel zeigt die Verwendung der `height` und `width` Eigenschaften zusammen mit Bildern unterschiedlicher Größen:

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
