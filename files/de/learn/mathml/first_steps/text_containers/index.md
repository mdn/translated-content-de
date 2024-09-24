---
title: MathML-Textcontainer
slug: Learn/MathML/First_steps/Text_containers
l10n:
  sourceCommit: 865acb22b74a49927b98267566369d4677414f53
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

Da Sie nun eine bessere Vorstellung von MathML haben, richten wir den Fokus auf Textcontainer (Variablen, Zahlen, Operatoren, ...), die als Bausteine von MathML-Formeln verwendet werden.

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
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und einige CSS-Kenntnisse zum Textstyling (lesen Sie <a href="/de/docs/Learn/CSS/Styling_text/Fundamentals">grundlegendes Text- und Schriftstyling</a> und
          <a href="/de/docs/Learn/CSS/Styling_text/Web_fonts">Webfonts</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertraut werden mit den MathML-Elementen, die zum Schreiben von Text verwendet werden, und das Bewusstsein für spezielle Verhaltensweisen.
      </td>
    </tr>
  </tbody>
</table>

## Unicode-Zeichen für Mathematik

Mathematische Formeln beinhalten viele spezielle Zeichen, zum Beispiel griechische Buchstaben (z. B. Δ), Fraktur-Buchstaben (z. B. 𝔄), doppelt geschlagene Buchstaben (z. B. ℂ), binäre Operatoren (z. B. ≠), Pfeile (z. B. ⇒), Integralsymbole (z. B. ∮), Summationssymbole (z. B. ∑), logische Symbole (z. B. ∀), Grenzen (z. B. ⌊) und viele mehr. Der Wikipedia-Artikel [Mathematische Operatoren und Symbole in Unicode](https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode) bietet einen guten Überblick über die verwendeten Zeichen.

Da die meisten dieser Zeichen nicht Teil des Basic Latin Unicode-Blocks sind, wird empfohlen, die [Zeichenkodierung Ihres Dokuments](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#specifying_your_documents_character_encoding) anzugeben und es mit den entsprechenden [Webfonts](/de/docs/Learn/CSS/Styling_text/Web_fonts) zu versehen. Hier ist eine grundlegende Vorlage zur Verwendung der UTF-8-Kodierung und der [Latin Modern Math](/de/docs/Web/MathML/Fonts#fonts_with_a_math_table)-Schriftart:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Meine Seite mit mathematischen Zeichen</title>
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

Wir haben im Artikel [Erste Schritte mit MathML](/de/docs/Learn/MathML/First_steps/Getting_started) bemerkt, dass der Text in MathML-Formeln in spezifischen Containerelementen wie `<mn>` oder `<mo>` eingebettet ist. Allgemein muss jeder Text in MathML-Formeln in solchen Containerelementen enthalten sein, die _Token_-Elemente genannt werden. Darüber hinaus stellt MathML mehrere Token-Elemente bereit, um verschiedene Bedeutungen des Textinhalts zu unterscheiden:

- Das `<mi>`-Element steht für einen "Identifikator", der ein symbolischer Name oder beliebiger Text sein könnte. Beispiele: `<mi>x</mi>` (Variable), `<mi>cos</mi>` (Funktionsname) und `<mi>π</mi>` (symbolische Konstante).
- Das `<mn>`-Element repräsentiert ein "numerisches Literal" oder andere Daten, die als numerisches Literal gerendert werden sollen. Beispiele: `<mn>2</mn>` (Ganzzahl), `<mn>0.123</mn>` (Dezimalzahl) oder `<mn>0xFFEF</mn>` (hexadezimaler Wert).
- Das `<mo>`-Element stellt einen Operator oder alles dar, was als Operator gerendert werden soll. Zum Beispiel `<mo>+</mo>` (binäre Operation), `<mo>≤</mo>` (binäre Relation), `<mo>∑</mo>` (Summensymbol) oder `<mo>[</mo>` (Grenze).
- Das `<mtext>`-Element wird verwendet, um beliebigen Text darzustellen. Beispielsweise kurze Wörter in Formeln wie `<mtext>if<mtext>` oder `<mtext>maps to</mtext>`.

### Aktives Lernen: Token-Elemente erkennen

Unten ist ein komplexeres Beispiel, das besagt, dass der Absolutwert einer reellen Zahl gleich dieser Zahl ist, wenn und nur wenn diese nicht negativ ist. Erkennen Sie die verschiedenen Token-Elemente und wofür sie verwendet werden. Jedes Mal, wenn Sie den entsprechenden Text anklicken, wird er hervorgehoben und eine Bestätigungsnachricht angezeigt.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Meine Seite mit mathematischen Zeichen</title>
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
    <input type="button" id="clearOutput" value="Zurücksetzen" />
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
      `<p><strong>Sie haben ein <code>&lt;${token.tagName}&gt;</code>-Element angeklickt.</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_token_elements', 700, 400, "", "") }}

Lesen Sie schließlich den MathML-Quelltext, um zu überprüfen, ob dies Ihrer Erwartung entspricht:

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
> Es ist manchmal schwierig zu entscheiden, welches Token-Element für einen bestimmten Textinhalt verwendet werden soll. In der Praxis sollte die Wahl des falschen Elements keine größeren Probleme verursachen, da alle Token-Elemente von Browser-Implementierungen im Allgemeinen gleich gerendert werden (für die visuelle Anzeige und für unterstützende Technologien). Die `<mi>`- und `<mo>`-Elemente haben jedoch spezielle Unterscheidungsmerkmale, die Sie beachten sollten. Diese werden in den folgenden Abschnitten erklärt.

## Automatische Kursivschreibung von \<mi>

Eine typografische Konvention in der Mathematik besteht darin, Kursivbuchstaben für Variablen zu verwenden. Um dies zu unterstützen, können `<mi>`-Elemente mit einem einzelnen Zeichen automatisch kursiv dargestellt werden. Dies gilt für alle Buchstaben des lateinischen und griechischen Alphabets. Vergleichen Sie die Darstellung der beiden `<mi>`-Elemente in der folgenden Formel:

```html
<math>
  <mi>sin</mi>
  <mi>x</mi>
</math>
```

{{ EmbedLiveSample('Automatic italicization of <mi>', 700, 50) }}

> **Hinweis:** [Diese Tabelle aus MathML Core](https://w3c.github.io/mathml-core/#italic-mappings) bietet die vollständige Liste der Zeichen, die kursiv dargestellt werden können, zusammen mit den entsprechenden kursiven Zeichen.

## Rückgängigmachen der automatischen Kursivschreibung von \<mi>

Um diese standardmäßige kursive Transformation rückgängig zu machen, können Sie dem `<mi>`-Element ein `mathvariant="normal"`-Attribut hinzufügen.
Vergleichen Sie die Darstellung der Großbuchstaben Gamma in der folgenden Formel:

```html
<math>
  <mi>Γ</mi>
  <mi mathvariant="normal">Γ</mi>
</math>
```

{{ EmbedLiveSample('Reverting automatic italicization of <mi>', 700, 50) }}

> [!NOTE]
> Obwohl Sie diese Transformation anwenden können, würden Sie normalerweise einfach die gewünschten [mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

## Operator-Eigenschaften von \<mo>

MathML enthält ein [Operator-Wörterbuch](https://w3c.github.io/mathml-core/#operator-dictionary-human), das Standardeigenschaften von `<mo>`-Elementen abhängig von ihrem Inhalt und der Position innerhalb seines Containers (Präfix, Infix oder Postfix) definiert. Betrachten wir ein konkretes Beispiel:

```html
<table>
  <tr>
    <td>Präfix-Plus</td>
    <td>
      <math>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Infix-Plus</td>
    <td>
      <math>
        <mi>j</mi>
        <mo>+</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
  <tr>
    <td>Präfix-Summenzeichen</td>
    <td>
      <math>
        <mo>∑</mo>
        <mi>i</mi>
      </math>
    </td>
  </tr>
</table>
```

Dieses Beispiel sollte ähnlich wie der folgende Screenshot gerendert werden. Beachten Sie den Abstand zwischen den `<mi>i</mi>`-Elementen und ihrem vorhergehenden `<mo>`: kein Abstand beim Präfix-Plus, etwas Abstand beim Infix-Plus und ein kleinerer Abstand beim Präfix-Summenzeichen.

![Screenshot der MathML-Formel mit unterschiedlichem Operatorabstand](operator-spacing.png)

Operatoren haben viele weitere Eigenschaften, die wir später detaillierter betrachten werden. Für jetzt, erinnern Sie sich daran, einen `<mo>`-Container für Zeichen im Operator-Wörterbuch zu verwenden und Unterausdrücke mit `<mrow>`-Elementen richtig zu gruppieren, um MathML-Renderer zu unterstützen.

### Aktives Lernen: den Unterschied erkennen

Da Sie jetzt ein wenig mit den besonderen Merkmalen von `<mi>` und `<mo>` vertraut sind, schreiben wir das `<p>`-Element im [Beispiel oben auf der Seite](#unicode-zeichen_für_mathematik) mit etwas tatsächlichem MathML um. Vergleichen Sie die visuelle Darstellung in Ihrem Browser und erklären Sie die Unterschiede zur Nur-Text-Version.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Meine Seite mit mathematischen Zeichen</title>
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
    <input id="showSolution" type="button" value="Lösung anzeigen" />
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
      <li><strong>Die <code>&lt;mi&gt;</code>-Elemente, die die Variablen "A" und "n" enthalten, werden kursiv dargestellt</strong>. Die <code>&lt;mi&gt;</code>-Elemente mit mehreren Zeichen "𝔰𝔩" oder deren Zeichen "𝔽" sind, werden jedoch weiterhin aufrecht dargestellt.</li>
      <li><strong>Es wird automatisch Abstand um die <code>&lt;mo&gt;</code>-Elemente, deren Text "∀", "∊", "=", oder ein Komma ist, hinzugefügt</strong>. Einige von ihnen haben jedoch keinen Abstand davor, während die Klammern weiterhin keinen Abstand um sich herum haben.</li>
    </ul>`,
    );
  },
  { once: true },
);
```

{{ EmbedLiveSample('active_learning_spot_the_difference', 700, 500, "", "") }}

> [!NOTE]
> Ein offensichtlicher Unterschied ist, dass der Quellcode mit MathML viel umfangreicher geworden ist. Denken Sie daran, dass es in diesem Tutorial darum geht, die Sprache zu lernen, aber in der Praxis wird MathML-Inhalt im Allgemeinen nicht manuell geschrieben. Siehe die Seite [MathML erstellen](/de/docs/Web/MathML/Authoring) für weitere Informationen.

### Aktives Lernen: dehnbare Operatoren

Das Operator-Wörterbuch definiert eine standardmäßige _stretchy_-Eigenschaft sowie die entsprechende _Stretch-Achse_ für einige Operatoren. Ein Operator kann beispielsweise standardmäßig vertikal gestreckt werden, um die maximale Höhe nicht dehnbarer Geschwister innerhalb seines `<mrow>`-Containers abzudecken. Durch eine kleine Anpassung der [vorherigen Übung](#active_learning_recognize_token_elements) können Operatoren vertikal gestreckt werden. Können Sie sie finden?

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Meine Seite mit dehnbaren Operatoren</title>
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
    <input type="button" id="clearOutput" value="Zurücksetzen" />
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
    if (token.tagName !== "mo") message = `Nein, dies ist ein ${tagName}-Element!`;
    else if (!stretchyMoElements.includes(token))
      message = `Nein, dies ist ein ${tagName}-Element, aber es wird nicht vertikal gestreckt.`;
    else
      message = `Richtig, dieses ${tagName}-Element wird tatsächlich auf die Höhe seines <code>&lt;mfrac&gt;</code>-Geschwisters gestreckt.`;
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
> Spezielle [Math-Fonts](/de/docs/Web/MathML/Fonts) sind im Allgemeinen erforderlich, um dieses Strecken zu ermöglichen. Das vorherige Beispiel basiert auf [Webfonts](/de/docs/Learn/CSS/Styling_text/Web_fonts).

## Zusammenfassung

In diesem Artikel haben wir einige _Token_-Elemente kennengelernt, die als Textcontainer verwendet werden, sowie deren unterschiedliche Semantik, nämlich `<mi>` (Identifikator), `<mn>` (Zahlen), `<mo>` (Operatoren), `<mtext>` (generischer Text). Wir haben spezielle Unicode-Zeichen gesehen, die häufig in mathematischen Formeln vorkommen, und einen Überblick über einige beobachtbare Verhaltensweisen der `<mi>`- und `<mo>`-Elemente gegeben. Im nächsten Artikel werden wir sehen, wie man sich auf _Token_-Elemente stützt, um viel komplexere Ausdrücke wie [Brüche und Wurzeln](/de/docs/Learn/MathML/First_steps/Fractions_and_roots) zu erstellen.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Getting_started", "Learn/MathML/First_steps/Fractions_and_roots", "Learn/MathML/First_steps")}}

## Siehe auch

- [Das `<mi>`-Element](/de/docs/Web/MathML/Element/mi)
- [Das `<mn>`-Element](/de/docs/Web/MathML/Element/mn)
- [Das `<mo>`-Element](/de/docs/Web/MathML/Element/mo)
- [Das `<mtext>`-Element](/de/docs/Web/MathML/Element/mtext)
