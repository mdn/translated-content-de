---
title: "Testen Sie Ihr Wissen: HTML-Barrierefreiheit"
short-title: "Test: HTML a11y"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 89e8e67d44039717f685a98d8b161f3d1ed1b233
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

Ziel dieses Fähigkeitstests ist es, Ihnen zu helfen, zu beurteilen, ob Sie unseren Artikel [HTML: Eine gute Grundlage für Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility/HTML) verstanden haben.

> [!NOTE]
> Um Hilfe zu erhalten, lesen Sie unsere [Anleitung zur Nutzung von Wissenstests](/de/docs/Learn_web_development#test_your_skills). Sie können uns auch über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) erreichen.

## HTML-Barrierefreiheit 1

In dieser Aufgabe testen wir Ihr Verständnis von semantischem HTML und warum es gut für die Barrierefreiheit ist. Der gegebene Text ist ein Informationspanel mit Aktionsbuttons, aber das HTML ist wirklich schlecht.

Um die Aufgabe abzuschließen, aktualisieren Sie das Markup, um geeignetes semantisches HTML zu verwenden. Sie müssen sich nicht zu sehr darum kümmern, das _exakt_ gleiche Aussehen und die Textgröße beizubehalten, solange die Semantik gut ist.

<!-- Code shared across examples -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4
body {
  background-color: white;
  color: #333333;
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

Zusatzpunkte für:

- Nur `<button>` zu verwenden, nicht `<button class="button">` (wiederholte Semantik ist unnötig), und die CSS-Selektoren so zu aktualisieren, dass der Button weiterhin die Stile aufgreift.
- Eine ungeordnete Liste zu verwenden, nicht eine geordnete Liste — die Liste der Elemente muss nicht wirklich in einer bestimmten Reihenfolge sein.

</details>

## HTML-Barrierefreiheit 2

In der zweiten Aufgabe haben Sie ein Formular, das drei Eingabefelder enthält.

Um die Aufgabe abzuschließen:

1. Assoziieren Sie die Eingaben semantisch mit ihren Labels.
2. Gehen Sie davon aus, dass diese Eingaben Teil eines größeren Formulars sein werden, und umschließen Sie sie in einem Element, das sie alle als eine einzige verwandte Gruppe zusammenführt.
3. Geben Sie der Gruppe eine Beschreibung/einen Titel, der alle Informationen als persönliche Daten zusammenfasst.

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

## HTML-Barrierefreiheit 3

In dieser Aufgabe müssen Sie alle Informationslinks im Absatz in gute, zugängliche Links umwandeln.

- Die ersten beiden Links führen einfach zu regulären Webseiten.
- Der dritte Link führt zu einem PDF, und es ist groß — 8MB.
- Der vierte Link führt zu einem Word-Dokument, sodass der Benutzer eine Anwendung installiert haben muss, die dies verarbeiten kann.

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
> Die Links im Startcode haben das Attribut `target="_blank"`, damit sie beim Anklicken versuchen, die verlinkten Seiten in einem neuen Tab zu öffnen, statt im gleichen Tab. Das ist nicht unbedingt beste Praxis, aber wir haben es hier so gemacht, damit die Seiten nicht im MDN Playground-Ausgabe-`<iframe>` geöffnet werden und dabei Ihr Beispielcode verloren geht!

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

## HTML-Barrierefreiheit 4

In unserer letzten HTML-Barrierefreiheitsaufgabe erhalten Sie eine Bildergalerie, die einige Zugänglichkeitsprobleme aufweist. Können Sie sie beheben?

- Das Headerbild hat ein Zugänglichkeitsproblem, ebenso wie die Galerie-Bilder.
- Sie könnten das Headerbild weiterentwickeln und es unter Verwendung von CSS implementieren, für möglicherweise bessere Zugänglichkeit. Wie würden Sie eine solche Lösung erstellen?

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

1. Das Headerbild ist dekorativ und benötigt daher keinen Alt-Text. Die beste Lösung, wenn Sie dekorative HTML-Bilder verwenden, ist `alt=""` zu setzen, so dass ein Screenreader einfach nichts vorliest — statt einer Beschreibung oder dem Bilddateinamen. Es ist kein Bestandteil des Inhalts.
2. Die Galerie-Bilder benötigen Alt-Text und sind Bestandteil des Inhalts.

Das aktualisierte HTML könnte so aussehen:

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

Es wäre möglicherweise besser, das Hintergrund-Headerbild mithilfe von CSS-Hintergrundbildern zu implementieren. Dazu würden Sie das erste `<img>`-Element aus dem Markup entfernen und eine Regel wie diese zum CSS hinzufügen:

```css
h1 {
  background: url("https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png")
    no-repeat left;
  padding-left: 50px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
