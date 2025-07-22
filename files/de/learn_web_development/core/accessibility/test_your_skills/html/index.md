---
title: "Testen Sie Ihre Fähigkeiten: HTML-Zugänglichkeit"
short-title: HTML
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 1d4acd0cc450af2e293b9856d5763b92a0812e30
---

Ziel dieses Fähigkeitstests ist es, zu prüfen, ob Sie unseren Artikel [HTML: A good basis for accessibility](/de/docs/Learn_web_development/Core/Accessibility/HTML) verstanden haben.

> [!NOTE]
> Sie können Lösungen in den interaktiven Editoren auf dieser Seite oder in einem Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) ausprobieren.
>
> Wenn Sie nicht weiterkommen, können Sie sich über unsere [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## HTML-Zugänglichkeit 1

In dieser Aufgabe testen wir Ihr Verständnis von semantischem HTML und warum es für die Zugänglichkeit wichtig ist. Der gegebene Text ist ein Informationsfeld mit Aktionsschaltflächen, aber das HTML ist wirklich schlecht.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie das Markup, um geeignetes semantisches HTML zu verwenden. Sie müssen sich nicht zu sehr darum kümmern, das _exakte_ gleiche Aussehen und die gleiche Textgröße nachzubilden, solange die Semantik stimmt.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/html/html-a11y1-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

- Einfach die Verwendung von `<button>` statt `<button class="button">` (wiederholte Semantik ist unnötig) und Aktualisierung des CSS-Selectors, um sicherzustellen, dass die Schaltfläche weiterhin die Stile aufnimmt.
- Verwendung einer ungeordneten Liste statt einer geordneten Liste — die Liste der Elemente muss nicht wirklich in einer bestimmten Reihenfolge sein.

</details>

## HTML-Zugänglichkeit 2

In der zweiten Aufgabe haben Sie ein Formular, das drei Eingabefelder enthält.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Verknüpfen Sie semantisch die Eingaben mit ihren Labels.
3. Gehen Sie davon aus, dass diese Eingaben Teil eines größeren Formulars sein werden, und umschließen Sie sie mit einem Element, das sie alle zusammen als eine einzelne verwandte Gruppe verbindet.
4. Geben Sie der Gruppe eine Beschreibung/einen Titel, der alle Informationen als persönliche Daten zusammenfasst.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/html/html-a11y2-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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
- Der dritte Link führt zu einem PDF und ist groß — 8MB.
- Der vierte Link führt zu einem Word-Dokument, sodass der Benutzer eine Anwendung installiert haben muss, die damit umgehen kann.

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie die Links entsprechend den oben beschriebenen Anforderungen.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/html/html-a11y3-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

```html live-sample___html-ally-3
<p>
  For more information about our activities, check out our fundraising page (
  <a href="/fundraising">click here</a>), education page (
  <a href="/education">click here</a>), sponsorship pack (
  <a href="/resources/sponsorship.pdf">click here</a>), and assessment sheets (
  <a href="/resources/assessments.docx">click here</a>).
</p>
```

{{ EmbedLiveSample("html-ally-3", "100%", 140) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa so aussehen:

```html
<p>
  For more information about our activities, check out our
  <a href="/fundraising">fundraising page</a>,
  <a href="/education">education page</a>,
  <a href="/resources/sponsorship.pdf">sponsorship pack (PDF, 8MB)</a>, and
  <a href="/resources/assessments.docx">assessment sheets (Word document)</a>.
</p>
```

</details>

## HTML-Zugänglichkeit 4

In unserer letzten HTML-Zugänglichkeitsaufgabe haben Sie eine Bildergalerie, die einige Zugänglichkeitsprobleme aufweist. Können Sie sie beheben?

- Das Titelbild hat ein Zugänglichkeitsproblem, ebenso wie die Galerie-Bilder.
- Sie könnten das Titelbild weiterführen und es mit CSS für möglicherweise bessere Zugänglichkeit implementieren. Wie würden Sie eine solche Lösung erstellen?

Um die Aufgabe abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Aktualisieren Sie den Code, um die oben beschriebenen Probleme zu beheben.

> [!CALLOUT]
>
> Sie können auch den [Ausgangspunkt für diese Aufgabe herunterladen](https://github.com/mdn/learning-area/blob/main/accessibility/tasks/html-css/html/html-a11y4-download.html), um in Ihrem eigenen Editor oder in einem Online-Editor zu arbeiten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

1. Das Titelbild ist dekorativ, daher benötigt es keinen Alt-Text. Die beste Lösung, wenn Sie dekorative HTML-Bilder verwenden, ist, `alt=""` zu setzen, damit ein Screenreader einfach nichts liest — anstatt einer Beschreibung oder des Bilddateinamens. Es ist kein Teil des Inhalts.
2. Die Galerie-Bilder benötigen Alt-Text, da sie Teil des Inhalts sind.

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

Es wäre möglicherweise besser, das Hintergrundtitelbild mithilfe von CSS-Hintergrundbildern zu implementieren. Dazu würde man das erste `<img>`-Element aus dem Markup entfernen und eine Regel im CSS hinzufügen wie diese:

```css
h1 {
  background: url(https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png)
    no-repeat left;
  padding-left: 50px;
}
```

</details>
