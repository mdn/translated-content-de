---
title: "Herausforderung: Auszeichnung eines Briefes"
short-title: "Herausforderung: Briefauszeichnung"
slug: Learn_web_development/Core/Structuring_content/Marking_up_a_letter
l10n:
  sourceCommit: 3157f78e4c4131d85ff82a4d4ab7d67e91c32b69
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}

Früher oder später lernt jeder von uns, einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Fähigkeiten im Textformatieren zu testen. In dieser Herausforderung geben wir Ihnen einen Brief, den Sie als Test Ihrer HTML-Textformatierungsfähigkeiten und Ihres Wissens über den Inhalt des HTML-`<head>` auszeichnen sollen.

## Ausgangspunkt

Um zu beginnen, klicken Sie auf die **Play**-Schaltfläche im Code-Beispiel-Panel unten, um den bereitgestellten Textkörper im MDN Playground zu öffnen. Sie folgen den Anweisungen in den folgenden Abschnitten, um den Text entsprechend auszuzeichnen.

```html-nolint live-sample___start
Dr. Eleanor Gaye
Awesome Science faculty
University of Awesome
Bobtown, CA 99999,
USA
Tel: 123-456-7890
Email: no_reply@example.com

20 January 2016

Miss Eileen Dover
4321 Cliff Top Edge
Dover, CT9 XXX
UK

Re: Eileen Dover university application

Dear Eileen,

Thank you for your recent application to join us at the University of
Awesome's science faculty to study as part of your
PhD (Doctor of Philosophy) next year. I will answer your
questions one by one, in the following sections.

Starting dates

We are happy to accommodate you starting your study with us at any time,
however it would suit us better if you could start at the beginning of a
semester; the start dates for each one are as follows:

First semester: 9 September 2016
Second semester: 15 January 2017
Third semester: 2 May 2017

Please let me know if this is ok, and if so which start date you would
prefer.

Subjects of study

At the Awesome Science Faculty, we have a pretty open-minded research
facility — as long as the subjects fall somewhere in the realm of science
and technology. You seem like an intelligent, dedicated researcher, and
just the kind of person we'd like to have on our team. Saying that, of the
ideas you submitted we were most intrigued by are as follows, in order of
priority:

Turning H2O into wine, and the health benefits of Resveratrol
(C14H12O3.)
Measuring the effect on performance of funk bass players at temperatures
exceeding 30°C (86°F), when the audience size exponentially increases
(effect of 3 × 103 increasing to 3 × 104.)
HTML, Hypertext Markup Language, and CSS,
Cascading Style Sheets, constructs for representing musical scores.

So please can you provide more information on each of these subjects,
including how long you'd expect the research to take, required staff and
other resources, and anything else you think we'd need to know? Thanks.

Exotic dance moves

Yes, you are right! As part of my post-doctorate work, I
did study exotic tribal dances. To answer your question, my
favorite dances are as follows, with definitions:

Polynesian chicken dance
    A little known but very influential dance dating back as far as
    300 BCE, a whole village would
    dance around in a circle like chickens, to encourage their livestock to
    be "fruitful".
Icelandic brownian shuffle
    Before the Icelanders developed fire as a means of getting warm, they
    used to practice this dance, which involved huddling close together in a
    circle on the floor, and shuffling their bodies around in imperceptibly
    tiny, very rapid movements. One of my fellow students used to say that
    he thought this dance inspired modern styles such as Twerking.
Arctic robot dance
    An interesting example of historic misinformation, English explorers in
    the 1960s believed to have discovered a new dance style characterized by
    "robotic", stilted movements, being practiced by inhabitants of Northern
    Alaska and Canada. Later on however it was discovered that they were
    just moving like this because they were really cold.

Yours sincerely,

Dr Eleanor Gaye

University of Awesome motto: Be awesome to each other. --
The memoirs of Bill S Preston, Esq.
```

{{embedlivesample("start", "100%", "200px")}}

## Projektauftrag

Für dieses Projekt ist es Ihre Aufgabe, einen Brief auszuzeichnen, der auf einem Universitäts-Intranet gehostet werden muss. Der Brief ist eine Antwort eines Forschungsstipendiaten an einen zukünftigen Doktoranden bezüglich seiner Bewerbung an die Universität.

### Block-/Struktursemantik

- Fügen Sie eine geeignete HTML-Struktur ein, einschließlich Doctype und {{htmlelement("html")}}, {{htmlelement("head")}} und {{htmlelement("body")}} Elemente.
- Im Allgemeinen sollte der Brief als Organisation aus Überschriften und Absätzen ausgezeichnet werden, mit Ausnahme der in der nächsten Aufzählung genannten Adressen. Es gibt eine Überschrift der obersten Ebene (die Zeile "Re:") und drei Überschriften der zweiten Ebene.
- Setzen Sie die beiden Adressen in {{htmlelement("address")}} Elemente. Jede Zeile der Adresse sollte in einer neuen Zeile stehen, aber nicht in einem neuen Absatz.
- Verwenden Sie einen geeigneten Listentyp, um die Semesteranfangsdaten, Studienfächer und exotische Tänze auszuzeichnen.

### Inline-Semantik

- Die Namen des Absenders und des Empfängers (und _Tel_ und _Email_) sollten mit starker Bedeutung ausgezeichnet werden.
- Die vier Daten im Dokument sollten in geeignete Elemente eingeschlossen werden, die maschinenlesbare Daten enthalten.
- Die erste Adresse und das erste Datum im Brief sollten ein `class` Attribut mit dem Wert `sender-column` haben. Das später hinzuzufügende CSS wird diese rechts ausrichten, wie es in einem klassischen Briefstil der Fall sein sollte.
- Zeichnen Sie die folgenden fünf Akronyme/Abkürzungen im Haupttext des Briefes aus — "PhD", "HTML", "CSS", "BC" und "Esq." — um Erweiterungen für jede zu bieten.
- Die sechs Unter-/Hochschriften sollten angemessen ausgezeichnet werden — in den chemischen Formeln und den Zahlen 103 und 104 (sie sollten 10 hoch 3 und 4 sein).
- Zeichnen Sie mindestens zwei andere geeignete Wörter im Text mit starker Bedeutung/Betonung aus.
- Zeichnen Sie das Universitätsmotto Zitat und die Zitierung mit geeigneten Elementen aus.

### Der Kopf des Dokuments

- Der Zeichensatz des Dokuments sollte mit dem entsprechenden `<meta>`-Tag als `utf-8` gesetzt werden.
- Der Autor des Briefes sollte in einem entsprechenden `<meta>`-Tag angegeben werden.
- Sie sollten die Sprache des Dokuments als `en-US` setzen.
- Schließen Sie den folgenden Text in ein Dokumenttitel-Element ein: "Awesome science application correspondence".
- Das folgende CSS sollte in ein geeignetes Element im Kopf eingefügt werden:

  ```css
  body {
    font: 1.2em / 1.5 system-ui;
  }

  .sender-column {
    text-align: right;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
  }
  ```

## Hinweise und Tipps

- Verwenden Sie den [W3C HTML Validierer](https://validator.w3.org/), um Ihre HTML zu validieren. Belohnen Sie sich mit Bonuspunkten, wenn es validiert wird.
- Sie müssen kein CSS kennen, um diese Aufgabe zu erledigen. Sie müssen lediglich das bereitgestellte CSS in ein HTML-Element einfügen.

## Beispiel

Das folgende Live-Beispiel zeigt, wie der Brief nach der Auszeichnung aussehen sollte. Wenn Sie Probleme haben, wie Sie einiges davon erreichen können, sehen Sie sich die Lösung unter dem Live-Beispiel an.

{{embedlivesample("finish", "100%", "500px")}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html live-sample___finish
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="author" content="Dr. Eleanor Gaye" />
    <title>Awesome science application correspondence</title>
    <style>
      body {
        font: 1.2em / 1.5 system-ui;
      }

      .sender-column {
        text-align: right;
      }

      h1 {
        font-size: 1.5em;
      }

      h2 {
        font-size: 1.3em;
      }
    </style>
  </head>
  <body>
    <address class="sender-column">
      <strong>Dr. Eleanor Gaye</strong><br />
      Awesome Science faculty<br />
      University of Awesome<br />
      Bobtown, CA 99999,<br />
      USA<br />
      <strong>Tel</strong>: 123-456-7890<br />
      <strong>Email</strong>: no_reply@example.com
    </address>

    <p class="sender-column">
      <time datetime="2016-01-20">20 January 2016</time>
    </p>

    <address>
      <strong>Miss Eileen Dover</strong><br />
      4321 Cliff Top Edge<br />
      Dover, CT9 XXX<br />
      UK
    </address>

    <h1>Re: Eileen Dover university application</h1>

    <p>Dear Eileen,</p>

    <p>
      Thank you for your recent application to join us at the University of
      Awesome's science faculty to study as part of your
      <abbr>PhD</abbr> (Doctor of Philosophy) next year. I will answer your
      questions one by one, in the following sections.
    </p>

    <h2>Starting dates</h2>

    <p>
      We are happy to accommodate you starting your study with us at any time,
      however it would suit us better if you could start at the beginning of a
      semester; the start dates for each one are as follows:
    </p>

    <ul>
      <li>
        First semester: <time datetime="2016-09-09">9 September 2016</time>
      </li>
      <li>
        Second semester: <time datetime="2017-01-15">15 January 2017</time>
      </li>
      <li>Third semester: <time datetime="2017-05-02">2 May 2017</time></li>
    </ul>

    <p>
      Please let me know if this is ok, and if so which start date you would
      prefer.
    </p>

    <h2>Subjects of study</h2>

    <p>
      At the Awesome Science Faculty, we have a pretty open-minded research
      facility — as long as the subjects fall somewhere in the realm of science
      and technology. You seem like an intelligent, dedicated researcher, and
      just the kind of person we'd like to have on our team. Saying that, of the
      ideas you submitted we were most intrigued by are as follows, in order of
      priority:
    </p>

    <ol>
      <li>
        Turning H<sub>2</sub>O into wine, and the health benefits of Resveratrol
        (C<sub>14</sub>H<sub>12</sub>O<sub>3</sub>.)
      </li>
      <li>
        Measuring the effect on performance of funk bass players at temperatures
        exceeding 30°C (86°F), when the audience size exponentially increases
        (effect of 3 × 10<sup>3</sup> increasing to 3 × 10<sup>4</sup>.)
      </li>
      <li>
        <abbr>HTML</abbr>, Hypertext Markup Language, and <abbr>CSS</abbr>,
        Cascading Style Sheets, constructs for representing musical scores.
      </li>
    </ol>

    <p>
      So please can you provide more information on each of these subjects,
      including how long you'd expect the research to take, required staff and
      other resources, and anything else you think we'd need to know? Thanks.
    </p>

    <h2>Exotic dance moves</h2>

    <p>
      Yes, you are right! As part of my post-doctorate work, I
      <em>did</em> study exotic tribal dances. To answer your question, my
      favorite dances are as follows, with definitions:
    </p>

    <dl>
      <dt>Polynesian chicken dance</dt>
      <dd>
        A little known but <em>very</em> influential dance dating back as far as
        300 <abbr title="Before Common Era">BCE</abbr>, a whole village would
        dance around in a circle like chickens, to encourage their livestock to
        be "fruitful".
      </dd>
      <dt>Icelandic brownian shuffle</dt>
      <dd>
        Before the Icelanders developed fire as a means of getting warm, they
        used to practice this dance, which involved huddling close together in a
        circle on the floor, and shuffling their bodies around in imperceptibly
        tiny, very rapid movements. One of my fellow students used to say that
        he thought this dance inspired modern styles such as Twerking.
      </dd>
      <dt>Arctic robot dance</dt>
      <dd>
        An interesting example of historic misinformation, English explorers in
        the 1960s believed to have discovered a new dance style characterized by
        "robotic", stilted movements, being practiced by inhabitants of Northern
        Alaska and Canada. Later on however it was discovered that they were
        just moving like this because they were really cold.
      </dd>
    </dl>

    <p>Yours sincerely,</p>

    <p>Dr Eleanor Gaye</p>

    <p>
      University of Awesome motto: <q>Be awesome to each other.</q> --
      <cite
        >The memoirs of Bill S Preston, <abbr title="Esquire">Esq.</abbr></cite
      >
    </p>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content")}}
