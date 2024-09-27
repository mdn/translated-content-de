---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`srcset`** ist ein String, der einen oder mehrere **Bildkandidaten-Strings** identifiziert, getrennt durch Kommas (`,`), wobei jeder die Bildressourcen angibt, die unter bestimmten Umständen verwendet werden sollen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichte-Deskriptor, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des Bildes verwendet werden sollte, das durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft angegeben wird.

Die `srcset`-Eigenschaft ist zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft ein wesentlicher Bestandteil beim Entwerfen responsiver Websites, da sie zusammen verwendet werden können, um Seiten zu erstellen, die geeignete Bilder für die Darstellungsumgebung verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, sonst wird das `srcset` selbst ignoriert.

## Wert

Ein String, der eine durch Kommas getrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource im {{HTMLElement("img")}}-Element präsentiert werden soll, das durch das `HTMLImageElement` repräsentiert wird.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die eine nicht-interaktive Grafikressource referenziert. Darauf folgt ein Leerzeichen und dann ein Bedingungsdeskriptor, der die Umstände angibt, unter denen das angegebene Bild verwendet werden soll. Leerzeichen, abgesehen von dem Leerzeichen, das die URL und den entsprechenden Bedingungsdeskriptor trennt, werden ignoriert; dazu gehören sowohl Leerzeichen am Anfang und Ende als auch Leerzeichen vor oder nach jedem Komma.

Der Bedingungsdeskriptor kann in einer von zwei Formen vorliegen:

- Um anzugeben, dass die durch den Bildkandidaten-String angegebene Bildressource verwendet werden sollte, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breiten-Deskriptor** an, der die Breite in Pixeln gefolgt von dem Kleinbuchstaben "w" enthält. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor-String `450w`. Die angegebene Breite muss eine positive, ungleich null, ganze Zahl sein und _muss_ der intrinsischen Breite des referenzierten Bildes entsprechen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Deskriptor** verwenden, der die Bedingung angibt, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Dies wird angegeben, indem die Pixeldichte als positive, ungleich null, Fließkommazahl gefolgt von dem Kleinbuchstaben "x" geschrieben wird. Zum Beispiel, um anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so groß wie die Standarddichte ist, können Sie den Pixeldichte-Deskriptor `2x` oder `2.0x` angeben.

Wenn der Bedingungsdeskriptor nicht angegeben ist (mit anderen Worten, der Bildkandidat bietet nur eine URL), wird dem Kandidaten ein Standard-Deskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes, die sowohl bei der Standard-Pixeldichte (unbeschrieben, mit einem Standardwert von `1x` zugewiesen) als auch bei der doppelten Pixeldichte (`2x`) verwendet werden können.

Wenn ein `srcset` eines Bild-Elements "x"-Deskriptoren enthält, betrachten Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen diesem einen Standard-Deskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String bietet Versionen eines Header-Bildes, die verwendet werden sollen, wenn der [Benutzeragent](/de/docs/Glossary/user_agent)-Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass, wenn eine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben ist, alle Ressourcen in diesem `srcset` ebenfalls mit "w"-Deskriptoren beschrieben werden müssen, und das [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut des Bildelements wird nicht als Kandidat betrachtet.

## Beispiele

### HTML

Der untenstehende HTML-Code gibt an, dass die Standard-Bildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Displays verwendet werden sollte und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Deskriptor zugewiesen) für 2x-Displays verwendet werden sollte.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS gibt an, dass das Bild und sein umgebender Kasten 200 Pixel groß sein und eine einfache Umrandung haben sollten. Ebenfalls angegeben ist das {{cssxref("word-break")}}-Attribut, mit dem Wert `break-all`, um dem Browser zu sagen, dass er den String innerhalb der verfügbaren Breite umbrechen soll, unabhängig davon, wo im String der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)-[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Er verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

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

Im unten angezeigten Output entspricht die ausgewählte URL der Frage, ob Ihr Display das 1x- oder das 2x-Bild auswählt. Wenn Sie sowohl Standard- als auch hochauflösende Displays haben, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und laden Sie die Seite neu, um zu sehen, wie sich die Ergebnisse ändern.

{{EmbedLiveSample("Examples", 640, 320)}}

Für weitere Beispiele, sehen Sie sich unseren Leitfaden zu [responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
