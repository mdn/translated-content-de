---
title: MathML Text Container
slug: Learn/MathML/First_steps/Text_containers
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

Jetzt, da Sie eine bessere Vorstellung von MathML haben, verlagern wir den Fokus auf Textcontainer (Variablen, Zahlen, Operatoren ...), die als Bausteine von MathML-Formeln verwendet werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und einige CSS-Grundlagen zur Textgestaltung (lesen Sie <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals">grundlegende Text- und Schriftgestaltung</a> und
          <a href="/de/docs/Learn/CSS/Styling_text/Web_fonts">Web-Fonts</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sich mit MathML-Elementen vertraut zu machen, die zum Schreiben von Text verwendet werden, und sich über spezielle Verhaltensweisen bewusst zu sein.
      </td>
    </tr>
  </tbody>
</table>

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele spezielle Zeichen, zum Beispiel griechische Buchstaben (z.B. Δ), Frakturbuchstaben (z.B. 𝔄), doppelt gestrichene Buchstaben (z.B. ℂ), binäre Operatoren (z.B. ≠), Pfeile (z.B. ⇒), Integralsymbole (z.B. ∮), Summensymbole (z.B. ∑), logische Symbole (z.B. ∀), Klammern (z.B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematische Operatoren und Symbole in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basic Latin Unicode-Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding) anzugeben und es mit den passenden [Web-Fonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) bereitzustellen. Hier ist eine grundlegende Vorlage zur Nutzung der UTF-8-Kodierung und der Schriftart [Latin Modern Math](/de/docs/Web/MathML/Fonts#fonts_with_a_math_table):

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

## Ein bisschen Semantik

Wir haben im Artikel [Erste Schritte mit MathML](/de/docs/Learn/MathML/First_steps/Getting_started) festgestellt, dass der Text in MathML-Formeln in spezifische Containerelemente wie `<mn>` oder `<mo>` eingewickelt ist. Allgemeiner muss jeder Text in MathML-Formeln in solchen Containerelementen enthalten sein, die _Token-Elemente_ genannt werden. Darüber hinaus bietet MathML mehrere Token-Elemente, um verschiedene Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element, das einen "Bezeichner" darstellt, bei dem es sich um einen symbolischen Namen oder beliebigen Text handeln könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element stellt ein "numerisches Literal" oder andere Daten dar, die als numerisches Literal gerendert werden sollten. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (Hexadezimalwert).
- Das `<mo>`-Element stellt einen Operator oder alles dar, was als Operator gerendert werden sollte. Zum Beispiel `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Beziehung), `<mo>∑</mo>` (Summensymbol) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>if<mtext>` oder `<mtext>maps to</mtext>`.

### Aktives Lernen: Token-Elemente erkennen

Unten ist ein komplexeres Beispiel, das besagt, dass der Betrag einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn sie nicht negativ ist. Erkennen Sie die verschiedenen Token-Elemente und wofür sie verwendet werden. Jedes Mal, wenn Sie auf den entsprechenden Text klicken, wird er hervorgehoben und eine Bestätigungsmeldung angezeigt.

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

Zum Schluss lesen Sie den MathML-Quellcode, um zu überprüfen, ob dieser Ihren Erwartungen entspricht:

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
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen bestimmten Textinhalt verwendet werden soll. In der Praxis sollte die Wahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente in der Regel von den Browser-Implementierungen gleich gerendert werden (für die visuelle Anzeige und für unterstützende Technologien). Allerdings haben die `<mi>`- und `<mo>`-Elemente spezielle Unterscheidungsmerkmale, über die man sich bewusst sein sollte. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivsetzung von \<mi>

Eine typografische Konvention in der Mathematik ist es, Buchstaben für Variablen kursiv zu verwenden. Um dies zu erleichtern, können `<mi>`-Elemente mit einem einzelnen Zeichen automatisch als kursiv gerendert werden. Dies ist der Fall für alle Buchstaben aus den lateinischen und griechischen Alphabeten. Vergleichen Sie die Wiedergabe der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> **Hinweis:** [Diese Tabelle aus MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die der Kursivsetzung unterliegen, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachen der automatischen Kursivsetzung von \<mi>

Um diese standardmäßige Kursive-Transformation rückgängig zu machen, können Sie ein `mathvariant="normal"`-Attribut an das `<mi>`-Element anhängen.
Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [Mathematischen Alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>`-Elementen in Abhängigkeit von ihrem Inhalt und der Position innerhalb ihres Containers (Präfix, Infix oder Postfix) definiert. Lassen Sie uns ein konkretes Beispiel betrachten:

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

Dieses Beispiel sollte ähnlich dem unten stehenden Screenshot gerendert werden. Beoachten Sie die Abstände zwischen den `<mi>i</mi>`-Elementen und ihrem vorangehenden `<mo>`: kein Abstand für das Präfix-Plus, etwas Abstand für das Infix-Plus und etwas kleinerer Abstand für das Präfix-Summensymbol.

![Screenshot der MathML-Formel mit unterschiedlichen Operator-Abständen](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, die wir später noch genauer sehen werden. Denken Sie vorerst daran, ein `<mo>`-Container für Zeichen im Operator-Wörterbuch zu verwenden und Unterausdrücke mit `<mrow>`-Elementen richtig zu gruppieren, um MathML-Renderern zu helfen.

### Aktives Lernen: Erkenne den Unterschied

Jetzt, da Sie ein wenig mit den besonderen Eigenschaften von `<mi>` und `<mo>` vertraut sind, schreiben wir das `<p>`-Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML um. Vergleichen Sie die visuelle Wiedergabe in Ihrem Browser und erklären Sie die Unterschiede zur nur-Text-Version.

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
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel ausführlicher geworden ist. Denken Sie daran, dass dieses Tutorial darauf abzielt, die Sprache zu lernen, aber in der Praxis wird MathML-Inhalt normalerweise nicht manuell geschrieben. Weitere Informationen finden Sie auf der Seite zum [Verfassen von MathML](/de/docs/Web/MathML/Authoring).

### Aktives Lernen: Dehnbare Operatoren

Das Operator-Wörterbuch definiert eine Standard-_dehnbare_ Eigenschaft sowie die entsprechende _Dehnbarkeit_ für einige Operatoren. Ein Operator kann beispielsweise standardmäßig vertikal gedehnt werden, um die maximale Höhe der nicht-dehnbaren Geschwister innerhalb seines `<mrow>`-Containers abzudecken. Durch eine kleine Anpassung der [vorherigen Übung](#active_learning_recognize_token_elements) kann man Operatoren vertikal dehnen lassen. Können Sie sie finden?

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

Wie üblich werden Sie eingeladen, den Quellcode zu lesen, wenn Sie fertig sind:

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
> Besondere [Mathe-Schriftarten](/de/docs/Web/MathML/Fonts) sind in der Regel erforderlich, um dieses Strecken zu ermöglichen, das vorherige Beispiel basiert auf [Web-Fonts](/de/docs/Learn/CSS/Styling_text/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir ein paar _Token-Elemente_ kennengelernt, die als Textcontainer verwendet werden, sowie deren unterschiedliche Semantiken, nämlich `<mi>` (Bezeichner), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (generischer Text). Wir haben spezielle Unicode-Zeichen gesehen, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man sich auf _Token-Elemente_ stützt, um viel komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Learn/MathML/First_steps/Fractions_and_roots) zu erstellen.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Element/mtext)
