---
title: Mediaobjekte
slug: Web/CSS/How_to/Layout_cookbook/Media_objects
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Das _Media Object_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf ein zweispaltiges Feld mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Beitrag in sozialen Medien.

![Beispiel eines Medienobjekts mit einem Profilbild auf der linken Seite und Lorem Ipsum Text rechts, der 80 % des Raums ausfüllt](media-object.png)

## Anforderungen

Das Media Object-Muster benötigt einige oder alle der folgenden Merkmale:

- Auf Mobilgeräten gestapelt, zwei Spalten auf Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild könnte klein oder groß sein.
- Mediaobjekte können geschachtelt werden.
- Das Media Object sollte den Inhalt klären, egal welche Seite höher ist.

## Das Rezept

Klicken Sie auf "Play" in den Code-Blöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Media Object zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn ich es brauche. Dies bedeutet, dass wenn wir eine Fußzeile mit kurzem Inhalt darüber haben, die Fußzeile nach unten an das Ende des Media Objects geschoben werden kann.

Ein weiterer Grund für die Verwendung des Grid-Layouts ist, dass ich {{cssxref("fit-content")}} für die Größendefinition der Bildspur verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird, wenn wir ein kleines Bild wie das Symbol haben, die Spur nur so groß wie die Größe dieses Bildes — die `max-content`-Größe. Ist das Bild größer, wächst die Spur bis zu 200 Pixel und da das Bild eine {{cssxref("max-width")}} von 100% hat, skaliert es nach unten, damit es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald der Viewport 500 Pixel breit ist, so dass auf kleineren Geräten das Media Object gestapelt wird.

Eine Option für das Muster ist es, es zu spiegeln, um das Bild auf die andere Seite zu schalten – dies wird durch Hinzufügen der Klasse `media-flip` erreicht, die ein gespiegeltes Grid-Template definiert und das Layout spiegelt.

Wenn wir ein Media Object in ein anderes verschachteln, müssen wir es in die zweite Spur im regulären Layout und in die erste Spur im gespiegelten Layout setzen.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Grid Template Areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
