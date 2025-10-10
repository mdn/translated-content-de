---
title: "Herausforderung: Satz einer Schul-Homepage für die Gemeinschaft"
short-title: "Herausforderung: Schul-Homepage für die Gemeinschaft"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung testen wir Ihr Verständnis der Textstyling-Techniken, die wir in diesem Modul behandelt haben, indem wir Sie die Homepage einer Schulgemeinschaft setzen lassen. Vielleicht haben Sie dabei sogar ein wenig Spaß.

## Ausgangspunkt

Sie werden diese Herausforderung in Ihrer lokalen Entwicklungsumgebung lösen; idealerweise möchten Sie das Beispiel in einem vollständigen Browserfenster ansehen, um sicherzustellen, dass Sie in die richtige Richtung gehen.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer mit dem Namen `typesetting-challenge`.
2. Erstellen Sie in diesem Ordner eine `index.html`-Datei und fügen Sie den folgenden Inhalt ein:

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

3. Erstellen Sie in dem Ordner eine `style.css`-Datei und fügen Sie den folgenden Inhalt ein:

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
     border-bottom: 5px solid #aa6666;
   }

   footer {
     border-top: 5px solid #aa6666;
   }

   footer p {
     text-align: center;
   }
   ```

4. Laden Sie das [`external-link-52.png`](https://mdn.github.io/shared-assets/images/examples/external-link-52.png) Icon herunter und speichern Sie es im Ordner auf derselben Ebene wie die Code-Dateien.

5. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um zu testen.

## Projektbeschreibung

Sie haben HTML für die Startseite eines imaginären Community-Colleges plus einige rudimentäre CSS-Stile erhalten, die den Inhalt in drei Spalten unterteilen. Sie müssen Regeln am Ende der CSS-Datei hinzufügen, um die in den folgenden Abschnitten beschriebenen Herausforderungen zu lösen.

### Schriftarten auf der Seite anwenden

1. Wählen Sie Schriftarten für die Überschriften und den Fließtext aus:
   - Da es sich um ein College handelt, sollten die Schriftarten der Seite ein seriöses und vertrauenswürdiges Erscheinungsbild verleihen. Eine serifenartige Seite für den allgemeinen Fließtext, kombiniert mit einer schweren/slab Schrift für die Überschriften, wäre passend.
   - Es liegt an Ihnen zu entscheiden, ob Sie einen Online-Schriftartenservice wie Google Fonts verwenden möchten, um Zugriff auf die Schriftarten zu erhalten, oder ob Sie Schriftartdateien lokal in Ihr Projekt herunterladen möchten. Was immer Sie auch wählen, stellen Sie sicher, dass Ihre Schriftarten für Ihre Seite verfügbar sind. Wenn Sie lokale Schriftdateien verwenden, nutzen Sie einen geeigneten Service, um bulletproof `@font-face` Code dafür zu generieren.
2. Wenden Sie Ihre Fließtext-Schriftart auf die gesamte Seite an und Ihre Überschrift-Schriftart auf die Überschriften.

### Allgemeines Textstyling

1. Geben Sie Ihren Überschriften und anderen Elemente geeignete Schriftgrößen, definiert mit einer geeigneten relativen Einheit.
2. Geben Sie dem Fließtext eine geeignete `line-height`.
3. Zentrieren Sie Ihre Hauptüberschrift auf der Seite.
4. Entfernen Sie den unteren Rand von Ihren zweiten Ebene Überschriften.
5. Geben Sie Ihren Überschriften und dem Fließtext etwas `letter-spacing`, damit sie nicht zu eng sind und die Buchstaben etwas atmen können.
6. Geben Sie dem ersten Absatz nach jeder Überschrift in der `<section>` etwas Texteinrückung, z.B. `2rem`.

### Links

1. Geben Sie dem Link, dem besuchten Link, dem Fokus und den Hover-Zuständen Farben, die zu den horizontalen Balken oben und unten auf der Seite passen.
2. Sorgen Sie dafür, dass Links standardmäßig unterstrichen sind, aber wenn Sie darüber hovern oder sie fokussieren, verschwindet die Unterstreichung.
3. Entfernen Sie die Standard-Fokusumrandung von ALLEN Links auf der Seite.
4. Sorgen Sie dafür, dass _externe_ Links das externe Link-Icon rechts neben ihnen eingefügt haben, in einer geeigneten Größe.

### Listen

1. Stellen Sie sicher, dass der Abstand Ihrer Listen und Listenelemente gut mit dem Stil der gesamten Seite harmoniert. Jede Liste sollte die gleiche `line-height` sowie oberen und unteren Rand wie die Absätze haben.
2. Geben Sie Ihren Listenelementen geeignete Aufzählungszeichen-Styles für das Design der Seite. Es liegt bei Ihnen, ob Sie ein benutzerdefiniertes Aufzählungsbild oder etwas anderes verwenden.

### Navigationsmenü

Gestalten Sie Ihr Navigationsmenü so, dass es zur Seite passt. Wir überlassen Ihnen hier größtenteils die Freiheit, aber hier sind einige Tipps/Vorschläge:

1. Lassen Sie die Links wie Buttons aussehen, die so breit wie die Spalte sind, in der sie sich befinden, und so hoch, dass die Navigationspunkte ausreichend Platz ausfüllen.
2. Verwenden Sie die gleiche Schriftart für Ihren Navigationslink-Text wie für Ihre Überschriften.
3. Stellen Sie sicher, dass der Trefferbereich jedes Links so erweitert wird, dass er das gesamte übergeordnete Listenelement füllt.
4. Zentrieren Sie den Text in jedem Link.
5. Setzen Sie den Text in Großbuchstaben (mithilfe von CSS, nicht durch Bearbeitung des HTML!).

## Hinweise und Tipps

- Sie müssen das HTML für diese Übung nicht bearbeiten, es sei denn, dies ist erforderlich, um die Schriftarten auf der Seite anzuwenden.

## Beispiel

Der folgende Screenshot zeigt, wie die Seite zu Beginn aussieht:

![Ein Screenshot des anfänglichen Zustands der Seite. Die obere Überschrift lautet 'St Huxley's Community College' und die Fußzeile bietet einen Urheberrechtshinweis. Es gibt rote Linien, die den Header und die Fußzeile vom Inhalt trennen. Der Hauptinhalt hat drei Spalten, eine mit Fließtext und zwei mit Listen von Links. Der Text wird mit den Standardstilen des Browsers angezeigt](example-start.png)

Der folgende Screenshot zeigt andererseits, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Designs der Herausforderung. Die obere Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Header vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, eine enthält Fließtext, eine eine Liste von Links und eine vertikale Navigationsleiste in der dritten Spalte. Der Text wird mit geeigneten Stilen dargestellt](example-finished.png)

<details>
<summary>Klicken Sie hier, um eine mögliche Lösung anzuzeigen</summary>

Unser fertiges CSS sieht folgendermaßen aus:

```css
/* 1. Apply fonts to page */

@import "https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap";

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
  border-bottom: 5px solid #aa6666;
}

footer {
  border-top: 5px solid #aa6666;
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
  color: #aa6666;
}

a:focus,
a:hover {
  text-decoration: none;
  color: #773333;
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
  border: 1px solid #aa6666;
}

nav li a:focus,
nav li a:hover {
  color: white;
  background: #aa6666;
}

nav li a:active {
  color: white;
  background: black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
