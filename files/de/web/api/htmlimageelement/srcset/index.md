---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`srcset`** ist ein String, der einen oder mehrere **Bildkandidaten-Strings** identifiziert, getrennt durch Kommata (`,`) und jeweils Bildressourcen angibt, die unter bestimmten Umständen verwendet werden sollen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichtungsdeskriptor, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des Bildes verwendet werden sollte, das durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft angegeben ist.

Die `srcset`-Eigenschaft, zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft, ist ein entscheidendes Element beim Entwerfen von responsiven Websites, da sie gemeinsam verwendet werden können, um Seiten zu erstellen, die geeignete Bilder für die Darstellungssituation verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut Breitenbeschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

## Wert

Ein String, der eine kommagetrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die bei der Bestimmung, welche Bildressource im `{{HTMLElement("img")}}`-Element angezeigt werden soll, verwendet werden.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die auf eine nicht-interaktive Grafikressource verweist. Es folgt ein Leerzeichen und dann ein Bedingungsdeskriptor, der die Umstände angibt, unter denen das angegebene Bild verwendet werden sollte. Leerzeichen, mit Ausnahme derjenigen, die die URL und den entsprechenden Bedingungsdeskriptor trennen, werden ignoriert; dies schließt sowohl führende und nachfolgende Leerzeichen als auch Leerzeichen vor oder nach jedem Komma ein.

Der Bedingungsdeskriptor kann eine von zwei Formen annehmen:

- Um anzugeben, dass die vom Bildkandidaten-String angegebene Bildressource verwendet werden sollte, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breitendeskriptor** an, der aus der Zahl besteht, die diese Breite in Pixeln angibt, gefolgt von dem Kleinbuchstaben "w". Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitendeskriptor-String `450w`. Die angegebene Breite muss eine positive, von Null verschiedene Ganzzahl sein und muss mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Deskriptor** verwenden, der angibt, unter welcher Bedingung die entsprechende Bildressource als Pixeldichte des Displays verwendet werden sollte. Dies wird angegeben, indem die Pixeldichte als positiver, von Null verschiedener Gleitkommawert gefolgt vom Kleinbuchstaben "x" angegeben wird. Um beispielsweise zu deklarieren, dass das entsprechende Bild verwendet werden sollte, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, können Sie den Pixeldichte-Deskriptor `2x` oder `2.0x` verwenden.

Wenn der Bedingungsdeskriptor nicht angegeben wird (mit anderen Worten, wenn der Bildkandidat nur eine URL liefert), wird dem Kandidaten ein Standarddeskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String liefert Versionen eines Bildes zur Verwendung bei der Standardpixeldichte (undeklariert, mit einem Standardwert von `1x` zugewiesen) sowie bei doppelter Pixeldichte (`2x`).

Wenn ein Bilderlement "x"-Deskriptoren in `srcset` enthält, betrachten Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen ihr einen Standarddeskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String liefert Versionen eines Headerbildes zur Verwendung, wenn der {{Glossary("user_agent", "User Agent's")}} Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass, wenn irgendeine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben wird, alle Ressourcen innerhalb dieses `srcset` auch mit "w"-Deskriptoren beschrieben werden müssen und das Bilderlement's [`src`](/de/docs/Web/API/HTMLImageElement/src) nicht als Kandidat betrachtet wird.

## Beispiele

### HTML

Das untenstehende HTML gibt an, dass die Standardbildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Displays verwendet werden sollte und dass eine 400-Pixel-Version (im `srcset` enthalten und einem `2x`-Deskriptor zugewiesen) für 2x-Displays verwendet werden sollte.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS gibt an, dass das Bild und sein umgebender Rahmen 200 Pixel quadratisch sein sollten und dass es einen einfachen Rahmen darum haben sollte. Ebenfalls angegeben ist das {{cssxref("word-break")}}-Attribut mit dem Wert `break-all`, um dem Browser zu sagen, dass die Zeichenfolge innerhalb der verfügbaren Breite umgebrochen werden soll, unabhängig davon, wo in der Zeichenfolge der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)-[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Es verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` gewählte URL abzurufen und anzuzeigen.

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

Im unten angezeigten Ausgabeergebnis wird die ausgewählte URL je nachdem angezeigt, ob Ihr Display die 1x- oder die 2x-Version des Bildes auswählt. Wenn Sie zufällig sowohl Standard- als auch hochauflösende Displays haben, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und die Seite neu zu laden, um zu sehen, wie sich die Ergebnisse ändern.

{{EmbedLiveSample("Examples", 640, 320)}}

Für weitere Beispiele, siehe unseren Leitfaden zu [responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsives Bild](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
