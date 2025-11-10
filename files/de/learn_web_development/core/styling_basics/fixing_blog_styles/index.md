---
title: "Herausforderung: Blogseiten-Stile korrigieren"
short-title: "Herausforderung: Blogseiten-Stile korrigieren"
slug: Learn_web_development/Core/Styling_basics/Fixing_blog_styles
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung geben wir Ihnen ein grundlegendes Blogseiten-Beispiel, das teilweise gestylt ist. Wir benötigen Ihre Hilfe, um einige Probleme mit dem vorhandenen CSS zu beheben und einige Stile hinzuzufügen, um es fertigzustellen. Unterwegs überprüfen wir Ihr Wissen über Selektoren, das Boxmodell und Konflikte/Kaskade.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche in einem der Code-Panels unten, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Folgen Sie dann den Anweisungen im Abschnitt [Projektauftrag](#projektauftrag), um die Seite entsprechend zu stylen.

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

## Projektauftrag

Das grundlegende Blogbeispiel, das Sie erhalten haben, ist nicht fertiggestellt, und der vorhandene Code hat einige Probleme. Befolgen Sie die unten aufgeführten Schritte, um das Projekt abzuschließen.

1. Wir möchten, dass jedes Element auf dieser Seite das alternative Boxmodell verwendet. Fügen Sie ein Regel in das Stylesheet hinzu, das dies umsetzt.

2. Es gibt ein Problem mit den Regeln für das Navigationsmenü — die Stile sind größtenteils in Ordnung, aber sie wirken sich auf die anderen ungeordneten Listen und Inhaltslinks aus und lassen sie schlecht aussehen! Können Sie die Selektoren für diese Regeln so anpassen, dass sie nur das Navigationsmenü betreffen?

3. Tatsächlich gibt es ein weiteres Problem mit dem Navigationsmenü — die `<a>`-Elemente erstrecken sich nicht über die volle Breite ihrer `<li>`-Elementeltern, wie sie es sollten. Können Sie die Art ihrer Darstellung so anpassen, dass sie sich über die volle Breite erstrecken?

4. Für sowohl die Navigationsmenü-Links als auch die regulären Inhaltslinks setzen wir einen anderen Stil beim Hover, damit Mausbenutzer sehen können, über welchen Link sie fahren. Dies stellt ein Zugänglichkeitsproblem für Tastaturnutzer dar, die diese Stile nicht sehen können. Können Sie die Selektoren in den entsprechenden Regeln so ändern, dass diese Stile auch angewendet werden, wenn ein Tastaturnutzer zu den Links navigiert?

5. Wir möchten, dass die Einführung, Zusammenfassung und der Footer auf allen Seiten `20px` Padding haben. Machen Sie dies möglich, indem Sie eine einzelne Deklaration irgendwo im Stylesheet hinzufügen.

6. Fügen Sie eine Regel hinzu, die die erste Zeile jedes Absatzes, der direkt nach einer Überschrift der zweiten Ebene erscheint, auswählt und fett macht.

7. Als Fortsetzung der vorherigen Frage, können Sie sich eine Möglichkeit überlegen, die erste Zeile in jedem Absatz nach einer Überschrift der zweiten Ebene fett zu machen, aber nur, wenn das übergeordnete Element nicht die Einführung, Zusammenfassung oder der Footer ist? Sie können dies auf verschiedene Arten tun, einige sind präziser als andere.

8. Weiter unten sehen Sie, dass wir `.highlight a` verwenden, um die `<a>`-Elemente innerhalb der Einführung und Zusammenfassung auszuwählen und sie `purple` zu färben. Aber das ist nicht gut — der Farbkontrast ist schrecklich. Angenommen, Sie dürfen diese Regel nicht ändern oder entfernen, können Sie eine andere Regel darüber in der Quellreihenfolge hinzufügen, die die `<a>`-Elemente `yellow` färbt? Da sie darüber in der Quellreihenfolge steht, muss sie eine höhere Spezifität haben.

9. Sie sehen, dass wir versuchen, das `<footer>` am Ende des Stylesheets auszuwählen und ihm einen Textschatten, etwas Abstand, um es von der Zusammenfassung zu entfernen, und eine andere Hintergrundfarbe zu geben, um es hervorzuheben. Allerdings erhält es nicht die gewünschten Abstand- und Hintergrundfarbstile, weil die `.highlight`-Regel eine höhere Spezifität hat, sodass ihre Deklarationen gewinnen. Können Sie den Selektor ändern, um sicherzustellen, dass diese Stile angewendet werden?

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu erkennen — Fehler, die Sie sonst vielleicht übersehen hätten — damit Sie sie beheben können.
- Es ist nicht erforderlich, das HTML in irgendeiner Weise zu ändern.

## Beispiel

Das fertige Projekt sollte so aussehen:

{{embedlivesample("blog-finish", "100%", 500)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das fertige CSS sieht so aus:

```css live-sample___blog-finish
/* Basic type and text */

/* Solution: Set alternative box model on all elements */
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

/* Solution: Update :hover styles to also apply on :focus
so that keyboard users can see the updated styles when
they tab to links */
a:hover,
a:focus {
  text-decoration: none;
}

/* Solution: bold ::first-line of each paragraph that appears
right after a second-level heading, but only when the parent
element is not the introduction, summary, or footer
(use :not(.highlight) to specify this second bit) */
section:not(.highlight) h2 + p::first-line {
  font-weight: bold;
}

/*

Alternative to the above solution: bold all instances first,
then remove it from those inside an element with the highlight
class afterwards

section h2 + p::first-line {
  font-weight: bold;
}

.highlight h2 + p::first-line {
  font-weight: normal;
}

*/

/* Nav menu */

/* Solution: Adjust nav rule selectors to only
target the <nav> menu */

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
  /* Solution: Set nav <a> elements to display: block so they span
  the full width of their <li> element parents */
  display: block;
  text-align: center;
  padding: 10px;
}

/* Solution: Update :hover styles to also apply on :focus
so that keyboard users can see the updated styles when
they tab to links */
nav a:hover,
nav a:focus {
  background-color: goldenrod;
}

/* Intro and summary */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
  /* Solution: Set 20px of padding on all sides of the
  introduction, summary, and footer. They all have the
  highlight class set on them */
  padding: 20px;
}

/* Solution: Add higher specificity rule above ".highlight a"
rule to override color setting (ID selectors have a higher
specificity than class selectors) */
#introduction a,
#summary a {
  color: yellow;
}

.highlight a {
  color: purple;
}

/* Footer */

/* Solution: Increase footer rule specificity by adding ".highlight"
so that its margin-top and background-color styles are applied */
footer.highlight {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
