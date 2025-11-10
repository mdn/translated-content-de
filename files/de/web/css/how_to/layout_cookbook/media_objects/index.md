---
title: Medienobjekte
slug: Web/CSS/How_to/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das _Medienobjekt_ ist ein Muster, das wir häufig im Web sehen. Es bezieht sich auf eine zweispaltige Box mit einem Bild auf einer Seite und beschreibendem Text auf der anderen, z.B. ein Social Media Post.

![Beispiel eines Medienobjekts mit Profilbild auf der linken Seite und Lorem Ipsum Text auf der rechten Seite, der 80 % des Platzes einnimmt](media-object.png)

## Anforderungen

Das Medienobjekt-Muster benötigt einige oder alle der folgenden Eigenschaften:

- Auf Mobilgeräten gestapelt, zwei Spalten auf dem Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Medienobjekte können geschachtelt sein.
- Das Medienobjekt sollte den Inhalt klären, egal welche Seite höher ist.

## Das Rezept

Klicken Sie auf "Play" in den folgenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___media-objects-example
<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/sharp-account_box-24px.svg"
      width="80px"
      alt="Account" />
  </div>
  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer"></div>
</div>
```

```html hidden live-sample___media-objects-example
<div class="media media-flip">
  <div class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </div>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>
  <div class="footer">An optional footer goes here.</div>
</div>

<div class="media">
  <a class="img">
    <img
      src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
      alt="Balloons" />
  </a>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
      vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit
      lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque
      porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis
      condimentum.
    </p>
  </div>

  <div class="footer"></div>

  <div class="media">
    <a class="img">
      <img
        src="https://mdn.github.io/shared-assets/images/examples/balloons_square.jpg"
        alt="Balloons" />
    </a>

    <div class="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
        vitae ligula sit amet maximus.
      </p>
    </div>

    <div class="footer"></div>
  </div>
</div>
```

```css live-sample___media-objects-example
body {
  font: 1.2em sans-serif;
}

img {
  max-width: 100%;
}

p {
  margin: 0 0 1em 0;
}

@media (width >= 500px) {
  .media {
    display: grid;
    grid-template-columns: fit-content(200px) 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image content"
      "image footer";
    grid-gap: 20px;
    margin-bottom: 4em;
  }

  .media-flip {
    grid-template-columns: 1fr fit-content(250px);
    grid-template-areas:
      "content image"
      "footer image";
  }

  .img {
    grid-area: image;
  }

  .content {
    grid-area: content;
  }

  .footer {
    grid-area: footer;
  }
}
```

{{EmbedLiveSample("media-objects-example", "", "1500px")}}

## Getroffene Entscheidungen

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) für das Medienobjekt zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn ich es benötige. Das bedeutet, dass, wenn wir einen Footer haben, und darüber kurzen Inhalt, der Footer nach unten an das Ende des Medienobjekts gedrückt werden kann.

Ein weiterer Grund, das Grid-Layout zu verwenden, besteht darin, dass ich {{cssxref("fit-content")}} für die Spurgrößenbestimmung des Bildes verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird, wenn wir ein kleines Bild wie ein Icon haben, die Spur nur so groß wie die Größe dieses Bildes – die `max-content`-Größe. Wenn das Bild größer ist, stoppt die Spur bei 200 Pixeln und da das Bild eine {{cssxref("max-width")}} von 100% angewendet hat, skaliert es herunter, sodass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald der Viewport 500 Pixel breit ist, sodass auf kleineren Geräten das Medienobjekt gestapelt wird.

Eine Option für das Muster ist es, es zu spiegeln, um das Bild auf die andere Seite zu wechseln – dies wird durch Hinzufügen der `media-flip` Klasse erreicht, die ein gespiegeltes Grid-Template definiert und das Layout spiegelverkehrt anzeigt.

Wenn wir ein Medienobjekt in ein anderes verschachteln, müssen wir es in das zweite Track im regulären Layout und das erste Track, wenn es gespiegelt ist, platzieren.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Grid-Template-Areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
