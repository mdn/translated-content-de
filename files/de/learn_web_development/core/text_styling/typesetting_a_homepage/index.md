---
title: "Herausforderung: Textgestaltung einer Community School-Homepage"
short-title: "Herausforderung: Community School-Homepage"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: a993ddb30f722f9150693bef57b79a2f332dcb48
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung testen wir Ihr Verständnis der Textgestaltungstechniken, die wir in diesem Modul behandelt haben, indem wir Sie dazu bringen, die Homepage einer Community School zu gestalten. Dabei könnten Sie sogar ein wenig Spaß haben.

## Ausgangspunkt

Sie werden diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster betrachten, um sicherzustellen, dass Sie den richtigen Kurs einschlagen.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `typesetting-challenge`.
2. Erstellen Sie im Ordner eine Datei namens `index.html` und fügen Sie den folgenden Inhalt ein:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>St Huxley's Community College</title>
       <link href="style.css" type="text/css" rel="stylesheet" />
     </head>
     <body>
       <header>
         <h1>St Huxley's Community College</h1>
       </header>

       <main>
         <section>
           <h2>Brave new world</h2>

           <p>
             It's a brave new world out there. Our children are being put in
             increasingly more competitive situations as they move through the
             different stages of their life with
             <a href="https://en.wikipedia.org/wiki/Examination">examinations</a
             >, <a href="https://en.wikipedia.org/wiki/Jobs">jobs</a>,
             <a href="https://en.wikipedia.org/wiki/Career">careers</a>, and
             other life choices. Having the wrong mindset or making the wrong
             choices can lead to problems at all stages.
           </p>

           <p>
             As concerned parents, guardians, or carers, you will no doubt want
             to give your children the best possible start in life — and you've
             come to the right place.
           </p>

           <h2>The best start in life</h2>

           <p>
             At St. Huxley's, we pride ourselves in not only giving our students
             a top-quality education, but also giving them the
             <a href="https://en.wikipedia.org/wiki/Society">societal</a> and
             <a href="https://en.wikipedia.org/wiki/Emotion">emotional</a>
             intelligence they need to win big in the future. We not only excel
             at subjects such as genetics, data mining, and chemistry, but we
             also include compulsory lessons in:
           </p>

           <ul>
             <li>Emotional resilience</li>
             <li>Critical thinking</li>
             <li>Judgement</li>
             <li>Assertion</li>
             <li>Focus and resolve</li>
           </ul>

           <p>
             If you are interested, then don't hesitate to get in touch; we'd
             love to hear from you:
           </p>

           <ol>
             <li>
               <a href="#">Call</a> or <a href="#">Email</a> us for more
               information.
             </li>
             <li>
               <a href="#">Ask for a brochure</a>, which includes a signup form.
             </li>
             <li><a href="#">Book a visit</a>!</li>
           </ol>
         </section>

         <aside>
           <h2>Top courses</h2>

           <ul>
             <li><a href="#">Genetic engineering</a></li>
             <li><a href="#">Organic Chemistry</a></li>
             <li><a href="#">Pharmaceuticals</a></li>
             <li><a href="#">Behavioral science</a></li>
             <li><a href="#">Biochemistry</a></li>
             <li><a href="#">Data mining</a></li>
             <li><a href="#">Computer security</a></li>
             <li><a href="#">Bioinformatics</a></li>
             <li><a href="#">Cybernetics</a></li>
           </ul>

           <p><a href="#">See all...</a></p>
         </aside>

         <nav>
           <ul>
             <li><a href="#">Home</a></li>
             <li><a href="#">Finding us</a></li>
             <li><a href="#">Courses</a></li>
             <li><a href="#">Staff</a></li>
             <li><a href="#">Media</a></li>
             <li><a href="#">Prospectus</a></li>
           </ul>
         </nav>
       </main>

       <footer>
         <p>&copy; 2025 St Huxley's Community College</p>
       </footer>
     </body>
   </html>
   ```

3. Erstellen Sie im Ordner eine Datei namens `style.css` und fügen Sie den folgenden Inhalt ein:

   ```css
   /* General setup */

   * {
     box-sizing: border-box;
   }

   body {
     margin: 0 auto;
     padding: 0 20px;
     min-width: 980px;
     max-width: 1400px;
   }

   /* Layout */

   main {
     display: grid;
     grid-template-columns: 5fr 2fr 2fr;
     gap: 40px;
     padding: 20px 0;
   }

   /* header and footer */

   header {
     border-bottom: 5px solid #a66;
   }

   footer {
     border-top: 5px solid #a66;
   }

   footer p {
     text-align: center;
   }
   ```

4. Laden Sie das Symbol [`external-link-52.png`](https://mdn.github.io/shared-assets/images/examples/external-link-52.png) herunter und speichern Sie es im Ordner auf derselben Ebene wie die Code-Dateien.

5. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um zu testen.

## Projektbeschreibung

Sie haben einige HTML-Daten für die Homepage eines fiktiven Community Colleges erhalten, sowie ein CSS, das den Inhalt in drei Spalten unterteilt und einige andere grundlegende Stile bereitstellt. Sie müssen am Ende der CSS-Datei Regeln hinzufügen, um die in den folgenden Abschnitten beschriebenen Herausforderungen zu lösen.

### Anwenden von Schriftarten auf die Seite

1. Wählen Sie Schriftarten für Überschriften und Fließtext aus, die auf der Seite angewendet werden sollen:
   - Da es sich um ein College handelt, sollten die Schriftarten der Seite ein ernstes, vertrauenswürdiges Gefühl verleihen. Eine serifenbetonte Schriftart für den allgemeinen Fließtext und eine kräftige/Balkenschriftart für die Überschriften wäre geeignet.
   - Sie können entweder einen Online-Schriftdienst wie Google Fonts nutzen, um auf die Schriftarten zuzugreifen, oder Schriftdateien lokal in Ihrem Projekt speichern. Was immer Sie auch wählen, stellen Sie sicher, dass Ihre Schriftarten auf Ihrer Seite verfügbar sind. Wenn Sie sich für lokale Schriftdateien entscheiden, verwenden Sie einen geeigneten Dienst, um fehlerfreien `@font-face` Code dafür zu generieren.
2. Wenden Sie Ihre Schriftart für den Fließtext auf die gesamte Seite an und Ihre Überschriftenschriftart auf Ihre Überschriften.

### Allgemeine Textgestaltung

1. Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
2. Geben Sie Ihrem Fließtext eine geeignete `line-height`.
3. Zentrieren Sie Ihre oberste Überschrift auf der Seite.
4. Entfernen Sie den unteren Rand Ihrer Überschriften der zweiten Ebene.
5. Geben Sie Ihren Überschriften und dem Fließtext etwas `letter-spacing`, um sicherzustellen, dass sie nicht zu sehr eingequetscht sind, und lassen Sie die Buchstaben ein wenig atmen.
6. Geben Sie dem ersten Absatz nach jeder Überschrift in dem `<section>` ein wenig Text-Einzug, zum Beispiel `2rem`.

### Links

1. Geben Sie den Link-, besuchten, Fokus- und Hover-Zuständen Farben, die mit der Farbe der horizontalen Balken am oberen und unteren Rand der Seite übereinstimmen.
2. Sorgen Sie dafür, dass Links standardmäßig unterstrichen sind, aber wenn Sie sie schweben oder fokussieren, verschwindet die Unterstreichung.
3. Entfernen Sie die Standardfokusumrisse von ALLEN Links auf der Seite.
4. Sorgen Sie dafür, dass _externe_ Links das externe Link-Symbol rechts von ihnen haben, in geeigneter Größe.

### Listen

1. Stellen Sie sicher, dass die Abstände Ihrer Listen und Listenelemente gut mit der Gestaltung der gesamten Seite harmonieren. Jede Liste sollte dieselbe `line-height` sowie obere und untere Abstände wie die Absätze haben.
2. Geben Sie Ihren Listenelementen geeignete Aufzählungszeichenstile für das Design der Seite. Es liegt an Ihnen, ob Sie ein benutzerdefiniertes Aufzählungsbild oder etwas anderes verwenden.

### Navigationsmenü

Gestalten Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert. Wir lassen Ihnen dabei größtenteils freie Hand, aber hier sind einige Tipps/Vorschläge:

1. Lassen Sie die Links wie Schaltflächen aussehen, die genauso breit wie die Spalte sind, in der sie sich befinden, und hoch genug, dass die Navigationselemente einen angemessenen Raum einnehmen.
2. Wenden Sie dieselbe Schriftart auf Ihren Navigationslink-Text an, die Sie auf Ihre Überschriften angewendet haben.
3. Stellen Sie sicher, dass der Klickbereich jedes Links erweitert wird, um die gesamte Eltern-Listeneinheit auszufüllen.
4. Zentrieren Sie den Text innerhalb jedes Links.
5. Setzen Sie den Text in Großbuchstaben (mithilfe von CSS, ohne Bearbeiten des HTMLs!)

## Hinweise und Tipps

- Sie müssen das HTML für diese Übung nicht bearbeiten, es sei denn, es ist erforderlich, um die Schriftarten auf die Seite anzuwenden.

## Beispiel

Das folgende Bildschirmfoto zeigt, wie die Seite zu Beginn aussieht:

![Ein Screenshot des Anfangszustands der Seite. Die obere Überschrift lautet 'St Huxley's Community College' und die Fußzeile enthält einen Urheberrechtshinweis. Es gibt rote Linien, die den Header und die Fußzeile vom Inhalt trennen. Der Hauptinhalt hat drei Spalten, eine enthält Fließtext und zwei Listen von Links. Der Text wird mit den standardmäßigen Browserstilen gerendert.](example-start.png)

Das folgende Bildschirmfoto hingegen zeigt ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Designs der Herausforderung. Die obere Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Header vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, eine enthält Fließtext, eine Liste von Links und eine vertikale Navigationsleiste in der dritten Spalte. Der Text wird mit einigen geeigneten Stilen gerendert.](example-finished.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Unser fertiges CSS sieht wie folgt aus:

```css
/* 1. Apply fonts to page */

@import url("https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

/* General setup */

* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 0 20px;
  min-width: 980px;
  max-width: 1400px;
}

/* Layout */

main {
  display: grid;
  grid-template-columns: 5fr 2fr 2fr;
  gap: 40px;
  padding: 20px 0;
}

/* Header and footer */

header {
  border-bottom: 5px solid #a66;
}

footer {
  border-top: 5px solid #a66;
}

footer p {
  text-align: center;
}

/* 2. Text styling */

html {
  font-family: "IBM Plex Serif", serif;
}

h1,
h2 {
  font-family: "Bevan", serif;
}

h1 {
  font-size: 3rem;
  text-align: center;
  letter-spacing: 3px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0;
  letter-spacing: 1px;
}

section h2 + p {
  text-indent: 2rem;
}

p,
li {
  line-height: 1.6;
  letter-spacing: 0.5px;
}

/* 3. Link styling */

a {
  outline: none;
}

a[href*="http"] {
  padding-right: 16px;
  background: url(external-link-52.png) no-repeat right center;
  background-size: 14px 14px;
}

a:link,
a:visited {
  color: #a66;
}

a:focus,
a:hover {
  text-decoration: none;
  color: #733;
}

/* 4. List styling */

ul,
ol {
  margin: 1rem 0;
}

ul {
  list-style-type: square;
}

ol {
  list-style-type: lower-roman;
}

/* 5. Navigation menu */

nav ul {
  padding-left: 0;
}

nav li {
  list-style-type: none;
  margin-bottom: 1rem;
}

nav li a {
  font-family: "Bevan", serif;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  line-height: 3.5;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.3rem;
  font-weight: bold;
  border: 1px solid #a66;
}

nav li a:focus,
nav li a:hover {
  color: white;
  background: #a66;
}

nav li a:active {
  color: white;
  background: black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
