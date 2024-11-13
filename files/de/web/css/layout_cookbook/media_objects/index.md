---
title: "Rezept: Medienobjekte"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Das _Medienobjekt_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf ein zweispaltiges Kästchen mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z. B. ein Social-Media-Beitrag.

![Beispiel eines Medienobjekts mit Profilbild auf der linken Seite und Lorem Ipsum-Text, der 80 % des Platzes auf der rechten Seite ausfüllt](media-object.png)

## Anforderungen

Das Medienobjekt-Muster benötigt einige oder alle der folgenden Merkmale:

- Gestapelt auf mobilen Geräten, zwei Spalten auf dem Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Medienobjekte können verschachtelt sein.
- Das Medienobjekt sollte den Inhalt klären, egal welche Seite höher ist.

## Das Rezept

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Medienobjekt zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu steuern, wenn es nötig ist. Das bedeutet, dass, wenn wir einen Footer mit kurzem Inhalt darüber haben, der Footer an das Ende des Medienobjekts geschoben werden kann.

Ein weiterer Grund für die Verwendung von Grid-Layout ist, dass ich {{cssxref("fit-content")}} für die Spurgröße des Bildes verwenden kann. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird, wenn wir ein kleines Bild wie das Icon haben, die Spur nur so groß wie die Größe dieses Bildes — die `max-content` Größe. Wenn das Bild größer ist, hört die Spur bei 200 Pixeln auf zu wachsen, und da das Bild eine {{cssxref("max-width")}} von 100% hat, skaliert es herunter, sodass es weiterhin in die Spalte passt.

Durch die Verwendung von {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald wir eine Maximalbreite von 500 Pixeln haben, sodass das Medienobjekt auf kleineren Geräten gestapelt wird.

Eine Option für das Muster ist es, es umzudrehen, um das Bild auf die andere Seite zu schalten — dies wird erreicht, indem die `media-flip`-Klasse hinzugefügt wird, die ein umgedrehtes Grid-Template definiert und dadurch das Layout spiegelt.

Wenn wir ein Medienobjekt in einem anderen verschachteln, müssen wir es in die zweite Spur im regulären Layout und in die erste Spur, wenn es umgedreht ist, platzieren.

## Siehe auch

- {{cssxref("fit-content")}} Eigenschaft
- [Verwendung von Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
