---
title: "HTMLImageElement: srcset-Eigenschaft"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`srcset`** ist ein String, der einen oder mehrere **Bildkandidaten-Strings** identifiziert. Diese sind durch Kommas (`,`) getrennt, wobei jeder Bildressourcen für bestimmte Bedingungen angibt.

Jeder Bildkandidaten-String enthält eine Bild-URL und einen optionalen Breiten- oder Pixeldichtedateien-Beschreiber, der die Bedingungen angibt, unter denen dieser Kandidat anstelle des Bildes verwendet wird, das durch die [`src`](/de/docs/Web/API/HTMLImageElement/src)-Eigenschaft angegeben ist.

Die `srcset`-Eigenschaft, zusammen mit der [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Eigenschaft, ist ein entscheidender Bestandteil beim Entwerfen responsiver Websites, da sie zusammen verwendet werden können, um Seiten zu erstellen, die geeignete Bilder für die jeweilige Renderingsituation nutzen.

> [!NOTE]
> Wenn das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, oder das `srcset` wird ignoriert.

## Wert

Ein String, der eine kommaseparierte Liste von einem oder mehreren Bildkandidaten-Strings enthält, die verwendet werden, um zu bestimmen, welche Bildressource im {{HTMLElement("img")}}-Element, das durch das `HTMLImageElement` repräsentiert wird, angezeigt wird.

Jeder Bildkandidaten-String muss mit einer gültigen URL beginnen, die eine nicht interaktive Grafikressource referenziert. Darauf folgt ein Leerraum und dann ein Konditionsbeschreiber, der die Umstände angibt, unter denen das angegebene Bild verwendet werden soll. Leerzeichen, abgesehen von dem Leerraum, der die URL und den entsprechenden Konditionsbeschreiber trennt, werden ignoriert; dazu gehören sowohl führende als auch nachfolgende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma.

Der Konditionsbeschreiber kann eine von zwei Formen annehmen:

- Um anzugeben, dass die Bildressource, die durch den Bildkandidaten-String angegeben ist, verwendet werden sollte, wenn das Bild mit einer bestimmten Breite in Pixeln gerendert wird, geben Sie einen **Breitenbeschreiber** an, der aus einer Zahl besteht, die diese Breite in Pixeln angibt, gefolgt von dem Kleinbuchstaben "w". Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber-String `450w`. Die angegebene Breite muss eine positive, ungleiche Null und ganze Zahl sein und _muss_ der intrinsischen Breite des referenzierten Bildes entsprechen. Wenn ein `srcset` "w"-Beschreiber enthält, verwendet der Browser diese Beschreiber zusammen mit dem [`sizes`](/de/docs/Web/API/HTMLImageElement/sizes)-Attribut, um eine Ressource auszuwählen.
- Alternativ können Sie einen **Pixeldichte-Beschreiber** verwenden, der die Bedingung angibt, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Dies wird angegeben, indem die Pixeldichte als positiver, ungleich nuller Gleitkommawert gefolgt von dem Kleinbuchstaben "x" angegeben wird. Um zum Beispiel anzugeben, dass das entsprechende Bild verwendet werden soll, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, können Sie den Pixeldichte-Beschreiber `2x` oder `2.0x` verwenden.

Wenn der Konditionsbeschreiber nicht angegeben wird (mit anderen Worten, der Bildkandidat liefert nur eine URL), wird dem Kandidaten ein Standardbeschreiber von "1x" zugewiesen.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x"
```

Dieser String liefert Versionen eines Bildes, die bei der Standard-Pixeldichte (unangeschrieben, mit einem Standardwert von `1x`) sowie bei doppelter Pixeldichte (`2x`) verwendet werden.

Wenn ein Bild-Element `srcset` "x"-Beschreiber enthält, berücksichtigen Browser auch die URL im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut (falls vorhanden) als Kandidaten und weisen ihr einen Standardbeschreiber von `1x` zu.

```plain
"header640.png 640w, header960.png 960w, header1024.png 1024w"
```

Dieser String liefert Versionen eines Header-Bildes, die verwendet werden sollen, wenn der {{Glossary("user_agent", "User-Agent")}}-Renderer ein Bild mit einer Breite von 640px, 960px oder 1024px benötigt.

Beachten Sie, dass wenn in einem `srcset` irgendeine Ressource mit einem "w"-Beschreiber beschrieben wird, alle Ressourcen innerhalb dieses `srcset` ebenfalls mit "w"-Beschreibern beschrieben werden müssen und das Bild-Element's [`src`](/de/docs/Web/API/HTMLImageElement/src) nicht als Kandidat betrachtet wird.

## Beispiele

### HTML

Das untenstehende HTML gibt an, dass die Standardbildressource, die im [`src`](/de/docs/Web/API/HTMLImageElement/src)-Attribut enthalten ist, für 1x-Anzeigen verwendet werden soll und dass eine 400-Pixel-Version (im `srcset` enthalten und mit einem `2x`-Beschreiber versehen) für 2x-Anzeigen verwendet werden soll.

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

Das CSS gibt an, dass das Bild und sein umgebendes Box 200 Pixel groß sein sollen und eine einfache Umrandung haben sollen. Ebenfalls bereitgestellt ist das {{cssxref("word-break")}}-Attribut, das mit dem Wert `break-all` dem Browser mitteilt, den String unabhängig davon, wo im String der Umbruch erfolgen muss, innerhalb der verfügbaren Breite umzubrechen.

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

Der folgende Code verwendet die [`currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)-Eigenschaft des Bildes, um die vom Browser aus dem `srcset` ausgewählte URL abzurufen und anzuzeigen.

```js
const box = document.querySelector(".box");
const image = box.querySelector("img");

const newElem = document.createElement("p");
newElem.textContent = "Image: ";
newElem.appendChild(document.createElement("code")).textContent =
  image.currentSrc;
box.appendChild(newElem);
```

### Ergebnis

Im unten gezeigten Ergebnis wird die ausgewählte URL entsprechend der Frage, ob Ihr Display die 1x- oder die 2x-Version des Bildes auswählt, übereinstimmen. Wenn Sie sowohl über Standardspeicherung als auch über hochdichte Displays verfügen, versuchen Sie, dieses Fenster dazwischen zu verschieben und die Seite neu zu laden, um die Änderung der Ergebnisse zu sehen.

{{EmbedLiveSample("Examples", 640, 320)}}

Für zusätzliche Beispiele siehe unseren Leitfaden zu [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
