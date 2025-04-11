---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft
**`srcset`** ist ein String, der einen oder mehrere **Bildkandidaten-Strings** identifiziert, getrennt durch Kommata (`,`), wobei jeder die Bildressourcen angibt, die unter bestimmten Umständen zu verwenden sind.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichtheitsdeskriptor, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des durch die [`src`](/de/docs/Web/API/HTMLImageElement/src) Eigenschaft spezifizierten Bildes verwendet werden soll.

Die `srcset`-Eigenschaft ist zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft ein wesentlicher Bestandteil beim Entwerfen von responsiven Websites, da sie zusammen genutzt werden können, um Seiten zu erstellen, die passende Bilder für die jeweilige Darstellungssituation verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, sonst wird das `srcset` selbst ignoriert.

## Wert

Ein String, der eine kommagetrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource in dem `{{HTMLElement("img")}}`-Element dargestellt werden soll, das durch das `HTMLImageElement` repräsentiert wird.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die auf eine nicht-interaktive Grafikressource verweist. Darauf folgt ein Leerzeichen und dann ein Bedingungsdeskriptor, der die Umstände angibt, unter denen das angegebene Bild verwendet werden soll. Leerzeichen, außer dem Leerzeichen, das die URL und den entsprechenden Bedingungsdeskriptor trennt, werden ignoriert; dies schließt sowohl führende als auch nachfolgende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma ein.

Der Bedingungsdeskriptor kann eine von zwei Formen annehmen:

- Um anzugeben, dass die durch den Bildkandidaten-String spezifizierte Bildressource verwendet werden soll, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breiten-Deskriptor** an, der aus der Anzahl, die diese Breite in Pixeln angibt, gefolgt von einem kleinen Buchstaben "w" besteht. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor-String `450w`. Die angegebene Breite muss eine positive, ungleich Null ergebende ganze Zahl sein und _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Deskriptor** verwenden, der die Bedingung angibt, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Dies wird geschrieben, indem die Pixeldichte als positiver, ungleich Null ergebender Gleitkommawert angegeben wird, gefolgt von dem kleinen Buchstaben "x". Als Beispiel, um anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, können Sie den Pixeldichte-Deskriptor `2x` oder `2.0x` verwenden.

Wenn der Bedingungsdeskriptor nicht angegeben wird (in anderen Worten, der Bildkandidat bietet nur eine URL), wird dem Kandidaten ein Standard-Deskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes, das bei der Standard-Pixeldichte (nicht beschrieben, standardmäßig `1x` zugewiesen) sowie bei der doppelten Pixeldichte (`2x`) verwendet werden soll.

Wenn ein Bild-Element `srcset` "x"-Deskriptoren enthält, betrachten Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen ihm einen Standard-Deskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String bietet Versionen eines Kopfzeilenbildes, das verwendet werden soll, wenn der {{Glossary("user_agent", "User-Agent")}}-Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass wenn eine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben wird, alle Ressourcen innerhalb dieses `srcset` ebenfalls mit "w"-Deskriptoren beschrieben sein müssen, und das Bild-Element [`src`](/de/docs/Web/API/HTMLImageElement/src) nicht als Kandidat betrachtet wird.

## Beispiele

### HTML

Das untenstehende HTML zeigt an, dass die Standard-Bildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x Displays verwendet werden sollte und dass eine 400-Pixel-Version (in `srcset` enthalten und mit einem `2x` Deskriptor versehen) für 2x Displays verwendet werden soll.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS legt fest, dass das Bild und der umgebende Rahmen 200 Pixel groß sein und eine einfache Umrandung haben sollten. Außerdem wird das {{cssxref("word-break")}}-Attribut mit dem Wert `break-all` angegeben, um dem Browser mitzuteilen, dass der String innerhalb des verfügbaren Breitenbereichs umgebrochen werden soll, unabhängig davon, wo im String der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)'s [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Er verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die von dem Browser aus `srcset` ausgewählte URL abzurufen und anzuzeigen.

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

In der unten dargestellten Ausgabe entspricht die ausgewählte URL dem, ob Ihr Display die 1x- oder die 2x-Version des Bildes auswählt. Wenn Sie sowohl Standard- als auch hochauflösende Displays haben, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und die Seite neu zu laden, um die Ergebnisse zu sehen.

{{EmbedLiveSample("Examples", 640, 320)}}

Für zusätzliche Beispiele lesen Sie unseren Leitfaden zu [responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsives Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
