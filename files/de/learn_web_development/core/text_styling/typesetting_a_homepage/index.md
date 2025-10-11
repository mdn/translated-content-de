---
title: "Herausforderung: Das Setzen der Homepage einer Gemeinschaftsschule"
short-title: "Herausforderung: Homepage der Gemeinschaftsschule"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

In dieser Herausforderung testen wir Ihr Verständnis der Textstil-Techniken, die wir in diesem Modul behandelt haben – indem Sie die Homepage einer Gemeinschaftsschule setzen. Dabei könnten Sie sogar ein wenig Spaß haben.

## Ausgangspunkt

Sie lösen diese Herausforderung in Ihrer lokalen Entwicklungsumgebung; idealerweise sollten Sie das Beispiel in einem vollständigen Browserfenster betrachten, um sicherzustellen, dass Sie auf dem richtigen Weg sind.

1. Erstellen Sie einen neuen Ordner auf Ihrem Computer namens `typesetting-challenge`.
2. Erstellen Sie in dem Ordner eine `index.html` Datei und fügen Sie den folgenden Inhalt ein:

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

3. Erstellen Sie in dem Ordner eine `style.css` Datei und fügen Sie den folgenden Inhalt ein:

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

4. Laden Sie das Icon [`external-link-52.png`](https://mdn.github.io/shared-assets/images/examples/external-link-52.png) herunter und speichern Sie es im selben Verzeichnis wie die Code-Dateien.

5. Speichern Sie Ihre Dateien und laden Sie `index.html` in einem Browser, um es zu testen.

## Projektbeschreibung

Sie haben HTML für die Homepage eines imaginären Community Colleges sowie CSS erhalten, das den Inhalt in drei Spalten aufteilt und einige grundlegende Stile bietet. Sie müssen am Ende der CSS-Datei Regeln hinzufügen, um die in den folgenden Abschnitten beschriebenen Herausforderungen zu lösen.

### Schriftarten auf der Seite anwenden

1. Wählen Sie Schriftarten für Überschriften und Fließtext aus, die Sie auf der Seite anwenden:
   - Da es sich um ein College handelt, sollten die Schriftarten der Seite ein recht seriöses, vertrauensvolles Erscheinungsbild verleihen. Eine Serifenschrift für den gesamten Fließtext, kombiniert mit einer kräftigen/Blockschrift für die Überschriften, wäre geeignet.
   - Es liegt an Ihnen, ob Sie einen Online-Schriftartendienst wie Google Fonts nutzen möchten, um auf die Schriftarten zuzugreifen, oder die Schriftdateien lokal in Ihr Projekt herunterladen. Was auch immer Sie wählen, stellen Sie die Schriftarten auf Ihrer Seite bereit. Wenn Sie lokale Schriftdateien verwenden, nutzen Sie einen geeigneten Dienst, um einen zuverlässigen `@font-face`-Code für sie zu generieren.
2. Wenden Sie Ihre Fließtext-Schriftart auf die gesamte Seite und Ihre Überschriftenschriftart auf Ihre Überschriften an.

### Allgemeine Textformatierung

1. Geben Sie Ihren Überschriften und anderen Elementtypen geeignete Schriftgrößen, die mit einer geeigneten relativen Einheit definiert sind.
2. Geben Sie Ihrem Fließtext eine geeignete `line-height`.
3. Zentrieren Sie Ihre oberste Überschrift auf der Seite.
4. Entfernen Sie den unteren Rand Ihrer zweitrangigen Überschriften.
5. Geben Sie Ihren Überschriften und dem Fließtext etwas `letter-spacing`, damit sie nicht zu gedrängt erscheinen und die Buchstaben ein wenig Luft zum Atmen haben.
6. Geben Sie dem ersten Absatz nach jeder Überschrift in dem `<section>` einen kleinen Text-Einzug, sagen wir `2rem`.

### Links

1. Geben Sie den Zuständen Link, besucht, Fokus und Hover Farben, die mit der Farbe der horizontalen Balken oben und unten auf der Seite harmonieren.
2. Machen Sie es so, dass Links standardmäßig unterstrichen sind, aber beim Überfahren oder Fokussieren die Unterstreichung verschwindet.
3. Entfernen Sie die Standard-Fokus-Kontur von ALLEN Links auf der Seite.
4. Machen Sie es so, dass _externe_ Links das externe Link-Icon auf der rechten Seite von ihnen eingefügt haben und in einer geeigneten Größe angezeigt werden.

### Listen

1. Stellen Sie sicher, dass der Abstand Ihrer Listen und Listeneinträge gut zu der gesamten Gestaltung der Seite passt. Jede Liste sollte die gleiche `line-height` und obere sowie untere Marge wie die Absätze haben.
2. Geben Sie Ihren Listeneinträgen geeignete Aufzählungsstile, die zum Design der Seite passen. Es liegt bei Ihnen, ob Sie ein benutzerdefiniertes Aufzählungsbild verwenden oder etwas anderes.

### Navigationsmenü

Stilen Sie Ihr Navigationsmenü so, dass es mit der Seite harmoniert. Das überlassen wir größtenteils Ihnen, aber hier sind einige Tipps/Vorschläge:

1. Lassen Sie die Links wie Buttons aussehen, die so breit sind wie die Spalte, in der sie sich befinden, und so hoch, dass die Navigationspunkte einen angemessenen Raum ausfüllen.
2. Wenden Sie auf Ihren Navi-Link-Text dieselbe Schriftart an wie auf Ihre Überschriften.
3. Stellen Sie sicher, dass der Trefferbereich jedes Links erweitert wird, um den gesamten Eltern-Listeneintrag auszufüllen.
4. Zentrieren Sie den Text in jedem Link.
5. Schreiben Sie den Text groß (mit CSS, nicht durch Bearbeiten des HTML!).

## Hinweise und Tipps

- Sie müssen das HTML für diese Übung nicht bearbeiten, es sei denn, es ist notwendig, um die Schriftarten auf der Seite anzuwenden.

## Beispiel

Der folgende Screenshot zeigt, wie die Seite zu Beginn aussieht:

![Ein Screenshot des Anfangszustands der Seite. Die oberste Überschrift lautet 'St Huxley's Community College' und die Fußzeile bietet einen Urheberrechtshinweis. Es gibt rote Linien, die den Header und die Fußzeile vom Inhalt trennen. Der Hauptinhalt hat drei Spalten, eine mit Fließtext und zwei mit Listen von Links. Der Text wird mit den Standardstilen des Browsers gerendert](example-start.png)

Der folgende Screenshot zeigt hingegen ein Beispiel, wie das fertige Design aussehen könnte:

![Ein Screenshot des fertigen Design der Herausforderung. Die oberste Überschrift lautet 'St Huxley's Community College'. Es gibt eine rote Linie, die den Header vom Inhalt trennt. Der Hauptinhalt hat drei Spalten, eine mit Fließtext, eine mit einer Liste von Links, und eine vertikale Navigationsleiste in der dritten Spalte. Der Text wird mit geeigneten Stilen gerendert](example-finished.png)

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
  background: url("external-link-52.png") no-repeat right center;
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
