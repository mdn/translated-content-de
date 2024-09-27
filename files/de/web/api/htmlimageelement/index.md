---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

Das **`HTMLImageElement`**-Interface repräsentiert ein HTML-{{HTMLElement("img")}}-Element und bietet die Eigenschaften und Methoden, die zur Manipulation von Bildelementen verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML-{{HTMLElement("img")}}-Element repräsentiert, welches keinem DOM-Baum zugeordnet ist. Er akzeptiert optionale Breiten- und Höhenparameter. Wird er ohne Parameter aufgerufen, entspricht `new Image()` dem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das HTML-Attribut [`alt`](/de/docs/Web/HTML/Element/img#alt) widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt wird, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/img#attributionsrc)-Attribut auf einem {{htmlelement("img")}}-Element programmgesteuert ab und setzt es, wobei es den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) bzw. zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild vollständig geladen hat, unabhängig davon, ob erfolgreich oder nicht. Das bedeutet, dass dieser Wert auch `true` ist, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src)-Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellung für dieses Bildelement angibt. Weitere Informationen finden Sie unter [CORS-Einstellungen attributen](/de/docs/Web/HTML/Attributes/crossorigin). Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund sich ändernder Bedingungen angepasst wird, wie es durch [Media Queries](/de/docs/Web/CSS/CSS_media_queries) angegeben wird, die in Kraft sind.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Bild dekodieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `sync`, um das Bild synchron zu dekodieren, `async`, um es asynchron zu dekodieren, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding)-Seite für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Nachladen des Bildes im Verhältnis zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `high`, um es mit hoher Priorität zu laden, `low`, um es mit niedriger Priorität zu laden, oder `auto`, um keine Präferenz anzugeben (was der Standard ist).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein Integer-Wert, der das HTML-Attribut [`height`](/de/docs/Web/HTML/Element/img#height) widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das HTML-Attribut [`ismap`](/de/docs/Web/HTML/Element/img#ismap) widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Image Map ist. Dies unterscheidet sich von einer clientseitigen Image Map, die mit einem `<img>`-Element und einem korrespondierenden {{HTMLElement("map")}}-Element spezifiziert wird, das {{HTMLElement("area")}}-Elemente enthält, die die anklickbaren Bereiche im Bild angeben. Das Bild _muss_ sich innerhalb eines {{HTMLElement("a")}}-Elements befinden; siehe die `ismap`-Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, um das Laden des Dokuments zu optimieren, indem er entscheidet, ob das Bild sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen Integer-Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln repräsentiert, wenn sie verfügbar ist; andernfalls zeigt er `0` an. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein Integer-Wert, der die intrinsische Breite des Bildes in CSS-Pixeln repräsentiert, wenn sie verfügbar ist; andernfalls zeigt er `0` an. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das HTML-Attribut [`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy) widerspiegelt und dem [User Agent](/de/docs/Glossary/user_agent) mitteilt, wie er entscheiden soll, welchen Referrer er verwenden soll, um das Bild abzurufen. Lesen Sie diesen Artikel, um die möglichen Werte dieses Strings zu verstehen.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das HTML-Attribut [`sizes`](/de/docs/Web/HTML/Element/img#sizes) widerspiegelt. Dieser String gibt eine Liste von kommagetrennten bedingten Größen für das Bild an; das heißt, für eine bestimmte Viewport-Größe soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Seite für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das HTML-Attribut [`src`](/de/docs/Web/HTML/Element/img#src) widerspiegelt und die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das HTML-Attribut [`srcset`](/de/docs/Web/HTML/Element/img#srcset) widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas getrennt sind (`',', U+002C COMMA`). Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder durch ein Größenverhältnis angegeben werden. Lesen Sie die [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset)-Seite für spezifische Informationen zum Format des Größenunterstrings.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das HTML-Attribut [`usemap`](/de/docs/Web/HTML/Element/img#usemap) widerspiegelt, das die paikle URL des auf dieser Seite enthaltenen {{HTMLElement("map")}}-Elements beschreibt, das die Image Map verwenden soll. Die page-lokale URL ist ein Pfunds-Zeichen (Raute) (`#`) gefolgt von der ID des `<map>`-Elements, wie `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}}-Elemente, die die anklickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein Integer-Wert, der das HTML-Attribut [`width`](/de/docs/Web/HTML/Element/img#width) widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Integer-Wert, der den horizontalen Versatz des linken Randes des CSS-Layout-Box des Bildes relativ zum Ursprung des Container-Blocks des {{HTMLElement("html")}}-Elements angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der Integer-Wert des vertikalen Versatzes des oberen Randes des CSS-Layout-Box des Bildes relativ zum Ursprung des Container-Blocks des {{HTMLElement("html")}}-Elements.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS verwenden (wie {{cssxref("text-align")}}, das trotz des Namens mit Bildern funktioniert), um die Ausrichtung anzugeben.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des das Bild umgebenden Rahmens definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-{{cssxref("border")}}-Eigenschaft.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein Integer-Wert, der die Menge an Leerraum (in Pixeln) angibt, die auf der linken und rechten Seite des Bildes frei bleiben soll.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine ausführliche Beschreibung des Bildinhalts gefunden werden kann. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Modernes HTML sollte stattdessen ein `<img>` in ein {{HTMLElement("a")}}-Element einfügen, welches den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements darstellt.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein Integer-Wert, der die Menge an freiem Raum, in Pixeln, angibt, der oberhalb und unterhalb des Bildes freigehalten werden soll.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild dekodiert ist und es sicher ist, das Bild dem DOM hinzuzufügen. Dies verhindert, dass das Rendern des nächsten Frames pausieren muss, um das Bild zu dekodieren, was passieren würde, wenn ein nicht dekodiertes Bild dem DOM hinzugefügt wird.

## Fehler

Wenn ein Fehler auftritt, während versucht wird, das Bild zu laden oder darzustellen, und ein Fehlerbehandlungsereignis wie `onerror` konfiguriert wurde, um das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis zu verarbeiten, wird dieser Ereignis-Handler aufgerufen. Dies kann in verschiedenen Situationen geschehen, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Webseite, die der Benutzer gerade anzeigt.
- Das angegebene Bild ist auf eine Weise beschädigt, dass es nicht geladen werden kann.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und keine Dimensionen in den Attributen des `<img>`-Elements angegeben wurden.
- Das angegebene Bild ist in einem Format, das vom [User Agent](/de/docs/Glossary/user_agent) nicht unterstützt wird.

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

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("img")}}
