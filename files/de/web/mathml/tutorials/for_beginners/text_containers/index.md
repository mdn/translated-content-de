---
title: MathML Textbehälter
short-title: Text containers
slug: Web/MathML/Tutorials/For_beginners/Text_containers
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}

Nun, da Sie eine bessere Vorstellung von MathML haben, konzentrieren wir uns auf Textbehälter (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln dienen.

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele Sonderzeichen, zum Beispiel griechische Buchstaben (z. B. Δ), Frakturbuchstaben (z. B. 𝔄), doppelt durchgestrichene Buchstaben (z. B. ℂ), binäre Operatoren (z. B. ≠), Pfeile (z. B. ⇒), Integralzeichen (z. B. ∮), Summenzeichen (z. B. ∑), logische Symbole (z. B. ∀), Klammern (z. B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematische Operatoren und Symbole in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basic Latin Unicode Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) anzugeben und es mit geeigneten [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) zu versehen. Hier ist eine grundlegende Vorlage, um die UTF-8-Kodierung und die [Latin Modern Math](/de/docs/Web/MathML/Guides/Fonts#fonts_with_a_math_table) Schriftart zu verwenden:

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

Wir bemerkten im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started), dass der Text in MathML-Formeln in speziellen Container-Elementen wie `<mn>` oder `<mo>` eingeschlossen ist. Allgemeiner gesagt, muss jeder Text in MathML-Formeln in solchen Container-Elementen, sogenannten _Token_-Elementen, enthalten sein. Darüber hinaus bietet MathML mehrere Token-Elemente, um verschiedene Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>` Element, das einen "Bezeichner" darstellt, welcher ein symbolischer Name oder beliebiger Text sein könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>` Element stellt eine "numerische Literal" oder andere Daten dar, die als numerische Literal gerendert werden sollten. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (hexadezimaler Wert).
- Das `<mo>` Element stellt einen Operator oder irgendetwas dar, das als Operator gerendert werden sollte. Zum Beispiel `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Relation), `<mo>∑</mo>` (Summenzeichen) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>` Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>wenn<mtext>` oder `<mtext>abbildet auf</mtext>`.

### Sie sind dran: Erkennen von Token-Elementen

Unten steht ein komplexeres Beispiel, das besagt, dass der Absolutwert einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn sie nicht negativ ist. Wir möchten, dass Sie versuchen, die verschiedenen Token-Elemente zu erkennen und wofür diese verwendet werden. Jedes Mal, wenn Sie den entsprechenden Text anklicken, wird er hervorgehoben und eine Bestätigungsmeldung wird angezeigt.

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

Lesen Sie schließlich den MathML-Quellcode, um zu prüfen, ob dieser Ihren Erwartungen entspricht:

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
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen gegebenen Textinhalt verwendet werden soll. In der Praxis sollte die Wahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente von Browserimplementierungen in der Regel gleich gerendert werden (für die visuelle Anzeige und für unterstützende Technologien). Jedoch haben die `<mi>` und `<mo>` Elemente spezielle unterscheidende Merkmale, die einem bewusst sein sollten. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivierung von \<mi>

Eine typografische Konvention in der Mathematik ist die Verwendung kursiver Buchstaben für Variablen. Um dies zu erleichtern, können `<mi>` Elemente mit einem einzelnen Zeichen automatisch kursiv dargestellt werden. Dies gilt für alle Buchstaben aus den lateinischen und griechischen Alphabeten. Vergleichen Sie die Darstellung der beiden `<mi>` Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> [Diese Tabelle von MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die kursiv dargestellt werden, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachung der automatischen Kursivierung von \<mi>

Um diese standardmäßige Kursivtransformation rückgängig zu machen, können Sie das Attribut `mathvariant="normal"` am `<mi>` Element anfügen. Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [Mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operatoreneigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>` Elementen abhängig von ihrem Inhalt und der Position innerhalb seines Containers definiert (Präfix, Infix oder Postfix). Betrachten wir ein konkretes Beispiel:

```html
<table>
  <tbody>
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
  </tbody>
</table>
```

Dieses Beispiel sollte ähnlich der untenstehenden Bildschirmaufnahme gerendert werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>` Elementen und dem vorausgehenden `<mo>`: kein Abstand für das Präfixzeichen Plus, etwas Abstand für das Infixzeichen Plus und ein etwas kleinerer Abstand für das Präfix-Summationszeichen.

![Screenshot der MathML-Formel mit unterschiedlichem Operatorabstand](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, die wir später noch näher erläutern werden. Merken Sie sich für jetzt, einen `<mo>` Container für Zeichen im Operator-Wörterbuch zu verwenden und Unterausdrücke korrekt mit `<mrow>` Elementen zu gruppieren, um MathML-Renderern zu helfen.

### Spotten Sie den Unterschied

Nun, da Sie mit speziellen Merkmalen von `<mi>` und `<mo>` etwas vertraut sind, möchten wir, dass Sie das `<p>` Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit einigen tatsächlichen MathML-Elementen neu schreiben. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur nur-Text-Version.

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
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel ausführlicher wurde. Erinnern Sie sich daran, dass es in diesem Tutorial darum geht, die Sprache zu lernen, aber in der Praxis wird MathML-Inhalt im Allgemeinen nicht manuell geschrieben. Weitere Informationen finden Sie auf der Seite [MathML-Autorenschaft](/de/docs/Web/MathML/Guides/Authoring).

### Erkennung dehnbarer Operatoren

Das Operator-Wörterbuch definiert eine Standard-_dehnbare_ Eigenschaft sowie die entsprechende _Dehnachse_ für einige Operatoren. Beispielsweise kann ein Operator standardmäßig vertikal gedehnt werden, um die maximale Höhe nicht-dehnbarer Geschwister innerhalb seines `<mrow>` Containers abzudecken. Durch Anpassen einer [früheren Übung](#your_turn_recognizing_token_elements) können Operatoren vertikal gedehnt werden. Können Sie sie finden?

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

Wie immer sind Sie eingeladen, den Quellcode zu lesen, wenn Sie fertig sind:

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
> Spezielle [Mathematik-Schriftarten](/de/docs/Web/MathML/Guides/Fonts) sind im Allgemeinen erforderlich, um dieses Dehnen zu ermöglichen, das vorherige Beispiel verwendet [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir einige _Token_ Elemente kennengelernt, die als Textbehälter dienen, sowie ihre unterschiedlichen Semantiken, nämlich `<mi>` (Identifier), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (generischer Text). Wir haben spezielle Unicode-Zeichen betrachtet, die häufig in mathematischen Formeln vorkommen und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>` und `<mo>` Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man _Token_ Elemente verwendet, um viel komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots) zu erstellen.

## Siehe auch

- [Das `<mi>` Element](/de/docs/Web/MathML/Reference/Element/mi)
- [Das `<mn>` Element](/de/docs/Web/MathML/Reference/Element/mn)
- [Das `<mo>` Element](/de/docs/Web/MathML/Reference/Element/mo)
- [Das `<mtext>` Element](/de/docs/Web/MathML/Reference/Element/mtext)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}
