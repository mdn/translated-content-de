---
title: "Herausforderung: Gruselige Krabbeltiere Startseite"
short-title: "Herausforderung: Startseite"
slug: Learn_web_development/Core/Structuring_content/Splash_page
l10n:
  sourceCommit: 3b8fdeeaa5b96796870166b989de523261e5fc05
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}

In dieser Herausforderung testen wir Ihr Wissen über einige der Techniken, die in den letzten Lektionen besprochen wurden. Ziel ist es, Bilder und ein Video zu einer Startseite hinzuzufügen, die sich mit Insekten und anderen Krabbeltieren beschäftigt.

## Ausgangspunkt

Um diese Herausforderung zu lösen, erwarten wir, dass Sie ein einfaches Website-Projekt erstellen, entweder in einem Ordner auf der Festplatte Ihres Computers oder mit einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/). Ein Großteil des benötigen Codes ist bereits bereitgestellt.

1. Erstellen Sie einen neuen Ordner an einem geeigneten Ort auf Ihrem Computer mit dem Namen `splash-page-challenge` (oder öffnen Sie einen Online-Editor und führen Sie die erforderlichen Schritte durch, um ein neues Projekt zu erstellen).
2. Speichern Sie das folgende HTML-Verzeichnis in einer Datei in Ihrem Ordner namens `index.html` (oder fügen Sie es in das HTML-Feld Ihres Online-Editors ein).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8" />
       <title>Creepy crawlies!</title>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <header>
         <nav>
           <ul>
             <li><a href="#beetles">Beetles</a></li>
             <li><a href="#true_bugs">True bugs</a></li>
             <li><a href="#butterflies_moths">Butterflies and moths</a></li>
             <li><a href="#flies_mosquitos">Flies and mosquitos</a></li>
             <li><a href="#bees_wasps_ants">Bees, wasps, and ants</a></li>
             <li><a href="#spiders">Spiders</a></li>
           </ul>
         </nav>
         <section>
           <h1>Creepy-crawlies splash page!</h1>

           <p>
             In casual language, people use "bugs" to mean all sorts of small
             creepy-crawlies: insects, spiders, etc. However, "Bugs" (true bugs)
             are actually just one order of insects (Hemiptera). This page
             provides a summary of the main classes or groups of
             creepy-crawlies.
           </p>
         </section>
       </header>
       <main>
         <section id="beetles">
           <h2>Beetles (Coleoptera)</h2>

           <p>
             Beetles make up the largest order of insects, with more than
             350,000 known species. They are recognized by their hardened
             forewings (elytra) that cover and protect the delicate hindwings
             and abdomen. This feature gives them a tough, armored look and
             helps them survive in many environments, from forests to deserts.
             Beetles can vary greatly in size, color, and habits, ranging from
             tiny grain beetles to massive stag beetles with impressive jaws.
           </p>
           <p>
             Many beetles play important ecological roles. Some, like ladybugs,
             are beneficial predators that feed on crop pests such as aphids.
             Others, such as dung beetles, recycle nutrients by breaking down
             animal waste. However, certain species like the Colorado potato
             beetle or Japanese beetle are major agricultural pests. Their
             diversity and adaptability make beetles one of the most successful
             groups of insects on Earth.
           </p>

           <p class="copyright">
             Image by URSchmidt - Own work, CC BY-SA 4.0,
             <a href="https://commons.wikimedia.org/w/index.php?curid=70137401"
               >https://commons.wikimedia.org/w/index.php?curid=70137401</a
             >.
           </p>
         </section>
         <section id="true_bugs">
           <h2>True Bugs (Hemiptera)</h2>

           <p>
             True bugs include a wide range of insects such as stink bugs,
             cicadas, aphids, and water striders. Unlike beetles, their
             forewings are partly hardened and partly membranous, and they
             possess distinctive piercing-sucking mouthparts. These mouthparts
             are adapted for feeding on plant sap, blood, or other insects. Many
             true bugs have scent glands that produce strong odors as a defense
             mechanism, which is why some are called "stink bugs."
           </p>

           <p>
             True bugs are found worldwide and occupy a variety of habitats,
             including plants, soil, and water. While some species are harmless
             or even beneficial predators, others are destructive agricultural
             pests that weaken plants by draining their sap. Certain bugs, like
             bed bugs and kissing bugs, can also affect humans directly by
             biting or transmitting diseases.
           </p>

           <p class="copyright">
             Image created by user B. Schoenmakers at Waarneming.nl, a source of
             nature observations in the Netherlands. - This image is uploaded as
             image number 29046158 at Waarneming.nl, a source of nature
             observations in the Netherlands.This tag does not indicate the
             copyright status of the attached work. A normal copyright tag is
             still required. See Commons:Licensing for more information. This
             site now requires authentication, however, the same image and
             copyright information is also available via
             <a href="https://world.observation.org/foto/view/29046158"
               >https://world.observation.org/foto/view/29046158</a
             >
             since it uses the same data, CC BY 3.0,
             <a href="https://commons.wikimedia.org/w/index.php?curid=92410673"
               >https://commons.wikimedia.org/w/index.php?curid=92410673</a
             >.
           </p>
         </section>
         <section id="butterflies_moths">
           <h2>Butterflies & Moths (Lepidoptera)</h2>

           <p>
             Butterflies and moths are some of the most recognizable insects
             thanks to their large, often colorful wings covered in tiny scales.
             These scales give their wings shimmering, patterned appearances and
             are one of the defining traits of this group. Butterflies are
             usually active by day, while moths are mostly nocturnal, though
             there are exceptions. Both undergo complete metamorphosis, with a
             dramatic transformation from caterpillar to winged adult.
           </p>

           <p>
             As caterpillars, they primarily feed on leaves, sometimes causing
             damage to crops and plants. As adults, butterflies and many moths
             are important pollinators, transferring pollen as they sip nectar
             from flowers. They are also ecologically vital as food sources for
             birds, bats, and other animals. Their beauty and ecological
             importance make them a favorite group for nature enthusiasts and
             scientists alike.
           </p>

           <p class="copyright">
             Image by Didier Descouens - Own work, CC BY-SA 4.0,
             <a href="https://commons.wikimedia.org/w/index.php?curid=19303857"
               >https://commons.wikimedia.org/w/index.php?curid=19303857</a
             >.
           </p>
         </section>
         <section id="flies_mosquitos">
           <h2>Flies & Mosquitoes (Diptera)</h2>

           <p>
             Flies and mosquitoes belong to the order Diptera, meaning "two
             wings." Unlike most other insects, they have only one functional
             pair of wings; the hind pair has evolved into tiny balancing organs
             called halteres. This adaptation gives them incredible agility in
             flight. Their mouthparts vary widely: some species have sponging
             mouthparts (like houseflies), while others have piercing-sucking
             ones (like mosquitoes).
           </p>

           <p>
             These insects are among the most ecologically and medically
             significant. Many flies are decomposers, helping break down waste
             and recycle nutrients. Mosquitoes, however, are infamous as disease
             vectors, spreading malaria, dengue, and other illnesses. Despite
             their negative reputation, flies and mosquitoes are essential in
             ecosystems, serving as pollinators and as a major food source for
             many animals.
           </p>

           <p class="copyright">
             Image created by user Dick Belgers at Waarneming.nl, a source of
             nature observations in the Netherlands. - This image is uploaded as
             image number 5105758 at Waarneming.nl, a source of nature
             observations in the Netherlands.This tag does not indicate the
             copyright status of the attached work. A normal copyright tag is
             still required. See Commons:Licensing for more information. CC BY
             3.0,
             <a href="https://commons.wikimedia.org/w/index.php?curid=27659589"
               >https://commons.wikimedia.org/w/index.php?curid=27659589</a
             >.
           </p>
         </section>
         <section id="bees_wasps_ants">
           <h2>Bees, Wasps, Ants (Hymenoptera)</h2>

           <p>
             Bees, wasps, and ants are a diverse group known for their complex
             behaviors and social structures. Many species live in colonies with
             distinct roles for workers, queens, and males. Bees are especially
             famous for pollination, producing honey, and communicating with
             each other through dances. Wasps are often predators or
             parasitoids, while ants are skilled builders and cooperative
             foragers.
           </p>

           <p>
             This group has a huge ecological impact. Bees and wasps contribute
             to pollination, supporting food crops and wild plants. Some wasps
             help control pest populations by preying on or parasitizing other
             insects. Ants are critical soil engineers, aerating the ground and
             recycling nutrients. While stings and aggressive behaviors make
             some species feared, they are vital players in natural and
             agricultural systems.
           </p>

           <p class="copyright">
             Image by Trounce - Own work, CC BY-SA 2.5,
             <a href="https://commons.wikimedia.org/w/index.php?curid=1997709"
               >https://commons.wikimedia.org/w/index.php?curid=1997709</a
             >.
           </p>
         </section>
         <section id="spiders">
           <h2>Spiders (Araneae)</h2>

           <p>
             Spiders are arachnids, not insects, and are easily distinguished by
             their eight legs and lack of antennae. Almost all spiders are
             predators, using venom and silk to capture prey. Many build
             intricate webs to trap insects, while others are active hunters
             that chase or ambush their food. Their silk is an incredibly strong
             and versatile material, used for webs, egg sacs, or safety lines.
           </p>

           <p>
             Spiders are found in nearly every habitat on Earth, from deserts to
             caves to homes. While some people fear them, very few species pose
             a danger to humans. In fact, spiders are highly beneficial because
             they help control insect populations, including pests. They play a
             crucial role in balancing ecosystems, making them one of the most
             important non-insect "bugs" people commonly encounter.
           </p>

           <p class="copyright">
             Image by AJC ajcann.wordpress.com from UK, CC BY-SA 2.0
             <a href="https://creativecommons.org/licenses/by-sa/2.0"
               >https://creativecommons.org/licenses/by-sa/2.0</a
             >, via Wikimedia Commons.
           </p>
         </section>
       </main>
     </body>
   </html>
   ```

3. Speichern Sie das folgende CSS-Verzeichnis in einer Datei in Ihrem Ordner namens `style.css` (oder fügen Sie es in das CSS-Feld Ihres Online-Editors ein).

   ```css
   /* type */

   body {
     font: 1.2em / 1.5 system-ui;
     margin: 0 auto;
     width: 90%;
     min-width: 800px;
     max-width: 1200px;
   }

   h1 {
     text-align: center;
   }

   .copyright {
     font-size: 0.8em;
   }

   /* nav menu */

   ul {
     padding: 0;
     list-style-type: none;
     text-align: center;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
   }

   li {
     flex: auto;
   }

   nav a {
     font-size: 1.2em;
     padding: 0 20px;
   }

   /* General link styles */

   a {
     text-decoration: none;
     color: red;
   }

   a:hover,
   a:focus {
     text-decoration: underline;
   }

   /* header section layout */

   header section {
     display: grid;
     grid-template-areas:
       "heading heading"
       "text video"
       "text video";
     grid-template-columns: 1fr 2fr;
     gap: 20px;
   }

   h1 {
     grid-area: heading;
   }

   header p {
     grid-area: text;
     margin: 0;
   }

   video {
     grid-area: video;
     width: 100%;
     border: 1px solid black;
   }

   /* image floats */

   figure {
     float: right;
     margin-left: 20px;
     padding: 20px;
     background: orange;
     border: 1px solid black;
   }

   figcaption {
     font-size: 0.6em;
   }
   ```

Später müssen Sie die folgenden URLs in Ihre Seite aufnehmen.

- `bee.jpg`: [Bild für die Sektion "Bienen, Wespen, Ameisen (Hymenoptera)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/bee.jpg).
- `beetle.png`: [Bild für die Sektion "Käfer (Coleoptera)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/beetle.png).
- `butterfly.jpg`: [Bild für die Sektion "Schmetterlinge & Motten (Lepidoptera)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/butterfly.jpg).
- `fly.jpg`: [Bild für die Sektion "Fliegen & Moskitos (Diptera)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/fly.jpg).
- `spider.jpg`: [Bild für die Sektion "Spinnen (Araneae)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/spider.jpg).
- `true_bug.jpg`: [Bild für die Sektion "Wanzen (Hemiptera)"](https://mdn.github.io/shared-assets/images/examples/learn/crawlies/true_bug.jpg).
- `bug_video_640.mp4`: [Header-Video](https://mdn.github.io/shared-assets/videos/learn/bug_video_640.mp4).

## Projektbeschreibung

In dieser Bewertung präsentieren wir Ihnen eine weitgehend fertige Startseite über verschiedene Krabbeltiere. Leider wurden noch keine Bilder oder Videos hinzugefügt — das ist Ihre Aufgabe! Sie müssen einige Medien hinzufügen, um die Seite interessanter zu gestalten. Die folgenden Unterabschnitte erläutern, was zu tun ist.

### Ein Video zum Header hinzufügen

Fügen Sie direkt unter dem `<h1>` ein `<video>`-Element hinzu, das unser Header-Video auf der Seite einbettet. Wir möchten, dass es Folgendes tut:

- Das Video bei Laden der Seite automatisch abspielen (damit dies in zumindest einigen Browsern funktioniert, müssen Sie auch angeben, dass das Video stummgeschaltet sein soll).
- Endlos im Loop abspielen, anstatt nur einmal abzuspielen.
- Das Videoinhalt vorladen.
- Keine Steuerelemente anzeigen.

### Abschnittsbilder hinzufügen

In den erweiterten Informationsabschnitten zu jedem Insekt möchten wir, dass Sie unter jedem `<h2>` ein Bild einfügen, das das entsprechende Bild für jeden Abschnitt einbettet. Geben Sie jedem Bild einen geeigneten Alternativtext für Bildschirmleser-Nutzer (und falls das Bild nicht geladen wird) und beschränken Sie jedes Bild auf die Abmessungen von 250 x 180.

Außerdem möchten wir, dass Sie jedem Bild eine Beschriftung hinzufügen; überlegen Sie, welches Containerelement benötigt wird, um die beiden semantisch miteinander zu verknüpfen. Wiederholen Sie nicht einfach den Alternativtext in der Beschriftung; diese sollte den Alternativtext und das Bild sinnvoll ergänzen.

### Fügen Sie Bug-Emojis oder -Icons zum Navigationsmenü und den `<h2>`s hinzu

Zum Spaß möchten wir, dass Sie Icons zu jedem Navigationslistenelement hinzufügen und dasselbe Icon an den Anfang jedes entsprechenden `<h2>`. Sie könnten dies durch eingebettete Bilder tun, aber es ist einfacher, einfach geeignete Emojis zu finden und sie direkt in den HTML-Text einzufügen.

## Hinweise und Tipps

- Sie können den [W3C HTML Validator](https://validator.w3.org/) verwenden, um Fehler in Ihrem HTML zu finden.
- Sie müssen kein CSS kennen, um diese Bewertung durchzuführen; Sie müssen lediglich die bereitgestellte HTML-Datei bearbeiten. Der CSS-Teil ist bereits für Sie erledigt.

## Beispiel

Der folgende Screenshot zeigt, wie die Startseite aussehen sollte. Wenn Sie Schwierigkeiten haben, einige Punkte zu erreichen, sehen Sie sich die Lösung unterhalb des Live-Beispiels an.

![Unser Beispiel für die Startseite](finished-splash-example.png)

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Creepy crawlies!</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#beetles">🪲 Beetles</a></li>
          <li><a href="#true_bugs">🪳 True bugs</a></li>
          <li><a href="#butterflies_moths">🦋 Butterflies and moths</a></li>
          <li><a href="#flies_mosquitos">🦟 Flies and mosquitos</a></li>
          <li><a href="#bees_wasps_ants">🐝 Bees, wasps, and ants</a></li>
          <li><a href="#spiders">🕷️ Spiders</a></li>
        </ul>
      </nav>
      <section>
        <h1>Creepy-crawlies splash page!</h1>

        <video
          src="https://mdn.github.io/shared-assets/videos/learn/bug_video_640.mp4"
          autoplay
          loop
          muted
          preload="auto"></video>

        <p>
          In casual language, people use "bugs" to mean all sorts of small
          creepy-crawlies: insects, spiders, etc. However, "Bugs" (true bugs)
          are actually just one order of insects (Hemiptera). This page provides
          a summary of the main classes or groups of creepy-crawlies.
        </p>
      </section>
    </header>
    <main>
      <section id="beetles">
        <h2>🪲 Beetles (Coleoptera)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/beetle.png"
            alt="A black six-legged beetle with a shield-shaped body and long antennae"
            width="250"
            height="180" />
          <figcaption>A shiny, black beetle.</figcaption>
        </figure>

        <p>
          Beetles make up the largest order of insects, with more than 350,000
          known species. They are recognized by their hardened forewings
          (elytra) that cover and protect the delicate hindwings and abdomen.
          This feature gives them a tough, armored look and helps them survive
          in many environments, from forests to deserts. Beetles can vary
          greatly in size, color, and habits, ranging from tiny grain beetles to
          massive stag beetles with impressive jaws.
        </p>
        <p>
          Many beetles play important ecological roles. Some, like ladybugs, are
          beneficial predators that feed on crop pests such as aphids. Others,
          such as dung beetles, recycle nutrients by breaking down animal waste.
          However, certain species like the Colorado potato beetle or Japanese
          beetle are major agricultural pests. Their diversity and adaptability
          make beetles one of the most successful groups of insects on Earth.
        </p>

        <p class="copyright">
          Image by URSchmidt - Own work, CC BY-SA 4.0,
          <a href="https://commons.wikimedia.org/w/index.php?curid=70137401"
            >https://commons.wikimedia.org/w/index.php?curid=70137401</a
          >.
        </p>
      </section>
      <section id="true_bugs">
        <h2>🪳 True Bugs (Hemiptera)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/true_bug.jpg"
            alt="A green, six-legged beetle with fairly long antennae and stripy markings"
            width="250"
            height="180" />
          <figcaption>A green stripey bug.</figcaption>
        </figure>

        <p>
          True bugs include a wide range of insects such as stink bugs, cicadas,
          aphids, and water striders. Unlike beetles, their forewings are partly
          hardened and partly membranous, and they possess distinctive
          piercing-sucking mouthparts. These mouthparts are adapted for feeding
          on plant sap, blood, or other insects. Many true bugs have scent
          glands that produce strong odors as a defense mechanism, which is why
          some are called "stink bugs."
        </p>

        <p>
          True bugs are found worldwide and occupy a variety of habitats,
          including plants, soil, and water. While some species are harmless or
          even beneficial predators, others are destructive agricultural pests
          that weaken plants by draining their sap. Certain bugs, like bed bugs
          and kissing bugs, can also affect humans directly by biting or
          transmitting diseases.
        </p>

        <p class="copyright">
          Image created by user B. Schoenmakers at Waarneming.nl, a source of
          nature observations in the Netherlands. - This image is uploaded as
          image number 29046158 at Waarneming.nl, a source of nature
          observations in the Netherlands.This tag does not indicate the
          copyright status of the attached work. A normal copyright tag is still
          required. See Commons:Licensing for more information. This site now
          requires authentication, however, the same image and copyright
          information is also available via
          <a href="https://world.observation.org/foto/view/29046158"
            >https://world.observation.org/foto/view/29046158</a
          >
          since it uses the same data, CC BY 3.0,
          <a href="https://commons.wikimedia.org/w/index.php?curid=92410673"
            >https://commons.wikimedia.org/w/index.php?curid=92410673</a
          >.
        </p>
      </section>
      <section id="butterflies_moths">
        <h2>🦋 Butterflies & Moths (Lepidoptera)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/butterfly.jpg"
            alt="A butterfly with large black and orange wings"
            width="250"
            height="180" />
          <figcaption>A typical butterfly.</figcaption>
        </figure>

        <p>
          Butterflies and moths are some of the most recognizable insects thanks
          to their large, often colorful wings covered in tiny scales. These
          scales give their wings shimmering, patterned appearances and are one
          of the defining traits of this group. Butterflies are usually active
          by day, while moths are mostly nocturnal, though there are exceptions.
          Both undergo complete metamorphosis, with a dramatic transformation
          from caterpillar to winged adult.
        </p>

        <p>
          As caterpillars, they primarily feed on leaves, sometimes causing
          damage to crops and plants. As adults, butterflies and many moths are
          important pollinators, transferring pollen as they sip nectar from
          flowers. They are also ecologically vital as food sources for birds,
          bats, and other animals. Their beauty and ecological importance make
          them a favorite group for nature enthusiasts and scientists alike.
        </p>

        <p class="copyright">
          Image by Didier Descouens - Own work, CC BY-SA 4.0,
          <a href="https://commons.wikimedia.org/w/index.php?curid=19303857"
            >https://commons.wikimedia.org/w/index.php?curid=19303857</a
          >.
        </p>
      </section>
      <section id="flies_mosquitos">
        <h2>🦟 Flies & Mosquitoes (Diptera)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/fly.jpg"
            alt="A hairy flying insect with long legs"
            width="250"
            height="180" />
          <figcaption>A fly.</figcaption>
        </figure>

        <p>
          Flies and mosquitoes belong to the order Diptera, meaning "two wings."
          Unlike most other insects, they have only one functional pair of
          wings; the hind pair has evolved into tiny balancing organs called
          halteres. This adaptation gives them incredible agility in flight.
          Their mouthparts vary widely: some species have sponging mouthparts
          (like houseflies), while others have piercing-sucking ones (like
          mosquitoes).
        </p>

        <p>
          These insects are among the most ecologically and medically
          significant. Many flies are decomposers, helping break down waste and
          recycle nutrients. Mosquitoes, however, are infamous as disease
          vectors, spreading malaria, dengue, and other illnesses. Despite their
          negative reputation, flies and mosquitoes are essential in ecosystems,
          serving as pollinators and as a major food source for many animals.
        </p>

        <p class="copyright">
          Image created by user Dick Belgers at Waarneming.nl, a source of
          nature observations in the Netherlands. This image is uploaded as
          image number 5105758 at Waarneming.nl, a source of nature observations
          in the Netherlands. This tag does not indicate the copyright status of
          the attached work. A normal copyright tag is still required. See
          Commons:Licensing for more information. CC BY 3.0,
          <a href="https://commons.wikimedia.org/w/index.php?curid=27659589"
            >https://commons.wikimedia.org/w/index.php?curid=27659589</a
          >.
        </p>
      </section>
      <section id="bees_wasps_ants">
        <h2>🐝 Bees, Wasps, Ants (Hymenoptera)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/bee.jpg"
            alt="A furry black and yellow striped flying insect with six legs"
            width="250"
            height="180" />
          <figcaption>A bumblebee.</figcaption>
        </figure>

        <p>
          Bees, wasps, and ants are a diverse group known for their complex
          behaviors and social structures. Many species live in colonies with
          distinct roles for workers, queens, and males. Bees are especially
          famous for pollination, producing honey, and communicating with each
          other through dances. Wasps are often predators or parasitoids, while
          ants are skilled builders and cooperative foragers.
        </p>

        <p>
          This group has a huge ecological impact. Bees and wasps contribute to
          pollination, supporting food crops and wild plants. Some wasps help
          control pest populations by preying on or parasitizing other insects.
          Ants are critical soil engineers, aerating the ground and recycling
          nutrients. While stings and aggressive behaviors make some species
          feared, they are vital players in natural and agricultural systems.
        </p>

        <p class="copyright">
          Image by Trounce - Own work, CC BY-SA 2.5,
          <a href="https://commons.wikimedia.org/w/index.php?curid=1997709"
            >https://commons.wikimedia.org/w/index.php?curid=1997709</a
          >.
        </p>
      </section>
      <section id="spiders">
        <h2>🕷️ Spiders (Araneae)</h2>

        <figure>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/crawlies/spider.jpg"
            alt="A black bodied spider with eight legs, feelers, and jaws"
            width="250"
            height="180" />
          <figcaption>A spider.</figcaption>
        </figure>

        <p>
          Spiders are arachnids, not insects, and are easily distinguished by
          their eight legs and lack of antennae. Almost all spiders are
          predators, using venom and silk to capture prey. Many build intricate
          webs to trap insects, while others are active hunters that chase or
          ambush their food. Their silk is an incredibly strong and versatile
          material, used for webs, egg sacs, or safety lines.
        </p>

        <p>
          Spiders are found in nearly every habitat on Earth, from deserts to
          caves to homes. While some people fear them, very few species pose a
          danger to humans. In fact, spiders are highly beneficial because they
          help control insect populations, including pests. They play a crucial
          role in balancing ecosystems, making them one of the most important
          non-insect "bugs" people commonly encounter.
        </p>

        <p class="copyright">
          Image by AJC ajcann.wordpress.com from UK, CC BY-SA 2.0
          <a href="https://creativecommons.org/licenses/by-sa/2.0"
            >https://creativecommons.org/licenses/by-sa/2.0</a
          >, via Wikimedia Commons.
        </p>
      </section>
    </main>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video", "Learn_web_development/Core/Structuring_content/HTML_table_basics", "Learn_web_development/Core/Structuring_content")}}
