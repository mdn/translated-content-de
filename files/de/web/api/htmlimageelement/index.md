---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{APIRef("HTML DOM")}}

Die **`HTMLImageElement`** Schnittstelle repräsentiert ein HTML {{HTMLElement("img")}} Element und bietet die Eigenschaften und Methoden, die zur Manipulation von Bild-Elementen verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`Image()`](/de/docs/Web/API/HTMLImageElement/Image)
  - : Der `Image()`-Konstruktor erstellt und gibt ein neues `HTMLImageElement`-Objekt zurück, das ein HTML {{HTMLElement("img")}} Element repräsentiert, welches an keinen DOM-Baum angehängt ist. Es akzeptiert optionale Breiten- und Höhenparameter. Wenn es ohne Parameter aufgerufen wird, ist `new Image()` äquivalent zu einem Aufruf von [`document.createElement('img')`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/img#alt) HTML-Attribut widerspiegelt und somit den alternativen Fallback-Inhalt angibt, der angezeigt wird, wenn das Bild nicht geladen wurde.
- [`HTMLImageElement.attributionSrc`](/de/docs/Web/API/HTMLImageElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Der Wert des [`attributionsrc`](/de/docs/Web/HTML/Element/img#attributionsrc) Attributs auf einem {{htmlelement("img")}} Element wird programmatisch abgerufen und gesetzt, was den Wert dieses Attributs widerspiegelt. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit dem Bildantrag senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) bzw. einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren.
- [`HTMLImageElement.complete`](/de/docs/Web/API/HTMLImageElement/complete) {{ReadOnlyInline}}
  - : Gibt einen booleanen Wert zurück, der `true` ist, wenn der Browser das Bild erfolgreich oder nicht erfolgreich geladen hat. Das bedeutet, dieser Wert ist auch `true`, wenn das Bild keinen [`src`](/de/docs/Web/API/HTMLImageElement/src) Wert hat, der ein zu ladendes Bild angibt.
- [`HTMLImageElement.crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin)
  - : Ein String, der die CORS-Einstellungen für dieses Bildelement angibt. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Details. Dies kann `null` sein, wenn CORS nicht verwendet wird.
- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die URL repräsentiert, von der das aktuell angezeigte Bild geladen wurde. Dies kann sich ändern, da das Bild aufgrund sich ändernder Bedingungen angepasst wird, wie es von vorhandenen [Media Queries](/de/docs/Web/CSS/CSS_media_queries) vorgeschrieben wird.
- [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie das Bild dekodiert werden soll. Wenn dieser Wert festgelegt ist, muss er einer der möglichen erlaubten Werte sein: `sync` für eine synchrone Dekodierung, `async` für eine asynchrone Dekodierung oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Lesen Sie die [`decoding`](/de/docs/Web/API/HTMLImageElement/decoding) Seite für Details zu den Auswirkungen der Werte dieser Eigenschaft.
- [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie er das Laden des Bildes im Verhältnis zu anderen Bildern priorisieren soll. Wenn dieser Wert angegeben ist, muss er einer der erlaubten Werte sein: `high` für hohe Priorität, `low` für niedrige Priorität oder `auto`, um keine Präferenz anzugeben (der Standard).
- [`HTMLImageElement.height`](/de/docs/Web/API/HTMLImageElement/height)
  - : Ein ganzzahliger Wert, der das [`height`](/de/docs/Web/HTML/Element/img#height) HTML-Attribut widerspiegelt und die gerenderte Höhe des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.isMap`](/de/docs/Web/API/HTMLImageElement/isMap)
  - : Ein boolescher Wert, der das [`ismap`](/de/docs/Web/HTML/Element/img#ismap) HTML-Attribut widerspiegelt und angibt, dass das Bild Teil einer serverseitigen Image-Map ist. Dies unterscheidet sich von einer clientseitigen Image-Map, die mit einem `<img>`-Element und einem entsprechenden {{HTMLElement("map")}} spezifiziert wird, welches {{HTMLElement("area")}} Elemente enthält, die die klickbaren Bereiche im Bild kennzeichnen. Das Bild _muss_ in ein {{HTMLElement("a")}} Element eingebettet werden; siehe die `ismap` Seite für Details.
- [`HTMLImageElement.loading`](/de/docs/Web/API/HTMLImageElement/loading)
  - : Ein String, der dem Browser einen Hinweis gibt, wie das Dokument optimiert geladen werden soll, indem er bestimmt, ob das Bild sofort (`eager`) oder bei Bedarf (`lazy`) geladen wird.
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) {{ReadOnlyInline}}
  - : Gibt einen ganzzahligen Wert zurück, der die intrinsische Höhe des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls zeigt er `0`. Dies ist die Höhe, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) {{ReadOnlyInline}}
  - : Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt, wenn verfügbar; andernfalls zeigt er `0`. Dies ist die Breite, die das Bild hätte, wenn es in seiner natürlichen vollen Größe gerendert würde.
- [`HTMLImageElement.referrerPolicy`](/de/docs/Web/API/HTMLImageElement/referrerPolicy)
  - : Ein String, der das [`referrerpolicy`](/de/docs/Web/HTML/Element/img#referrerpolicy) HTML-Attribut widerspiegelt, das dem {{Glossary("user_agent", "User-Agent")}} mitteilt, wie er den Referrer auswählen soll, um das Bild abzurufen. Lesen Sie diesen Artikel für Details zu den möglichen Werten dieses Strings.
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)
  - : Ein String, der das [`sizes`](/de/docs/Web/HTML/Element/img#sizes) HTML-Attribut widerspiegelt. Dieser String spezifiziert eine Liste von durch Komma getrennten bedingten Größen für das Bild. Das heißt, für eine gegebene Ansichtsgröße soll eine bestimmte Bildgröße verwendet werden. Lesen Sie die Dokumentation auf der Seite [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes) für Details zum Format dieses Strings.
- [`HTMLImageElement.src`](/de/docs/Web/API/HTMLImageElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/img#src) HTML-Attribut widerspiegelt, das die vollständige URL des Bildes inklusive Basis-URI enthält. Sie können ein anderes Bild in das Element laden, indem Sie die URL im `src`-Attribut ändern.
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
  - : Ein String, der das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) HTML-Attribut widerspiegelt. Dies spezifiziert eine Liste von Kandidatenbildern, getrennt durch Kommas (`',', U+002C COMMA`). Jedes Kandidatenbild ist eine URL, gefolgt von einem Leerzeichen und einem speziell formatierten String, der die Größe des Bildes angibt. Die Größe kann entweder durch die Breite oder einen Größenmultiplikator angegeben werden. Lesen Sie die Seite [`srcset`](/de/docs/Web/API/HTMLImageElement/srcset) für Details zum Format des Größen-Strings.
- [`HTMLImageElement.useMap`](/de/docs/Web/API/HTMLImageElement/useMap)
  - : Ein String, der das [`usemap`](/de/docs/Web/HTML/Element/img#usemap) HTML-Attribut widerspiegelt und die seitenlokale URL des {{HTMLElement("map")}}-Elements enthält, das die zu verwendende Image-Map beschreibt. Die seitenlokale URL ist ein Nummernzeichen (`#`) gefolgt von der ID des `<map>`-Elements, wie `#my-map-element`. Das `<map>` enthält wiederum {{HTMLElement("area")}} Elemente, die die klickbaren Bereiche im Bild angeben.
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
  - : Ein ganzzahliger Wert, der das [`width`](/de/docs/Web/HTML/Element/img#width) HTML-Attribut widerspiegelt und die gerenderte Breite des Bildes in CSS-Pixeln angibt.
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x) {{ReadOnlyInline}}
  - : Ein Integer, der den horizontalen Versatz der linken Rahmenkante des Bildes relativ zum Ursprung des CSS-Layout-Blocks des {{HTMLElement("html")}} Elements angibt.
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y) {{ReadOnlyInline}}
  - : Der Integer, der den vertikalen Versatz der oberen Rahmenkante des Bildes relativ zum Ursprung des CSS-Layout-Blocks des {{HTMLElement("html")}} Elements angibt.

## Veraltete Eigenschaften

- [`HTMLImageElement.align`](/de/docs/Web/API/HTMLImageElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung des Bildes in Bezug auf den umgebenden Kontext angibt. Die möglichen Werte sind `"left"`, `"right"`, `"justify"` und `"center"`. Dies ist veraltet; Sie sollten stattdessen CSS verwenden (zum Beispiel {{cssxref("text-align")}}, das trotz seines Namens mit Bildern funktioniert), um die Ausrichtung anzugeben.
- [`HTMLImageElement.border`](/de/docs/Web/API/HTMLImageElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des den Bild umgebenden Rahmens definiert. Dies ist veraltet; verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("border")}}.
- [`HTMLImageElement.hspace`](/de/docs/Web/API/HTMLImageElement/hspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der angibt, wie viel Platz (in Pixeln) auf der linken und rechten Seite des Bildes freizuhalten ist.
- [`HTMLImageElement.longDesc`](/de/docs/Web/API/HTMLImageElement/longDesc) {{deprecated_inline}}
  - : Ein String, der die URL angibt, unter der eine lange Beschreibung des Bildinhalts gefunden werden kann. Dies wird verwendet, um das Bild automatisch in einen Hyperlink zu verwandeln. Modernes HTML sollte stattdessen ein `<img>` in ein {{HTMLElement("a")}} Element einfügen, das den Hyperlink definiert.
- [`HTMLImageElement.name`](/de/docs/Web/API/HTMLImageElement/name) {{deprecated_inline}}
  - : Ein String, der den Namen des Elements repräsentiert.
- [`HTMLImageElement.vspace`](/de/docs/Web/API/HTMLImageElement/vspace) {{deprecated_inline}}
  - : Ein ganzzahliger Wert, der angibt, wie viel Platz, in Pixeln, ober- und unterhalb des Bildes freizuhalten ist.

## Instanzmethoden

_Übernimmt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLImageElement.decode()`](/de/docs/Web/API/HTMLImageElement/decode)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn das Bild dekodiert ist und es sicher ist, das Bild an den DOM anzufügen. Dies verhindert, dass das Rendering des nächsten Frames pausieren muss, um das Bild zu dekodieren, wie es der Fall wäre, wenn ein nicht dekodiertes Bild dem DOM hinzugefügt würde.

## Fehler

Wenn beim Laden oder Rendern des Bildes ein Fehler auftritt und ein `onerror` Event-Handler eingerichtet ist, um das [`error`](/de/docs/Web/API/HTMLElement/error_event) Event zu behandeln, wird dieser Event-Handler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das [`src`](/de/docs/Web/HTML/Element/img#src) Attribut ist leer oder `null`.
- Die angegebene `src` URL ist dieselbe wie die URL der Seite, die der Benutzer derzeit besucht.
- Das angegebene Bild ist in irgendeiner Weise beschädigt, die es daran hindert, geladen zu werden.
- Die Metadaten des angegebenen Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen und keine Dimensionen im `<img>`-Element' 's Attributen angegeben wurden.
- Das angegebene Bild ist in einem Format, das vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützt wird.

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
