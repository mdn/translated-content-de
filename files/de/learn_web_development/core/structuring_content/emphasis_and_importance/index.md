---
title: Betonung und Wichtigkeit
slug: Learn_web_development/Core/Structuring_content/Emphasis_and_importance
l10n:
  sourceCommit: cc7ed25d67ec3df5df8cfa255e1066cb5845e293
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}

Im vorherigen Artikel haben wir besprochen, warum Semantik in HTML wichtig ist, und uns auf Überschriften und Absätze konzentriert. Dieser Artikel setzt das Thema Semantik fort und betrachtet HTML-Elemente, die Betonung und Wichtigkeit für Text anwenden (vergleichbar mit Kursiv- und Fettdruck in Printmedien).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>
        behandelt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Bedeutung von Betonung und Wichtigkeit und die grundlegenden Elemente, die sie in HTML anwenden, wie <code>&lt;em&gt;</code> und <code>&lt;strong&gt;</code>.</li>
          <li>Identifizieren von Präsentations-Markup, das nicht mehr verwendet werden sollte (z.B. <code>&lt;big&gt;</code> und <code>&lt;font&gt;</code>); es ist veraltet.</li>
          <li>Identifizieren von Präsentations-Markup, das eine neue semantische Bedeutung erhalten hat (z.B. <code>&lt;i&gt;</code> und <code>&lt;b&gt;</code>).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Betonung und Wichtigkeit?

In der menschlichen Sprache betonen wir oft bestimmte Wörter, um die Bedeutung eines Satzes zu ändern, und wir möchten oft bestimmte Wörter als wichtig oder auf irgendeine Weise anders markieren. HTML bietet verschiedene semantische Elemente, die es uns ermöglichen, Textinhalte mit solchen Effekten zu versehen, und in diesem Abschnitt schauen wir uns einige der gängigsten an.

### Betonung

Wenn wir in gesprochener Sprache Betonung hinzufügen wollen, _betonen_ wir bestimmte Wörter, wodurch die Bedeutung dessen, was wir sagen, subtil verändert wird. Ähnlich betonen wir in der geschriebenen Sprache Wörter, indem wir sie kursiv darstellen. Beispielsweise haben die folgenden zwei Sätze unterschiedliche Bedeutungen.

> Ich bin froh, dass Sie nicht zu spät sind.
>
> Ich bin _froh_, dass Sie nicht _zu spät_ sind.

Der erste Satz klingt wirklich erleichtert, dass die Person nicht zu spät ist. Im Gegensatz dazu klingt der zweite Satz, mit den Worten "froh" und "zu spät" in Kursivschrift, sarkastisch oder passiv-aggressiv und drückt Verärgerung darüber aus, dass die Person ein wenig zu spät gekommen ist.

In HTML verwenden wir das {{htmlelement("em")}}- (Emphasis) Element, um solche Fälle zu kennzeichnen. Diese werden von Screenreadern erkannt, die so konfiguriert werden können, dass sie sie in einem anderen Tonfall sprechen. Browser gestalten dies standardmäßig kursiv, aber Sie sollten dieses Tag nicht nur verwenden, um eine kursiv gestaltete Darstellung zu erreichen. Um das zu tun, könnten Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("i")}}-Element (siehe unten).

```html
<p>I am <em>glad</em> you weren't <em>late</em>.</p>
```

### Starke Wichtigkeit

Um wichtige Wörter zu betonen, neigen wir dazu, sie in gesprochener Sprache zu betonen und in der geschriebenen Sprache **fett** darzustellen. Zum Beispiel:

> Diese Flüssigkeit ist **hoch giftig**.
>
> Ich zähle auf Sie. **Seien Sie nicht** zu spät!

In HTML verwenden wir das {{htmlelement("strong")}}- (Strong Importance) Element, um solche Fälle zu kennzeichnen. Auch diese werden von Screenreadern erkannt, die so konfiguriert werden können, dass sie sie in einem anderen Tonfall sprechen. Browser gestalten dies standardmäßig als Fettdruck, aber Sie sollten dieses Tag nicht nur verwenden, um fettgedruckte Darstellung zu erzielen. Um dies zu tun, könnten Sie ein {{htmlelement("span")}}-Element und etwas CSS verwenden oder vielleicht ein {{htmlelement("b")}}-Element (siehe unten).

```html
<p>This liquid is <strong>highly toxic</strong>.</p>

<p>I am counting on you. <strong>Do not</strong> be late!</p>
```

Sie können bei Bedarf **starke Wichtigkeit** und _Betonung_ ineinander verschachteln:

```html-nolint
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

{{EmbedLiveSample('Strong importance')}}

## Lassen Sie uns mit Betonung und Wichtigkeit spielen

In diesem Abschnitt möchten wir, dass Sie mit Betonung und Wichtigkeit experimentieren:

1. Klicken Sie auf **"Abspielen"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Geben Sie in der Hauptüberschrift dem Wort "Betonung" _Betonung_ und dem Wort "Wichtigkeit" **starke Wichtigkeit**.
3. Geben Sie im ersten Absatz dem Namen der Kaffeemaschine **starke Wichtigkeit** und betonen Sie die Adjektive, die den Kaffee beschreiben.
4. Geben Sie im zweiten Absatz der Temperaturbeschreibung ("kalt") und der Aktion, die Sie ergreifen sollen ("wickeln Sie sich warm ein, um nicht krank zu werden"), **starke Wichtigkeit**. Geben Sie "krank werden" eine zusätzliche Markierung, sodass es sowohl betont als auch wichtig ist.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit im MDN Playground mit dem _Zurücksetzen_-Button löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unterhalb des Codeblocks ansehen.

```css hidden live-sample___emphasis_importance
h1 {
  font-weight: normal;
}
```

```html live-sample___emphasis_importance
<h1>Emphasis and importance</h1>

<p>
  My new coffee machine is called The Percolator 2000. It produces the most
  sublime and wonderful brew.
</p>

<p>
  In the dead of winter, it will be cold. You should wrap up warm to avoid
  falling ill.
</p>
```

{{ EmbedLiveSample('emphasis_importance', "100%", 160) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<h1><em>Emphasis</em> and <strong>importance</strong></h1>

<p>
  My new coffee machine is called <strong>The Percolator 2000</strong>. It
  produces the most <em>sublime</em> and <em>wonderful</em> brew.
</p>

<p>
  In the dead of winter, it will be <strong>cold</strong>. You should
  <strong>wrap up warm to avoid <em>falling ill</em></strong
  >.
</p>
```

</details>

## Kursiv, fett, unterstrichen…

Die bisher besprochenen Elemente haben klar definierte Semantiken. Die Situation mit {{htmlelement("b")}}, {{htmlelement("i")}}, und {{htmlelement("u")}} ist etwas komplexer. Sie entstanden, damit man in einer Zeit, in der CSS noch nicht gut unterstützt wurde oder überhaupt nicht, Text fett, kursiv oder unterstrichen schreiben konnte. Solche Elemente, die nur die Präsentation und nicht die Semantik beeinflussen, werden als **Präsentations-Elemente** bezeichnet und sollten nicht mehr verwendet werden, da, wie wir bereits gesehen haben, Semantik so wichtig für die Zugänglichkeit, SEO usw. ist.

HTML5 hat `<b>`, `<i>`, und `<u>` mit neuen, etwas verwirrenden, semantischen Rollen neu definiert.

Hier ist die beste Regel, die man sich merken kann: Es ist nur angebracht, `<b>`, `<i>`, oder `<u>` zu verwenden, um eine Bedeutung zu vermitteln, die traditionell mit Fett-, Kursiv- oder Unterstreichung dargestellt wird, wenn es kein besser geeignetes Element gibt; und das ist meist der Fall. Überlegen Sie, ob `<strong>`, `<em>`, `<mark>`, oder `<span>` möglicherweise besser geeignet sind.

Behalten Sie stets die Barrierefreiheit im Hinterkopf. Das Konzept der Kursivschrift ist für Personen, die Screenreader verwenden, oder für Personen, die ein anderes Schriftsystem als das lateinische Alphabet verwenden, nicht sehr hilfreich.

- {{HTMLElement('i')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Kursivschrift dargestellt wird: Fremdwörter, taxonomische Bezeichnungen, Fachbegriffe, ein Gedanke…
- {{HTMLElement('b')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Fett dargestellt wird: Schlüsselwörter, Produktnamen, Leitsätze…
- {{HTMLElement('u')}} wird verwendet, um eine Bedeutung zu vermitteln, die traditionell durch Unterstreichung dargestellt wird: Eigennamen, Rechtschreibfehler…

> [!NOTE]
> Menschen assoziieren Unterstreichungen stark mit Hyperlinks. Daher ist es im Web am besten, nur Links zu unterstreichen. Verwenden Sie das `<u>`-Element, wenn es semantisch angemessen ist, aber überlegen Sie, ob Sie CSS verwenden könnten, um die standardmäßige Unterstreichung durch etwas Webgerechteres zu ersetzen. Das folgende Beispiel zeigt, wie es gemacht werden kann.

```html
<!-- scientific names -->
<p>
  The Ruby-throated Hummingbird (<i>Archilochus colubris</i>) is the most common
  hummingbird in Eastern North America.
</p>

<!-- foreign words -->
<p>
  The menu was a sea of exotic words like <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> and <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- a known misspelling -->
<p>Someday I'll learn how to <u class="spelling-error">spel</u> better.</p>

<!-- term being defined when used in a definition -->
<dl>
  <dt>Semantic HTML</dt>
  <dd>
    Use the elements based on their <b>semantic</b> meaning, not their
    appearance.
  </dd>
</dl>
```

{{EmbedLiveSample('Italic, bold, underline…','100%','270')}}

## Zusammenfassung

Wir haben nun für den Moment genug über Betonung und Wichtigkeit gesprochen. Lassen Sie uns nun ansehen, wie wir Listen in HTML darstellen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Headings_and_paragraphs", "Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content")}}
