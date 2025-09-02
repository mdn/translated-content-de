---
title: "Herausforderung: Gestaltung einer Biografieseite"
short-title: "Herausforderung: Biografieseite"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: d86ab254d0ed24f36a4657e4f54409df786b2433
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung werden Sie eine einfache Biografieseite gestalten, um einige der Fähigkeiten zu testen, die Sie in den letzten Lektionen gelernt haben, einschließlich dem Schreiben von Selektoren, dem Färben von Hintergründen und der Textgestaltung. Wir laden Sie auch dazu ein, einige grundlegende CSS-Funktionen, die wir nicht behandelt haben, nachzuschlagen, um Ihre Recherchenfähigkeiten zu testen.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Abspielen**-Schaltfläche in einem der untenstehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Befolgen Sie dann die Anweisungen in den folgenden Abschnitten, um die Seite entsprechend zu gestalten.

```html live-sample___style-bio-start live-sample___style-bio-finish
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: <a href="tel:12345678"">123 45678</a></li>
</ul>
```

```css live-sample___style-bio-start
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
}
```

{{EmbedLiveSample("style-bio-start", "100%", "400px")}}

## Projektauftrag

Befolgen Sie die untenstehenden Anweisungen, um die Biografie zu gestalten. Versuchen Sie, die benötigten CSS-Funktionen im [MDN CSS-Referenz](/de/docs/Web/CSS/Reference) nachzuschlagen.

### Box-Stile

1. Geben Sie dem `<body>`-Element einen Innenabstand von `20px` auf allen Seiten und eine Breite von `500px`.
2. Geben Sie dem `<body>`-Element eine Hintergrundfarbe von `#efefef` (ein hellgrauer {{cssxref("&lt;hex-color>")}}-Wert).
3. Zentrieren Sie das `<body>`-Element innerhalb des Viewports, indem Sie den oberen und unteren Rand auf `0` und den linken und rechten Rand auf `auto` setzen.
4. Geben Sie dem `<ul>`, das für die Kontaktdaten verwendet wird, eine Hintergrundfarbe von `weiß` und einen 5px breiten purpurnen Rahmen auf allen Seiten. Geben Sie dem `<ul>` einen Innenabstand von `30px` auf allen Seiten, um den Inhalt vom Rahmen wegzudrücken.
5. Geben Sie dem `<ul>` einen Rahmenradius von `20px`.

### Textstile

1. Machen Sie die Überschrift der ersten Ebene dunkelgrau, indem Sie das CSS-Farbwort `darkslategray` verwenden, und geben Sie der Überschrift einen `10px` gepunkteten unteren Rahmen, der das CSS-Farbwort `purple` verwendet.
2. Geben Sie der Überschrift der zweiten Ebene kursiven Stil.
3. Geben Sie der Überschrift der ersten Ebene eine Schriftgröße von `2rem` und der Überschrift der zweiten Ebene eine Schriftgröße von `1.5rem`.
4. Wählen Sie das `<div>` mit einem Klassen-Selektor und geben Sie ihm die Farbe `darkslategray` und ein fettes Schriftgewicht.
5. Machen Sie die Links `grün`.
6. Machen Sie die Links `dunkelgrün`, während sie mit dem Mauszeiger überfahren oder über die Tastatur fokussiert werden (Sie müssen dafür ein paar {{cssxref("pseudo-classes")}} verwenden).
7. Lassen Sie die Links während des Hoverns oder Fokussierens ihre Unterstreichung verlieren.

## Tipps und Hinweise

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu finden – Fehler, die Ihnen sonst vielleicht entgangen wären – damit Sie sie beheben können.
- Versuchen Sie, einige fortgeschrittenere CSS-Funktionen nachzuschlagen (auch hier ist die [MDN CSS-Referenz](/de/docs/Web/CSS/Reference) nützlich) und fügen Sie Ihrer Lösung einige weitere Stile hinzu. Seien Sie abenteuerlustig!
- Denken Sie daran, dass es hier keine falsche Antwort gibt – in dieser Phase Ihres Lernprozesses können Sie sich ein wenig Spaß erlauben.

## Beispiel

Ihr fertiges Beispiel sollte am Ende etwa so aussehen:

{{EmbedLiveSample("style-bio-finish", "100%", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung zu zeigen</summary>

Das CSS, das im fertigen Live-Beispiel angewandt wurde, sieht folgendermaßen aus:

```css live-sample___style-bio-finish
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
  padding: 20px;
  width: 500px;
  background-color: #efefef;
  margin: 0 auto;
}

h1 {
  color: darkslategray;
  border-bottom: 10px dotted purple;
  font-size: 2rem;
}

h2 {
  font-style: italic;
  font-size: 1.5rem;
}

.job-title {
  color: darkslategray;
  font-weight: bold;
}

ul {
  background-color: white;
  border: 5px solid purple;
  padding: 30px;
  border-radius: 20px;
}

a {
  color: green;
}

a:hover,
a:focus {
  color: darkgreen;
  text-decoration: none;
}
```

Die CSS-Eigenschaften, die wir verwendet haben, um die Herausforderung zu lösen, sind die folgenden – jede Eigenschaft verlinkt auf ihre Eigenschaftsseite auf MDN, die Ihnen mehr Beispiele zur Verwendung gibt.

- {{cssxref("background-color")}}
- {{cssxref("border")}} oder verwandte Langform-Eigenschaften.
- {{cssxref("color")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("margin")}} oder verwandte Langform-Eigenschaften.
- {{cssxref("padding")}} oder verwandte Langform-Eigenschaften.
- {{cssxref("text-decoration")}}
- {{cssxref("width")}}

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
