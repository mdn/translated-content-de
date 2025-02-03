---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`srcset`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ist ein String, der eine oder mehrere **Bildkandidaten-Strings** identifiziert, getrennt durch Kommas (`,`), die jeweils Bildressourcen angeben, die unter bestimmten Umständen verwendet werden sollen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichte-Deskriptor, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft spezifizierten Bildes verwendet werden soll.

Die `srcset`-Eigenschaft ist zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft ein entscheidender Bestandteil beim Gestalten responsiver Webseiten, da sie zusammen verwendet werden können, um Seiten zu erstellen, die für die jeweilige Darstellungssituation geeignete Bilder verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, oder das `srcset` wird ignoriert.

## Wert

Ein String, der eine durch Kommas getrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource in dem durch `HTMLImageElement` repräsentierten {{HTMLElement("img")}}-Element angezeigt werden soll.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die eine nicht-interaktive grafische Ressource referenziert. Darauf folgt ein Leerzeichen und dann ein Konditionsdeskriptor, der die Umstände angibt, unter denen das angegebene Bild verwendet werden soll. Leerzeichen, abgesehen von dem Leerzeichen, das die URL und den entsprechenden Konditionsdeskriptor trennt, werden ignoriert; dies schließt sowohl führende und nachgestellte Leerzeichen als auch Leerzeichen vor oder nach jedem Komma ein.

Der Konditionsdeskriptor kann in einer von zwei Formen vorliegen:

- Um anzugeben, dass die durch den Bildkandidaten-String spezifizierte Bildressource verwendet werden soll, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breiten-Deskriptor** an, der aus der Zahl besteht, die diese Breite in Pixeln angibt, gefolgt von dem Kleinbuchstaben "w". Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet wird, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor-String `450w`. Die angegebene Breite muss eine positive, nicht null Zahl sein und _muss_ der intrinsischen Breite des referenzierten Bildes entsprechen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichten-Deskriptor** verwenden, der angibt, unter welchen Bedingungen die entsprechende Bildressource in Abhängigkeit von der Pixeldichte des Displays verwendet werden sollte. Dies erfolgt, indem die Pixeldichte als positiver, nicht null, Gleitkommawert angegeben wird, gefolgt von dem Kleinbuchstaben "x". Als Beispiel, um zu sagen, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, können Sie den Pixeldichten-Deskriptor `2x` oder `2.0x` angeben.

Wenn der Konditionsdeskriptor nicht bereitgestellt wird (mit anderen Worten, der Bildkandidat bietet nur eine URL), wird dem Kandidaten ein Standarddeskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes, die bei der Standardpixeldichte (nicht beschrieben, als Standard `1x` zugewiesen) sowie der doppelten Pixeldichte (`2x`) verwendet werden sollen.

Wenn das `srcset` eines Bildelements "x"-Deskriptoren enthält, betrachten Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen ihr einen Standarddeskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String bietet Versionen eines Header-Bildes zur Verwendung, wenn der {{Glossary("user_agent", "User-Agent")}}-Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass, wenn eine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben wird, alle Ressourcen innerhalb dieses `srcset` auch mit "w"-Deskriptoren beschrieben werden müssen und das Bild-Element [`src`](/de/docs/Web/API/HTMLImageElement/src) nicht als Kandidat berücksichtigt wird.

## Beispiele

### HTML

Das folgende HTML gibt an, dass die Standardbildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Displays verwendet werden soll und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Deskriptor versehen) für 2x-Displays verwendet werden soll.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS spezifiziert, dass das Bild und sein umgebendes Feld 200 Pixel groß sein sollen und einen einfachen Rahmen um sich haben sollen. Außerdem wird das {{cssxref("word-break")}}-Attribut mit dem Wert `break-all` bereitgestellt, um dem Browser mitzuteilen, dass der Text innerhalb der verfügbaren Breite umgebrochen werden soll, unabhängig davon, wo im Text der Umbruch erfolgen muss.

```css
.box {
  width: 200px;
  border: 2px solid rgb(150 150 150);
  padding: 0.5em;
  word-break: break-all;
}

.box img {
  width: 200px;
}
```

### JavaScript

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)-[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Er verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die von dem Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

```js
window.addEventListener("load", () => {
  const box = document.querySelector(".box");
  const image = box.querySelector("img");

  const newElem = document.createElement("p");
  newElem.textContent = "Image: ";
  newElem.appendChild(document.createElement("code")).textContent =
    image.currentSrc;
  box.appendChild(newElem);
});
```

### Ergebnis

Im angezeigten Ergebnis unten entspricht die ausgewählte URL der Frage, ob Ihr Display die 1x- oder die 2x-Version des Bildes ausgewählt hat. Wenn Sie sowohl Standard- als auch hochauflösende Displays haben, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und die Seite neu zu laden, um die Änderungen zu sehen.

{{EmbedLiveSample("Examples", 640, 320)}}

Für weitere Beispiele siehe unseren Leitfaden zu [responsive images](/de/docs/Web/HTML/Responsive_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
- [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
