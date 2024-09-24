---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

Das **`HTMLImageElement`**-Interface repräsentiert ein HTML-{{HTMLElement("img")}}-Element und stellt die Eigenschaften und Methoden zur Verfügung, die zur Manipulation von Bildelementen verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML-{{HTMLElement("img")}}-Element darstellt, welches an keinen DOM-Baum angehängt ist. Er akzeptiert optionale Breiten- und Höhenparameter. Wenn er ohne Parameter aufgerufen wird, ist `new Image()` gleichbedeutend mit dem Aufruf von {{DOMxRef("Document.createElement()", "document.createElement('img')")}}.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.alt")}}
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/img#alt)-HTML-Attribut widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt werden soll, wenn das Bild nicht geladen wurde.
- {{domxref("HTMLImageElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/img#attributionsrc)-Attribut eines {{htmlelement("img")}}-Elements programmgesteuert ab und setzt es, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- {{domxref("HTMLImageElement.complete")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der `true` ist, wenn der Browser das Bild erfolgreich oder erfolglos abgerufen hat. Das bedeutet, dieser Wert ist auch `true`, wenn das Bild keinen {{domxref("HTMLImageElement.src", "src")}}-Wert hat, der ein zu ladendes Bild angibt.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Ein String, der die CORS-Einstellung für dieses Bildelement speichert. Weitere Details finden Sie unter [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Attributes/crossorigin). Dieser Wert kann `null` sein, wenn CORS nicht verwendet wird.
- {{domxref("HTMLImageElement.currentSrc")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, wenn das Bild aufgrund veränderter Bedingungen angepasst wird, wie es durch geltende [Media-Queries](/de/docs/Web/CSS/CSS_media_queries) vorgeschrieben ist.
- {{domxref("HTMLImageElement.decoding")}}
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Bild dekodieren soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen erlaubten Werte sein: `sync` zum synchronen Dekodieren, `async` für asynchrones Dekodieren oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die {{domxref("HTMLImageElement.decoding", "decoding")}}-Seite für Details zu den Auswirkungen dieser Eigenschaftswerte.
- {{domxref("HTMLImageElement.fetchPriority")}}
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Abrufen des Bildes im Vergleich zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen erlaubten Werte sein: `high` für eine hohe Priorität, `low` für eine niedrige Priorität, oder `auto` um keine Präferenz anzugeben (was der Standard ist).
- {{domxref("HTMLImageElement.height")}}
  - : Ein Ganzzahlenwert, der das [`height`](/de/docs/Web/HTML/Element/img#height)-HTML-Attribut widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixel beschreibt.
- {{domxref("HTMLImageElement.isMap")}}
  - : Ein boolescher Wert, der das [`ismap`](/de/docs/Web/HTML/Element/img#ismap)-HTML-Attribut widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Image-Map ist. Dies unterscheidet sich von einer clientseitigen Image-Map, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}}, das {{HTMLElement("area")}}-Elemente enthält, erstellt wird, die die anklickbaren Bereiche im Bild angeben. Das Bild _muss_ innerhalb eines {{HTMLElement("a")}}-Elements enthalten sein; Einzelheiten finden Sie auf der `ismap`-Seite.
- {{domxref("HTMLImageElement.loading")}}
  - : Ein String, der dem Browser einen Hinweis darauf gibt, ob das Bild sofort (`eager`) oder bei Bedarf (`lazy`) geladen werden soll, um das Laden des Dokuments zu optimieren.
- {{domxref("HTMLImageElement.naturalHeight")}} {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixel repräsentiert, falls verfügbar; andernfalls zeigt es `0`. Dies ist die Höhe, die das Bild haben würde, wenn es in seiner natürlichen vollen Größe dargestellt würde.
- {{domxref("HTMLImageElement.naturalWidth")}} {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixel repräsentiert, falls verfügbar; andernfalls zeigt es `0`. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe dargestellt würde.
- {{domxref("HTMLImageElement.referrerPolicy")}}
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy)-HTML-Attribut widerspiegelt, das dem {{Glossary("user agent")}} mitteilt, wie er entscheiden soll, welchen Referrer er verwenden soll, um das Bild abzurufen. Lesen Sie diesen Artikel für Einzelheiten zu den möglichen Werten dieses Strings.
- {{domxref("HTMLImageElement.sizes")}}
  - : Ein String, der das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-HTML-Attribut widerspiegelt. Dieser String gibt eine Liste von durch Kommas getrennten bedingten Größen für das Bild an; das heißt, für eine gegebene Bildschirmgröße soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der {{domxref("HTMLImageElement.sizes", "sizes")}}-Seite für Details zum Format dieses Strings.
- {{domxref("HTMLImageElement.src")}}
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/img#src)-HTML-Attribut widerspiegelt, das die vollständige URL des Bildes einschließlich der Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- {{domxref("HTMLImageElement.srcset")}}
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-HTML-Attribut widerspiegelt. Dies gibt eine Liste von Kandidatenbildern an, die durch Kommas (`',', U+002C COMMA`) getrennt sind. Jedes Kandidatenbild ist eine URL gefolgt von einem Leerzeichen, gefolgt von einem speziell formatierten String, der die Größe des Bildes anzeigt. Die Größe kann entweder in der Breite oder als Größenmultiplikator angegeben werden. Lesen Sie die {{domxref("HTMLImageElement.srcset", "srcset")}}-Seite für Details zum Format des Größen-Substrings.
- {{domxref("HTMLImageElement.useMap")}}
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-HTML-Attribut widerspiegelt, das die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Image-Map beschreibt. Die seitenlokale URL ist ein Pfundzeichen (Hash, `#`) gefolgt von der ID des `<map>`-Elements, z.B. `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}}-Elemente, die die anklickbaren Bereiche im Bild angeben.
- {{domxref("HTMLImageElement.width")}}
  - : Ein Ganzzahlenwert, der das [`width`](/de/docs/Web/HTML/Element/img#width)-HTML-Attribut widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixel beschreibt.
- {{domxref("HTMLImageElement.x")}} {{ReadOnlyInline}}
  - : Ein Integer, der den horizontalen Versatz der linken Ränder des Bild-CSS-Layout-Box relativ zum Ursprung des enthaltenden Blocks des {{HTMLElement("html")}}-Elements angibt.
- {{domxref("HTMLImageElement.y")}} {{ReadOnlyInline}}
  - : Der integer vertikale Versatz der oberen Ränder der Bild-CSS-Layout-Box relativ zum Ursprung des enthaltenen Blocks des {{HTMLElement("html")}}-Elements.

## Veraltete Eigenschaften

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Mögliche Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; stattdessen sollte CSS verwendet werden (z.B. {{cssxref("text-align")}}, das trotz seines Namens auch mit Bildern funktioniert), um die Ausrichtung zu spezifizieren.
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : Ein String, der die Breite des Bildrandes definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}.
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : Ein Ganzzahlenwert, der die Menge an Platz (in Pixel) angibt, die links und rechts vom Bild leer gelassen werden soll.
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine lange Beschreibung der Bildinhalte zu finden ist. Dies dient dazu, das Bild automatisch in einen Hyperlink umzuwandeln. Modernes HTML sollte stattdessen ein `<img>` in einem {{HTMLElement("a")}}-Element platzieren, das den Hyperlink definiert.
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : Ein String, der den Namen des Elements darstellt.
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : Ein Integer-Wert, der die Menge an leerem Raum, in Pixel, angibt, die über und unter dem Bild gelassen werden soll.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.decode()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn das Bild dekodiert ist und es sicher ist, das Bild an das DOM anzuhängen. Dies verhindert, dass das Rendern des nächsten Frames unterbrochen werden muss, um das Bild zu dekodieren, wie es passieren würde, wenn ein noch nicht dekodiertes Bild dem DOM hinzugefügt würde.

## Fehler

Wenn ein Fehler auftritt, während versucht wird, das Bild zu laden oder darzustellen, und ein `onerror`-Ereignishandler konfiguriert wurde, um das {{domxref("HTMLElement/error_event", "error")}}-Ereignis zu behandeln, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Element/img#src)-Attribut ist leer oder `null`.
- Die angegebene `src`-URL ist dieselbe wie die URL der Seite, die der Benutzer gerade betrachtet.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Maße im `<img>`-Elementattribut angegeben wurden.
- Das angegebene Bild ist in einem vom {{Glossary("user agent")}} nicht unterstützten Format.

## Beispiel

```js
const img1 = new Image(); // Image-Konstruktor
img1.src = "image1.png";
img1.alt = "alt";
document.body.appendChild(img1);

const img2 = document.createElement("img"); // Verwendung von DOM HTMLImageElement
img2.src = "image2.jpg";
img2.alt = "alt text";
document.body.appendChild(img2);

// Verwenden des ersten Bildes im Dokument
alert(document.images[0].src);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("img")}}
