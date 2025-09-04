---
title: "Herausforderung: Gestaltung einer Biografieseite"
short-title: "Herausforderung: Biografieseite"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

In dieser Herausforderung gestalten Sie eine einfache Biografieseite, die Ihre Fähigkeiten in der Anwendung von Selektoren, dem Färben von Hintergründen und der Textgestaltung testet, die Sie in den letzten Lektionen erlernt haben. Wir laden Sie auch ein, einige grundlegende CSS-Funktionen zu recherchieren, die wir noch nicht behandelt haben, um Ihre Recherchefähigkeiten zu testen.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die Schaltfläche **Play** in einem der unten stehenden Code-Panels, um das bereitgestellte Beispiel im MDN Playground zu öffnen. Anschließend folgen Sie den Anweisungen in den folgenden Abschnitten, um die Seite entsprechend zu gestalten.

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
  <li>Tel: <a href="tel:12345678">123 45678</a></li>
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

## Projektbeschreibung

Folgen Sie den Anweisungen unten, um die Biografie zu gestalten. Versuchen Sie, die benötigten CSS-Funktionen im [MDN CSS Leitfaden](/de/docs/Web/CSS/Reference) nachzuschlagen.

### Box-Stile

1. Geben Sie dem `<body>` Element ein Padding von `20px` auf allen Seiten und eine Breite von `500px`.
2. Geben Sie dem `<body>` Element eine Hintergrundfarbe von `#efefef` (ein hellgrauer {{cssxref("&lt;hex-color>")}} Wert).
3. Zentrieren Sie das `<body>` Element im Ansichtsfenster, indem Sie die oberen und unteren Ränder auf `0` setzen und die linken und rechten Ränder auf `auto`.
4. Geben Sie dem `<ul>`, das für die Kontaktdetails verwendet wird, eine Hintergrundfarbe von `white` und einen 5px soliden lila Rand auf allen Seiten. Geben Sie dem `<ul>` ein Padding von `30px` auf allen Seiten, um den Inhalt vom Rand wegzudrücken.
5. Geben Sie dem `<ul>` einen Border-Radius von `20px`.

### Text-Stile

1. Machen Sie die Überschrift der Ebene eins dunkelgrau, indem Sie das CSS-Farbkeyword `darkslategray` verwenden, und geben Sie der Überschrift einen `10px` gepunkteten unteren Rand, der das CSS-Farbkeyword `purple` verwendet.
2. Machen Sie die Überschrift der Ebene zwei kursiv.
3. Geben Sie der Überschrift der Ebene eins eine Schriftgröße von `2rem` und der Überschrift der Ebene zwei eine Schriftgröße von `1.5rem`.
4. Wählen Sie das `<div>` mit einem Klassenselektor aus und geben Sie ihm eine Farbe von `darkslategray` und ein fettgedrucktes Schriftgewicht.
5. Machen Sie die Links `grün`.
6. Machen Sie die Links `dunkelgrün`, während sie mit dem Mauszeiger darübergefahren oder über die Tastatur fokussiert sind (Sie müssen dafür ein paar {{cssxref("pseudo-classes")}} verwenden).
7. Lassen Sie die Links ihre Unterstreichung verlieren, während sie überflogen oder fokussiert sind.

## Hinweise und Tipps

- Verwenden Sie den [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), um unbeabsichtigte Fehler in Ihrem CSS zu entdecken - Fehler, die Ihnen ansonsten entgangen sein könnten - damit Sie sie beheben können.
- Versuchen Sie, einige fortgeschrittenere CSS-Funktionen nachzuschlagen (auch hier wird der [MDN CSS Leitfaden](/de/docs/Web/CSS/Reference) nützlich sein) und fügen Sie Ihrer Lösung weitere Stile hinzu. Seien Sie abenteuerlustig!
- Denken Sie daran, dass es hier keine falsche Antwort gibt - zu diesem Zeitpunkt Ihres Lernens können Sie sich erlauben, ein wenig Spaß zu haben.

## Beispiel

Ihr fertiges Beispiel sollte am Ende ungefähr so aussehen:

{{EmbedLiveSample("style-bio-finish", "100%", "400px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Das CSS, das auf das fertige Live-Beispiel angewendet wurde, sieht wie folgt aus:

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

Die CSS-Eigenschaften, die wir verwendet haben, um die Herausforderung zu lösen, sind wie folgt - jede verlinkt zu ihrer Eigenschaftsseite auf MDN, die Ihnen mehr Beispiele für ihre Verwendung gibt.

- {{cssxref("background-color")}}
- {{cssxref("border")}} oder verwandte ausführliche Eigenschaften.
- {{cssxref("color")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("margin")}} oder verwandte ausführliche Eigenschaften.
- {{cssxref("padding")}} oder verwandte ausführliche Eigenschaften.
- {{cssxref("text-decoration")}}
- {{cssxref("width")}}

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
