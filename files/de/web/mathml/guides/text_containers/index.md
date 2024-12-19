---
title: MathML-Textcontainer
slug: Web/MathML/Guides/Text_containers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}

Jetzt, da Sie eine bessere Vorstellung von MathML haben, konzentrieren wir uns auf Textcontainer (Variablen, Zahlen, Operatoren usw.), die als Bausteine von MathML-Formeln dienen.

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele besondere Zeichen, zum Beispiel griechische Buchstaben (z. B. Δ), Fraktur-Buchstaben (z. B. 𝔄), durchgestrichene Buchstaben (z. B. ℂ), Binäroperationen (z. B. ≠), Pfeile (z. B. ⇒), Integralzeichen (z. B. ∮), Summenzeichen (z. B. ∑), logische Symbole (z. B. ∀), Klammern (z. B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematical operators and symbols in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basic Latin Unicode-Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#specifying_your_documents_character_encoding) festzulegen und es mit geeigneten [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts) auszuliefern. Hier ist eine grundlegende Vorlage, um UTF-8-Codierung und die [Latin Modern Math](/de/docs/Web/MathML/Fonts#fonts_with_a_math_table) Schriftart zu verwenden:

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

Wir haben im Artikel [Erste Schritte mit MathML](/de/docs/Web/MathML/Guides/Getting_started) festgestellt, dass der Text in MathML-Formeln in spezifischen Containerelementen wie `<mn>` oder `<mo>` eingebettet ist. Allgemeiner muss jeder Text in MathML-Formeln in solchen Containerelementen enthalten sein, die als _Token-Elemente_ bezeichnet werden. Darüber hinaus bietet MathML mehrere Token-Elemente, um unterschiedliche Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element, das einen "Bezeichner" darstellt, der ein symbolischer Name oder beliebiger Text sein könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element repräsentiert ein "numerisches Literal" oder andere Daten, die als numerisches Literal dargestellt werden sollen. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (hexadezimaler Wert).
- Das `<mo>`-Element repräsentiert einen Operator oder alles, was als Operator dargestellt werden soll. Zum Beispiel `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Relation), `<mo>∑</mo>` (Summenzeichen) oder `<mo>[</mo>` (Klammer).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Zum Beispiel kurze Wörter in Formeln wie `<mtext>wenn<mtext>` oder `<mtext>abbildet auf</mtext>`.

### Aktives Lernen: Token-Elemente erkennen

Unten ist ein komplexeres Beispiel, das besagt, dass der Absolutwert einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn sie nicht negativ ist. Finden Sie die verschiedenen Token-Elemente und wofür sie verwendet werden. Jedes Mal, wenn Sie den entsprechenden Text anklicken, wird er hervorgehoben und eine Bestätigungsnachricht angezeigt.

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

Schließlich lesen Sie den MathML-Quellcode, um zu prüfen, ob er Ihren Erwartungen entspricht:

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
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen bestimmten Textinhalt zu verwenden ist. In der Praxis sollte die Wahl des falschen Elements keine großen Probleme verursachen, da alle Token-Elemente von Browser-Implementierungen im Allgemeinen gleich gerendert werden (für die visuelle Darstellung und für Assistenztechnologien). Dennoch haben die `<mi>`- und `<mo>`-Elemente spezielle Unterscheidungsmerkmale, die man beachten sollte. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivsetzung von \<mi>

Eine typografische Konvention in der Mathematik ist die Verwendung von kursiven Buchstaben für Variablen. Um dies zu unterstützen, können `<mi>`-Elemente mit einem einzigen Zeichen automatisch kursiv dargestellt werden. Dies gilt für alle Buchstaben aus dem lateinischen und griechischen Alphabet. Vergleichen Sie die Darstellung der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> **Hinweis:** [Diese Tabelle aus MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die der Kursivierung unterliegen, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachen der automatischen Kursivsetzung von \<mi>

Um diese standardmäßige Kursivtransformation rückgängig zu machen, können Sie ein `mathvariant="normal"`-Attribut an das `<mi>`-Element anhängen.
Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [Mathematischen Alfanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das die Standardeigenschaften von `<mo>`-Elementen je nach Inhalt und Position innerhalb seines Containers (Präfix, Infix oder Postfix) definiert. Betrachten wir ein konkretes Beispiel:

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

Dieses Beispiel sollte ähnlich dem Screenshot unten dargestellt werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>`-Elementen und dem vorangehenden `<mo>`: kein Abstand für das Präfix-Plus, etwas Abstand für das Infix-Plus und ein kleinerer Abstand für das Präfix-Summenzeichen.

![Screenshot der MathML-Formel mit unterschiedlichen Operatorabständen](operator-spacing.png)

Operatoren haben viele andere Eigenschaften, die wir später noch ausführlicher sehen werden. Merken Sie sich vorerst, ein `<mo>`-Container für Zeichen im Operator-Wörterbuch zu verwenden und Unterausdrücke richtig mit `<mrow>`-Elementen zu gruppieren, um MathML-Renderer zu unterstützen.

### Aktives Lernen: den Unterschied erkennen

Jetzt, da Sie ein wenig mit den besonderen Merkmalen von `<mi>` und `<mo>` vertraut sind, lassen Sie uns das `<p>`-Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML umschreiben. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur reinen Textversion.

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
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel ausführlicher wurde. Denken Sie daran, dass dieses Tutorial dazu dient, die Sprache zu erlernen, aber in der Praxis wird MathML-Inhalt in der Regel nicht manuell geschrieben. Weitere Informationen finden Sie auf der Seite [MathML erstellen](/de/docs/Web/MathML/Authoring).

### Aktives Lernen: dehnbare Operatoren

Das Operator-Wörterbuch definiert eine Standardeigenschaft _stretchy_ sowie die entsprechende _stretch axis_ für einige Operatoren. Ein Operator kann beispielsweise standardmäßig vertikal gestreckt werden, um die maximale Höhe der nicht dehnbaren Geschwister innerhalb seines `<mrow>`-Containers abzudecken. Indem man die [vorherige Übung](#active_learning_recognize_token_elements) ein wenig anpasst, kann man Operatoren vertikal dehnen. Können Sie sie finden?

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
> Besondere [Mathe-Schriftarten](/de/docs/Web/MathML/Fonts) sind allgemein erforderlich, um dieses Dehnen zu ermöglichen, das vorherige Beispiel stützt sich auf [Webfonts](/de/docs/Learn_web_development/Core/Text_styling/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir einige _Token-Elemente_ kennengelernt, die als Textcontainer sowie ihre unterschiedlichen Semantiken dienen, nämlich `<mi>` (Bezeichner), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (generischer Text). Wir haben spezielle Unicode-Zeichen gesehen, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man sich auf _Token-Elemente_ stützt, um viel komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Web/MathML/Guides/Fractions_and_roots) zu erstellen.

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Element/mtext)

{{PreviousMenuNext("Web/MathML/Guides/Getting_started", "Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides")}}
