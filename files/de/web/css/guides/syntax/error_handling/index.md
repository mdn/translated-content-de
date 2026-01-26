---
title: CSS-Fehlerbehandlung
short-title: Error handling
slug: Web/CSS/Guides/Syntax/Error_handling
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

Wenn in CSS ein Fehler wie ein ungültiger Wert oder ein fehlendes Semikolon auftritt, statt [einen Fehler wie in JavaScript auszulösen](/de/docs/Web/JavaScript/Reference/Errors), wird der Browser (oder ein anderes Nutzer-Agent) sich anmutig erholen. Browser geben keine CSS-bezogenen Warnungen oder Hinweise darauf, dass Fehler in Styles aufgetreten sind. Sie verwerfen einfach ungültigen Inhalt und parsen die folgenden gültigen Styles. Dies ist ein Feature von CSS, kein Fehler.

Dieser Leitfaden behandelt, wie CSS-{{Glossary("parser", "Parser")}} ungültiges CSS verwerfen.

## CSS-Parser-Fehler

Wenn ein CSS-Fehler auftritt, ignoriert der {{Glossary("parser", "Parser")}} des Browsers die Zeile mit den Fehlern und verwirft die minimale Menge an CSS-Code, bevor er zum normalen {{Glossary("parse", "Parsen")}} des CSS zurückkehrt. Die "Fehlerbehandlung" besteht einfach aus dem Ignorieren oder Übergehen ungültigen Inhalts.

Die Tatsache, dass Browser ungültigen Code ignorieren, ermöglicht die Verwendung neuer CSS-Funktionen, ohne sich Sorgen machen zu müssen, dass in älteren Browsern etwas kaputtgeht. Ein Browser erkennt möglicherweise eine neue Funktion nicht, aber das ist in Ordnung. Das Verwerfen ungültigen Inhalts, ohne einen Fehler auszulösen, erlaubt es, dass alte und neue Syntaxen im selben Regelwerk koexistieren, obwohl beachtet werden sollte, dass sie in dieser Reihenfolge angegeben werden. Zum Beispiel:

```css
div {
  display: inline-flex;
  display: inline flex;
}
```

Die {{cssxref("display")}}-Eigenschaft akzeptiert sowohl die alte einwertige Syntax als auch die [mehrfach-Schlagwort-Syntax](/de/docs/Web/CSS/Guides/Display/Multi-keyword_syntax). Browser rendern die alte Syntax, bis sie die neue Syntax als gültig erkennen, zu welchem Zeitpunkt die neue Syntax die alte überschreibt. Wenn ein Nutzer einen alten Browser hat, wird das gültige Fallback nicht von dem neuen CSS überschrieben, da der Browser es als ungültig wahrnimmt.

Die Art und Menge an CSS, die ein Browser aufgrund eines Fehlers ignoriert, hängt von der Art des Fehlers ab. Einige häufige Fehler sind unten aufgeführt:

- Bei [Fehlern in At-Regeln](#at-regel-fehler) hängt es von der At-Regel und der Art des Fehlers ab, ob eine einzelne Zeile oder die gesamte At-Regel ignoriert wird (fehlschlägt).
- Wenn der [Fehler in einem ungültigen Selektor liegt](#fehler_in_selektorlisten), wird der gesamte Deklarationsblock ignoriert.
- Ein [Fehler aufgrund eines fehlenden Semikolons](#fehler_innerhalb_von_css-deklarationsblöcken) zwischen Eigenschaftsdeklarationen führt zu einem ungültigen Wert, in welchem Fall mehrere Eigenschaft-Wert-Deklarationen ignoriert werden.
- Wenn der [Fehler eine Eigenschaftsbezeichnung oder einen Wert betrifft](#fehler_innerhalb_von_css-deklarationsblöcken), wie etwa ein nicht anerkannter Eigenschaftsname oder ein ungültiger Datentyp, wird die Eigenschafts-Wert-Deklaration ignoriert. Während der [Filterphase](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#filtering) werden solche syntaktisch ungültigen Deklarationen eliminiert.
- Wenn der [Fehler durch eine fehlende schließende Klammer verursacht wird](#fehler_mit_automatisch_geschlossenen_enden), hängt das Ausmaß dessen, was ignoriert wird, von der Fähigkeit des Browsers ab, den Fehler als verschachteltes CSS zu parsen.

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Browser den geparsten Inhalt anhand der erwarteten [Grammatik](#grammatikprüfung) für diese Konstruktion. Wenn der Inhalt nicht der erwarteten Grammatik für diese Konstruktion entspricht, betrachtet der Browser ihn als ungültig und ignoriert ihn.

### At-Regel-Fehler

Das `@`-Symbol, bekannt in CSS-Spezifikationen als `<at-keyword-token>`, signalisiert den Beginn einer CSS-[At-Regel](/de/docs/Web/CSS/Reference/At-rules). Sobald eine At-Regel mit dem `@`-Symbol beginnt, wird vom Standpunkt des Parsers nichts als ungültig betrachtet. Alles bis zum ersten Semikolon (`;`) oder der öffnenden geschweiften Klammer (`{`) ist Teil des Vorspanns der At-Regel. Der Inhalt jeder At-Regel wird gemäß den Grammatikregeln für die spezifische At-Regel interpretiert.

Anweisungs-At-Regeln wie {{cssxref("@import")}} und {{cssxref("@namespace")}}-Deklarationen enthalten nur einen Vorspann. Das Semikolon beendet die At-Regel sofort für [Anweisungs-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#statement_at-rules). Wenn der Inhalt des Vorspanns gemäß der Grammatik für diese At-Regel ungültig ist, wird die At-Regel ignoriert, und der Browser setzt das Parsen von CSS fort, nachdem er auf das nächste Semikolon stößt. Zum Beispiel, wenn eine `@import`-At-Regel nach einer anderen CSS-Deklaration als `@charset`, `@layer` oder anderen `@import`-Anweisungen auftritt, wird die `@import`-Deklaration ignoriert.

```css
@import "assets/fonts.css" layer(fonts);
@namespace svg url("http://www.w3.org/2000/svg");
```

Wenn der Parser auf eine geschweifte Klammer (`{`) trifft, bevor ein Semikolon gefunden wird, wird die At-Regel als Block-At-Regel geparst. [Block-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules#block_at-rules) wie {{cssxref("@font-face")}} und {{cssxref("@keyframes")}} enthalten einen Block von Deklarationen, die von geschweiften Klammern (`{}`) umgeben sind. Die öffnende geschweifte Klammer weist den Browser darauf hin, wo der Vorspann der At-Regel endet und der Körper der At-Regel beginnt. Der Parser schaut vorwärts und sucht nach passenden Blöcken (Inhalt umgeben von `()`, `{}`, oder `[]`), bis er auf eine schließende geschweifte Klammer (`}`) stößt, die nicht von anderen geschweiften Klammern geschlossen wird: Dies schließt den Körper der At-Regel.

Verschiedene At-Regeln haben unterschiedliche Grammatikregeln, unterschiedliche (oder keine) Deskriptoren und unterschiedliche Regeln dafür, was, wenn überhaupt, die gesamte At-Regel invalidiert. Die erwartete Grammatik für [jede At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) und wie Fehler behandelt werden, sind auf der jeweiligen At-Regel-Seite dokumentiert. Die Handhabung ungültigen Inhalts hängt vom Fehler ab.

Zum Beispiel erfordert die `@font-face`-Regel sowohl einen [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)- als auch einen [`src`](/de/docs/Web/CSS/Reference/At-rules/@font-face/src)-Deskriptor. Wenn einer dieser fehlt oder ungültig ist, wird die gesamte `@font-face`-Regel ungültig. Das Hinzufügen eines nicht verwandten Deskriptors, eines anderen gültigen Schriftdeskriptors mit einem ungültigen Wert oder einer Eigenschafts-Stilerklärung innerhalb des verschachtelten Blocks der `@font-face`-Regel wird die Schriftdeklaration nicht ungültig machen. Solange der Schriftname und die Schriftquelle enthalten und valide sind, wird das ungültige CSS innerhalb der At-Regel ignoriert, aber der `@font-face`-Block wird dennoch geparst.

Obwohl die Grammatik der `@keyframes`-At-Regel sehr unterschiedlich zur `@font-face`-Regel-Grammatik ist, wirkt sich die Art des Fehlers dennoch auf das aus, was ignoriert wird. Wichtige Deklarationen (gekennzeichnet mit dem {{cssxref("important")}}-Marker) und nicht animierbare Eigenschaften werden in Keyframe-Regeln ignoriert, aber sie beeinflussen nicht andere Stile, die im selben [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)-Block erklärt werden. Das Einschließen eines ungültigen Keyframe-Selektors (wie ein Prozentwert unter `0%` oder über `100%` oder eine {{cssxref("number")}}, die das `%` weglässt) macht die Keyframe-Selektorliste ungültig und daher wird der Stilblock ignoriert. Ein ungültiger Keyframe-Selektor macht nur den Stilblock des ungültigen Selektors ungültig; es führt nicht zur Ungültigkeitserklärung der gesamten `@keyframes`-Deklaration. Das Einschließen von Stilen zwischen zwei Keyframe-Selektor-Blöcken führt dagegen zur Ungültigkeitserklärung der gesamten `@keyframes`-At-Regel.

Einige At-Regeln sind fast immer gültig. Die {{cssxref("@layer")}}-At-Regel gibt es sowohl in regulärer als auch in verschachtelter Form. Die `@layer`-Deklaration syntaktisch enthält nur den Vorspann und endet mit einem Semikolon. Alternativ dazu hat die verschachtelte Syntax Schichtstile, die zwischen geschweiften Klammern nach dem Vorspann verschachtelt sind. Das Weglassen einer schließenden geschweiften Klammer mag ein logischer Fehler sein, aber es ist kein Syntaxfehler. Bei einer fehlenden schließenden Klammer in `@layer` werden alle Stile, die nach der Stelle kommen, an der die schließende Klammer hätte sein sollen, als Teil des Kaskadenschicht verstanden, die im Vorspann der At-Regel definiert ist. Das CSS ist gültig, da es keine Syntaxfehler gibt; nichts wird verworfen. Ein Syntaxfehler könnte dazu führen, dass die benannte oder anonyme Schicht leer bleibt, aber die Schicht wird trotzdem erstellt.

### Fehler in Selektorlisten

Es gibt viele Möglichkeiten, wie Sie beim Schreiben eines Selektors einen Fehler machen könnten, aber nur ungültige Selektoren führen dazu, dass eine Selektorliste ungültig wird (siehe [ungültige Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#invalid_selector_list)).

Wenn Sie einen [Klassen-Selektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), einen [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) oder einen [Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) für eine Klasse, ID oder ein Element (oder benutzerdefiniertes Element), das nicht existiert, einbeziehen, kann es ein logischer Fehler sein, aber es ist kein Syntaxfehler. Wenn jedoch ein Tippfehler in einer Pseudo-Klasse oder einem Pseudo-Element gemacht wird, kann dies einen ungültigen Selektor erstellen, den der Parser adressieren muss.

Wenn eine Selektorliste ungültige Selektoren enthält, wird der gesamte Stilblock ignoriert. Es gibt Ausnahmen: Wenn der ungültige Selektor innerhalb einer {{cssxref(":is")}}- oder {{cssxref(":where")}}-Pseudo-Klasse steht (die [verzeihende Selektorlisten](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) akzeptieren) oder der unbekannte Selektor ein [`-webkit-`-präfixiertes Pseudo-Element](#-webkit-_exception) ist, wird nur der unbekannte Selektor ignoriert, da er nicht auf etwas zutrifft. Die Selektorliste wird nicht invalidiert.

Abgesehen von diesen Ausnahmen führt ein einzelner ungültiger oder nicht unterstützter Selektor in der Selektorliste dazu, dass die gesamte Regel ungültig wird, und der gesamte Selektorblock wird ignoriert. Der Browser sucht dann nach der schließenden geschweiften Klammer und setzt das Parsen von diesem Punkt an fort.

#### `-webkit-`-Ausnahme

Aufgrund von Legacy-Problemen durch den übermäßigen Einsatz von browser-spezifischen Präfixen in Selektoren und [Eigenschaftsnamen (und Werten)](#vendor-präfixe) vermeiden Browser die übermäßige Ungültigkeitserklärung von Selektorlisten, indem sie alle [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), die mit einem case-insensitiven `-webkit-`-Präfix beginnen und nicht mit `()` enden, als gültig betrachten.

Das bedeutet, dass ein Pseudo-Element wie `::-webkit-works-only-in-samsung` die Selektorliste nicht ungültig macht, unabhängig davon, in welchem Browser der Code ausgeführt wird. In solchen Fällen wird das Pseudo-Element möglicherweise nicht vom Browser erkannt oder unterstützt, aber es wird nicht dazu führen, dass die gesamte Selektorliste und der dazugehörige Stilblock ignoriert werden. Ein unbekannter Präfix-Selektor mit der Funktionsnotation von `::-webkit-imaginary-function()` macht dagegen die gesamte Selektorliste ungültig, und der Browser wird den gesamten Selektorblock ignorieren.

### Fehler innerhalb von CSS-Deklarationsblöcken

Wenn es um CSS-Eigenschaften und -Werte innerhalb eines Deklarationsblocks geht, wird das Eigenschafts-Wert-Paar ignoriert und verworfen, wenn entweder die Eigenschaft oder der Wert ungültig ist. Wenn ein Nutzeragent eine Liste von Deklarationen parst oder interpretiert, führt an jedem Punkt unbekannte Syntax dazu, dass der Parser des Browsers nur die aktuelle Deklaration verwirft. Danach setzt er das Parsen des CSSes fort, sobald das nächste Semikolon oder die schließende geschweifte Klammer gefunden wird, je nachdem, was zuerst kommt.

Dieses Beispiel enthält einen Fehler. Der Parser ignoriert den Fehler (und die Kommentare), sucht vorwärts, bis er auf ein Semikolon trifft, und beginnt dann von neuem zu parsen:

```css-nolint example-bad
p {
  /* Invalid syntax due to missing semi-colon */
  border-color: red
  background-color: green;

  /* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

Der Grund, warum die erste Deklaration in diesem Selektorblock ungültig ist, liegt daran, dass das Semikolon fehlt und die Deklaration nicht die letzte im Block ist. Die Eigenschaft ohne das Semikolon wird ignoriert, sowie das Eigenschafts-Wert-Paar danach, weil der Browser erst nach einem Semikolon oder einer schließenden Klammer mit dem weiteren Parsen fortfährt. Genauer gesagt wird der `border-color`-Wert als `red background-color: green;` geparst, was kein gültiger {{cssxref("&lt;color&gt;")}}-Wert ist.

Der {{cssxref("border-width")}}-Wert von `100vh` ist wahrscheinlich ein Fehler, aber es ist kein Fehler. Da es syntaktisch gültig ist, wird es geparst und auf die Elemente angewendet, die den Selektor erfüllen.

#### Vendor-Präfixe

Vendor-prefixed Eigenschaftsnamen und Eigenschaftswerte, die von einem Browser nicht verstanden werden, werden als ungültig behandelt und ignoriert. Nur die individuellen Regeln, die eine ungültige Eigenschaft oder einen ungültigen Wert enthalten, werden ignoriert. Der Parser sucht nach dem nächsten Semikolon oder der schließenden geschweiften Klammer und setzt das Parsen von dort an fort.

Möglicherweise stoßen Sie auf Alt-CSS, das in etwa so aussieht:

```css example-bad
/* Prefixed values */
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: block flex;
}
/* Prefixed properties */
.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
```

In diesem Beispiel ist die letzte Deklaration in jedem Block in allen Browsern gültig — `display: flex;` und `border-radius: 50%;`. Aufgrund der [Kaskadenordnung der Erscheinung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) [Regel der Reihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers) wenden Browser alle vorangestellten Deklarationen an, die sie verstehen, und überschreiben diese Werte dann mit der standardmäßig unpräfixierten Version.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung von vorangestellten Eigenschaften oder Eigenschaftswerten. Wenn Sie sie verwenden müssen, deklarieren Sie die vorangestellten Versionen vor der unpräfixierten Version wie oben gezeigt.

### Fehler mit automatisch geschlossenen Enden

Wenn ein Stylesheet endet, während eine Regel, Deklaration, Funktion, Zeichenkette oder ein Kommentar noch offen ist, wird der Parser automatisch alles schließen, was nicht geschlossen wurde.

> [!NOTE]
> Dies gilt sowohl für externe Stylesheets, Selektorblöcke innerhalb eines HTML-{{htmlelement("style")}}-Elements als auch für Inline-Regeln innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs.

Wenn der Inhalt zwischen dem letzten Semikolon und dem Ende des Stylesheets gültig ist, selbst wenn unvollständig, wird das CSS normal geparst. Wenn Sie beispielsweise versäumen, eine `@keyframes`-Deklaration zu schließen, bevor Sie Ihre {{htmlelement("style")}} schließen, ist die Animation dennoch gültig.

```html-nolint example-bad
<style>
@keyframes move {
  100% {
    transform: translateX(100vw)
</style>
```

Hier ist die `move`-Animation gültig. Das nicht ordnungsgemäße Schließen von CSS-Anweisungen macht die Anweisungen nicht unbedingt ungültig. Das gesagt, sollte man sich die verzeihende Natur von CSS nicht zunutze machen. Schließen Sie immer alle Ihre Anweisungen und Stilblöcke. Es macht Ihr CSS lesbarer und wartbarer und stellt sicher, dass der Browser das CSS so parst, wie Sie es beabsichtigt haben.

#### Ungeöffnete Kommentare

Ungeöffnete Kommentare sind logische Fehler, keine Syntaxfehler. Wenn ein Kommentar mit `/*` beginnt, aber nicht geschlossen wird, ist aller CSS-Code bis zu einem Schließungsbegrenzer (`*/`) in einem nachfolgenden Kommentar oder dem Ende des Stylesheets, je nachdem, was zuerst kommt, Teil des Kommentars. Während ein ungeöffneter Kommentar Ihr CSS nicht ungültig macht, bewirkt er, dass das CSS nach dem öffnenden Begrenzer (`/*`) ignoriert wird.

```html example-bad
<style>
  /* this comment is not closed
  @keyframes move {
    0% {transform: translateX(0);}
    100% {transform: translateX(100vw);}
  }
</style>
<p style="/* another unclosed comment">Parsed as HTML.</p>
```

In diesem Beispiel sind die beiden CSS-Kommentare nicht geschlossen, aber das schließende `</style>`-Tag schließt den ersten Kommentar und das schließende Anführungszeichen des `style`-Attributs schließt den zweiten Kommentar.

## Grammatikprüfung

Nach dem Parsen jeder Deklaration, Stilregel, At-Regel usw. überprüft der Nutzeragent, ob die Grammatik den Regeln für diese Deklaration folgt. Beispielsweise, wenn ein Eigenschaftswert vom falschen Datentyp ist oder ein Deskriptor für die beschriebene At-Regel nicht gültig ist, wird der Inhalt, der nicht der erwarteten Grammatik entspricht, als ungültig angesehen und ignoriert.

Jede CSS-Eigenschaft akzeptiert spezifische Datentypen. Beispielsweise akzeptiert die {{cssxref("background-color")}}-Eigenschaft entweder eine gültige {{cssxref("&lt;color&gt;")}} oder ein CSS-Global-Schlüsselwort. Wenn der zugewiesene Wert einer Eigenschaft vom falschen Typ ist, wie z. B. `background-color: 45deg`, ist die Deklaration ungültig und wird daher ignoriert.

### Ungültige benutzerdefinierte Eigenschaften

Benutzerdefinierte Eigenschaften werden im Allgemeinen als gültig angesehen, wenn sie deklariert werden, können jedoch ungültiges CSS erzeugen, wenn sie verwendet werden, d.h. sie können als Wert (über die {{cssxref("var")}}-Funktion) für eine Eigenschaft verwendet werden, die diesen Werttyp nicht akzeptiert. Der Browser parst jede benutzerdefinierte Eigenschaft, wenn sie auftritt, ohne Rücksicht darauf, wo die Eigenschaft verwendet wird.

Im Allgemeinen, wenn ein Eigenschaftswert ungültig ist, wird die Deklaration ignoriert und die Eigenschaft fällt auf den letzten gültigen Wert zurück. Ungültige berechnete benutzerdefinierte Eigenschaftswerte funktionieren jedoch etwas anders.

Wenn eine `var()`-Substitution ungültig ist, wird die Deklaration nicht ignoriert und der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft wird stattdessen verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber möglicherweise nicht auf den erwarteten.

Schauen wir uns ein Beispiel an, um dieses Verhalten zu veranschaulichen:

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

Im obigen Code ist die benutzerdefinierte Eigenschaftsdeklaration gültig. Auch die `background-color`-Deklaration ist zur Berechnungszeit gültig. Wenn der Browser jedoch die benutzerdefinierte Eigenschaft in `var(--theme-color)` mit `45deg` als Wert der `background-color`-Eigenschaft ersetzt, ist die Grammatik ungültig. Ein {{cssxref("angle")}} ist kein gültiger `background-color`-Wert. In diesem Fall wird die Deklaration nicht als ungültig ignoriert. Wenn eine benutzerdefinierte Eigenschaft vom falschen Typ ist, wird, wenn die Eigenschaft vererbbar ist, der Wert vom übergeordneten Element geerbt. Wenn die Eigenschaft nicht vererbbar ist, wird der Standard-Anfangswert verwendet. Im Fall von `background-color` ist der Eigenschaftswert kein vererbter Wert, sodass der Anfangswert von `transparent` verwendet wird.

Um die Art und Weise, wie benutzerdefinierte Eigenschaften zurückfallen, besser zu kontrollieren, verwenden Sie die {{cssxref("@property")}}-At-Regel, um den Anfangswert der Eigenschaft zu definieren:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul
- [Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)-Leitfaden
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
