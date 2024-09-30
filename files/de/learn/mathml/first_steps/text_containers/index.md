---
title: MathML Text-Container
slug: Learn/MathML/First_steps/Text_containers
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

Nun, da Sie eine bessere Vorstellung von MathML haben, verlagern wir den Fokus auf Text-Container (Variablen, Zahlen, Operatoren, ...), die als Bausteine für MathML-Formeln verwendet werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Installation von Grundsoftware</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und einige CSS-Grundlagen zur Textgestaltung (lesen Sie <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals">grundlegende Text- und Schriftgestaltung</a> und
          <a href="/de/docs/Learn/CSS/Styling_text/Web_fonts">Web-Schriften</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Vertrautheit mit MathML-Elementen, die zum Schreiben von Text verwendet werden, und das Bewusstsein für spezielle Verhaltensweisen zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele spezielle Zeichen, beispielsweise griechische Buchstaben (z. B. Δ), Frakturbuchstaben (z. B. 𝔄), doppelt geschlagene Buchstaben (z. B. ℂ), binäre Operatoren (z. B. ≠), Pfeile (z. B. ⇒), Integralsymbole (z. B. ∮), Summensymbole (z. B. ∑), logische Symbole (z. B. ∀), Klammern (z. B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematical operators and symbols in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht zum Basis-Latein-Unicode-Block gehören, wird empfohlen, die [Zeichencodierung Ihres Dokuments](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding) anzugeben und es mit entsprechenden [Web-Schriften](/de/docs/Learn/CSS/Styling_text/Web_fonts) zu versehen. Hier ist eine grundlegende Vorlage zur Verwendung der UTF-8-Codierung und der Schriftart [Latin Modern Math](/de/docs/Web/MathML/Fonts#fonts_with_a_math_table):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with math characters</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
  </body>
</html>
```

{{ EmbedLiveSample('Unicode_characters_for_mathematics', 700, 100, "", "") }}

## Etwas Semantik

Wir haben im Artikel [Einführung in MathML](/de/docs/Learn/MathML/First_steps/Getting_started) bemerkt, dass der Text in MathML-Formeln in bestimmten Containerelementen wie `<mn>` oder `<mo>` eingeschlossen ist. Allgemeiner gilt, dass jeder Text in MathML-Formeln in solchen Containerelementen eingeschlossen sein muss, die als _token_-Elemente bezeichnet werden. Darüber hinaus bietet MathML mehrere Token-Elemente, um verschiedene Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element, das einen "Bezeichner" darstellt, der ein symbolischer Name oder beliebiger Text sein könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element repräsentiert ein "numerisches Literal" oder andere Daten, die als numerisches Literal dargestellt werden sollten. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (Hexadezimalwert).
- Das `<mo>`-Element repräsentiert einen Operator oder alles, was als Operator dargestellt werden sollte. Beispielsweise `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Relation), `<mo>∑</mo>` (Summensymbol) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>wenn<mtext>` oder `<mtext>deutet an</mtext>`.

### Aktives Lernen: Token-Elemente erkennen

Unten finden Sie ein komplexeres Beispiel, das besagt, dass der Betrag einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn sie nicht negativ ist. Erkennen Sie die verschiedenen Token-Elemente und wofür sie verwendet werden. Jedes Mal, wenn Sie auf den entsprechenden Text klicken, wird er hervorgehoben und eine Bestätigungsmeldung angezeigt.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with math characters</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mi>x</mi>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mi>x</mi>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="Reset" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>You clicked an <code>&lt;${token.tagName}&gt;</code> element.</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_token_elements', 700, 400, "", "") }}

Lesen Sie schließlich die MathML-Quelle, um zu überprüfen, ob sie mit Ihrer Erwartung übereinstimmt:

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mi>x</mi>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!NOTE]
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen gegebenen Textinhalt verwendet werden soll. In der Praxis sollte die Wahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente im Allgemeinen von Browser-Implementierungen gleich dargestellt werden (für die visuelle Anzeige und für unterstützende Technologien). Allerdings haben die Elemente `<mi>` und `<mo>` besondere Unterscheidungsmerkmale, über die Sie sich bewusst sein sollten. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivierung von `<mi>`

Eine typografische Konvention in der Mathematik ist es, Buchstaben für Variablen kursiv zu setzen. Um dies zu unterstützen, können `<mi>`-Elemente mit einem einzelnen Zeichen automatisch kursiv dargestellt werden. Dies gilt für alle Buchstaben aus den lateinischen und griechischen Alphabeten. Vergleichen Sie die Wiedergabe der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> **Hinweis:** [Diese Tabelle aus MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die der Kursivierung unterliegen, zusammen mit den entsprechenden kursiven Zeichen.

## Aufheben der automatischen Kursivierung von `<mi>`

Um diese standardmäßige Kursivtransformation aufzuheben, können Sie ein `mathvariant="normal"` Attribut an das `<mi>`-Element anhängen. Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [Mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von `<mo>`

MathML enthält ein [Operator-Lexikon](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>`-Elementen basierend auf ihrem Inhalt und der Position innerhalb ihres Containers (Präfix, Infix oder Postfix) definiert. Betrachten wir ein konkretes Beispiel:

```html
<table>
  <tr>
    <td>Prefix plus</td>
    <td>
      <math>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Infix plus</td>
    <td>
      <math>
        <mi>j</mi>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Prefix sum</td>
    <td>
      <math>
        <mo>∑</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
</table>
```

Dieses Beispiel sollte ähnlich wie der untenstehende Screenshot gerendert werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>`-Elementen und ihrem vorhergehenden `<mo>`: kein Abstand für das Präfix-Plus, ein gewisser Abstand für das Infix-Plus und ein kleinerer Abstand für das Präfix-Summationssymbol.

![Screenshot der MathML-Formel mit unterschiedlicher Operatorabstand](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, auf die wir später genauer eingehen werden. Denken Sie vorerst daran, einen `<mo>`-Container für Zeichen im Operator-Lexikon zu verwenden und Unterausdrücke mit `<mrow>` Elementen richtig zu gruppieren, um MathML-Darstellungen zu unterstützen.

### Aktives Lernen: den Unterschied erkennen

Da Sie nun mit besonderen Merkmalen von `<mi>` und `<mo>` ein wenig vertraut sind, lassen Sie uns das `<p>`-Element im [Beispiel am Anfang der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML umschreiben. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur reinen Textversion.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with math characters</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <p style="font-family: Latin Modern Math">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
    <p>
      <math>
        <mo>∀</mo>
        <mrow>
          <mi>A</mi>
          <mo>∊</mo>
          <mrow>
            <mi>𝔰𝔩</mi>
            <mrow>
              <mo>(</mo>
              <mi>n</mi>
              <mo>,</mo>
              <mi>𝔽</mi>
              <mo>)</mo>
            </mrow>
          </mrow>
        </mrow>
        <mo>,</mo>
        <mrow>
          <mrow>
            <mi>Tr</mi>
            <mi>A</mi>
          </mrow>
          <mo>=</mo>
          <mn>0</mn>
        </mrow>
      </math>
    </p>
    <input id="showSolution" type="button" value="Show solution" />
    <div id="solution"></div>
  </body>
</html>
```

```css hidden
div {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener(
  "click",
  () => {
    document.getElementById("solution").insertAdjacentHTML(
      "beforeEnd",
      `<ul>
      <li><strong>The <code>&lt;mi&gt;</code> elements containing the "A" and "n" variables are rendered in italic</strong>. However, the <code>&lt;mi&gt;</code> elements with multiple characters "𝔰𝔩" or whose character is "𝔽" are still rendered upright.</li>
      <li><strong>Spacing is automatically added around the <code>&lt;mo&gt;</code> elements whose text is "∀", "∊", "=" or a comma</strong>. However, some of them have no spacing added before while the parentheses still have no spacing around them.</li>
    </ul>`,
    );
  },
  { once: true },
);
```

{{ EmbedLiveSample('active_learning_spot_the_difference', 700, 500, "", "") }}

> [!NOTE]
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel ausführlicher geworden ist. Denken Sie daran, dass es in diesem Tutorial darum geht, die Sprache zu lernen, aber in der Praxis wird MathML-Inhalt normalerweise nicht manuell geschrieben. Weitere Informationen finden Sie auf der Seite [Authoring MathML](/de/docs/Web/MathML/Authoring).

### Aktives Lernen: dehnbare Operatoren

Das Operator-Lexikon definiert eine Standard-_stretchy_-Eigenschaft sowie die entsprechende _Stretch-Achse_ für einige Operatoren. Ein Operator kann beispielsweise standardmäßig vertikal gedehnt werden, um die maximale Höhe von nicht dehnbaren Geschwistern innerhalb seines `<mrow>` Containers abzudecken. Durch eine kleine Anpassung an der [vorherigen Übung](#active_learning_recognize_token_elements) kann man Operatoren vertikal dehnen. Können Sie sie finden?

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with stretchy operators</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>|</mo>
          <mfrac>
            <mn>1</mn>
            <mi>x</mi>
          </mfrac>
          <mo>|</mo>
        </mrow>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mrow>
            <mo>|</mo>
            <mi>x</mi>
            <mo>|</mo>
          </mrow>
        </mfrac>
        <mo>=</mo>
        <mfrac>
          <mn>1</mn>
          <mi>x</mi>
        </mfrac>
      </mrow>
      <mtext>&nbsp;iff&nbsp;</mtext>
      <mrow>
        <mi>x</mi>
        <mo>≥</mo>
        <mn>0</mn>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="Reset" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const tokenElements = Array.from(
  document.querySelectorAll("mi, mo, mn, mtext"),
);
const stretchyMoElements = Array.from(
  document.getElementsByTagName("mo"),
).slice(0, 2);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  tokenElements.forEach((token) => {
    token.classList.remove("highlight");
  });
}
tokenElements.forEach((token) => {
  token.addEventListener("click", () => {
    clearHighlight();
    token.classList.add("highlight");
    let message = "";
    let tagName = `<code>&lt;${token.tagName}&gt;</code>`;
    if (token.tagName !== "mo") message = `No, this is an ${tagName} element!`;
    else if (!stretchyMoElements.includes(token))
      message = `No, this is an ${tagName} element, but it's not vertically stretched.`;
    else
      message = `Correct, this ${tagName} element is indeed stretched to the height of its <code>&lt;mfrac&gt;</code> sibling.`;
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>${message}</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_stretchy_fences', 700, 400, "", "") }}

Wie üblich sind Sie eingeladen, den Quellcode zu lesen, wenn Sie fertig sind:

```xml
<math display="block">
  <mrow>
    <mrow>
      <mo>|</mo>
      <mfrac>
        <mn>1</mn>
        <mi>x</mi>
      </mfrac>
      <mo>|</mo>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mo>|</mo>
        <mi>x</mi>
        <mo>|</mo>
      </mrow>
    </mfrac>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mi>x</mi>
    </mfrac>
  </mrow>
  <mtext>&nbsp;iff&nbsp;</mtext>
  <mrow>
    <mi>x</mi>
    <mo>≥</mo>
    <mn>0</mn>
  </mrow>
</math>
```

> [!WARNING]
> Spezielle [mathematische Schriften](/de/docs/Web/MathML/Fonts) sind im Allgemeinen erforderlich, um das Dehnen zu ermöglichen. Das vorherige Beispiel basiert auf [Web-Schriften](/de/docs/Learn/CSS/Styling_text/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir einige _Token_-Elemente kennengelernt, die als Text-Container verwendet werden, sowie ihre unterschiedliche Semantik, nämlich `<mi>` (Bezeichner), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (allgemeiner Text). Wir haben spezielle Unicode-Zeichen gesehen, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel sehen wir, wie man sich auf _Token_-Elemente stützen kann, um komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Learn/MathML/First_steps/Fractions_and_roots) zu erstellen.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Element/mtext)
