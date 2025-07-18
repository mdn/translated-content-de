---
title: "Rezept: Medienobjekte"
slug: Web/CSS/Layout_cookbook/Media_objects
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das _Medienobjekt_ ist ein Muster, das wir überall im Web sehen. Es bezieht sich auf eine zweispaltige Box mit einem Bild auf der einen Seite und beschreibendem Text auf der anderen, z.B. ein Social-Media-Beitrag.

![Beispiel eines Medienobjekts mit Profilbild auf der linken Seite und Lorem-Ipsum-Text rechts, der 80% des Platzes einnimmt](media-object.png)

## Anforderungen

Das Medienobjekt-Muster benötigt einige oder alle der folgenden Eigenschaften:

- Gestapelt auf Mobilgeräten, zwei Spalten auf dem Desktop.
- Das Bild kann links oder rechts sein.
- Das Bild kann klein oder groß sein.
- Medienobjekte können verschachtelt werden.
- Das Medienobjekt sollte den Inhalt räumen, egal welche Seite höher ist.

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

Ich habe mich entschieden, das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) für das Medienobjekt zu verwenden, da es mir ermöglicht, das Layout in zwei Dimensionen zu kontrollieren, wenn nötig. Das bedeutet, dass wenn wir einen Footer mit kurzem Inhalt oben haben, der Footer nach unten zum Boden des Medienobjekts gedrückt werden kann.

Ein weiterer Grund, das Grid-Layout zu verwenden, ist die Möglichkeit, {{cssxref("fit-content")}} für die Spurgrößenanpassung des Bildes zu verwenden. Durch die Verwendung von `fit-content` mit einer maximalen Größe von 200 Pixeln wird die Spur nur so groß wie die Größe dieses Bildes — die `max-content`-Größe. Ist das Bild größer, hört die Spur bei 200 Pixeln auf zu wachsen und da das Bild ein {{cssxref("max-width")}} von 100% hat, skaliert es herunter, um weiterhin in die Spalte zu passen.

Mittels {{cssxref("grid-template-areas")}}, um das Layout zu erreichen, kann ich das Muster im CSS sehen. Ich definiere mein Grid, sobald das Viewport 500 Pixel breit ist, sodass das Medienobjekt auf kleineren Geräten gestapelt wird.

Eine Option für das Muster ist es, es zu spiegeln, um das Bild auf die andere Seite zu setzen — dies geschieht durch das Hinzufügen der Klasse `media-flip`, die eine gespiegelte Grid-Vorlage definiert und das Layout spiegelt.

Wenn wir ein Medienobjekt in ein anderes einbetten, müssen wir es in die zweite Spur im regulären Layout und in die erste Spur im gespiegelten Layout setzen.

## Siehe auch

- {{cssxref("fit-content")}}-Eigenschaft
- [Verwendung von Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
