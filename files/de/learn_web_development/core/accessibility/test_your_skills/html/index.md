---
title: "Testen Sie Ihre Fähigkeiten: HTML-Zugänglichkeit"
short-title: HTML
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

Das Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen einzuschätzen, ob Sie unseren Artikel [HTML: Eine gute Grundlage für Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility/HTML) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unseren [Anleitung zur Nutzung von Testen Sie Ihre Fähigkeiten](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## HTML-Zugänglichkeit 1

In dieser Aufgabe testen wir Ihr Verständnis für semantisches HTML und warum es gut für die Zugänglichkeit ist. Der gegebene Text ist ein Informationspanel mit Aktionsschaltflächen, aber das HTML ist wirklich schlecht.

Um die Aufgabe abzuschließen, aktualisieren Sie das Markup, um geeignete semantische HTML-Elemente zu verwenden. Sie müssen sich nicht zu sehr darum kümmern, das _genau_ gleiche Aussehen und die Textgröße nachzubilden, solange die Semantik gut ist.

<!-- Code shared across examples -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4
body {
  background-color: #fff;
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

Ihr fertiges HTML sollte in etwa so aussehen:

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

- Nur `<button>` verwenden, nicht `<button class="button">` (wiederholte Semantik ist unnötig), und den CSS-Selektor aktualisieren, um sicherzustellen, dass die Schaltfläche weiterhin die Stile übernimmt.
- Verwendung einer ungeordneten Liste anstelle einer geordneten Liste — die Liste der Elemente muss wirklich nicht in einer bestimmten Reihenfolge sein.

</details>

## HTML-Zugänglichkeit 2

In der zweiten Aufgabe haben Sie ein Formular mit drei Eingabefeldern.

Um die Aufgabe abzuschließen:

1. Verknüpfen Sie die Eingabeelemente semantisch mit ihren Labels.
2. Gehen Sie davon aus, dass diese Eingaben Teil eines größeren Formulars sein werden, und fassen Sie sie in einem Element zusammen, das sie alle als eine einzige zusammenhängende Gruppe verbindet.
3. Geben Sie der Gruppe eine Beschreibung/einen Titel, die/das alle Informationen als persönliche Daten zusammenfasst.

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

Ihr fertiges HTML sollte in etwa so aussehen:

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

In dieser Aufgabe müssen Sie alle Informationslinks im Absatz in gute, zugängliche Links umwandeln.

- Die ersten beiden Links führen einfach zu regulären Webseiten.
- Der dritte Link führt zu einem PDF, und es ist groß — 8MB.
- Der vierte Link führt zu einem Word-Dokument, daher muss der Benutzer eine Anwendung installiert haben, die das verarbeiten kann.

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
> Die Links im ursprünglichen Code haben das Attribut `target="_blank"` gesetzt, sodass sie versuchen, die verlinkten Seiten in einem neuen Tab zu öffnen, wenn Sie darauf klicken, anstatt im gleichen Tab. Das ist nicht unbedingt beste Praxis, aber wir haben es hier getan, damit die Seiten nicht im MDN Playground-Ausgabefenster `<iframe>` geöffnet werden und Ihr Beispielcode dadurch entfernt wird!

{{ EmbedLiveSample("html-ally-3", "100%", 140) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

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

In unserer letzten HTML-Zugänglichkeitsaufgabe erhalten Sie eine Bildergalerie, die einige Zugänglichkeitsprobleme aufweist. Können Sie sie beheben?

- Das Header-Bild hat ein Zugänglichkeitsproblem, ebenso wie die Galerie-Bilder.
- Sie könnten das Header-Bild weiterentwickeln und es mit CSS für eine möglicherweise bessere Zugänglichkeit umsetzen. Wie würden Sie eine solche Lösung erstellen?

Aktualisieren Sie den Code, um die beschriebenen Probleme zu beheben.

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

1. Das Header-Bild ist dekorativ und benötigt daher keinen alt-Text. Die beste Lösung, wenn Sie dekorative HTML-Bilder verwenden, ist, `alt=""` zu setzen, damit ein Screenreader nichts vorliest — anstatt einer Beschreibung oder des Bilddateinamens. Es ist kein Bestandteil des Inhalts.
2. Die Galerie-Bilder benötigen alt-Text, und sie sind Teil des Inhalts.

Das aktualisierte HTML könnte in etwa so aussehen:

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

Es wäre möglicherweise besser, das Hintergrund-Header-Bild mit CSS-Hintergrundbildern zu implementieren. Dazu würden Sie das erste `<img>`-Element aus dem Markup entfernen und eine Regel wie diese zum CSS hinzufügen:

```css
h1 {
  background: url(https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png)
    no-repeat left;
  padding-left: 50px;
}
```

</details>
