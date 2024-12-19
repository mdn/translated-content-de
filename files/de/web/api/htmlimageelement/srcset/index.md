---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft
**`srcset`** ist ein String, der einen oder mehrere
**Bildkandidaten-Strings** identifiziert, getrennt durch Kommata (`,`), wobei jeder Bildressourcen angibt, die unter bestimmten Umständen verwendet werden sollen.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichte-Deskriptor, der angibt, unter welchen Bedingungen dieser Kandidat anstelle des durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft spezifizierten Bildes verwendet werden soll.

Die `srcset`-Eigenschaft, zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft, ist ein entscheidender Bestandteil beim Design responsiver Websites, da sie zusammen verwendet werden können, um Seiten zu erstellen, die für die jeweilige Rendering-Situation passende Bilder verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, oder das `srcset` selbst wird ignoriert.

## Wert

Ein String, der eine durch Kommata getrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource innerhalb des durch das
{{HTMLElement("img")}}-Element repräsentierten
`HTMLImageElement` dargestellt wird.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die auf eine nicht-interaktive Grafikressource verweist. Dem folgt ein Leerzeichen und dann ein Bedingungs-Deskriptor, der angibt, unter welchen Umständen das angegebene Bild verwendet werden sollte. Leerzeichen, außer dem Leerzeichen, das die URL und den entsprechenden Bedingungs-Deskriptor trennt, werden ignoriert; dies schließt sowohl führende als auch abschließende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma ein.

Der Bedingungs-Deskriptor kann eine von zwei Formen annehmen:

- Um anzugeben, dass die durch den Bildkandidaten-String spezifizierte Bildressource verwendet werden soll, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breiten-Deskriptor** an, der die Anzahl der Pixelbreite gefolgt von dem Kleinbuchstaben "w" angibt. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn das Rendering einen 450 Pixel breiten Bild benötigt, verwenden Sie den Breiten-Deskriptor-String `450w`. Die angegebene Breite muss eine positive, ungleich null, ganze Zahl sein und _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Deskriptor** verwenden, der die Bedingung angibt, in der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Dies wird geschrieben, indem die Pixeldichte als positiver, ungleich null, Gleitkommawert angegeben wird, gefolgt von dem Kleinbuchstaben "x". Zum Beispiel, um anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, können Sie den Pixeldichte-Deskriptor `2x` oder `2.0x` angeben.

Wenn der Bedingungs-Deskriptor nicht angegeben wird (mit anderen Worten, der Bildkandidat bietet nur eine URL an), wird dem Kandidaten ein Standard-Deskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes, das bei der Standard-Pixeldichte (nicht beschrieben, Standard: `1x`) sowie bei doppelter Pixeldichte (`2x`) verwendet werden soll.

Wenn ein Bild-Element `srcset`-Deskriptoren vom Typ "x" enthält, ziehen Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten in Betracht und weisen ihr einen Standard-Deskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String bietet Versionen eines Kopfzeilenbildes für die Verwendung, wenn der {{Glossary("user_agent", "User-Agent des")}} Renderers ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass wenn irgendeine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben wird, alle Ressourcen innerhalb dieses `srcset` ebenfalls mit "w"-Deskriptoren beschrieben werden müssen, und das Bild-Element [`src`](/de/docs/Web/API/HTMLImageElement/src) nicht als Kandidat betrachtet wird.

## Beispiele

### HTML

Das unten stehende HTML zeigt an, dass die Standard-Bildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Displays verwendet werden soll, und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Deskriptor versehen) für 2x-Displays verwendet werden soll.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
    alt="Clock"
    srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 2x" />
</div>
```

### CSS

Das CSS gibt an, dass das Bild und sein umgebendes Feld 200 Pixel groß sein sollen und einen einfachen Rahmen um sich haben sollten. Außerdem wird das
{{cssxref("word-break")}}-Attribut bereitgestellt, das den `break-all`-Wert verwendet, um dem Browser mitzuteilen, dass er die Zeichenfolge innerhalb der verfügbaren Breite umbrechen soll, unabhängig davon, wo in der Zeichenfolge der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)'s
[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Er verwendet die
[`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

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

Im unten angezeigten Ergebnis entspricht die ausgewählte URL der Frage, ob Ihr Display die 1x- oder die 2x-Version des Bildes auswählt. Wenn Sie sowohl Standard- als auch hochaufgelöste Displays haben, versuchen Sie, dieses Fenster zwischen ihnen zu verschieben und die Seite neu zu laden, um die Ergebnisse zu ändern.

{{EmbedLiveSample("Examples", 640, 320)}}

Für zusätzliche Beispiele siehe unseren Leitfaden zu [responsiven Bildern](/de/docs/Web/HTML/Responsive_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
- [Bilddateityp- und Format-Leitfaden](/de/docs/Web/Media/Formats/Image_types)
