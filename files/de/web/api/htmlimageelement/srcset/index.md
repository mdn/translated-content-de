---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: f4372ac9926fc2a1cbe408dae02b381b7f1909da
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft
**`srcset`** ist ein String, der einen oder mehrere
**Bildkandidaten-Strings** identifiziert, getrennt durch Kommata (`,`), die jeweils
Bildressourcen spezifizieren, die unter bestimmten Umständen verwendet werden sollen.

Jeder Bildkandidat-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichte-Deskriptor,
der angibt, unter welchen Bedingungen dieser Kandidat anstelle des durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft spezifizierten Bildes verwendet werden soll.

Die `srcset`-Eigenschaft, zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft, ist ein wesentlicher Bestandteil beim Design responsiver Webseiten, da sie zusammen verwendet werden können, um Seiten zu erstellen, die für die jeweilige Darstellungssituation geeignete Bilder verwenden.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

## Wert

Ein String, der eine kommagetrennte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource innerhalb des
{{HTMLElement("img")}}-Elements dargestellt werden soll, das durch das
`HTMLImageElement` repräsentiert wird.

Jeder Bildkandidat-String muss mit einer gültigen URL beginnen, die eine nicht-interaktive Grafikressource referenziert. Dies wird gefolgt von einem Leerraum und dann einem Bedingungs-Deskriptor, der die Umstände angibt, unter denen das angegebene Bild verwendet werden sollte. Leerzeichen, mit Ausnahme derjenigen, die die URL und den entsprechenden Bedingungs-Deskriptor trennen, werden ignoriert; dies schließt sowohl führende und nachfolgende Leerzeichen als auch Leerzeichen vor oder nach jedem Komma ein.

Der Bedingungs-Deskriptor kann eine von zwei Formen annehmen:

- Um anzugeben, dass die durch den Bildkandidaten-String angegebene Bildressource verwendet werden soll, wenn das Bild mit einer bestimmten Breite in Pixel gerendert wird, liefern Sie einen **Breitendeskriptor**, der aus der Zahl, die diese Breite in Pixeln angibt, gefolgt von dem Kleinbuchstaben "w" besteht. Beispielsweise, um eine Bildressource bereitzustellen, die verwendet wird, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitendeskriptor-String `450w`. Die angegebene Breite muss eine positive, nicht null, ganze Zahl sein und _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Deskriptor** verwenden, der die Bedingung angibt, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden sollte. Dies wird angegeben, indem die Pixeldichte als positiver, nicht null, Gleitkommawert geschrieben wird, gefolgt vom Kleinbuchstaben "x". Beispielsweise, um anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, können Sie den Pixeldichte-Deskriptor `2x` oder `2.0x` angeben.

Wenn der Bedingungs-Deskriptor nicht angegeben wird (mit anderen Worten, der Bildkandidat liefert nur eine URL), wird dem Kandidaten ein Standard-Deskriptor von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String bietet Versionen eines Bildes sowohl für die Standard-Pixeldichte (nicht beschrieben, Standardwert `1x` zugewiesen) als auch für die doppelte Pixeldichte (`2x`) an.

Wenn das `srcset` eines Bildelements "x"-Deskriptoren enthält, betrachten Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen ihr einen Standard-Deskriptor von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String liefert Versionen eines Header-Bildes, die verwendet werden sollen, wenn der {{Glossary("user_agent", "Benutzeragent")}}-Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass, wenn eine Ressource in einem `srcset` mit einem "w"-Deskriptor beschrieben ist, alle Ressourcen innerhalb dieses `srcset` ebenfalls mit "w"-Deskriptoren beschrieben werden müssen und das [`src`](/de/docs/Web/API/HTMLImageElement/src) des Bildelements nicht als Kandidat betrachtet wird.

## Beispiele

### HTML

Das untenstehende HTML gibt an, dass die Standardbildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Anzeigen verwendet werden sollte und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Deskriptor zugewiesen) für 2x-Anzeigen verwendet werden sollte.

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png"
    alt="Clock"
    srcset="
      /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 2x
    " />
</div>
```

### CSS

Das CSS spezifiziert, dass das Bild und sein umgebendes Rechteck 200 Pixel im Quadrat sein und einen einfachen Rahmen darum haben sollten. Ebenfalls angegeben wird das {{cssxref("word-break")}}-Attribut, das den `break-all`-Wert verwendet, um dem Browser mitzuteilen, den String innerhalb der verfügbaren Breite umzubrechen, unabhängig davon, wo im String der Umbruch erfolgen muss.

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

Der folgende Code wird innerhalb eines Handlers für das [`window`](/de/docs/Web/API/Window)'s [`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgeführt. Er verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

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

### Resultat

Im unten angezeigten Ergebnis wird die ausgewählte URL je nach Anzeige entweder die 1x- oder die 2x-Version des Bildes widerspiegeln. Wenn Sie sowohl Standard- als auch Hochauflösungsanzeigen haben, versuchen Sie, dieses Fenster zwischen ihnen hin und her zu bewegen und die Seite neu zu laden, um die Ergebnisse zu sehen, die sich ändern.

{{EmbedLiveSample("Examples", 640, 320)}}

Für weitere Beispiele sehen Sie sich unseren Leitfaden zu [responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsives Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
