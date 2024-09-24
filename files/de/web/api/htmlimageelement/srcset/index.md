---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die {{domxref("HTMLImageElement")}}-Eigenschaft **`srcset`** ist ein String, der eine oder mehrere **Bildkandidaten-Strings** identifiziert. Diese sind durch Kommata (`,`) getrennt, wobei jeder angibt, unter welchen Umständen Bildressourcen verwendet werden sollen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichtedeklarator, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des Bildes verwendet werden soll, das durch die {{domxref("HTMLImageElement.src", "src")}}-Eigenschaft angegeben ist.

Die `srcset`-Eigenschaft ist zusammen mit der {{domxref("HTMLImageElement.sizes", "sizes")}}-Eigenschaft ein entscheidender Bestandteil beim Design responsiver Websites, da sie zusammen verwendet werden können, um Seiten zu gestalten, die für die jeweilige Darstellungssituation geeignete Bilder nutzen.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut Breitenbeschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, ansonsten wird das `srcset` ignoriert.

## Wert

Ein String, der eine durch Kommata getrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource innerhalb des durch das `HTMLImageElement` dargestellten {{HTMLElement("img")}}-Elements präsentiert werden soll.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die auf eine nicht-interaktive Grafikressource verweist. Danach folgt ein Leerzeichen und dann ein Bedingungsdeklarator, der die Umstände angibt, unter denen das angegebene Bild verwendet werden soll. Leerzeichen, außer dem Leerzeichen zwischen der URL und dem entsprechenden Bedingungsdeklarator, werden ignoriert; dies schließt sowohl führende und nachfolgende Leerzeichen als auch Leerzeichen vor oder nach jedem Komma ein.

Der Bedingungsdeklarator kann eine von zwei Formen annehmen:

- Um anzugeben, dass die durch den Bildkandidaten-String angegebene Bildressource verwendet werden soll, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breitenbeschreiber** an, der aus einer Zahl besteht, die diese Breite in Pixeln angibt, gefolgt von dem Kleinbuchstaben "w". Zum Beispiel, um eine Bildressource für den Renderer bereitzustellen, wenn er ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber-String `450w`. Die angegebene Breite muss eine positive, nicht null, ganze Zahl sein und _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Wenn ein `srcset` "w"-Beschreiber enthält, verwendet der Browser diese Beschreiber zusammen mit dem {{domxref("HTMLImageElement.sizes", "sizes")}}-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichtedeklarator** verwenden, der die Bedingung angibt, unter der die entsprechende Bildressource bei der Pixeldichte des Displays verwendet werden soll. Dies wird geschrieben, indem die Pixeldichte als positiver, nicht null, Fließkommawert angegeben wird, gefolgt von dem Kleinbuchstaben "x". Ein Beispiel: Um anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so groß wie die Standarddichte ist, können Sie den Pixeldichtedeklarator `2x` oder `2.0x` angeben.

Wenn der Bedingungsdeklarator nicht angegeben ist (mit anderen Worten, der Bildkandidat bietet nur eine URL), wird dem Kandidaten ein Standarddeklarator von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes für die Standardpixeldichte (nicht beschrieben, mit einem Standardwert von `1x` zugewiesen) sowie für die doppelte Pixeldichte (`2x`).

Wenn ein Bild-Element `x`-Beschreiber im `srcset` enthält, ziehen Browser auch die URL im {{domxref("HTMLImageElement.src", "src")}}-Attribut (falls vorhanden) als Kandidaten in Betracht und weisen ihm einen Standarddeklarator von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String bietet Versionen eines Header-Bildes, die verwendet werden, wenn der {{Glossary("user agent", "user agent's")}} Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass wenn eine Ressource in einem `srcset` mit einem "w"-Deklarator beschrieben wird, alle Ressourcen innerhalb dieses `srcset` ebenfalls mit "w"-Deklaratoren beschrieben werden müssen und das Bild-Element {{domxref("HTMLImageElement.src", "src")}} nicht als Kandidat gilt.

## Beispiele

### HTML

Das folgende HTML zeigt an, dass die Standardbildressource, die im {{domxref("HTMLImageElement.src", "src")}}-Attribut enthalten ist, für 1x-Displays verwendet werden soll und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Deklarator versehen) für 2x-Displays verwendet werden soll.

```html
<div class="box">
  <img
    src="/de/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/de/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS gibt an, dass das Bild und seine umgebende Box 200 Pixel groß sein sollen und einen einfachen Rahmen haben sollen. Auch die {{cssxref("word-break")}}-Eigenschaft wird bereitgestellt, die den Wert `break-all` verwendet, um dem Browser mitzuteilen, den String innerhalb der verfügbaren Breite umzubrechen, unabhängig davon, wo im String der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das {{domxref("Window", "window")}}'s {{domxref("Window.load_event", "load")}}-Ereignis ausgeführt. Er verwendet die {{domxref("HTMLImageElement.currentSrc", "currentSrc")}}-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

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

Im darunter angezeigten Output wird die ausgewählte URL damit übereinstimmen, ob Ihr Display die 1x- oder 2x-Version des Bildes auswählt. Falls Sie über sowohl Standard- als auch hochauflösende Displays verfügen, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und die Seite neu zu laden, um die Ergebnisse zu sehen.

{{EmbedLiveSample("Examples", 640, 320)}}

Für zusätzliche Beispiele sehen Sie bitte unseren Leitfaden zu [responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
