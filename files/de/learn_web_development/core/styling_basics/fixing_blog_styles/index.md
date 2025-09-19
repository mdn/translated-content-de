---
title: "Herausforderung: Beheben von Blogseiten-Stilen"
short-title: "Herausforderung: Beheben von Blog-Stilen"
slug: Learn_web_development/Core/Styling_basics/Fixing_blog_styles
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung geben wir Ihnen ein grundlegendes Blogseiten-Beispiel, das teilweise gestylt ist. Wir benötigen Ihre Hilfe, um einige Probleme mit dem vorhandenen CSS zu beheben und einige Stile hinzuzufügen, um es fertigzustellen. Dabei testen wir Ihr Wissen über Selektoren, das Boxmodell und Konflikte/Kaskadierung.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Wiedergabe**-Taste in einem der folgenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Befolgen Sie dann die Anweisungen im Abschnitt [Projektbeschreibung](#projektbeschreibung), um die Seite entsprechend zu gestalten.

```html live-sample___blog-start live-sample___blog-finish
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Sizing a blog page challenge</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>A most excellent blog</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="introduction" class="highlight">
        <h2>Our newest post</h2>
        <p>
          Laoreet lorem curae lectus blandit conubia vel semper laoreet congue
          at taciti.
          <a href="#">Phasellus hac consectetur iaculis dui</a> sapien iaculis
          hac ultricies per luctus. Suscipit mattis lacus semper in porta
          phasellus sollicitudin ipsum fermentum phasellus sapien. Inceptos
          etiam placerat porttitor finibus auctor at platea hendrerit aenean
          laoreet elit lorem odio.
        </p>
      </section>
      <section>
        <h2>Exciting content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
          tortor purus <a href="#">platea sit eu id</a> nisi litora libero.
          Neque vulputate consequat ac amet augue blandit maximus aliquet
          congue. Pharetra vestibulum posuere ornare
          <a href="#">faucibus fusce dictumst</a> orci aenean eu facilisis ut
          volutpat commodo senectus purus himenaeos fames primis convallis nisi.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Neque vulputate consequat</li>
          <li>Phasellus fermentum malesuada</li>
          <li>Curabitur semper venenatis</li>
          <li>Duis lectus porta mattis</li>
        </ul>
        <p>
          Phasellus fermentum malesuada phasellus netus dictum aenean placerat
          egestas amet.
          <a href="#">Ornare taciti semper dolor tristique</a> morbi. Sem leo
          tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus
          mollis nisi mollis enim fermentum laoreet.
        </p>
        <h2>More exciting content</h2>
        <p>
          Curabitur semper venenatis lectus viverra ex dictumst nulla maximus.
          Primis iaculis elementum conubia feugiat venenatis dolor augue ac
          blandit nullam ac <a href="#">phasellus turpis</a> feugiat mollis.
          Duis lectus porta mattis imperdiet vivamus augue litora lectus arcu.
          Justo torquent pharetra volutpat ad blandit bibendum
          <a href="#">accumsan nec elit cras</a> luctus primis ipsum gravida
          class congue.
        </p>
        <p>
          Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing
          tortor <a href="#">tempor elit</a>. Et mollis consectetur habitant
          turpis tortor consectetur adipiscing vulputate dolor lectus iaculis
          convallis adipiscing. Nam hendrerit
          <a href="#">dignissim condimentum ullamcorper diam</a> morbi eget
          consectetur odio in sagittis.
        </p>
      </section>
      <section id="summary" class="highlight">
        <h2>Summary</h2>
        <p>
          Et arcu tortor lorem ac primis ac suspendisse lectus nulla. Habitant
          fermentum <a href="#">leo facilisis lobortis</a> risus lobortis
          maximus gravida. Euismod fames maecenas imperdiet senectus
          <a href="#">nec nisi amet pellentesque felis</a> vitae vestibulum
          integer nec tellus. Eros posuere lacinia et tellus quis fames mattis
          quisque mauris placerat rhoncus pretium sed consectetur
          <a href="#">convallis</a>.
        </p>
      </section>
    </main>
    <footer class="highlight">
      <p>©️ 2025 Nobody</p>
    </footer>
  </body>
</html>
```

```css live-sample___blog-start
/* Basic type and text */

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

a:hover {
  text-decoration: none;
}

/* Nav menu */

ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

li {
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  text-align: center;
  padding: 10px;
}

a:hover {
  background-color: goldenrod;
}

/* Intro and summary */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
}

.highlight a {
  color: purple;
}

/* Footer */

footer {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

{{embedlivesample("blog-start", "100%", 500)}}

## Projektbeschreibung

Das Ihnen gegebene grundlegende Blog-Beispiel ist noch nicht fertig, und der vorhandene Code hat einige Probleme. Befolgen Sie die folgenden Schritte, um das Projekt abzuschließen.

1. Wir möchten, dass jedes Element auf dieser Seite das alternative Boxmodell verwendet. Fügen Sie der Stylesheet eine Regel hinzu, die dies bewirkt.

2. Es gibt ein Problem mit den Regeln für das Navigationsmenü – die Stile sind größtenteils in Ordnung, aber sie beeinflussen die andere ungeordnete Liste und die Inhaltslinks, so dass sie schlecht aussehen! Können Sie die Selektoren für diese Regeln so anpassen, dass sie nur das Navigationsmenü ansprechen?

3. Tatsächlich gibt es ein weiteres Problem mit dem Navigationsmenü – die `<a>`-Elemente erstrecken sich nicht über die gesamte Breite ihrer `<li>`-Element-Eltern, wie sie sollten. Können Sie die Anzeige anpassen, damit sie die volle Breite einnehmen?

4. Für sowohl die Navigationsmenü-Links als auch die regulären Inhaltslinks setzen wir einen anderen Stil beim Hover, damit Benutzer mit der Maus sehen können, über welchen Link sie schweben. Dies stellt ein Barrierefreiheitsproblem für Benutzer mit Tastatur dar, die diese Stile nicht sehen können. Können Sie die Selektoren in den relevanten Regeln so ändern, dass diese Stile auch angewendet werden, wenn ein Tastaturbenutzer zu den Links springt?

5. Wir möchten, dass die Einführung, die Zusammenfassung und die Fußzeile auf allen Seiten `20px` Padding haben. Machen Sie dies, indem Sie irgendwo in der Stylesheet eine einzelne Deklaration hinzufügen.

6. Fügen Sie eine Regel hinzu, die die erste Zeile jedes Absatzes auswählt, der direkt nach einer zweiten Überschrift erscheint, und machen Sie diese fett.

7. In Fortsetzung der vorherigen Frage, können Sie sich eine Methode überlegen, die erste Zeile in jedem Absatz nach einer zweiten Überschrift fett zu markieren, jedoch nur, wenn das Elternelement nicht die Einführung, die Zusammenfassung oder die Fußzeile ist? Sie können dies auf verschiedene Weise tun, einige sind prägnanter als andere.

8. Weiter unten sehen Sie, dass wir `.highlight a` verwenden, um die `<a>`-Elemente innerhalb der Einführung und Zusammenfassung auszuwählen und sie `purple` zu färben. Aber das ist nicht gut – der Farbkontrast ist schrecklich. Angesichts der Tatsache, dass Sie diese Regel nicht ändern oder entfernen dürfen, können Sie eine andere Regel weiter oben in der Quellreihenfolge hinzufügen, die die `<a>`-Elemente `yellow` färbt? Da sie weiter oben in der Quellreihenfolge ist, muss sie eine höhere Spezifität haben.

9. Sie werden sehen, dass wir versuchen, das `<footer>` am Ende der Stylesheet auszuwählen und ihm einen Textschatten, etwas Abstand zur Verschiebung vom der Zusammenfassung und eine andere Hintergrundfarbe zu geben, um es hervorzuheben. Es erhält jedoch nicht die gewünschten Rand- und Hintergrundfarbstile, weil die `.highlight`-Regel eine höhere Spezifität hat, sodass deren Deklarationen gewinnen. Können Sie den Selektor so ändern, dass diese Stile angewendet werden?

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen – Fehler, die Sie sonst vielleicht übersehen hätten – damit Sie sie beheben können.
- Sie müssen das HTML in keiner Weise ändern.

## Beispiel

Das fertige Projekt sollte so aussehen:

{{embedlivesample("blog-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige CSS sieht folgendermaßen aus:

```css live-sample___blog-finish
/* Basic type and text */

/* 1. Set alternative box model on all elements */
* {
  box-sizing: border-box;
}

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

/* 4. Set :hover styles to also apply on :focus */
a:hover,
a:focus {
  text-decoration: none;
}

/* 6, 7. bold ::first-line of each <p> adjacent to an <h2>
Use :not() selector to specify only those inside a
<section> that doesn't have the highlight class */
section:not(.highlight) h2 + p::first-line {
  font-weight: bold;
}

/*

6, 7. OR set it on all first, then remove it from those
inside a <section class="highlight"> afterwards

section h2 + p::first-line {
  font-weight: bold;
}

.highlight h2 + p::first-line {
  font-weight: normal;
}

*/

/* Nav menu */

/* 2. Set scope of nav styles to only
elements that are descendants of <nav> */

nav ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

nav li {
  flex: 1;
}

nav a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  /* 3. Set <a> elements to display: block so they span
  100% of parent width by default */
  display: block;
  text-align: center;
  padding: 10px;
}

/* 4. Set :hover styles to also apply on :focus */
nav a:hover,
nav a:focus {
  background-color: goldenrod;
}

/* Intro and summary */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
  /* 5. highlight class is set on introduction, summary, and footer.
  This is where to set the padding for all of them */
  padding: 20px;
}

/* 8. ID selectors have a higher specificity than class selectors, so will
override styles even when earlier in the source order */
#introduction a,
#summary a {
  color: yellow;
}

.highlight a {
  color: purple;
}

/* Footer */

/* 9. Adding .highlight to the selector increases
the specificity so now this rule's styles win */
footer.highlight {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
