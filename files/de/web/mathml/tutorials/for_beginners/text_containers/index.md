---
title: MathML-Textcontainer
short-title: Text containers
slug: Web/MathML/Tutorials/For_beginners/Text_containers
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}

Jetzt, da Sie eine bessere Vorstellung von MathML haben, konzentrieren wir uns auf Textcontainer (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln verwendet werden.

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele spezielle Zeichen, zum Beispiel griechische Buchstaben (z.B. Δ), Frakturbuchstaben (z.B. 𝔄), doppelt gestrichene Buchstaben (z.B. ℂ), binäre Operatoren (z.B. ≠), Pfeile (z.B. ⇒), Integralsymbole (z.B. ∮), Summensymbole (z.B. ∑), logische Symbole (z.B. ∀), Klammern (z.B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematische Operatoren und Symbole in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basic Latin Unicode-Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments festzulegen](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) und es mit entsprechenden [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) zu versehen. Hier ist eine grundlegende Vorlage, um die UTF-8-Kodierung und die [Latin Modern Math](/de/docs/Web/MathML/Guides/Fonts#fonts_with_a_math_table)-Schriftart zu verwenden:

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

## Ein wenig Semantik

Wir haben im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Tutorials/For_beginners/Getting_started) bemerkt, dass der Text in MathML-Formeln in speziellen Containerelementen wie `<mn>` oder `<mo>` eingeschlossen ist. Allgemeiner muss jeder Text in MathML-Formeln in solchen Containerelementen, sogenannten _Token_-Elementen, enthalten sein. Darüber hinaus bietet MathML mehrere Token-Elemente, um zwischen verschiedenen Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element, das einen "Bezeichner" darstellt, der ein symbolischer Name oder beliebiger Text sein kann. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element stellt ein "numerisches Literal" oder andere Daten dar, die als numerisches Literal gerendert werden sollen. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (hexadezimaler Wert).
- Das `<mo>`-Element stellt einen Operator oder etwas dar, das als Operator gerendert werden sollte. Beispiele: `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Relation), `<mo>∑</mo>` (Summensymbol) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>if<mtext>` oder `<mtext>maps to</mtext>`.

### Aktives Lernen: Erkennen von Token-Elementen

Unten finden Sie ein komplexeres Beispiel, das besagt, dass der absolute Wert einer reellen Zahl gleich jener Zahl ist, wenn und nur wenn sie nicht negativ ist. Finden Sie die verschiedenen Token-Elemente und wofür sie verwendet werden. Jedes Mal, wenn Sie auf den entsprechenden Text klicken, wird er hervorgehoben und eine Bestätigungsmeldung wird angezeigt.

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

Lesen Sie schließlich den MathML-Quellcode, um zu verifizieren, ob das Ihren Erwartungen entspricht:

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
> Es ist manchmal schwierig, das passende Token-Element für einen gegebenen Textinhalt auszuwählen. In der Praxis sollte die Wahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente im Allgemeinen von Browserimplementierungen gleich gerendert werden (sowohl für die visuelle Darstellung als auch für unterstützende Technologien). Die `<mi>`- und `<mo>`-Elemente haben jedoch spezielle Unterscheidungsmerkmale, die man beachten sollte. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivierung von \<mi>

Eine typografische Konvention in der Mathematik besteht darin, Buchstaben für Variablen kursiv darzustellen. Um dabei zu helfen, können `<mi>`-Elemente mit einem einzigen Zeichen automatisch kursiv gerendert werden. Dies gilt für alle Buchstaben des lateinischen und griechischen Alphabets. Vergleichen Sie die Darstellung der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> **Hinweis:** [Diese Tabelle von MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die kursiv dargestellt werden, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachen der automatischen Kursivierung von \<mi>

Um diese Standardkursivtransformation rückgängig zu machen, können Sie ein `mathvariant="normal"`-Attribut am `<mi>`-Element anfügen. Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise nur die gewünschten [Mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>`-Elementen basierend auf ihrem Inhalt und ihrer Position innerhalb seines Containers (Präfix, Infix oder Suffix) definiert. Betrachten wir ein konkretes Beispiel:

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

Dieses Beispiel sollte ähnlich dem Screenshot unten gerendert werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>`-Elementen und dem vorangehenden `<mo>`: kein Abstand für das Präfix-Plus, etwas Abstand für das Infix-Plus und etwas kleinerer Abstand für das Präfix-Summersymbol.

![Screenshot der MathML-Formel mit unterschiedlichem Operatorabstand](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, die wir später noch genauer sehen werden. Erinnern Sie sich jetzt daran, einen `<mo>`-Container für Zeichen im Operator-Wörterbuch zu verwenden und Unterausdrücke mit `<mrow>`-Elementen korrekt zu gruppieren, um MathML-Renderer zu unterstützen.

### Aktives Lernen: Den Unterschied erkennen

Nun, da Sie mit den besonderen Merkmalen von `<mi>` und `<mo>` vertraut sind, lassen Sie uns das `<p>`-Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML neu schreiben. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur reinen Textversion.

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
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel ausführlicher wurde. Denken Sie daran, dass dieses Tutorial darauf abzielt, die Sprache zu erlernen, doch in der Praxis wird MathML-Inhalt in der Regel nicht manuell erstellt. Weitere Informationen finden Sie auf der Seite [MathML-Autorenschaft](/de/docs/Web/MathML/Guides/Authoring).

### Aktives Lernen: Dehnbare Operatoren

Das Operator-Wörterbuch definiert eine standardmäßige _streckbare_ Eigenschaft sowie die entsprechende _Stretch-Achse_ für einige Operatoren. Beispielsweise kann ein Operator standardmäßig vertikal gedehnt werden, um die maximale Höhe von nicht-dehnbaren Nachbarn innerhalb seines `<mrow>`-Containers abzudecken. Wenn man die Einstellungen der [vorherigen Übung](#active_learning_recognize_token_elements) ein wenig ändert, kann man Operatoren vertikal dehnbar machen. Können Sie sie finden?

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
> Besondere [Mathematikschriftarten](/de/docs/Web/MathML/Guides/Fonts) sind im Allgemeinen erforderlich, um dieses Dehnen zu ermöglichen. Das vorherige Beispiel basiert auf [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir über einige _Token_-Elemente, die als Textcontainer verwendet werden, sowie deren unterschiedliche Semantik gelernt, nämlich `<mi>` (Bezeichner), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (generischer Text). Wir haben spezielle Unicode-Zeichen gesehen, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man _Token_-Elemente verwenden kann, um viel komplexere Ausdrücke zu erstellen, wie [Brüche und Wurzeln](/de/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots).

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Reference/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Reference/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Reference/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Reference/Element/mtext)

{{PreviousMenuNext("Web/MathML/Tutorials/For_beginners/Getting_started", "Web/MathML/Tutorials/For_beginners/Fractions_and_roots", "Web/MathML/Tutorials/For_beginners")}}
