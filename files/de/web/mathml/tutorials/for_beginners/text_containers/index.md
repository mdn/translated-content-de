---
title: MathML-Textcontainer
short-title: Text containers
slug: Web/MathML/Tutorials/For_beginners/Text_containers
l10n:
  sourceCommit: f33de00c56ac53878eb2cb7cb5849df1f9ab8db7
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}

Da Sie nun eine bessere Vorstellung von MathML haben, richten wir den Fokus auf Textcontainer (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln verwendet werden.

## Unicode-Zeichen für Mathematik

Mathematische Formeln umfassen viele Sonderzeichen, zum Beispiel griechische Buchstaben (z.B. Δ), Fraktur-Buchstaben (z.B. 𝔄), doppelt gestrichene Buchstaben (z.B. ℂ), binäre Operatoren (z.B. ≠), Pfeile (z.B. ⇒), Integralsymbole (z.B. ∮), Summationssymbole (z.B. ∑), logische Symbole (z.B. ∀), Klammern (z.B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematical operators and symbols in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basis-Latin-Unicode-Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) anzugeben und es mit entsprechenden [Web-Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) zu präsentieren. Hier ist eine grundlegende Vorlage zur Verwendung der UTF-8-Kodierung und der [Latin Modern Math](/de/docs/Web/MathML/Guides/Fonts#fonts_with_a_math_table)-Schriftart:

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
    <p>∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
  </body>
</html>
```

```css
p {
  font-family: "Latin Modern Math", math;
}
```

{{ EmbedLiveSample('Unicode_characters_for_mathematics', 700, 100, "", "") }}

## Ein wenig Semantik

Im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started) haben wir festgestellt, dass der Text in MathML-Formeln in spezifische Containerelemente wie `<mn>` oder `<mo>` eingebettet ist. Allgemeiner gesagt muss jeder Text in MathML-Formeln in solchen Containerelementen enthalten sein, die als _Token_ -Elemente bezeichnet werden. Darüber hinaus bietet MathML mehrere Token-Elemente, um unterschiedliche Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element repräsentiert einen "Bezeichner", der ein symbolischer Name oder beliebiger Text sein könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element repräsentiert eine "numerische Literal" oder andere Daten, die als numerische Literal angezeigt werden sollen. Beispiele: `<mn>2</mn>` (ganze Zahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (hexadezimaler Wert).
- Das `<mo>`-Element repräsentiert einen Operator oder alles, was als Operator angezeigt werden soll. Zum Beispiel `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Beziehung), `<mo>∑</mo>` (Summationssymbol) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>wenn<mtext>` oder `<mtext>zuordnet</mtext>`.

### An der Reihe: Erkennen von Token-Elementen

Unten sehen Sie ein komplexeres Beispiel, das besagt, dass der absolute Wert einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn sie nicht negativ ist. Wir möchten, dass Sie versuchen, die verschiedenen Token-Elemente zu identifizieren und zu verstehen, wofür sie verwendet werden. Jedes Mal, wenn Sie auf den entsprechenden Text klicken, wird er hervorgehoben und eine Bestätigungsmeldung angezeigt.

```html hidden live-sample___recognize_token_elements
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

```css hidden live-sample___recognize_token_elements
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden live-sample___recognize_token_elements
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

{{ EmbedLiveSample('recognize_token_elements', 700, 400, "", "") }}

Lesen Sie abschließend den MathML-Quellcode, um zu überprüfen, ob dieser Ihren Erwartungen entspricht:

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
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen bestimmten Textinhalt verwendet werden soll. In der Praxis sollte die Auswahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente im Allgemeinen von Browserimplementierungen gleich gerendert werden (sowohl visuell als auch für unterstützende Technologien). Allerdings haben die `<mi>`- und `<mo>`-Elemente besondere Unterscheidungsmerkmale, deren Sie sich bewusst sein sollten. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivschrift von \<mi>

Eine typografische Konvention in der Mathematik ist die Verwendung von kursiven Buchstaben für Variablen. Um dies zu erleichtern, können `<mi>`-Elemente mit einem einzelnen Zeichen automatisch kursiv dargestellt werden. Dies gilt für alle Buchstaben des lateinischen und griechischen Alphabets. Vergleichen Sie die Darstellung der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> [Diese Tabelle aus MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste von Zeichen, die kursiv angezeigt werden, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachen der automatischen Kursivschrift von \<mi>

Um diese standardmäßige kursive Transformation rückgängig zu machen, können Sie ein Attribut `mathvariant="normal"` an das `<mi>`-Element anhängen. Vergleichen Sie die Darstellung der Großgamma-Buchstaben in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>`-Elementen je nach ihrem Inhalt und der Position innerhalb ihres Containers (Präfix, Infix oder Postfix) definiert. Betrachten wir ein konkretes Beispiel:

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

Dieses Beispiel sollte ähnlich dem Screenshot unten dargestellt werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>`-Elementen und ihrem vorangestellten `<mo>`: kein Abstand für das Präfix-Plus, etwas Abstand für das Infix-Plus und etwas kleineren Abstand für das Präfix-Summationssymbol.

![Screenshot der MathML-Formel mit unterschiedlichen Operator-Abständen](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, die wir später noch ausführlicher sehen werden. Denken Sie vorerst daran, einen `<mo>`-Container für Zeichen im Operator-Wörterbuch zu verwenden und Teilausdrücke ordnungsgemäß mit `<mrow>`-Elementen zu gruppieren, um den MathML-Renderern zu helfen.

### Finden Sie den Unterschied

Da Sie nun mit den Besonderheiten von `<mi>` und `<mo>` einigermaßen vertraut sind, möchten wir, dass Sie das `<p>`-Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML umschreiben. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur rein textbasierten Version.

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
    <p class="text">∀A∊𝔰𝔩(n,𝔽),TrA=0</p>
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

.text {
  font-family: "Latin Modern Math", math;
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

{{ EmbedLiveSample('spot_the_difference', 700, 500, "", "") }}

> [!NOTE]
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel umfangreicher geworden ist. Denken Sie daran, dass dieses Tutorial dazu dient, die Sprache zu lernen, aber in der Praxis wird MathML-Inhalt im Allgemeinen nicht manuell geschrieben. Weitere Informationen finden Sie auf der Seite [MathML verfassen](/de/docs/Web/MathML/Guides/Authoring).

### Erkennen von dehnbaren Operatoren

Das Operator-Wörterbuch definiert eine Standard-_dehnbare_ Eigenschaft sowie die entsprechende _Dehnachse_ für einige Operatoren. Ein Operator kann beispielsweise standardmäßig vertikal gedehnt werden, um die maximale Höhe der nicht dehnbaren Geschwister innerhalb seines `<mrow>`-Containers abzudecken. Indem man eine [frühere Übung](#your_turn_recognizing_token_elements) modifiziert, kann man Operatoren vertikal dehnen. Können Sie sie finden?

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

{{ EmbedLiveSample('recognizing_stretchy_operators', 700, 400, "", "") }}

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
> Spezielle [Mathe-Fonts](/de/docs/Web/MathML/Guides/Fonts) sind im Allgemeinen erforderlich, um diese Dehnung zu ermöglichen. Das vorherige Beispiel basiert auf [Web-Fonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir einige _Token_-Elemente kennengelernt, die als Textcontainer dienen, sowie deren unterschiedliche Semantiken, nämlich `<mi>` (Bezeichner), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (allgemeiner Text). Wir haben spezielle Unicode-Zeichen betrachtet, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man _Token_-Elemente verwendet, um viel komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots) zu erstellen.

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Reference/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Reference/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Reference/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Reference/Element/mtext)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}
