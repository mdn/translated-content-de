---
title: "Rezept: Media-Objekte"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Das _Media Object_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Beitrag in sozialen Medien.

![Beispiel eines Media-Objekts mit Profilbild auf der linken Seite und Lorem Ipsum-Text auf der rechten Seite, der 80% des Platzes einnimmt](media-object.png)

## Anforderungen

Das Media Object-Muster benötigt einige oder alle der folgenden Merkmale:

- Gestapelt auf dem Mobilgerät, zwei Spalten auf dem Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Media-Objekte können verschachtelt werden.
- Das Media Object sollte den Inhalt bereinigen, egal welche Seite höher ist.

## Das Rezept

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

@media (min-width: 500px) {
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

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Media Object zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn ich es brauche. Dies bedeutet, dass wenn wir einen Footer haben, mit kurzem Inhalt darüber, der Footer zum unteren Ende des Media-Objekts verschoben werden kann.

Ein weiterer Grund für die Verwendung des Grid-Layouts ist, dass ich {{cssxref("fit-content")}} für die Spurgrößenanpassung des Bildes verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln, wird bei einem kleinen Bild wie dem Icon die Spur nur so groß wie die Größe dieses Bildes — die `max-content` Größe. Wenn das Bild größer ist, hört die Spur bei 200 Pixeln auf zu wachsen und da dem Bild eine {{cssxref("max-width")}} von 100% zugewiesen ist, wird es verkleinert, sodass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald wir eine max-width von 500 Pixeln erreichen, sodass sich das Media-Objekt auf kleineren Geräten stapelt.

Eine Option für das Muster ist es, es zu spiegeln, um das Bild auf die andere Seite zu verschieben — dies wird durch Hinzufügen der `media-flip` Klasse erreicht, die eine gespiegelte Grid-Vorlage definiert und das Layout spiegelt.

Wenn wir ein Media Object in ein anderes verschachteln, müssen wir es in die zweite Spur im regulären Layout und in die erste Spur, wenn es gespiegelt wird, platzieren.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwenden von Grid Template Areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
