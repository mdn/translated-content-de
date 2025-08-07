---
title: "Testen Sie Ihre Fähigkeiten: HTML-Zugänglichkeit"
short-title: HTML
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Ziel dieses Fähigkeitentests ist es, Ihnen zu helfen zu beurteilen, ob Sie unseren Artikel [HTML: Eine gute Basis für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Leitfaden zur Verwendung von Fähigkeitentests](/de/docs/Learn_web_development#test_your_skills). Sie können sich auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## HTML-Zugänglichkeit 1

In dieser Aufgabe testen wir Ihr Verständnis von semantischem HTML und warum es gut für die Barrierefreiheit ist. Der gegebene Text ist ein Informationspanel mit Aktionsschaltflächen, aber das HTML ist wirklich schlecht.

Um die Aufgabe abzuschließen, aktualisieren Sie das Markup so, dass es geeignetes semantisches HTML verwendet. Sie müssen sich nicht allzu sehr darum kümmern, exakt dasselbe Aussehen und die Textgröße zu reproduzieren, solange die Semantik gut ist.

<!-- Code shared across examples -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4
body {
  background-color: white;
  color: #333;
  font:
    1em / 1.4 Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- Example-specific code -->

```html live-sample___html-ally-1
<font size="7">Need help?</font> <br /><br />
If you have any problems with our products, our support center can offer you all
the help you need, whether you want:
<br /><br />
1. Advice choosing a new product
<br />
2. Tech support on an existing product
<br />
3. Refund and cancellation assistance
<br /><br />
<font size="5">Contact us now</font>
<br /><br />
Our help center contains live chat, email addresses, and phone numbers.
<br /><br />
<div class="button">Find Contact Details</div>
<br />
<font size="5">Find out answers</font>
<br /><br />
Our Forums section contains a large knowledge base of searchable previously
asked questions, and you can always ask a new question if you can't find the
answer you're looking for.
<br /><br />
<div class="button">Access Forums</div>
```

```css live-sample___html-ally-1
.button {
  color: white;
  background-color: blue;
  border-radius: 10px;
  width: 170px;
  padding: 10px;
  text-align: center;
}
```

{{ EmbedLiveSample("html-ally-1", "100%", 400) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<h2>Need help?</h2>

<p>
  If you have any problems with our products, our support center can offer you
  all the help you need, whether you want:
</p>

<ul>
  <li>Advice choosing a new product</li>
  <li>Tech support on an existing product</li>
  <li>Refund and cancellation assistance</li>
</ul>

<h3>Contact us now</h3>

<p>Our help center contains live chat, email addresses, and phone numbers.</p>

<button>Find Contact Details</button>

<h3>Find out answers</h3>

<p>
  Our Forums section contains a large knowledge base of searchable previously
  asked questions, and you can always ask a new question if you can't find the
  answer you're looking for.
</p>

<button>Access forums</button>
```

Bonuspunkte für:

- Nur `<button>` zu verwenden, nicht `<button class="button">` (wiederholte Semantik ist unnötig), und den CSS-Selektor zu aktualisieren, um sicherzustellen, dass die Schaltfläche weiterhin die Stile übernimmt.
- Verwenden einer ungeordneten Liste statt einer geordneten Liste — die Auflistung der Elemente muss nicht unbedingt in einer bestimmten Reihenfolge erfolgen.

</details>

## HTML-Zugänglichkeit 2

In der zweiten Aufgabe haben Sie ein Formular mit drei Eingabefeldern.

Um die Aufgabe abzuschließen:

1. Semantisch die Eingaben mit ihren Labels verknüpfen.
2. Nehmen Sie an, dass diese Eingaben Teil eines größeren Formulars sein werden, und umschließen Sie sie in einem Element, das sie alle als eine zusammengehörige Gruppe verbindet.
3. Geben Sie der Gruppe eine Beschreibung/Titel, die alle Informationen als persönliche Daten zusammenfasst.

```html live-sample___html-ally-2
<form>
  <ul>
    <li>
      Name
      <input type="text" name="name" />
    </li>
    <li>
      Age
      <input type="number" name="age" />
    </li>
    <li>
      Email address
      <input type="email" name="email" />
    </li>
  </ul>
</form>
```

```css live-sample___html-ally-2
form {
  width: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
```

{{ EmbedLiveSample("html-ally-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<form>
  <fieldset>
    <legend>Personal data</legend>
    <ul>
      <li>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
      </li>
      <li>
        <label for="age">Age</label>
        <input type="number" name="age" id="age" />
      </li>
      <li>
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## HTML-Zugänglichkeit 3

In dieser Aufgabe müssen Sie alle Informationslinks im Absatz in gute, zugängliche Links verwandeln.

- Die ersten beiden Links verweisen einfach auf reguläre Webseiten.
- Der dritte Link führt zu einem PDF, und es ist groß — 8 MB.
- Der vierte Link führt zu einem Word-Dokument, daher benötigt der Nutzer eine Anwendung, die damit umgehen kann.

Um die Aufgabe abzuschließen, aktualisieren Sie die Links entsprechend den obigen Beschreibungen.

```html-nolint live-sample___html-ally-3
<p>
  For more information about our activities, check out our fundraising page
  (<a href="/fundraising" target="_blank">click here</a>), education page
  (<a href="/education" target="_blank">click here</a>), sponsorship pack
  (<a href="/resources/sponsorship.pdf" target="_blank">click here</a>),
   and assessment sheets
  (<a href="/resources/assessments.docx" target="_blank">click here</a>).
</p>
```

> [!NOTE]
> Die Links im Ausgangscode haben das Attribut `target="_blank"` gesetzt, damit sie versuchen, die verlinkten Seiten in einem neuen Tab zu öffnen, anstatt im gleichen Tab. Dies ist nicht strikt best practice, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground-Ausgabeframe `<iframe>` geöffnet werden, wodurch Ihr Beispielcode verloren geht!

{{ EmbedLiveSample("html-ally-3", "100%", 140) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr so aussehen:

```html
<p>
  For more information about our activities, check out our
  <a href="/fundraising" target="_blank">fundraising page</a>,
  <a href="/education" target="_blank">education page</a>,
  <a href="/resources/sponsorship.pdf" target="_blank"
    >sponsorship pack (PDF, 8MB)</a
  >, and
  <a href="/resources/assessments.docx" target="_blank"
    >assessment sheets (Word document)</a
  >.
</p>
```

</details>

## HTML-Zugänglichkeit 4

In unserer letzten HTML-Zugänglichkeitsaufgabe erhalten Sie eine Bildergalerie, die einige Zugänglichkeitsprobleme hat. Können Sie sie beheben?

- Das Header-Bild hat ein Zugänglichkeitsproblem, ebenso wie die Galerie-Bilder.
- Sie könnten das Header-Bild weiterentwickeln und es mit CSS für möglicherweise bessere Zugänglichkeit implementieren. Wie würden Sie eine solche Lösung erstellen?

Aktualisieren Sie den Code, um die oben beschriebenen Probleme zu beheben.

```html live-sample___html-ally-4
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="A star that I use to decorate my page" />
  <h1>Groovy images</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg" />
</main>
```

```css live-sample___html-ally-4
body {
  width: 400px;
  margin: 0 auto;
}

main img {
  display: block;
  width: 250px;
  margin: 20px auto;
  box-shadow: 5px 5px 0 black;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

{{ EmbedLiveSample("html-ally-4", "100%", 400) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Die Zugänglichkeitsprobleme sind:

1. Das Header-Bild ist dekorativ, daher benötigt es keinen Alt-Text. Die beste Lösung, wenn Sie dekorative HTML-Bilder verwenden möchten, ist `alt=""` zu setzen, damit ein Screenreader einfach nichts vorliest — anstatt einer Beschreibung oder dem Bilddateinamen. Es ist kein Teil des Inhalts.
2. Die Galerie-Bilder benötigen Alt-Text, da sie Teil des Inhalts sind.

Das aktualisierte HTML könnte ungefähr so aussehen:

```html
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="" />
  <h1>Groovy images</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg"
    alt="a hot air balloon covered in a blue and while checked pattern" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg"
    alt="A cross-section of the middle of a pink grapefruit" />
</main>
```

Es wäre möglicherweise besser, das Hintergrund-Header-Bild mit CSS-Hintergrundbildern zu implementieren. Dazu würden Sie das erste `<img>`-Element aus dem Markup entfernen und eine Regel zum CSS wie diese hinzufügen:

```css
h1 {
  background: url("https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png")
    no-repeat left;
  padding-left: 50px;
}
```

</details>
